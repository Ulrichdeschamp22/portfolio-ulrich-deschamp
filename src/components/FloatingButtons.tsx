import { useEffect, useState } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappNumber = "2250710224023";
  const message = "Bonjour Ulrich, j'aimerais discuter d'un projet avec vous.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-4 z-50 flex items-center gap-3">
      {/* Text pill button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 font-medium text-sm whitespace-nowrap"
      >
        Discuter avec moi sur WhatsApp
      </a>

      {/* Icon button - switches between WhatsApp and Scroll to Top */}
      {showScrollTop ? (
        <button
          onClick={scrollToTop}
          className="bg-primary hover:bg-primary/90 text-primary-foreground p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Retour en haut"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      ) : (
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-5 h-5 text-white" fill="white" />
        </a>
      )}
    </div>
  );
};

export default FloatingButtons;
