import Header from '@/components/header';
import Hero from '@/components/hero';
import ProductShowcase from '@/components/product-showcase';
import OurStory from '@/components/our-story';
import DeliveryInfo from '@/components/delivery-info';
import Testimonials from '@/components/testimonials';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProductShowcase />
        <OurStory />
        <DeliveryInfo />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
