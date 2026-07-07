import { useEffect } from 'react';

const SITE_URL = 'https://wedding-care.com';

/**
 * Sets document.title, the meta description, and the canonical link on
 * mount / whenever the values change. Every route must call this (even
 * with static values) so client-side navigation can't leave a previous
 * page's title/meta "stuck" on the page the user navigated to.
 *
 * @param canonicalPath - path only (e.g. "/", "/blog", "/blog/some-slug"),
 * joined with SITE_URL to build the canonical URL.
 */
export function useDocumentMeta(title: string, description: string, canonicalPath: string) {
  useEffect(() => {
    document.title = title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }

    const canonicalUrl = canonicalPath === '/' ? `${SITE_URL}/` : `${SITE_URL}${canonicalPath}`;
    let canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);
  }, [title, description, canonicalPath]);
}
