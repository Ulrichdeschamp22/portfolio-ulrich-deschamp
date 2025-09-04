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
    <section id="shop" className="py-20 bg-card/20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-gradient">Ma Boutique</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Découvrez mes formations, e-books et outils pour booster votre présence digitale
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <div 
              key={index}
              className="glass-card p-6 hover-lift group relative overflow-hidden"
            >
              {product.highlight && (
                <span className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary">
                  {product.highlight}
                </span>
              )}
              
              <div className="p-4 rounded-lg bg-primary/10 w-fit mb-6 group-hover:bg-primary/20 transition-colors">
                <product.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{product.title}</h3>
              <p className="text-muted-foreground mb-6">{product.description}</p>
              
              <ul className="space-y-2 mb-6">
                {product.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="xl" variant="glow" asChild>
            <a 
              href="https://open-mind.shop/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <ShoppingBag className="w-5 h-5 mr-2" />
              Visiter la boutique
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Shop;