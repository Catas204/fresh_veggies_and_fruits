
'use client';

import { Leaf, ShoppingCart, LayoutDashboard, User, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/cart-context';
import Cart from '@/components/cart';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const { totalItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <a href="/" className="flex items-center gap-2" aria-label="your company name Home">
            <Leaf className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold tracking-tight text-foreground font-headline">
              your company name
            </span>
          </a>
          <div className="flex items-center gap-2">
             <Button
              variant="ghost"
              size="icon"
              asChild
            >
              <Link href="/" aria-label="Home">
                <Home className="h-6 w-6" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
            >
              <Link href="/dashboard" aria-label="Dashboard">
                <LayoutDashboard className="h-6 w-6" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
            >
              <Link href="/profile" aria-label="User Profile">
                <User className="h-6 w-6" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={() => setIsCartOpen(true)}
              aria-label={`Open shopping cart with ${totalItems} items`}
            >
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {totalItems}
                </span>
              )}
            </Button>
          </div>
        </div>
      </header>
      <Cart isOpen={isCartOpen} onOpenChange={setIsCartOpen} />
    </>
  );
}
