import { ArrowLeft, Shield, Globe, Mail, Phone, MapPin, FileText, Scale, Server, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const LegalNotice = () => {
  const sections = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Éditeur du site",
      content: (
        <div className="space-y-2">
          <p><strong>Nom :</strong> Ulrich Deschamp</p>
          <p><strong>Statut :</strong> Développeur Full Stack Indépendant</p>
          <p><strong>Adresse :</strong> Abidjan, Côte d'Ivoire</p>
          <p><strong>Téléphone :</strong> +225 0710224023</p>
          <p><strong>Email :</strong> contact@ulrichdeschamp.com</p>
        </div>
      )
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Hébergement",
      content: (
        <div className="space-y-2">
          <p><strong>Hébergeur :</strong> Lovable</p>
          <p><strong>Adresse :</strong> En ligne</p>
          <p><strong>Site web :</strong> <a href="https://lovable.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">lovable.dev</a></p>
        </div>
      )
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Propriété intellectuelle",
      content: (
        <div className="space-y-3">
          <p>
            L'ensemble de ce site relève de la législation ivoirienne et internationale sur le droit d'auteur et la propriété intellectuelle.
          </p>
          <p>
            Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
          </p>
          <p>
            La reproduction de tout ou partie de ce site sur un support électronique ou autre est formellement interdite sauf autorisation écrite de l'éditeur.
          </p>
        </div>
      )
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Données personnelles",
      content: (
        <div className="space-y-3">
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant.
          </p>
          <p>
            Les informations recueillies via le formulaire de contact sont destinées uniquement à l'usage de Ulrich Deschamp pour répondre à vos demandes.
          </p>
          <p>
            Ces données ne sont jamais partagées avec des tiers sans votre consentement explicite.
          </p>
          <p className="font-medium">
            Pour exercer vos droits, contactez-nous à : contact@ulrichdeschamp.com
          </p>
        </div>
      )
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Cookies",
      content: (
        <div className="space-y-3">
          <p>
            Ce site utilise des cookies techniques nécessaires à son bon fonctionnement et à l'amélioration de votre expérience utilisateur.
          </p>
          <p>
            Aucun cookie de traçage publicitaire n'est utilisé sur ce site.
          </p>
          <p>
            Vous pouvez configurer votre navigateur pour bloquer les cookies, mais cela pourrait affecter certaines fonctionnalités du site.
          </p>
        </div>
      )
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Responsabilité",
      content: (
        <div className="space-y-3">
          <p>
            Les informations diffusées sur ce site sont présentées à titre purement informatif et ne peuvent engager la responsabilité de l'éditeur.
          </p>
          <p>
            L'éditeur ne peut être tenu responsable des erreurs, omissions, virus ou résultats obtenus suite à un mauvais usage des contenus.
          </p>
          <p>
            Les liens hypertextes présents sur ce site peuvent renvoyer vers d'autres sites dont l'éditeur n'est pas responsable.
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <title>Mentions Légales - Ulrich Deschamp KOSSONOU | Développeur Web Abidjan</title>
      <meta name="description" content="Mentions légales du portfolio de Ulrich Deschamp KOSSONOU - Développeur web, infographe et photographe professionnel à Abidjan, Côte d'Ivoire" />
      <meta name="robots" content="noindex, follow" />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 relative">
          <Link to="/">
            <Button variant="ghost" className="mb-8 hover-scale">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour à l'accueil
            </Button>
          </Link>
          
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-variant to-primary bg-clip-text text-transparent">
              Mentions Légales
            </h1>
            <p className="text-xl text-muted-foreground">
              Conformément aux dispositions légales, voici les informations relatives à l'identification et aux conditions d'utilisation de ce site web.
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, index) => (
              <Card 
                key={index}
                className="p-8 glass-card hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    {section.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-4 text-foreground">
                      {section.title}
                    </h2>
                    <div className="text-muted-foreground leading-relaxed">
                      {section.content}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Contact CTA */}
          <Card className="max-w-4xl mx-auto mt-12 p-8 bg-gradient-primary text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Une question sur ces mentions légales ?</h3>
              <p className="mb-6 opacity-90">
                N'hésitez pas à me contacter pour toute clarification ou information complémentaire.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/#contact">
                  <Button variant="secondary" size="lg" className="hover-scale">
                    <Mail className="w-5 h-5 mr-2" />
                    Me contacter
                  </Button>
                </Link>
                <a href="tel:+2250710224023">
                  <Button variant="outline" size="lg" className="hover-scale border-white text-white hover:bg-white hover:text-primary">
                    <Phone className="w-5 h-5 mr-2" />
                    Appeler maintenant
                  </Button>
                </a>
              </div>
            </div>
          </Card>

          {/* Last Update */}
          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LegalNotice;