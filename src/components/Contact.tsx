import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the email
    toast({
      title: "Message envoyé !",
      description: "Je vous répondrai dans les plus brefs délais.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Téléphone / WhatsApp",
      value: "+225 0710224023",
      link: "tel:+2250710224023"
    },
    {
      icon: Mail,
      label: "Email principal",
      value: "deschamp.deschamp222@gmail.com",
      link: "mailto:deschamp.deschamp222@gmail.com"
    },
    {
      icon: Mail,
      label: "Email support",
      value: "support@ulrichdeschampkossonou.online",
      link: "mailto:support@ulrichdeschampkossonou.online"
    },
    {
      icon: MapPin,
      label: "Localisation",
      value: "Abidjan, Côte d'Ivoire",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-gradient">Contact</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Parlons de votre projet</h3>
            <p className="text-muted-foreground mb-8">
              Je suis disponible pour discuter de vos besoins et vous accompagner dans la réalisation de vos projets digitaux.
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                    {info.link ? (
                      <a 
                        href={info.link}
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="glass-card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="Votre email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
              </div>
              
              <div>
                <Input
                  placeholder="Sujet"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  required
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
              </div>
              
              <div>
                <Textarea
                  placeholder="Votre message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  className="bg-background/50 border-border/50 focus:border-primary resize-none"
                />
              </div>
              
              <Button type="submit" size="lg" variant="glow" className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Envoyer le message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;