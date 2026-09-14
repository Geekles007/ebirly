'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLang } from '@/contexts/lang';
import { EASE } from '@/components/motion';
import LangSwitcher from './lang-switcher';
import ThemeToggle from './theme-toggle';
import CvButton from './cv-button';

const SECTIONS = ['work', 'products', 'skills', 'experience', 'about', 'contact'] as const;
type SectionId = (typeof SECTIONS)[number];

export default function Nav() {
  const { t } = useLang();
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<SectionId | null>(null);

  /* Translucent bar once the page has moved */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Active section tracking */
  useEffect(() => {
    const els = SECTIONS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id as SectionId);
        else if (window.scrollY < 200) setActive(null);
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.2, 0.5] },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  /* Mobile sheet: lock scroll + Escape */
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const links: Array<{ id: SectionId; label: string }> = [
    { id: 'work', label: t.nav.work },
    { id: 'products', label: t.nav.products },
    { id: 'skills', label: t.nav.skills },
    { id: 'experience', label: t.nav.experience },
    { id: 'about', label: t.nav.about },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <>
      <header className='nav' data-scrolled={scrolled || open}>
        <div className='container flex h-full items-center justify-between gap-4'>
          <a href='#top' className='flex shrink-0 items-center gap-2.5 whitespace-nowrap font-semibold tracking-[-0.01em]' aria-label='Tondji Lee — home'>
            <Image src='/ebirly.png' alt='' width={26} height={26} priority className='rounded-md' />
            <span>Tondji Lee</span>
          </a>

          <nav className='hidden lg:flex items-center gap-0.5' aria-label='Main'>
            {links.map((l) => (
              <a key={l.id} href={`#${l.id}`} className='nav-link' aria-current={active === l.id ? 'true' : undefined}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className='flex items-center gap-1.5 sm:gap-2'>
            <span className='hidden sm:block'>
              <LangSwitcher />
            </span>
            <ThemeToggle />
            <span className='hidden md:block'>
              <CvButton className='btn btn-primary btn-sm' />
            </span>
            <button
              type='button'
              className='icon-btn lg:hidden'
              aria-label={open ? t.nav.close : t.nav.menu}
              aria-expanded={open}
              aria-controls='mobile-menu'
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id='mobile-menu'
            role='dialog'
            aria-modal='true'
            className='fixed inset-0 z-40 lg:hidden'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className='scrim absolute inset-0' onClick={() => setOpen(false)} />
            <motion.nav
              className='absolute inset-x-0 top-[var(--nav-h)] mx-4 rounded-xl bg-surface border border-line shadow-lg p-3'
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.35, ease: EASE }}
              aria-label='Mobile'
            >
              <ul className='flex flex-col'>
                {links.map((l, i) => (
                  <motion.li
                    key={l.id}
                    initial={reduce ? false : { opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04, duration: 0.4, ease: EASE }}
                  >
                    <a
                      href={`#${l.id}`}
                      onClick={() => setOpen(false)}
                      className='flex items-center justify-between rounded-md px-4 py-3.5 text-[19px] font-medium tracking-[-0.01em] hover:bg-surface-2'
                    >
                      {l.label}
                      <span className='text-muted text-sm tnum'>0{i + 1}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className='mt-2 flex items-center justify-between gap-3 border-t border-line pt-3'>
                <span className='sm:hidden'>
                  <LangSwitcher />
                </span>
                <CvButton className='btn btn-primary flex-1' />
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
