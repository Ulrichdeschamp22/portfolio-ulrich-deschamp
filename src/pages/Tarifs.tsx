import { useState } from 'react';
import { Check, Sparkles, Crown, Rocket, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

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
      price: '75 000 FCFA',
      priceAnnual: '750 000 FCFA',
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
      price: '250 000 FCFA',
      priceAnnual: '2 500 000 FCFA',
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
      price: '500 000 FCFA',
      priceAnnual: '5 000 000 FCFA',
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

  const comparisonFeatures = [
    { name: 'Consultation initiale', discovery: true, starter: true, premium: true, business: true },
    { name: 'Design responsive', discovery: false, starter: true, premium: true, business: true },
    { name: 'Optimisation SEO', discovery: false, starter: 'Basique', premium: 'Avancé', business: 'Premium' },
    { name: 'Hébergement inclus', discovery: false, starter: '1 an', premium: '1 an', business: '1 an' },
    { name: 'Support', discovery: 'Communauté', starter: 'Email 48h', premium: 'Prioritaire', business: 'Dédié' },
    { name: 'Révisions', discovery: false, starter: '1', premium: '3', business: 'Illimitées' },
    { name: 'Automatisation', discovery: false, starter: false, premium: 'Basique', business: 'Avancée' },
    { name: 'IA & Chatbots', discovery: false, starter: false, premium: false, business: true },
    { name: 'Formation incluse', discovery: false, starter: false, premium: true, business: true },
    { name: 'Maintenance', discovery: false, starter: false, premium: false, business: '1 an' },
  ];

  const faqs = [
    {
      question: 'Puis-je changer de plan à tout moment ?',
      answer: 'Oui, vous pouvez passer à un plan supérieur à tout moment. Le changement sera effectif immédiatement et la différence sera calculée au prorata.',
    },
    {
      question: 'Quels sont les délais de réalisation ?',
      answer: 'Les délais varient selon le plan : 1-2 semaines pour Starter, 3-4 semaines pour Premium, et 6-8 semaines pour Business. Ces délais peuvent varier selon la complexité du projet.',
    },
    {
      question: 'Comment se passe le paiement ?',
      answer: 'Nous acceptons les paiements par virement bancaire, Orange Money, Wave et autres moyens de paiement mobile. Un acompte de 50% est demandé au démarrage.',
    },
    {
      question: 'Proposez-vous des devis personnalisés ?',
      answer: 'Absolument ! Pour des projets spécifiques ou sur mesure, contactez-nous pour obtenir un devis adapté à vos besoins exacts.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        {/* Header */}
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
          
          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                !isAnnual ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Mensuel
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                isAnnual ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Annuel
              <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary">
                -17%
              </span>
            </button>
          </div>
        </div>

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

        {/* Comparison Table */}
        <div className="max-w-6xl mx-auto px-6 mb-20">
          <h2 className="text-3xl font-bold text-center mb-10">Comparatif des plans</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 text-muted-foreground font-medium">Fonctionnalités</th>
                  <th className="text-center py-4 px-4 text-muted-foreground font-medium">Découverte</th>
                  <th className="text-center py-4 px-4 text-muted-foreground font-medium">Starter</th>
                  <th className="text-center py-4 px-4 bg-primary/10 rounded-t-lg font-medium text-primary">Premium</th>
                  <th className="text-center py-4 px-4 text-muted-foreground font-medium">Business</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, idx) => (
                  <tr key={idx} className="border-b border-border/50">
                    <td className="py-4 px-4 text-sm">{feature.name}</td>
                    <td className="text-center py-4 px-4">
                      {typeof feature.discovery === 'boolean' ? (
                        feature.discovery ? (
                          <Check className="w-5 h-5 text-primary mx-auto" />
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )
                      ) : (
                        <span className="text-sm text-muted-foreground">{feature.discovery}</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      {typeof feature.starter === 'boolean' ? (
                        feature.starter ? (
                          <Check className="w-5 h-5 text-primary mx-auto" />
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )
                      ) : (
                        <span className="text-sm text-muted-foreground">{feature.starter}</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-4 bg-primary/5">
                      {typeof feature.premium === 'boolean' ? (
                        feature.premium ? (
                          <Check className="w-5 h-5 text-primary mx-auto" />
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )
                      ) : (
                        <span className="text-sm text-primary font-medium">{feature.premium}</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      {typeof feature.business === 'boolean' ? (
                        feature.business ? (
                          <Check className="w-5 h-5 text-primary mx-auto" />
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )
                      ) : (
                        <span className="text-sm text-muted-foreground">{feature.business}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Questions fréquentes</h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Tarifs;