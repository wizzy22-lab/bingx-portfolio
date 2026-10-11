'use client';

import { useEffect, useState } from 'react';
import type { GlobalNavLink } from '@/lib/nav';

/* The breakpoint the bar folds at — the main portfolio's `lg`. */
const WIDE_QUERY = '(min-width: 1024px)';

/**
 * The global nav below 1024px, ported from the main portfolio.
 *
 * The wordmark, four links and the language toggle need 531px in the widest
 * locale, so below `lg` the links fold behind a button and the bar keeps only
 * the wordmark and the button for them.
 */
export default function MobileMenu({
  links,
  label,
  children,
}: {
  links: GlobalNavLink[];
  /* Accessible name for the button — localized by the caller. */
  label: string;
  /* The language toggle, handed down so both bars share one. */
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  // Widening past the breakpoint puts the full nav back in the bar, so the
  // crossing closes the panel rather than leaving a second copy open.
  useEffect(() => {
    const mq = window.matchMedia(WIDE_QUERY);
    const onChange = () => {
      if (mq.matches) setOpen(false);
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return (
    <div className="site-header__mobile">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={label}
        className="site-header__menu-btn"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
          {open ? (
            <>
              <path d="M4 4 L16 16" stroke="currentColor" strokeWidth="1.25" />
              <path d="M16 4 L4 16" stroke="currentColor" strokeWidth="1.25" />
            </>
          ) : (
            <>
              <path d="M2 5 H18" stroke="currentColor" strokeWidth="1.25" />
              <path d="M2 10 H18" stroke="currentColor" strokeWidth="1.25" />
              <path d="M2 15 H18" stroke="currentColor" strokeWidth="1.25" />
            </>
          )}
        </svg>
      </button>

      <div id="mobile-nav" hidden={!open} className="site-header__panel">
        <nav className="site-header__panel-nav" aria-label="Portfolio">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              // A hash link remounts nothing, so the panel takes itself down.
              onClick={() => setOpen(false)}
              className="site-header__link"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="site-header__panel-lang">{children}</div>
      </div>
    </div>
  );
}
