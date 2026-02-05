import { motion } from 'framer-motion';

const Skill3DCamera = () => {
  return (
    <div className="relative w-full h-80 md:h-96 flex items-center justify-center">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-orange-500/15 to-secondary/20 blur-3xl rounded-full opacity-40" />
      
      {/* Floating polaroids */}
      <motion.div
        className="absolute top-4 right-8 w-14 h-16 bg-white rounded shadow-lg p-1"
        animate={{ 
          y: [-10, 0, -10],
          rotate: [5, -5, 5],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <div className="w-full h-10 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-sm" />
        <div className="h-4 flex items-center justify-center">
          <div className="text-[5px] text-gray-400">Photo 1</div>
        </div>
      </motion.div>
      
      <motion.div
        className="absolute top-16 left-6 w-12 h-14 bg-white rounded shadow-lg p-1"
        animate={{ 
          y: [0, -15, 0],
          rotate: [-8, 3, -8],
          opacity: [0.5, 0.9, 0.5]
        }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
      >
        <div className="w-full h-8 bg-gradient-to-br from-orange-300/40 to-pink-300/40 rounded-sm" />
        <div className="h-4" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-20 right-12 w-10 h-12 bg-white rounded shadow-lg p-0.5"
        animate={{ 
          y: [-5, 10, -5],
          rotate: [10, -3, 10],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      >
        <div className="w-full h-7 bg-gradient-to-br from-secondary/30 to-primary/30 rounded-sm" />
      </motion.div>
      
      {/* Main camera 3D */}
      <motion.div
        className="relative z-10"
        initial={{ rotateY: 15, rotateX: -5 }}
        whileHover={{ rotateY: 0, rotateX: 0, scale: 1.08 }}
        animate={{ y: [0, -8, 0] }}
        transition={{ 
          y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
        }}
        style={{ perspective: 1000 }}
      >
        {/* Camera body */}
        <div className="relative w-40 h-28 md:w-52 md:h-36 bg-gradient-to-br from-muted via-border to-muted rounded-xl shadow-2xl shadow-primary/30">
          {/* Top section with viewfinder */}
          <div className="absolute -top-4 left-6 w-12 h-6 md:w-16 md:h-8 bg-gradient-to-b from-border to-muted rounded-t-lg shadow-md">
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-4 h-3 md:w-6 md:h-4 bg-background rounded-sm" />
          </div>
          
          {/* Lens */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-gray-800 via-gray-900 to-black shadow-inner">
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-primary via-secondary to-primary shadow-lg">
                <div className="w-full h-full rounded-full bg-black/50 flex items-center justify-center">
                  <motion.div
                    className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-white/20"
                    animate={{ scale: [1, 0.8, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Flash unit */}
          <motion.div
            className="absolute top-2 right-4 w-6 h-4 md:w-8 md:h-5 rounded bg-gradient-to-r from-yellow-200 to-yellow-100"
            animate={{ 
              opacity: [0.3, 1, 0.3],
              boxShadow: [
                '0 0 0px rgba(255,255,255,0)',
                '0 0 20px rgba(255,255,255,0.8)',
                '0 0 0px rgba(255,255,255,0)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          
          {/* Mode dial */}
          <div className="absolute top-2 right-14 md:right-16 w-5 h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-b from-muted to-border shadow-md">
            <div className="absolute top-1 left-1/2 w-0.5 h-2 bg-foreground/50 rounded" />
          </div>
          
          {/* Grip texture */}
          <div className="absolute right-1 top-1/2 -translate-y-1/2 w-6 h-20 md:h-24 bg-gradient-to-r from-border to-muted rounded-r-lg">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-full h-px bg-muted-foreground/20 mt-3" />
            ))}
          </div>
          
          {/* Screen on back (visible as edge) */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-2 md:w-24 md:h-2.5 bg-background/50 rounded" />
        </div>
      </motion.div>
    </div>
  );
};

export default Skill3DCamera;
