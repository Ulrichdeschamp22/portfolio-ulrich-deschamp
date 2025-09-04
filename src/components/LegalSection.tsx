import { Shield, Globe, Mail, Phone, MapPin, FileText, Scale, Server, Eye } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const LegalSection = () => {
  const legalInfo = {
    editor: {
      icon: <Shield className="w-5 h-5" />,
      title: "Éditeur",
      content: {
        nom: "Ulrich Deschamp",
        statut: "Développeur Full Stack Indépendant",
        adresse: "Abidjan, Côte d'Ivoire",
        telephone: "+225 0710224023",
        email: "contact@ulrichdeschamp.com"
      }
    },
    hosting: {
      icon: <Server className="w-5 h-5" />,
      title: "Hébergement",
      content: {
        description: "Ce site est hébergé sur une infrastructure cloud sécurisée garantissant une disponibilité optimale et la protection de vos données."
      }
    },
    data: {
      icon: <Eye className="w-5 h-5" />,
      title: "Données",
      content: "Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Les informations collectées sont uniquement utilisées pour répondre à vos demandes."
    },
    intellectual: {
      icon: <Globe className="w-5 h-5" />,
      title: "Propriété",
      content: "Tous les droits de reproduction sont réservés. La reproduction de tout ou partie de ce site est interdite sans autorisation."
    }
  };

  return (
    <section id="legal" className="py-16 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-primary-variant to-primary bg-clip-text text-transparent">
            Mentions Légales
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Informations légales et conditions d'utilisation de ce site web
          </p>
        </div>

        <Card className="max-w-5xl mx-auto p-8 glass-card">
          <Tabs defaultValue="editor" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="editor" className="flex items-center gap-2">
                {legalInfo.editor.icon}
                <span className="hidden sm:inline">{legalInfo.editor.title}</span>
              </TabsTrigger>
              <TabsTrigger value="hosting" className="flex items-center gap-2">
                {legalInfo.hosting.icon}
                <span className="hidden sm:inline">{legalInfo.hosting.title}</span>
              </TabsTrigger>
              <TabsTrigger value="data" className="flex items-center gap-2">
                {legalInfo.data.icon}
                <span className="hidden sm:inline">{legalInfo.data.title}</span>
              </TabsTrigger>
              <TabsTrigger value="intellectual" className="flex items-center gap-2">
                {legalInfo.intellectual.icon}
                <span className="hidden sm:inline">{legalInfo.intellectual.title}</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="editor" className="space-y-4">
              <h3 className="text-xl font-bold mb-4 text-foreground">Éditeur du site</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="flex items-center gap-2">
                    <strong className="text-primary">Nom :</strong> 
                    <span className="text-muted-foreground">{legalInfo.editor.content.nom}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <strong className="text-primary">Statut :</strong> 
                    <span className="text-muted-foreground">{legalInfo.editor.content.statut}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">{legalInfo.editor.content.adresse}</span>
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    <a href={`tel:${legalInfo.editor.content.telephone}`} className="text-primary hover:underline">
                      {legalInfo.editor.content.telephone}
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    <a href={`mailto:${legalInfo.editor.content.email}`} className="text-primary hover:underline">
                      {legalInfo.editor.content.email}
                    </a>
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="hosting" className="space-y-4">
              <h3 className="text-xl font-bold mb-4 text-foreground">Hébergement</h3>
              <div className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  {legalInfo.hosting.content.description}
                </p>
              </div>
            </TabsContent>

            <TabsContent value="data" className="space-y-4">
              <h3 className="text-xl font-bold mb-4 text-foreground">Protection des données</h3>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {legalInfo.data.content}
                </p>
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                  <p className="text-sm font-medium text-primary mb-2">Vos droits :</p>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Droit d'accès à vos données personnelles</li>
                    <li>• Droit de rectification des informations inexactes</li>
                    <li>• Droit à l'effacement de vos données</li>
                    <li>• Droit à la portabilité de vos données</li>
                  </ul>
                </div>
                <p className="text-sm text-muted-foreground">
                  Pour exercer vos droits, contactez-nous à : 
                  <a href="mailto:contact@ulrichdeschamp.com" className="text-primary hover:underline ml-1">
                    contact@ulrichdeschamp.com
                  </a>
                </p>
              </div>
            </TabsContent>

            <TabsContent value="intellectual" className="space-y-4">
              <h3 className="text-xl font-bold mb-4 text-foreground">Propriété intellectuelle</h3>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {legalInfo.intellectual.content}
                </p>
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-primary">© {new Date().getFullYear()} Ulrich Deschamp</strong> - 
                    L'ensemble des éléments de ce site (textes, images, code source) est protégé par le droit d'auteur.
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Les marques, logos et signes distinctifs affichés sur ce site sont la propriété exclusive de leurs détenteurs respectifs.
                </p>
              </div>
            </TabsContent>
          </Tabs>

          {/* Quick Links */}
          <div className="mt-8 pt-8 border-t border-border/50">
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Politique de confidentialité
              </a>
              <span className="text-muted-foreground">•</span>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Conditions d'utilisation
              </a>
              <span className="text-muted-foreground">•</span>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Gestion des cookies
              </a>
            </div>
          </div>
        </Card>

        {/* Last Update */}
        <div className="text-center mt-8">
          <p className="text-xs text-muted-foreground">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default LegalSection;