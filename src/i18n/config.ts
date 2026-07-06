import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import commonEn from './locales/en/common.json';
import heroEn from './locales/en/hero.json';
import aboutEn from './locales/en/about.json';
import servicesEn from './locales/en/services.json';
import contactEn from './locales/en/contact.json';
import formEn from './locales/en/form.json';
import footerEn from './locales/en/footer.json';
import homeEn from './locales/en/home.json';
import blogEn from './locales/en/blog.json';
import blogArticleEn from './locales/en/blogArticle.json';
import blogPostsEn from './locales/en/blogPosts.json';

import commonEs from './locales/es/common.json';
import heroEs from './locales/es/hero.json';
import aboutEs from './locales/es/about.json';
import servicesEs from './locales/es/services.json';
import contactEs from './locales/es/contact.json';
import formEs from './locales/es/form.json';
import footerEs from './locales/es/footer.json';
import homeEs from './locales/es/home.json';
import blogEs from './locales/es/blog.json';
import blogArticleEs from './locales/es/blogArticle.json';
import blogPostsEs from './locales/es/blogPosts.json';

export const LANG_STORAGE_KEY = 'wc-lang';

const stored = localStorage.getItem(LANG_STORAGE_KEY);
const initialLng = stored === 'en' || stored === 'es' ? stored : 'es';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      common: commonEn,
      hero: heroEn,
      about: aboutEn,
      services: servicesEn,
      contact: contactEn,
      form: formEn,
      footer: footerEn,
      home: homeEn,
      blog: blogEn,
      blogArticle: blogArticleEn,
      blogPosts: blogPostsEn,
    },
    es: {
      common: commonEs,
      hero: heroEs,
      about: aboutEs,
      services: servicesEs,
      contact: contactEs,
      form: formEs,
      footer: footerEs,
      home: homeEs,
      blog: blogEs,
      blogArticle: blogArticleEs,
      blogPosts: blogPostsEs,
    },
  },
  lng: initialLng,
  fallbackLng: 'es',
  defaultNS: 'common',
  interpolation: { escapeValue: false },
});

export default i18n;
