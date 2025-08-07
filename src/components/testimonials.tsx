'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/lib/data";
import { Quote } from "lucide-react";
import type { Testimonial } from "@/types";

export default function Testimonials() {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-headline text-primary">From Our Customers</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what people are saying.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial: Testimonial, index: number) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="flex flex-col h-full justify-between p-6 bg-secondary/50 shadow-md">
                    <CardContent className="p-0">
                      <Quote className="h-8 w-8 text-primary mb-4" />
                      <p className="italic text-foreground mb-4">"{testimonial.quote}"</p>
                      <div>
                        <p className="font-bold font-headline">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
