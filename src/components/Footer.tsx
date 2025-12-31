import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50 bg-card/30">
      <div className="container mx-auto px-4">
        {/* SEO Footer Content */}
        <div className="max-w-4xl mx-auto mb-8">
          <h2 className="text-xl font-bold text-center mb-4 text-gradient">
            Expert Digital Abidjan - Freelance Développeur Web & Agence Digitale
          </h2>
          <p className="text-center text-muted-foreground leading-relaxed">
            Meilleur expert digital à Abidjan et en Côte d'Ivoire, freelance développeur web expert et Vibe Coder, 
            opérant comme agence digitale indépendante pour des projets digitaux premium en Afrique et à l'international.
          </p>
        </div>

        {/* Keywords Cloud */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 max-w-3xl mx-auto">
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
              className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
            >
              {keyword}
            </span>
          ))}
        </div>

        {/* Main Footer */}
        <div className="text-center">
          <p className="text-muted-foreground flex items-center justify-center">
            Créé avec <Heart className="w-4 h-4 mx-2 text-primary" fill="currentColor" /> par 
            <span className="ml-2 font-semibold text-foreground">Ulrich Deschamp</span>
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © {new Date().getFullYear()} Ulrich Deschamp KOSSONOU - Expert Digital & Développeur Web Abidjan • Tous droits réservés • 
            <Link to="/mentions-legales" className="text-primary hover:underline ml-1">
              Mentions légales
            </Link>
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Côte d'Ivoire | Abidjan | Freelance Premium | Agence Digitale Indépendante | Services Digitaux Professionnels
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
