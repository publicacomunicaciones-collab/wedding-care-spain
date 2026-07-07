import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggle';
import { unlockHeroScroll } from '../utils/heroScrollLock';

export default function Navbar() {
  const { t } = useTranslation('common');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    if (isHome) {
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    } else {
      setScrolled(true);
    }
  }, [isHome]);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    unlockHeroScroll();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavigation = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (isHome) {
      scrollTo(sectionId);
    } else {
      navigate('/');
      setTimeout(() => scrollTo(sectionId), 100);
    }
  };

  const handleBlogNavigate = () => {
    setMobileMenuOpen(false);
    navigate('/blog');
  };

  return (
    <nav 
      id="navbar-container-v7m2n9x1"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div 
          data-role="logo" 
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate('/')}
        >
          <Heart className={scrolled ? 'text-rose-500' : 'text-rose-200'} size={24} />
          <span className={`font-sans text-xl tracking-tight ${scrolled ? 'text-stone-900 font-medium' : 'text-white font-light'}`}>
            Wedding<span className={`font-display italic ml-0.5 ${scrolled ? 'text-rose-600' : 'text-rose-200'}`}>Care</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <button 
            id="nav-link-services-x2n8p1m3" 
            onClick={() => handleNavigation('services-section-f5w8n3r6')}
            className={`text-sm font-medium tracking-wide transition-colors ${scrolled ? 'text-stone-600 hover:text-rose-600' : 'text-white/90 hover:text-white'}`}
          >
            {t('nav.services')}
          </button>
          <button
            id="nav-link-about-k7j2l4p9"
            onClick={() => handleNavigation('about-section-m2k4n6p8')}
            className={`text-sm font-medium tracking-wide transition-colors ${scrolled ? 'text-stone-600 hover:text-rose-600' : 'text-white/90 hover:text-white'}`}
          >
            {t('nav.ourStory')}
          </button>
          <button
            id="nav-link-blog-x3n8p1m3"
            onClick={handleBlogNavigate}
            className={`text-sm font-medium tracking-wide transition-colors ${scrolled ? 'text-stone-600 hover:text-rose-600' : 'text-white/90 hover:text-white'}`}
          >
            {t('nav.blog')}
          </button>
          <button
            id="nav-link-faq-t4y6u8i0"
            onClick={() => handleNavigation('faq-section-t4y6u8i0')}
            className={`text-sm font-medium tracking-wide transition-colors ${scrolled ? 'text-stone-600 hover:text-rose-600' : 'text-white/90 hover:text-white'}`}
          >
            {t('nav.faq')}
          </button>
          <LanguageToggle scrolled={scrolled} />
          <button
            id="nav-cta-btn-q1w2e3r4"
            onClick={() => handleNavigation('contact-section-h1j2k3l4')}
            className={`px-6 py-2.5 rounded-full text-xs font-semibold tracking-widest transition-all ${ scrolled ? 'bg-stone-900 text-white hover:bg-rose-600' : 'bg-white text-stone-900 hover:bg-rose-100' }`}
          >
            {t('nav.getQuote')}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          id="mobile-menu-toggle-v7n2m9x1"
          className="lg:hidden text-gray-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={scrolled ? 'text-stone-900' : 'text-white'} />
          ) : (
            <Menu className={scrolled ? 'text-stone-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-stone-900 transition-transform duration-500 ease-in-out lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ zIndex: 40 }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <button
            className="text-2xl font-light hover: text-white"
            onClick={() => handleNavigation('services-section-f5w8n3r6')}
          >
            {t('nav.servicesMobile')}
          </button>
          <button
            className="text-2xl font-light hover: text-white"
            onClick={() => handleNavigation('about-section-m2k4n6p8')}
          >
            {t('nav.ourStoryMobile')}
          </button>
          <button
            className="text-2xl font-light hover: text-white"
            onClick={handleBlogNavigate}
          >
            {t('nav.blogMobile')}
          </button>
          <button
            className="text-2xl font-light hover: text-white"
            onClick={() => handleNavigation('faq-section-t4y6u8i0')}
          >
            {t('nav.faqMobile')}
          </button>
          <LanguageToggle dark />
          <button
            className="mt-4 px-10 py-4 bg-rose-500 rounded-full text-lg font-medium text-white"
            onClick={() => handleNavigation('contact-section-h1j2k3l4')}
          >
            {t('nav.requestPricing')}
          </button>
        </div>
      </div>
    </nav>
  );
}