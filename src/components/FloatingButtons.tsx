import { useEffect, useState } from 'react';
import { ArrowUp, MessageCircle, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingButtons = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [isLight, setIsLight] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('light');
    }
    return false;
  });

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light') {
      setIsLight(true);
    }
  }, []);

  useEffect(() => {
    if (isLight) {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  }, [isLight]);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsScrolled(window.pageYOffset > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Show bubble when WhatsApp moves to theme position
  useEffect(() => {
    if (isScrolled) {
      const timer = setTimeout(() => setShowBubble(true), 400);
      const hideTimer = setTimeout(() => setShowBubble(false), 3500);
      return () => {
        clearTimeout(timer);
        clearTimeout(hideTimer);
      };
    } else {
      setShowBubble(false);
    }
  }, [isScrolled]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappNumber = "2250710224023";
  const message = "Bonjour Ulrich, j'aimerais discuter d'un projet avec vous.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* Theme toggle - top right, hidden when scrolled */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.button
            key="theme-toggle"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsLight(!isLight)}
            className="fixed top-24 right-4 z-50 p-3 rounded-full bg-card/80 backdrop-blur-md border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={isLight ? 'Passer en mode sombre' : 'Passer en mode clair'}
          >
            <motion.div
              initial={false}
              animate={{ rotate: isLight ? 180 : 0 }}
              transition={{ duration: 0.4, type: 'spring', stiffness: 200 }}
            >
              {isLight ? (
                <Moon className="w-5 h-5 text-primary" />
              ) : (
                <Sun className="w-5 h-5 text-primary" />
              )}
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* WhatsApp button - moves to theme position when scrolled */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            key="whatsapp-top"
            className="fixed top-24 right-4 z-50 flex items-center"
            initial={{ opacity: 0, scale: 0.5, y: 200 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 200 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            {/* Bubble */}
            <AnimatePresence>
              {showBubble && (
                <motion.div
                  initial={{ opacity: 0, x: 10, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 10, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="mr-3 bg-card/90 backdrop-blur-md border border-border/50 rounded-xl px-3 py-2 shadow-lg whitespace-nowrap"
                >
                  <span className="text-xs font-medium text-foreground">Discuter sur WhatsApp</span>
                  {/* Arrow */}
                  <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-card/90 border-r border-b border-border/50 rotate-[-45deg]" />
                </motion.div>
              )}
            </AnimatePresence>
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 p-3 rounded-full shadow-lg transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5 text-white" fill="white" />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp bottom right - only when NOT scrolled */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.a
            key="whatsapp-bottom"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-4 z-50 bg-green-500 hover:bg-green-600 p-3 rounded-full shadow-lg transition-colors duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, y: -200 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-5 h-5 text-white" fill="white" />
          </motion.a>
        )}
      </AnimatePresence>

      {/* Scroll to top - bottom right, only when scrolled */}
      <AnimatePresence>
        {isScrolled && (
          <motion.button
            key="scroll-top"
            onClick={scrollToTop}
            className="fixed bottom-6 right-4 z-50 bg-primary hover:bg-primary/90 text-primary-foreground p-3 rounded-full shadow-lg transition-colors duration-300"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Retour en haut"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingButtons;
