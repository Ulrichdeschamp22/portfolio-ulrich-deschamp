import { motion } from 'framer-motion';

const Skill3DMegaphone = () => {
  return (
    <div className="relative w-full h-64 md:h-80 flex items-center justify-center">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-orange-500/10 blur-3xl rounded-full opacity-30" />
      
      {/* Main Marketing Visual - Static with hover */}
      <motion.div 
        className="relative cursor-pointer" 
        style={{ perspective: 1000 }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="relative w-48 h-48 md:w-56 md:h-56">
          {/* Central target/chart */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Outer ring */}
            <div className="absolute w-40 h-40 md:w-48 md:h-48 rounded-full border-2 border-orange-400/30" />
            <div className="absolute w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-orange-400/40" />
            <div className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-orange-400/50" />
            
            {/* Center bullseye */}
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-orange-500 via-primary to-pink-500 shadow-2xl shadow-orange-500/40 flex items-center justify-center">
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/20 flex items-center justify-center">
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-white" />
              </div>
            </div>
          </div>
          
          {/* Bar chart - left side */}
          <div className="absolute bottom-4 left-2 flex items-end gap-1.5">
            <div className="w-3 h-8 md:w-4 md:h-10 bg-gradient-to-t from-primary to-primary/60 rounded-t-sm" />
            <div className="w-3 h-12 md:w-4 md:h-14 bg-gradient-to-t from-orange-500 to-orange-400/60 rounded-t-sm" />
            <div className="w-3 h-6 md:w-4 md:h-8 bg-gradient-to-t from-pink-500 to-pink-400/60 rounded-t-sm" />
          </div>
          
          {/* Trending arrow - right side */}
          <div className="absolute top-4 right-2">
            <svg className="w-12 h-12 md:w-16 md:h-16 text-green-400" viewBox="0 0 48 48" fill="none">
              <path d="M8 36 L20 24 L28 30 L40 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M32 12 L40 12 L40 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          
          {/* Social icons - floating around */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-lg">
            <span className="text-white text-sm">📷</span>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg">
            <span className="text-white text-sm">👍</span>
          </div>
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-7 h-7 rounded-lg bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center shadow-lg">
            <span className="text-white text-xs">💼</span>
          </div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-7 h-7 rounded-lg bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg">
            <span className="text-white text-xs">▶</span>
          </div>
          
          {/* Stats badges */}
          <div className="absolute top-8 left-4 px-2 py-1 bg-card/80 rounded-full border border-border/50 text-xs text-green-400 font-medium">
            +127%
          </div>
          <div className="absolute bottom-8 right-4 px-2 py-1 bg-card/80 rounded-full border border-border/50 text-xs text-primary font-medium">
            10K+
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skill3DMegaphone;
