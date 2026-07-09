import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, Clock, Users, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { packagesMeta } from '../data/packages';

interface PackageText {
  name: string;
  price: string;
  duration: string;
  capacity: string;
  features: string[];
}

interface ServicesProps {
  preview?: boolean;
}

export default function Services({ preview = false }: ServicesProps) {
  const { t } = useTranslation('services');
  const navigate = useNavigate();
  const translatedPackages = t('packages', { returnObjects: true }) as Record<string, PackageText>;
  const packages = packagesMeta.map((meta) => ({ ...meta, ...translatedPackages[meta.id] }));

  return (
    <section
      id="services-section-f5w8n3r6"
      className="py-24 md:py-32 bg-stone-900 text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-sans font-extralight text-4xl md:text-6xl mb-6 text-white">
              {t('heading1')}
              <span className="font-display italic text-rose-300 ml-3">{t('heading2')}</span>
            </h2>
            <p className="text-stone-400 text-lg max-w-2xl mx-auto">
              {t('subtext')}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className={`relative p-8 rounded-3xl transition-all duration-300 ${
                pkg.highlight
                  ? 'bg-rose-600 shadow-2xl scale-105 z-10'
                  : 'bg-stone-800/50 border border-stone-700 hover:border-stone-500'
              }`}
            >
              {pkg.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-rose-600 px-4 py-1 rounded-full text-xs font-bold tracking-widest">
                  {t('mostPopular')}
                </div>
              )}

              <div className={preview ? '' : 'mb-8'}>
                <h3 className="text-2xl font-light mb-2 text-white">{pkg.name}</h3>
                <p className={`text-3xl font-medium ${pkg.highlight ? 'text-white' : 'text-rose-400'}`}>
                  {pkg.price}
                </p>
              </div>

              {preview ? (
                <div className="flex items-center gap-3 text-sm text-stone-300 mt-4">
                  <Clock size={16} className={pkg.highlight ? 'text-rose-200' : 'text-rose-400'} />
                  <span>{pkg.duration}</span>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-10">
                    <div className="flex items-center gap-3 text-sm text-stone-300">
                      <Clock size={16} className={pkg.highlight ? 'text-rose-200' : 'text-rose-400'} />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-stone-300">
                      <Users size={16} className={pkg.highlight ? 'text-rose-200' : 'text-rose-400'} />
                      <span>{pkg.capacity}</span>
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <CheckCircle2 size={18} className={pkg.highlight ? 'text-rose-200' : 'text-rose-400'} />
                        <span className="text-sm text-stone-200">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => navigate('/contacto')}
                    className={`w-full mt-12 py-4 rounded-xl text-sm font-semibold tracking-widest transition-colors ${
                      pkg.highlight
                        ? 'bg-white text-stone-900 hover:bg-stone-100'
                        : 'bg-stone-700 text-white hover:bg-stone-600'
                    }`}
                  >
                    {t('selectPackage')}
                  </button>
                </>
              )}
            </motion.div>
          ))}
        </div>

        {preview ? (
          <div className="mt-16 text-center">
            <button
              onClick={() => navigate('/servicios')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-stone-900 rounded-full text-sm font-semibold tracking-widest hover:bg-rose-100 transition-colors"
            >
              {t('viewAll')} <ArrowRight size={18} />
            </button>
          </div>
        ) : (
          <div className="mt-16 text-center">
            <p className="text-stone-500 text-sm">
              {t('footnotePrefix')} <span className="text-rose-400">{t('footnoteHighlight')}</span>.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
