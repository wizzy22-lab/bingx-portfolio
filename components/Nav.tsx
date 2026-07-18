'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  NAV_BY_LOCALE,
  PORTFOLIO_NAV_BY_LOCALE,
  type Locale,
  type NavId,
} from '@/lib/nav';

export default function Nav() {
  const pathname = usePathname();
  const locale: Locale = pathname?.startsWith('/ko') ? 'ko' : 'en';
  const items = NAV_BY_LOCALE[locale];
  const portfolio = PORTFOLIO_NAV_BY_LOCALE[locale];
  const homeHref = locale === 'ko' ? '/ko' : '/';

  const [active, setActive] = useState<NavId>('hero');
  const [pastHero, setPastHero] = useState(false);

  // Swap the portfolio-level nav for the in-page section nav once the hero
  // scrolls out of view.
  useEffect(() => {
    const hero = document.getElementById('hero');
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setPastHero(!entry.isIntersecting),
      { rootMargin: '-64px 0px 0px 0px', threshold: 0 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  // Track the active section for the in-page nav.
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

  const krClass = locale === 'ko' ? ' ds-kr' : '';

  return (
    <nav className="site-nav" aria-label="Navigation">
      <div className="site-nav__main">
        {/* Portfolio-level nav (over the hero) */}
        <div
          className={`site-nav__layer${!pastHero ? ' is-visible' : ''}`}
          aria-hidden={pastHero}
        >
          <a
            href="https://wizzy22-lab.github.io/Wizzy/"
            target="_blank"
            rel="noopener noreferrer"
            className={`site-nav__portfolio-brand${krClass}`}
          >
            <span className="site-nav__portfolio-name">{portfolio.brand}</span>
            <span className="site-nav__portfolio-role">{portfolio.role}</span>
          </a>
          <div className="site-nav__links">
            {portfolio.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`ds-nav-link${krClass}${link.active ? ' is-active' : ''}`}
                aria-current={link.active ? 'page' : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* In-page section nav (after the hero) */}
        <div
          className={`site-nav__layer${pastHero ? ' is-visible' : ''}`}
          aria-hidden={!pastHero}
        >
          <Link href={homeHref} className={`site-nav__brand${krClass}`}>
            {locale === 'ko' ? 'BingX AI 마스터' : 'BingX AI Master'}
          </Link>
          <div className="site-nav__links">
            {items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`ds-nav-link${krClass}${active === item.id ? ' is-active' : ''}`}
                aria-current={active === item.id ? 'page' : undefined}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="site-nav__lang" role="group" aria-label="Language">
        <Link
          href="/"
          className={`site-nav__lang-btn${locale === 'en' ? ' is-active' : ''}`}
          aria-current={locale === 'en' ? 'true' : undefined}
        >
          EN
        </Link>
        <span className="site-nav__lang-sep" aria-hidden="true">
          /
        </span>
        <Link
          href="/ko"
          className={`site-nav__lang-btn${locale === 'ko' ? ' is-active' : ''}`}
          aria-current={locale === 'ko' ? 'true' : undefined}
        >
          KO
        </Link>
      </div>
    </nav>
  );
}
