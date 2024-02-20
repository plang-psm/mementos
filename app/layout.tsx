import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import '@styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
    <html lang='en' className={`${raleway.variable} font-sans`}>
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
