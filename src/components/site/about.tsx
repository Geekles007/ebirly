'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { useLang } from '@/contexts/lang';
import { EASE, Reveal, VIEWPORT } from '@/components/motion';

export default function About() {
  const { t } = useLang();
  const a = t.about;
  const reduce = useReducedMotion();
  return (
    <section id='about' className='section band'>
      <div className='container'>
        <div className='grid gap-12 lg:grid-cols-[minmax(0,400px)_1fr] lg:gap-20 items-start'>
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.9, ease: EASE }}
            className='relative'
          >
            <div className='media aspect-square rounded-xl shadow-lg'>
              <Image src='/portrait.jpg' alt='Tondji Niat J. Lee' fill sizes='(min-width:1024px) 400px, 100vw' className='object-cover' />
            </div>
            <div className='pill absolute bottom-4 left-4 pl-3'>
              <span className='status-dot' aria-hidden />
              {a.based} {a.basedValue}
            </div>
          </motion.div>

          <div>
            <Reveal>
              <span className='eyebrow'>{a.eyebrow}</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className='title-lg mt-4 max-w-[20ch]'>{a.title}</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className='lead mt-7 max-w-[58ch]'>{a.p1}</p>
              <p className='lead mt-4 max-w-[58ch]'>{a.p2}</p>
            </Reveal>

            <Reveal delay={0.15} className='mt-10 grid gap-8 sm:grid-cols-2'>
              <div>
                <h3 className='text-[13px] font-medium text-muted'>{a.langsLabel}</h3>
                <ul className='mt-3 divide-y divide-line'>
                  {a.langs.map((l) => (
                    <li key={l.n} className='flex items-center justify-between py-2.5 text-[15px]'>
                      <span className='font-medium'>{l.n}</span>
                      <span className='text-muted'>{l.l}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className='text-[13px] font-medium text-muted'>{a.interestsLabel}</h3>
                <ul className='mt-3 divide-y divide-line'>
                  {a.interests.map((i) => (
                    <li key={i} className='py-2.5 text-[15px] font-medium'>
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
