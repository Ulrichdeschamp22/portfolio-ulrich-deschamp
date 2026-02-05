import { motion } from 'framer-motion';

const Skill3DMegaphone = () => {
  return (
    <div className="relative w-full h-80 md:h-96 flex items-center justify-center">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-pink-500/15 blur-3xl rounded-full opacity-50" />
      
      {/* Sound waves */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-pink-400/30"
          style={{ width: 80 + i * 40, height: 80 + i * 40 }}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}
      
      {/* Orbiting social icons */}
      <motion.div
        className="absolute w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <motion.div
          className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-lg"
          whileHover={{ scale: 1.2 }}
        >
          <span className="text-white text-xs">📷</span>
        </motion.div>
        <motion.div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg"
        >
          <span className="text-white text-xs">📘</span>
        </motion.div>
        <motion.div
          className="absolute top-1/2 left-4 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center shadow-lg"
        >
          <span className="text-white text-xs">💼</span>
        </motion.div>
        <motion.div
          className="absolute top-1/2 right-4 -translate-y-1/2 w-7 h-7 rounded-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center shadow-lg"
        >
          <span className="text-white text-xs">✖</span>
        </motion.div>
      </motion.div>

      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-pink-400/60"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
      
      {/* Main megaphone 3D */}
      <motion.div
        className="relative z-10"
        initial={{ rotateY: 10, rotateZ: -15 }}
        whileHover={{ rotateY: 0, rotateZ: 0, scale: 1.1 }}
        transition={{ duration: 0.5 }}
        style={{ perspective: 1000 }}
      >
        {/* Megaphone body */}
        <div className="relative">
          {/* Cone part */}
          <div 
            className="w-28 h-20 md:w-36 md:h-24 bg-gradient-to-r from-pink-500 via-primary to-pink-600 rounded-r-full shadow-2xl shadow-pink-500/50"
            style={{ 
              clipPath: 'polygon(0 30%, 100% 0%, 100% 100%, 0 70%)',
              transform: 'perspective(500px) rotateY(-10deg)'
            }}
          />
          
          {/* Handle */}
          <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-8 h-12 md:w-10 md:h-14 bg-gradient-to-b from-muted to-border rounded-lg shadow-lg" />
          
          {/* Sound emission glow */}
          <motion.div
            className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-16 bg-gradient-to-r from-pink-400/50 to-transparent blur-md"
            animate={{ 
              scaleX: [1, 1.5, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Skill3DMegaphone;
