import { useState } from 'react';
import { ChevronDown, MessageCircle, Mail, FileText, User, Briefcase, Code, Clock, CreditCard, GraduationCap, Globe, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Toutes les questions', icon: FileText },
    { id: 'expertise', label: 'Expertise', icon: Award },
    { id: 'about', label: 'À propos', icon: User },
    { id: 'skills', label: 'Compétences', icon: Briefcase },
    { id: 'projects', label: 'Projets', icon: Code },
    { id: 'collaboration', label: 'Collaboration', icon: MessageCircle },
    { id: 'payment', label: 'Paiement', icon: CreditCard },
    { id: 'international', label: 'International', icon: Globe },
  ];

  const faqData = [
    // Questions SEO prioritaires
    {
      category: 'expertise',
      question: "Êtes-vous le meilleur expert digital à Abidjan ?",
      answer: "Oui, j'interviens comme expert digital à Abidjan avec une approche stratégique complète, combinant développement web, solutions digitales sur mesure, automatisation et accompagnement premium pour les entreprises et marques ambitieuses. Mon expertise couvre le développement web expert, le marketing digital, l'automatisation IA et le branding haut de gamme."
    },
    {
      category: 'expertise',
      question: "Travaillez-vous comme freelance ou agence digitale ?",
      answer: "Je travaille comme freelance expert digital tout en opérant comme une agence digitale indépendante, offrant la flexibilité du freelancing avec la qualité d'une agence. Cela me permet d'offrir des solutions digitales premium personnalisées avec un suivi direct et une expertise de haut niveau."
    },
    {
      category: 'expertise',
      question: "Êtes-vous Vibe Coder ?",
      answer: "Oui, en tant que Vibe Coder, je développe des solutions digitales modernes, créatives et performantes, pensées pour l'expérience utilisateur, la rapidité et la scalabilité. J'utilise les dernières technologies et méthodologies pour créer des applications web innovantes et efficaces."
    },
    {
      category: 'international',
      question: "Travaillez-vous à l'international ?",
      answer: "Oui, j'accompagne des clients en Côte d'Ivoire, en Afrique et à l'international en tant que consultant digital freelance et agence digitale internationale. Je propose mes services de développement web expert, automatisation et solutions digitales premium à travers le monde."
    },
    {
      category: 'expertise',
      question: "Quels types de clients accompagnez-vous ?",
      answer: "J'accompagne entreprises, startups, institutions, marques et entrepreneurs recherchant un expert digital de haut niveau pour leurs projets digitaux. Que ce soit pour la création de sites web premium, le développement d'applications SaaS, l'automatisation ou le marketing digital, j'offre un accompagnement personnalisé."
    },
    // Questions existantes améliorées
    {
      category: 'about',
      question: "Qui est Ulrich Deschamp ?",
      answer: "Ulrich Deschamp (Kossonou Kouassi N'Tobeni) est un expert digital senior et consultant de référence basé à Abidjan, Côte d'Ivoire. Développeur web expert et Vibe Coder, il opère comme agence digitale indépendante et freelance premium, spécialisé en développement web, automatisation IA, marketing digital et branding haut de gamme."
    },
    {
      category: 'about',
      question: "Quels sont ses contacts et informations ?",
      answer: "Localisation : Abidjan, Côte d'Ivoire | Téléphone / WhatsApp : +225 0710224023 | Emails : deschamp@gmail.com, support@ulrichdeschampkossonou.online | Site : ulrichdeschampkossonou.online"
    },
    {
      category: 'skills',
      question: "Quelles sont ses compétences principales ?",
      answer: "Développement Web Expert (sites premium, applications SaaS, e-commerce), Automatisation & IA (solutions intelligentes pour entreprises), Marketing Digital Premium (stratégie digitale avancée, community management expert), Design & Branding (identité visuelle haut de gamme), Photographie & Vidéo professionnelle."
    },
    {
      category: 'projects',
      question: "Quels projets a-t-il réalisés ?",
      answer: "Portfolio Pasteur K.G, Landing Page Fondation Miracle of God, Site Web Hôtel Résidence Sunday, Stocknix - SaaS de gestion pour PME/TPE. Chaque projet bénéficie d'une approche personnalisée avec des solutions digitales haut de gamme."
    },
    {
      category: 'collaboration',
      question: "Comment puis-je collaborer avec vous ?",
      answer: "Contactez-moi via le formulaire du site, WhatsApp ou email. Une consultation gratuite permet d'évaluer vos besoins. Vous recevrez un devis détaillé personnalisé. En tant qu'agence digitale indépendante, j'offre la flexibilité d'un freelance avec la qualité d'une agence premium."
    },
    {
      category: 'payment',
      question: "Comment sont établis les tarifs ?",
      answer: "Les tarifs dépendent de la complexité du projet et des fonctionnalités demandées. Un devis détaillé est fourni après consultation. Facturation au forfait ou à l'heure selon vos besoins. Options de solutions digitales premium disponibles."
    },
    {
      category: 'skills',
      question: "Quelles technologies utilisez-vous ?",
      answer: "Frontend : React, TypeScript, Next.js | Backend : Node.js, Python, Supabase | Automatisation : IA, Machine Learning, workflows intelligents | Cloud : AWS, Vercel, solutions scalables | Architecture moderne et sécurisée avec intégration API avancée."
    },
    {
      category: 'collaboration',
      question: "Quels sont les délais moyens ?",
      answer: "Projets simples (sites vitrines, landing pages premium) : 72 heures à 1 semaine. Projets complexes (SaaS, e-commerce, automatisation) : 1-4 semaines. Un planning détaillé est fourni dès validation du devis."
    },
    {
      category: 'collaboration',
      question: "Y a-t-il un suivi après livraison ?",
      answer: "Oui, un support post-livraison premium est assuré pour maintenance, corrections et mises à jour. Options de maintenance continue disponibles pour garantir performance et sécurité optimales de vos solutions digitales."
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
      className="min-h-screen py-20 relative overflow-hidden" 
      data-aos="fade-up" 
      data-aos-duration="1200"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse animation-delay-200"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4 rellax" 
            data-rellax-speed="1"
          >
            <span className="text-gradient">Questions Fréquentes - Expert Digital Abidjan</span>
          </h2>
          <p 
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Découvrez mes services de développeur web expert, freelance premium et agence digitale indépendante 
            en Côte d'Ivoire et à l'international
          </p>
        </div>

        {/* Category filters */}
        <div 
          className="flex flex-wrap justify-center gap-2 mb-12"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {categories.map((cat, index) => (
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
              data-aos="zoom-in"
              data-aos-delay={400 + index * 50}
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
                  className="glass-card p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group"
                  data-aos="flip-up"
                  data-aos-delay={100 + index * 50}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-all duration-500 group-hover:rotate-12">
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
        <div 
          className="glass-card p-8 md:p-12 text-center max-w-3xl mx-auto"
          data-aos="zoom-in-up"
          data-aos-delay="600"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Besoin d'un Expert Digital Premium ?
          </h3>
          <p className="text-muted-foreground mb-8">
            Contactez le meilleur expert digital à Abidjan pour discuter de votre projet
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
              data-aos="fade-right"
              data-aos-delay="700"
            >
              <Button 
                size="lg" 
                className="bg-green-500 hover:bg-green-600 text-white shadow-lg hover-lift group hover:scale-110 transition-all duration-300"
              >
                <MessageCircle className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                WhatsApp Direct
              </Button>
            </a>
            
            <a 
              href="mailto:deschamp@gmail.com" 
              className="inline-flex"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <Button 
                size="lg" 
                variant="outline"
                className="hover:bg-primary/10 hover-lift group hover:scale-110 transition-all duration-300"
              >
                <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Email
              </Button>
            </a>
            
            <a 
              href="#contact" 
              className="inline-flex"
              data-aos="fade-left"
              data-aos-delay="900"
            >
              <Button 
                size="lg"
                variant="outline" 
                className="hover:bg-primary/10 hover-lift group hover:scale-110 transition-all duration-300"
              >
                <FileText className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
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
