import { GraduationCap, Award, Briefcase, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Formation",
      description: "Diplômé en Ressources Humaines, formé en Développement Web et Communication & Développement de Marques"
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
      description: "Accompagner entreprises et particuliers à accroître leur productivité et développer leur image en ligne"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-gradient">À propos de moi</span>
        </h2>
        
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-foreground/80 text-center leading-relaxed">
            Je suis <span className="text-primary font-semibold">Kossonou Kouassi N'Tobeni Ulrich Deschamp</span>, 
            un professionnel polyvalent basé à Abidjan, Côte d'Ivoire. 
            Avec une approche créative et technique, j'aide mes clients à transformer leurs idées en solutions digitales innovantes 
            qui génèrent des résultats concrets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="glass-card p-6 hover-lift group"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
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