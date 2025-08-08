import { Button } from '@/components/ui/button';
import Image from 'next/image';
import hero_image from '@/assets/hero_image.jpg'

export default function Hero() {
  return (
    <section className="relative h-[60vh] min-h-[400px] w-full">
      <Image
      src={hero_image}
  alt="A vibrant display of fresh fruits and vegetables"
        data-ai-hint="fresh vegetables"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white p-4">
        <h1 className="font-headline text-5xl md:text-7xl font-bold leading-tight drop-shadow-lg animate-fade-in-down">
          Freshness from Farm to Front Door
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl font-body drop-shadow-md animate-[fade-in-up_0.5s_ease-out_0.4s_forwards]">
          Experience the taste of real, seasonal produce, harvested with care and delivered with a smile.
        </p>
        <Button size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg animate-[fade-in-up_0.5s_ease-out_0.8s_forwards]" asChild>
          <a href="#products">Shop Now</a>
        </Button>
      </div>
    </section>
  );
}
