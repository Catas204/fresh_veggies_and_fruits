import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { products } from '@/lib/data';

interface PopularProductsProps {
    data: { productId: string, sales: number }[];
}

export default function PopularProducts({ data }: PopularProductsProps) {
  const getProductById = (id: string) => products.find(p => p.id === id);

  return (
    <div className="space-y-8">
      {data.map(item => {
        const product = getProductById(item.productId);
        if (!product) return null;

        return (
          <div key={item.productId} className="flex items-center">
            <Avatar className="h-9 w-9">
              <AvatarImage src={product.image as string} alt={product.name} />
              <AvatarFallback>{product.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">{product.name}</p>
              <p className="text-sm text-muted-foreground">{product.category}</p>
            </div>
            <div className="ml-auto font-medium">+{item.sales} sales</div>
          </div>
        )
      })}
    </div>
  );
}
