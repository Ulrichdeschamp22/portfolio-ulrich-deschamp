import { ExternalLink, Globe, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Les Awards des Familles",
      description: "Plateforme de vote en ligne pour célébrer et promouvoir les valeurs familiales africaines lors de la cérémonie Les Awards des Familles",
      url: "https://lesawardsdesfamilles.damehortysholding.com/",
      tags: ["Vote en ligne", "Événementiel", "React"],
      type: "Application SaaS"
    },
    {
      title: "Dame Hortys Holding",
      description: "Site de présentation de la structure de Madame Hortense Konan avec boutique en ligne et vente de formations digitales",
      url: "https://www.damehortysholding.com/",
      tags: ["E-commerce", "Formation", "Boutique"],
      type: "Boutique en ligne"
    },
    {
      title: "Portfolio Pasteur KOUADIO.G",
      description: "Un portfolio moderne et interactif présentant le Pasteur KOUADIO GERMAIN",
      url: "https://germain-kouadio.lovable.app/",
      tags: ["React", "Tailwind", "Animations"],
      type: "Portfolio"
    },
    {
      title: "Fondation Miracle of God",
      description: "Landing page élégante pour une fondation caritative avec design moderne",
      url: "https://fondation-miracle-of-god.lovable.app/",
      tags: ["Landing Page", "Responsive", "UX/UI"],
      type: "Landing Page"
    },
    {
      title: "Hôtel Résidence Sunday",
      description: "Site web complet pour un établissement hôtelier avec système de réservation",
      url: "https://hotel-residence-sunday.lovable.app/",
      tags: ["Hôtellerie", "Booking", "Design"],
      type: "Site Web"
    },
    {
      title: "stocknix - SaaS PME/TPE",
      description: "Application SaaS complète pour la gestion d'entreprise avec tableau de bord",
      url: "https://stocknix.space/",
      tags: ["SaaS", "Dashboard", "Gestion"],
      type: "Application SaaS"
    }
  ];

  const getTypeColor = (type: string) => {
    switch(type) {
      case 'Portfolio': return 'text-purple-400';
      case 'Landing Page': return 'text-blue-400';
      case 'Site Web': return 'text-green-400';
      case 'Application SaaS': return 'text-orange-400';
      case 'Boutique en ligne': return 'text-pink-400';
      default: return 'text-primary';
    }
  };

  return (
    <section 
      id="projects" 
      className="py-16 md:py-20 relative overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-primary/10" 
      data-aos="fade-up" 
      data-aos-duration="800"
      data-aos-once="true"
    >
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-primary/15 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10 max-w-7xl">
        <h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 rellax" 
          data-rellax-speed="1"
        >
          <span className="text-gradient">Projets Réalisés</span>
        </h2>
        <p 
          className="text-center text-sm md:text-base text-muted-foreground mb-8 md:mb-12 max-w-3xl mx-auto px-2"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Portfolio de mes réalisations en développement web, infographie et photographie à Abidjan. 
          Découvrez mes projets digitaux créés pour des entreprises en Côte d'Ivoire et à l'international.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <article 
              key={index}
              className="glass-card overflow-hidden group hover-lift"
              data-aos="fade-up"
              data-aos-delay={50 + index * 50}
              data-aos-once="true"
              itemScope 
              itemType="https://schema.org/CreativeWork"
            >
              <div className="p-4 md:p-6">
                <div className="flex items-start justify-between mb-3 md:mb-4">
                  <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    <span className={`text-xs md:text-sm font-medium ${getTypeColor(project.type)}`} itemProp="category">
                      {project.type}
                    </span>
                  </div>
                  <Code2 className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground group-hover:rotate-12 transition-transform" />
                </div>
                
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 group-hover:text-primary transition-colors" itemProp="name">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-xs md:text-sm mb-3 md:mb-4 line-clamp-2" itemProp="description">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6" itemProp="keywords">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-0.5 md:py-1 text-[10px] md:text-xs rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary/10 transition-all duration-300 text-xs md:text-sm"
                  asChild
                >
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                    aria-label={`Voir le projet ${project.title} - Développé par Ulrich Deschamp à Abidjan`}
                  >
                    Voir le projet
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <link itemProp="url" href={project.url} />
                <meta itemProp="creator" content="Ulrich Deschamp KOSSONOU" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;