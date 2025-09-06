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
    <section id="skills" className="py-20 bg-card/20" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 rellax" data-rellax-speed="1">
          <span className="text-gradient">Mes Compétences</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Expertise technique en développement web, design graphique et marketing digital. 
          Services professionnels pour entreprises à Abidjan et partout en Côte d'Ivoire.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="glass-card p-6 hover-lift group"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li 
                    key={skillIndex}
                    className="flex items-start"
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