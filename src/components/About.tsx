import { GraduationCap, Award, Briefcase, Target, MessageCircle } from 'lucide-react';
import bitmojiContact from '@/assets/bitmoji-contact.png';

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
  ];


  return (
    <section 
      id="about" 
      className="py-12 md:py-16 relative overflow-hidden" 
      data-aos="fade-up" 
      data-aos-duration="800"
      data-aos-once="true"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-50"></div>
      
      <div className="mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-[1600px] relative z-10">
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

          {/* Contact CTA card with 3D bitmoji */}
          <a
            href="#contact"
            className="md:col-span-2 relative overflow-hidden rounded-2xl p-5 md:p-6 group hover-lift transition-all duration-500"
            style={{
              background: 'linear-gradient(135deg, hsl(142 76% 36% / 0.95), hsl(160 84% 30% / 0.95))',
              boxShadow: '0 10px 40px -10px hsl(142 76% 36% / 0.5)',
            }}
            data-aos="fade-up"
            data-aos-delay="350"
            data-aos-once="true"
          >
            {/* Decorative glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-300/20 rounded-full blur-3xl" />

            <div className="relative flex items-center gap-4 md:gap-6">
              <img
                src={bitmojiContact}
                alt="Ulrich Deschamp - Contactez-moi"
                className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-2xl group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 flex-shrink-0"
                width={256}
                height={256}
                loading="lazy"
              />
              <div className="flex-1 text-white">
                <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  Disponible maintenant
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-1">Discutons de votre projet</h3>
                <p className="text-sm md:text-base text-white/90 mb-3">
                  Une idée, un site, une application ? Contactez-moi pour un échange gratuit.
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold bg-white text-emerald-700 px-4 py-2 rounded-full group-hover:gap-3 transition-all">
                  <MessageCircle className="w-4 h-4" />
                  Me contacter
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
