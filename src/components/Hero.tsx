import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!containerRef.current || isMobile) return;

    const container = containerRef.current;
    
    // Create multiple code snippets that will float
    const codeSnippets = [
      'const app = () => {',
      '  return <div>',
      '    <h1>Hello World</h1>',
      '  </div>',
      '}',
      'function calculate(x, y) {',
      '  return x + y;',
      '}',
      'import React from "react"',
      'export default App',
      'npm install',
      'git commit -m "update"',
      '<html>',
      '<body>',
      '</body>',
      '</html>',
      'if (condition) {',
      '  execute();',
      '}',
      'async function getData() {',
      '  const res = await fetch()',
      '  return res.json()',
      '}',
      '.container {',
      '  display: flex;',
      '  justify-content: center;',
      '}',
      '@media (max-width: 768px) {',
      '  .responsive { }',
      '}'
    ];

    // Create floating code elements
    codeSnippets.forEach((snippet, index) => {
      const codeElement = document.createElement('div');
      codeElement.className = 'floating-code';
      codeElement.textContent = snippet;
      codeElement.style.cssText = `
        position: absolute;
        font-family: 'Courier New', monospace;
        font-size: ${Math.random() * 8 + 12}px;
        color: hsl(var(--primary) / 0.2);
        white-space: nowrap;
        pointer-events: none;
        animation: float-code ${20 + Math.random() * 10}s linear infinite;
        animation-delay: ${index * 0.5}s;
        top: ${Math.random() * 100}%;
        left: ${-100 - Math.random() * 200}px;
      `;
      container.appendChild(codeElement);
    });

    return () => {
      // Cleanup
      const elements = container.querySelectorAll('.floating-code');
      elements.forEach(el => el.remove());
    };
  }, [isMobile]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 px-4 sm:px-6 lg:px-8" data-aos="fade-up" data-aos-duration="1500">
      {/* Animated code background */}
      <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden">
        {/* Matrix-style code rain effect - visible on all devices */}
        <div className="code-rain-container absolute inset-0 overflow-hidden">
          {Array.from({ length: isMobile ? 6 : 12 }).map((_, i) => (
            <div
              key={i}
              className="code-rain-column"
              style={{
                left: `${i * (isMobile ? 15 : 8)}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${15 + i * 2}s`
              }}
            >
              <span className="code-char">0</span>
              <span className="code-char">1</span>
              <span className="code-char">{`{`}</span>
              <span className="code-char">{`}`}</span>
              <span className="code-char">&lt;</span>
              <span className="code-char">/&gt;</span>
              <span className="code-char">( )</span>
              <span className="code-char">[ ]</span>
              <span className="code-char">=</span>
              <span className="code-char">;</span>
            </div>
          ))}
        </div>

        {/* Terminal window decorations */}
        <div className="absolute top-20 left-10 opacity-10 transform rotate-12 hidden lg:block">
          <div className="w-64 h-40 bg-primary/10 rounded-lg border border-primary/20">
            <div className="flex gap-2 p-2">
              <div className="w-3 h-3 rounded-full bg-red-500/30"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/30"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/30"></div>
            </div>
            <div className="p-2 text-xs font-mono text-primary/30">
              <div>$ npm run dev</div>
              <div>✓ Server running...</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-20 right-10 opacity-10 transform -rotate-12 hidden lg:block">
          <div className="w-72 h-48 bg-primary/10 rounded-lg border border-primary/20">
            <div className="flex gap-2 p-2">
              <div className="w-3 h-3 rounded-full bg-red-500/30"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/30"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/30"></div>
            </div>
            <div className="p-2 text-xs font-mono text-primary/30">
              <div>&lt;div className="app"&gt;</div>
              <div>  &lt;h1&gt;Portfolio&lt;/h1&gt;</div>
              <div>&lt;/div&gt;</div>
            </div>
          </div>
        </div>

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/95" />
        
        {/* Additional overlay for better text contrast */}
        <div className="absolute inset-0 bg-background/40 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="container mx-auto z-10 relative max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          
          {/* Text Content - Left side */}
          <div className="text-center lg:text-left animate-fade-in order-2 lg:order-1" data-aos="fade-right" data-aos-delay="200">
            {/* Name prominently displayed */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 rellax leading-tight text-gradient" data-rellax-speed="1">
              Ulrich Deschamp KOSSONOU
            </h1>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-foreground/90">
              Développeur Web Full Stack, community manager, Infographe & Photographe à Abidjan
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg text-foreground/70 mb-8 max-w-xl mx-auto lg:mx-0">
              Expert en développement web et technologies digitales basé à Abidjan, Côte d'Ivoire. Je crée des solutions web modernes et performantes pour entreprises et particuliers. Spécialisé en React, TypeScript, Node.js et design graphique professionnel.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" variant="glow" asChild className="px-8">
                <a href="#projects">Voir mes projets</a>
              </Button>
              <Button size="lg" variant="outline" asChild className="px-8">
                <a href="#contact">Me contacter</a>
              </Button>
            </div>
          </div>

          {/* Image - Right side */}
          <div className="flex justify-center lg:justify-end animate-scale-in animation-delay-100 rellax order-1 lg:order-2" data-rellax-speed="-2">
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[28rem] lg:w-96 lg:h-[32rem] group">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-pulse"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                <img 
                  src="/lovable-uploads/4280103e-85a8-47b1-89ed-03aed6d7493d.png" 
                  alt="Ulrich Deschamp KOSSONOU - Expert Digital Abidjan, Développeur Web Expert, Vibe Coder et Freelance Premium en Côte d'Ivoire" 
                  className="w-full h-full object-cover bg-background"
                  loading="eager"
                  width="384"
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