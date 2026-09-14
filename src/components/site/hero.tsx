'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useLang } from '@/contexts/lang';
import { Counter, EASE, Words } from '@/components/motion';
import CvButton from './cv-button';

export default function Hero() {
  const { t } = useLang();
  const reduce = useReducedMotion();
  const fade = (delay: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: EASE, delay },
  });

  return (
    <section id='top' className='relative pt-[calc(var(--nav-h)+56px)] md:pt-[calc(var(--nav-h)+96px)] pb-16 md:pb-24'>
      {/* Faint warm glow — the only decoration the hero gets */}
      <div
        aria-hidden
        className='pointer-events-none absolute inset-x-0 top-0 h-[520px] -z-10'
        style={{ background: 'radial-gradient(60% 55% at 78% 0%, var(--accent-soft), transparent 70%)' }}
      />

      <div className='container'>
        <motion.div {...fade(0)} className='mb-8'>
          <span className='pill'>
            <Image src='/portrait.jpg' alt='' width={24} height={24} className='rounded-full object-cover' priority />
            <span className='status-dot' aria-hidden />
            {t.hero.status}
          </span>
        </motion.div>

        <h1 className='display text-[clamp(38px,6.3vw,88px)] max-w-[20ch]'>
          <Words text={t.hero.titlePre} delay={0.1} />
          <br />
          <Words text={t.hero.titleEm} delay={0.25} className='text-fg-2' />
          <br />
          <Words
            text={t.hero.titlePost}
            delay={0.42}
            className='font-serif italic font-normal text-[1.06em] tracking-[-0.02em]'
          />
        </h1>

        <motion.p {...fade(0.6)} className='lead mt-7 md:mt-9 max-w-[58ch]'>
          {t.hero.desc}
        </motion.p>

        <motion.div {...fade(0.72)} className='mt-9 flex flex-wrap items-center gap-3'>
          <a href='#work' className='btn btn-primary'>
            {t.hero.ctaWork}
            <ArrowDown size={16} strokeWidth={2.2} aria-hidden />
          </a>
          <CvButton className='btn btn-secondary' label={t.hero.ctaCv} />
        </motion.div>

        <motion.dl
          {...fade(0.9)}
          className='mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8 border-t border-line pt-8'
        >
          {t.hero.metrics.map((m) => (
            <div key={m.l}>
              <dt className='text-[13.5px] text-muted order-2'>{m.l}</dt>
              <dd className='text-[34px] md:text-[40px] font-semibold tracking-[-0.03em] leading-none mb-2 -order-1'>
                <Counter to={Number(m.n)} suffix={m.s ?? ''} />
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
