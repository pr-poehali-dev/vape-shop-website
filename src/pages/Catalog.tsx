
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import SearchFilter from '@/components/catalog/SearchFilter';
import PriceFilter from '@/components/catalog/PriceFilter';
import BrandFilter from '@/components/catalog/BrandFilter';
import CatalogHero from '@/components/catalog/CatalogHero';
import ProductGrid from '@/components/catalog/ProductGrid';
import PopularCategories from '@/components/catalog/PopularCategories';
import { popularCategories } from '@/data/categories';

// Импортируем бренды из файла данных, если он существует
// или определяем их локально
const brands = ["HQD", "ELFBAR", "JUUL", "IQOS", "SMOK", "VAPORESSO", "HOTSPOT", "DUALL", "Geek Vape"];

// Временные данные о продуктах (в реальном приложении лучше вынести в отдельный файл)
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
  
  const resetFilters = () => {
    setPriceRange([500, 4000]);
    setSelectedBrands([]);
    setSearchQuery("");
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
      
      <CatalogHero 
        title="Каталог товаров"
        description="Широкий выбор одноразовых электронных сигарет и POD-систем от ведущих брендов по лучшим ценам"
      />
      
      <div className="container mx-auto px-4 py-8">
        {/* Filters and Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="w-full lg:w-1/4 space-y-6">
            <SearchFilter searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <PriceFilter priceRange={priceRange} setPriceRange={setPriceRange} />
            <BrandFilter 
              brands={brands} 
              selectedBrands={selectedBrands} 
              handleBrandToggle={handleBrandToggle} 
            />
            
            <Button 
              variant="outline" 
              className="w-full"
              onClick={resetFilters}
            >
              <Icon name="RefreshCw" size={16} className="mr-2" />
              Сбросить фильтры
            </Button>
          </div>
          
          <ProductGrid products={filteredProducts} resetFilters={resetFilters} />
        </div>
      </div>
      
      <PopularCategories categories={popularCategories} />
      <Footer />
    </div>
  );
};

export default Catalog;
