'use client';

import { ArrowUpRight } from 'lucide-react';
import { useLang } from '@/contexts/lang';
import { Item, Stagger } from '@/components/motion';
import SectionHeading from './section-heading';

export default function Education() {
  const { t } = useLang();
  return (
    <section id='education' className='section-tight border-t border-line'>
      <div className='container'>
        <SectionHeading eyebrow={t.edu.eyebrow} title={t.edu.title} />
        <div className='grid gap-12 lg:grid-cols-2 lg:gap-16'>
          <Stagger>
            {t.edu.items.map((e) => (
              <Item key={e.school} className='flex gap-6 border-t border-line py-6 last:border-b'>
                <span className='w-[110px] shrink-0 text-[14px] text-muted tnum'>{e.period}</span>
                <div>
                  <a href={e.href} target='_blank' rel='noopener noreferrer' className='link-arrow text-[16px]'>
                    {e.school}
                    <ArrowUpRight size={14} strokeWidth={2.2} aria-hidden />
                  </a>
                  <p className='mt-1 text-[14.5px] text-fg-2'>{e.degree}</p>
                  <p className='mt-1 text-[13px] text-muted'>{e.location}</p>
                </div>
              </Item>
            ))}
          </Stagger>

          <div>
            <h3 className='mb-3 text-[15px] font-semibold text-muted'>{t.edu.certs}</h3>
            <Stagger>
              {t.edu.certItems.map((c) => (
                <Item key={c.title}>
                  <a
                    href={c.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='group flex items-center justify-between gap-4 border-t border-line py-4 last:border-b'
                  >
                    <span>
                      <span className='block text-[15px] font-medium tracking-[-0.01em] transition-colors group-hover:text-fg'>{c.title}</span>
                      <span className='block text-[13px] text-muted'>{c.issuer}</span>
                    </span>
                    <span className='flex items-center gap-3 text-[13.5px] text-muted tnum'>
                      {c.year}
                      <ArrowUpRight size={14} strokeWidth={2.2} className='transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5' aria-hidden />
                    </span>
                  </a>
                </Item>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
