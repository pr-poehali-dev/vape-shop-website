
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import BrandLogo from '@/components/BrandLogo';
import { brands } from '@/data/brands';

const BrandsSection = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Популярные бренды</h2>
          <Link to="/brands" className="text-primary flex items-center gap-1 hover:underline">
            Все бренды
            <Icon name="ChevronRight" size={16} />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {brands.map((brand) => (
            <BrandLogo 
              key={brand.slug}
              name={brand.name}
              logo={brand.logo}
              slug={brand.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
