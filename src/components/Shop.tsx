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
      className="py-20 bg-card/20 relative overflow-hidden" 
      data-aos="fade-up" 
      data-aos-duration="1200"
    >
      {/* Floating elements animation */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/20 rounded-full animate-bounce"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent/20 rounded-full animate-bounce animation-delay-200"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 
          className="text-4xl md:text-5xl font-bold text-center mb-4 rellax" 
          data-rellax-speed="1"
        >
          <span className="text-gradient">Community Management et Marketing Digital en Côte d'Ivoire</span>
        </h2>
        <h3 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-primary">
          Stratégies Digitales et Boutique E-commerce à Abidjan
        </h3>
        <p 
          className="text-center text-foreground/80 mb-16 max-w-5xl mx-auto text-lg leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Community Manager expert basé à Abidjan, j'accompagne les entreprises de Côte d'Ivoire dans leur stratégie de marketing digital et la gestion 
          professionnelle de leurs réseaux sociaux. Mes services de community management incluent la création de contenus engageants, l'élaboration de 
          calendriers éditoriaux stratégiques, l'animation de communautés en ligne, l'analyse des performances et le reporting détaillé. Je développe 
          des stratégies marketing digital sur mesure pour accroître votre visibilité à Abidjan et dans toute la Côte d'Ivoire, générer des leads qualifiés 
          et fidéliser votre audience. Découvrez également ma boutique en ligne proposant des formations digitales, e-books et outils pour entrepreneurs.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <article 
              key={index}
              className="glass-card p-6 hover-lift group relative overflow-hidden rellax"
              data-rellax-speed={index % 2 === 0 ? "-2" : "2"}
              data-aos="flip-right"
              data-aos-delay={100 + index * 150}
              itemScope 
              itemType="https://schema.org/Product"
            >
              {product.highlight && (
                <span 
                  className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary animate-pulse"
                >
                  {product.highlight}
                </span>
              )}
              
              <div className="p-4 rounded-lg bg-primary/10 w-fit mb-6 group-hover:bg-primary/20 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                <product.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3" itemProp="name">{product.title}</h3>
              <p className="text-muted-foreground mb-6" itemProp="description">{product.description}</p>
              
              <ul className="space-y-2 mb-6">
                {product.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex} 
                    className="flex items-center text-sm"
                    data-aos="fade-right"
                    data-aos-delay={300 + featureIndex * 50}
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
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <Button size="xl" variant="glow" asChild className="hover:scale-110 transition-transform duration-300">
            <a 
              href="https://open-mind.shop/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center"
              aria-label="Visiter la boutique e-commerce Open Mind Shop - Produits digitaux par Ulrich Deschamp"
            >
              <ShoppingBag className="w-5 h-5 mr-2 animate-bounce" />
              Visiter la boutique
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Shop;