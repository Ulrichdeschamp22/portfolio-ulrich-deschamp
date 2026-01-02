import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-8 md:py-12 border-t border-border/50 bg-card/30 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="container mx-auto max-w-7xl">
        {/* SEO Footer Content */}
        <div className="max-w-4xl mx-auto mb-6 md:mb-8 px-2">
          <h2 className="text-lg md:text-xl font-bold text-center mb-3 md:mb-4 text-gradient">
            Expert Digital Abidjan - Freelance Développeur Web & Agence Digitale
          </h2>
          <p className="text-center text-xs md:text-sm text-muted-foreground leading-relaxed">
            Meilleur expert digital à Abidjan et en Côte d'Ivoire, freelance développeur web expert et Vibe Coder, 
            opérant comme agence digitale indépendante pour des projets digitaux premium en Afrique et à l'international.
          </p>
        </div>

        {/* Keywords Cloud */}
        <div className="flex flex-wrap justify-center gap-1.5 md:gap-2 mb-6 md:mb-8 max-w-3xl mx-auto px-2">
          {[
            "Expert Digital Abidjan",
            "Freelance Développeur Web",
            "Vibe Coder",
            "Agence Digitale Indépendante",
            "Solutions Digitales Premium",
            "Automatisation IA",
            "Marketing Digital",
            "Côte d'Ivoire",
            "International"
          ].map((keyword, index) => (
            <span 
              key={index}
              className="px-2 md:px-3 py-1 bg-primary/10 text-primary text-[10px] md:text-xs rounded-full"
            >
              {keyword}
            </span>
          ))}
        </div>

        {/* Main Footer */}
        <div className="text-center px-2">
          <p className="text-xs md:text-sm text-muted-foreground flex items-center justify-center flex-wrap">
            Créé avec <Heart className="w-3 h-3 md:w-4 md:h-4 mx-1 md:mx-2 text-primary" fill="currentColor" /> par 
            <span className="ml-1 md:ml-2 font-semibold text-foreground">Ulrich Deschamp</span>
          </p>
          <p className="text-[10px] md:text-sm text-muted-foreground mt-2">
            © {new Date().getFullYear()} Ulrich Deschamp KOSSONOU - Expert Digital & Développeur Web Abidjan • Tous droits réservés • 
            <Link to="/mentions-legales" className="text-primary hover:underline ml-1">
              Mentions légales
            </Link>
          </p>
          <p className="text-[10px] md:text-xs text-muted-foreground mt-2">
            Côte d'Ivoire | Abidjan | Freelance Premium | Agence Digitale Indépendante | Services Digitaux Professionnels
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
