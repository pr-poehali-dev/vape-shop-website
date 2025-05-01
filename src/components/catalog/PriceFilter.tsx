
import { useState } from 'react';
import { Slider } from '@/components/ui/slider';

interface PriceFilterProps {
  priceRange: number[];
  setPriceRange: (range: number[]) => void;
  min?: number;
  max?: number;
  step?: number;
}

const PriceFilter = ({ 
  priceRange, 
  setPriceRange, 
  min = 500, 
  max = 4000, 
  step = 100 
}: PriceFilterProps) => {
  return (
    <div className="bg-card rounded-lg border border-border p-4">
      <h3 className="font-medium text-lg mb-4">Цена</h3>
      <div className="px-2">
        <Slider
          value={priceRange}
          min={min}
          max={max}
          step={step}
          onValueChange={setPriceRange}
          className="mb-6"
        />
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">{priceRange[0]} ₽</span>
          <span className="text-muted-foreground">{priceRange[1]} ₽</span>
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
