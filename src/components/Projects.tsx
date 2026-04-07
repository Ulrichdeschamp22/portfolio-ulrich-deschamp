import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { ExternalLink, Globe, Code2, ChevronLeft, ChevronRight, X } from 'lucide-react';
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
  { src: '/lovable-uploads/design/plan-travail-27.jpg', title: 'Keys Voyages - Saint Valentin' },
  { src: '/lovable-uploads/design/atelier-premarital.jpg', title: 'Dame Hortys - Atelier Prémarital' },
  { src: '/lovable-uploads/design/affiche-nounou.jpg', title: 'Servir La Famille - Recrutement' },
  { src: '/lovable-uploads/design/affiche-saint-valentin.jpg', title: 'Dame Hortys - Saint Valentin' },
  { src: '/lovable-uploads/design/bootcamp-couple.jpg', title: 'Bootcamp Spécial Couple 2026' },
  { src: '/lovable-uploads/design/entrepreneuriat.jpg', title: 'Entrepreneuriat & Liberté Financière' },
  { src: '/lovable-uploads/design/formation-couple.jpg', title: 'Formation Spécial Couple' },
  { src: '/lovable-uploads/design/bootcamp-celibataire.jpg', title: 'Bootcamp Célibataire à Devenir Épouse' },
  { src: '/lovable-uploads/design/plan-travail-1.jpg', title: 'Dame Hortys - Promo Relations' },
  { src: '/lovable-uploads/design/plan-travail-2.jpg', title: 'Dame Hortys - Annonces Matrimoniales' },
  { src: '/lovable-uploads/design/investissement-immobilier-1.jpg', title: 'Certificat Professionnel - Investissement Immobilier' },
  { src: '/lovable-uploads/design/investissement-immobilier-2.jpg', title: 'Investissement Immobilier - Février 2026' },
  { src: '/lovable-uploads/design/affiche-temoignage.jpg', title: 'Dame Hortys - Témoignage' },
  { src: '/lovable-uploads/design/investissement-immobilier-3.jpg', title: 'Investissement Immobilier - Mars 2026' },
  { src: '/lovable-uploads/design/amour-immobilier.jpg', title: 'Amour & Immobilier - Mars 2026' },
  { src: '/lovable-uploads/design/couple-vision-360.jpg', title: 'Couple Vision 360' },
  { src: '/lovable-uploads/design/bootcamp-celibataire-2.jpg', title: 'BootCamp Célibataire - Époux à Devenir' },
];

// Split images into rows for marquee
const splitIntoRows = (images: typeof designImages, numRows: number) => {
  const rows: (typeof designImages)[] = Array.from({ length: numRows }, () => []);
  images.forEach((img, i) => rows[i % numRows].push(img));
  return rows;
};

const MarqueeRow = ({ images, direction, speed, onImageClick }: { 
  images: typeof designImages; 
  direction: 'left' | 'right'; 
  speed: number;
  onImageClick: (src: string) => void;
}) => {
  const doubled = useMemo(() => [...images, ...images], [images]);
  
  return (
    <div className="overflow-hidden py-2">
      <div
        className={`flex gap-4 w-max ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((image, idx) => (
          <div
            key={`${direction}-${idx}`}
            className="flex-shrink-0 w-[180px] sm:w-[200px] md:w-[220px] rounded-xl overflow-hidden border border-border/20 bg-card shadow-md hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
            onClick={() => onImageClick(image.src)}
          >
            <div className="aspect-[4/5] overflow-hidden">
              {idx < 7 ? (
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  draggable={false}
                />
              ) : (
                <div
                  role="img"
                  data-nosnippet
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url(${image.src})` }}
                  draggable={false}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const DesignMarquee = ({ onImageClick }: { onImageClick: (src: string) => void }) => {
  const rows = useMemo(() => splitIntoRows(designImages, 4), []);

  return (
    <div className="space-y-2">
      {rows.map((row, i) => (
        <MarqueeRow
          key={i}
          images={row}
          direction={i % 2 === 0 ? 'left' : 'right'}
          speed={35 + i * 5}
          onImageClick={onImageClick}
        />
      ))}
      <div className="flex items-center justify-center gap-3 mt-4">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/30" />
        <p className="text-xs text-muted-foreground font-medium">
          {designImages.length} créations
        </p>
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/30" />
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('Tous');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

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
  const showDesignCarousel = activeFilter === 'Tous' || isDesignGraphique;

  // Lightbox
  const openLightbox = (src: string) => {
    const idx = designImages.findIndex(i => i.src === src);
    setLightboxIndex(idx >= 0 ? idx : 0);
    setSelectedImage(src);
  };
  const lightboxPrev = () => {
    const newIdx = (lightboxIndex - 1 + designImages.length) % designImages.length;
    setLightboxIndex(newIdx);
    setSelectedImage(designImages[newIdx].src);
  };
  const lightboxNext = () => {
    const newIdx = (lightboxIndex + 1) % designImages.length;
    setLightboxIndex(newIdx);
    setSelectedImage(designImages[newIdx].src);
  };

  return (
    <section 
      id="projects" 
      className="py-12 md:py-16 relative overflow-hidden section-projects" 
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-48 md:w-72 h-48 md:h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 md:w-72 h-48 md:h-72 bg-primary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-[1600px] relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
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
              onClick={() => { setActiveFilter(filter); }}
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
              key="design-marquee"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <DesignMarquee onImageClick={openLightbox} />
            </motion.div>
          ) : (
            <motion.div 
              key={activeFilter}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              {/* Project cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
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
              </div>

              {/* Design Graphique marquee when "Tous" is active */}
              {activeFilter === 'Tous' && (
                <div className="mt-10">
                  <h3 className="text-xl md:text-2xl font-bold mb-6">
                    <span className="text-gradient">Design Graphique</span>
                  </h3>
                  <DesignMarquee onImageClick={openLightbox} />
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }} className="absolute top-4 right-4 text-white/70 hover:text-white z-50 p-2"><X className="h-6 w-6" /></button>
              <button onClick={(e) => { e.stopPropagation(); lightboxPrev(); }} className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-50 p-2 bg-white/10 rounded-full backdrop-blur-sm"><ChevronLeft className="h-6 w-6" /></button>
              <button onClick={(e) => { e.stopPropagation(); lightboxNext(); }} className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-50 p-2 bg-white/10 rounded-full backdrop-blur-sm"><ChevronRight className="h-6 w-6" /></button>
              <motion.img key={selectedImage} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }} src={selectedImage} alt="Design en grand" className="max-w-full max-h-[85vh] object-contain rounded-lg" onClick={(e) => e.stopPropagation()} draggable={false} />
              <p className="absolute bottom-6 text-white/60 text-sm">{lightboxIndex + 1} / {designImages.length} — {designImages[lightboxIndex]?.title}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
