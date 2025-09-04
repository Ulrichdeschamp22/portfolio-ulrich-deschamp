import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Ulrich Deschamp Portfolio Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-dark" />
        <div className="absolute inset-0 bg-gradient-glow animate-pulse" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center relative">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in mt-16 md:mt-20">
          <span className="text-gradient">Ulrich Deschamp</span>
        </h1>
        
        {/* Portfolio Image with stunning design */}
        <div className="relative mb-8 animate-scale-in animation-delay-100">
          <div className="relative w-64 h-80 md:w-80 md:h-96 mx-auto group">
            <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500 animate-pulse"></div>
            <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl group-hover:scale-105 transition-transform duration-500">
              <img 
                src="/lovable-uploads/4280103e-85a8-47b1-89ed-03aed6d7493d.png" 
                alt="Ulrich Deschamp Professional Portrait" 
                className="w-full h-full object-contain bg-background"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="absolute -inset-1 bg-gradient-primary rounded-2xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-500 -z-10"></div>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 animate-fade-in animation-delay-200">
          Développeur Web • Infographe • Photographe • Community Manager
        </h2>
        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-8 animate-fade-in animation-delay-200">
          Basé à Abidjan, j'accompagne entreprises et particuliers dans leur transformation digitale 
          avec plus de 5 ans d'expérience en développement web, design et marketing digital.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-300">
          <Button size="xl" variant="glow" asChild>
            <a href="#projects">Voir mes projets</a>
          </Button>
          <Button size="xl" variant="outline" asChild>
            <a href="#contact">Me contacter</a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-primary" />
      </div>
    </section>
  );
};

export default Hero;