import { Check, Globe, Settings, Headphones, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PricingHeader from '@/components/tarifs/PricingHeader';
import ServiceCatalog from '@/components/tarifs/ServiceCatalog';
import PricingFAQ from '@/components/tarifs/PricingFAQ';

const plans = [
  {
    name: 'Présence Digitale & Image Professionnelle',
    price: '3 000 000 FCFA',
    period: '/ an',
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
    price: '6 500 000 FCFA',
    period: '/ an',
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
    price: '7 800 000 FCFA',
    period: '/ an',
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
    price: '15 000 000 FCFA',
    period: '/ an',
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
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <PricingHeader />

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
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground text-sm ml-1">{plan.period}</span>
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
                      href={`https://wa.me/2250710224023?text=Bonjour%20Ulrich,%20je%20suis%20intéressé%20par%20l'offre%20${encodeURIComponent(plan.name)}`}
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

        {/* Full Service Catalog */}
        <ServiceCatalog />

        {/* FAQ */}
        <PricingFAQ />
      </main>

      <Footer />
    </div>
  );
};

export default Tarifs;
