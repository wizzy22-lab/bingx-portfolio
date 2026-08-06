import type { Metadata } from 'next';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import '../design-system/index.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'BingX AI Master — Case Study',
  description:
    'Designing a decision structure for AI-driven crypto trading — so first-time investors can choose an agent with confidence, not impressions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Font loading lives here, not in a stylesheet — see design-system/fonts.css. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500&family=Azeret+Mono:wght@400&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css"
        />
        {/* Contentsquare UX analytics — this layout is shared by / and /ko,
            so the tag lands on both locales. */}
        <script src="https://t.contentsquare.net/uxa/c15c6a0ad1b24.js" defer />
      </head>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
