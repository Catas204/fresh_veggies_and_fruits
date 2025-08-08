'use client';

import Image, { StaticImageData } from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useCart } from '@/context/cart-context';
import type { Product } from '@/types';
import { ShoppingCart } from 'lucide-react';
import Ripe_Tomatoes from '@/assets/tomatoes.jpg'
import Crisp_Red_Apples from '@/assets/apples.jpg'
import Organic_Avocados from '@/assets/avocado.jpg'
import Sweet_Bananas from '@/assets/banana.jpg'
import Bell_Peppers from '@/assets/bell_pepper.jpg'
import Organic_Blueberries from '@/assets/blue_berries.jpg'
import Green_Broccoli from '@/assets/broccoli.jpeg'
import Fresh_Carrots from '@/assets/carrots.jpg'
import Spinach_Bunch from '@/assets/spinach.webp'
import Summer_Seasonal_Box from '@/assets/summer_box.jpg'
import Winter_Harvest_Box from '@/assets/winter_box.jpg'
import Juicy_Strawberries from '@/assets/images.jpeg'

interface ProductCardProps {
  product: Product;
}

const ProductImages: Record<string, StaticImageData> = {
  'Ripe Tomatoes': Ripe_Tomatoes,
  'Crisp Red Apples': Crisp_Red_Apples,
  'Organic Avocados': Organic_Avocados,
  'Sweet Bananas': Sweet_Bananas,
  'Bell Peppers': Bell_Peppers,
  'Organic Blueberries': Organic_Blueberries,
  'Green Broccoli': Green_Broccoli,
  'Fresh Carrots': Fresh_Carrots,
  'Spinach Bunch': Spinach_Bunch,
  'Summer Seasonal Box': Summer_Seasonal_Box,
  'Winter Harvest Box': Winter_Harvest_Box,
  'Juicy Strawberries': Juicy_Strawberries,
};


export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <Card className="flex h-full flex-col overflow-hidden rounded-lg shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-none bg-background/60 group backdrop-blur-sm">
      <CardHeader className="p-0">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={ProductImages[product.name]}
            alt={product.name}
            data-ai-hint={product.dataAiHint}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </CardHeader>
      <CardContent className="flex-1 p-4">
        <CardTitle className="text-xl font-headline">{product.name}</CardTitle>
        <p className="mt-2 text-2xl font-bold text-primary">
          ${product.price.toFixed(2)}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full" onClick={() => addToCart(product)}>
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
