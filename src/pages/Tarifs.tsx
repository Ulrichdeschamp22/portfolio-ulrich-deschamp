import { useState } from 'react';
import { Check, Globe, Settings, Headphones, Crown, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ServiceCatalog from '@/components/tarifs/ServiceCatalog';
import PricingFAQ from '@/components/tarifs/PricingFAQ';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Présence Digitale & Image Professionnelle',
    priceMonthly: '150 000',
    priceAnnual: '1 650 000',
    icon: Globe,
    features: [
      'Analyse et amélioration de l\'image digitale',
      'Optimisation site ou plateforme existante',
      'Conseils pour renforcer la visibilité',
      'Corrections techniques essentielles',
      'Suivi stratégique régulier',
    ],
    cta: 'Demander un accompagnement',
    color: 'from-violet-500/20 to-blue-500/20',
    borderColor: 'border-violet-500/30',
    iconBg: 'bg-violet-500/15',
    iconColor: 'text-violet-500',
  },
  {
    name: 'Structuration & Professionnalisation Digitale',
    priceMonthly: '350 000',
    priceAnnual: '3 850 000',
    icon: Settings,
    popular: true,
    features: [
      'Audit stratégique complet',
      'Organisation des outils digitaux',
      'Optimisation des processus internes',
      'Accompagnement à la prise de décision',
      'Suivi stratégique continu',
    ],
    cta: 'Choisir cette formule',
    color: 'from-primary/20 to-purple-500/20',
    borderColor: 'border-primary/40',
    iconBg: 'bg-primary/15',
    iconColor: 'text-primary',
  },
  {
    name: 'Assistance Technique Continue',
    priceMonthly: '450 000',
    priceAnnual: '4 950 000',
    icon: Headphones,
    features: [
      'Support technique prioritaire',
      'Résolution de problèmes',
      'Maintenance et mises à jour',
      'Améliorations techniques',
      'Intervention rapide selon besoin',
    ],
    cta: 'Obtenir une assistance',
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-blue-500/30',
    iconBg: 'bg-blue-500/15',
    iconColor: 'text-blue-500',
  },
  {
    name: 'Direction Digitale Externalisée',
    priceMonthly: '800 000',
    priceAnnual: '8 800 000',
    icon: Crown,
    features: [
      'Élaboration stratégie digitale globale',
      'Supervision des projets numériques',
      'Analyse des performances',
      'Optimisation continue',
      'Accompagnement décisionnel',
    ],
    cta: 'Planifier un échange stratégique',
    color: 'from-amber-500/20 to-orange-500/20',
    borderColor: 'border-amber-500/30',
    iconBg: 'bg-amber-500/15',
    iconColor: 'text-amber-500',
  },
];

const Tarifs = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated mesh background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[800px] h-[800px] rounded-full bg-primary/5 blur-[150px] animate-blob-1" />
        <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-[120px] animate-blob-2" />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-violet-500/4 blur-[100px] animate-blob-3" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      </div>

      <Navigation />
      
      <main className="pt-28 pb-16 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center px-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-4 px-4 py-1.5 text-sm border-primary/30 text-primary">
              <Sparkles className="w-3.5 h-3.5 mr-1.5" />
              Tarification transparente
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient">Investissez</span> dans votre{' '}
              <span className="text-gradient">transformation digitale</span>
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Des formules d'accompagnement adaptées à chaque étape de votre croissance digitale. 
              Choisissez l'offre qui correspond à vos ambitions.
            </p>
          </motion.div>
        </div>

        {/* Toggle */}
        <motion.div 
          className="flex items-center justify-center gap-3 mb-14"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-muted/50 backdrop-blur-sm rounded-full p-1 flex items-center border border-border/50">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                !isAnnual
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Mensuel
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 relative ${
                isAnnual
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Annuel
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">
                -8%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <Card 
                  className={`relative overflow-hidden border-border/50 bg-card/60 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 group h-full ${plan.popular ? 'ring-2 ring-primary/30' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary text-primary-foreground text-xs px-3 py-1">
                        Populaire
                      </Badge>
                    </div>
                  )}
                  
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <CardHeader className="pb-4 relative z-10">
                    <div className={`w-14 h-14 rounded-2xl ${plan.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <plan.icon className={`w-7 h-7 ${plan.iconColor}`} />
                    </div>
                    <CardTitle className="text-lg sm:text-xl leading-tight pr-20">{plan.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <div className="mb-8">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl sm:text-4xl font-bold tracking-tight">
                          {isAnnual ? plan.priceAnnual : plan.priceMonthly}
                        </span>
                        <span className="text-sm text-muted-foreground ml-1">FCFA</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {isAnnual ? 'par an' : 'par mois'}
                      </p>
                    </div>
                    
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm">
                          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-primary" />
                          </div>
                          <span className="text-foreground/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      variant={plan.popular ? "default" : "outline"}
                      className={`w-full group/btn ${plan.popular ? 'shadow-lg shadow-primary/20' : ''}`}
                      asChild
                    >
                      <a 
                        href={`https://wa.me/2250710224023?text=Bonjour%20Ulrich,%20je%20suis%20intéressé%20par%20l'offre%20${encodeURIComponent(plan.name)}%20(${isAnnual ? 'annuel' : 'mensuel'})`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {plan.cta}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
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
