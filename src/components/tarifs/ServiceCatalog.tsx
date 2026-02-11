import { Check, Globe, Smartphone, Ticket, Vote, ShoppingCart, BookOpen, Briefcase, Building2, MessageSquare, Newspaper, GraduationCap, Cloud, Store, Megaphone, Users, BookMarked, Tv, Palette, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const services = [
  {
    category: 'Sites Web',
    items: [
      {
        name: 'Landing Page',
        icon: Megaphone,
        price: '75 000 FCFA',
        description: 'Page de vente unique et percutante',
        features: ['Design moderne responsive', 'Formulaire de contact', 'Optimisation SEO de base', 'Hébergement 6 mois inclus', 'Livraison sous 5 jours'],
      },
      {
        name: 'Site Portfolio',
        icon: Palette,
        price: '150 000 FCFA',
        description: 'Présentez vos réalisations avec style',
        features: ['Galerie photos/vidéos interactive', 'Jusqu\'à 5 pages', 'Design personnalisé', 'Formulaire de contact', 'Optimisation SEO', 'Hébergement 1 an inclus'],
      },
      {
        name: 'Blog',
        icon: BookOpen,
        price: '200 000 FCFA',
        description: 'Partagez votre expertise en ligne',
        features: ['Système de gestion d\'articles', 'Catégories et tags', 'Commentaires modérés', 'Newsletter intégrée', 'SEO avancé', 'Partage réseaux sociaux', 'Hébergement 1 an inclus'],
      },
      {
        name: 'Site Institutionnel / Corporate',
        icon: Building2,
        price: '350 000 FCFA',
        description: 'Image professionnelle pour votre entreprise',
        features: ['Jusqu\'à 10 pages', 'Design premium sur mesure', 'Présentation équipe & valeurs', 'Blog intégré', 'Formulaire de recrutement', 'Multi-langue (2 langues)', 'SEO avancé', 'Hébergement 1 an inclus'],
      },
      {
        name: 'Site d\'Actualité / Média',
        icon: Newspaper,
        price: '500 000 FCFA',
        description: 'Portail d\'information professionnel',
        features: ['Publication multi-auteurs', 'Catégories & rubriques', 'Système de commentaires', 'Newsletter automatique', 'Intégration publicité', 'Flux RSS', 'SEO premium', 'Performance optimisée', 'Hébergement 1 an inclus'],
      },
      {
        name: 'Wiki / Base de connaissances',
        icon: BookMarked,
        price: '400 000 FCFA',
        description: 'Documentation structurée et accessible',
        features: ['Recherche avancée', 'Organisation par catégories', 'Éditeur collaboratif', 'Versioning des articles', 'Gestion des permissions', 'Export PDF', 'Hébergement 1 an inclus'],
      },
    ],
  },
  {
    category: 'E-Commerce & Marketplace',
    items: [
      {
        name: 'Site E-Commerce',
        icon: ShoppingCart,
        price: '750 000 FCFA',
        description: 'Boutique en ligne complète',
        features: ['Catalogue produits illimité', 'Panier & paiement sécurisé', 'Paiement mobile (Orange Money, Wave)', 'Gestion des stocks', 'Tableau de bord vendeur', 'Gestion commandes & livraisons', 'Notifications email/SMS', 'SEO e-commerce', 'Hébergement 1 an inclus'],
      },
      {
        name: 'Marketplace',
        icon: Store,
        price: '2 000 000 FCFA',
        description: 'Plateforme multi-vendeurs',
        features: ['Inscription & gestion vendeurs', 'Commission automatique', 'Catalogue multi-vendeurs', 'Paiement sécurisé & split', 'Dashboard vendeur & admin', 'Système d\'avis & notation', 'Chat vendeur-acheteur', 'Gestion des litiges', 'Analytics avancé', 'Support 6 mois inclus'],
      },
    ],
  },
  {
    category: 'Applications Mobiles',
    items: [
      {
        name: 'Application Mobile Simple',
        icon: Smartphone,
        price: '1 000 000 FCFA',
        description: 'App iOS & Android essentielle',
        features: ['Design UI/UX sur mesure', 'Jusqu\'à 8 écrans', 'Notifications push', 'Authentification utilisateur', 'API backend incluse', 'Publication App Store & Play Store', 'Support 3 mois inclus'],
      },
      {
        name: 'Application Mobile Avancée',
        icon: Smartphone,
        price: '2 500 000 FCFA',
        description: 'App complète avec fonctionnalités avancées',
        features: ['Design UI/UX premium', 'Écrans illimités', 'Géolocalisation & cartes', 'Paiement in-app', 'Chat en temps réel', 'Mode hors-ligne', 'Analytics intégré', 'Publication stores', 'Support 6 mois inclus'],
      },
    ],
  },
  {
    category: 'Plateformes Spécialisées',
    items: [
      {
        name: 'Billetterie en Ligne',
        icon: Ticket,
        price: '800 000 FCFA',
        description: 'Vente de billets événementiels',
        features: ['Création d\'événements', 'Génération de QR codes', 'Paiement mobile intégré', 'Validation des billets', 'Dashboard organisateur', 'Statistiques de vente', 'Notifications automatiques', 'Support 3 mois inclus'],
      },
      {
        name: 'Plateforme de Vote en Ligne',
        icon: Vote,
        price: '600 000 FCFA',
        description: 'Votes et sondages sécurisés',
        features: ['Création de scrutins', 'Authentification électeurs', 'Vote sécurisé & anonyme', 'Résultats en temps réel', 'Anti-fraude intégré', 'Export des résultats', 'Dashboard administrateur', 'Support dédié'],
      },
      {
        name: 'Plateforme E-Learning',
        icon: GraduationCap,
        price: '1 500 000 FCFA',
        description: 'Formation en ligne complète',
        features: ['Gestion cours & modules', 'Vidéos & contenus interactifs', 'Quiz & évaluations', 'Certificats automatiques', 'Suivi progression élèves', 'Paiement des formations', 'Forum de discussion', 'Dashboard formateur', 'Support 6 mois inclus'],
      },
      {
        name: 'Site de Streaming',
        icon: Tv,
        price: '2 500 000 FCFA',
        description: 'Plateforme vidéo ou musique',
        features: ['Lecteur intégré HD', 'Système d\'abonnement', 'Gestion des contenus', 'Recommandations IA', 'Profils utilisateurs', 'Téléchargement hors-ligne', 'Paiement récurrent', 'CDN intégré', 'Analytics contenu', 'Support 6 mois inclus'],
      },
      {
        name: 'Site Communautaire / Forum',
        icon: Users,
        price: '500 000 FCFA',
        description: 'Espace d\'échange et de discussion',
        features: ['Profils utilisateurs', 'Fils de discussion', 'Système de modération', 'Messagerie privée', 'Groupes & catégories', 'Système de réputation', 'Notifications', 'Hébergement 1 an inclus'],
      },
    ],
  },
  {
    category: 'Applications Web & SaaS',
    items: [
      {
        name: 'Application Web / SaaS',
        icon: Cloud,
        price: '3 000 000 FCFA',
        description: 'Solution cloud sur mesure',
        features: ['Architecture scalable', 'Dashboard personnalisé', 'Gestion des utilisateurs & rôles', 'API REST complète', 'Intégrations tierces', 'Automatisation workflows', 'Analytics & reporting', 'Sécurité avancée', 'Support 1 an inclus', 'Maintenance incluse'],
      },
    ],
  },
  {
    category: 'Design & Contenu',
    items: [
      {
        name: 'Identité Visuelle',
        icon: Palette,
        price: '150 000 FCFA',
        description: 'Logo et charte graphique complète',
        features: ['3 propositions de logo', 'Charte graphique PDF', 'Palette de couleurs', 'Typographies définies', 'Déclinaisons (carte de visite, entête)', 'Fichiers sources HD'],
      },
      {
        name: 'Design UI/UX',
        icon: FileText,
        price: '250 000 FCFA',
        description: 'Maquettes et prototypes interactifs',
        features: ['Wireframes détaillés', 'Maquettes haute fidélité', 'Prototype interactif Figma', 'Design responsive (mobile + desktop)', 'Guide de composants', '2 révisions incluses'],
      },
      {
        name: 'Création de Contenu',
        icon: BookOpen,
        price: '100 000 FCFA',
        description: 'Rédaction web & visuels',
        features: ['Rédaction de 10 pages web', 'Optimisation SEO des textes', '10 visuels réseaux sociaux', 'Bannières publicitaires', 'Textes adaptés à votre cible'],
      },
    ],
  },
];

const ServiceCatalog = () => (
  <div className="max-w-7xl mx-auto px-6 mb-20">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Catalogue complet des <span className="text-gradient">services</span>
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        Découvrez toutes nos solutions digitales avec des tarifs transparents adaptés au marché africain.
      </p>
    </div>

    {services.map((section) => (
      <div key={section.category} className="mb-16">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <span className="w-1.5 h-8 rounded-full bg-primary" />
          {section.category}
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {section.items.map((service) => (
            <Card
              key={service.name}
              className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-base">{service.name}</CardTitle>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-primary">{service.price}</span>
                </div>
                <ul className="space-y-2 mb-5">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/75">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <a
                    href={`https://wa.me/2250710224023?text=Bonjour%20Ulrich,%20je%20suis%20intéressé%20par%20le%20service%20${encodeURIComponent(service.name)}%20à%20${encodeURIComponent(service.price)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demander un devis
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default ServiceCatalog;
