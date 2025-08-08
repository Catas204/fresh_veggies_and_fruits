
import Hero from '@/components/hero';
import ProductShowcase from '@/components/product-showcase';
import OurStory from '@/components/our-story';
import DeliveryInfo from '@/components/delivery-info';
import Testimonials from '@/components/testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <ProductShowcase />
      <OurStory />
      <DeliveryInfo />
      <Testimonials />
    </>
  );
}
