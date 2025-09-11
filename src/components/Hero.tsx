import { Button } from '@/components/ui/button';
import { ChevronDown, Code2, Terminal, Cpu, Database, Globe, Server } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

// Configuration for the animated background
const CONFIG = {
  codeChars: ['<', '/>', '{', '}', '()', '[]', '=', ';', 'const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while', 'class', '=>', '...', '&&', '||', '!', '?', ':', 'import', 'export', 'async', 'await'],
  colors: {
    primary: 'var(--primary)',
    secondary: 'var(--secondary)',
    accent: 'var(--accent)'
  },
  mobile: {
    particleCount: 15,
    codeStreamCount: 8
  },
  desktop: {
    particleCount: 30,
    codeStreamCount: 20
  }
};

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || prefersReducedMotion) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const isMobile = window.innerWidth < 768;
    const config = isMobile ? CONFIG.mobile : CONFIG.desktop;

    // Code rain particles
    class CodeParticle {
      x: number;
      y: number;
      speed: number;
      char: string;
      opacity: number;
      size: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height - canvas.height;
        this.speed = Math.random() * 0.5 + 0.2;
        this.char = CONFIG.codeChars[Math.floor(Math.random() * CONFIG.codeChars.length)];
        this.opacity = Math.random() * 0.3 + 0.1;
        this.size = Math.random() * 14 + 10;
      }

      update() {
        this.y += this.speed;
        if (this.y > canvas.height) {
          this.y = -20;
          this.x = Math.random() * canvas.width;
          this.char = CONFIG.codeChars[Math.floor(Math.random() * CONFIG.codeChars.length)];
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = `hsl(${CONFIG.colors.primary})`;
        ctx.font = `${this.size}px 'Courier New', monospace`;
        ctx.fillText(this.char, this.x, this.y);
        ctx.restore();
      }
    }

    // Floating tech icons
    class TechIcon {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      rotation: number;
      rotationSpeed: number;
      opacity: number;
      icon: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.size = Math.random() * 20 + 15;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.01;
        this.opacity = Math.random() * 0.15 + 0.05;
        this.icon = ['⚡', '💻', '🚀', '⚙️', '📡', '🔧'][Math.floor(Math.random() * 6)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.rotation += this.rotationSpeed;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.font = `${this.size}px Arial`;
        ctx.fillText(this.icon, -this.size/2, this.size/2);
        ctx.restore();
      }
    }

    // Initialize particles
    const codeParticles: CodeParticle[] = [];
    const techIcons: TechIcon[] = [];

    for (let i = 0; i < config.codeStreamCount; i++) {
      codeParticles.push(new CodeParticle());
    }

    for (let i = 0; i < Math.floor(config.particleCount / 3); i++) {
      techIcons.push(new TechIcon());
    }

    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw and update code particles
      codeParticles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw and update tech icons
      techIcons.forEach(icon => {
        icon.update();
        icon.draw();
      });

      // Draw connection lines between nearby tech icons
      techIcons.forEach((icon1, i) => {
        techIcons.slice(i + 1).forEach(icon2 => {
          const distance = Math.sqrt((icon1.x - icon2.x) ** 2 + (icon1.y - icon2.y) ** 2);
          if (distance < 150) {
            ctx.save();
            ctx.globalAlpha = 0.05 * (1 - distance / 150);
            ctx.strokeStyle = `hsl(${CONFIG.colors.primary})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(icon1.x, icon1.y);
            ctx.lineTo(icon2.x, icon2.y);
            ctx.stroke();
            ctx.restore();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [prefersReducedMotion]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20" data-aos="fade-up" data-aos-duration="1500">
      {/* Animated background layers */}
      <div className="absolute inset-0 z-0">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-animated" />
        
        {/* Code rain canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 opacity-60"
          aria-hidden="true"
        />
        
        {/* Tech icons floating (CSS animation fallback for reduced motion) */}
        {prefersReducedMotion && (
          <div className="absolute inset-0 overflow-hidden">
            <div className="floating-icon absolute top-1/4 left-1/4 text-primary/10">
              <Code2 size={40} />
            </div>
            <div className="floating-icon-delayed absolute top-3/4 right-1/4 text-primary/10">
              <Terminal size={35} />
            </div>
            <div className="floating-icon absolute bottom-1/4 left-1/3 text-primary/10">
              <Database size={30} />
            </div>
            <div className="floating-icon-delayed absolute top-1/3 right-1/3 text-primary/10">
              <Server size={35} />
            </div>
            <div className="floating-icon absolute top-1/2 left-1/6 text-primary/10">
              <Cpu size={32} />
            </div>
            <div className="floating-icon-delayed absolute bottom-1/3 right-1/6 text-primary/10">
              <Globe size={38} />
            </div>
          </div>
        )}
        
        {/* Overlay gradient for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          
          {/* Text Content - Left on Desktop, Below on Mobile/Tablet */}
          <div className="order-2 lg:order-1 text-center lg:text-left animate-fade-in" data-aos="fade-right" data-aos-delay="200">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 rellax" data-rellax-speed="1">
              <span className="text-gradient">Ulrich Deschamp</span>
              <span className="text-gradient block lg:inline"> KOSSONOU</span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-6 animate-fade-in animation-delay-100">
              Développeur Web Abidjan • Infographe • Photographe • Community Manager Côte d'Ivoire
            </h2>
            
            <p className="text-base sm:text-lg lg:text-xl text-foreground/80 mb-8 animate-fade-in animation-delay-200">
              Expert digital basé à Abidjan, j'accompagne entreprises et particuliers dans leur transformation digitale. 
              Création site web Côte d'Ivoire avec plus de 5 ans d'expérience en développement web, design graphique et marketing digital.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in animation-delay-300">
              <Button size="xl" variant="glow" asChild>
                <a href="#projects">Voir mes projets</a>
              </Button>
              <Button size="xl" variant="outline" asChild>
                <a href="#contact">Me contacter</a>
              </Button>
            </div>
          </div>

          {/* Image - Right on Desktop, Top on Mobile/Tablet */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-scale-in animation-delay-100 rellax" data-rellax-speed="-2">
            <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[28rem] xl:w-[28rem] xl:h-[32rem] group">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-pulse"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                <img 
                  src="/lovable-uploads/4280103e-85a8-47b1-89ed-03aed6d7493d.png" 
                  alt="Ulrich Deschamp KOSSONOU - Développeur Web et Expert Digital à Abidjan, Côte d'Ivoire - Portrait Professionnel" 
                  className="w-full h-full object-contain bg-background"
                  loading="eager"
                  width="448"
                  height="512"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="absolute -inset-1 bg-gradient-primary rounded-2xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-500 -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-primary" />
      </div>
    </section>
  );
};

export default Hero;