import { Code, Palette, Camera, Users, Video, ShoppingCart, Bot, Sparkles } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Développement Web",
      description: "Développeur web expert Abidjan - Création site web premium",
      skills: [
        "Développement application web sur mesure",
        "Sites vitrines & Landing pages premium",
        "Applications SaaS performantes",
        "Boutiques e-commerce",
        "Billetterie en ligne",
        "Optimisation SEO & performance web",
        "API & bases de données",
        "Sécurisation & hébergement"
      ]
    },
    {
      icon: Bot,
      title: "Automatisation & IA",
      description: "Expert automatisation digitale - Solutions IA pour entreprises",
      skills: [
        "Automatisation intelligente des processus",
        "Intégration solutions IA",
        "Optimisation process et gain de temps",
        "Chatbots et assistants virtuels",
        "Machine Learning appliqué",
        "Workflows automatisés"
      ]
    },
    {
      icon: Sparkles,
      title: "Solutions Digitales & Événementiel",
      description: "Plateformes digitales sur mesure pour entreprises",
      skills: [
        "Plateformes digitales personnalisées",
        "Systèmes de réservation en ligne",
        "Billetterie événementielle",
        "Solutions digitales événementielles",
        "Intégration d'outils métiers",
        "Transformation digitale avancée"
      ]
    },
    {
      icon: Users,
      title: "Marketing & Branding",
      description: "Stratégie digitale avancée - Marketing digital premium",
      skills: [
        "Community management expert",
        "Gestion campagnes digitales performantes",
        "Stratégies marketing digital",
        "Création de contenus impactants",
        "Animation de communautés",
        "Calendrier éditorial & reporting"
      ]
    },
    {
      icon: Palette,
      title: "Design & Contenu",
      description: "Design graphique professionnel - Identité visuelle premium",
      skills: [
        "Logos & branding haut de gamme",
        "Affiches publicitaires",
        "Charte graphique complète",
        "Création contenus digitaux impactants",
        "Mockups & retouche photo",
        "Packaging & supports print"
      ]
    },
    {
      icon: Camera,
      title: "Photographie & Vidéo",
      description: "Photographie digitale professionnelle",
      skills: [
        "Événements & corporate",
        "Portraits professionnels",
        "Shooting produits",
        "Captation vidéo événementielle",
        "Montage dynamique",
        "Vidéos promotionnelles"
      ]
    }
  ];

  return (
    <section 
      id="skills" 
      className="py-16 md:py-20 bg-card/20 relative overflow-hidden px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24" 
      data-aos="fade-up" 
      data-aos-duration="800"
      data-aos-once="true"
    >
      {/* Animated particles background */}
      <div className="absolute top-0 left-0 w-48 md:w-64 h-48 md:h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10 max-w-7xl">
        <h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 rellax" 
          data-rellax-speed="1"
        >
          <span className="text-gradient">Mes Compétences</span>
        </h2>
        <p 
          className="text-center text-sm md:text-base text-muted-foreground mb-4 md:mb-6 max-w-3xl mx-auto px-2"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          En tant que <span className="text-primary font-semibold">meilleur expert digital à Abidjan</span> et <span className="text-primary font-semibold">Vibe Coder</span>, 
          je propose ces solutions digitales premium dans chaque domaine ci-dessous.
        </p>
        <p 
          className="text-center text-xs md:text-sm text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto px-2"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Freelance développeur web expert | Agence digitale indépendante | Côte d'Ivoire & International
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="p-4 md:p-6 hover-lift group transition-all duration-300 rounded-xl overflow-hidden relative"
              style={{
                background: 'linear-gradient(135deg, #9333ea 0%, #6b21a8 50%, #3b0764 100%)'
              }}
              data-aos="fade-up"
              data-aos-delay={50 + index * 50}
              data-aos-once="true"
            >
              <div className="flex items-center space-x-2 md:space-x-3 mb-2 md:mb-3">
                <div className="p-2 md:p-3 rounded-lg bg-white/10 group-hover:bg-white/20 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                  <category.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white">{category.title}</h3>
              </div>
              <p className="text-white/70 text-xs md:text-sm mb-3 md:mb-4 italic">{category.description}</p>
              <ul className="space-y-1.5 md:space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li 
                    key={skillIndex}
                    className="flex items-start"
                  >
                    <span className="text-white mr-2">•</span>
                    <span className="text-white/90 text-xs md:text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
