'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/contexts/lang';
import { type Lang } from '@/lib/i18n';

const LANGS: { code: Lang; label: string; name: string }[] = [
  { code: 'fr', label: 'FR', name: 'Français' },
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'ru', label: 'RU', name: 'Русский' },
];

export default function LangSwitcher() {
  const { lang, setLang, t } = useLang();
  const idx = Math.max(0, LANGS.findIndex((l) => l.code === lang));

  return (
    <div className='seg' role='group' aria-label={t.nav.lang}>
      <motion.span
        className='seg-thumb'
        aria-hidden
        style={{ width: `calc((100% - 6px) / ${LANGS.length})`, left: 3 }}
        animate={{ x: `${idx * 100}%` }}
        transition={{ type: 'spring', stiffness: 420, damping: 36 }}
      />
      {LANGS.map((l) => (
        <button key={l.code} type='button' onClick={() => setLang(l.code)} aria-pressed={lang === l.code} lang={l.code} title={l.name}>
          {l.label}
        </button>
      ))}
    </div>
  );
}
