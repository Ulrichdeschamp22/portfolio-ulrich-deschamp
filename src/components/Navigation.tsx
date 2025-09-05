import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('#hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

const navItems = [
  { label: 'Accueil', href: '#hero' },
  { label: 'À propos', href: '#about' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Projets', href: '#projects' },
  { label: 'Boutique', href: '#shop' },
  { label: 'Contact', href: '#contact' },
];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-xl shadow-2xl border-b border-primary/20 py-3' 
        : 'bg-gradient-to-b from-background/90 to-transparent backdrop-blur-sm py-5'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="relative group" aria-label="Ulrich Deschamp - Accueil Portfolio Développeur Web Abidjan">
          <div className="absolute -inset-2 bg-gradient-primary rounded-lg blur-lg opacity-0 group-hover:opacity-50 transition duration-500"></div>
          <div className="relative flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              UD
            </span>
          </div>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
          <ul className="flex space-x-2 lg:space-x-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setActiveItem(item.href)}
                  className={`relative px-4 py-2 rounded-full transition-all duration-300 ${
                    activeItem === item.href 
                      ? 'text-primary-foreground' 
                      : 'text-foreground/80 hover:text-foreground'
                  } group`}
                >
                  {activeItem === item.href && (
                    <span className="absolute inset-0 bg-gradient-primary rounded-full animate-pulse"></span>
                  )}
                  <span className="relative z-10 font-medium">
                    {item.label}
                  </span>
                  <span className="absolute inset-0 bg-gradient-primary rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                </a>
              </li>
            ))}
          </ul>
          
          {/* Quote Button */}
          <a
            href="https://wa.me/2250710224023?text=Bonjour%20Ulrich,%20je%20souhaite%20obtenir%20un%20devis%20pour%20mon%20projet"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4"
          >
            <Button className="bg-violet-600 hover:bg-violet-700 text-white font-semibold px-4 py-2 rounded-full flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Demander un devis
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          {/* Mobile Quote Button */}
          <a
            href="https://wa.me/2250710224023?text=Bonjour%20Ulrich,%20je%20souhaite%20obtenir%20un%20devis%20pour%20mon%20projet"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              size="sm"
              className="bg-violet-600 hover:bg-violet-700 text-white px-3 py-1.5 rounded-full"
            >
              <MessageSquare className="w-4 h-4" />
            </Button>
          </a>
          
          <Button
            variant="ghost"
            size="icon"
            className="relative group"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="absolute inset-0 bg-gradient-primary rounded-lg blur-md opacity-0 group-hover:opacity-30 transition duration-300"></div>
            <span className="relative">
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-primary/20 mt-2 animate-slide-in-right">
          <ul className="container mx-auto px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => {
                    setActiveItem(item.href);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeItem === item.href
                      ? 'bg-gradient-primary text-primary-foreground'
                      : 'text-foreground/80 hover:bg-primary/10 hover:text-foreground'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navigation;