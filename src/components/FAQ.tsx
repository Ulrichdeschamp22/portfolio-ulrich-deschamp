import { useState } from 'react';
import { ChevronDown, MessageCircle, Mail, FileText, User, Briefcase, Code, Clock, CreditCard, GraduationCap, HelpCircle, Star, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Tout voir', icon: Sparkles, color: 'from-primary to-primary-glow' },
    { id: 'about', label: 'À propos', icon: User, color: 'from-blue-500 to-blue-600' },
    { id: 'skills', label: 'Compétences', icon: Briefcase, color: 'from-purple-500 to-purple-600' },
    { id: 'projects', label: 'Projets', icon: Code, color: 'from-green-500 to-green-600' },
    { id: 'collaboration', label: 'Collaboration', icon: MessageCircle, color: 'from-orange-500 to-orange-600' },
    { id: 'payment', label: 'Paiement', icon: CreditCard, color: 'from-pink-500 to-pink-600' },
    { id: 'training', label: 'Formations', icon: GraduationCap, color: 'from-yellow-500 to-yellow-600' },
  ];

  const faqData = [
    {
      category: 'about',
      question: "Qui est Ulrich Deschamp ?",
      answer: "Ulrich Deschamp (Kossonou Kouassi N'Tobeni) est un professionnel polyvalent basé à Abidjan, Côte d'Ivoire. Il est spécialisé en développement web, infographie, photographie, cadrage vidéo, community management et e-commerce, alliant créativité et expertise technique pour transformer vos idées en solutions digitales concrètes.",
      icon: User
    },
    {
      category: 'about',
      question: "Quels sont ses contacts et informations personnelles ?",
      answer: "Localisation : Abidjan, Côte d'Ivoire | Téléphone / WhatsApp : +225 0710224023 | Emails : deschamp.deschamp222@gmail.com, support@ulrichdeschampkossonou.online",
      icon: Mail
    },
    {
      category: 'skills',
      question: "Quelles sont ses compétences principales ?",
      answer: "Développement Web (sites vitrines, applications SaaS, e-commerce), Infographie (logos, branding, supports digitaux), Community Management (stratégies marketing digital), Photographie (événements, portraits, produits), Cadrage et Vidéo (captation, montage), E-commerce (boutiques en ligne, formations, services).",
      icon: Star
    },
    {
      category: 'projects',
      question: "Quels projets a-t-il réalisés ?",
      answer: "Portfolio Pasteur K.G, Landing Page Fondation Miracle of God, Site Web Hôtel Résidence Sunday, SaaS de gestion pour PME/TPE. Chaque projet est réalisé avec une approche personnalisée et moderne.",
      icon: Code
    },
    {
      category: 'collaboration',
      question: "Comment puis-je collaborer avec Ulrich Deschamp ?",
      answer: "Contactez-le via le formulaire du site, le bouton WhatsApp ou par email. Une consultation gratuite permet d'évaluer vos besoins. Vous recevrez un devis détaillé personnalisé. Les projets peuvent être réalisés en forfait ou en régie selon vos préférences.",
      icon: MessageCircle
    },
    {
      category: 'payment',
      question: "Comment sont établis les tarifs ?",
      answer: "Les tarifs dépendent de la complexité du projet et des fonctionnalités demandées. Un devis détaillé est fourni après consultation. Facturation au forfait ou à l'heure selon vos besoins. Options supplémentaires disponibles (maintenance, SEO, marketing).",
      icon: CreditCard
    },
    {
      category: 'skills',
      question: "Quelles technologies sont utilisées pour le développement ?",
      answer: "Frontend : React, Angular, Vue.js | Backend : Node.js, Python, .NET | Mobile : iOS et Android | IA & Automatisation : Machine Learning | Cloud : AWS, Azure, Google Cloud Platform | Architecture scalable et sécurisée avec intégration API.",
      icon: Code
    },
    {
      category: 'projects',
      question: "Quels types de projets sont réalisables avec Ulrich Deschamp ?",
      answer: "Sites vitrines et portfolios, Landing pages et applications SaaS, Boutiques en ligne et billetterie, Branding et supports graphiques, Community management, Vidéos promotionnelles et captation d'événements, Automatisation et intégration d'outils digitaux.",
      icon: Briefcase
    },
    {
      category: 'collaboration',
      question: "Quels sont les délais moyens pour un projet ?",
      answer: "Projets simples (sites vitrines, landing pages) : 72 heures (3 jours). Projets complexes (SaaS, e-commerce) : 1-2 semaines à 1 mois. Un planning détaillé est fourni dès la signature du devis.",
      icon: Clock
    },
    {
      category: 'collaboration',
      question: "Y a-t-il un suivi après la livraison du projet ?",
      answer: "Oui, un support post-livraison est assuré pour maintenance, corrections et mises à jour. Des options de maintenance continue peuvent être contractées pour assurer la sécurité et performance optimale.",
      icon: HelpCircle
    },
    {
      category: 'collaboration',
      question: "Comment se déroule la collaboration et le suivi du projet ?",
      answer: "Points réguliers via email, WhatsApp ou visioconférence. Livraison de maquettes et prototypes pour validation étape par étape. Révisions possibles selon le devis. Remise des livrables dans les délais avec suivi post-livraison.",
      icon: MessageCircle
    },
    {
      category: 'about',
      question: "Quels avantages à travailler avec Ulrich Deschamp ?",
      answer: "Expertise polyvalente en développement web, graphisme, vidéo et marketing. Design immersif et moderne. Solutions personnalisées. Accompagnement complet du concept à la mise en ligne. Optimisation SEO et performance maximale.",
      icon: Star
    },
    {
      category: 'payment',
      question: "Quels moyens de paiement sont acceptés ?",
      answer: "Transfert bancaire, Espèces, Paiement mobile (Orange Money, MTN Mobile Money, Wave, Moovafrica), PayPal et autres plateformes sécurisées selon les accords.",
      icon: CreditCard
    },
    {
      category: 'training',
      question: "Propose-t-il des formations ou accompagnement digital ?",
      answer: "Oui, formations et coaching disponibles en : Développement web et applications, Community management et réseaux sociaux, Création graphique et branding, Gestion de boutique en ligne et e-commerce.",
      icon: GraduationCap
    }
  ];

  const filteredFAQ = activeCategory === 'all' 
    ? faqData 
    : faqData.filter(item => item.category === activeCategory);

  // Group FAQ by category for visual display
  const groupedFAQ = categories.slice(1).reduce((acc, cat) => {
    acc[cat.id] = faqData.filter(item => item.category === cat.id);
    return acc;
  }, {} as Record<string, typeof faqData>);

  const whatsappNumber = "2250710224023";
  const whatsappMessage = "Bonjour Ulrich, j'ai consulté votre FAQ et j'aimerais discuter de mon projet avec vous.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const currentCategory = categories.find(cat => cat.id === activeCategory);

  return (
    <section id="faq" className="min-h-screen py-20 relative overflow-hidden">
      {/* Dynamic background gradient based on category */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/50"></div>
      <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${currentCategory?.color || 'from-primary to-primary-glow'} opacity-10 rounded-full blur-3xl animate-pulse`}></div>
      <div className={`absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tl ${currentCategory?.color || 'from-primary to-primary-glow'} opacity-10 rounded-full blur-3xl animate-pulse animation-delay-200`}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Questions Fréquentes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez tout ce que vous devez savoir, organisé par thématique
          </p>
        </div>

        {/* Beautiful category cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-3 mb-12 animate-fade-in animation-delay-100">
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <Card
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`
                  relative overflow-hidden cursor-pointer transition-all duration-300 hover-lift
                  ${isActive ? 'ring-2 ring-primary shadow-xl scale-105' : 'hover:shadow-lg'}
                  group p-4 text-center
                `}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Gradient background for active card */}
                {isActive && (
                  <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-10`}></div>
                )}
                
                <div className="relative z-10 flex flex-col items-center space-y-2">
                  <div className={`
                    w-12 h-12 rounded-full flex items-center justify-center
                    ${isActive 
                      ? `bg-gradient-to-br ${cat.color} text-white` 
                      : 'bg-muted group-hover:bg-primary/10'
                    }
                    transition-all duration-300 group-hover:scale-110
                  `}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className={`
                    text-xs font-medium
                    ${isActive ? 'text-foreground' : 'text-muted-foreground'}
                  `}>
                    {cat.label}
                  </span>
                  {cat.id !== 'all' && (
                    <span className={`
                      text-xs px-2 py-0.5 rounded-full
                      ${isActive 
                        ? `bg-gradient-to-r ${cat.color} text-white` 
                        : 'bg-muted text-muted-foreground'
                      }
                    `}>
                      {groupedFAQ[cat.id]?.length || 0}
                    </span>
                  )}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Display FAQ based on selection */}
        {activeCategory === 'all' ? (
          // Beautiful grid layout for all categories
          <div className="space-y-12">
            {categories.slice(1).map((cat) => {
              const categoryFAQs = groupedFAQ[cat.id];
              const Icon = cat.icon;
              if (!categoryFAQs || categoryFAQs.length === 0) return null;
              
              return (
                <div key={cat.id} className="animate-fade-in">
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${cat.color} text-white`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold">{cat.label}</h3>
                    <div className="flex-1 h-px bg-gradient-to-r from-muted to-transparent"></div>
                  </div>
                  
                  {/* Questions in a beautiful grid */}
                  <div className="grid md:grid-cols-2 gap-4">
                    {categoryFAQs.map((item, index) => {
                      const ItemIcon = item.icon;
                      return (
                        <Card 
                          key={index}
                          className="glass-card hover:shadow-xl transition-all duration-300 hover-lift overflow-hidden group"
                        >
                          <Accordion type="single" collapsible>
                            <AccordionItem value={`${cat.id}-${index}`} className="border-none">
                              <AccordionTrigger className="px-6 py-4 hover:no-underline group-hover:bg-primary/5 transition-colors">
                                <div className="flex items-start gap-3 text-left">
                                  <div className={`p-2 rounded-lg bg-gradient-to-br ${cat.color} text-white opacity-80 mt-0.5`}>
                                    <ItemIcon className="w-4 h-4" />
                                  </div>
                                  <span className="text-sm md:text-base font-medium pr-2">{item.question}</span>
                                </div>
                              </AccordionTrigger>
                              <AccordionContent className="px-6 pb-6">
                                <p className="text-sm text-muted-foreground leading-relaxed pl-11">
                                  {item.answer}
                                </p>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          // Single category view with staggered cards
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {filteredFAQ.map((item, index) => {
                const ItemIcon = item.icon;
                const cat = categories.find(c => c.id === item.category);
                return (
                  <Card 
                    key={index}
                    className="glass-card hover:shadow-xl transition-all duration-300 hover-lift overflow-hidden group animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Accordion type="single" collapsible>
                      <AccordionItem value={`item-${index}`} className="border-none">
                        <AccordionTrigger className="px-6 py-5 hover:no-underline group-hover:bg-primary/5 transition-colors">
                          <div className="flex items-start gap-3 text-left">
                            <div className={`p-2 rounded-lg bg-gradient-to-br ${cat?.color || 'from-primary to-primary-glow'} text-white mt-0.5`}>
                              <ItemIcon className="w-5 h-5" />
                            </div>
                            <span className="text-base md:text-lg font-medium pr-2">{item.question}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-6">
                          <p className="text-muted-foreground leading-relaxed pl-12">
                            {item.answer}
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        {/* Beautiful CTA Section */}
        <div className="mt-16 relative">
          <Card className="glass-card overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary-glow/10"></div>
            <div className="relative p-8 md:p-12 text-center">
              <HelpCircle className="w-16 h-16 text-primary mx-auto mb-4 animate-pulse" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Vous avez d'autres questions ?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Je suis là pour répondre à toutes vos interrogations et vous accompagner dans votre projet
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg hover:shadow-xl hover-lift group"
                  >
                    <MessageCircle className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    WhatsApp Direct
                  </Button>
                </a>
                
                <a href="mailto:deschamp.deschamp222@gmail.com" className="inline-flex">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="hover:bg-primary/10 hover-lift group border-2"
                  >
                    <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    Envoyer un Email
                  </Button>
                </a>
                
                <a href="#contact" className="inline-flex">
                  <Button 
                    size="lg"
                    variant="outline" 
                    className="hover:bg-primary/10 hover-lift group border-2"
                  >
                    <FileText className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    Formulaire Contact
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQ;