import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface HeroImageProps {
  className?: string;
  size?: 'mobile' | 'tablet' | 'desktop';
}

const HeroImage = ({ className = '', size = 'desktop' }: HeroImageProps) => {
  const [isShining, setIsShining] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsShining(true);
      setTimeout(() => setIsShining(false), 1500);
    }, 7000);

    const initialTimeout = setTimeout(() => {
      setIsShining(true);
      setTimeout(() => setIsShining(false), 1500);
    }, 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(initialTimeout);
    };
  }, []);

  const sizeClasses = {
    mobile: 'w-56 h-72 sm:w-64 sm:h-80',
    tablet: 'w-64 md:w-72 h-80 md:h-96',
    desktop: 'w-64 md:w-72 lg:w-96 h-80 md:h-96 lg:h-[32rem]'
  };

  return (
    <motion.div 
      className={`relative ${sizeClasses[size]} group ${className}`}
      initial={{ opacity: 0, scale: 0.8, y: 50, rotateZ: -5 }}
      animate={{ opacity: 1, scale: 1, y: 0, rotateZ: 0 }}
      transition={{ 
        delay: 0.4, 
        duration: 1.2,
        type: 'spring',
        stiffness: 100,
        damping: 15
      }}
    >
      {/* Pulsating glow effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-primary rounded-2xl blur-2xl"
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Static container - no floating animation */}
      <div className="relative w-full h-full">
        {/* Main image container */}
        <motion.div 
          className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl"
          style={{
            border: '3px solid transparent',
            background: 'linear-gradient(hsl(var(--background)), hsl(var(--background))) padding-box, linear-gradient(135deg, hsl(271 91% 65%), hsl(217 91% 60%)) border-box',
            boxShadow: '0 0 40px hsl(271 91% 65% / 0.5), 0 0 80px hsl(271 91% 65% / 0.25)'
          }}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
        >
          <img 
            src="/lovable-uploads/hero-photo.jpeg" 
            alt="Ulrich Deschamp KOSSONOU - Expert Digital à Abidjan, Développeur Web Full Stack" 
            className="w-full h-full object-cover object-top bg-background"
            loading="eager"
            width="384"
            height="512"
          />
          
          {/* Shine effect */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12"
            initial={{ x: '-200%' }}
            animate={{ x: isShining ? '200%' : '-200%' }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
          
          {/* Hover overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
      
      {/* Outer glow ring */}
      <div 
        className="absolute -inset-1 bg-gradient-primary rounded-2xl blur-md -z-10"
        style={{ opacity: 0.3 }}
      />
    </motion.div>
  );
};

export default HeroImage;
