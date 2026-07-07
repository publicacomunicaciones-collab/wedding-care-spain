import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ScrollExpandMedia from './ScrollExpandMedia';
import { unlockHeroScroll } from '../utils/heroScrollLock';
import heroBg from '../assets/hero-bg.png';
import heroMedia from '../assets/hero-media.png';

export default function Hero() {
  const { t } = useTranslation('hero');

  return (
    <div id="hero-section-b3k9m2x4">
      <ScrollExpandMedia
        mediaType="image"
        mediaSrc={heroMedia}
        bgImageSrc={heroBg}
        title={t('title')}
        titleLine2={t('titleLine2')}
        date={t('date')}
        scrollToExpand={t('scrollToExpand')}
        textBlend
      >
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <p className="font-sans font-light text-stone-600 text-lg md:text-2xl mb-12">
            {t('paragraph')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              id="hero-cta-primary-v7m2n9x1"
              onClick={() => { unlockHeroScroll(); document.getElementById('contact-section-h1j2k3l4')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="px-10 py-5 bg-stone-900 text-white rounded-full text-sm font-semibold tracking-widest hover:bg-rose-600 transition-all shadow-xl hover:scale-105 flex items-center gap-3"
            >
              {t('ctaPrimary')} <ArrowRight size={18} />
            </button>
            <button
              id="hero-cta-secondary-f5w8n3r6"
              onClick={() => { unlockHeroScroll(); document.getElementById('services-section-f5w8n3r6')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="px-10 py-5 bg-transparent border border-stone-300 text-stone-900 rounded-full text-sm font-semibold tracking-widest hover:bg-stone-100 transition-all"
            >
              {t('ctaSecondary')}
            </button>
          </div>
        </div>
      </ScrollExpandMedia>
    </div>
  );
}
