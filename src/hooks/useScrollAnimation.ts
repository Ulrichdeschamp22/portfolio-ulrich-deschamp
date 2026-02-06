import { useInView } from 'framer-motion';
import { useRef, RefObject } from 'react';

interface ScrollAnimationOptions {
  once?: boolean;
  amount?: 'some' | 'all' | number;
  margin?: string;
}

export function useScrollAnimation(options: ScrollAnimationOptions = {}): {
  ref: RefObject<HTMLDivElement>;
  isInView: boolean;
} {
  const { once = true, amount = 0.3, margin = '0px' } = options;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount, margin });

  return { ref, isInView };
}

// Preset animation variants for consistency
export const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

export const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

export const slideRightVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 }
};

export const slideLeftVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 }
};

export const rotate3DVariants = {
  hidden: { opacity: 0, rotateY: -15, rotateX: 10 },
  visible: { opacity: 1, rotateY: 0, rotateX: 0 }
};

// Spring configurations
export const springConfig = {
  gentle: { type: 'spring', stiffness: 100, damping: 15 },
  bouncy: { type: 'spring', stiffness: 300, damping: 20 },
  stiff: { type: 'spring', stiffness: 400, damping: 30 },
  smooth: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
};

// Stagger container variants
export const staggerContainerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

export const staggerItemVariants = {
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
