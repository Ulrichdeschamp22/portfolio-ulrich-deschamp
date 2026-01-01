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
      value: "deschamp@gmail.com",
      link: "mailto:deschamp@gmail.com"
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
    <section 
      id="contact" 
      className="py-20 relative overflow-hidden" 
      data-aos="fade-left" 
      data-aos-duration="1200"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse animation-delay-300"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 rellax" 
          data-rellax-speed="1"
        >
          <span className="text-gradient">Contact</span>
        </h2>
        <p 
          className="text-center text-sm md:text-base text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto px-2"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Contactez-moi pour vos projets de développement web, infographie, photographie ou community management à Abidjan et en Côte d'Ivoire
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div data-aos="fade-right" data-aos-delay="300">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-8">Parlons de votre projet</h3>
            <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8">
              Je suis disponible pour discuter de vos besoins et vous accompagner dans la réalisation de vos projets digitaux.
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 rellax"
                  data-rellax-speed={index % 2 === 0 ? "1" : "-1"}
                  data-aos="fade-right"
                  data-aos-delay={400 + index * 100}
                >
                  <div className="p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                    {info.link ? (
                      <a 
                        href={info.link}
                        className="text-foreground hover:text-primary transition-colors story-link"
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
          <div 
            className="glass-card p-8"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div data-aos="fade-up" data-aos-delay="500">
                <Input
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="bg-background/50 border-border/50 focus:border-primary transition-all duration-300"
                />
              </div>
              
              <div data-aos="fade-up" data-aos-delay="600">
                <Input
                  type="email"
                  placeholder="Votre email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  className="bg-background/50 border-border/50 focus:border-primary transition-all duration-300"
                />
              </div>
              
              <div data-aos="fade-up" data-aos-delay="700">
                <Input
                  placeholder="Sujet"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  required
                  className="bg-background/50 border-border/50 focus:border-primary transition-all duration-300"
                />
              </div>
              
              <div data-aos="fade-up" data-aos-delay="800">
                <Textarea
                  placeholder="Votre message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  className="bg-background/50 border-border/50 focus:border-primary resize-none transition-all duration-300"
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                variant="glow" 
                className="w-full hover:scale-105 transition-transform duration-300"
                data-aos="zoom-in"
                data-aos-delay="900"
              >
                <Send className="w-4 h-4 mr-2 animate-pulse" />
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