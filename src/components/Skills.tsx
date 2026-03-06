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

  // Universe colors for each skill section
  const universeColors = [
    { from: 'from-violet-950/30', via: 'via-purple-900/20', to: 'to-background', glow: 'bg-violet-500/20' },
    { from: 'from-pink-950/30', via: 'via-rose-900/20', to: 'to-background', glow: 'bg-pink-500/20' },
    { from: 'from-blue-950/30', via: 'via-cyan-900/20', to: 'to-background', glow: 'bg-blue-500/20' },
    { from: 'from-orange-950/30', via: 'via-amber-900/20', to: 'to-background', glow: 'bg-orange-500/20' },
    { from: 'from-emerald-950/30', via: 'via-teal-900/20', to: 'to-background', glow: 'bg-emerald-500/20' },
    { from: 'from-rose-950/30', via: 'via-orange-900/20', to: 'to-background', glow: 'bg-rose-500/20' },
  ];

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="py-8 md:py-12 bg-background relative overflow-hidden"
    >
      
      <div className="mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-[1600px] relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Mes Compétences</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
            En tant que <span className="text-primary font-semibold">meilleur expert digital à Abidjan</span>, 
            je propose des solutions digitales premium dans chaque domaine ci-dessous.
          </p>
        </motion.div>
        
        {/* Skill sections */}
        <div className="space-y-0">
          {skillCategories.map((category, index) => {
            const universe = universeColors[index];
            return (
              <div 
                key={index}
                className={`relative py-6 md:py-8 -mx-6 sm:-mx-8 md:-mx-12 lg:-mx-16 xl:-mx-20 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 bg-gradient-to-b ${universe.from} ${universe.via} ${universe.to}`}
              >
                {/* Universe glow effect */}
                <div className={`absolute inset-0 ${universe.glow} opacity-5 blur-3xl pointer-events-none`} />
                
                {/* Separator line */}
                {index > 0 && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                )}
                
                <motion.div 
                  className={`relative z-10 grid md:grid-cols-2 gap-6 md:gap-10 lg:gap-14 items-center max-w-[1400px] mx-auto ${
                    category.textLeft ? '' : 'md:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {/* Text content */}
                  <div className={`${category.textLeft ? 'md:order-1' : 'md:order-2'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: category.textLeft ? -15 : 15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                    >
                      <span className="text-xs uppercase tracking-widest text-primary/60 mb-1 block">
                        Compétence {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2">
                        {category.title}
                      </h3>
                      <p className="text-primary text-sm md:text-base mb-4 font-medium">
                        {category.subtitle}
                      </p>
                      <ul className="space-y-2">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.li 
                            key={skillIndex}
                            className="flex items-start gap-2 group"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.2, delay: skillIndex * 0.02 }}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground text-xs md:text-sm group-hover:text-foreground transition-colors duration-200">
                              {skill}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                  
                  {/* 3D Visual - Static with hover transition */}
                  <div className={`${category.textLeft ? 'md:order-2' : 'md:order-1'}`}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.98 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <category.Visual />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
