import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/logo-sema-psikoloji.jpg" 
              alt="Şema Psikoloji Logo" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('anasayfa')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Ana Sayfa
            </button>
            <button 
              onClick={() => scrollToSection('hakkimda')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Hakkımda
            </button>
            <button 
              onClick={() => scrollToSection('hizmetler')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Hizmetlerim
            </button>
            <button 
              onClick={() => scrollToSection('iletisim')}
              className="text-foreground hover:text-primary transition-colors"
            >
              İletişim
            </button>
          </nav>

   
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('anasayfa')}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Ana Sayfa
              </button>
              <button 
                onClick={() => scrollToSection('hakkimda')}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Hakkımda
              </button>
              <button 
                onClick={() => scrollToSection('hizmetler')}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Hizmetlerim
              </button>
              <button 
                onClick={() => scrollToSection('iletisim')}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                İletişim
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;