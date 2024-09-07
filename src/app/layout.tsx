import type { Metadata } from 'next';
import './globals.css';
import { Navigation, Footer } from '../core/components';

import { Inter as FontSans } from 'next/font/google';

import { cn } from '@/lib/utils';
import styles from './styles.module.css';
import { Providers } from '@/src/core/providers/Providers';
import SessionGuard from '@/src/core/providers/SessionGuard';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <Providers>
          <SessionGuard>
            <Navigation></Navigation>
            <div className={styles.content}>{children}</div>
            <Footer></Footer>
          </SessionGuard>
        </Providers>
      </body>
    </html>
  );
}
