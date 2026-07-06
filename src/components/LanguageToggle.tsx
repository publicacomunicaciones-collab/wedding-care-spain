import { useTranslation } from 'react-i18next';
import { LANG_STORAGE_KEY } from '../i18n/config';

interface LanguageToggleProps {
  scrolled?: boolean;
  dark?: boolean;
}

export default function LanguageToggle({ scrolled, dark }: LanguageToggleProps) {
  const { i18n, t } = useTranslation();

  const setLang = (lng: 'en' | 'es') => {
    i18n.changeLanguage(lng);
    localStorage.setItem(LANG_STORAGE_KEY, lng);
  };

  const isLight = dark ? false : scrolled;

  return (
    <div
      className={`flex items-center gap-1 rounded-full border px-1 py-1 text-xs font-semibold tracking-wide ${
        isLight ? 'border-stone-300' : 'border-white/30'
      }`}
    >
      {(['es', 'en'] as const).map((l) => {
        const active = i18n.language === l;
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
