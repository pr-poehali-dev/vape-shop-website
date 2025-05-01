
import React from 'react';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

interface SearchFilterProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({ searchQuery, setSearchQuery }) => {
  return (
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
  );
};

export default SearchFilter;
