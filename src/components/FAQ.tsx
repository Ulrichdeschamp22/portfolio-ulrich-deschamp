import { useState } from 'react';
import { ChevronDown, MessageCircle, Mail, FileText, User, Briefcase, Code, Clock, CreditCard, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Toutes les questions', icon: FileText },
    { id: 'about', label: 'À propos', icon: User },
    { id: 'skills', label: 'Compétences', icon: Briefcase },
    { id: 'projects', label: 'Projets', icon: Code },
    { id: 'collaboration', label: 'Collaboration', icon: MessageCircle },
    { id: 'payment', label: 'Paiement', icon: CreditCard },
    { id: 'training', label: 'Formations', icon: GraduationCap },
  ];

  const faqData = [
    {
      category: 'about',
      question: "Qui est Ulrich Deschamp ?",
      answer: "Ulrich Deschamp (Kossonou Kouassi N'Tobeni) est un professionnel polyvalent basé à Abidjan, Côte d'Ivoire. Il est spécialisé en développement web, infographie, photographie, cadrage vidéo, community management et e-commerce, alliant créativité et expertise technique pour transformer vos idées en solutions digitales concrètes."
    },
    {
      category: 'about',
      question: "Quels sont ses contacts et informations personnelles ?",
      answer: "Localisation : Abidjan, Côte d'Ivoire | Téléphone / WhatsApp : +225 0710224023 | Emails : deschamp.deschamp222@gmail.com, support@ulrichdeschampkossonou.online"
    },
    {
      category: 'skills',
      question: "Quelles sont ses compétences principales ?",
      answer: "Développement Web (sites vitrines, applications SaaS, e-commerce), Infographie (logos, branding, supports digitaux), Community Management (stratégies marketing digital), Photographie (événements, portraits, produits), Cadrage et Vidéo (captation, montage), E-commerce (boutiques en ligne, formations, services)."
    },
    {
      category: 'projects',
      question: "Quels projets a-t-il réalisés ?",
      answer: "Portfolio Pasteur K.G, Landing Page Fondation Miracle of God, Site Web Hôtel Résidence Sunday, SaaS de gestion pour PME/TPE. Chaque projet est réalisé avec une approche personnalisée et moderne."
    },
    {
      category: 'collaboration',
      question: "Comment puis-je collaborer avec Ulrich Deschamp ?",
      answer: "Contactez-le via le formulaire du site, le bouton WhatsApp ou par email. Une consultation gratuite permet d'évaluer vos besoins. Vous recevrez un devis détaillé personnalisé. Les projets peuvent être réalisés en forfait ou en régie selon vos préférences."
    },
    {
      category: 'payment',
      question: "Comment sont établis les tarifs ?",
      answer: "Les tarifs dépendent de la complexité du projet et des fonctionnalités demandées. Un devis détaillé est fourni après consultation. Facturation au forfait ou à l'heure selon vos besoins. Options supplémentaires disponibles (maintenance, SEO, marketing)."
    },
    {
      category: 'skills',
      question: "Quelles technologies sont utilisées pour le développement ?",
      answer: "Frontend : React, Angular, Vue.js | Backend : Node.js, Python, .NET | Mobile : iOS et Android | IA & Automatisation : Machine Learning | Cloud : AWS, Azure, Google Cloud Platform | Architecture scalable et sécurisée avec intégration API."
    },
    {
      category: 'projects',
      question: "Quels types de projets sont réalisables avec Ulrich Deschamp ?",
      answer: "Sites vitrines et portfolios, Landing pages et applications SaaS, Boutiques en ligne et billetterie, Branding et supports graphiques, Community management, Vidéos promotionnelles et captation d'événements, Automatisation et intégration d'outils digitaux."
    },
    {
      category: 'collaboration',
      question: "Quels sont les délais moyens pour un projet ?",
      answer: "Projets simples (sites vitrines, landing pages) : 72 heures (3 jours). Projets complexes (SaaS, e-commerce) : 1-2 semaines à 1 mois. Un planning détaillé est fourni dès la signature du devis."
    },
    {
      category: 'collaboration',
      question: "Y a-t-il un suivi après la livraison du projet ?",
      answer: "Oui, un support post-livraison est assuré pour maintenance, corrections et mises à jour. Des options de maintenance continue peuvent être contractées pour assurer la sécurité et performance optimale."
    },
    {
      category: 'collaboration',
      question: "Comment se déroule la collaboration et le suivi du projet ?",
      answer: "Points réguliers via email, WhatsApp ou visioconférence. Livraison de maquettes et prototypes pour validation étape par étape. Révisions possibles selon le devis. Remise des livrables dans les délais avec suivi post-livraison."
    },
    {
      category: 'about',
      question: "Quels avantages à travailler avec Ulrich Deschamp ?",
      answer: "Expertise polyvalente en développement web, graphisme, vidéo et marketing. Design immersif et moderne. Solutions personnalisées. Accompagnement complet du concept à la mise en ligne. Optimisation SEO et performance maximale."
    },
    {
      category: 'payment',
      question: "Quels moyens de paiement sont acceptés ?",
      answer: "Transfert bancaire, Espèces, Paiement mobile (Orange Money, MTN Mobile Money, Wave, Moovafrica), PayPal et autres plateformes sécurisées selon les accords."
    },
    {
      category: 'training',
      question: "Propose-t-il des formations ou accompagnement digital ?",
      answer: "Oui, formations et coaching disponibles en : Développement web et applications, Community management et réseaux sociaux, Création graphique et branding, Gestion de boutique en ligne et e-commerce."
    }
  ];

  const filteredFAQ = activeCategory === 'all' 
    ? faqData 
    : faqData.filter(item => item.category === activeCategory);

  const whatsappNumber = "2250710224023";
  const whatsappMessage = "Bonjour Ulrich, j'ai consulté votre FAQ et j'aimerais discuter de mon projet avec vous.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="faq" className="min-h-screen py-20 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse animation-delay-200"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Questions Fréquentes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tout ce que vous devez savoir sur mes services et ma façon de travailler
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 animate-fade-in animation-delay-100">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={activeCategory === cat.id ? "default" : "outline"}
              onClick={() => setActiveCategory(cat.id)}
              className={`
                transition-all duration-300 hover-lift
                ${activeCategory === cat.id 
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25' 
                  : 'hover:bg-primary/10'
                }
              `}
            >
              <cat.icon className="w-4 h-4 mr-2" />
              {cat.label}
            </Button>
          ))}
        </div>

        {/* FAQ Grid Layout */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFAQ.map((item, index) => {
              const categoryIcon = categories.find(cat => cat.id === item.category)?.icon || FileText;
              const Icon = categoryIcon;
              
              return (
                <div
                  key={index}
                  className="glass-card p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 animate-fade-in group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-base flex-1">
                      {item.question}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="glass-card p-8 md:p-12 text-center max-w-3xl mx-auto animate-fade-in">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Vous avez d'autres questions ?
          </h3>
          <p className="text-muted-foreground mb-8">
            N'hésitez pas à me contacter directement pour discuter de votre projet
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
                className="bg-green-500 hover:bg-green-600 text-white shadow-lg hover-lift group"
              >
                <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                WhatsApp Direct
              </Button>
            </a>
            
            <a href="mailto:deschamp.deschamp222@gmail.com" className="inline-flex">
              <Button 
                size="lg" 
                variant="outline"
                className="hover:bg-primary/10 hover-lift group"
              >
                <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Email
              </Button>
            </a>
            
            <a href="#contact" className="inline-flex">
              <Button 
                size="lg"
                variant="outline" 
                className="hover:bg-primary/10 hover-lift group"
              >
                <FileText className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Formulaire
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;