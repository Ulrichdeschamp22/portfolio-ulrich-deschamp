import { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface PricingHeaderProps {
  isAnnual: boolean;
  setIsAnnual: (val: boolean) => void;
}

const PricingHeader = ({ isAnnual, setIsAnnual }: PricingHeaderProps) => (
  <div className="text-center max-w-4xl mx-auto px-6 mb-16">
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-6">
      <Sparkles className="w-4 h-4" />
      Investissez en vous-même
    </div>
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
      Passez au niveau{' '}
      <span className="text-gradient">Supérieur</span>
    </h1>
    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
      Des solutions digitales sur mesure pour transformer votre présence en ligne.
      Choisissez l'offre qui correspond à vos ambitions.
    </p>

    <div className="flex items-center justify-center gap-4 mt-8">
      <button
        onClick={() => setIsAnnual(false)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
          !isAnnual ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        Projet unique
      </button>
      <button
        onClick={() => setIsAnnual(true)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
          isAnnual ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        Pack annuel
        <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary">
          -17%
        </span>
      </button>
    </div>
  </div>
);

export default PricingHeader;
