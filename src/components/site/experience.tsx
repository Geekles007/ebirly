'use client';

import { useLang } from '@/contexts/lang';
import { Item, Reveal, Stagger } from '@/components/motion';
import SectionHeading from './section-heading';
import CvButton from './cv-button';

export default function Experience() {
  const { t } = useLang();
  return (
    <section id='experience' className='section'>
      <div className='container'>
        <SectionHeading eyebrow={t.exp.eyebrow} title={t.exp.title} desc={t.exp.desc} />
        <Stagger>
          {t.exp.items.map((it, i) => (
            <Item key={it.company + it.period} className='timeline-row'>
              <div className='flex flex-col gap-1 text-[14px]'>
                <span className='tnum text-fg-2'>{it.period}</span>
                <span className='text-muted'>{it.location}</span>
                {i === 0 && (
                  <span className='mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-accent-soft px-2.5 py-1 text-[12px] font-medium text-fg'>
                    <span className='status-dot' aria-hidden />
                    {t.exp.now}
                  </span>
                )}
              </div>
              <div className='max-w-[64ch]'>
                <h3 className='text-[19px] font-semibold tracking-[-0.015em]'>
                  {it.role} <span className='font-normal text-muted'>· {it.company}</span>
                </h3>
                <p className='mt-2 text-[15.5px] text-fg-2'>{it.desc}</p>
                {it.highlights.length > 0 && (
                  <ul className='mt-3 space-y-1.5 text-[14.5px] text-fg-2'>
                    {it.highlights.map((h) => (
                      <li key={h} className='flex gap-2.5'>
                        <span className='mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent' aria-hidden />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Item>
          ))}
        </Stagger>
        <Reveal className='mt-10 flex justify-end'>
          <CvButton className='btn btn-secondary' label={t.exp.cv} />
        </Reveal>
      </div>
    </section>
  );
}
