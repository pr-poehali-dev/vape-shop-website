
import Icon from '@/components/ui/icon';

const FeaturesSection = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-muted/10 to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg border border-border">
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Icon name="CheckCheck" className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Оригинальная продукция</h3>
            <p className="text-muted-foreground">Мы продаем только оригинальные товары от проверенных производителей.</p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-border">
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Icon name="Truck" className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Быстрая доставка</h3>
            <p className="text-muted-foreground">Доставляем заказы по всей России. Курьером, в пункты выдачи или почтой.</p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-border">
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Icon name="HeartHandshake" className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Лучшие цены</h3>
            <p className="text-muted-foreground">Наши цены одни из самых низких на рынке. Регулярные акции и скидки.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
