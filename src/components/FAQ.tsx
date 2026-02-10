import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle, Mail, FileText, User, Briefcase, Code, CreditCard, Globe, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Toutes', icon: FileText },
    { id: 'expertise', label: 'Expertise', icon: Award },
    { id: 'about', label: 'À propos', icon: User },
    { id: 'skills', label: 'Compétences', icon: Briefcase },
    { id: 'projects', label: 'Projets', icon: Code },
    { id: 'collaboration', label: 'Collaboration', icon: MessageCircle },
    { id: 'payment', label: 'Paiement', icon: CreditCard },
    { id: 'international', label: 'International', icon: Globe },
  ];

  const faqData = [
    {
      category: 'expertise',
      question: "Êtes-vous le meilleur expert digital à Abidjan ?",
      answer: "Oui, j'interviens comme expert digital à Abidjan avec une approche stratégique complète, combinant développement web, solutions digitales sur mesure, automatisation et accompagnement premium pour les entreprises et marques ambitieuses."
    },
    {
      category: 'expertise',
      question: "Travaillez-vous comme freelance ou agence digitale ?",
      answer: "Je travaille comme freelance expert digital tout en opérant comme une agence digitale indépendante, offrant la flexibilité du freelancing avec la qualité d'une agence."
    },
    {
      category: 'expertise',
      question: "Êtes-vous Vibe Coder ?",
      answer: "Oui, en tant que Vibe Coder, je développe des solutions digitales modernes, créatives et performantes, pensées pour l'expérience utilisateur, la rapidité et la scalabilité."
    },
    {
      category: 'international',
      question: "Travaillez-vous à l'international ?",
      answer: "Oui, j'accompagne des clients en Côte d'Ivoire, en Afrique et à l'international en tant que consultant digital freelance et agence digitale internationale."
    },
    {
      category: 'expertise',
      question: "Quels types de clients accompagnez-vous ?",
      answer: "J'accompagne entreprises, startups, institutions, marques et entrepreneurs recherchant un expert digital de haut niveau pour leurs projets digitaux."
    },
    {
      category: 'about',
      question: "Qui est Ulrich Deschamp ?",
      answer: "Ulrich Deschamp est un expert digital senior et consultant de référence basé à Abidjan, Côte d'Ivoire. Développeur web expert et Vibe Coder, spécialisé en développement web, automatisation IA, marketing digital et branding."
    },
    {
      category: 'about',
      question: "Quels sont ses contacts ?",
      answer: "Localisation : Abidjan, Côte d'Ivoire | Téléphone / WhatsApp : +225 0710224023 | Email : deschamp.deschamp222@gmail.com | Site : ulrichdeschampkossonou.online"
    },
    {
      category: 'skills',
      question: "Quelles sont ses compétences principales ?",
      answer: "Développement Web Expert (sites premium, applications SaaS, e-commerce), Automatisation & IA, Marketing Digital Premium, Design & Branding, Photographie & Vidéo professionnelle."
    },
    {
      category: 'projects',
      question: "Quels projets a-t-il réalisés ?",
      answer: "Portfolio Pasteur K.G, Landing Page Fondation Miracle of God, Site Web Hôtel Résidence Sunday, Stocknix - SaaS de gestion pour PME/TPE."
    },
    {
      category: 'collaboration',
      question: "Comment puis-je collaborer avec vous ?",
      answer: "Contactez-moi via le formulaire du site, WhatsApp ou email. Une consultation gratuite permet d'évaluer vos besoins. Vous recevrez un devis détaillé personnalisé."
    },
    {
      category: 'payment',
      question: "Comment sont établis les tarifs ?",
      answer: "Les tarifs dépendent de la complexité du projet et des fonctionnalités demandées. Un devis détaillé est fourni après consultation. Facturation au forfait ou à l'heure."
    },
    {
      category: 'skills',
      question: "Quelles technologies utilisez-vous ?",
      answer: "Frontend : React, TypeScript, Next.js | Backend : Node.js, Python, Supabase | Automatisation : IA, Machine Learning | Cloud : AWS, Vercel"
    },
    {
      category: 'collaboration',
      question: "Quels sont les délais moyens ?",
      answer: "Projets simples : 72 heures à 1 semaine. Projets complexes (SaaS, e-commerce, automatisation) : 1-4 semaines. Un planning détaillé est fourni dès validation."
    },
    {
      category: 'collaboration',
      question: "Y a-t-il un suivi après livraison ?",
      answer: "Oui, un support post-livraison premium est assuré pour maintenance, corrections et mises à jour. Options de maintenance continue disponibles."
    }
  ];

  const filteredFAQ = activeCategory === 'all' 
    ? faqData 
    : faqData.filter(item => item.category === activeCategory);

  const whatsappNumber = "2250710224023";
  const whatsappMessage = "Bonjour Ulrich, j'ai consulté votre FAQ et j'aimerais discuter de mon projet avec vous.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section 
      id="faq" 
      className="py-12 md:py-16 relative overflow-hidden" 
      data-aos="fade-up" 
      data-aos-duration="800"
      data-aos-once="true"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-48 md:w-72 h-48 md:h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-48 md:w-72 h-48 md:h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-[1600px] relative z-10">
        {/* Header */}
        <div className="text-center mb-6 md:mb-12">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" 
          >
            <span className="text-gradient">Questions Fréquentes</span>
          </h2>
          <p 
            className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-once="true"
          >
            Expert Digital Abidjan - Découvrez mes services
          </p>
        </div>

        {/* Category filters - Scrollable on mobile */}
        <div 
          className="flex overflow-x-auto pb-4 mb-6 md:mb-8 gap-2 scrollbar-hide justify-start md:justify-center md:flex-wrap"
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-once="true"
        >
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={activeCategory === cat.id ? "default" : "outline"}
              onClick={() => setActiveCategory(cat.id)}
              size="sm"
              className={`
                flex-shrink-0 transition-all duration-300
                ${activeCategory === cat.id 
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25' 
                  : 'hover:bg-primary/10'
                }
              `}
            >
              <cat.icon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              <span className="text-xs sm:text-sm whitespace-nowrap">{cat.label}</span>
            </Button>
          ))}
        </div>

        {/* FAQ Carousel */}
        <div className="mb-12 md:mb-16 px-2 sm:px-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {filteredFAQ.map((item, index) => {
                const categoryIcon = categories.find(cat => cat.id === item.category)?.icon || FileText;
                const Icon = categoryIcon;
                
                return (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                    <div className="glass-card p-4 sm:p-6 h-full min-h-[200px] sm:min-h-[220px] hover:shadow-xl transition-all duration-300 group">
                      <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                        <div className="p-1.5 sm:p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-all duration-500 flex-shrink-0">
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                        </div>
                        <h3 className="font-semibold text-sm sm:text-base flex-1 leading-tight">
                          {item.question}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-6">
              <CarouselPrevious className="static translate-y-0 bg-primary/10 hover:bg-primary/20 border-primary/20" />
              <CarouselNext className="static translate-y-0 bg-primary/10 hover:bg-primary/20 border-primary/20" />
            </div>
          </Carousel>
        </div>

        {/* CTA Section */}
        <div 
          className="glass-card p-6 sm:p-8 md:p-12 text-center max-w-3xl mx-auto"
          data-aos="zoom-in-up"
          data-aos-delay="600"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
            Besoin d'un Expert Digital Premium ?
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
            Contactez le meilleur expert digital à Abidjan
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center"
            >
              <Button 
                size="default"
                className="bg-green-500 hover:bg-green-600 text-white shadow-lg hover-lift group text-sm"
              >
                <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                WhatsApp
              </Button>
            </a>
            
            <a href="mailto:deschamp@gmail.com" className="inline-flex justify-center">
              <Button 
                size="default" 
                variant="outline"
                className="hover:bg-primary/10 hover-lift group text-sm"
              >
                <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Email
              </Button>
            </a>
            
            <a href="#contact" className="inline-flex justify-center">
              <Button 
                size="default"
                variant="outline" 
                className="hover:bg-primary/10 hover-lift group text-sm"
              >
                <FileText className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
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
