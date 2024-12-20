import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';

import '../globals.css';

import { routing } from '@/i18n/routing';
import LoadingContextProvider from '@/utils/loadingContext/context';
import ToastContextProvider from '@/utils/toastContext/context';

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

const fontInter = Inter({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  style: 'normal',
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Wise Checkout',
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang='en-US'>
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
      <body className={`${fontInter.className} bg-white`}>
        <NextIntlClientProvider messages={messages}>
          <LoadingContextProvider>
            <ToastContextProvider>{children}</ToastContextProvider>
          </LoadingContextProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
