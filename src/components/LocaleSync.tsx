import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getLangFromPath } from '../utils/localePaths';

/**
 * The URL is the single source of truth for language: /en/... is
 * English, everything else is Spanish. This keeps i18n.language and
 * <html lang> in sync with the current route on every navigation,
 * including browser back/forward.
 */
export default function LocaleSync() {
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    const urlLang = getLangFromPath(location.pathname);
    if (i18n.language !== urlLang) {
      i18n.changeLanguage(urlLang);
    }
    document.documentElement.lang = urlLang;
  }, [location.pathname, i18n]);

  return null;
}
