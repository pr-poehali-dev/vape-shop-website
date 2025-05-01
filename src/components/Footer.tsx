
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary p-2 rounded-full">
                <Icon name="Zap" className="text-primary-foreground" size={20} />
              </div>
              <span className="font-bold text-xl">VapeSky</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Лучший выбор одноразовых POD-систем по выгодным ценам
            </p>
            <div className="flex gap-4">
              <a href="https://t.me/vapesky" className="text-muted-foreground hover:text-primary transition">
                <Icon name="Send" size={20} />
              </a>
              <a href="https://instagram.com/vapesky" className="text-muted-foreground hover:text-primary transition">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="https://youtube.com/vapesky" className="text-muted-foreground hover:text-primary transition">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Каталог</h3>
            <ul className="space-y-2">
              <li><Link to="/catalog/pods" className="text-muted-foreground hover:text-primary transition">POD-системы</Link></li>
              <li><Link to="/catalog/liquids" className="text-muted-foreground hover:text-primary transition">Жидкости</Link></li>
              <li><Link to="/catalog/accessories" className="text-muted-foreground hover:text-primary transition">Аксессуары</Link></li>
              <li><Link to="/catalog/new" className="text-muted-foreground hover:text-primary transition">Новинки</Link></li>
              <li><Link to="/catalog/sale" className="text-muted-foreground hover:text-primary transition">Распродажа</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition">О компании</Link></li>
              <li><Link to="/delivery" className="text-muted-foreground hover:text-primary transition">Доставка и оплата</Link></li>
              <li><Link to="/wholesale" className="text-muted-foreground hover:text-primary transition">Оптовым клиентам</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition">Блог</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-primary transition">Вопросы и ответы</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={18} className="text-primary" />
                <span className="text-muted-foreground">г. Москва, ул. Вейперская, 42</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={18} className="text-primary" />
                <a href="tel:+78001234567" className="text-muted-foreground hover:text-primary transition">8 (800) 123-45-67</a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={18} className="text-primary" />
                <a href="mailto:info@vapesky.ru" className="text-muted-foreground hover:text-primary transition">info@vapesky.ru</a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Clock" size={18} className="text-primary" />
                <span className="text-muted-foreground">10:00 — 22:00 без выходных</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © 2025 VapeSky. Все права защищены. Продажа только совершеннолетним.
          </p>
          <div className="flex gap-3">
            <span className="text-sm text-muted-foreground">Принимаем к оплате:</span>
            <Icon name="CreditCard" size={20} className="text-muted-foreground" />
            <Icon name="Wallet" size={20} className="text-muted-foreground" />
          </div>
        </div>
      </div>
    </footer>
  );
}
