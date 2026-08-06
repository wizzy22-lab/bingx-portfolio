'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import {
  EMAIL,
  FOOTER_COPY,
  LINKEDIN,
  RESUME_URL,
  type Locale,
} from '@/lib/nav';

export default function SiteFooter() {
  const pathname = usePathname();
  const locale: Locale = pathname?.startsWith('/ko') ? 'ko' : 'en';
  const copy = FOOTER_COPY[locale];

  const [copied, setCopied] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (timer.current) window.clearTimeout(timer.current);
    },
    [],
  );

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      // Clipboard access can be blocked; fall back to a manual selection copy.
      const field = document.createElement('textarea');
      field.value = EMAIL;
      field.setAttribute('readonly', '');
      field.style.position = 'fixed';
      field.style.opacity = '0';
      document.body.appendChild(field);
      field.select();
      document.execCommand('copy');
      document.body.removeChild(field);
    }
    setCopied(true);
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(false), 1500);
  }

  return (
    <footer id="contact" data-theme="light" className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__layout">
          <div className="site-footer__cols">
            <div className="site-footer__col">
              <h2 className="site-footer__label">{copy.connect}</h2>
              <ul className="site-footer__list">
                <li>
                  <a
                    href={LINKEDIN}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="site-footer__item"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            <div className="site-footer__col">
              <h2 className="site-footer__label">{copy.getInTouch}</h2>
              <ul className="site-footer__list">
                <li>
                  <span className="site-footer__email">
                    <button
                      type="button"
                      onClick={copyEmail}
                      className="site-footer__item site-footer__copy"
                      aria-label={`${EMAIL} — ${copy.copyHint}`}
                    >
                      {EMAIL}
                    </button>
                    {/* Absolutely placed so the confirmation never widens the column. */}
                    <span
                      className={`site-footer__copied${copied ? ' is-visible' : ''}`}
                      aria-hidden={!copied}
                    >
                      {copy.copied}
                    </span>
                  </span>
                  <span aria-live="polite" className="sr-only">
                    {copied ? copy.copied : ''}
                  </span>
                </li>
                <li>
                  <a
                    href={RESUME_URL[locale]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="site-footer__item"
                  >
                    {copy.resume}
                  </a>
                </li>
              </ul>
            </div>

            <div className="site-footer__col">
              <h2 className="site-footer__label">{copy.location}</h2>
              <p className="site-footer__item site-footer__location">
                {copy.locationValue}
              </p>
            </div>
          </div>

          <div className="site-footer__mark">
            <p aria-hidden="true" className="site-footer__wordmark">
              wizzy
            </p>
            <p className="site-footer__copyright">© 2026 wizzy</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
