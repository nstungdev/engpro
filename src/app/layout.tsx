import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Engpro',
    default: 'Engpro - English Learning Platform',
  },
  description:
    'Learn English vocabulary and grammar with Engpro - your comprehensive English learning platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="bg-sky-600 text-white p-4">
          <h1 className="text-2xl font-bold">Engpro</h1>
        </header>
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
