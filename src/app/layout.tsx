import Navbar from '@/components/navbar';
import { ThemeProvider } from '@/components/theme-provider';
import { TooltipProvider } from '@/components/ui/tooltip';
import { DATA } from '@/data/resume';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
import './globals.css';
import dynamic from 'next/dynamic';

const CustomCursor = dynamic(() => import('@/components/custom-cursor'), {
  ssr: false,
});

// const fontSans = Inter({
//   subsets: ['latin'],
//   variable: '--font-sans',
// });

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    card: 'summary_large_image',
  },
  verification: {
    google: '',
    yandex: '',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'mx-auto min-h-screen max-w-2xl bg-background px-6 py-12 font-sans antialiased sm:py-24'
          // fontSans.variable
        )}
      >
        <ThemeProvider attribute='class' defaultTheme='light'>
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
            <CustomCursor />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}