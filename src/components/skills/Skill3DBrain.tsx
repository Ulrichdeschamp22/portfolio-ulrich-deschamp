import { motion } from 'framer-motion';

const Skill3DBrain = () => {
  return (
    <div className="relative w-full h-64 md:h-80 flex items-center justify-center">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-pink-500/10 blur-3xl rounded-full opacity-30" />
      
      {/* Main Robot AI - Static with hover */}
      <motion.div 
        className="relative cursor-pointer" 
        style={{ perspective: 1000 }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Robot body */}
        <div className="relative w-40 h-48 md:w-48 md:h-56">
          {/* Robot head */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800 rounded-2xl shadow-2xl shadow-primary/30 border border-slate-500/30">
            {/* Eyes */}
            <div className="absolute top-6 left-3 w-5 h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-br from-cyan-400 to-primary shadow-lg shadow-cyan-400/50" />
            <div className="absolute top-6 right-3 w-5 h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-br from-cyan-400 to-primary shadow-lg shadow-cyan-400/50" />
            {/* Mouth/Speaker */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-3 md:w-14 md:h-4 bg-slate-900 rounded-full flex items-center justify-center gap-1 px-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
              <div className="w-1.5 h-2 rounded-full bg-primary/80" />
              <div className="w-1.5 h-1 rounded-full bg-primary/40" />
              <div className="w-1.5 h-2 rounded-full bg-primary/70" />
            </div>
            {/* Antenna */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-1 h-5 bg-slate-600">
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50" />
            </div>
          </div>
          
          {/* Robot body */}
          <div className="absolute top-24 md:top-28 left-1/2 -translate-x-1/2 w-28 h-20 md:w-32 md:h-24 bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800 rounded-xl shadow-xl border border-slate-500/30">
            {/* Chest display */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-10 md:w-20 md:h-12 bg-slate-900 rounded-lg flex items-center justify-center">
              <div className="text-xs md:text-sm font-mono text-primary/80">AI</div>
            </div>
            {/* Buttons */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <div className="w-2 h-2 rounded-full bg-yellow-400" />
              <div className="w-2 h-2 rounded-full bg-red-400" />
            </div>
          </div>
          
          {/* Arms */}
          <div className="absolute top-28 md:top-32 -left-2 w-4 h-12 md:w-5 md:h-14 bg-gradient-to-b from-slate-600 to-slate-700 rounded-full" />
          <div className="absolute top-28 md:top-32 -right-2 w-4 h-12 md:w-5 md:h-14 bg-gradient-to-b from-slate-600 to-slate-700 rounded-full" />
        </div>
        
        {/* Floating circuit lines - decorative static */}
        <div className="absolute -inset-6 opacity-20 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 200 200">
            <path d="M20 100 L60 100 L80 60 L120 60 L140 100 L180 100" stroke="currentColor" strokeWidth="1" fill="none" className="text-primary" />
            <path d="M100 20 L100 60 L140 100 L100 140 L100 180" stroke="currentColor" strokeWidth="1" fill="none" className="text-cyan-400" />
            <circle cx="80" cy="60" r="4" fill="currentColor" className="text-primary" />
            <circle cx="120" cy="60" r="4" fill="currentColor" className="text-primary" />
            <circle cx="140" cy="100" r="4" fill="currentColor" className="text-cyan-400" />
          </svg>
        </div>
      </motion.div>
    </div>
  );
};

export default Skill3DBrain;
