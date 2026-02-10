import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

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

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('#') && isHomePage) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'py-3' : 'py-4 md:py-6'
      }`}
    >
      <div className={`mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-[1600px] transition-all duration-500 ease-out ${
        isScrolled 
          ? 'nav-glass-scrolled rounded-2xl py-3 px-8' 
          : 'bg-transparent border border-transparent'
      }`}>
        <div className="flex justify-between items-center">
          {/* Logo with hover animation */}
          <Link to="/" className="relative group flex-shrink-0" aria-label="Ulrich Deschamp - Accueil">
            <motion.div 
              className="absolute -inset-2 bg-gradient-primary rounded-lg blur-lg opacity-0 group-hover:opacity-50 transition duration-500"
              whileHover={{ scale: 1.2 }}
            />
            <motion.div 
              className="relative flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              </motion.div>
              <span className="text-xl md:text-2xl font-bold text-gradient">
                UD
              </span>
            </motion.div>
          </Link>
          
          {/* Desktop Menu - Centered */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <ul className="flex items-center space-x-1 xl:space-x-2">
              {navItems.map((item, index) => (
                <motion.li 
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  {item.href.startsWith('/') && !item.href.includes('#') ? (
                    <Link
                      to={item.href}
                      className="relative px-4 xl:px-5 py-2 rounded-full transition-all duration-300 text-sm xl:text-base group text-foreground/80 hover:text-foreground"
                    >
                      <span className="relative z-10 font-medium">
                        {item.label}
                      </span>
                      <motion.span 
                        className="absolute inset-0 rounded-full bg-primary/10"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className="relative px-4 xl:px-5 py-2 rounded-full transition-all duration-300 text-sm xl:text-base group text-foreground/80 hover:text-foreground"
                    >
                      <span className="relative z-10 font-medium">
                        {item.label}
                      </span>
                      <motion.span 
                        className="absolute inset-0 rounded-full bg-primary/10"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    </a>
                  )}
                </motion.li>
              ))}
            </ul>
          </div>
          
          {/* Right side buttons */}
          <motion.div 
            className="hidden lg:flex items-center gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link to="/auth">
              <Button 
                variant="ghost" 
                className="text-foreground/80 hover:text-foreground transition-colors duration-300"
              >
                Se connecter
              </Button>
            </Link>
            <Link to="/espace-formation">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  className="font-semibold px-6 py-2 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300"
                  style={{
                    boxShadow: '0 0 20px hsl(271 91% 65% / 0.4)'
                  }}
                >
                  Découvrir
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link to="/espace-formation">
              <Button 
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-1.5 rounded-full text-xs sm:text-sm"
              >
                Découvrir
              </Button>
            </Link>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative p-2 rounded-lg"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="absolute inset-0 bg-gradient-primary rounded-lg blur-md opacity-0 group-hover:opacity-30 transition duration-300" />
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-primary/20 mt-2 mx-4 rounded-2xl overflow-hidden"
          >
            <ul className="px-4 py-4 space-y-1">
              {navItems.map((item, index) => (
                <motion.li 
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
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
                      onClick={() => handleNavClick(item.href)}
                      className="block px-4 py-3 rounded-lg transition-all duration-300 text-sm text-foreground/80 hover:bg-primary/10 hover:text-foreground"
                    >
                      {item.label}
                    </a>
                  )}
                </motion.li>
              ))}
              <motion.li 
                className="pt-2 border-t border-border/50"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  to="/auth"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg transition-all duration-300 text-sm text-foreground/80 hover:bg-primary/10 hover:text-foreground"
                >
                  Se connecter
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
