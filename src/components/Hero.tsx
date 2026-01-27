import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import HeroBackground from './hero/HeroBackground';
import HeroContent from './hero/HeroContent';
import HeroImage from './hero/HeroImage';
import DynamicTypingText from './hero/DynamicTypingText';
import { SEO_KEYWORDS } from '@/hooks/useTypingAnimation';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24" 
      data-aos="fade-up" 
      data-aos-duration="1500"
      aria-label="Section principale - Expert Digital Abidjan"
    >
      {/* Animated code background */}
      <HeroBackground isMobile={isMobile} />

      {/* Content */}
      <div className="container mx-auto z-10 relative max-w-7xl w-full">
        {/* Desktop/Tablet Layout - Side by side */}
        <div className="hidden md:flex md:flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Tablet: Full width name at top */}
          <HeroContent variant="tablet" />

          {/* Text Content - Left side (Desktop) / Below name (Tablet) */}
          <HeroContent variant="desktop" />

          {/* Image - Right side (Desktop) / Centered (Tablet) */}
          <div className="flex justify-center lg:justify-end animate-scale-in animation-delay-100 rellax order-first lg:order-none" data-rellax-speed="-2">
            <HeroImage size="desktop" />
          </div>
        </div>

        {/* Mobile Layout - Stacked: Title, Photo, Description, Buttons */}
        <div className="md:hidden flex flex-col items-center text-center">
          {/* Name and titles first */}
          <HeroContent variant="mobile" />

          {/* Photo second */}
          <div className="mb-6 animate-scale-in animation-delay-100">
            <HeroImage size="mobile" />
          </div>

          {/* Description third */}
          <p className="text-sm sm:text-base text-foreground/70 mb-6 max-w-sm px-2">
            J'accompagne entreprises, marques et startups en Côte d'Ivoire et à l'international avec des solutions digitales premium : développement web sur mesure, automatisation, IA, marketing digital et branding haut de gamme.
          </p>
          
          {/* Buttons last */}
          <div className="flex flex-row gap-3">
            <Button size="default" variant="glow" asChild className="px-4 text-xs">
              <a href="#projects">Voir mes projets</a>
            </Button>
            <Button size="default" variant="outline" asChild className="px-4 text-xs">
              <a href="#contact">Me contacter</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-primary" aria-hidden="true" />
        <span className="sr-only">Défiler vers le bas</span>
      </div>

      {/* SEO Hidden Content - All keywords for search engines */}
      <div className="sr-only" aria-hidden="true">
        <h2>Ulrich Deschamp KOSSONOU - Expert Digital de Référence</h2>
        <p>
          {SEO_KEYWORDS.join('. ')}. 
          Meilleur développeur web à Abidjan, Côte d'Ivoire. 
          Développeur full stack reconnu internationalement. 
          Vibe Coder professionnel et consultant digital senior. 
          Expert en intelligence artificielle et automatisation. 
          Infographiste professionnel et designer UI/UX moderne. 
          Agence digitale premium à Abidjan. 
          Leader du digital en Côte d'Ivoire et Afrique francophone. 
          Créateur de solutions digitales sur mesure. 
          Expert SEO, marketing digital et transformation digitale. 
          Développeur React, Node.js, TypeScript, Python. 
          Expert WordPress, Vue.js et technologies cloud. 
          Consultant cybersécurité et DevOps. 
          Meilleur expert digital Afrique. 
          Agence web haut de gamme Abidjan. 
          Spécialiste e-commerce et applications mobiles.
        </p>
      </div>
    </section>
  );
};

export default Hero;
