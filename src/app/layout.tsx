import type { Metadata, Viewport } from 'next';
import { Inter, Instrument_Serif } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { LangProvider } from '@/contexts/lang';
import Nav from '@/components/site/nav';
import Footer from '@/components/site/footer';
import './globals.css';

const sans = Inter({
  subsets: ['latin', 'latin-ext', 'cyrillic'],
  variable: '--font-sans',
  display: 'swap',
});

const serif = Instrument_Serif({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const TITLE = 'Tondji Lee — Ingénieur Logiciel & Designer';
const DESC =
  'Ingénieur logiciel basé à Paris, 9 ans d’expérience. React, Next.js, TypeScript, Node.js, design systems et accessibilité. Disponible pour un nouveau poste.';

export const metadata: Metadata = {
  metadataBase: new URL('https://ebirly.com'),
  title: { default: TITLE, template: '%s · Tondji Lee' },
  description: DESC,
  openGraph: { title: TITLE, description: DESC, url: 'https://ebirly.com', siteName: 'Tondji Lee', locale: 'fr_FR', type: 'website' },
  twitter: { title: TITLE, description: DESC, card: 'summary_large_image' },
  robots: { index: true, follow: true },
  icons: { icon: '/ebirly.png', apple: '/ebirly.png' },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7f7f5' },
    { media: '(prefers-color-scheme: dark)', color: '#0b0b0c' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='fr' suppressHydrationWarning>
      <body className={`${sans.variable} ${serif.variable} font-sans`}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <LangProvider>
            <a
              href='#main'
              className='sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-fg focus:px-4 focus:py-2 focus:text-bg'
            >
              Skip to content
            </a>
            <Nav />
            <main id='main'>{children}</main>
            <Footer />
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
