'use client';

import React from 'react';
import { useLang } from '@/contexts/lang';

/* ─── Static data (same in all languages) ────────── */
const STACK = [
  { n: 'React', m: 'Library · Server & Client', l: 0.95, s: 'span-4' },
  { n: 'Next.js', m: 'Framework · App Router', l: 0.92, s: 'span-4' },
  { n: 'TypeScript', m: 'Language · Strict', l: 0.9, s: 'span-4' },
  { n: 'Node.js', m: 'Runtime · API', l: 0.8, s: 'span-3' },
  { n: 'Framer Motion', m: 'Animation · UI', l: 0.88, s: 'span-3' },
  { n: 'GSAP', m: 'Motion · Timeline', l: 0.78, s: 'span-3' },
  { n: 'Tailwind', m: 'Styling · Utility', l: 0.92, s: 'span-3' },
  { n: 'Angular 4+', m: 'Framework · Enterprise', l: 0.82, s: 'span-4' },
  { n: 'Java / Spring', m: 'Backend · Enterprise', l: 0.75, s: 'span-4' },
  { n: 'GraphQL', m: 'API · Schema', l: 0.8, s: 'span-4' },
  { n: 'Docker', m: 'Container · DevOps', l: 0.7, s: 'span-3' },
  { n: 'AWS', m: 'Cloud · Services', l: 0.65, s: 'span-3' },
  { n: 'PostgreSQL', m: 'Database · Queries', l: 0.72, s: 'span-3' },
  { n: 'Nest.js', m: 'Backend · Node', l: 0.78, s: 'span-3' },
  { n: 'Affinity', m: 'Design · Vector', l: 0.85, s: 'span-4' },
  { n: 'Flutter', m: 'Mobile · Cross-platform', l: 0.68, s: 'span-4' },
  { n: 'Microfrontends', m: 'Architecture · Modular', l: 0.8, s: 'span-4' },
];

const PROJECTS = [
  {
    t: 'Ibird Agency',
    tg: ['Next.js', 'Dribbble API', 'GSAP'],
    y: '2024',
    th: 'Design studio · Portfolio',
    h: 'https://ibirdagency.tnjl.me/',
  },
  {
    t: 'Emplacement Immo',
    tg: ['Next.js', 'Python', 'Vercel'],
    y: '2024',
    th: 'Real estate · Lokimo platform',
    h: 'https://emplacement.immo/',
  },
  {
    t: 'Environnement Macif',
    tg: ['Next.js', 'TypeScript', 'GSAP'],
    y: '2023',
    th: 'Real estate · Macif.fr',
    h: 'https://environnement-immobilier.macif.fr/',
  },
  {
    t: 'Lokimo AI',
    tg: ['Next.js', 'TypeScript', 'Framer Motion'],
    y: '2023',
    th: 'SaaS · AI real estate platform',
    h: 'https://www.lokimo.ai',
  },
  {
    t: 'Henspiration',
    tg: ['React', 'Spotify API', 'Node.js'],
    y: '2022',
    th: 'Music · Artist promotion app',
    h: 'https://henspiration.vercel.app',
  },
  {
    t: 'IFCameroun',
    tg: ['Next.js', 'Strapi', 'AWS'],
    y: '2022',
    th: 'Editorial · Institut Français',
    h: 'https://www.ifcameroun.com',
  },
];

