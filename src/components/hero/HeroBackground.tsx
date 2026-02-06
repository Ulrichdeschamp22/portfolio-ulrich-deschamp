import { motion } from 'framer-motion';
import { useRef } from 'react';

interface HeroBackgroundProps {
  isMobile: boolean;
}

const HeroBackground = ({ isMobile }: HeroBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Generate grid dots
  const gridDots = Array.from({ length: 100 }).map((_, i) => ({
    x: (i % 10) * 10 + 5,
    y: Math.floor(i / 10) * 10 + 5,
    delay: Math.random() * 2,
  }));

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden">
      {/* Radial gradient violet subtil au centre */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, hsl(271 91% 15% / 0.4) 0%, hsl(0 0% 0%) 70%)'
        }}
      />

      {/* Pattern de grille de points violets avec parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(271 91% 65% / 0.08) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Floating grid dots with subtle animation */}
      {!isMobile && gridDots.slice(0, 30).map((dot, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/10"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
          }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3,
            delay: dot.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Matrix-style code rain - optimized */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {Array.from({ length: isMobile ? 5 : 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute flex flex-col gap-5"
            style={{
              left: `${i * (isMobile ? 18 : 10)}%`,
              top: '-10%',
            }}
            animate={{
              y: ['0%', '120%'],
            }}
            transition={{
              duration: 15 + i * 2,
              delay: i * 0.5,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {['0', '1', '{', '}', '<', '/>', '( )', '=', ';', 'fn'].map((char, j) => (
              <span 
                key={j}
                className="font-mono text-sm text-primary/40"
                style={{
                  textShadow: '0 0 10px hsl(271 91% 65% / 0.3)'
                }}
              >
                {char}
              </span>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Terminal windows - Desktop only */}
      {!isMobile && (
        <>
          <motion.div 
            className="absolute top-24 left-10 opacity-10 hidden lg:block"
            initial={{ rotate: 12, opacity: 0, x: -50 }}
            animate={{ rotate: 12, opacity: 0.1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            whileHover={{ opacity: 0.2, scale: 1.05 }}
          >
            <div className="w-64 h-40 bg-primary/10 rounded-lg border border-primary/20 backdrop-blur-sm">
              <div className="flex gap-2 p-2">
                <div className="w-3 h-3 rounded-full bg-destructive/30" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/30" />
                <div className="w-3 h-3 rounded-full bg-green-500/30" />
              </div>
              <div className="p-2 text-xs font-mono text-primary/40">
                <motion.div
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  $ npm run dev
                </motion.div>
                <div>✓ Server running...</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="absolute bottom-24 right-10 opacity-10 hidden lg:block"
            initial={{ rotate: -12, opacity: 0, x: 50 }}
            animate={{ rotate: -12, opacity: 0.1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            whileHover={{ opacity: 0.2, scale: 1.05 }}
          >
            <div className="w-72 h-48 bg-primary/10 rounded-lg border border-primary/20 backdrop-blur-sm">
              <div className="flex gap-2 p-2">
                <div className="w-3 h-3 rounded-full bg-destructive/30" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/30" />
                <div className="w-3 h-3 rounded-full bg-green-500/30" />
              </div>
              <div className="p-2 text-xs font-mono text-primary/40">
                <div>&lt;div className="app"&gt;</div>
                <div>  &lt;h1&gt;Portfolio&lt;/h1&gt;</div>
                <div>&lt;/div&gt;</div>
              </div>
            </div>
          </motion.div>
        </>
      )}

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/95" />
      <div className="absolute inset-0 bg-background/30 backdrop-blur-[2px]" />
    </div>
  );
};

export default HeroBackground;
