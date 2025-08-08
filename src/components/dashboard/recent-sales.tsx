
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface RecentSalesProps {
    data: { name: string; email: string, amount: number, avatar: string, avatarHint: string }[];
}

export default function RecentSales({ data }: RecentSalesProps) {
  return (
    <div className="space-y-8">
      {data.map(item => (
          <div key={item.email} className="flex items-center">
            <Avatar className="h-9 w-9">
              <AvatarImage src={item.avatar} alt={item.name} data-ai-hint={item.avatarHint} />
              <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">{item.name}</p>
              <p className="text-sm text-muted-foreground">{item.email}</p>
            </div>
            <div className="ml-auto font-medium">+${item.amount.toFixed(2)}</div>
          </div>
        ))}
    </div>
  );
}
