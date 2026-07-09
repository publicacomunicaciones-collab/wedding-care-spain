import React from 'react';
import { Heart } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { unlockHeroScroll } from '../utils/heroScrollLock';

export default function Footer() {
  const { t } = useTranslation('footer');
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (sectionId: string | null, path: string = '/') => {
    // If not on the target path, navigate there first
    if (location.pathname !== path) {
      navigate(path);
      // Schedule scroll after navigation completes
      if (sectionId) {
        setTimeout(() => {
          unlockHeroScroll();
          document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        // If no section, scroll to top after navigation
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      }
    } else {
      // Already on target path, scroll directly
      if (sectionId) {
        unlockHeroScroll();
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <footer id="footer-section-v7m2n9x1" className="bg-stone-950 text-stone-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div data-role="logo" className="flex items-center gap-2 mb-6">
              <Heart className="text-rose-500" size={20} />
              <span className="font-sans text-xl tracking-tight text-white font-light">
                Wedding<span className="font-display italic ml-0.5">Care</span>
              </span>
            </div>
            <p className="max-w-sm text-stone-500 leading-relaxed">
              {t('tagline')}
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 uppercase text-xs tracking-widest">{t('quickLinks')}</h4>
            <ul className="space-y-4 text-sm">
              <li><button onClick={() => handleNavigation(null)} className="hover:text-rose-400 transition-colors">{t('home')}</button></li>
              <li><button onClick={() => handleNavigation('services-section-f5w8n3r6')} className="hover:text-rose-400 transition-colors">{t('services')}</button></li>
              <li><button onClick={() => handleNavigation('about-section-m2k4n6p8')} className="hover:text-rose-400 transition-colors">{t('ourStory')}</button></li>
              <li><button onClick={() => handleNavigation(null, '/blog')} className="hover:text-rose-400 transition-colors">{t('blog')}</button></li>
              <li><button onClick={() => handleNavigation('testimonials-section-w3e5r7t9')} className="hover:text-rose-400 transition-colors">{t('testimonials')}</button></li>
              <li><button onClick={() => handleNavigation('faq-section-t4y6u8i0')} className="hover:text-rose-400 transition-colors">{t('faq')}</button></li>
              <li><button onClick={() => handleNavigation('contact-section-h1j2k3l4')} className="hover:text-rose-400 transition-colors">{t('contact')}</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 uppercase text-xs tracking-widest">{t('location')}</h4>
            <p className="text-sm mb-2 text-white">{t('locationLine1')}</p>
            <p className="text-sm mb-4 text-white">{t('locationLine2')}</p>
            <p className="text-sm text-rose-400">+34 632 47 65 57</p>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white">
            {t('copyright', { year: new Date().getFullYear() })}
          </p>
          
        </div>
      </div>
    </footer>
  );
}
