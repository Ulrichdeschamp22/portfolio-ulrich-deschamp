import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Accueil', href: isHomePage ? '#hero' : '/', isExternal: false },
    { label: 'Espace Formation', href: '/espace-formation', isExternal: false },
    { label: 'À propos', href: isHomePage ? '#about' : '/#about', isExternal: false },
    { label: 'Tarifs', href: '/tarifs', isExternal: false },
  ];

  const handleNavClick = (href: string, isExternal: boolean) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('#') && isHomePage) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'py-2' 
        : 'py-3 md:py-5'
    }`}>
      <div className={`container mx-auto px-4 max-w-7xl transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/70 backdrop-blur-xl border border-border/40 rounded-2xl shadow-2xl shadow-primary/20 py-2 px-6' 
          : ''
      }`}>
        <div className="flex justify-between items-center">
          <Link to="/" className="relative group flex-shrink-0" aria-label="Ulrich Deschamp - Accueil Portfolio Développeur Web Abidjan">
            <div className="absolute -inset-2 bg-gradient-primary rounded-lg blur-lg opacity-0 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative flex items-center space-x-2">
              <Sparkles className="w-4 h-4 md:w-5 md:h-5 animate-pulse text-primary transition-colors duration-300" />
              <span className="text-xl md:text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent transition-all duration-300">
                UD
              </span>
            </div>
          </Link>
          
          {/* Desktop Menu - Centered */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <ul className="flex items-center space-x-1 xl:space-x-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  {item.href.startsWith('/') && !item.href.includes('#') ? (
                    <Link
                      to={item.href}
                      className="relative px-4 xl:px-5 py-2 rounded-full transition-all duration-300 text-sm xl:text-base group text-foreground/80 hover:text-foreground"
                    >
                      <span className="relative z-10 font-medium">
                        {item.label}
                      </span>
                      <span className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => handleNavClick(item.href, item.isExternal)}
                      className="relative px-4 xl:px-5 py-2 rounded-full transition-all duration-300 text-sm xl:text-base group text-foreground/80 hover:text-foreground"
                    >
                      <span className="relative z-10 font-medium">
                        {item.label}
                      </span>
                      <span className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Right side buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/auth">
              <Button 
                variant="ghost" 
                className="text-foreground/80 hover:text-foreground transition-colors duration-300"
              >
                Se connecter
              </Button>
            </Link>
            <Link to="/espace-formation">
              <Button 
                className="font-semibold px-6 py-2 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300"
              >
                Découvrir
              </Button>
            </Link>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link to="/espace-formation">
              <Button 
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-1.5 rounded-full text-xs sm:text-sm"
              >
                Découvrir
              </Button>
            </Link>
            
            <Button
              variant="ghost"
              size="icon"
              className="relative group w-9 h-9"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="absolute inset-0 bg-gradient-primary rounded-lg blur-md opacity-0 group-hover:opacity-30 transition duration-300"></div>
              <span className="relative">
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-primary/20 mt-2 animate-slide-in-right mx-4 rounded-2xl">
          <ul className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.href.startsWith('/') && !item.href.includes('#') ? (
                  <Link
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 rounded-lg transition-all duration-300 text-sm text-foreground/80 hover:bg-primary/10 hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    onClick={() => handleNavClick(item.href, item.isExternal)}
                    className="block px-4 py-3 rounded-lg transition-all duration-300 text-sm text-foreground/80 hover:bg-primary/10 hover:text-foreground"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
            <li className="pt-2 border-t border-border/50">
              <Link
                to="/auth"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg transition-all duration-300 text-sm text-foreground/80 hover:bg-primary/10 hover:text-foreground"
              >
                Se connecter
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navigation;