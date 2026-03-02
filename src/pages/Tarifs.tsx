import { useState } from 'react';
import { Check, Globe, Settings, Headphones, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PricingHeader from '@/components/tarifs/PricingHeader';
import ServiceCatalog from '@/components/tarifs/ServiceCatalog';
import PricingFAQ from '@/components/tarifs/PricingFAQ';

const plans = [
  {
    name: 'Présence Digitale & Image Professionnelle',
    priceMonthly: '250 000 FCFA',
    priceAnnual: '3 000 000 FCFA',
    periodLabel: { monthly: '/ mois', annual: '/ an' },
    icon: Globe,
    features: [
      'Analyse et amélioration de l\'image digitale',
      'Optimisation site ou plateforme existante',
      'Conseils pour renforcer la visibilité',
      'Corrections techniques essentielles',
      'Suivi stratégique régulier',
    ],
    cta: 'Demander un accompagnement',
  },
  {
    name: 'Structuration & Professionnalisation Digitale',
    priceMonthly: '542 000 FCFA',
    priceAnnual: '6 500 000 FCFA',
    periodLabel: { monthly: '/ mois', annual: '/ an' },
    icon: Settings,
    features: [
      'Audit stratégique complet',
      'Organisation des outils digitaux',
      'Optimisation des processus internes',
      'Accompagnement à la prise de décision',
      'Suivi stratégique continu',
    ],
    cta: 'Choisir cette formule',
  },
  {
    name: 'Assistance Technique Continue',
    priceMonthly: '650 000 FCFA',
    priceAnnual: '7 800 000 FCFA',
    periodLabel: { monthly: '/ mois', annual: '/ an' },
    icon: Headphones,
    features: [
      'Support technique prioritaire',
      'Résolution de problèmes',
      'Maintenance et mises à jour',
      'Améliorations techniques',
      'Intervention rapide selon besoin',
    ],
    cta: 'Obtenir une assistance',
  },
  {
    name: 'Direction Digitale Externalisée',
    priceMonthly: '1 250 000 FCFA',
    priceAnnual: '15 000 000 FCFA',
    periodLabel: { monthly: '/ mois', annual: '/ an' },
    icon: Crown,
    features: [
      'Élaboration stratégie digitale globale',
      'Supervision des projets numériques',
      'Analyse des performances',
      'Optimisation continue',
      'Accompagnement décisionnel',
    ],
    cta: 'Planifier un échange stratégique',
  },
];

const Tarifs = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <PricingHeader />

        {/* Toggle Buttons */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <button
            onClick={() => setIsAnnual(false)}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              !isAnnual
                ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Projet unique
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              isAnnual
                ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Pack annuel
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-7xl mx-auto px-6 mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            {plans.map((plan) => (
              <Card 
                key={plan.name}
                className="relative overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:border-primary/30"
              >
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <plan.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl leading-tight">{plan.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <span className="text-3xl font-bold">
                      {isAnnual ? plan.priceAnnual : plan.priceMonthly}
                    </span>
                    <span className="text-muted-foreground text-sm ml-1">
                      {isAnnual ? plan.periodLabel.annual : plan.periodLabel.monthly}
                    </span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="outline"
                    className="w-full"
                    asChild
                  >
                    <a 
                      href={`https://wa.me/2250710224023?text=Bonjour%20Ulrich,%20je%20suis%20intéressé%20par%20l'offre%20${encodeURIComponent(plan.name)}%20(${isAnnual ? 'annuel' : 'mensuel'})`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {plan.cta}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <ServiceCatalog />
        <PricingFAQ />
      </main>

      <Footer />
    </div>
  );
};

export default Tarifs;
