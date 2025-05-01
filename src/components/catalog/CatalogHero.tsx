
import React from 'react';

interface CatalogHeroProps {
  title: string;
  description: string;
}

const CatalogHero: React.FC<CatalogHeroProps> = ({ title, description }) => {
  return (
    <div className="relative bg-gradient-to-r from-primary/80 to-primary/50 py-16">
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h1>
        <p className="text-white/90 max-w-2xl">
          {description}
        </p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/20 z-0"></div>
    </div>
  );
};

export default CatalogHero;
