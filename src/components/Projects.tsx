import { ExternalLink, Globe, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
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
      title: "GestionPro - SaaS PME/TPE",
      description: "Application SaaS complète pour la gestion d'entreprise avec tableau de bord",
      url: "https://gestionpro.lovable.app/",
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
      className="py-20 relative overflow-hidden" 
      data-aos="zoom-in" 
      data-aos-duration="1200"
    >
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse animation-delay-300"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 
          className="text-4xl md:text-5xl font-bold text-center mb-4 rellax" 
          data-rellax-speed="1"
        >
          <span className="text-gradient">Projets Réalisés</span>
        </h2>
        <p 
          className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Portfolio de mes réalisations en développement web, infographie et photographie à Abidjan. 
          Découvrez mes projets digitaux créés pour des entreprises en Côte d'Ivoire et à l'international.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <article 
              key={index}
              className={`glass-card overflow-hidden group hover-lift ${index % 2 === 0 ? 'rellax' : ''}`}
              data-rellax-speed={index % 2 === 0 ? "3" : undefined}
              data-aos="fade-up"
              data-aos-delay={100 + index * 100}
              itemScope 
              itemType="https://schema.org/CreativeWork"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Globe className="w-5 h-5 text-primary animate-pulse" />
                    <span className={`text-sm font-medium ${getTypeColor(project.type)}`} itemProp="category">
                      {project.type}
                    </span>
                  </div>
                  <Code2 className="w-5 h-5 text-muted-foreground group-hover:rotate-12 transition-transform" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors" itemProp="name">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2" itemProp="description">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6" itemProp="keywords">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      data-aos="zoom-in"
                      data-aos-delay={200 + tagIndex * 50}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary/10 group-hover:scale-105 transition-all duration-300"
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