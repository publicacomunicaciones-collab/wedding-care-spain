import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SiteJourneyForm from './SiteJourneyForm';

interface ContactProps {
  preview?: boolean;
}

export default function Contact({ preview = false }: ContactProps) {
  const { t } = useTranslation('contact');
  const navigate = useNavigate();
  return (
    <section 
      id="contact-section-h1j2k3l4" 
      className="py-24 md:py-32 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-sans font-light text-stone-900 text-4xl md:text-5xl mb-8">
              {t('heading1')}
              <span className="font-display italic text-rose-500 block">{t('heading2')}</span>
            </h2>
            <p className="text-stone-600 text-lg mb-12">
              {t('intro')}
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center text-rose-500">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-stone-500 font-bold uppercase tracking-widest">{t('callUs')}</p>
                  <a href="tel:+34632476557" className="text-stone-900 font-medium hover:text-rose-600 transition-colors">+34 632 47 65 57</a>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center text-rose-500">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-stone-500 font-bold uppercase tracking-widest">{t('emailUs')}</p>
                  <a href="mailto:hola@wedding-care.com" className="text-stone-900 font-medium hover:text-rose-600 transition-colors">hola@wedding-care.com</a>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center text-rose-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs text-stone-500 font-bold uppercase tracking-widest">{t('office')}</p>
                  <p className="text-stone-900 font-medium">{t('officeAddress')}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`bg-stone-50 rounded-3xl shadow-sm border border-stone-100 ${preview ? 'p-8 md:p-12 flex flex-col items-center justify-center text-center' : 'p-8 md:p-12'}`}
          >
          {preview ? (
            <>
              <p className="text-stone-600 text-lg mb-8">{t('intro')}</p>
              <button
                onClick={() => navigate('/contacto')}
                className="inline-flex items-center gap-2 px-8 py-4 bg-stone-900 text-white rounded-xl text-sm font-semibold tracking-widest hover:bg-rose-600 transition-colors"
              >
                {t('viewMore')} <ArrowRight size={18} />
              </button>
            </>
          ) : (
            <SiteJourneyForm formType="quote" successMessage={t('successMessage')}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="contact-form-name" className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2">{t('fullName')}</label>
                  <input
                    id="contact-form-name"
                    name="name"
                    type="text"
                    required
                    className="w-full bg-white border border-stone-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="contact-form-email" className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2">{t('emailAddress')}</label>
                  <input
                    id="contact-form-email"
                    name="email"
                    type="email"
                    required
                    className="w-full bg-white border border-stone-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="contact-form-date" className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2">{t('weddingDate')}</label>
                  <input
                    id="contact-form-date"
                    name="date"
                    type="date"
                    className="w-full bg-white border border-stone-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="contact-form-package" className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2">{t('package')}</label>
                  <select
                    id="contact-form-package"
                    name="package"
                    className="w-full bg-white border border-stone-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all"
                  >
                    <option>{t('options.essential')}</option>
                    <option>{t('options.fullWedding')}</option>
                    <option>{t('options.premium')}</option>
                    <option>{t('options.custom')}</option>
                  </select>
                </div>
              </div>

              <div className="mb-8">
                <label htmlFor="contact-form-message" className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2">{t('message')}</label>
                <textarea
                  id="contact-form-message"
                  name="message"
                  rows={4}
                  className="w-full bg-white border border-stone-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-stone-900 text-white rounded-xl text-sm font-semibold tracking-widest hover:bg-rose-600 transition-all shadow-lg"
              >
                {t('submit')}
              </button>
            </SiteJourneyForm>
          )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
