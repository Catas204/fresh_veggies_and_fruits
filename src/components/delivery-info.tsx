import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Leaf, Truck, Calendar } from "lucide-react";

const infoItems = [
    {
        icon: Truck,
        title: "Same-Day Delivery",
        description: "We deliver fresh to your door every day of the week, including weekends."
    },
    {
        icon: Clock,
        title: "Order Cut-Off",
        description: "Place your order before 2 PM for same-day delivery. Orders after 2 PM will arrive the next day."
    },
    {
        icon: Leaf,
        title: "Freshness Guarantee",
        description: "Our produce is picked at peak ripeness and delivered within hours to ensure maximum flavor and nutrition."
    },
    {
        icon: Calendar,
        title: "Flexible Scheduling",
        description: "Choose your preferred delivery day at checkout to fit your schedule perfectly."
    }
];

export default function DeliveryInfo() {
  return (
    <section className="py-12 md:py-20 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-headline text-primary">How It Works</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            Getting fresh produce has never been easier.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {infoItems.map((item, index) => (
                <Card key={index} className="text-center bg-card shadow-sm hover:shadow-lg transition-shadow border-none">
                    <CardHeader>
                        <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit">
                           <item.icon className="h-10 w-10 text-primary" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <CardTitle className="text-xl font-headline mb-2">{item.title}</CardTitle>
                        <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
