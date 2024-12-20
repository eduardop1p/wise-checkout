import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '../globals.css';
import { ReactNode } from 'react';

const fontInter = Inter({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  style: 'normal',
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Painel',
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang='pt-BR'>
      <head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link
          rel='shortcut icon'
          href='/assets/wise.webp'
          type='image/x-icon'
          sizes='any'
        />
      </head>
      <body className={`${fontInter.className} bg-white min-w-[1500px]`}>
        {children}
      </body>
    </html>
  );
}
