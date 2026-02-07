import { motion } from 'framer-motion';

const Skill3DLaptop = () => {
  return (
    <div className="relative w-full h-64 md:h-80 flex items-center justify-center">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-primary/15 blur-3xl rounded-full opacity-40" />
      
      {/* Static code particles */}
      <div className="absolute top-8 left-8 text-primary/40 font-mono text-xs">
        {"<div>"}
      </div>
      <div className="absolute bottom-16 right-12 text-secondary/40 font-mono text-xs">
        {"{ }"}
      </div>
      <div className="absolute top-16 right-8 text-accent/40 font-mono text-xs">
        {"</> "}
      </div>
      
      {/* Main laptop 3D */}
      <motion.div
        className="relative cursor-pointer"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
      >
        {/* Laptop screen */}
        <div 
          className="w-48 h-32 md:w-64 md:h-40 rounded-lg bg-gradient-to-br from-primary via-secondary to-primary shadow-xl shadow-primary/30 border border-primary/20 overflow-hidden"
          style={{ transform: 'rotateX(10deg)' }}
        >
          {/* Screen content */}
          <div className="p-3 h-full bg-background/95 backdrop-blur-sm">
            <div className="flex gap-1.5 mb-2">
              <div className="w-2 h-2 rounded-full bg-destructive/70" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
              <div className="w-2 h-2 rounded-full bg-green-500/70" />
            </div>
            <div className="space-y-1 font-mono text-[8px] md:text-[9px]">
              <p className="text-primary">const <span className="text-secondary">createApp</span> = () =&gt; {"{"}</p>
              <p className="text-muted-foreground pl-2">return (</p>
              <p className="text-accent pl-4">&lt;Dashboard /&gt;</p>
              <p className="text-muted-foreground pl-2">);</p>
              <p className="text-primary">{"}"};</p>
              <p className="text-secondary">export default App;</p>
            </div>
          </div>
        </div>
        
        {/* Laptop base */}
        <div 
          className="w-56 h-3 md:w-72 md:h-4 bg-gradient-to-r from-muted via-border to-muted rounded-b-xl mx-auto shadow-md"
          style={{ transform: 'rotateX(70deg) translateY(-1px)' }}
        />
      </motion.div>
    </div>
  );
};

export default Skill3DLaptop;
