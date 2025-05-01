
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import ProductCard from '@/components/ProductCard';

interface Product {
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

interface ProductGridProps {
  products: Product[];
  resetFilters: () => void;
}

const ProductGrid = ({ products, resetFilters }: ProductGridProps) => {
  return (
    <div className="w-full lg:w-3/4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h2 className="text-2xl font-bold">Все товары</h2>
        <p className="text-muted-foreground">Найдено {products.length} товаров</p>
      </div>
      
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <ProductCard 
              key={product.id}
              id={product.id}
              title={product.title}
              brand={product.brand}
              price={product.price}
              oldPrice={product.oldPrice}
              image={product.image}
              puffs={product.puffs}
              isNew={product.isNew}
              isBestseller={product.isBestseller}
            />
          ))}
        </div>
      ) : (
        <div className="bg-muted/30 rounded-lg p-12 text-center">
          <Icon name="SearchX" size={48} className="mx-auto text-muted-foreground mb-4" />
          <h3 className="text-xl font-semibold mb-2">Товары не найдены</h3>
          <p className="text-muted-foreground mb-6">
            По вашему запросу не найдено товаров. Попробуйте изменить параметры поиска.
          </p>
          <Button 
            variant="outline" 
            onClick={resetFilters}
          >
            <Icon name="RefreshCw" size={16} className="mr-2" />
            Сбросить фильтры
          </Button>
        </div>
      )}
      
      {products.length > 0 && (
        <div className="mt-8 flex justify-center">
          <Button variant="outline" size="lg" className="mx-auto">
            Загрузить еще
            <Icon name="ChevronDown" size={18} className="ml-2" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
