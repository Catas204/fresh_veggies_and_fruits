
import Image from 'next/image';
import { Button } from './ui/button';
import story_image from '@/assets/story.png'

const Images={
  'story':story_image
}

export default function OurStory() {
  return (
    <section className="bg-transparent py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center bg-background/80 backdrop-blur-sm p-8 rounded-lg shadow-lg">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-bold font-headline text-primary mb-4">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-4">
              From a small family-run plot to a thriving community of local growers, our mission has always been the same: to bring the freshest, most nutritious produce from our fields to your table. We believe in sustainable farming, community, and the simple joy of eating real food.
            </p>
            <p className="text-muted-foreground mb-6">
              Every item in our store is a testament to this commitment. We partner with local farmers who share our values, ensuring that every fruit and vegetable is grown with care for the land and for the people who enjoy it.
            </p>
            <Button>Learn More About Our Farm</Button>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg group">
                <Image
                    src={Images['story']}
                    data-ai-hint="farmer holding vegetables"
                    alt="Farmer holding a basket of fresh vegetables"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
