
import type { Product, Testimonial } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Organic Avocados',
    price: 4.99,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'avocado fruit',
    category: 'Fruit',
  },
  {
    id: '2',
    name: 'Juicy Strawberries',
    price: 3.5,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'ripe strawberries',
    category: 'Fruit',
  },
  {
    id: '3',
    name: 'Crisp Red Apples',
    price: 2.75,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'red apple',
    category: 'Fruit',
  },
  {
    id: '4',
    name: 'Sweet Bananas',
    price: 1.99,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'banana bunch',
    category: 'Fruit',
  },
  {
    id: '5',
    name: 'Fresh Carrots',
    price: 2.2,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'carrot bunch',
    category: 'Vegetable',
  },
  {
    id: '6',
    name: 'Green Broccoli',
    price: 2.5,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'broccoli floret',
    category: 'Vegetable',
  },
  {
    id: '7',
    name: 'Spinach Bunch',
    price: 3.0,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'spinach leaves',
    category: 'Vegetable',
  },
  {
    id: '8',
    name: 'Ripe Tomatoes',
    price: 2.8,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'vine tomato',
    category: 'Vegetable',
  },
  {
    id: '9',
    name: 'Summer Seasonal Box',
    price: 25.0,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'summer vegetables',
    category: 'Seasonal Box',
  },
  {
    id: '10',
    name: 'Winter Harvest Box',
    price: 30.0,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'winter vegetables',
    category: 'Seasonal Box',
  },
   {
    id: '11',
    name: 'Bell Peppers',
    price: 3.20,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'bell pepper',
    category: 'Vegetable',
  },
  {
    id: '12',
    name: 'Organic Blueberries',
    price: 5.50,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'fresh blueberries',
    category: 'Fruit',
  },
];

export const testimonials: Testimonial[] = [
    {
        quote: "The produce is always incredibly fresh and delivery is so convenient. FarmFresh has changed the way my family eats!",
        name: "Sarah L.",
        location: "New York, NY"
    },
    {
        quote: "I love the seasonal boxes! It's like getting a surprise gift of health every week. The quality is unmatched.",
        name: "Michael B.",
        location: "Austin, TX"
    },
    {
        quote: "As a chef, I rely on the best ingredients. FarmFresh delivers restaurant-quality vegetables right to my home kitchen.",
        name: "Chloe T.",
        location: "San Francisco, CA"
    },
    {
        quote: "The recipe suggestion tool is a game-changer for weeknight dinners. So creative and helps me use everything I buy.",
        name: "David R.",
        location: "Chicago, IL"
    }
]

export const salesData = [
  { name: 'Jan', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Feb', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Mar', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Apr', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'May', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Jun', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Jul', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Aug', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Sep', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Oct', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Nov', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Dec', total: Math.floor(Math.random() * 5000) + 1000 },
];

export const popularProducts = [
  { productId: '2', sales: 123 },
  { productId: '1', sales: 115 },
  { productId: '6', sales: 98 },
  { productId: '9', sales: 85 },
  { productId: '5', sales: 72 },
];

export const overviewData = {
  totalRevenue: 98453,
  sales: 1294,
  newCustomers: 231,
}
