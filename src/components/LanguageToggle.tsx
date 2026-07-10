import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAlternatePath, getLangFromPath } from '../utils/localePaths';

interface LanguageToggleProps {
  scrolled?: boolean;
  dark?: boolean;
}

export default function LanguageToggle({ scrolled, dark }: LanguageToggleProps) {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const currentLang = getLangFromPath(location.pathname);

  const setLang = (lng: 'en' | 'es') => {
    if (lng === currentLang) return;
    navigate(getAlternatePath(location.pathname, lng));
  };

  const isLight = dark ? false : scrolled;

  return (
    <div
      className={`flex items-center gap-1 rounded-full border px-1 py-1 text-xs font-semibold tracking-wide ${
        isLight ? 'border-stone-300' : 'border-white/30'
      }`}
    >
      {(['es', 'en'] as const).map((l) => {
        const active = currentLang === l;
        return (
          <button
            key={l}
            type="button"
            onClick={() => setLang(l)}
            aria-label={l === 'es' ? t('common:langToggle.switchToEs') : t('common:langToggle.switchToEn')}
            aria-pressed={active}
            className={`px-2 py-1 rounded-full transition-colors ${
              active
                ? isLight
                  ? 'bg-stone-900 text-white'
                  : 'bg-white text-stone-900'
                : isLight
                ? 'text-stone-500 hover:text-stone-900'
                : 'text-white/70 hover:text-white'
            }`}
          >
            {l.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
