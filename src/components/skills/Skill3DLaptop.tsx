import { motion } from 'framer-motion';

const Skill3DLaptop = () => {
  return (
    <div className="relative w-full h-80 md:h-96 flex items-center justify-center">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-50" />
      
      {/* Floating code particles */}
      <motion.div
        className="absolute top-10 left-10 text-primary/60 font-mono text-xs"
        animate={{ y: [-10, 10, -10], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        {"<div>"}
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-16 text-secondary/60 font-mono text-xs"
        animate={{ y: [10, -10, 10], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
      >
        {"{ }"}
      </motion.div>
      <motion.div
        className="absolute top-20 right-10 text-accent/60 font-mono text-xs"
        animate={{ y: [-5, 15, -5], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      >
        {"</> "}
      </motion.div>
      
      {/* Main laptop 3D */}
      <motion.div
        className="relative"
        initial={{ rotateY: -15, rotateX: 5 }}
        whileHover={{ rotateY: 0, rotateX: 0, scale: 1.05 }}
        transition={{ 
          rotateY: { duration: 0.5 },
          rotateX: { duration: 0.5 }
        }}
        style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
      >
        {/* Laptop screen */}
        <div 
          className="w-56 h-36 md:w-72 md:h-44 rounded-lg bg-gradient-to-br from-primary via-secondary to-primary shadow-2xl shadow-primary/50 border border-primary/30 overflow-hidden"
          style={{ transform: 'rotateX(15deg)' }}
        >
          {/* Screen content - animated code */}
          <div className="p-3 h-full bg-background/90 backdrop-blur-sm">
            <div className="flex gap-1.5 mb-2">
              <div className="w-2 h-2 rounded-full bg-destructive/80" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
              <div className="w-2 h-2 rounded-full bg-green-500/80" />
            </div>
            <motion.div
              className="space-y-1 font-mono text-[8px] md:text-[10px]"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              <p className="text-primary">const <span className="text-secondary">createApp</span> = () =&gt; {"{"}</p>
              <p className="text-muted-foreground pl-3">return (</p>
              <p className="text-accent pl-5">&lt;Dashboard /&gt;</p>
              <p className="text-muted-foreground pl-3">);</p>
              <p className="text-primary">{"}"};</p>
              <p className="text-secondary">export default App;</p>
              <p className="text-primary">import React from 'react';</p>
              <p className="text-accent">// Premium web solutions</p>
            </motion.div>
          </div>
        </div>
        
        {/* Laptop base */}
        <div 
          className="w-64 h-4 md:w-80 md:h-5 bg-gradient-to-r from-muted via-border to-muted rounded-b-xl mx-auto shadow-lg"
          style={{ transform: 'rotateX(75deg) translateY(-2px)' }}
        />
      </motion.div>
    </div>
  );
};

export default Skill3DLaptop;
