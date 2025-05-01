
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import BrandLogo from '@/components/BrandLogo';
import Icon from '@/components/ui/icon';

const featuredProducts = [
  {
    id: "1",
    title: "HQD King 8000",
    brand: "HQD",
    price: 899,
    oldPrice: 1199,
    image: "https://unsplash.com/photos/P2dPbrM7peI/download?force=true&w=640",
    puffs: 8000,
    isNew: true,
    isBestseller: false
  },
  {
    id: "2",
    title: "ELFBAR BC5000",
    brand: "ELFBAR",
    price: 999,
    image: "https://unsplash.com/photos/OLxCwmEVkBs/download?force=true&w=640",
    puffs: 5000,
    isNew: false,
    isBestseller: true
  },
  {
    id: "3",
    title: "Geek Vape ONE",
    brand: "Geek Vape",
    price: 799,
    oldPrice: 949,
    image: "https://unsplash.com/photos/FTfjMijq-Ws/download?force=true&w=640",
    puffs: 3500,
    isNew: false,
    isBestseller: false
  }
];

const brands = [
  { name: "HQD", logo: "https://unsplash.com/photos/s9CC2SKySJM/download?force=true&w=640", slug: "hqd" },
  { name: "ELFBAR", logo: "https://unsplash.com/photos/Ue_kn9X3JoM/download?force=true&w=640", slug: "elfbar" },
  { name: "JUUL", logo: "https://unsplash.com/photos/ZihPQeQR2wM/download?force=true&w=640", slug: "juul" },
  { name: "IQOS", logo: "https://unsplash.com/photos/s9CC2SKySJM/download?force=true&w=640", slug: "iqos" },
  { name: "SMOK", logo: "https://unsplash.com/photos/ZihPQeQR2wM/download?force=true&w=640", slug: "smok" },
  { name: "VAPORESSO", logo: "https://unsplash.com/photos/Ue_kn9X3JoM/download?force=true&w=640", slug: "vaporesso" }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative">
        <div 
          className="hero-gradient absolute inset-0 z-10"
          style={{ 
            backgroundImage: "linear-gradient(90deg, rgba(13,12,20,0.8) 0%, rgba(13,12,20,0.6) 50%, rgba(13,12,20,0.4) 100%)" 
          }}
        ></div>
        
        <div className="container mx-auto px-4 py-16 md:py-32 relative z-20 flex flex-col items-start justify-center min-h-[500px]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl mb-6">
            Одноразовые электронные сигареты и POD-системы
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-8">
            Лучшие цены на популярные бренды. Широкий ассортимент, быстрая доставка по всей России.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link to="/catalog">Перейти в каталог</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/brands">Популярные бренды</Link>
            </Button>
          </div>
        </div>
        
        <img 
          src="https://cdn.poehali.dev/files/03d56cad-73bb-4be5-aca2-40a3c52ba2fa.jpg" 
          alt="VapeSky - лучшие одноразовые электронные сигареты" 
          className="w-full h-[500px] object-cover"
        />
      </section>
      
      {/* Brands Section */}
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
      
      {/* Featured Products */}
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
      
      {/* Features */}
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
      
      {/* CTA */}
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
      
      <Footer />
    </div>
  );
};

export default Index;
