import { Code, Palette, Camera, Users, Video, ShoppingCart } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Développement Web",
      skills: [
        "Sites vitrines & Landing pages",
        "Applications SaaS",
        "Boutiques e-commerce",
        "Billetterie en ligne",
        "SEO & optimisation",
        "API & bases de données",
        "Sécurisation web",
        "Hébergement & déploiement"
      ]
    },
    {
      icon: Palette,
      title: "Infographie",
      skills: [
        "Logos & branding",
        "Affiches publicitaires",
        "Brochures & prospectus",
        "Cartes de visite & PVC",
        "Kakémonos",
        "Charte graphique",
        "Packaging",
        "Mockups & retouche photo"
      ]
    },
    {
      icon: Users,
      title: "Community Management",
      skills: [
        "Création de contenus",
        "Calendrier éditorial",
        "Animation de communautés",
        "Analyse & reporting",
        "Stratégies marketing digital",
        "Social media management"
      ]
    },
    {
      icon: Camera,
      title: "Photographie",
      skills: [
        "Événements",
        "Portraits professionnels",
        "Shooting produits",
        "Corporate & publicitaire"
      ]
    },
    {
      icon: Video,
      title: "Cadrage & Vidéo",
      skills: [
        "Captation d'événements",
        "Interviews",
        "Vidéos promotionnelles",
        "Montage dynamique",
        "Direction de prises de vue"
      ]
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      skills: [
        "Création de boutiques",
        "Vente de formations",
        "E-books & logiciels",
        "Paiement sécurisé",
        "Stratégies marketing"
      ]
    }
  ];

  return (
    <section 
      id="skills" 
      className="py-20 bg-card/20 relative overflow-hidden" 
      data-aos="fade-up" 
      data-aos-duration="1200"
    >
      {/* Animated particles background */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse animation-delay-200"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 
          className="text-4xl md:text-5xl font-bold text-center mb-4 rellax" 
          data-rellax-speed="1"
        >
          <span className="text-gradient">Infographie et Design Graphique Créatif</span>
        </h2>
        <h3 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-primary">
          Services d'Infographie Professionnelle à Abidjan et en Côte d'Ivoire
        </h3>
        <p 
          className="text-center text-foreground/80 mb-12 max-w-5xl mx-auto text-lg leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          En tant qu'infographe professionnel basé à Abidjan, je crée des visuels percutants et des designs graphiques modernes pour les entreprises de Côte d'Ivoire. 
          Mon expertise en infographie couvre la création de logos d'entreprise, chartes graphiques complètes, affiches publicitaires, brochures commerciales, 
          cartes de visite premium, kakémonos pour événements, et packaging produits. Chaque création graphique est pensée pour renforcer l'identité visuelle 
          de votre marque à Abidjan et dans toute la Côte d'Ivoire. J'utilise les derniers outils de design (Adobe Creative Suite, Figma) pour garantir 
          des rendus professionnels haute définition adaptés à tous les supports : print et digital.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="glass-card p-6 hover-lift group"
              data-aos="flip-left"
              data-aos-delay={100 + index * 100}
              data-aos-duration="1000"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li 
                    key={skillIndex}
                    className="flex items-start"
                    data-aos="fade-right"
                    data-aos-delay={50 + (skillIndex * 50)}
                  >
                    <span className="text-primary mr-2">•</span>
                    <span className="text-muted-foreground text-sm">{skill}</span>
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