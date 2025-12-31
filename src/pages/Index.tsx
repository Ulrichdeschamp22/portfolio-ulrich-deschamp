import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Shop from '@/components/Shop';
import Contact from '@/components/Contact';
import FAQ from '@/components/FAQ';
import WhatsAppButton from '@/components/WhatsAppButton';
import Footer from '@/components/Footer';

import LegalSection from '@/components/LegalSection';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Shop />
      <FAQ />
      <Contact />
      <LegalSection />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
      
    </div>
  );
};

export default Index;
