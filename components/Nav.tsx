'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_BY_LOCALE, type Locale, type NavId } from '@/lib/nav';

export default function Nav() {
  const pathname = usePathname();
  const locale: Locale = pathname?.startsWith('/ko') ? 'ko' : 'en';
  const items = NAV_BY_LOCALE[locale];
  const homeHref = locale === 'ko' ? '/ko' : '/';
  const brand = locale === 'ko' ? 'BingX AI 마스터' : 'BingX AI Master';

  const [active, setActive] = useState<NavId>('hero');

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

  const navLinkClass = `ds-nav-link${locale === 'ko' ? ' ds-kr' : ''}`;

  return (
    <nav className="site-nav" aria-label="Section navigation">
      <Link href={homeHref} className={`site-nav__brand${locale === 'ko' ? ' ds-kr' : ''}`}>
        {brand}
      </Link>
      <div className="site-nav__links">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`${navLinkClass}${active === item.id ? ' is-active' : ''}`}
            aria-current={active === item.id ? 'page' : undefined}
          >
            {item.label}
          </a>
        ))}
      </div>
      <div className="site-nav__lang" role="group" aria-label="Language">
        <Link
          href="/"
          className={`site-nav__lang-btn${locale === 'en' ? ' is-active' : ''}`}
          aria-current={locale === 'en' ? 'true' : undefined}
        >
          EN
        </Link>
        <span className="site-nav__lang-sep" aria-hidden="true">/</span>
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
