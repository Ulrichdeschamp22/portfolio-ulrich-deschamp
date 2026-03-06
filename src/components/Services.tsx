import { motion } from 'framer-motion';
import { Palette, Code, Megaphone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Palette,
    title: 'Design Graphique',
    description: 'Création visuelle percutante pour renforcer votre identité de marque.',
    details: [
      'Logos & identité visuelle complète',
      'Affiches, flyers & supports print',
      'Visuels réseaux sociaux',
      'Maquettes UI/UX modernes',
      'Charte graphique professionnelle',
      'Retouche & montage photo',
    ],
    gradient: 'from-rose-500 to-orange-500',
    bgLight: 'from-rose-50 to-orange-50',
  },
  {
    icon: Code,
    title: 'Développement Web',
    description: 'Sites et applications web performants, modernes et sur mesure.',
    details: [
      'Sites vitrines & landing pages',
      'Applications SaaS sur mesure',
      'Boutiques e-commerce',
      'Optimisation SEO & performance',
      'Intégration API & bases de données',
      'Maintenance & hébergement',
    ],
    gradient: 'from-violet-500 to-blue-500',
    bgLight: 'from-violet-50 to-blue-50',
  },
  {
    icon: Megaphone,
    title: 'Community Management',
    description: 'Stratégie digitale et gestion de vos réseaux sociaux.',
    details: [
      'Stratégie de contenu personnalisée',
      'Création & planification de posts',
      'Gestion des communautés en ligne',
      'Campagnes publicitaires ciblées',
      'Reporting & analyse de performance',
      'Veille concurrentielle & tendances',
    ],
    gradient: 'from-emerald-500 to-teal-500',
    bgLight: 'from-emerald-50 to-teal-50',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 tracking-wide uppercase">
            Nos Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Ce que nous <span className="text-gradient">proposons</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Des solutions complètes pour propulser votre présence digitale et développer votre activité.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="relative h-full rounded-2xl border border-border/50 bg-card overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                {/* Top gradient bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${service.gradient}`} />

                <div className="p-6 sm:p-8">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Title & description */}
                  <h3 className="text-xl sm:text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Details list */}
                  <ul className="space-y-2.5 mb-8">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} mt-2 flex-shrink-0`} />
                        <span className="text-foreground/80">{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link to="/tarifs">
                    <Button
                      variant="ghost"
                      className="group/btn gap-2 text-sm font-semibold px-0 hover:bg-transparent"
                    >
                      Voir les tarifs
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
