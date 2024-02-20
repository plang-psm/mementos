import type { Metadata } from 'next';
import { Raleway, Dancing_Script, Tangerine } from 'next/font/google';
import '@styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// export const raleway = Raleway({ subsets: ['latin']})

const dancingScriot = Tangerine({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ds',
})
const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rw',
})

export const metadata: Metadata = {
  title: 'Mementos',
  description: 'Photobooth business based in Los',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${raleway.variable} ${dancingScriot.variable} font-sans`}>
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
