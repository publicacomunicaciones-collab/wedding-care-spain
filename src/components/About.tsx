import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Baby, Star, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import aboutMediaWebp from '../assets/about-media.webp';
import aboutMediaFallback from '../assets/about-media.jpg';

const featureIcons = [ShieldCheck, Baby, Star];

interface AboutFeature {
  title: string;
  desc: string;
}

interface AboutProps {
  preview?: boolean;
}

export default function About({ preview = false }: AboutProps) {
  const { t } = useTranslation('about');
  const navigate = useNavigate();
  const features = t('features', { returnObjects: true }) as AboutFeature[];

  return (
    <section
      id="about-section-m2k4n6p8"
      className="py-24 md:py-32 bg-stone-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-sans font-light text-stone-900 text-4xl md:text-5xl mb-8">
              {t('heading1')}
              <span id="about-accent-v7n2m9x1" className="font-display italic text-rose-500 block">{t('heading2')}</span>
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-6">
              {t('paragraph1')}
            </p>

            {preview ? (
              <button
                onClick={() => navigate('/nuestra-historia')}
                className="inline-flex items-center gap-2 text-rose-600 font-semibold hover:text-rose-700 transition-colors"
              >
                {t('viewMore')} <ArrowRight size={18} />
              </button>
            ) : (
              <>
                <p className="text-stone-600 text-lg leading-relaxed mb-10">
                  {t('paragraph2')}
                </p>

                <div className="grid grid-cols-1 gap-6">
                  {features.map((item, idx) => {
                    const Icon = featureIcons[idx];
                    return (
                      <div key={idx} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <Icon className="text-rose-500" size={28} />
                        </div>
                        <div>
                          <h3 className="font-medium text-stone-900">{item.title}</h3>
                          <p className="text-stone-500 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <picture>
                <source srcSet={aboutMediaWebp} type="image/webp" />
                <img
                  src={aboutMediaFallback}
                  alt={t('imageAlt')}
                  className="w-full h-full object-cover"
                />
              </picture>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-2xl shadow-xl hidden md:block max-w-xs">
              <p className="text-rose-500 font-display italic text-2xl mb-2">"{t('testimonialQuote')}"</p>
              <p className="text-stone-500 text-sm">{t('testimonialAuthor')}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
