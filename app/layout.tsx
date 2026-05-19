import type { Metadata } from 'next';
import Nav from '@/components/Nav';
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
      <body>
        <Nav />
        {children}
        <footer className="site-footer">
          © 2026 BingX AI Master — Case Study. Designed by Hazzy.
        </footer>
      </body>
    </html>
  );
}
