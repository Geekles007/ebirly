'use client';

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { type Lang, type Dict, dicts } from '@/lib/i18n';

type LangCtx = { lang: Lang; t: Dict; setLang: (l: Lang) => void };

const Ctx = createContext<LangCtx>({
  lang: 'en',
  t: dicts.en,
  setLang: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-lang') as Lang | null;
    if (saved && saved in dicts) setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem('portfolio-lang', l);
  };

  return (
    <Ctx.Provider value={{ lang, t: dicts[lang], setLang }}>
      {children}
    </Ctx.Provider>
  );
}

export const useLang = () => useContext(Ctx);
