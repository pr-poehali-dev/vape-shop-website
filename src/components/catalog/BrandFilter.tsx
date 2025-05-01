
import { Checkbox } from '@/components/ui/checkbox';

interface BrandFilterProps {
  brands: string[];
  selectedBrands: string[];
  handleBrandToggle: (brand: string) => void;
}

const BrandFilter = ({ brands, selectedBrands, handleBrandToggle }: BrandFilterProps) => {
  return (
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
  );
};

export default BrandFilter;
