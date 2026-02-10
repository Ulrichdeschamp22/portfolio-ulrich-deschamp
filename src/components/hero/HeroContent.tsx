import { Button } from '@/components/ui/button';
import DynamicTypingText from './DynamicTypingText';
import { motion } from 'framer-motion';

interface HeroContentProps {
  variant: 'desktop' | 'tablet' | 'mobile';
}

// Stagger animation variants
const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15
    }
  }
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
      delay: 0.8
    }
  }
};

const HeroContent = ({ variant }: HeroContentProps) => {
  if (variant === 'mobile') {
    return (
      <motion.div 
        className="md:hidden flex flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* H1 - Name with stagger animation per word */}
        <motion.h1 
          className="text-3xl sm:text-4xl font-bold mb-3 leading-tight"
          variants={itemVariants}
        >
          <motion.span 
            className="text-gradient block"
            style={{ textShadow: '0 0 40px hsl(271 91% 65% / 0.4)' }}
          >
            Ulrich Deschamp KOSSONOU
          </motion.span>
        </motion.h1>
        
        {/* Dynamic typing subtitle */}
        <motion.div 
          className="min-h-[60px] flex items-center justify-center mb-2"
          variants={itemVariants}
        >
          <DynamicTypingText className="text-lg sm:text-xl" />
        </motion.div>
        
        {/* Badge with bounce animation */}
        <motion.h2 
          className="text-base font-semibold mb-3 text-foreground/90"
          variants={badgeVariants}
        >
          <motion.span 
            className="inline-block px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary/25 via-accent/30 to-secondary/25 border border-primary/50 backdrop-blur-md relative overflow-hidden"
            style={{ 
              boxShadow: '0 0 25px hsl(271 91% 65% / 0.35), inset 0 1px 0 hsl(0 0% 100% / 0.1)' 
            }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 35px hsl(271 91% 65% / 0.5)' }}
          >
            <span className="relative z-10 text-gradient font-bold tracking-wide">✦ Expert digital à Abidjan</span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
            />
          </motion.span>
        </motion.h2>
      </motion.div>
    );
  }

  if (variant === 'tablet') {
    return (
      <motion.div 
        className="lg:hidden w-full text-center mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      >
        <motion.h1 
          className="text-4xl md:text-5xl font-bold leading-tight"
          style={{ textShadow: '0 0 40px hsl(271 91% 65% / 0.4)' }}
        >
          <span className="text-gradient block">Ulrich Deschamp KOSSONOU</span>
        </motion.h1>
        <div className="min-h-[50px] flex items-center justify-center mt-2">
          <DynamicTypingText className="text-xl md:text-2xl" />
        </div>
      </motion.div>
    );
  }

  // Desktop variant
  return (
    <motion.div 
      className="text-center lg:text-left"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Desktop: Name with H1 - Staggered word animation */}
      <motion.h1 
        className="hidden lg:block text-4xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
        variants={itemVariants}
      >
        <motion.span 
          className="text-gradient block"
          style={{ textShadow: '0 0 50px hsl(271 91% 65% / 0.5)' }}
        >
          Ulrich Deschamp KOSSONOU
        </motion.span>
      </motion.h1>
      
      {/* Dynamic typing text - Desktop */}
      <motion.div 
        className="hidden lg:flex min-h-[80px] items-center mb-4"
        variants={itemVariants}
      >
        <DynamicTypingText className="text-2xl lg:text-3xl xl:text-4xl" />
      </motion.div>
      
      {/* Badge */}
      <motion.h2 
        className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-foreground/90"
        variants={badgeVariants}
      >
        <motion.span 
          className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-primary/20 via-primary/30 to-accent/20 border border-primary/40 backdrop-blur-sm"
          style={{ boxShadow: '0 0 30px hsl(271 91% 65% / 0.3)' }}
          whileHover={{ scale: 1.03, boxShadow: '0 0 40px hsl(271 91% 65% / 0.5)' }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <span className="text-gradient font-bold">Expert digital à Abidjan</span>
        </motion.span>
      </motion.h2>
      
      {/* Description */}
      <motion.p 
        className="text-base md:text-lg text-foreground/70 mb-8 max-w-xl mx-auto lg:mx-0"
        variants={itemVariants}
      >
        J'accompagne entreprises, marques et startups en Côte d'Ivoire et à l'international avec des solutions digitales premium : développement web sur mesure, automatisation, IA, marketing digital et branding haut de gamme.
      </motion.p>
      
      {/* Buttons with hover effects */}
      <motion.div 
        className="flex flex-row gap-4 w-full lg:w-auto"
        variants={itemVariants}
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button 
            size="lg" 
            variant="glow" 
            asChild 
            className="flex-1 lg:flex-none px-6 lg:px-8"
            style={{ boxShadow: '0 0 25px hsl(271 91% 65% / 0.5)' }}
          >
            <a href="#projects">Voir mes projets</a>
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button size="lg" variant="outline" asChild className="flex-1 lg:flex-none px-6 lg:px-8">
            <a href="#contact">Me contacter</a>
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
