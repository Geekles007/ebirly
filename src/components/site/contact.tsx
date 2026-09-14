'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, Copy, Mail } from 'lucide-react';
import { useLang } from '@/contexts/lang';
import { EMAIL, SOCIALS } from '@/data/portfolio';
import { EASE, Item, Reveal, Stagger } from '@/components/motion';
import { BRAND_ICONS } from './brand-icons';

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const id = setTimeout(() => setCopied(false), 2200);
    return () => clearTimeout(id);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section id='contact' className='section relative overflow-hidden'>
      <div
        aria-hidden
        className='pointer-events-none absolute inset-x-0 bottom-0 h-[420px] -z-10'
        style={{ background: 'radial-gradient(50% 60% at 50% 100%, var(--accent-soft), transparent 70%)' }}
      />
      <div className='container flex flex-col items-center text-center'>
        <Reveal>
          <span className='eyebrow'>{c.eyebrow}</span>
        </Reveal>
        <Reveal delay={0.05} blur>
          <h2 className='display mt-5 text-[clamp(38px,6.4vw,84px)] max-w-[16ch]'>{c.title}</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className='lead mt-6 max-w-[48ch]'>{c.desc}</p>
        </Reveal>

        <Reveal delay={0.15} className='mt-10 flex flex-wrap items-center justify-center gap-3'>
          <a href={`mailto:${EMAIL}`} className='btn btn-primary'>
            <Mail size={16} strokeWidth={2.2} aria-hidden />
            {c.email}
          </a>
          <button type='button' onClick={copy} className='btn btn-secondary min-w-[190px]' aria-live='polite'>
            <AnimatePresence mode='wait' initial={false}>
              <motion.span
                key={copied ? 'ok' : 'copy'}
                className='inline-flex items-center gap-2'
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2, ease: EASE }}
              >
                {copied ? <Check size={16} strokeWidth={2.4} aria-hidden /> : <Copy size={16} strokeWidth={2.2} aria-hidden />}
                {copied ? c.copied : c.copy}
              </motion.span>
            </AnimatePresence>
          </button>
        </Reveal>
        <Reveal delay={0.2}>
          <p className='mt-4 text-[13.5px] text-muted'>
            {EMAIL} · {c.response}
          </p>
        </Reveal>

        <Stagger className='mt-14 flex flex-wrap justify-center gap-2.5'>
          {SOCIALS.map((s) => {
            const Icon = BRAND_ICONS[s.id];
            return (
              <Item key={s.id}>
                <a href={s.href} target='_blank' rel='noopener noreferrer' className='pill h-11 gap-2.5 pl-4 pr-4 text-[14px] hover:border-fg transition-colors'>
                  <Icon width={16} height={16} />
                  {s.label}
                  <span className='text-muted'>{s.handle}</span>
                </a>
              </Item>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
