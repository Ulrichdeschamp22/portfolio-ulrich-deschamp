import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-bg-tech.jpg';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Développeur web Abidjan - Ulrich Deschamp KOSSONOU - Arrière-plan technologique moderne" 
          className="w-full h-full object-cover opacity-20"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-dark" />
        <div className="absolute inset-0 bg-gradient-glow animate-pulse" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          
          {/* Text Content - Left on Desktop, Below on Mobile/Tablet */}
          <div className="order-2 lg:order-1 text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6">
              <span className="text-gradient">Ulrich Deschamp</span>
              <span className="text-gradient block lg:inline"> KOSSONOU</span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-6 animate-fade-in animation-delay-100">
              Développeur Web Abidjan • Infographe • Photographe • Community Manager Côte d'Ivoire
            </h2>
            
            <p className="text-base sm:text-lg lg:text-xl text-foreground/80 mb-8 animate-fade-in animation-delay-200">
              Expert digital basé à Abidjan, j'accompagne entreprises et particuliers dans leur transformation digitale. 
              Création site web Côte d'Ivoire avec plus de 5 ans d'expérience en développement web, design graphique et marketing digital.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in animation-delay-300">
              <Button size="xl" variant="glow" asChild>
                <a href="#projects">Voir mes projets</a>
              </Button>
              <Button size="xl" variant="outline" asChild>
                <a href="#contact">Me contacter</a>
              </Button>
            </div>
          </div>

          {/* Image - Right on Desktop, Top on Mobile/Tablet */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-scale-in animation-delay-100">
            <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[28rem] xl:w-[28rem] xl:h-[32rem] group">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-pulse"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                <img 
                  src="/lovable-uploads/4280103e-85a8-47b1-89ed-03aed6d7493d.png" 
                  alt="Ulrich Deschamp KOSSONOU - Développeur Web et Expert Digital à Abidjan, Côte d'Ivoire - Portrait Professionnel" 
                  className="w-full h-full object-contain bg-background"
                  loading="eager"
                  width="448"
                  height="512"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="absolute -inset-1 bg-gradient-primary rounded-2xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-500 -z-10"></div>
            </div>
          </div>
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