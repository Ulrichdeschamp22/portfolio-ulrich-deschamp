import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import HeroBackground from './hero/HeroBackground';
import HeroContent from './hero/HeroContent';
import HeroImage from './hero/HeroImage';
import { SEO_KEYWORDS } from '@/hooks/useTypingAnimation';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);

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
      aria-label="Section principale - Expert Digital Abidjan"
    >
      {/* Parallax background */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0">
        <HeroBackground isMobile={isMobile} />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto z-10 relative max-w-7xl w-full">
        {/* Desktop/Tablet Layout */}
        <div className="hidden md:flex md:flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Tablet: Full width name at top */}
          <HeroContent variant="tablet" />

          {/* Text Content */}
          <motion.div style={{ y: contentY }}>
            <HeroContent variant="desktop" />
          </motion.div>

          {/* Image with parallax */}
          <motion.div 
            style={{ y: imageY }}
            className="flex justify-center lg:justify-end order-first lg:order-none"
          >
            <HeroImage size="desktop" />
          </motion.div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col items-center text-center">
          <HeroContent variant="mobile" />

          {/* Photo */}
          <div className="mb-6">
            <HeroImage size="mobile" />
          </div>

          {/* Description */}
          <motion.p 
            className="text-sm sm:text-base text-foreground/70 mb-6 max-w-sm px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            J'accompagne entreprises, marques et startups en Côte d'Ivoire et à l'international avec des solutions digitales premium : développement web sur mesure, automatisation, IA, marketing digital et branding haut de gamme.
          </motion.p>
          
          {/* Buttons */}
          <motion.div 
            className="flex flex-row gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="default" variant="glow" asChild className="px-4 text-xs">
                <a href="#projects">Voir mes projets</a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="default" variant="outline" asChild className="px-4 text-xs">
                <a href="#contact">Me contacter</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-8 h-8 text-primary" aria-hidden="true" />
        </motion.div>
        <span className="sr-only">Défiler vers le bas</span>
      </motion.div>

      {/* SEO Hidden Content */}
      <div className="sr-only" aria-hidden="true">
        <h2>Ulrich Deschamp KOSSONOU - Expert Digital de Référence</h2>
        <p>
          {SEO_KEYWORDS.join('. ')}. 
          Meilleur développeur web à Abidjan, Côte d'Ivoire.
        </p>
      </div>
    </section>
  );
};

export default Hero;
