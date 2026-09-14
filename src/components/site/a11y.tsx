'use client';

import { ArrowUpRight } from 'lucide-react';
import { useLang } from '@/contexts/lang';
import { Item, Reveal, Stagger } from '@/components/motion';

export default function A11y() {
  const { t } = useLang();
  const a = t.a11y;
  return (
    <section id='a11y' className='section'>
      <div className='container'>
        <div className='grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-20'>
          <div>
            <Reveal>
              <span className='eyebrow'>{a.eyebrow}</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className='title-lg mt-4'>{a.title}</h2>
            </Reveal>
            <Reveal delay={0.1} blur>
              <blockquote className='mt-8 border-l-2 border-accent pl-6'>
                <p className='font-serif italic text-[clamp(21px,2.1vw,29px)] leading-[1.35] tracking-[-0.01em]'>“{a.quote}”</p>
                <footer className='mt-4 text-[13.5px] text-muted'>{a.quoteBy}</footer>
              </blockquote>
            </Reveal>
            <Reveal delay={0.15}>
              <p className='lead mt-8 max-w-[52ch] text-[17px]'>{a.desc}</p>
              <a
                href='https://environnement-immobilier.macif.fr/'
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-secondary mt-8'
              >
                {a.cta}
                <ArrowUpRight size={16} strokeWidth={2.2} aria-hidden />
              </a>
            </Reveal>
          </div>

          <Stagger className='grid gap-4 sm:grid-cols-2 lg:pt-12'>
            {a.pillars.map((p, i) => (
              <Item key={p.t} className='card p-6'>
                <span className='text-[12.5px] font-medium text-accent tnum'>0{i + 1}</span>
                <h3 className='mt-6 text-[17px] font-semibold tracking-[-0.01em]'>{p.t}</h3>
                <p className='mt-2 text-[14.5px] leading-relaxed text-fg-2'>{p.d}</p>
              </Item>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
