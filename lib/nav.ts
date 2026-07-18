export const NAV_ITEMS = [
  { id: 'hero', label: 'Intro' },
  { id: 'about', label: 'About' },
  { id: 'problem', label: 'Problem' },
  { id: 'research', label: 'Research' },
  { id: 'define', label: 'Define' },
  { id: 'ideation', label: 'Ideation' },
  { id: 'design', label: 'Design' },
  { id: 'final', label: 'Final' },
  { id: 'reflection', label: 'Reflection' },
] as const;

export const NAV_ITEMS_KO = [
  { id: 'hero', label: '소개' },
  { id: 'about', label: '서비스' },
  { id: 'problem', label: '문제' },
  { id: 'research', label: '리서치' },
  { id: 'define', label: '정의' },
  { id: 'ideation', label: '아이데이션' },
  { id: 'design', label: '디자인' },
  { id: 'final', label: '최종' },
  { id: 'reflection', label: '회고' },
] as const;

export type NavId = (typeof NAV_ITEMS)[number]['id'];

export type Locale = 'en' | 'ko';

/* Portfolio-level nav shown over the hero, linking back to the main site. */
const PORTFOLIO_BASE = 'https://wizzy22-lab.github.io/Wizzy/';

export const PORTFOLIO_NAV_BY_LOCALE: Record<
  Locale,
  {
    brand: string;
    role: string;
    links: { label: string; href: string; active?: boolean }[];
  }
> = {
  en: {
    brand: 'wizzy',
    role: 'Product designer',
    links: [
      { label: 'PROJECT', href: `${PORTFOLIO_BASE}#projects`, active: true },
      { label: 'ABOUT', href: `${PORTFOLIO_BASE}#about` },
      { label: 'RESUME', href: `${PORTFOLIO_BASE}assets/resume.pdf` },
    ],
  },
  ko: {
    brand: 'wizzy',
    role: '프로덕트 디자이너',
    links: [
      { label: '프로젝트', href: `${PORTFOLIO_BASE}#projects`, active: true },
      { label: '소개', href: `${PORTFOLIO_BASE}#about` },
      { label: '이력서', href: `${PORTFOLIO_BASE}assets/resume.pdf` },
    ],
  },
};

export const NAV_BY_LOCALE: Record<Locale, ReadonlyArray<{ id: NavId; label: string }>> = {
  en: NAV_ITEMS,
  ko: NAV_ITEMS_KO,
};
