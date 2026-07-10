import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ScrollExpandMedia from './ScrollExpandMedia';
import { pagePath, getLangFromPath } from '../utils/localePaths';
import heroBg from '../assets/hero-bg.jpg';
import heroBgWebp from '../assets/hero-bg.webp';
import heroMedia from '../assets/hero-media.jpg';
import heroMediaWebp from '../assets/hero-media.webp';

export default function Hero() {
  const { t } = useTranslation('hero');
  const navigate = useNavigate();
  const location = useLocation();
  const lang = getLangFromPath(location.pathname);

  return (
    <div id="hero-section-b3k9m2x4">
      <ScrollExpandMedia
        mediaType="image"
        mediaSrc={heroMedia}
        mediaSrcWebp={heroMediaWebp}
        bgImageSrc={heroBg}
        bgImageSrcWebp={heroBgWebp}
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
              onClick={() => navigate(pagePath('contact', lang))}
              className="px-10 py-5 bg-stone-900 text-white rounded-full text-sm font-semibold tracking-widest hover:bg-rose-600 transition-all shadow-xl hover:scale-105 flex items-center gap-3"
            >
              {t('ctaPrimary')} <ArrowRight size={18} />
            </button>
            <button
              id="hero-cta-secondary-f5w8n3r6"
              onClick={() => navigate(pagePath('services', lang))}
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
