'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { AnimatePresence, motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useLang } from '@/contexts/lang';
import { EASE } from '@/components/motion';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const { t } = useLang();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const dark = mounted && resolvedTheme === 'dark';

  return (
    <button
      type='button'
      className='icon-btn'
      aria-label={t.nav.theme}
      title={t.nav.theme}
      onClick={() => setTheme(dark ? 'light' : 'dark')}
    >
      <AnimatePresence mode='wait' initial={false}>
        <motion.span
          key={dark ? 'moon' : 'sun'}
          initial={{ rotate: -40, scale: 0.6, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: 40, scale: 0.6, opacity: 0 }}
          transition={{ duration: 0.25, ease: EASE }}
          className='grid place-items-center'
        >
          {dark ? <Moon size={17} strokeWidth={2} /> : <Sun size={17} strokeWidth={2} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
