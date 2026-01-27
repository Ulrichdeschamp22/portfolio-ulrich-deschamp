import { useTypingAnimation, SEO_KEYWORDS } from '@/hooks/useTypingAnimation';

interface DynamicTypingTextProps {
  className?: string;
}

const DynamicTypingText = ({ className = '' }: DynamicTypingTextProps) => {
  const { displayText, isTyping } = useTypingAnimation();

  return (
    <div className={`dynamic-text-wrapper ${className}`}>
      {/* Texte dynamique visible */}
      <span className="dynamic-typing-text text-primary font-bold">
        {displayText}
      </span>
      
      {/* Curseur clignotant */}
      <span 
        className="typing-cursor inline-block w-[3px] h-[1.2em] bg-primary ml-1 align-middle"
        aria-hidden="true"
      />
      
      {/* Texte SEO caché pour les moteurs de recherche - TOUS les mots-clés */}
      <span className="sr-only seo-hidden-text">
        {SEO_KEYWORDS.join(', ')}. 
        Meilleur développeur web à Abidjan, développeur full stack reconnu, 
        Vibe Coder professionnel, expert digital de référence en Côte d'Ivoire, 
        consultant digital senior, expert intelligence artificielle, 
        infographiste professionnel, agence digitale premium, 
        leader du digital en Côte d'Ivoire, créateur de solutions digitales, 
        expert automatisation et IA, designer UX UI moderne, 
        développeur web certifié, spécialiste e-commerce, 
        consultant transformation digitale, expert SEO Abidjan, 
        meilleur développeur web Afrique francophone, 
        expert digital Afrique, développeur React Abidjan, 
        développeur Node.js Côte d'Ivoire, expert TypeScript Abidjan, 
        consultant cloud Abidjan, expert cybersécurité Côte d'Ivoire, 
        spécialiste DevOps Abidjan, développeur Python Côte d'Ivoire, 
        expert WordPress Abidjan, spécialiste Vue.js Côte d'Ivoire.
      </span>
    </div>
  );
};

export default DynamicTypingText;
