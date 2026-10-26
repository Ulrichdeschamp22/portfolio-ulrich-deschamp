import { motion } from 'framer-motion';
import { useRef } from 'react';

import imgweb from '@/assets/skills/web.webp';
import imgmarketing from '@/assets/skills/marketing.webp';
import imgsaas from '@/assets/skills/saas.webp';
import imgmobile from '@/assets/skills/mobile.webp';
import imgwebapp from '@/assets/skills/webapp.webp';
import imgevents from '@/assets/skills/events.webp';
import imgvote from '@/assets/skills/vote.webp';
import imgecommerce from '@/assets/skills/ecommerce.webp';
import imgfunnel from '@/assets/skills/funnel.webp';
import imgdesign from '@/assets/skills/design.webp';
import imgcamera from '@/assets/skills/camera.webp';
import imgticket from '@/assets/skills/ticket.webp';
import imglanding from '@/assets/skills/landing.webp';

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const skillCategories = [
    {
      title: "Développement Web",
      subtitle: "Développeur web expert Abidjan - Création site web premium",
      skills: [
        "Développement application web sur mesure",
        "Sites vitrines & Landing pages premium",
        "Boutiques e-commerce",
        "Billetterie en ligne",
        "Optimisation SEO & performance web",
        "API & bases de données",
        "Sécurisation & hébergement"
      ],
      Visual: imgweb,
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
      Visual: imgmarketing,
      textLeft: false
    },
    {
      title: "Applications SaaS",
      subtitle: "Création d'applications SaaS performantes et évolutives",
      skills: [
        "Architecture cloud scalable",
        "Tableaux de bord & analytics temps réel",
        "Système d'abonnement & facturation",
        "Gestion multi-utilisateurs & rôles",
        "API RESTful & intégrations tierces",
        "Déploiement continu & monitoring",
        "Sécurité & conformité RGPD",
        "Support technique & maintenance"
      ],
      Visual: imgsaas,
      textLeft: true
    },
    {
      title: "Applications Mobiles",
      subtitle: "Création d'applications mobiles iOS & Android sur mesure",
      skills: [
        "Applications cross-platform (React Native)",
        "Design UI/UX mobile natif",
        "Notifications push & temps réel",
        "Intégration API & services cloud",
        "Géolocalisation & cartographie",
        "Paiement mobile intégré",
        "Publication App Store & Play Store",
        "Maintenance & mises à jour"
      ],
      Visual: imgmobile,
      textLeft: false
    },
    {
      title: "Applications Web",
      subtitle: "Développement d'applications web modernes et performantes",
      skills: [
        "Progressive Web Apps (PWA)",
        "Single Page Applications (SPA)",
        "Interfaces utilisateur réactives",
        "Gestion d'état avancée",
        "Authentification & autorisation",
        "Intégration bases de données",
        "Tests automatisés & CI/CD",
        "Optimisation performance & SEO"
      ],
      Visual: imgwebapp,
      textLeft: true
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
      Visual: imgevents,
      textLeft: false
    },
    {
      title: "Plateformes de Vote en Ligne",
      subtitle: "Création de plateformes de vote et awards sécurisées",
      skills: [
        "Plateformes de vote en ligne sécurisées",
        "Systèmes d'awards & cérémonies",
        "Vote en temps réel avec résultats live",
        "Gestion multi-candidats & catégories",
        "Intégration paiement mobile (Orange Money, MTN, Wave)",
        "Tableaux de bord administrateur",
        "Anti-fraude & vérification des votes",
        "Statistiques & reporting avancés"
      ],
      Visual: imgvote,
      textLeft: true
    },
    {
      title: "Boutiques en Ligne",
      subtitle: "Création de boutiques e-commerce performantes et rentables",
      skills: [
        "E-commerce sur mesure clé en main",
        "Catalogue produits & gestion de stock",
        "Paiement sécurisé multi-devises",
        "Intégration livraison & logistique",
        "Expérience d'achat optimisée mobile",
        "Tableau de bord vendeur & analytics",
        "Promotions, coupons & fidélisation",
        "SEO e-commerce & visibilité"
      ],
      Visual: imgecommerce,
      textLeft: false
    },
    {
      title: "Billetterie d'Événement en Ligne",
      subtitle: "Création de plateformes de billetterie événementielle sécurisées",
      skills: [
        "Billetterie événementielle sur mesure",
        "Gestion multi-catégories (VIP, Gold, Standard)",
        "Paiement mobile intégré (Orange Money, MTN, Wave, Visa)",
        "Codes QR & contrôle d'accès en temps réel",
        "Stock limité & vente en temps réel",
        "Tableaux de bord organisateur & analytics",
        "Billets électroniques personnalisés",
        "Reporting ventes & fréquentation"
      ],
      Visual: imgticket,
      textLeft: true
    },
    {
      title: "Création de Landing Page",
      subtitle: "Landing pages haute conversion pour campagnes marketing premium",
      skills: [
        "Landing pages optimisées conversion",
        "Design UX/UI persuasif & responsive",
        "Formulaires de capture & lead magnets",
        "A/B testing & optimisation continue",
        "Intégration CRM & outils marketing",
        "Suivi analytics & taux de conversion",
        "Pages de vente & webinaires",
        "SEO technique & vitesse de chargement"
      ],
      Visual: imglanding,
      textLeft: false
    },
    {
      title: "Tunnels de Vente",
      subtitle: "Création de tunnels de vente automatisés à haute conversion",
      skills: [
        "Pages de capture & landing pages",
        "Séquences email automatisées",
        "Pages de vente à haute conversion",
        "Upsell, downsell & order bump",
        "Intégration CRM & outils marketing",
        "A/B testing & optimisation continue",
        "Webinaires & formations en ligne",
        "Suivi analytics & ROI"
      ],
      Visual: imgfunnel,
      textLeft: true
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
      Visual: imgdesign,
      textLeft: false
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
      Visual: imgcamera,
      textLeft: true
    }
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
          transition={{ duration: 0.4 }}
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
                        return (
              <div 
                key={index}
                className={`skill-universe relative py-8 md:py-12 -mx-6 sm:-mx-8 md:-mx-12 lg:-mx-16 xl:-mx-20 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20`}
              >
                
                {/* Separator line */}
                {index > 0 && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                )}
                
                <motion.div 
                  className={`relative z-10 grid md:grid-cols-2 gap-6 md:gap-10 lg:gap-14 items-center max-w-[1400px] mx-auto`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                >
                  {/* Text content */}
                  <motion.div 
                    className={`${category.textLeft ? 'md:order-1' : 'md:order-2'}`}
                    variants={{
                      hidden: { opacity: 0, x: category.textLeft ? -30 : 30 },
                      visible: { 
                        opacity: 1, 
                        x: 0,
                        transition: { 
                          duration: 0.5, 
                          ease: [0.22, 1, 0.36, 1],
                          delay: 0
                        }
                      }
                    }}
                  >
                    <div className="relative rounded-3xl border border-border bg-card p-6 md:p-8 shadow-sm hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-[border-color,box-shadow] duration-300 overflow-hidden group/card">
                      {/* Subtle corner glow */}
                      <div className="absolute -top-16 -right-16 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none group-hover/card:bg-primary/20 transition-colors duration-500" />

                      <div className="flex items-center gap-3 mb-3">
                        <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary/15 text-primary text-sm font-bold border border-primary/20">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <div className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
                      </div>

                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-1.5">
                        {category.title}
                      </h3>
                      <p className="text-primary text-sm md:text-base mb-5 font-medium">
                        {category.subtitle}
                      </p>

                      <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2.5">
                        {category.skills.map((skill, skillIndex) => (
                          <li
                            key={skillIndex}
                            className="flex items-start gap-2.5 group"
                          >
                            <span className="flex items-center justify-center w-4 h-4 rounded-full bg-primary/15 mt-0.5 flex-shrink-0 group-hover:bg-primary/30 transition-colors duration-200">
                              <svg className="w-2.5 h-2.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            </span>
                            <span className="text-muted-foreground text-xs md:text-sm group-hover:text-foreground transition-colors duration-200">
                              {skill}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                  
                  {/* 3D Visual */}
                  <motion.div 
                    className={`${category.textLeft ? 'md:order-2' : 'md:order-1'}`}
                    variants={{
                      hidden: { opacity: 0, x: category.textLeft ? 40 : -40 },
                      visible: { 
                        opacity: 1, 
                        x: 0,
                        transition: { 
                          duration: 0.5, 
                          ease: [0.22, 1, 0.36, 1],
                          delay: 0.15
                        }
                      }
                    }}
                  >
                    <div className="relative flex items-center justify-center h-64 md:h-96">
                      <div className="absolute w-3/4 h-3/4 rounded-full bg-primary/15 blur-3xl" />
                      <motion.img
                        src={category.Visual}
                        alt={`${category.title} - Ulrich Deschamp KOSSONOU`}
                        width={720}
                        height={720}
                        loading="lazy"
                        decoding="async"
                        draggable={false}
                        className="relative z-10 h-full w-auto max-w-full object-contain drop-shadow-2xl"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                      />
                    </div>
                  </motion.div>
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
