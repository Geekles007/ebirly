'use client';

import { ArrowUpRight } from 'lucide-react';
import { useLang } from '@/contexts/lang';
import { PRODUCTS_OSS, type Product } from '@/data/portfolio';
import { Item, Reveal, Stagger } from '@/components/motion';
import SectionHeading from './section-heading';

const GAME_COLORS = ['#F0329C', '#C81A2A', '#E8792B', '#2DD4BF', '#FF5C43', '#FFB020', '#E8B84B', '#8B6CF0'];
const SPAN: Record<string, string> = { facturx: 'lg:col-span-2', maattitude: 'lg:col-span-2' };

function Tchin() {
  const { t } = useLang();
  const c = t.products.tchin;
  return (
    <Reveal>
      <article className='tchin p-7 md:p-10 lg:p-14'>
        <div className='relative grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center'>
          <div>
            <span className='inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1.5 text-[12.5px] font-medium text-white/80'>
              <i className='cs-dot' aria-hidden />
              {c.badge}
            </span>
            <h3 className='tchin-grad mt-6 text-[clamp(56px,8vw,112px)] font-bold leading-[0.9] tracking-[-0.05em] w-fit'>Tchin</h3>
            <p className='mt-4 text-[clamp(20px,2.2vw,28px)] font-medium tracking-[-0.02em] max-w-[24ch]'>{c.tagline}</p>
            <p className='mt-4 max-w-[52ch] text-[16px] leading-relaxed text-white/70'>{c.desc}</p>

            <dl className='mt-8 flex flex-wrap gap-8'>
              {c.metrics.map((m) => (
                <div key={m.l}>
                  <dd className='text-[30px] font-semibold leading-none tracking-[-0.03em] tnum'>{m.n}</dd>
                  <dt className='mt-1.5 text-[13px] text-white/60'>{m.l}</dt>
                </div>
              ))}
            </dl>

            <ul className='mt-8 flex flex-wrap gap-2' aria-label='Games'>
              {c.games.map((g, i) => (
                <li key={g.n} className='tchin-chip' style={{ '--gc': GAME_COLORS[i] } as React.CSSProperties}>
                  <span className='text-[14px] font-semibold tracking-[-0.01em]'>{g.n}</span>
                  <span className='text-[11.5px] text-white/55'>{g.p}</span>
                </li>
              ))}
            </ul>

            <a href='https://tchin.games' target='_blank' rel='noopener noreferrer' className='btn tchin-cta mt-10'>
              {c.cta}
              <ArrowUpRight size={16} strokeWidth={2.2} aria-hidden />
            </a>
          </div>

          {/* Console mockup: shared screen + two phone controllers */}
          <div className='console' aria-hidden>
            <div className='console-screen'>
              <div className='flex items-center justify-between border-b border-white/10 pb-3 text-[11px] font-medium uppercase tracking-[0.14em] text-white/55'>
                <span>
                  {c.m.room} · <b className='text-white tracking-[0.22em]'>TCH1N</b>
                </span>
                <span className='inline-flex items-center gap-1.5 text-[#2dd4bf]'>
                  <i className='cs-dot' />
                  {c.m.online}
                </span>
              </div>
              <div className='flex flex-1 flex-col items-center justify-center gap-3'>
                <span className='text-[10px] uppercase tracking-[0.24em] text-[#ffb020]'>{c.m.now}</span>
                <span className='text-[44px] leading-none drop-shadow-[0_8px_20px_rgba(240,50,156,0.5)]'>🎭</span>
                <span className='text-[17px] font-semibold tracking-[-0.01em]'>Imposteur de mots</span>
                <div className='mt-1 flex gap-1.5'>
                  {['#F0329C', '#FFB020', '#2DD4BF', '#FF5C43', '#8b6cf0'].map((col) => (
                    <i key={col} className='h-4 w-4 rounded-full border-2 border-[#17151d]' style={{ background: col }} />
                  ))}
                </div>
              </div>
            </div>
            <div className='console-phone phone-a'>
              <span className='mt-2 text-center text-[8.5px] uppercase tracking-[0.16em] text-white/50'>{c.m.controller}</span>
              <span className='flex min-h-[96px] flex-1 flex-col items-center justify-center gap-2 rounded-[13px] border border-white/10 bg-black/40 px-2 text-center'>
                <span className='text-[26px] leading-none'>🎭</span>
                <span className='text-[9px] leading-snug text-white/60'>{c.m.secret}</span>
              </span>
            </div>
            <div className='console-phone phone-b'>
              <span className='mt-2 text-center text-[8.5px] uppercase tracking-[0.16em] text-white/50'>{c.m.controller}</span>
              <span className='tchin-cta grid min-h-[96px] flex-1 place-items-center rounded-[13px] text-[13px] font-bold tracking-[0.16em]'>
                {c.m.vote}
              </span>
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function Badge({ kind }: { kind: Product['badges'][number] }) {
  const { t } = useLang();
  const label = { live: t.products.live, mit: 'MIT', pro: t.products.pro, ios: 'iOS' }[kind];
  const tone = kind === 'live' ? 'text-emerald-700 dark:text-emerald-400 border-emerald-500/30' : 'text-muted border-line';
  return <span className={`inline-flex h-6 items-center rounded-full border px-2 text-[11.5px] font-medium ${tone}`}>{label}</span>;
}

function ProductCard({ p }: { p: Product }) {
  const { t } = useLang();
  const linkLabel = { github: t.products.github, site: t.products.site, npm: 'npm', pub: 'pub.dev', store: t.products.store };
  return (
    <Item className={`card card-hover flex flex-col p-6 ${SPAN[p.id] ?? ''}`}>
      <header className='flex items-center gap-3.5'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={p.logo} alt='' width={44} height={44} className='h-11 w-11 rounded-[12px] border border-line object-cover' />
        <div className='min-w-0'>
          <h4 className='text-[17px] font-semibold tracking-[-0.01em]'>{p.name}</h4>
          <span className='text-[12.5px] text-muted tnum'>{p.version}</span>
        </div>
        <div className='ml-auto flex gap-1.5'>
          {p.badges.map((b) => (
            <Badge key={b} kind={b} />
          ))}
        </div>
      </header>
      <p className='mt-4 text-[15px] leading-relaxed text-fg-2'>{t.products.items[p.id]}</p>
      <footer className='mt-auto flex flex-wrap items-center justify-between gap-3 pt-6'>
        <ul className='flex flex-wrap gap-1.5'>
          {p.tags.map((tag) => (
            <li key={tag} className='chip chip-sm'>
              {tag}
            </li>
          ))}
        </ul>
        <ul className='flex gap-4'>
          {p.links.map((l) => (
            <li key={l.href}>
              <a href={l.href} target='_blank' rel='noopener noreferrer' className='link-arrow text-[13.5px]'>
                {linkLabel[l.kind]}
                <ArrowUpRight size={14} strokeWidth={2.2} aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </Item>
  );
}

export default function Products() {
  const { t } = useLang();
  return (
    <section id='products' className='section band'>
      <div className='container'>
        <SectionHeading eyebrow={t.products.eyebrow} title={t.products.title} desc={t.products.desc} />
        <Tchin />
        <Reveal className='mt-14 mb-6'>
          <h3 className='text-[15px] font-semibold text-muted'>{t.products.oss}</h3>
        </Reveal>
        <Stagger className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {PRODUCTS_OSS.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </Stagger>
      </div>
    </section>
  );
}
