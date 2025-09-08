import { GraduationCap, Award, Briefcase, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Formation",
      description: "Diplômé en Ressources Humaines & Communication, J'ai acquis une formation en Développement Web, Communication & Développement des Marques"
    },
    {
      icon: Briefcase,
      title: "Expérience",
      description: "Plus de 5 ans d'expérience en développement web, design et marketing digital"
    },
    {
      icon: Award,
      title: "Expertise",
      description: "Spécialisé en création de sites web, applications SaaS, e-commerce et stratégies digitales"
    },
    {
      icon: Target,
      title: "Mission",
      description: "Accompagner les entreprises, organisations et les particuliers à accroître leur productivité et développer leur image en ligne"
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
          <span className="text-gradient">Développement Web Professionnel à Abidjan et en Côte d'Ivoire</span>
        </h2>
        
        <h3 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-primary">
          Expert Digital et Développeur Full-Stack basé à Abidjan
        </h3>
        
        <div 
          className="max-w-5xl mx-auto mb-16"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <p className="text-lg text-foreground/80 text-center leading-relaxed mb-6">
            Je suis <span className="text-primary font-semibold">Kossonou Kouassi N'Tobeni Ulrich Deschamp</span>, 
            développeur web professionnel et expert digital établi à Abidjan, en Côte d'Ivoire. Spécialisé dans le développement web full-stack, 
            je propose mes services de création de sites web sur mesure, d'applications SaaS performantes et de boutiques e-commerce modernes aux entreprises 
            et startups d'Abidjan et de toute la Côte d'Ivoire. Mon expertise technique en React, Node.js, et les dernières technologies web me permet 
            de livrer des solutions digitales innovantes et optimisées pour le SEO, garantissant une visibilité maximale sur les moteurs de recherche 
            pour mes clients basés en Côte d'Ivoire et en Afrique de l'Ouest.
          </p>
          <p className="text-lg text-foreground/80 text-center leading-relaxed">
            En tant que développeur web à Abidjan, j'accompagne les entreprises ivoiriennes dans leur transformation digitale complète. 
            Mes services incluent non seulement le développement web professionnel, mais aussi l'infographie créative (création de logos, chartes graphiques, 
            supports marketing), la photographie professionnelle pour événements et produits, ainsi que le community management stratégique. 
            Cette approche multidisciplinaire me permet d'offrir une solution digitale complète et cohérente à mes clients d'Abidjan, de Yamoussoukro, 
            de Bouaké, de San Pedro et de toute la Côte d'Ivoire. Chaque projet est conçu avec les meilleures pratiques du web moderne, 
            assurant performance, sécurité et référencement optimal pour une présence en ligne efficace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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