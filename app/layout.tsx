import type { Metadata } from 'next';
import {
  Plus_Jakarta_Sans,
  Playfair_Display,
  Great_Vibes,
  Anton,
} from 'next/font/google';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-serif',
});

const scriptFont = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-script',
});

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tunir-digital.com'),
  title: 'WILD CLUB | Life Hits Different — Enjoy the Summer in December',
  description:
    'Life Hits Different With Wild Club. La communauté tunisienne de camping authentique et d’exploration outdoor.',
  openGraph: {
    title: 'WILD CLUB — Enjoy the Summer in December',
    description: 'Life Hits Different With Wild Club.',
    siteName: 'Wild Club',
    images: ['/images/og-wildclub.jpg'],
    locale: 'fr_TN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${jakarta.variable} ${playfair.variable} ${scriptFont.variable} ${anton.variable} scroll-smooth`}
    >
      <body className="bg-[#14100C] text-[#FFFDF7] font-sans antialiased selection:bg-[#F5C518] selection:text-[#14100C]">
        {children}
      </body>
    </html>
  );
}
