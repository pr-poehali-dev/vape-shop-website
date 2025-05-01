
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="flex-1 flex items-center justify-center py-12">
        <div className="container max-w-md mx-auto px-4 text-center">
          <div className="mb-6 flex justify-center">
            <div className="bg-muted/50 h-24 w-24 rounded-full flex items-center justify-center">
              <Icon name="FileQuestion" size={48} className="text-muted-foreground" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-3">Страница не найдена</h1>
          <p className="text-muted-foreground mb-8">
            Возможно, страница была удалена или указан неверный адрес.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/">
                <Icon name="Home" className="mr-2" size={16} />
                На главную
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/catalog">
                <Icon name="Layers" className="mr-2" size={16} />
                Перейти в каталог
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
