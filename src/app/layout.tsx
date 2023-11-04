import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { jaJP } from '@clerk/localizations';
import Header from './_components/layout/header/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'next14 practice',
  description: 'practice next14',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider localization={jaJP}>
      <html lang='ja'>
        <body className={inter.className}>
          <Header />
          <main className='mx-auto flex min-h-screen max-w-5xl flex-col place-content-center justify-between md:p-12'>
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
