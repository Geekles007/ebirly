'use client';

import Clock from './clock';
import CvDownloadBtn from './cv-download-btn';
import LangSwitcher from './lang-switcher';
import { useLang } from '@/contexts/lang';

export default function Nav() {
  const { t } = useLang();

  return (
    <nav className="site-nav">
      <div className="wrap">
        {/* Ticker */}
        <div className="top-ticker">
          <div className="t-group">
            <span>
              <span className="dot" style={{ marginRight: 8, verticalAlign: 'middle' }} />
              {t.status.online}
            </span>
            <span className="hide-sm">{t.ticker.location}</span>
            <span className="hide-sm">48.8566° N · 2.3522° E</span>
          </div>
          <div className="t-group">
            <span className="hide-sm">v5.0.0</span>
            <Clock />
          </div>
        </div>

        {/* Nav row */}
        <div className="nav-row">
          <a href="#top" className="brand">
            <span className="brand-mark" />
            <span>Tondji Lee</span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                color: 'var(--fg-dim)',
                fontSize: 11,
                marginLeft: 8,
                letterSpacing: '.15em',
              }}
            >
              / ENG &amp; DESIGN
            </span>
          </a>

          <div className="nav-links">
            {t.nav.map((item: { n: string; l: string; h: string }) => (
              <a key={item.h} href={item.h}>
                <span>{item.n}</span>
                {item.l}
              </a>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <LangSwitcher />
            <CvDownloadBtn />
          </div>
        </div>
      </div>
    </nav>
  );
}
