import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'WILD CLUB TUNISIE | Camping Authentique & Summer in December',
  description:
    'Rejoins la communauté outdoor tunisienne Wild Club (@wildclub.tn). Pré-inscription à l’édition Summer in December et espace sponsoring.',
  openGraph: {
  title: 'WILD CLUB TUNISIE — Summer in December',
  description: 'L’aventure sauvage en Tunisie. Zéro filtre, 100% liberté.',
  siteName: 'Wild Club Tunisie',
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
    <html lang="fr" className="scroll-smooth">
      <body className="bg-[#0B0F0D] text-stone-100 antialiased selection:bg-orange-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
