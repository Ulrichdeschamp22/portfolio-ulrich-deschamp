import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Skill3DLaptop from './skills/Skill3DLaptop';
import Skill3DBrain from './skills/Skill3DBrain';
import Skill3DSmartphone from './skills/Skill3DSmartphone';
import Skill3DMegaphone from './skills/Skill3DMegaphone';
import Skill3DTablet from './skills/Skill3DTablet';
import Skill3DCamera from './skills/Skill3DCamera';

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const skillCategories = [
    {
      title: "Développement Web",
      subtitle: "Développeur web expert Abidjan - Création site web premium",
      skills: [
        "Développement application web sur mesure",
        "Sites vitrines & Landing pages premium",
        "Applications SaaS performantes",
        "Boutiques e-commerce",
        "Billetterie en ligne",
        "Optimisation SEO & performance web",
        "API & bases de données",
        "Sécurisation & hébergement"
      ],
      Visual: Skill3DLaptop,
      textLeft: true
    },
    {
      title: "Automatisation & IA",
      subtitle: "Expert automatisation digitale - Solutions IA pour entreprises",
      skills: [
        "Automatisation intelligente des processus",
        "Intégration solutions IA",
        "Optimisation process et gain de temps",
        "Chatbots et assistants virtuels",
        "Machine Learning appliqué",
        "Workflows automatisés"
      ],
      Visual: Skill3DBrain,
      textLeft: false
    },
    {
      title: "Solutions Digitales & Événementiel",
      subtitle: "Plateformes digitales sur mesure pour entreprises",
      skills: [
        "Plateformes digitales personnalisées",
        "Systèmes de réservation en ligne",
        "Billetterie événementielle",
        "Solutions digitales événementielles",
        "Intégration d'outils métiers",
        "Transformation digitale avancée"
      ],
      Visual: Skill3DSmartphone,
      textLeft: true
    },
    {
      title: "Marketing & Branding",
      subtitle: "Stratégie digitale avancée - Marketing digital premium",
      skills: [
        "Community management expert",
        "Gestion campagnes digitales performantes",
        "Stratégies marketing digital",
        "Création de contenus impactants",
        "Animation de communautés",
        "Calendrier éditorial & reporting"
      ],
      Visual: Skill3DMegaphone,
      textLeft: false
    },
    {
      title: "Design & Contenu",
      subtitle: "Design graphique professionnel - Identité visuelle premium",
      skills: [
        "Logos & branding haut de gamme",
        "Affiches publicitaires",
        "Charte graphique complète",
        "Création contenus digitaux impactants",
        "Mockups & retouche photo",
        "Packaging & supports print"
      ],
      Visual: Skill3DTablet,
      textLeft: true
    },
    {
      title: "Photographie & Vidéo",
      subtitle: "Photographie digitale professionnelle",
      skills: [
        "Événements & corporate",
        "Portraits professionnels",
        "Shooting produits",
        "Captation vidéo événementielle",
        "Montage dynamique",
        "Vidéos promotionnelles"
      ],
      Visual: Skill3DCamera,
      textLeft: false
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="py-20 md:py-32 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl opacity-30" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-20 md:mb-28"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Mes Compétences</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto">
            En tant que <span className="text-primary font-semibold">meilleur expert digital à Abidjan</span>, 
            je propose des solutions digitales premium dans chaque domaine ci-dessous.
          </p>
        </motion.div>
        
        {/* Skill sections */}
        <div className="space-y-24 md:space-y-40">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              className={`grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center ${
                category.textLeft ? '' : 'md:flex-row-reverse'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {/* Text content */}
              <div className={`${category.textLeft ? 'md:order-1' : 'md:order-2'}`}>
                <motion.div
                  initial={{ opacity: 0, x: category.textLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
                    {category.title}
                  </h3>
                  <p className="text-primary text-base md:text-lg mb-6 font-medium">
                    {category.subtitle}
                  </p>
                  <ul className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.li 
                        key={skillIndex}
                        className="flex items-start gap-3 group"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 + skillIndex * 0.05 }}
                      >
                        <span className="w-2 h-2 rounded-full bg-primary mt-2 group-hover:scale-125 transition-transform" />
                        <span className="text-muted-foreground text-sm md:text-base group-hover:text-foreground transition-colors">
                          {skill}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
              
              {/* 3D Visual */}
              <div className={`${category.textLeft ? 'md:order-2' : 'md:order-1'}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <category.Visual />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
