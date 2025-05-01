
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import BrandsSection from '@/components/sections/BrandsSection';
import FeaturedProductsSection from '@/components/sections/FeaturedProductsSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import CtaSection from '@/components/sections/CtaSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <BrandsSection />
      <FeaturedProductsSection />
      <FeaturesSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