const CERTS = [
  {
    t: 'Animations on the Web',
    c: 'Animations.dev',
    y: '2024',
    h: 'https://animations.dev/certificate/c015f445-d180-4146-8617-9e8fbd8da936',
  },
  {
    t: 'Apollo Graph Developer — Associate',
    c: 'Apollo GraphQL',
    y: '2023',
    h: 'https://www.apollographql.com/tutorials/certifications/5fd2321a-c700-4412-b393-ee56eb88ffde',
  },
  {
    t: 'Front End Libraries',
    c: 'freeCodeCamp',
    y: '2022',
    h: 'https://www.freecodecamp.org/certification/fcc182b6d0f-8bee-4f97-aed9-2c166a2ca5c1/front-end-development-libraries',
  },
  {
    t: 'JS Algorithms & Data Structures',
    c: 'freeCodeCamp',
    y: '2022',
    h: 'https://www.freecodecamp.org/certification/fcc182b6d0f-8bee-4f97-aed9-2c166a2ca5c1/javascript-algorithms-and-data-structures',
  },
  {
    t: 'Microfrontends with React',
    c: 'Udemy',
    y: '2021',
    h: 'https://www.udemy.com/certificate/UC-931e7037-dfd7-4266-8d7e-1040b9012da1/',
  },
  {
    t: "NestJS: The Complete Developer's Guide",
    c: 'Udemy',
    y: '2025',
    h: 'https://www.udemy.com/certificate/UC-f42d1e15-1e1e-4cc5-b9d6-c5d0a41e016c/',
  },
];

const LANGS_DATA = [
  { n: 'French', l: 'Native' },
  { n: 'English', l: 'Intermediate' },
  { n: 'Italian', l: 'Level B2' },
  { n: 'Russian', l: 'A1 Basic' },
];

const LINKS = [
  { l: 'Email', v: 'tondjilee@gmail.com', h: 'mailto:tondjilee@gmail.com' },
  {
    l: 'LinkedIn',
    v: '/in/lee-tondji-niat',
    h: 'https://www.linkedin.com/in/lee-tondji-niat/',
  },
  { l: 'GitHub', v: '/Geekles007', h: 'https://github.com/Geekles007' },
  { l: 'Dribbble', v: '/ibirddesign', h: 'https://dribbble.com/ibirddesign' },
  { l: 'X', v: '@leesan30lee', h: 'https://x.com/leesan30lee' },
];

const MARQUEE_ITEMS = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Framer Motion',
  'GSAP',
  'Tailwind',
  'GraphQL',
  'Docker',
  'AWS',
  'Figma',
  'Affinity Designer',
  'Angular',
  'Spring Boot',
  'Flutter',
  'NestJS',
];

