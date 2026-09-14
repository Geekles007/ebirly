'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { motion, animate, useInView, useReducedMotion, type Variants } from 'framer-motion';

export const EASE = [0.22, 1, 0.36, 1] as const;
export const VIEWPORT = { once: true, margin: '-10% 0px -8% 0px' } as const;

/* Single element reveal: fade + rise (+ optional blur for text blocks) */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 22,
  blur = false,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  blur?: boolean;
}) {
  const reduce = useReducedMotion();
  const hidden = reduce ? { opacity: 0 } : { opacity: 0, y, filter: blur ? 'blur(6px)' : 'blur(0px)' };
  const shown = reduce ? { opacity: 1 } : { opacity: 1, y: 0, filter: 'blur(0px)' };
  return (
    <motion.div
      className={className}
      initial={hidden}
      whileInView={shown}
      viewport={VIEWPORT}
      transition={{ duration: 0.8, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

/* Staggered lists */
export const staggerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.04 } },
};
export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export function Stagger({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={staggerVariants} initial='hidden' whileInView='show' viewport={VIEWPORT}>
      {children}
    </motion.div>
  );
}
export function Item({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}

/* Number that counts up when it enters the viewport */
export function Counter({ to, suffix = '', className }: { to: number; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -24px 0px' });
  const reduce = useReducedMotion();
  const [v, setV] = useState(reduce ? to : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const c = animate(0, to, { duration: 1.4, ease: EASE, onUpdate: (x) => setV(Math.round(x)) });
    return () => c.stop();
  }, [inView, to, reduce]);

  return (
    <span ref={ref} className={`tnum ${className ?? ''}`}>
      {v}
      {suffix}
    </span>
  );
}

/* Word-by-word masked reveal for display headlines */
export function Words({
  text,
  className,
  delay = 0,
  step = 0.045,
}: {
  text: string;
  className?: string;
  delay?: number;
  step?: number;
}) {
  const reduce = useReducedMotion();
  const words = text.split(' ');
  return (
    <span className={className}>
      {words.map((w, i) => (
        <span key={i} className='inline-block overflow-hidden align-bottom pb-[0.08em] -mb-[0.08em]'>
          <motion.span
            className='inline-block'
            initial={reduce ? { opacity: 0 } : { y: '110%', opacity: 0 }}
            animate={reduce ? { opacity: 1 } : { y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: EASE, delay: delay + i * step }}
          >
            {w}
          </motion.span>
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </span>
  );
}
