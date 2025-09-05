import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const whatsappNumber = "2250710224023";
  const message = "Bonjour Ulrich, j'aimerais discuter d'un projet avec vous.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-8 z-50 group"
      aria-label="Contactez Ulrich Deschamp sur WhatsApp - Développeur Web Abidjan Côte d'Ivoire"
    >
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
        
        {/* Button */}
        <div className="relative bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 hover-lift">
          <MessageCircle className="w-6 h-6 text-white" fill="white" />
        </div>
        
        {/* Tooltip */}
        <div className="absolute bottom-full mb-2 right-0 bg-card px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          <span className="text-sm text-foreground">Discutons sur WhatsApp</span>
          <div className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-2 h-2 bg-card"></div>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;