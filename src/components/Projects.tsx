import { useState } from 'react';
import { ExternalLink, Globe, Code2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const designImages = [
  { src: '/lovable-uploads/design/plan-travail-3.jpg', title: 'Google Maps - Visibilité entreprise' },
  { src: '/lovable-uploads/design/plan-travail-6.jpg', title: 'Création de site de billetterie' },
  { src: '/lovable-uploads/design/plan-travail-7.jpg', title: 'Graphiste Designer Professionnel' },
  { src: '/lovable-uploads/design/plan-travail-8.jpg', title: "Création d'application mobile" },
  { src: '/lovable-uploads/design/plan-travail-9.jpg', title: 'Création de solutions SaaS' },
  { src: '/lovable-uploads/design/plan-travail-10.jpg', title: 'Automatisez votre Business' },
  { src: '/lovable-uploads/design/plan-travail-11.jpg', title: 'Tunnel de vente automatisé' },
  { src: '/lovable-uploads/design/plan-travail-18-5.jpg', title: 'Keys Voyages - Visa USA' },
  { src: '/lovable-uploads/design/plan-travail-18.jpg', title: 'Keys Voyages - Visa France' },
  { src: '/lovable-uploads/design/plan-travail-19.jpg', title: 'Keys Voyages - Visa Travail' },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('Tous');
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

  const filters = ['Tous', 'Site Web', 'Application SaaS', 'Portfolio', 'Landing Page', 'Boutique en ligne', 'Design Graphique'];

  const filteredProjects = activeFilter === 'Tous'
    ? projects
    : projects.filter(p => p.type === activeFilter);

  const getTypeColor = (type: string) => {
    switch(type) {
      case 'Portfolio': return 'text-purple-400';
      case 'Landing Page': return 'text-blue-400';
      case 'Site Web': return 'text-green-400';
      case 'Application SaaS': return 'text-orange-400';
      case 'Boutique en ligne': return 'text-pink-400';
      case 'Design Graphique': return 'text-teal-400';
      default: return 'text-primary';
    }
  };

  const isDesignGraphique = activeFilter === 'Design Graphique';

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % designImages.length);
  };

  const prevSlide = () => {
    setCarouselIndex((prev) => (prev - 1 + designImages.length) % designImages.length);
  };

  // Get visible images for grid (3 at a time on desktop, 1 on mobile)
  const getVisibleRange = () => {
    const images = [];
    for (let i = 0; i < 3; i++) {
      images.push(designImages[(carouselIndex + i) % designImages.length]);
    }
    return images;
  };

  return (
    <section 
      id="projects" 
      className="py-12 md:py-16 relative overflow-hidden section-projects" 
      data-aos="fade-up" 
      data-aos-duration="800"
      data-aos-once="true"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-48 md:w-72 h-48 md:h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 md:w-72 h-48 md:h-72 bg-primary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-[1600px] relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 rellax" data-rellax-speed="1">
          <span className="text-gradient">Projets Réalisés</span>
        </h2>
        <p className="text-center text-sm md:text-base text-muted-foreground mb-8 md:mb-10 max-w-3xl mx-auto px-2">
          Portfolio de mes réalisations en développement web, infographie et photographie à Abidjan. 
          Découvrez mes projets digitaux créés pour des entreprises en Côte d'Ivoire et à l'international.
        </p>

        {/* Category Filters */}
        <div className="flex overflow-x-auto pb-4 mb-8 gap-2 scrollbar-hide justify-start md:justify-center md:flex-wrap">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => { setActiveFilter(filter); setCarouselIndex(0); }}
              size="sm"
              className={`flex-shrink-0 transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                  : 'hover:bg-primary/10'
              }`}
            >
              <span className="text-xs sm:text-sm whitespace-nowrap">{filter}</span>
            </Button>
          ))}
        </div>
        
        <AnimatePresence mode="wait">
          {isDesignGraphique ? (
            <motion.div
              key="design-carousel"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              {/* Carousel */}
              <div className="relative">
                {/* Navigation buttons */}
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm text-muted-foreground">
                    {carouselIndex + 1} / {designImages.length}
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" onClick={prevSlide} className="h-9 w-9 rounded-full">
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" onClick={nextSlide} className="h-9 w-9 rounded-full">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Images grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  <AnimatePresence mode="wait">
                    {getVisibleRange().map((image, idx) => (
                      <motion.div
                        key={`${carouselIndex}-${idx}`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                        className="glass-card overflow-hidden group hover-lift cursor-pointer"
                        onClick={() => setSelectedImage(image.src)}
                      >
                        <div className="aspect-square overflow-hidden">
                          <img 
                            src={image.src} 
                            alt={image.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-3 md:p-4">
                          <p className="text-sm font-medium text-foreground truncate">{image.title}</p>
                          <p className="text-xs text-muted-foreground mt-1">Design Graphique</p>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-1.5 mt-6">
                  {designImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCarouselIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        idx === carouselIndex ? 'bg-primary w-6' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Lightbox */}
              <AnimatePresence>
                {selectedImage && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                  >
                    <motion.img
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0.8 }}
                      src={selectedImage}
                      alt="Design en grand"
                      className="max-w-full max-h-[90vh] object-contain rounded-lg"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div 
              key={activeFilter}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
            >
              {filteredProjects.length === 0 ? (
                <div className="col-span-full text-center py-12">
                  <p className="text-muted-foreground text-sm">Aucun projet dans cette catégorie pour le moment.</p>
                </div>
              ) : (
                filteredProjects.map((project) => (
                  <article 
                    key={project.title}
                    className="glass-card overflow-hidden group hover-lift"
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
                          aria-label={`Voir le projet ${project.title}`}
                        >
                          Voir le projet
                          <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                      <link itemProp="url" href={project.url} />
                      <meta itemProp="creator" content="Ulrich Deschamp KOSSONOU" />
                    </div>
                  </article>
                ))
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
