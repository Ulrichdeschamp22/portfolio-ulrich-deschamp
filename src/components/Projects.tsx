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

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('Tous');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

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

  // Auto-scroll
  const startAutoScroll = useCallback(() => {
    if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    autoScrollRef.current = setInterval(() => {
      if (scrollRef.current && !isDragging) {
        const { scrollLeft: sl, scrollWidth, clientWidth } = scrollRef.current;
        if (sl + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 280, behavior: 'smooth' });
        }
      }
    }, 3000);
  }, [isDragging]);

  useEffect(() => {
    if (showDesignCarousel) {
      startAutoScroll();
    }
    return () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    };
  }, [showDesignCarousel, startAutoScroll]);

  // Mouse drag
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
    if (autoScrollRef.current) clearInterval(autoScrollRef.current);
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    if (scrollRef.current) scrollRef.current.scrollLeft = scrollLeft - walk;
  };
  const handleMouseUp = () => {
    setIsDragging(false);
    startAutoScroll();
  };

  // Scroll buttons
  const scrollByAmount = (dir: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 300, behavior: 'smooth' });
    }
  };

  // Lightbox navigation
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
              key="design-carousel"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              {/* Masonry-style grid carousel */}
              <div className="relative">
                {/* Nav arrows */}
                <button
                  onClick={() => scrollByAmount(-1)}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-card/90 backdrop-blur-md border border-primary/20 rounded-full p-3 shadow-xl shadow-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hidden sm:flex"
                  aria-label="Précédent"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => scrollByAmount(1)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-card/90 backdrop-blur-md border border-primary/20 rounded-full p-3 shadow-xl shadow-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hidden sm:flex"
                  aria-label="Suivant"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                {/* Scrollable container - new staggered style */}
                <div
                  ref={scrollRef}
                  className="flex gap-5 overflow-x-auto scrollbar-hide px-2 sm:px-10 pb-6 cursor-grab active:cursor-grabbing snap-x snap-mandatory"
                  style={{ WebkitOverflowScrolling: 'touch' }}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                >
                  {designImages.map((image, idx) => (
                    <motion.div
                      key={idx}
                      className={`flex-shrink-0 w-[240px] sm:w-[260px] md:w-[280px] snap-center cursor-pointer group ${idx % 2 === 0 ? 'mt-0' : 'mt-8'}`}
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      onClick={() => !isDragging && openLightbox(image.src)}
                    >
                      <div className="relative rounded-2xl overflow-hidden bg-card border border-border/20 shadow-lg group-hover:shadow-2xl group-hover:shadow-primary/15 transition-shadow duration-500">
                        {/* Image */}
                        <div className="aspect-[4/5] overflow-hidden">
                          {idx < 7 ? (
                            <img 
                              src={image.src} 
                              alt={image.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                              loading="lazy"
                              draggable={false}
                            />
                          ) : (
                            <div
                              role="img"
                              data-nosnippet
                              className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700 ease-out"
                              style={{ backgroundImage: `url(${image.src})` }}
                              draggable={false}
                            />
                          )}
                          {/* Overlay gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        
                        {/* Info overlay at bottom */}
                        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                          <p className="text-xs font-semibold text-white truncate">{image.title}</p>
                          <div className="flex items-center gap-1 mt-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <p className="text-[10px] text-white/70">Design Graphique</p>
                          </div>
                        </div>

                        {/* Index badge */}
                        <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-[9px] text-primary-foreground font-bold">{idx + 1}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Counter */}
                <div className="flex items-center justify-center gap-3 mt-4">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/30" />
                  <p className="text-xs text-muted-foreground font-medium">
                    {designImages.length} créations
                  </p>
                  <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/30" />
                </div>
              </div>

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
                    <button
                      onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
                      className="absolute top-4 right-4 text-white/70 hover:text-white z-50 p-2"
                    >
                      <X className="h-6 w-6" />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); lightboxPrev(); }}
                      className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-50 p-2 bg-white/10 rounded-full backdrop-blur-sm"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); lightboxNext(); }}
                      className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-50 p-2 bg-white/10 rounded-full backdrop-blur-sm"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                    <motion.img
                      key={selectedImage}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      src={selectedImage}
                      alt="Design en grand"
                      className="max-w-full max-h-[85vh] object-contain rounded-lg"
                      onClick={(e) => e.stopPropagation()}
                      draggable={false}
                    />
                    <p className="absolute bottom-6 text-white/60 text-sm">
                      {lightboxIndex + 1} / {designImages.length} — {designImages[lightboxIndex]?.title}
                    </p>
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

              {/* Design Graphique carousel when "Tous" is active */}
              {activeFilter === 'Tous' && (
                <div className="mt-10">
                  <h3 className="text-xl md:text-2xl font-bold mb-6">
                    <span className="text-gradient">Design Graphique</span>
                  </h3>
                  <div className="relative">
                    <button onClick={() => scrollByAmount(-1)} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-card/90 backdrop-blur-md border border-primary/20 rounded-full p-3 shadow-xl shadow-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hidden sm:flex" aria-label="Précédent"><ChevronLeft className="h-5 w-5" /></button>
                    <button onClick={() => scrollByAmount(1)} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-card/90 backdrop-blur-md border border-primary/20 rounded-full p-3 shadow-xl shadow-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hidden sm:flex" aria-label="Suivant"><ChevronRight className="h-5 w-5" /></button>

                    <div
                      ref={scrollRef}
                      className="flex gap-5 overflow-x-auto scrollbar-hide px-2 sm:px-10 pb-6 cursor-grab active:cursor-grabbing snap-x snap-mandatory"
                      style={{ WebkitOverflowScrolling: 'touch' }}
                      onMouseDown={handleMouseDown}
                      onMouseMove={handleMouseMove}
                      onMouseUp={handleMouseUp}
                      onMouseLeave={handleMouseUp}
                    >
                      {designImages.map((image, idx) => (
                        <motion.div
                          key={idx}
                          className={`flex-shrink-0 w-[200px] sm:w-[220px] md:w-[240px] snap-center cursor-pointer group ${idx % 2 === 0 ? 'mt-0' : 'mt-6'}`}
                          whileHover={{ y: -6 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          onClick={() => !isDragging && openLightbox(image.src)}
                        >
                          <div className="relative rounded-2xl overflow-hidden bg-card border border-border/20 shadow-lg group-hover:shadow-xl group-hover:shadow-primary/10 transition-shadow duration-500">
                            <div className="aspect-[4/5] overflow-hidden">
                              {idx < 7 ? (
                                <img src={image.src} alt={image.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" loading="lazy" draggable={false} />
                              ) : (
                                <div role="img" data-nosnippet className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700 ease-out" style={{ backgroundImage: `url(${image.src})` }} draggable={false} />
                              )}
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
                              <p className="text-[10px] font-semibold text-white truncate">{image.title}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    <div className="flex items-center justify-center gap-3 mt-3">
                      <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary/30" />
                      <p className="text-xs text-muted-foreground">{designImages.length} créations</p>
                      <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary/30" />
                    </div>
                  </div>

                  <AnimatePresence>
                    {selectedImage && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
                        <button onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }} className="absolute top-4 right-4 text-white/70 hover:text-white z-50 p-2"><X className="h-6 w-6" /></button>
                        <button onClick={(e) => { e.stopPropagation(); lightboxPrev(); }} className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-50 p-2 bg-white/10 rounded-full backdrop-blur-sm"><ChevronLeft className="h-6 w-6" /></button>
                        <button onClick={(e) => { e.stopPropagation(); lightboxNext(); }} className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-50 p-2 bg-white/10 rounded-full backdrop-blur-sm"><ChevronRight className="h-6 w-6" /></button>
                        <motion.img key={selectedImage} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }} src={selectedImage} alt="Design en grand" className="max-w-full max-h-[85vh] object-contain rounded-lg" onClick={(e) => e.stopPropagation()} draggable={false} />
                        <p className="absolute bottom-6 text-white/60 text-sm">{lightboxIndex + 1} / {designImages.length} — {designImages[lightboxIndex]?.title}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
