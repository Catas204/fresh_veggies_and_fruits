'use client';

import { useState } from 'react';
import ProductCard from './product-card';
import { products } from '@/lib/data';
import { Button } from '@/components/ui/button';
import type { Product } from '@/types';

const categories: ('All' | Product['category'])[] = ['All', 'Fruit', 'Vegetable', 'Seasonal Box'];

export default function ProductShowcase() {
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]>('All');

  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <section 
      id="products" 
      className="py-12 md:py-20 bg-cover bg-center relative" 
      style={{ backgroundImage: "url('https://placehold.co/1920x1080.png?text=.')" }}
      data-ai-hint="tree background"
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-headline text-primary">Our Fresh Selection</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            Hand-picked with care, from our farm to your table.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-10">
          {categories.map(category => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'outline'}
              onClick={() => setActiveCategory(category)}
              className="rounded-full px-6 capitalize bg-background/80 backdrop-blur-sm"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fall-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
