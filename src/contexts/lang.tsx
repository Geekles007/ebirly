'use client';

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { type Lang, type Dict, dicts } from '@/lib/i18n';

type LangCtx = { lang: Lang; t: Dict; setLang: (l: Lang) => void };

const Ctx = createContext<LangCtx>({ lang: 'fr', t: dicts.fr, setLang: () => {} });

const STORAGE_KEY = 'portfolio-lang';

function detect(): Lang {
  const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
  if (saved && saved in dicts) return saved;
  const nav = (navigator.language || 'fr').slice(0, 2).toLowerCase();
  return nav === 'en' || nav === 'ru' ? nav : 'fr';
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('fr');

  useEffect(() => {
    setLangState(detect());
  }, []);

  /* Keep <html lang> and the document title in sync with the chosen language */
  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = dicts[lang].meta.title;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem(STORAGE_KEY, l);
  };

  return <Ctx.Provider value={{ lang, t: dicts[lang], setLang }}>{children}</Ctx.Provider>;
}

export const useLang = () => useContext(Ctx);
