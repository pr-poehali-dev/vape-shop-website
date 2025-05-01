
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
