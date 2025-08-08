'use client';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/cart-context';
import Image from 'next/image';
import { Minus, Plus, Trash2, Sparkles } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';
import { Separator } from './ui/separator';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { useState, useMemo } from 'react';
import RecipeSuggestions from './recipe-suggestions';

interface CartProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

const orderSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  address: z.string().min(10, { message: 'Please enter a full address.' }),
});

export default function Cart({ isOpen, onOpenChange }: CartProps) {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems, clearCart } = useCart();
  const { toast } = useToast();
  const [isRecipeDialogOpen, setIsRecipeDialogOpen] = useState(false);

  const form = useForm<z.infer<typeof orderSchema>>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      name: '',
      email: '',
      address: '',
    },
  });

  function onSubmit(values: z.infer<typeof orderSchema>) {
    console.log('Order Submitted:', { ...values, cart, totalPrice });
    toast({
      title: 'Order Placed!',
      description: 'Thank you for your purchase. We will be in touch shortly.',
    });
    form.reset();
    clearCart();
    onOpenChange(false);
  }

  const vegetableItems = useMemo(() => cart.filter(item => item.product.category === 'Vegetable'), [cart]);

  return (
    <>
      <Sheet open={isOpen} onOpenChange={onOpenChange}>
        <SheetContent className="flex w-full flex-col sm:max-w-lg">
          <SheetHeader>
            <SheetTitle className="font-headline text-2xl">Your Cart ({totalItems})</SheetTitle>
          </SheetHeader>
          <Separator />
          {cart.length === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
              <h3 className="text-lg font-semibold">Your cart is empty</h3>
              <p className="text-muted-foreground">
                Looks like you haven't added anything yet.
              </p>
              <SheetClose asChild>
                <Button>Continue Shopping</Button>
              </SheetClose>
            </div>
          ) : (
            <div className="flex flex-1 flex-col justify-between">
              <ScrollArea className="flex-1 pr-4">
                <div className="flex flex-col gap-4 py-4">
                  {cart.map(({ product, quantity }) => (
                    <div key={product.id} className="flex items-center gap-4">
                      <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
                        <Image src={product.image} alt={product.name} layout="fill" objectFit="cover" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{product.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          ${product.price.toFixed(2)}
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                          <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => updateQuantity(product.id, quantity - 1)}>
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-8 text-center">{quantity}</span>
                          <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => updateQuantity(product.id, quantity + 1)}>
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <p className="font-bold">${(product.price * quantity).toFixed(2)}</p>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive" onClick={() => removeFromCart(product.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
              
              <SheetFooter className="mt-auto flex flex-col gap-4">
                <Separator />
                {vegetableItems.length > 0 && (
                  <Button variant="outline" onClick={() => setIsRecipeDialogOpen(true)} className="w-full">
                    <Sparkles className="mr-2 h-4 w-4 text-yellow-500" /> Get AI Recipe Ideas
                  </Button>
                )}
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                
                <div className="space-y-4 rounded-lg border bg-secondary/50 p-4">
                  <h3 className="font-headline text-xl">Checkout</h3>
                   <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField control={form.control} name="name" render={({ field }) => (
                        <FormItem><FormLabel>Full Name</FormLabel><FormControl><Input placeholder="Jane Doe" {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                      <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem><FormLabel>Email</FormLabel><FormControl><Input placeholder="jane.doe@example.com" {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                       <FormField control={form.control} name="address" render={({ field }) => (
                        <FormItem><FormLabel>Shipping Address</FormLabel><FormControl><Input placeholder="123 Fresh St, Foodville" {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                      <Button type="submit" className="w-full">Place Order</Button>
                    </form>
                  </Form>
                </div>
              </SheetFooter>
            </div>
          )}
        </SheetContent>
      </Sheet>
      {isRecipeDialogOpen && (
        <RecipeSuggestions 
          isOpen={isRecipeDialogOpen}
          onOpenChange={setIsRecipeDialogOpen}
          vegetables={vegetableItems.map(item => item.product.name)}
        />
      )}
    </>
  );
}
