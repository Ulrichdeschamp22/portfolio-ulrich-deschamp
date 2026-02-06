import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface MorphingBlobProps {
  className?: string;
}

const MorphingBlob = ({ className = '' }: MorphingBlobProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  // Transform blob based on scroll position
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.3, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const x = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], ['0%', '30%', '-20%', '10%']);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], ['0%', '50%', '100%']);
  const borderRadius = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      '60% 40% 30% 70% / 60% 30% 70% 40%',
      '30% 60% 70% 40% / 50% 60% 30% 60%',
      '50% 50% 50% 50% / 50% 50% 50% 50%',
      '70% 30% 50% 50% / 30% 30% 70% 70%',
      '40% 60% 60% 40% / 60% 40% 40% 60%'
    ]
  );

  return (
    <motion.div
      ref={ref}
      className={`fixed pointer-events-none z-0 ${className}`}
      style={{
        x,
        y,
        scale,
        rotate,
        borderRadius,
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, hsl(271 91% 65% / 0.12), hsl(271 91% 65% / 0.05), transparent 70%)',
        filter: 'blur(80px)',
        top: '10%',
        left: '-10%',
      }}
    />
  );
};

export default MorphingBlob;
