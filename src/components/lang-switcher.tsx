'use client';

import { useLang } from '@/contexts/lang';
import { type Lang } from '@/lib/i18n';

const LANGS: { code: Lang; label: string }[] = [
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' },
];

export default function LangSwitcher() {
  const { lang, setLang } = useLang();

  return (
    <div
      style={{
        display: 'inline-flex',
        border: '1px solid var(--line-2)',
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
      }}
      role="group"
      aria-label="Language selector"
    >
      {LANGS.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          style={{
            background:    lang === code ? 'var(--fg)' : 'transparent',
            color:         lang === code ? 'var(--bg)' : 'var(--fg-dim)',
            border:        0,
            padding:       '7px 11px',
            letterSpacing: '.1em',
            fontFamily:    'var(--font-mono)',
            fontSize:      11,
            cursor:        'none',
            transition:    'background .2s, color .2s',
          }}
          aria-pressed={lang === code}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
