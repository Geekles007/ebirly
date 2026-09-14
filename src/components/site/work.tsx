'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useLang } from '@/contexts/lang';
import { PROJECTS, type Project } from '@/data/portfolio';
import { Stagger, itemVariants } from '@/components/motion';
import SectionHeading from './section-heading';

function useCoarsePointer() {
  const [coarse, setCoarse] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(hover: none)');
    setCoarse(mq.matches);
    const fn = (e: MediaQueryListEvent) => setCoarse(e.matches);
    mq.addEventListener('change', fn);
    return () => mq.removeEventListener('change', fn);
  }, []);
  return coarse;
}

function ProjectCard({ p, featured = false }: { p: Project; featured?: boolean }) {
  const wide = featured || p.wide;
  const { t } = useLang();
  const copy = t.work.projects[p.id];
  const ref = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const inView = useInView(ref, { amount: 0.55 });
  const coarse = useCoarsePointer();
  const reduce = useReducedMotion();
  const [hover, setHover] = useState(false);

  /* Featured card previews while in view; others on hover (or in view on touch). */
  useEffect(() => {
    const v = video.current;
    if (!v) return;
    const shouldPlay = !reduce && (featured || coarse ? inView : hover);
    if (shouldPlay) v.play().catch(() => {});
    else v.pause();
  }, [hover, inView, coarse, featured, reduce]);

  return (
    <motion.a
      ref={ref as never}
      variants={itemVariants}
      href={p.href}
      target='_blank'
      rel='noopener noreferrer'
      className={`group block ${wide ? 'md:col-span-2' : ''}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
    >
      <div className={`media ${wide ? 'aspect-[16/9] md:aspect-[21/10]' : 'aspect-[16/10]'}`}>
        <video ref={video} src={p.video} poster={p.poster} muted loop playsInline preload='metadata' aria-hidden tabIndex={-1} />
        {featured && (
          <span className='absolute left-4 top-4 chip chip-sm bg-surface/90 backdrop-blur-md'>{t.work.featured}</span>
        )}
      </div>

      <div className='mt-5 flex items-start justify-between gap-6'>
        <div className='min-w-0'>
          <h3 className={`font-semibold tracking-[-0.02em] ${featured ? 'text-[24px] md:text-[28px]' : 'text-[20px]'}`}>
            {p.title}
          </h3>
          <p className='mt-1 text-[14.5px] text-muted'>
            {copy?.kind} · <span className='tnum'>{p.year}</span>
          </p>
          <p className='mt-3 max-w-[56ch] text-[15px] leading-relaxed text-fg-2'>{copy?.desc}</p>
          <ul className='mt-4 flex flex-wrap gap-1.5' aria-label='Stack'>
            {p.tags.map((tag) => (
              <li key={tag} className='chip chip-sm'>
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <span
          className='icon-btn shrink-0 border border-line-strong text-fg transition-colors group-hover:bg-fg group-hover:text-bg group-hover:border-fg'
          aria-hidden
        >
          <ArrowUpRight size={18} strokeWidth={2} />
        </span>
      </div>
    </motion.a>
  );
}

export default function Work() {
  const { t } = useLang();
  return (
    <section id='work' className='section'>
      <div className='container'>
        <SectionHeading eyebrow={t.work.eyebrow} title={t.work.title} desc={t.work.desc} />
        <Stagger className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14 md:gap-y-16'>
          {PROJECTS.map((p) => (
            <ProjectCard key={p.id} p={p} featured={p.featured} />
          ))}
        </Stagger>
      </div>
    </section>
  );
}
