export type Lang = 'es' | 'en';

export type PageKey = 'home' | 'services' | 'about' | 'testimonials' | 'faq' | 'contact' | 'blog';

/**
 * Every static page's URL in each language. Spanish is the default
 * (unprefixed) locale; English lives under /en/... with translated
 * path segments so both versions read naturally to a native speaker
 * and to search engines.
 */
export const PAGES: Record<PageKey, Record<Lang, string>> = {
  home: { es: '/', en: '/en' },
  services: { es: '/servicios', en: '/en/services' },
  about: { es: '/nuestra-historia', en: '/en/our-story' },
  testimonials: { es: '/testimonios', en: '/en/testimonials' },
  faq: { es: '/faq', en: '/en/faq' },
  contact: { es: '/contacto', en: '/en/contact' },
  blog: { es: '/blog', en: '/en/blog' },
};

export function pagePath(key: PageKey, lang: Lang): string {
  return PAGES[key][lang];
}

export function blogArticlePath(slug: string, lang: Lang): string {
  return lang === 'en' ? `/en/blog/${slug}` : `/blog/${slug}`;
}

export function getLangFromPath(pathname: string): Lang {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'es';
}

/**
 * Given the current pathname, return the equivalent URL in targetLang.
 * Used by the language toggle (to switch language without losing the
 * current page) and by hreflang/canonical tag generation.
 */
export function getAlternatePath(pathname: string, targetLang: Lang): string {
  const esBlogMatch = pathname.match(/^\/blog\/(.+)$/);
  if (esBlogMatch) return blogArticlePath(esBlogMatch[1], targetLang);

  const enBlogMatch = pathname.match(/^\/en\/blog\/(.+)$/);
  if (enBlogMatch) return blogArticlePath(enBlogMatch[1], targetLang);

  const entry = Object.values(PAGES).find((p) => p.es === pathname || p.en === pathname);
  return entry ? entry[targetLang] : PAGES.home[targetLang];
}
