import { Button } from '@/components/ui/button';
import DynamicTypingText from './DynamicTypingText';

interface HeroContentProps {
  variant: 'desktop' | 'tablet' | 'mobile';
}

const HeroContent = ({ variant }: HeroContentProps) => {
  if (variant === 'mobile') {
    return (
      <div className="md:hidden flex flex-col items-center text-center">
        {/* H1 - Name with dynamic text */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 rellax leading-tight" data-rellax-speed="1">
          <span className="text-gradient block">Ulrich Deschamp KOSSONOU</span>
        </h1>
        
        {/* Dynamic typing subtitle */}
        <div className="min-h-[60px] flex items-center justify-center mb-2">
          <DynamicTypingText className="text-lg sm:text-xl" />
        </div>
        
        <h2 className="text-base font-semibold mb-3 text-foreground/90">
          <span className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-primary/20 via-primary/30 to-accent/20 border border-primary/40 backdrop-blur-sm shadow-md shadow-primary/20">
            <span className="text-gradient font-bold">Expert digital à Abidjan</span>
          </span>
        </h2>
      </div>
    );
  }

  if (variant === 'tablet') {
    return (
      <div className="lg:hidden w-full text-center mb-4">
        <h1 className="text-4xl md:text-5xl font-bold rellax leading-tight" data-rellax-speed="1">
          <span className="text-gradient block">Ulrich Deschamp KOSSONOU</span>
        </h1>
        {/* Dynamic typing for tablet */}
        <div className="min-h-[50px] flex items-center justify-center mt-2">
          <DynamicTypingText className="text-xl md:text-2xl" />
        </div>
      </div>
    );
  }

  // Desktop variant
  return (
    <div className="text-center lg:text-left animate-fade-in" data-aos="fade-right" data-aos-delay="200">
      {/* Desktop only: Name with H1 */}
      <h1 className="hidden lg:block text-4xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 rellax leading-tight" data-rellax-speed="1">
        <span className="text-gradient block">Ulrich Deschamp KOSSONOU</span>
      </h1>
      
      {/* Dynamic typing text - Desktop */}
      <div className="hidden lg:flex min-h-[80px] items-center mb-4">
        <DynamicTypingText className="text-2xl lg:text-3xl xl:text-4xl" />
      </div>
      
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-foreground/90">
        <span className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-primary/20 via-primary/30 to-accent/20 border border-primary/40 backdrop-blur-sm shadow-lg shadow-primary/20">
          <span className="text-gradient font-bold">Expert digital à Abidjan</span>
        </span>
      </h2>
      
      <p className="text-base md:text-lg text-foreground/70 mb-8 max-w-xl mx-auto lg:mx-0">
        J'accompagne entreprises, marques et startups en Côte d'Ivoire et à l'international avec des solutions digitales premium : développement web sur mesure, automatisation, IA, marketing digital et branding haut de gamme.
      </p>
      
      {/* Buttons */}
      <div className="flex flex-row gap-4 w-full lg:w-auto">
        <Button size="lg" variant="glow" asChild className="flex-1 lg:flex-none px-6 lg:px-8">
          <a href="#projects">Voir mes projets</a>
        </Button>
        <Button size="lg" variant="outline" asChild className="flex-1 lg:flex-none px-6 lg:px-8">
          <a href="#contact">Me contacter</a>
        </Button>
      </div>
    </div>
  );
};

export default HeroContent;
