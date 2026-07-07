import { useEffect } from 'react';

/**
 * Sets document.title and the meta description on mount / whenever the
 * values change. Every route must call this (even with static values)
 * so client-side navigation can't leave a previous page's title/meta
 * "stuck" on the page the user navigated to.
 */
export function useDocumentMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }
  }, [title, description]);
}
