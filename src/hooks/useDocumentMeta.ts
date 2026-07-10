import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getAlternatePath } from '../utils/localePaths';

const SITE_URL = 'https://wedding-care.com';

function upsertLink(selector: string, attrs: Record<string, string>): void {
  let el = document.querySelector<HTMLLinkElement>(selector);
  if (!el) {
    el = document.createElement('link');
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([key, value]) => el!.setAttribute(key, value));
}

/**
 * Sets document.title, the meta description, the canonical link, and
 * hreflang alternate links on mount / whenever they change. Every
 * route must call this (even with static values) so client-side
 * navigation can't leave a previous page's title/meta "stuck" on the
 * page the user navigated to.
 *
 * The canonical URL and hreflang alternates are derived from the
 * current route automatically (via localePaths.ts) rather than passed
 * in, since each page component is shared between its Spanish and
 * English route.
 */
export function useDocumentMeta(title: string, description: string) {
  const location = useLocation();

  useEffect(() => {
    document.title = title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }

    const currentPath = location.pathname;
    const esPath = getAlternatePath(currentPath, 'es');
    const enPath = getAlternatePath(currentPath, 'en');

    upsertLink('link[rel="canonical"]', { rel: 'canonical', href: `${SITE_URL}${currentPath}` });
    upsertLink('link[rel="alternate"][hreflang="es"]', { rel: 'alternate', hreflang: 'es', href: `${SITE_URL}${esPath}` });
    upsertLink('link[rel="alternate"][hreflang="en"]', { rel: 'alternate', hreflang: 'en', href: `${SITE_URL}${enPath}` });
    upsertLink('link[rel="alternate"][hreflang="x-default"]', { rel: 'alternate', hreflang: 'x-default', href: `${SITE_URL}${esPath}` });
  }, [title, description, location.pathname]);
}
