import type { Metadata } from 'next';
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import Nav from '@/components/nav';
import CursorFx from '@/components/cursor-fx';
import { LangProvider } from '@/contexts/lang';
import './globals.css';

const fontSans = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
});

const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ebirly.com'),
  title: {
    default: 'Tondji Lee — Engineer & Designer',
    template: '%s | Tondji Lee',
  },
  description:
    'Software Engineer & Graphic Designer based in Paris. I build fast, precise interfaces with React, Next.js, and a strong eye for design.',
  openGraph: {
    title: 'Tondji Lee — Engineer & Designer',
    description:
      'Software Engineer & Graphic Designer based in Paris. I build fast, precise interfaces with React, Next.js, and a strong eye for design.',
    url: 'https://ebirly.com',
    siteName: 'Tondji Lee',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
  twitter: { title: 'Tondji Lee', card: 'summary_large_image' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontSans.variable} ${fontMono.variable}`}>
        {/* Decorative fixed layers */}
        <div className="grid-bg" aria-hidden="true" />
        <div className="noise"   aria-hidden="true" />
        <div className="scanline" aria-hidden="true" />

        {/* Custom cursor */}
        <div id="cursor-dot"  className="cursor-dot"  aria-hidden="true" />
        <div id="cursor-ring" className="cursor-ring" aria-hidden="true" />
        <CursorFx />

        <LangProvider>
          <Nav />
          <main id="top">{children}</main>
        </LangProvider>
      </body>
    </html>
  );
}
