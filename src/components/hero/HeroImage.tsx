interface HeroImageProps {
  className?: string;
  size?: 'mobile' | 'tablet' | 'desktop';
}

const HeroImage = ({ className = '', size = 'desktop' }: HeroImageProps) => {
  const sizeClasses = {
    mobile: 'w-56 h-72 sm:w-64 sm:h-80',
    tablet: 'w-64 md:w-72 h-80 md:h-96',
    desktop: 'w-64 md:w-72 lg:w-96 h-80 md:h-96 lg:h-[32rem]'
  };

  return (
    <div className={`relative ${sizeClasses[size]} group ${className}`}>
      {/* Glow effect background */}
      <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-pulse"></div>
      
      {/* Main image container */}
      <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl group-hover:scale-105 transition-transform duration-500">
        <img 
          src="/lovable-uploads/4280103e-85a8-47b1-89ed-03aed6d7493d.png" 
          alt="Ulrich Deschamp KOSSONOU - Meilleur Expert Digital à Abidjan, Développeur Web Full Stack, Vibe Coder Professionnel en Côte d'Ivoire" 
          className="w-full h-full object-cover bg-background"
          loading="eager"
          width="384"
          height="512"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      
      {/* Outer glow */}
      <div className="absolute -inset-1 bg-gradient-primary rounded-2xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-500 -z-10"></div>
    </div>
  );
};

export default HeroImage;
