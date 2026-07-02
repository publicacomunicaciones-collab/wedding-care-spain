import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Users, Sparkles } from 'lucide-react';

const packages = [
  {
    id: "package-essencial-k2m4n6p8",
    name: "Essential",
    price: "From 350€",
    duration: "Up to 5 hours",
    capacity: "1-8 children",
    features: [
      "1-2 Certified caregivers",
      "Basic play zone setup",
      "Creative materials kit",
      "Safe toy selection",
      "Setup & dismantling"
    ],
    highlight: false
  },
  {
    id: "package-full-v7n2m9x1",
    name: "Full Wedding",
    price: "From 600€",
    duration: "Up to 9 hours",
    capacity: "9-16 children",
    features: [
      "2-3 Certified caregivers",
      "Themed decorated space",
      "Professional entertainer",
      "Age-graded activity kits",
      "Children's snack supervision",
      "Ceremony to early party coverage"
    ],
    highlight: true
  },
  {
    id: "package-premium-x2n8p1m3",
    name: "Premium",
    price: "From 800€",
    duration: "Up to 12 hours",
    capacity: "16+ children",
    features: [
      "3+ Bilingual caregivers",
      "Dedicated event coordinator",
      "Baby nap zone provision",
      "Children's photo booth",
      "Catering liaison for kids' menu",
      "Full day & overnight options"
    ],
    highlight: false
  }
];

export default function Services() {
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
              Our Care
              <span className="font-display italic text-rose-300 ml-3">Packages</span>
            </h2>
            <p className="text-stone-400 text-lg max-w-2xl mx-auto">
              Select the perfect level of care for your celebration. Each package is fully customizable to match your venue and style.
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
                  MOST POPULAR
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-light mb-2 text-white">{pkg.name}</h3>
                <p className={`text-3xl font-medium ${pkg.highlight ? 'text-white' : 'text-rose-400'}`}>
                  {pkg.price}
                </p>
              </div>

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
                onClick={() => document.getElementById('contact-section-h1j2k3l4')?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-full mt-12 py-4 rounded-xl text-sm font-semibold tracking-widest transition-colors ${
                  pkg.highlight 
                    ? 'bg-white text-stone-900 hover:bg-stone-100' 
                    : 'bg-stone-700 text-white hover:bg-stone-600'
                }`}
              >
                SELECT PACKAGE
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-stone-500 text-sm">
            * Need a specific timeframe? Extra hours available at <span className="text-rose-400">25-30€/h per caregiver</span>.
          </p>
        </div>
      </div>
    </section>
  );
}