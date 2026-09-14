'use client';

import { ArrowUp } from 'lucide-react';
import { useLang } from '@/contexts/lang';

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className='border-t border-line py-8'>
      <div className='container flex flex-wrap items-center justify-between gap-4 text-[13.5px] text-muted'>
        <span>{t.footer.rights}</span>
        <span className='hidden sm:inline'>{t.footer.built}</span>
        <a href='#top' className='link-arrow text-muted hover:text-fg'>
          {t.footer.top}
          <ArrowUp size={14} strokeWidth={2.2} aria-hidden />
        </a>
      </div>
    </footer>
  );
}
