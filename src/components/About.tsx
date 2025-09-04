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
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="text-gradient">À propos de moi</span>
        </h2>
        
        {/* Professional Portrait with stunning design */}
        <div className="relative mb-12 animate-fade-in">
          <div className="max-w-md mx-auto">
            <div className="relative group">
              {/* Glowing background effect */}
              <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl group-hover:opacity-30 transition-opacity duration-700"></div>
              
              {/* Image container with floating effect */}
              <div className="relative transform hover:scale-[1.02] transition-all duration-500">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-background">
                  <img 
                    src="/lovable-uploads/354cc3db-27f6-4c6e-8032-de01a9893a78.png" 
                    alt="Ulrich Deschamp Professional" 
                    className="w-full h-[400px] md:h-[500px] object-cover"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60"></div>
                  
                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-primary/20 group-hover:border-primary/40 transition-colors duration-500"></div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-20 h-20 bg-primary/10 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-pulse animation-delay-200"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-foreground/80 text-center leading-relaxed animate-fade-in animation-delay-100">
            Je suis <span className="text-primary font-semibold">Kossonou Kouassi N'Tobeni Ulrich Deschamp</span>, 
            un professionnel polyvalent basé à Abidjan, Côte d'Ivoire. 
            Avec une approche créative et technique, j'aide les entreprises, organisations et les particuliers à transformer leurs idées en solutions digitales innovantes 
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