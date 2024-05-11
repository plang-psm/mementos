import type { Metadata } from 'next';
import { Raleway, Waterfall } from 'next/font/google';
import '@styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
});
const waterfall = Waterfall({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-waterfall',
});

export const metadata: Metadata = {
  title: 'Mementos',
  description: 'Photo Booth rental company based in Los Angeles',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${raleway.variable} ${waterfall.variable} font-sans`}
    >
      <body>
        <main>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
