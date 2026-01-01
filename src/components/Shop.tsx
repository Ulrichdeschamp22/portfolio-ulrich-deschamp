import { ShoppingBag, BookOpen, Package, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Shop = () => {
  const products = [
    {
      icon: BookOpen,
      title: "Formations",
      description: "Formations complètes en développement web, design et marketing digital",
      features: ["Accès à vie", "Support inclus", "Certificat"],
      highlight: "Best-seller"
    },
    {
      icon: Package,
      title: "E-books",
      description: "Guides pratiques et ressources pour maîtriser les outils digitaux",
      features: ["PDF téléchargeable", "Mises à jour gratuites", "Exemples pratiques"],
      highlight: "Nouveau"
    },
    {
      icon: Zap,
      title: "Logiciels & Outils",
      description: "Solutions personnalisées pour automatiser et optimiser votre business",
      features: ["Licence à vie", "Installation guidée", "Support technique"],
      highlight: "Premium"
    }
  ];

  return (
    <section 
      id="shop" 
      className="py-16 md:py-20 bg-card/20 relative overflow-hidden px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24" 
      data-aos="fade-up" 
      data-aos-duration="800"
      data-aos-once="true"
    >
      {/* Floating elements animation */}
      <div className="absolute top-10 left-10 w-16 md:w-20 h-16 md:h-20 bg-primary/20 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-24 md:w-32 h-24 md:h-32 bg-accent/20 rounded-full"></div>
      
      <div className="container mx-auto relative z-10 max-w-7xl">
        <h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 rellax" 
          data-rellax-speed="1"
        >
          <span className="text-gradient">Ma Boutique E-commerce</span>
        </h2>
        <p 
          className="text-center text-sm md:text-base text-muted-foreground mb-10 md:mb-16 max-w-2xl mx-auto px-2"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Formations en développement web Abidjan, e-books et outils digitaux pour booster votre présence en ligne en Côte d'Ivoire
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12">
          {products.map((product, index) => (
            <article 
              key={index}
              className="glass-card p-4 md:p-6 hover-lift group relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={50 + index * 50}
              data-aos-once="true"
              itemScope 
              itemType="https://schema.org/Product"
            >
              {product.highlight && (
                <span 
                  className="absolute top-3 md:top-4 right-3 md:right-4 px-2 md:px-3 py-0.5 md:py-1 text-[10px] md:text-xs font-semibold rounded-full bg-primary/20 text-primary"
                >
                  {product.highlight}
                </span>
              )}
              
              <div className="p-3 md:p-4 rounded-lg bg-primary/10 w-fit mb-4 md:mb-6 group-hover:bg-primary/20 transition-all duration-500">
                <product.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
              </div>
              
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3" itemProp="name">{product.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6" itemProp="description">{product.description}</p>
              
              <ul className="space-y-1.5 md:space-y-2 mb-4 md:mb-6">
                {product.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex} 
                    className="flex items-center text-xs md:text-sm"
                  >
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
              <meta itemProp="brand" content="Ulrich Deschamp Digital" />
              <meta itemProp="seller" content="Ulrich Deschamp KOSSONOU" />
            </article>
          ))}
        </div>
        
        <div 
          className="text-center"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-once="true"
        >
          <Button size="lg" variant="glow" asChild className="transition-transform duration-300">
            <a 
              href="https://open-mind.shop/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm md:text-base"
              aria-label="Visiter la boutique e-commerce Open Mind Shop - Produits digitaux par Ulrich Deschamp"
            >
              <ShoppingBag className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Visiter la boutique
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Shop;