import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Star, Quote, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Testimonial {
  quote: string;
  names: string;
  venue: string;
  badge: string;
  ages: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  badgeClassName: string;
  delay: number;
}

function TestimonialCard({ testimonial, badgeClassName, delay }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm flex flex-col"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
          ))}
        </div>
        <Quote size={28} className="text-rose-200 flex-shrink-0" />
      </div>

      <p className="italic text-stone-700 leading-relaxed mb-6 flex-1">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      <div className="pt-4 border-t border-stone-100">
        <p className="font-semibold text-stone-900">{testimonial.names}</p>
        <p className="text-sm text-stone-500 mb-3">{testimonial.venue}</p>
        <div className="flex flex-wrap gap-2">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${badgeClassName}`}>
            {testimonial.badge}
          </span>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-stone-100 text-stone-600">
            {testimonial.ages}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

interface TestimonialsProps {
  preview?: boolean;
}

export default function Testimonials({ preview = false }: TestimonialsProps) {
  const { t } = useTranslation('testimonials');
  const navigate = useNavigate();
  const allCouples = t('couples', { returnObjects: true }) as Testimonial[];
  const professionals = t('professionals', { returnObjects: true }) as Testimonial[];
  const couples = preview ? allCouples.slice(0, 3) : allCouples;

  return (
    <section id="testimonials-section-w3e5r7t9" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-rose-50 text-rose-600 text-xs font-bold uppercase tracking-widest mb-6">
              {t('badge')}
            </span>
            <h2 className="font-sans font-extralight text-4xl md:text-6xl mb-6 text-stone-900">
              {t('heading1')}
              <span className="font-display italic text-rose-500 ml-3">{t('heading2')}</span>
            </h2>
            <p className="text-stone-500 text-lg max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </motion.div>
        </div>

        {!preview && (
          <h3 className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-6">
            {t('couplesLabel')}
          </h3>
        )}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${preview ? '' : 'mb-16'}`}>
          {couples.map((testimonial, idx) => (
            <TestimonialCard
              key={idx}
              testimonial={testimonial}
              badgeClassName="bg-rose-100 text-rose-700"
              delay={idx * 0.08}
            />
          ))}
        </div>

        {preview ? (
          <div className="mt-16 text-center">
            <button
              onClick={() => navigate('/testimonios')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-stone-900 text-white rounded-full text-sm font-semibold tracking-widest hover:bg-rose-600 transition-colors"
            >
              {t('viewAll')} <ArrowRight size={18} />
            </button>
          </div>
        ) : (
          <>
            <h3 className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-6">
              {t('professionalsLabel')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {professionals.map((testimonial, idx) => (
                <TestimonialCard
                  key={idx}
                  testimonial={testimonial}
                  badgeClassName="bg-emerald-100 text-emerald-700"
                  delay={idx * 0.08}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
