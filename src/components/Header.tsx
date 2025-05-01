
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-primary p-2 rounded-full">
            <Icon name="Zap" className="text-primary-foreground" size={24} />
          </div>
          <span className="font-bold text-xl text-foreground">VapeSky</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-foreground hover:text-primary transition">Главная</Link>
          <Link to="/catalog" className="text-foreground hover:text-primary transition">Каталог</Link>
          <Link to="/brands" className="text-foreground hover:text-primary transition">Бренды</Link>
          <Link to="/about" className="text-foreground hover:text-primary transition">О нас</Link>
          <Link to="/contacts" className="text-foreground hover:text-primary transition">Контакты</Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Icon name="Search" size={20} />
          </Button>
          <Button variant="ghost" size="icon">
            <Icon name="ShoppingCart" size={20} />
          </Button>
          <Button variant="default">
            <Icon name="Phone" size={16} />
            Заказать
          </Button>
        </div>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
        </Button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link to="/" className="text-foreground hover:text-primary transition py-2">Главная</Link>
            <Link to="/catalog" className="text-foreground hover:text-primary transition py-2">Каталог</Link>
            <Link to="/brands" className="text-foreground hover:text-primary transition py-2">Бренды</Link>
            <Link to="/about" className="text-foreground hover:text-primary transition py-2">О нас</Link>
            <Link to="/contacts" className="text-foreground hover:text-primary transition py-2">Контакты</Link>
            <Button className="w-full mt-2">Заказать</Button>
          </div>
        </div>
      )}
    </header>
  );
}
