
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const CtaSection = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Готовы сделать заказ?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Оформите заказ онлайн или свяжитесь с нами по телефону. Мы всегда рады помочь вам с выбором!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" asChild>
            <Link to="/catalog">Перейти в каталог</Link>
          </Button>
          <Button size="lg" variant="outline">
            <Icon name="Phone" className="mr-2" size={18} />
            Позвонить нам
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
