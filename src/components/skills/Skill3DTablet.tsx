import { motion } from 'framer-motion';

const Skill3DTablet = () => {
  return (
    <div className="relative w-full h-80 md:h-96 flex items-center justify-center">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-pink-500/20 to-secondary/20 blur-3xl rounded-full opacity-40" />
      
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-8 right-16 w-6 h-6 bg-gradient-to-br from-pink-500 to-primary rounded shadow-lg"
        animate={{ 
          rotate: 360,
          y: [-5, 5, -5]
        }}
        transition={{ 
          rotate: { duration: 8, repeat: Infinity, ease: "linear" },
          y: { duration: 2, repeat: Infinity }
        }}
      />
      <motion.div
        className="absolute top-20 left-8 w-5 h-5 rounded-full bg-gradient-to-br from-secondary to-cyan-400 shadow-lg"
        animate={{ 
          scale: [1, 1.2, 1],
          y: [0, -10, 0]
        }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-16 right-8"
        animate={{ 
          rotate: [0, 60, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[18px] border-b-accent shadow-lg" />
      </motion.div>
      <motion.div
        className="absolute bottom-24 left-12 w-8 h-3 bg-gradient-to-r from-primary via-pink-500 to-secondary rounded-full shadow-lg"
        animate={{ 
          scaleX: [1, 1.3, 1],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
      />
      
      {/* Main tablet 3D */}
      <motion.div
        className="relative"
        initial={{ rotateY: -10, rotateX: 5 }}
        whileHover={{ rotateY: 0, rotateX: 0, scale: 1.05 }}
        transition={{ duration: 0.5 }}
        style={{ perspective: 1000 }}
      >
        {/* Tablet frame */}
        <div className="w-48 h-36 md:w-64 md:h-44 rounded-xl bg-gradient-to-br from-muted via-border to-muted p-2 shadow-2xl shadow-primary/30">
          {/* Screen */}
          <div className="w-full h-full rounded-lg bg-background overflow-hidden relative">
            {/* Canvas area */}
            <div className="absolute inset-2 bg-card/50 rounded">
              {/* Drawing animation */}
              <svg className="w-full h-full" viewBox="0 0 100 80">
                <motion.circle
                  cx="30"
                  cy="40"
                  r="15"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: [0, 1, 1, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.rect
                  x="55"
                  y="25"
                  width="25"
                  height="25"
                  fill="none"
                  stroke="hsl(var(--secondary))"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: [0, 1, 1, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                />
                <motion.path
                  d="M45 60 L55 45 L65 60 Z"
                  fill="none"
                  stroke="hsl(var(--accent))"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: [0, 1, 1, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                />
              </svg>
            </div>
            
            {/* Color palette */}
            <div className="absolute bottom-2 left-2 flex gap-1">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <div className="w-3 h-3 rounded-full bg-secondary" />
              <div className="w-3 h-3 rounded-full bg-pink-500" />
              <div className="w-3 h-3 rounded-full bg-accent" />
            </div>
          </div>
        </div>
        
        {/* Stylus pen */}
        <motion.div
          className="absolute -right-6 top-0 origin-bottom-left"
          animate={{ 
            rotate: [-5, 5, -5],
            x: [-2, 2, -2]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-2 h-20 md:h-24 bg-gradient-to-b from-muted via-border to-primary rounded-full shadow-lg transform rotate-45" />
          <div className="absolute bottom-0 left-0 w-2 h-3 bg-primary rounded-b-full" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skill3DTablet;
