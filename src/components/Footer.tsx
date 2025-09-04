import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-muted-foreground flex items-center justify-center">
            Créé avec <Heart className="w-4 h-4 mx-2 text-primary" fill="currentColor" /> par 
            <span className="ml-2 font-semibold text-foreground">Ulrich Deschamp</span>
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © {new Date().getFullYear()} Tous droits réservés • 
            <Link to="/mentions-legales" className="text-primary hover:underline ml-1">
              Mentions légales
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;