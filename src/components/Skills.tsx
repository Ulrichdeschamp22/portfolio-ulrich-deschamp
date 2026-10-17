import { motion } from 'framer-motion';
import { lazy, Suspense, useRef } from 'react';

const Skill3DLaptop = lazy(() => import('./skills/Skill3DLaptop'));
const Skill3DMegaphone = lazy(() => import('./skills/Skill3DMegaphone'));
const Skill3DSaaS = lazy(() => import('./skills/Skill3DSaaS'));
const Skill3DMobile = lazy(() => import('./skills/Skill3DMobile'));
const Skill3DWebApp = lazy(() => import('./skills/Skill3DWebApp'));
const Skill3DSmartphone = lazy(() => import('./skills/Skill3DSmartphone'));
const Skill3DVote = lazy(() => import('./skills/Skill3DVote'));
const Skill3DEcommerce = lazy(() => import('./skills/Skill3DEcommerce'));
const Skill3DTunnel = lazy(() => import('./skills/Skill3DTunnel'));
const Skill3DTablet = lazy(() => import('./skills/Skill3DTablet'));
const Skill3DCamera = lazy(() => import('./skills/Skill3DCamera'));
const Skill3DTicket = lazy(() => import('./skills/Skill3DTicket'));
const Skill3DLanding = lazy(() => import('./skills/Skill3DLanding'));

const VisualFallback = () => (
  <div className="w-full h-64 md:h-80 flex items-center justify-center">
    <div className="w-16 h-16 rounded-full bg-primary/10 animate-pulse" />
  </div>
);

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
      Visual: Skill3DLaptop,
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
      Visual: Skill3DSaaS,
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
      Visual: Skill3DMobile,
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
      Visual: Skill3DWebApp,
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
      Visual: Skill3DSmartphone,
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
      Visual: Skill3DVote,
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
      Visual: Skill3DEcommerce,
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
      Visual: Skill3DTicket,
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
      Visual: Skill3DLanding,
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
      Visual: Skill3DTunnel,
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
      Visual: Skill3DTablet,
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
      Visual: Skill3DCamera,
      textLeft: true
    }
  ];

  // Universe colors for each skill section
  const universeColors = [
    { from: 'from-violet-950/30', via: 'via-purple-900/20', to: 'to-background', glow: 'bg-violet-500/20' },
    { from: 'from-blue-950/30', via: 'via-cyan-900/20', to: 'to-background', glow: 'bg-blue-500/20' },
    { from: 'from-cyan-950/30', via: 'via-sky-900/20', to: 'to-background', glow: 'bg-cyan-500/20' },
    { from: 'from-purple-950/30', via: 'via-violet-900/20', to: 'to-background', glow: 'bg-purple-500/20' },
    { from: 'from-sky-950/30', via: 'via-blue-900/20', to: 'to-background', glow: 'bg-sky-500/20' },
    { from: 'from-pink-950/30', via: 'via-rose-900/20', to: 'to-background', glow: 'bg-pink-500/20' },
    { from: 'from-indigo-950/30', via: 'via-cyan-900/20', to: 'to-background', glow: 'bg-indigo-500/20' },
    { from: 'from-emerald-950/30', via: 'via-green-900/20', to: 'to-background', glow: 'bg-emerald-500/20' },
    { from: 'from-amber-950/30', via: 'via-orange-900/20', to: 'to-background', glow: 'bg-amber-500/20' },
    { from: 'from-fuchsia-950/30', via: 'via-pink-900/20', to: 'to-background', glow: 'bg-fuchsia-500/20' },
    { from: 'from-violet-950/30', via: 'via-fuchsia-900/20', to: 'to-background', glow: 'bg-violet-500/20' },
    { from: 'from-orange-950/30', via: 'via-amber-900/20', to: 'to-background', glow: 'bg-orange-500/20' },
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
            const universe = universeColors[index % universeColors.length];
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
                  className={`relative z-10 grid md:grid-cols-2 gap-6 md:gap-10 lg:gap-14 items-center max-w-[1400px] mx-auto`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                >
                  {/* Text content */}
                  <motion.div 
                    className={`${category.textLeft ? 'md:order-1' : 'md:order-2'}`}
                    variants={{
                      hidden: { opacity: 0, x: category.textLeft ? -60 : 60 },
                      visible: { 
                        opacity: 1, 
                        x: 0,
                        transition: { 
                          duration: 0.8, 
                          ease: [0.22, 1, 0.36, 1],
                          delay: 0.1
                        }
                      }
                    }}
                  >
                    <div className="relative rounded-2xl border border-border/40 bg-card/40 backdrop-blur-sm p-5 md:p-7 shadow-lg shadow-primary/5 hover:border-primary/30 hover:shadow-primary/10 transition-all duration-500 overflow-hidden group/card">
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
                      hidden: { opacity: 0, x: category.textLeft ? 90 : -90 },
                      visible: { 
                        opacity: 1, 
                        x: 0,
                        transition: { 
                          duration: 0.85, 
                          ease: [0.22, 1, 0.36, 1],
                          delay: 0.75
                        }
                      }
                    }}
                  >
                    <Suspense fallback={<VisualFallback />}>
                      <category.Visual />
                    </Suspense>
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
