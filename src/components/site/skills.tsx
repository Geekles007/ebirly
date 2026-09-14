'use client';

import { useLang } from '@/contexts/lang';
import { SKILL_GROUPS } from '@/data/portfolio';
import { Item, Stagger } from '@/components/motion';
import SectionHeading from './section-heading';

const STRONG = new Set(['React', 'Next.js', 'TypeScript', 'WCAG 2.1 AA', 'Node.js', 'Flutter', 'Design systems']);

export default function Skills() {
  const { t } = useLang();
  return (
    <section id='skills' className='section band'>
      <div className='container'>
        <SectionHeading eyebrow={t.skills.eyebrow} title={t.skills.title} desc={t.skills.desc} />
        <Stagger>
          {SKILL_GROUPS.map((g) => (
            <Item key={g.id} className='spec-row'>
              <h3 className='text-[15px] font-semibold tracking-[-0.01em]'>{t.skills.groups[g.id]}</h3>
              <ul className='flex flex-wrap gap-2'>
                {g.items.map((s) => (
                  <li key={s} className={`chip ${STRONG.has(s) ? 'bg-fg text-bg border-fg' : ''}`}>
                    {s}
                  </li>
                ))}
              </ul>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
