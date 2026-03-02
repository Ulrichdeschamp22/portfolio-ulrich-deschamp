import { Sparkles } from 'lucide-react';

const PricingHeader = () => (
  <div className="text-center max-w-4xl mx-auto px-6 mb-16">
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-6">
      <Sparkles className="w-4 h-4" />
      Accompagnement sur mesure
    </div>
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
      Accompagnement &{' '}
      <span className="text-gradient">Assistance Digitale</span>
    </h1>
    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
      Un accompagnement professionnel pour améliorer votre présence en ligne, 
      structurer votre système digital et bénéficier d'un support stratégique continu.
    </p>
  </div>
);

export default PricingHeader;
