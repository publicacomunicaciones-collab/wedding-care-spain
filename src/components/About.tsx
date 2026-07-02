import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Baby, Star } from 'lucide-react';
import aboutMedia from '../assets/about-media.png';

const features = [
  {
    icon: ShieldCheck,
    title: "Certified Caregivers",
    desc: "Our team consists of qualified educators and caregivers with specialized training in pediatric first aid and event safety.",
  },
  {
    icon: Baby,
    title: "Curated Play Spaces",
    desc: "We design aesthetic 'children's corners' that blend seamlessly with your wedding décor while offering age-appropriate fun.",
  },
  {
    icon: Star,
    title: "Structured Activities",
    desc: "From creative workshops to themed games, we ensure children of all ages are engaged while you enjoy your celebration.",
  }
];

export default function About() {
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
              Elevating the
              <span id="about-accent-v7n2m9x1" className="font-display italic text-rose-500 block">Guest Experience</span>
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-6">
              WeddingCare Barcelona was born from a simple observation: children are the heart of family celebrations, but weddings are designed for adults. 
            </p>
            <p className="text-stone-600 text-lg leading-relaxed mb-10">
              We bridge that gap by creating immersive, beautiful, and safe environments where little ones can celebrate in their own way. From Sants to the wider Catalonia region, we handle everything—from setup to supervised activities—so you and your guests can celebrate with peace of mind.
            </p>
            
            <div className="grid grid-cols-1 gap-6">
              {features.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <item.icon className="text-rose-500" size={28} />
                  </div>
                  <div>
                    <h3 className="font-medium text-stone-900">{item.title}</h3>
                    <p className="text-stone-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={aboutMedia}
                alt="Certified caregivers supervising children in a beautifully decorated wedding play area"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-2xl shadow-xl hidden md:block max-w-xs">
              <p className="text-rose-500 font-display italic text-2xl mb-2">"A game-changer for our wedding"</p>
              <p className="text-stone-500 text-sm">- Marta & Joan, Barcelona</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
