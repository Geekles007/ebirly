'use client';

import { useEffect, useRef, useState } from 'react';
import Clock from './clock';
import CvDownloadBtn from './cv-download-btn';
import LangSwitcher from './lang-switcher';
import { useLang } from '@/contexts/lang';

export default function Nav() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const hasOpened = useRef(false);

  /* Manage the dialog: scroll lock, background inert, focus & Escape */
  useEffect(() => {
    const main = document.getElementById('top');
    if (open) {
      hasOpened.current = true;
      document.body.style.overflow = 'hidden';
      main?.setAttribute('inert', ''); // page content not focusable behind the modal
      // move focus into the dialog
      overlayRef.current?.querySelector<HTMLElement>('a')?.focus();
      const onKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setOpen(false);
      };
      window.addEventListener('keydown', onKey);
      return () => window.removeEventListener('keydown', onKey);
    }
    document.body.style.overflow = '';
    main?.removeAttribute('inert');
    // return focus to the trigger after the menu was used
    if (hasOpened.current) toggleRef.current?.focus();
  }, [open]);

  return (
    <>
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

          <div className="nav-actions">
            <LangSwitcher />
            <CvDownloadBtn />
            <button
              ref={toggleRef}
              type="button"
              className="nav-toggle"
              aria-expanded={open}
              aria-controls="nav-overlay"
              aria-label={open ? t.menu.close : t.menu.open}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="nav-toggle-label">
                {open ? t.menu.close : t.menu.open}
              </span>
              <span className="nav-toggle-icon" data-open={open}>
                <i />
                <i />
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>

    {/* Full-screen index overlay (sibling of nav so the header stays clickable above it) */}
      <div
        ref={overlayRef}
        id="nav-overlay"
        className="nav-overlay"
        data-open={open}
        role="dialog"
        aria-modal="true"
        aria-label={t.menu.title}
        hidden={!open}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(false);
        }}
      >
        <div className="wrap">
          <span className="nav-overlay-title">{t.menu.title}</span>
          <ul className="nav-overlay-list">
            {t.nav.map((item) => (
              <li key={item.h}>
                <a href={item.h} onClick={() => setOpen(false)}>
                  <span className="no-num">{item.n}</span>
                  <span className="no-label">{item.l}</span>
                  <span className="no-arrow">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
