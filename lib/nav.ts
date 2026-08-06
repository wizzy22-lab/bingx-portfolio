export type Locale = 'en' | 'ko';

/* -------------------------------------------------------------
   Case-page section anchors (the secondary bar under the global
   nav). Labels are authored in the reading language only — the
   bar never shows KO and EN side by side.
   ------------------------------------------------------------- */

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

export const NAV_BY_LOCALE: Record<Locale, ReadonlyArray<{ id: NavId; label: string }>> = {
  en: NAV_ITEMS,
  ko: NAV_ITEMS_KO,
};

/* -------------------------------------------------------------
   Global nav — the same one-line header the main portfolio runs.
   This case study is deployed on its own host, so every link back
   to the portfolio is absolute.
   ------------------------------------------------------------- */

export const MAIN_SITE = 'https://wizzydesign.space';

export const RESUME_URL: Record<Locale, string> = {
  en: `${MAIN_SITE}/HaejiWi_ProductDesigner_Resume_EN.pdf`,
  ko: `${MAIN_SITE}/HaejiWi_ProductDesigner_Resume_KO.pdf`,
};

export type GlobalNavLink = {
  label: string;
  href: string;
  /* Off-site documents open in a new tab; everything else stays put. */
  external?: boolean;
};

export const GLOBAL_NAV_BY_LOCALE: Record<
  Locale,
  { home: string; links: GlobalNavLink[] }
> = {
  en: {
    home: `${MAIN_SITE}/en`,
    links: [
      { label: 'project', href: `${MAIN_SITE}/en#project` },
      { label: 'about', href: `${MAIN_SITE}/en#about` },
      { label: 'resume', href: RESUME_URL.en, external: true },
      { label: 'contact', href: '#contact' },
    ],
  },
  ko: {
    home: `${MAIN_SITE}/ko`,
    links: [
      { label: '프로젝트', href: `${MAIN_SITE}/ko#project` },
      { label: '소개', href: `${MAIN_SITE}/ko#about` },
      { label: '이력서', href: RESUME_URL.ko, external: true },
      { label: '연락처', href: '#contact' },
    ],
  },
};

/* -------------------------------------------------------------
   Footer — same four columns as the main portfolio.
   ------------------------------------------------------------- */

export const EMAIL = 'hazzysw@gmail.com';
export const LINKEDIN = 'https://www.linkedin.com/in/haeji-wi';

export const FOOTER_COPY: Record<
  Locale,
  {
    connect: string;
    getInTouch: string;
    location: string;
    locationValue: string;
    resume: string;
    copied: string;
    copyHint: string;
  }
> = {
  en: {
    connect: 'Connect',
    getInTouch: 'Get in touch',
    location: 'Location',
    locationValue: 'Seoul, South Korea',
    resume: 'Resume',
    copied: 'Copied!',
    copyHint: 'Copy email address',
  },
  ko: {
    connect: '연결',
    getInTouch: '연락하기',
    location: '위치',
    locationValue: '서울, 대한민국',
    resume: '이력서',
    copied: 'Copied!',
    copyHint: '이메일 주소 복사',
  },
};
