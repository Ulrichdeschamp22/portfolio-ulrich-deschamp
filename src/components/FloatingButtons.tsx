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
    <div className="fixed bottom-6 right-4 z-50 flex items-center gap-2">
      {/* Text pill button with stacked text */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-full shadow-lg transition-all duration-300 hover:scale-105 flex flex-col items-start leading-tight"
      >
        <span className="text-xs font-medium">Discuter avec moi sur</span>
        <span className="text-sm font-bold">WhatsApp</span>
      </a>

      {/* Icon button - switches between WhatsApp and Scroll to Top */}
      {showScrollTop ? (
        <button
          onClick={scrollToTop}
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Retour en haut"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      ) : (
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-5 h-5 text-white" fill="white" />
        </a>
      )}
    </div>
  );
};

export default FloatingButtons;
