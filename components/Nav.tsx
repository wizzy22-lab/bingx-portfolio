'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LINKS = [
  { label: 'PROJECT', active: true },
  { label: 'ABOUT', active: false },
  { label: 'RESUME', active: false },
] as const;

export default function Nav() {
  const pathname = usePathname();
  const locale = pathname?.startsWith('/ko') ? 'ko' : 'en';
  const homeHref = locale === 'ko' ? '/ko' : '/';
  const role = locale === 'ko' ? '프로덕트 디자이너' : 'Product designer';
  const krClass = locale === 'ko' ? ' ds-kr' : '';

  return (
    <nav className="site-nav" aria-label="Primary navigation">
      <Link href={homeHref} className={`site-nav__brand${krClass}`}>
        <span className="site-nav__brand-name">wizzy</span>
        <span className="site-nav__brand-role">{role}</span>
      </Link>
      <div className="site-nav__links">
        {LINKS.map((item) => (
          <a
            key={item.label}
            href={item.active ? homeHref : '#'}
            className={`ds-nav-link${krClass}${item.active ? ' is-active' : ''}`}
            aria-current={item.active ? 'page' : undefined}
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