/* ─── Component ──────────────────────────────────── */
export default function PortfolioContent() {
  const { t } = useLang();

  const marqueeRow = MARQUEE_ITEMS.map((item, i) => (
    <span key={i}>
      ● <em>{item}</em>
    </span>
  ));

  /* hero desc has <strong> tags — render as HTML */
  const HeroDesc = () => (
    <p
      className='hero-desc'
      dangerouslySetInnerHTML={{ __html: t.hero.desc }}
    />
  );

  return (
    <>
      {/* ── Hero ── */}
      <section className='hero'>
        <div className='wrap'>
          {/* Status card */}
          <div className='status-card rise' style={{ animationDelay: '.4s' }}>
            <div className='s-head'>
              <b>{t.status.title}</b>
              <span>
                <i className='status-pulse' />
                {t.status.online}
              </span>
            </div>
            {t.status.rows.map(([k, v]) => (
              <div className='s-row' key={k}>
                <span>{k}</span>
                <b>{v}</b>
              </div>
            ))}
          </div>

          <div className='hero-kicker rise'>
            <span className='dot' />
            {t.hero.kicker}
          </div>

          <h1 className='rise' style={{ animationDelay: '.05s' }}>
            {t.hero.l1}
            <br />
            <span className='outline'>{t.hero.l2}</span>
            <br />
            <span>
              {t.hero.l3}
              <span className='slash'>_</span>
            </span>
          </h1>

          <div className='hero-sub rise' style={{ animationDelay: '.2s' }}>
            <HeroDesc />
            <div className='hero-meta'>
              {t.hero.metrics.map((m) => (
                <div className='metric' key={m.l}>
                  <b>{m.n}</b>
                  <small>{m.l}</small>
                </div>
              ))}
            </div>
          </div>

          <div className='hero-actions rise' style={{ animationDelay: '.3s' }}>
            <a className='btn primary' href='#work'>
              {t.hero.cta1}
            </a>
            <a className='btn' href='#contact'>
              {t.hero.cta2}
            </a>
            <span className='chip' style={{ marginLeft: 'auto' }}>
              {t.hero.scroll}
            </span>
          </div>
        </div>
      </section>

      {/* ── Marquee ── */}
      <div className='marquee-strip'>
        <div className='marquee-track'>
          {marqueeRow}
          {marqueeRow}
          {marqueeRow}
          {marqueeRow}
        </div>
      </div>

      {/* ── About ── */}
      <section id='about' className='section-anchor'>
        <div className='wrap'>
          <div className='sec-head'>
            <span className='sec-label'>{t.about.label}</span>
            <span className='chip'>{t.about.chip}</span>
          </div>
          <div className='about-grid'>
            <div>
              <h2 className='sec-title' style={{ marginBottom: 36 }}>
                {t.about.title}
              </h2>
              <p className='lede'>
                {t.about.intro} <u>Tondji Niat J. Lee</u>
                {t.about.lede_pre} <em>{t.about.lede_em}</em>{' '}
                {t.about.lede_post}
              </p>
            </div>
            <div className='id-card'>
              <div className='id-head'>
                <h4>{t.about.id_head}</h4>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    color: 'var(--accent)',
                  }}
                >
                  {t.about.id_live}
                </span>
              </div>
              <dl className='kv'>
                {t.about.kv.map(([k, v]) => (
                  <React.Fragment key={k}>
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </React.Fragment>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stack ── */}
      <section id='stack' className='section-anchor'>
        <div className='wrap'>
          <div className='sec-head'>
            <span className='sec-label'>{t.stack.label}</span>
            <span className='chip'>{t.stack.chip}</span>
          </div>
          <h2 className='sec-title' style={{ marginBottom: 48 }}>
            {t.stack.title}
          </h2>
          <div className='stack-grid'>
            {STACK.map((x, i) => (
              <div
                key={i}
                className={`stack-cell ${x.s}`}
                style={{ '--lvl': x.l } as React.CSSProperties}
              >
                <div className='sc-idx'>
                  {String(i + 1).padStart(2, '0')} / {STACK.length}
                </div>
                <div>
                  <div className='sc-name'>{x.n}</div>
                  <div className='sc-meta'>{x.m}</div>
                  <div className='sc-bar'>
                    <i />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id='work' className='section-anchor'>
        <div className='wrap'>
          <div className='sec-head'>
            <span className='sec-label'>{t.work.label}</span>
            <span className='chip'>{t.work.chip}</span>
          </div>
          <h2 className='sec-title' style={{ marginBottom: 48 }}>
            {t.work.title}
          </h2>
          <div className='projects-list'>
            {PROJECTS.map((p, i) => (
              <a
                key={i}
                href={p.h}
                target='_blank'
                rel='noopener noreferrer'
                className='project-row'
              >
                <span className='p-num'>
                  ({String(i + 1).padStart(2, '0')})
                </span>
                <h3 className='p-title'>{p.t}</h3>
                <div className='p-tags'>
                  {p.tg.map((tag, j) => (
                    <span key={j}>{tag}</span>
                  ))}
                </div>
                <span className='p-year'>{p.y}</span>
                <span className='p-arrow'>→</span>
                <span className='p-thumb' data-label={p.th} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Experience ── */}
      <section id='exp' className='section-anchor'>
        <div className='wrap'>
          <div className='sec-head'>
            <span className='sec-label'>{t.exp.label}</span>
            <span className='chip'>{t.exp.chip}</span>
          </div>
          <div className='exp-grid'>
            <div>
              <h2 className='sec-title'>{t.exp.title}</h2>
              <p className='hero-desc' style={{ marginTop: 24 }}>
                {t.exp.side}
              </p>
            </div>
            <div>
              {t.exp.items.map((it, i) => (
                <div className='exp-item' key={i}>
                  <div className='exp-date'>{it.d}</div>
                  <div>
                    <h4 className='exp-role'>{it.r}</h4>
                    <div className='exp-co'>{it.c}</div>
                    <p className='exp-desc'>{it.x}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Education ── */}
      <section id='education' className='section-anchor'>
        <div className='wrap'>
          <div className='sec-head'>
            <span className='sec-label'>{t.edu.label}</span>
            <span className='chip'>{t.edu.chip}</span>
          </div>
          <div className='exp-grid'>
            <div>
              <h2 className='sec-title'>{t.edu.title}</h2>
              <p className='hero-desc' style={{ marginTop: 24 }}>
                {t.edu.side}
              </p>
            </div>
            <div>
              {t.edu.items.map((it, i) => (
                <div className='exp-item' key={i}>
                  <div className='exp-date'>{it.d}</div>
                  <div>
                    <h4 className='exp-role'>
                      <a
                        href={it.h}
                        target='_blank'
                        rel='noopener noreferrer'
                        style={{ borderBottom: '1px solid var(--accent)' }}
                      >
                        {it.s}
                      </a>
                    </h4>
                    <div className='exp-co'>{it.l}</div>
                    <p className='exp-desc'>{it.g}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section id='certs' className='section-anchor'>
        <div className='wrap'>
          <div className='sec-head'>
            <span className='sec-label'>{t.certs.label}</span>
            <span className='chip'>{t.certs.chip}</span>
          </div>
          <h2 className='sec-title' style={{ marginBottom: 48 }}>
            {t.certs.title}
          </h2>
          <div className='stack-grid'>
            {CERTS.map((c, i) => (
              <a
                key={i}
                href={c.h}
                target='_blank'
                rel='noopener noreferrer'
                className='stack-cell span-4'
                style={{ textDecoration: 'none' }}
              >
                <div className='sc-idx'>
                  {String(i + 1).padStart(2, '0')} / {CERTS.length}
                </div>
                <div>
                  <div className='sc-name' style={{ fontSize: 16 }}>
                    {c.t}
                  </div>
                  <div className='sc-meta'>
                    {c.c} · {c.y}
                  </div>
                  <div className='sc-bar'>
                    <i />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Languages ── */}
      <section id='languages' className='section-anchor'>
        <div className='wrap'>
          <div className='sec-head'>
            <span className='sec-label'>{t.langs.label}</span>
            <span className='chip'>{t.langs.chip}</span>
          </div>
          <div className='stack-grid'>
            {LANGS_DATA.map((lang, i) => (
              <div key={i} className='stack-cell span-3'>
                <div className='sc-idx'>
                  {String(i + 1).padStart(2, '0')} / {LANGS_DATA.length}
                </div>
                <div>
                  <div className='sc-name'>{lang.n}</div>
                  <div className='sc-meta'>{lang.l}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id='contact' className='section-anchor'>
        <div className='wrap'>
          <div className='sec-head'>
            <span className='sec-label'>{t.contact.label}</span>
            <span className='chip'>{t.contact.chip}</span>
          </div>
          <div className='contact-grid'>
            <h2 className='contact-heading'>
              {t.contact.heading_pre.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i === 0 && <br />}
                </React.Fragment>
              ))}{' '}
              <a href='mailto:tondjilee@gmail.com'>{t.contact.heading_link}</a>
            </h2>
            <div className='contact-links'>
              {LINKS.map((link, i) => (
                <a
                  key={i}
                  href={link.h}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <span className='cl-label'>{link.l}</span>
                  <span>{link.v} →</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className='site-footer'>
        <div className='wrap'>
          <div className='footer-inner'>
            <span>{t.footer.l}</span>
            <span>{t.footer.r}</span>
          </div>
        </div>
      </footer>
    </>
  );
}
