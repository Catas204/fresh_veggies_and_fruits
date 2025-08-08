
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { DollarSign, ShoppingBag, Users, BarChart, TrendingUp, CircleUser } from 'lucide-react';
import SalesChart from '@/components/dashboard/sales-chart';
import PopularProducts from '@/components/dashboard/popular-products';
import { salesData, popularProducts, overviewData, recentSales, salesByCategoryData } from '@/lib/data';
import RecentSales from '@/components/dashboard/recent-sales';
import SalesByCategory from '@/components/dashboard/sales-by-category';

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
       <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Revenue
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${overviewData.totalRevenue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sales</CardTitle>
            <ShoppingBag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+{overviewData.sales.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              +180.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Customers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+{overviewData.newCustomers.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              +50 from last month
            </p>
          </CardContent>
        </Card>
         <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Order Value</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${overviewData.avgOrderValue.toFixed(2)}</div>
             <p className="text-xs text-muted-foreground">
              +5.2% from last month
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 lg:grid-cols-7">
        <Card className="col-span-12 lg:col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <SalesChart data={salesData} />
          </CardContent>
        </Card>
        <Card className="col-span-12 lg:col-span-3">
          <CardHeader>
            <CardTitle>Popular Products</CardTitle>
             <CardDescription>
              The best-selling items in your store.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <PopularProducts data={popularProducts} />
          </CardContent>
        </Card>
        <Card className="col-span-12 lg:col-span-3">
            <CardHeader>
                <CardTitle>Recent Sales</CardTitle>
                <CardDescription>You made 265 sales this month.</CardDescription>
            </CardHeader>
            <CardContent>
                <RecentSales data={recentSales} />
            </CardContent>
        </Card>
        <Card className="col-span-12 lg:col-span-4">
            <CardHeader>
                <CardTitle>Sales by Category</CardTitle>
                 <CardDescription>
                  A breakdown of sales by product category.
                </CardDescription>
            </CardHeader>
            <CardContent>
               <SalesByCategory data={salesByCategoryData} />
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
