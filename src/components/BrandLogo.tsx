
import { Link } from 'react-router-dom';

interface BrandLogoProps {
  name: string;
  logo: string;
  slug: string;
}

export default function BrandLogo({ name, logo, slug }: BrandLogoProps) {
  return (
    <Link to={`/brands/${slug}`} className="block">
      <div className="bg-card rounded-lg p-4 border border-border hover:border-primary transition flex items-center justify-center h-24">
        <img 
          src={logo} 
          alt={`${name} logo`} 
          className="brand-logo"
        />
      </div>
    </Link>
  );
}
