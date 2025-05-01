
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import ProductCard from '@/components/ProductCard';
import { featuredProducts } from '@/data/products';

const FeaturedProductsSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Популярные товары</h2>
          <Link to="/catalog" className="text-primary flex items-center gap-1 hover:underline">
            Весь каталог
            <Icon name="ChevronRight" size={16} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
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
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
