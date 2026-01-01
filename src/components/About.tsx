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
      className="py-16 md:py-20 relative overflow-hidden px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24" 
      data-aos="fade-up" 
      data-aos-duration="800"
      data-aos-once="true"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-50"></div>
      
      <div className="container mx-auto relative z-10 max-w-7xl">
        <h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12 rellax" 
          data-rellax-speed="1"
        >
          <span className="text-gradient">Expert Digital Senior & Consultant de Référence</span>
        </h2>
        
        <div 
          className="max-w-4xl mx-auto mb-12 md:mb-16 px-2"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <p className="text-base md:text-lg text-foreground/80 text-center leading-relaxed mb-4 md:mb-6">
            Je suis <span className="text-primary font-semibold">Ulrich Deschamp KOSSONOU</span>, 
            expert digital senior et consultant digital de référence basé à Abidjan, Côte d'Ivoire. 
            En tant que développeur web expert et freelance international, j'opère comme une agence digitale indépendante.
          </p>
          <p className="text-base md:text-lg text-foreground/80 text-center leading-relaxed">
            J'accompagne les entreprises dans la <span className="text-primary font-semibold">transformation digitale avancée</span> et la mise en place de 
            <span className="text-primary font-semibold"> solutions digitales haut de gamme</span>, incluant développement web, automatisation, solutions IA, 
            marketing digital, branding et design graphique professionnel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="glass-card p-4 md:p-6 hover-lift group"
              data-aos="fade-up"
              data-aos-delay={100 + index * 50}
              data-aos-once="true"
            >
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="p-2 md:p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all duration-500 group-hover:scale-110">
                  <item.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">{item.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground">{item.description}</p>
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
