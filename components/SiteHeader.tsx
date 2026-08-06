'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  GLOBAL_NAV_BY_LOCALE,
  NAV_BY_LOCALE,
  type Locale,
  type NavId,
} from '@/lib/nav';

/**
 * Two stacked bars sharing one translucent surface:
 *   row 1 — the global portfolio nav, identical to the main site
 *   row 2 — this case study's section anchors
 * No rule between them; the border sits only under the second row.
 */
export default function SiteHeader() {
  const pathname = usePathname();
  const locale: Locale = pathname?.startsWith('/ko') ? 'ko' : 'en';
  const global = GLOBAL_NAV_BY_LOCALE[locale];
  const items = NAV_BY_LOCALE[locale];

  const [active, setActive] = useState<NavId>('hero');

  // Track the section currently in view for the anchor bar.
  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActive(visible[0].target.id as NavId);
        }
      },
      {
        rootMargin: '-30% 0% -60% 0%',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  return (
    <header className="site-header" data-theme="dark">
      <div className="site-header__bar">
        <div className="site-header__inner">
          <a className="site-header__wordmark" href={global.home}>
            wizzy
          </a>

          <div className="site-header__right">
            <nav className="site-header__nav" aria-label="Portfolio">
              {global.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="site-header__link"
                  {...(link.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="site-header__lang" role="group" aria-label="Language">
              {locale === 'en' ? (
                <span className="site-header__lang-current" aria-current="true">
                  EN
                </span>
              ) : (
                <Link href="/" hrefLang="en" className="site-header__lang-link">
                  EN
                </Link>
              )}
              <span className="site-header__lang-sep" aria-hidden="true">
                /
              </span>
              {locale === 'ko' ? (
                <span className="site-header__lang-current" aria-current="true">
                  KO
                </span>
              ) : (
                <Link href="/ko" hrefLang="ko" className="site-header__lang-link">
                  KO
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="case-anchors">
        <div className="case-anchors__inner">
          <nav className="case-anchors__nav" aria-label="Sections">
            {items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`case-anchors__link${active === item.id ? ' is-active' : ''}`}
                aria-current={active === item.id ? 'true' : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
