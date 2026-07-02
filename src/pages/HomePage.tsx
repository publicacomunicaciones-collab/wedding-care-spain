import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <main id="homepage-container-q1w2e3r4">
      <Hero />
      
      {/* Trust Strip */}
      <div className="bg-stone-100 py-12 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 items-center opacity-40 grayscale">
             <span className="font-display italic text-2xl">The Ritz-Carlton</span>
             <span className="font-display italic text-2xl">W Barcelona</span>
             <span className="font-display italic text-2xl">Mandarin Oriental</span>
             <span className="font-display italic text-2xl">Castell de Sant Marçal</span>
          </div>
        </div>
      </div>

      <About />
      
      {/* Quote Section */}
      <section className="py-24 bg-rose-50 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
          >
            <h3 className="font-sans font-light text-stone-900 text-3xl md:text-5xl leading-tight">
              "The best part of our wedding was seeing all the children 
              <span className="font-display italic text-rose-500"> laughing and happy</span>, while we could truly relax with our friends."
            </h3>
            <p className="mt-8 text-stone-500 font-medium tracking-widest uppercase text-sm">— Laura & Pau, Summer 2023</p>
          </motion.div>
        </div>
      </section>

      <Services />
      
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h4 className="font-display italic text-3xl text-rose-500 mb-2">150+</h4>
              <p className="text-stone-400 text-xs font-bold uppercase tracking-widest">Weddings Managed</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h4 className="font-display italic text-3xl text-rose-500 mb-2">12</h4>
              <p className="text-stone-400 text-xs font-bold uppercase tracking-widest">Certified Caregivers</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h4 className="font-display italic text-3xl text-rose-500 mb-2">4.9/5</h4>
              <p className="text-stone-400 text-xs font-bold uppercase tracking-widest">Parent Rating</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h4 className="font-display italic text-3xl text-rose-500 mb-2">Sants</h4>
              <p className="text-stone-400 text-xs font-bold uppercase tracking-widest">Barcelona Base</p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}