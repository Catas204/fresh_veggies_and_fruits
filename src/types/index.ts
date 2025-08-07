import type { StaticImageData } from "next/image";

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string | StaticImageData;
  dataAiHint?: string;
  category: 'Fruit' | 'Vegetable' | 'Seasonal Box';
};

export type CartItem = {
  product: Product;
  quantity: number;
};

export type Testimonial = {
  quote: string;
  name: string;
  location: string;
}
