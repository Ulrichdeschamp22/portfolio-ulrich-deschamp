import { motion } from 'framer-motion';

const Skill3DTablet = () => {
  return (
    <div className="relative w-full h-64 md:h-80 flex items-center justify-center">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-emerald-500/10 blur-3xl rounded-full opacity-30" />
      
      {/* Main Design Studio - Static with hover */}
      <motion.div 
        className="relative cursor-pointer" 
        style={{ perspective: 1000 }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Main canvas/artboard */}
        <div className="relative w-48 h-56 md:w-56 md:h-64">
          {/* Artboard */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 rounded-xl shadow-2xl shadow-emerald-500/20 border border-slate-600/30 overflow-hidden">
            {/* Header bar */}
            <div className="h-6 bg-slate-900/80 flex items-center px-2 gap-1 border-b border-slate-700/50">
              <div className="w-2 h-2 rounded-full bg-red-400" />
              <div className="w-2 h-2 rounded-full bg-yellow-400" />
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span className="ml-2 text-[8px] text-slate-400 font-mono">design.fig</span>
            </div>
            
            {/* Canvas content */}
            <div className="p-3 space-y-2">
              {/* Logo design preview */}
              <div className="w-full h-16 bg-gradient-to-br from-primary/20 to-emerald-500/20 rounded-lg flex items-center justify-center border border-primary/30">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-emerald-500 flex items-center justify-center text-white font-bold text-xs">
                    U
                  </div>
                  <div className="space-y-1">
                    <div className="w-12 h-1.5 bg-primary/60 rounded-full" />
                    <div className="w-8 h-1 bg-emerald-500/40 rounded-full" />
                  </div>
                </div>
              </div>
              
              {/* Color palette */}
              <div className="flex gap-1.5 justify-center">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-violet-600 shadow-sm" />
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 shadow-sm" />
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-pink-400 to-rose-600 shadow-sm" />
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 shadow-sm" />
              </div>
              
              {/* Typography preview */}
              <div className="bg-slate-800/60 rounded-lg p-2 space-y-1">
                <div className="text-[10px] font-bold text-white/90">Aa Typography</div>
                <div className="flex gap-2">
                  <div className="w-8 h-2 bg-white/20 rounded" />
                  <div className="w-6 h-2 bg-white/15 rounded" />
                  <div className="w-10 h-2 bg-white/10 rounded" />
                </div>
              </div>
              
              {/* Icon grid */}
              <div className="grid grid-cols-4 gap-1">
                {[...Array(8)].map((_, i) => (
                  <div 
                    key={i} 
                    className="aspect-square bg-slate-700/50 rounded flex items-center justify-center"
                  >
                    <div className={`w-2 h-2 rounded-sm ${i % 2 === 0 ? 'bg-primary/60' : 'bg-emerald-500/60'}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Side tools panel */}
          <div className="absolute -left-4 top-8 w-6 bg-slate-800 rounded-lg p-1.5 space-y-1.5 shadow-lg border border-slate-700/50">
            <div className="w-3 h-3 bg-primary/60 rounded-sm" />
            <div className="w-3 h-3 bg-slate-600 rounded-sm" />
            <div className="w-3 h-3 bg-slate-600 rounded-sm" />
            <div className="w-3 h-3 bg-emerald-500/60 rounded-sm" />
          </div>
          
          {/* Floating color picker */}
          <div className="absolute -right-3 top-12 w-8 h-8 bg-gradient-to-br from-primary via-pink-500 to-orange-500 rounded-full shadow-lg shadow-primary/30 border-2 border-white/20" />
          
          {/* Pen cursor */}
          <div className="absolute -right-2 -bottom-2 w-10 h-10 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-emerald-400 drop-shadow-lg" fill="currentColor">
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
            </svg>
          </div>
        </div>
        
        {/* Decorative elements - Static */}
        <div className="absolute -inset-4 opacity-20 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 200 200">
            <circle cx="20" cy="30" r="3" fill="currentColor" className="text-primary" />
            <circle cx="180" cy="50" r="2" fill="currentColor" className="text-emerald-400" />
            <circle cx="30" cy="170" r="2" fill="currentColor" className="text-pink-400" />
            <rect x="160" y="160" width="8" height="8" rx="2" fill="currentColor" className="text-primary/50" />
          </svg>
        </div>
      </motion.div>
    </div>
  );
};

export default Skill3DTablet;
