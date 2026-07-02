import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
import SiteJourneyForm from './SiteJourneyForm';

export default function Contact() {
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
              Request a
              <span className="font-display italic text-rose-500 block">personalized quote</span>
            </h2>
            <p className="text-stone-600 text-lg mb-12">
              We would love to hear about your special day. Fill out the form and our coordinator will reach out within 24 hours to discuss your needs.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center text-rose-500">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-stone-400 font-bold uppercase tracking-widest">Call us</p>
                  <a href="tel:+34632476557" className="text-stone-900 font-medium hover:text-rose-600 transition-colors">+34 632 47 65 57</a>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center text-rose-500">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-stone-400 font-bold uppercase tracking-widest">Email us</p>
                  <a href="mailto:info@weddingcarebarcelona.com" className="text-stone-900 font-medium hover:text-rose-600 transition-colors">info@weddingcarebarcelona.com</a>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center text-rose-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs text-stone-400 font-bold uppercase tracking-widest">Office</p>
                  <p className="text-stone-900 font-medium">Sants, Barcelona, ES</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-stone-50 p-8 md:p-12 rounded-3xl shadow-sm border border-stone-100"
          >
            <SiteJourneyForm formType="quote" successMessage="Thank you! We will contact you shortly with your custom quote.">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-2">Full Name</label>
                  <input 
                    name="name" 
                    type="text" 
                    required 
                    className="w-full bg-white border border-stone-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-2">Email Address</label>
                  <input 
                    name="email" 
                    type="email" 
                    required 
                    className="w-full bg-white border border-stone-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-2">Wedding Date</label>
                  <input 
                    name="date" 
                    type="date" 
                    className="w-full bg-white border border-stone-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-2">Package</label>
                  <select 
                    name="package" 
                    className="w-full bg-white border border-stone-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all"
                  >
                    <option>Essential</option>
                    <option>Full Wedding</option>
                    <option>Premium</option>
                    <option>Custom Request</option>
                  </select>
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-2">Tell us more (approx. number of children, venue, etc.)</label>
                <textarea 
                  name="message" 
                  rows={4} 
                  className="w-full bg-white border border-stone-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-stone-900 text-white rounded-xl text-sm font-semibold tracking-widest hover:bg-rose-600 transition-all shadow-lg"
              >
                REQUEST AVAILABILITY
              </button>
            </SiteJourneyForm>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
