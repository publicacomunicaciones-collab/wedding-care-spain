import { ArrowRight } from 'lucide-react';
import ScrollExpandMedia from './ScrollExpandMedia';
import heroBg from '../assets/hero-bg.png';
import heroMedia from '../assets/hero-media.png';

export default function Hero() {
  return (
    <div id="hero-section-b3k9m2x4">
      <ScrollExpandMedia
        mediaType="image"
        mediaSrc={heroMedia}
        bgImageSrc={heroBg}
        title="Magical moments"
        titleLine2="for the smallest guests"
        date="Barcelona & Catalonia"
        scrollToExpand="Scroll to discover our care"
        textBlend
      >
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <p className="font-sans font-light text-stone-600 text-lg md:text-2xl mb-12">
            Bespoke childcare and curated play spaces for weddings in Barcelona and across Catalonia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              id="hero-cta-primary-v7m2n9x1"
              onClick={() => document.getElementById('contact-section-h1j2k3l4')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-5 bg-stone-900 text-white rounded-full text-sm font-semibold tracking-widest hover:bg-rose-600 transition-all shadow-xl hover:scale-105 flex items-center gap-3"
            >
              REQUEST QUOTE <ArrowRight size={18} />
            </button>
            <button
              id="hero-cta-secondary-f5w8n3r6"
              onClick={() => document.getElementById('services-section-f5w8n3r6')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-5 bg-transparent border border-stone-300 text-stone-900 rounded-full text-sm font-semibold tracking-widest hover:bg-stone-100 transition-all"
            >
              VIEW SERVICES
            </button>
          </div>
        </div>
      </ScrollExpandMedia>
    </div>
  );
}
