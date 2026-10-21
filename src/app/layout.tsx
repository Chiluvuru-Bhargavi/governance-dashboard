import type { Metadata } from 'next';
import { Playfair_Display, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { EraFilterProvider } from '../context/EraFilterContext';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Comparative Governance Archive: UPA vs. NDA Statutory Audit',
  description:
    'Empirical, politically neutral statutory audit comparing the United Progressive Alliance (2004–2014) and National Democratic Alliance (2014–Present) across macroeconomics, internal security, defence, women’s safety, and manifesto delivery.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased bg-[#FBF9F6] text-stone-900 transition-colors font-sans selection:bg-stone-200 selection:text-stone-900 min-h-screen">
        <EraFilterProvider>{children}</EraFilterProvider>
      </body>
    </html>
  );
}
