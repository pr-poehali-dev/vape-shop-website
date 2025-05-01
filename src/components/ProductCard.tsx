
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface ProductCardProps {
  id: string;
  title: string;
  brand: string;
  price: number;
  oldPrice?: number;
  image: string;
  puffs?: number;
  isNew?: boolean;
  isBestseller?: boolean;
}

export default function ProductCard({
  id,
  title,
  brand,
  price,
  oldPrice,
  image,
  puffs,
  isNew,
  isBestseller
}: ProductCardProps) {
  return (
    <div className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary transition-all duration-300">
      <div className="relative pt-4 px-4">
        {isNew && (
          <span className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded-md">
            Новинка
          </span>
        )}
        {isBestseller && (
          <span className="absolute top-2 right-2 bg-secondary text-secondary-foreground text-xs font-medium px-2 py-1 rounded-md">
            Хит
          </span>
        )}
        {oldPrice && (
          <span className="absolute top-2 right-2 bg-destructive text-destructive-foreground text-xs font-medium px-2 py-1 rounded-md">
            -{Math.round((1 - price / oldPrice) * 100)}%
          </span>
        )}
        
        <Link to={`/product/${id}`}>
          <img 
            src={image} 
            alt={title} 
            className="mx-auto h-48 object-contain transition-transform duration-300 group-hover:scale-105" 
          />
        </Link>
      </div>
      
      <div className="p-4">
        <div className="text-sm text-muted-foreground mb-1">{brand}</div>
        <Link to={`/product/${id}`} className="block">
          <h3 className="font-medium mb-1 group-hover:text-primary transition-colors">{title}</h3>
        </Link>
        
        {puffs && (
          <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
            <Icon name="Wind" size={14} />
            <span>{puffs} затяжек</span>
          </div>
        )}
        
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-lg">{price} ₽</span>
            {oldPrice && (
              <span className="text-muted-foreground line-through text-sm">{oldPrice} ₽</span>
            )}
          </div>
          
          <Button size="sm" variant="default">
            <Icon name="ShoppingCart" size={16} />
            <span className="hidden sm:inline ml-1">В корзину</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
