import { useState } from 'react';
import { Check, Sparkles, Crown, Rocket, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PricingHeader from '@/components/tarifs/PricingHeader';
import ServiceCatalog from '@/components/tarifs/ServiceCatalog';
import PricingFAQ from '@/components/tarifs/PricingFAQ';

const Tarifs = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Découverte',
      description: 'Pour démarrer votre projet',
      price: 'Gratuit',
      priceAnnual: 'Gratuit',
      icon: Sparkles,
      features: [
        'Consultation initiale gratuite',
        'Accès aux ressources publiques',
        'Support communautaire',
        'Newsletter exclusive',
      ],
      cta: 'Commencer',
      popular: false,
      gradient: 'from-muted to-muted/50',
    },
    {
      name: 'Starter',
      description: 'Pour les petits projets',
      price: '150 000 FCFA',
      priceAnnual: '1 500 000 FCFA',
      icon: Star,
      features: [
        'Site vitrine one-page',
        'Design responsive moderne',
        'Optimisation SEO de base',
        'Hébergement 1 an inclus',
        'Support email 48h',
        '1 révision incluse',
      ],
      cta: 'Choisir Starter',
      popular: false,
      gradient: 'from-primary/20 to-secondary/20',
    },
    {
      name: 'Premium',
      description: 'Pour les projets ambitieux',
      price: '500 000 FCFA',
      priceAnnual: '5 000 000 FCFA',
      icon: Crown,
      features: [
        'Tout du plan Starter',
        'Site multi-pages complet',
        'Animations avancées',
        'Intégration CMS',
        'Automatisation de base',
        'Support prioritaire 24h',
        '3 révisions incluses',
        'Formation administration',
      ],
      cta: 'Devenir Premium',
      popular: true,
      gradient: 'from-primary/30 to-accent/30',
    },
    {
      name: 'Business',
      description: 'Pour les entreprises',
      price: '1 500 000 FCFA',
      priceAnnual: '15 000 000 FCFA',
      icon: Rocket,
      features: [
        'Tout du plan Premium',
        'Application web sur mesure',
        'IA & Automatisation avancée',
        'Dashboard personnalisé',
        'API & intégrations tierces',
        'Support dédié prioritaire',
        'Révisions illimitées',
        'Maintenance incluse 1 an',
        'Coaching stratégie digitale',
      ],
      cta: 'Contacter',
      popular: false,
      gradient: 'from-secondary/30 to-primary/30',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <PricingHeader isAnnual={isAnnual} setIsAnnual={setIsAnnual} />

        {/* Pricing Cards */}
        <div className="max-w-7xl mx-auto px-6 mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan) => (
              <Card 
                key={plan.name}
                className={`relative overflow-hidden border-border/50 bg-gradient-to-b ${plan.gradient} backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  plan.popular ? 'ring-2 ring-primary' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                      RECOMMANDÉ
                    </span>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                    <plan.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <span className="text-3xl font-bold">
                      {isAnnual ? plan.priceAnnual : plan.price}
                    </span>
                    {plan.price !== 'Gratuit' && (
                      <span className="text-muted-foreground text-sm ml-1">
                        /{isAnnual ? 'an' : 'projet'}
                      </span>
                    )}
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-primary hover:bg-primary/90' 
                        : 'bg-muted hover:bg-muted/80 text-foreground'
                    }`}
                    asChild
                  >
                    <a 
                      href={`https://wa.me/2250710224023?text=Bonjour%20Ulrich,%20je%20suis%20intéressé%20par%20le%20plan%20${plan.name}`}
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
