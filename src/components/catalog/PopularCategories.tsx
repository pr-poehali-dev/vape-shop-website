
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

interface Category {
  id: string;
  title: string;
  icon: string;
  count: number;
  path: string;
}

interface PopularCategoriesProps {
  categories: Category[];
}

const PopularCategories = ({ categories }: PopularCategoriesProps) => {
  return (
    <section className="bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Популярные категории</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map(category => (
            <Link 
              key={category.id}
              to={category.path} 
              className="bg-card rounded-lg border border-border p-4 transition hover:border-primary"
            >
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                  <Icon name={category.icon} className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-medium">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">{category.count} товара</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
