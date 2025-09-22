import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/ui/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Danktt',
  description: 'My personal website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <meta httpEquiv="Permissions-Policy" content="interest-cohort=()" />
      <body
        className={`${inter.className} min-h-screen bg-gradient-to-br from-black via-gray-900 to-black`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="relative z-10 pt-24 pb-8">
            <div className="mx-auto w-full max-w-7xl px-6">{children}</div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
