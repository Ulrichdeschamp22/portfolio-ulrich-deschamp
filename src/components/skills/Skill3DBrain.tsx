import { motion } from 'framer-motion';

const Skill3DBrain = () => {
  return (
    <div className="relative w-full h-80 md:h-96 flex items-center justify-center">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-pink-500/20 blur-3xl rounded-full opacity-40" />
      
      {/* Floating gears */}
      <motion.div
        className="absolute top-8 right-12"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <svg className="w-8 h-8 text-primary/50" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97s-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65A.488.488 0 0 0 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.58-1.69.98l-2.49-1a.566.566 0 0 0-.18-.03c-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.63c-.04.34-.07.67-.07 1s.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46a.5.5 0 0 0 .61.22l2.49-1.01c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1.01a.5.5 0 0 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66z"/>
        </svg>
      </motion.div>
      
      <motion.div
        className="absolute bottom-16 left-8"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        <svg className="w-6 h-6 text-secondary/40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97s-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65A.488.488 0 0 0 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.58-1.69.98l-2.49-1a.566.566 0 0 0-.18-.03c-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.63c-.04.34-.07.67-.07 1s.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46a.5.5 0 0 0 .61.22l2.49-1.01c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1.01a.5.5 0 0 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66z"/>
        </svg>
      </motion.div>

      {/* Particle effects */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-pink-400"
          style={{
            left: `${30 + Math.random() * 40}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}
      
      {/* Main brain 3D */}
      <motion.div
        className="relative"
        initial={{ rotateY: 15, rotateX: -5 }}
        whileHover={{ rotateY: 0, rotateX: 0, scale: 1.08 }}
        animate={{ y: [0, -8, 0] }}
        transition={{ 
          y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
          rotateY: { duration: 0.5 },
        }}
        style={{ perspective: 1000 }}
      >
        {/* Brain shape */}
        <div className="relative w-40 h-40 md:w-52 md:h-52">
          {/* Outer glow ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-pink-500/30"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Main brain */}
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-pink-500 via-primary to-secondary shadow-2xl shadow-pink-500/50 flex items-center justify-center overflow-hidden">
            {/* Circuit lines */}
            <svg className="absolute w-full h-full opacity-40" viewBox="0 0 100 100">
              <motion.path
                d="M20 50 L40 50 L50 30 L60 50 L80 50"
                stroke="white"
                strokeWidth="1"
                fill="none"
                animate={{ pathLength: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.path
                d="M30 30 L50 50 L70 30"
                stroke="white"
                strokeWidth="1"
                fill="none"
                animate={{ pathLength: [0, 1, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              />
              <motion.path
                d="M30 70 L50 50 L70 70"
                stroke="white"
                strokeWidth="1"
                fill="none"
                animate={{ pathLength: [0, 1, 0] }}
                transition={{ duration: 2.8, repeat: Infinity, delay: 1 }}
              />
            </svg>
            
            {/* Center pulse */}
            <motion.div
              className="w-8 h-8 rounded-full bg-white/30"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
          
          {/* Orbiting nodes */}
          <motion.div
            className="absolute w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50"
            style={{ top: '10%', left: '50%' }}
            animate={{ 
              rotate: 360,
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Skill3DBrain;
