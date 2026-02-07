import { motion } from 'framer-motion';

const Skill3DTablet = () => {
  return (
    <div className="relative w-full h-64 md:h-80 flex items-center justify-center">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-pink-500/15 to-secondary/15 blur-3xl rounded-full opacity-40" />
      
      {/* Static geometric shapes */}
      <div className="absolute top-6 right-14 w-5 h-5 bg-gradient-to-br from-pink-500 to-primary rounded shadow-md rotate-12" />
      <div className="absolute top-16 left-6 w-4 h-4 rounded-full bg-gradient-to-br from-secondary to-cyan-400 shadow-md" />
      <div className="absolute bottom-14 right-6 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[14px] border-b-accent" />
      <div className="absolute bottom-20 left-10 w-6 h-2 bg-gradient-to-r from-primary via-pink-500 to-secondary rounded-full" />
      
      {/* Main tablet 3D */}
      <motion.div
        className="relative cursor-pointer"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{ perspective: 1000 }}
      >
        {/* Tablet frame */}
        <div className="w-44 h-32 md:w-60 md:h-40 rounded-xl bg-gradient-to-br from-muted via-border to-muted p-2 shadow-xl shadow-primary/20">
          {/* Screen */}
          <div className="w-full h-full rounded-lg bg-background overflow-hidden relative">
            {/* Canvas area */}
            <div className="absolute inset-2 bg-card/50 rounded">
              {/* Static drawing shapes */}
              <svg className="w-full h-full" viewBox="0 0 100 80">
                <circle
                  cx="28"
                  cy="40"
                  r="12"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  opacity="0.8"
                />
                <rect
                  x="52"
                  y="28"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="hsl(var(--secondary))"
                  strokeWidth="2"
                  opacity="0.8"
                />
                <path
                  d="M42 60 L50 48 L58 60 Z"
                  fill="none"
                  stroke="hsl(var(--accent))"
                  strokeWidth="2"
                  opacity="0.8"
                />
              </svg>
            </div>
            
            {/* Color palette */}
            <div className="absolute bottom-1.5 left-2 flex gap-1">
              <div className="w-2.5 h-2.5 rounded-full bg-primary" />
              <div className="w-2.5 h-2.5 rounded-full bg-secondary" />
              <div className="w-2.5 h-2.5 rounded-full bg-pink-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-accent" />
            </div>
          </div>
        </div>
        
        {/* Stylus pen - Static */}
        <div className="absolute -right-5 top-1 origin-bottom-left rotate-45">
          <div className="w-1.5 h-16 md:h-20 bg-gradient-to-b from-muted via-border to-primary rounded-full shadow-md" />
          <div className="absolute bottom-0 left-0 w-1.5 h-2.5 bg-primary rounded-b-full" />
        </div>
      </motion.div>
    </div>
  );
};

export default Skill3DTablet;
