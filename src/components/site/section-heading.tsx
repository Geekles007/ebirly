'use client';

import { Reveal } from '@/components/motion';

export default function SectionHeading({
  eyebrow,
  title,
  desc,
  align = 'left',
  maxWidth = '22ch',
}: {
  eyebrow: string;
  title: string;
  desc?: string;
  align?: 'left' | 'center';
  maxWidth?: string;
}) {
  const center = align === 'center';
  return (
    <div className={`${center ? 'text-center mx-auto flex flex-col items-center' : ''} mb-12 md:mb-16`}>
      <Reveal>
        <span className='eyebrow'>{eyebrow}</span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className='title-lg mt-4' style={{ maxWidth }}>
          {title}
        </h2>
      </Reveal>
      {desc && (
        <Reveal delay={0.1}>
          <p className='lead mt-4' style={{ maxWidth: '56ch' }}>
            {desc}
          </p>
        </Reveal>
      )}
    </div>
  );
}
