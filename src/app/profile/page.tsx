
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { User, Edit } from "lucide-react";

// Mock data for user and order history
const user = {
  name: "Alex Doe",
  email: "alex.doe@example.com",
  avatar: "https://placehold.co/100x100.png"
};

const orderHistory = [
  { id: "ORD001", date: "2023-10-26", total: 35.50, status: "Delivered" },
  { id: "ORD002", date: "2023-10-18", total: 22.00, status: "Delivered" },
  { id: "ORD003", date: "2023-10-05", total: 45.75, status: "Delivered" },
];

export default function ProfilePage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <h2 className="text-3xl font-bold tracking-tight">My Profile</h2>
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <Card>
            <CardHeader className="items-center text-center">
              <Avatar className="h-24 w-24 mb-2">
                <AvatarImage src={user.avatar} alt={user.name} data-ai-hint="person portrait" />
                <AvatarFallback>
                  <User className="h-12 w-12" />
                </AvatarFallback>
              </Avatar>
              <CardTitle className="text-2xl font-headline">{user.name}</CardTitle>
              <CardDescription>{user.email}</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button>
                <Edit className="mr-2 h-4 w-4" /> Edit Profile
              </Button>
            </CardContent>
          </Card>
        </div>
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Order History</CardTitle>
              <CardDescription>
                Review your past purchases with FarmFresh Delivered.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {orderHistory.map((order) => (
                  <li key={order.id}>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold">Order {order.id}</p>
                        <p className="text-sm text-muted-foreground">Date: {order.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">${order.total.toFixed(2)}</p>
                        <p className="text-sm text-green-600">{order.status}</p>
                      </div>
                    </div>
                    <Separator className="mt-4" />
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="mt-6 w-full">View All Orders</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
