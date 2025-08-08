
import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { CartProvider } from '@/context/cart-context';
import { Toaster } from '@/components/ui/toaster';
import { Poppins } from 'next/font/google';
import Header from '@/components/header';
import Footer from '@/components/footer';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'FarmFresh Delivered',
  description: 'Farm-fresh fruits and vegetables, delivered to your door.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased',
          poppins.variable
        )}
      >
        <CartProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </CartProvider>
        <Toaster />
      </body>
    </html>
  );
}
