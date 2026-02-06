import { useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef, RefObject } from 'react';

interface ParallaxOptions {
  speed?: number; // 0.3 = slow, 1 = normal, 1.5 = fast
  offset?: ['start end', 'end start'] | ['start start', 'end end'];
}

export function useParallax(options: ParallaxOptions = {}): {
  ref: RefObject<HTMLDivElement>;
  y: MotionValue<number>;
  opacity: MotionValue<number>;
} {
  const { speed = 1, offset = ['start end', 'end start'] } = options;
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as any,
  });

  const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return { ref, y, opacity };
}

export function useScrollProgress() {
  const { scrollYProgress } = useScroll();
  return scrollYProgress;
}

export function useSectionReveal(threshold: number = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, threshold], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, threshold], [0, 1]);
  const rotateX = useTransform(scrollYProgress, [0, threshold], [15, 0]);

  return { ref, scale, opacity, rotateX };
}

export function useStaggerChildren(itemCount: number, baseDelay: number = 0.1) {
  return Array.from({ length: itemCount }, (_, i) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: i * baseDelay, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }
  }));
}
