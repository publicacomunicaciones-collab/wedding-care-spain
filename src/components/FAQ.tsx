import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { Plus, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { pagePath, getLangFromPath } from '../utils/localePaths';

interface FaqItem {
  question: string;
  answer: string;
}

interface FAQProps {
  preview?: boolean;
}

export default function FAQ({ preview = false }: FAQProps) {
  const { t } = useTranslation('faq');
  const navigate = useNavigate();
  const location = useLocation();
  const lang = getLangFromPath(location.pathname);
  const allItems = t('items', { returnObjects: true }) as FaqItem[];
  const items = preview ? allItems.slice(0, 3) : allItems;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((current) => (current === idx ? null : idx));
  };

  return (
    <section id="faq-section-t4y6u8i0" className="py-24 md:py-32 bg-white border-t border-stone-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-sans font-extralight text-4xl md:text-6xl mb-6 text-stone-900">
              {t('heading1')}
              <span className="font-display italic text-rose-500 ml-3">{t('heading2')}</span>
            </h2>
            <p className="text-stone-500 text-lg max-w-2xl mx-auto">
              {t('subtext')}
            </p>
          </motion.div>
        </div>

        <div className="space-y-4">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="border border-stone-200 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 bg-white hover:bg-stone-50 transition-colors"
                >
                  <span className="font-medium text-stone-900">{item.question}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 text-rose-500"
                  >
                    <Plus size={20} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-stone-600 leading-relaxed">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {preview && (
          <div className="mt-10 text-center">
            <button
              onClick={() => navigate(pagePath('faq', lang))}
              className="inline-flex items-center gap-2 px-8 py-4 bg-stone-900 text-white rounded-full text-sm font-semibold tracking-widest hover:bg-rose-600 transition-colors"
            >
              {t('viewAll')} <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
