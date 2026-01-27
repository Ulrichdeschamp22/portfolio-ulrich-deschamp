import { useEffect, useRef } from 'react';

interface HeroBackgroundProps {
  isMobile: boolean;
}

const HeroBackground = ({ isMobile }: HeroBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

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
      const elements = container.querySelectorAll('.floating-code');
      elements.forEach(el => el.remove());
    };
  }, [isMobile]);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden">
      {/* Matrix-style code rain effect */}
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
  );
};

export default HeroBackground;
