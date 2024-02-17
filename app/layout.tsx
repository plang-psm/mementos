import type { Metadata } from 'next';
import { Inter, Raleway } from 'next/font/google';
import '@styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });
const raleway = Raleway({ subsets: ['latin']})

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
    <html lang='en'>
      <body className={raleway.className}>
        <main>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
