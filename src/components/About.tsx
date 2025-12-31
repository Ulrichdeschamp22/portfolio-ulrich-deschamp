import { GraduationCap, Award, Briefcase, Target, Bot, Sparkles } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Formation",
      description: "Diplômé en Ressources Humaines & Communication, formation avancée en Développement Web, Communication & Développement des Marques"
    },
    {
      icon: Briefcase,
      title: "Expérience",
      description: "Plus de 5 ans d'expérience en développement web, solutions digitales haut de gamme et marketing digital premium"
    },
    {
      icon: Award,
      title: "Expertise",
      description: "Expert digital senior spécialisé en création de sites web premium, applications SaaS, e-commerce et stratégies digitales avancées"
    },
    {
      icon: Target,
      title: "Mission",
      description: "Accompagner les entreprises dans la transformation digitale avancée avec des solutions digitales haut de gamme"
    },
    {
      icon: Bot,
      title: "Automatisation & IA",
      description: "Solutions d'automatisation intelligente et intégration IA pour optimiser vos processus et gagner en productivité"
    },
    {
      icon: Sparkles,
      title: "Vibe Coder",
      description: "Développement de solutions digitales modernes, créatives et performantes, pensées pour l'expérience utilisateur et la scalabilité"
    }
  ];

  return (
    <section 
      id="about" 
      className="py-20 relative overflow-hidden" 
      data-aos="fade-right" 
      data-aos-duration="1200"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 
          className="text-4xl md:text-5xl font-bold text-center mb-12 rellax" 
          data-rellax-speed="1"
        >
          <span className="text-gradient">Expert Digital Senior & Consultant de Référence</span>
        </h2>
        
        <div 
          className="max-w-4xl mx-auto mb-16"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <p className="text-lg text-foreground/80 text-center leading-relaxed mb-6">
            Je suis <span className="text-primary font-semibold">Ulrich Deschamp KOSSONOU</span>, 
            expert digital senior et consultant digital de référence basé à Abidjan, Côte d'Ivoire. 
            En tant que développeur web expert et freelance international, j'opère comme une agence digitale indépendante.
          </p>
          <p className="text-lg text-foreground/80 text-center leading-relaxed">
            J'accompagne les entreprises dans la <span className="text-primary font-semibold">transformation digitale avancée</span> et la mise en place de 
            <span className="text-primary font-semibold"> solutions digitales haut de gamme</span>, incluant développement web, automatisation, solutions IA, 
            marketing digital, branding et design graphique professionnel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="glass-card p-6 hover-lift group rellax"
              data-rellax-speed={index % 2 === 0 ? "2" : "-1"}
              data-aos="zoom-in"
              data-aos-delay={200 + index * 100}
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all duration-500 group-hover:scale-110">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
