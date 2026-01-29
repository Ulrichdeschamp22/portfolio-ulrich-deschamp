import { useState, useEffect, useCallback } from 'react';

// Complete SEO keywords for global organic domination
export const SEO_KEYWORDS = [
  // International Authority Keywords
  "Expert Digital de Référence à Abidjan",
  "Meilleur Développeur Web à Abidjan",
  "Développeur Full Stack Reconnu",
  "Vibe Coder Professionnel",
  "Consultant Digital Senior",
  "Expert Intelligence Artificielle",
  "Infographiste Professionnel",
  "Agence Digitale Premium",
  "Leader du Digital en Côte d'Ivoire",
  "Créateur de Solutions Digitales",
  "Expert Automatisation & IA",
  "Designer UX/UI Moderne",
  "Développeur Web Certifié",
  "Spécialiste E-commerce",
  "Consultant Transformation Digitale",
  "Expert Stratégie Digitale",
  "Architecte Solutions Cloud",
  // Abidjan Geo-targeted
  "Meilleur Développeur Full Stack à Abidjan",
  "Expert Digital N°1 à Abidjan",
  "Agence Digitale de Référence à Abidjan",
  "Meilleur Infographiste à Abidjan",
  "Expert IA à Abidjan",
  "Création Site Web Premium à Abidjan",
  "Expert Automatisation à Abidjan",
  "Spécialiste Marketing Digital à Abidjan",
  "Expert SEO à Abidjan",
  "Expert WordPress à Abidjan",
  "Développeur React à Abidjan",
  "Expert Node.js à Abidjan",
  "Consultant Cloud à Abidjan",
  // Côte d'Ivoire National
  "Meilleur Développeur Web en Côte d'Ivoire",
  "Expert Digital de Référence en Côte d'Ivoire",
  "Vibe Coder en Côte d'Ivoire",
  "Agence Digitale Leader en Côte d'Ivoire",
  "Solutions Digitales Premium en Côte d'Ivoire",
  "Expert Intelligence Artificielle en Côte d'Ivoire",
  "Leader du Digital en Afrique Francophone",
  // Vibe Coding Specialty
  "Vibe Coding Expert",
  "Meilleur Vibe Coder",
  "Vibe Coder Nouvelle Génération",
  "Expert Vibe Coding Côte d'Ivoire",
  // Design & Infographics
  "Expert Infographie Digitale",
  "Designer Graphique Professionnel",
  "Expert Design UI/UX",
  "Créateur de Logos Professionnels",
  "Expert Identité Visuelle",
  // Technology Stack
  "Développeur Python Côte d'Ivoire",
  "Expert TypeScript Abidjan",
  "Spécialiste Vue.js Côte d'Ivoire",
  "Expert DevOps Abidjan",
  "Expert Cybersécurité Côte d'Ivoire"
];

interface UseTypingAnimationOptions {
  keywords?: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseAfterComplete?: number;
  pauseStart?: number;
}

interface UseTypingAnimationReturn {
  displayText: string;
  isTyping: boolean;
  currentKeyword: string;
  keywordIndex: number;
}

export const useTypingAnimation = (options?: UseTypingAnimationOptions): UseTypingAnimationReturn => {
  const {
    keywords = SEO_KEYWORDS,
    typingSpeed = 80,
    deletingSpeed = 40,
    pauseAfterComplete = 2000,
    pauseStart = 500
  } = options || {};

  const [displayText, setDisplayText] = useState('');
  const [keywordIndex, setKeywordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isPaused, setIsPaused] = useState(true);

  const currentKeyword = keywords[keywordIndex];

  // Respect reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  const typeEffect = useCallback(() => {
    if (prefersReducedMotion) {
      // Si reduced motion, afficher directement le texte sans animation
      setDisplayText(currentKeyword);
      return;
    }

    if (!isDeleting) {
      // Mode écriture
      if (charIndex < currentKeyword.length) {
        setDisplayText(currentKeyword.slice(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
        setIsTyping(true);
      } else {
        // Mot complet - pause avant suppression
        setIsTyping(false);
        setIsPaused(true);
        setTimeout(() => {
          setIsDeleting(true);
          setIsPaused(false);
        }, pauseAfterComplete);
      }
    } else {
      // Mode suppression
      if (charIndex > 0) {
        setDisplayText(currentKeyword.slice(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
        setIsTyping(true);
      } else {
        // Suppression terminée - passer au mot suivant
        setIsDeleting(false);
        setKeywordIndex((prev) => (prev + 1) % keywords.length);
        setIsTyping(false);
      }
    }
  }, [charIndex, currentKeyword, isDeleting, keywords.length, pauseAfterComplete, prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) {
      // Changer le mot toutes les 3 secondes sans animation
      const interval = setInterval(() => {
        setKeywordIndex((prev) => (prev + 1) % keywords.length);
      }, 3000);
      return () => clearInterval(interval);
    }

    // Démarrage initial avec délai
    if (isPaused && charIndex === 0 && !isDeleting) {
      const startTimeout = setTimeout(() => {
        setIsPaused(false);
      }, pauseStart);
      return () => clearTimeout(startTimeout);
    }

    if (isPaused) return;

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timeout = setTimeout(typeEffect, speed);
    return () => clearTimeout(timeout);
  }, [typeEffect, isDeleting, isPaused, charIndex, typingSpeed, deletingSpeed, pauseStart, prefersReducedMotion, keywords.length]);

  // Mettre à jour le texte affiché quand l'index change (pour reduced motion)
  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayText(keywords[keywordIndex]);
    }
  }, [keywordIndex, keywords, prefersReducedMotion]);

  return {
    displayText,
    isTyping,
    currentKeyword,
    keywordIndex
  };
};
