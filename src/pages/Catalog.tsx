
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Separator } from '@/components/ui/separator';

const products = [
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
  },
  {
    id: "4",
    title: "HOTSPOT MAX",
    brand: "HOTSPOT",
    price: 1299,
    image: "https://unsplash.com/photos/6ZHCL_I9xeg/download?force=true&w=640",
    puffs: 10000,
    isNew: true,
    isBestseller: false
  },
  {
    id: "5",
    title: "JUUL Starter Kit",
    brand: "JUUL",
    price: 1499,
    oldPrice: 1699,
    image: "https://unsplash.com/photos/CzwMacaoZM8/download?force=true&w=640",
    puffs: 2000,
    isNew: false,
    isBestseller: true
  },
  {
    id: "6",
    title: "IQOS ILUMA",
    brand: "IQOS",
    price: 3999,
    image: "https://unsplash.com/photos/YlAmh_X_SsE/download?force=true&w=640",
    isNew: false,
    isBestseller: false
  }
];

const brands = ["HQD", "ELFBAR", "JUUL", "IQOS", "SMOK", "VAPORESSO", "HOTSPOT", "DUALL", "Geek Vape"];

const Catalog = () => {
  const [priceRange, setPriceRange] = useState<number[]>([500, 4000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleBrandToggle = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand) 
        : [...prev, brand]
    );
  };
  
  const filteredProducts = products.filter(product => {
    // Filter by search query
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        product.brand.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filter by price
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    // Filter by brand
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    
    return matchesSearch && matchesPrice && matchesBrand;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-r from-primary/80 to-primary/50 py-16">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Каталог товаров</h1>
          <p className="text-white/90 max-w-2xl">
            Широкий выбор одноразовых электронных сигарет и POD-систем от ведущих брендов по лучшим ценам
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/20 z-0"></div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        {/* Filters and Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="w-full lg:w-1/4 space-y-6">
            <div className="bg-card rounded-lg border border-border p-4">
              <h3 className="font-medium text-lg mb-4">Поиск</h3>
              <div className="relative">
                <Input
                  placeholder="Поиск по названию..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pr-8"
                />
                <Icon 
                  name="Search" 
                  size={18} 
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" 
                />
              </div>
            </div>
            
            <div className="bg-card rounded-lg border border-border p-4">
              <h3 className="font-medium text-lg mb-4">Цена</h3>
              <div className="px-2">
                <Slider
                  value={priceRange}
                  min={500}
                  max={4000}
                  step={100}
                  onValueChange={setPriceRange}
                  className="mb-6"
                />
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">{priceRange[0]} ₽</span>
                  <span className="text-muted-foreground">{priceRange[1]} ₽</span>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-lg border border-border p-4">
              <h3 className="font-medium text-lg mb-4">Бренды</h3>
              <div className="space-y-2">
                {brands.map(brand => (
                  <div key={brand} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`brand-${brand}`} 
                      checked={selectedBrands.includes(brand)}
                      onCheckedChange={() => handleBrandToggle(brand)}
                    />
                    <label 
                      htmlFor={`brand-${brand}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {brand}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => {
                setPriceRange([500, 4000]);
                setSelectedBrands([]);
                setSearchQuery("");
              }}
            >
              <Icon name="RefreshCw" size={16} className="mr-2" />
              Сбросить фильтры
            </Button>
          </div>
          
          {/* Product Grid */}
          <div className="w-full lg:w-3/4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <h2 className="text-2xl font-bold">Все товары</h2>
              <p className="text-muted-foreground">Найдено {filteredProducts.length} товаров</p>
            </div>
            
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
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
            ) : (
              <div className="bg-muted/30 rounded-lg p-12 text-center">
                <Icon name="SearchX" size={48} className="mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">Товары не найдены</h3>
                <p className="text-muted-foreground mb-6">
                  По вашему запросу не найдено товаров. Попробуйте изменить параметры поиска.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setPriceRange([500, 4000]);
                    setSelectedBrands([]);
                    setSearchQuery("");
                  }}
                >
                  <Icon name="RefreshCw" size={16} className="mr-2" />
                  Сбросить фильтры
                </Button>
              </div>
            )}
            
            {filteredProducts.length > 0 && (
              <div className="mt-8 flex justify-center">
                <Button variant="outline" size="lg" className="mx-auto">
                  Загрузить еще
                  <Icon name="ChevronDown" size={18} className="ml-2" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Popular Categories */}
      <section className="bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Популярные категории</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <Link to="/catalog/pods" className="bg-card rounded-lg border border-border p-4 transition hover:border-primary">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                  <Icon name="Zap" className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-medium">POD-системы</h3>
                  <p className="text-sm text-muted-foreground">42 товара</p>
                </div>
              </div>
            </Link>
            
            <Link to="/catalog/liquids" className="bg-card rounded-lg border border-border p-4 transition hover:border-primary">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                  <Icon name="Droplets" className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-medium">Жидкости</h3>
                  <p className="text-sm text-muted-foreground">56 товаров</p>
                </div>
              </div>
            </Link>
            
            <Link to="/catalog/accessories" className="bg-card rounded-lg border border-border p-4 transition hover:border-primary">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                  <Icon name="Package" className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-medium">Аксессуары</h3>
                  <p className="text-sm text-muted-foreground">18 товаров</p>
                </div>
              </div>
            </Link>
            
            <Link to="/catalog/new" className="bg-card rounded-lg border border-border p-4 transition hover:border-primary">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                  <Icon name="Sparkles" className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-medium">Новинки</h3>
                  <p className="text-sm text-muted-foreground">24 товара</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Catalog;
