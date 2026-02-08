import { motion } from 'framer-motion';

const Skill3DCamera = () => {
  return (
    <div className="relative w-full h-64 md:h-80 flex items-center justify-center">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-rose-500/10 blur-3xl rounded-full opacity-30" />
      
      {/* Main Video Production Setup - Static with hover */}
      <motion.div 
        className="relative cursor-pointer" 
        style={{ perspective: 1000 }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Main frame - Cinema camera setup */}
        <div className="relative w-52 h-48 md:w-64 md:h-56">
          {/* Camera body */}
          <div className="absolute left-6 top-8 w-32 h-24 md:w-40 md:h-28 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 rounded-lg shadow-2xl shadow-rose-500/20 border border-slate-600/30">
            {/* Top handle */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-3 bg-gradient-to-b from-slate-600 to-slate-700 rounded-t-lg" />
            
            {/* Lens mount */}
            <div className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-slate-900 to-black border-2 border-slate-600">
              <div className="absolute inset-1 rounded-full bg-gradient-to-br from-rose-500/20 to-orange-500/20">
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-rose-500 via-orange-400 to-rose-600 shadow-lg shadow-rose-500/50">
                  <div className="w-full h-full rounded-full bg-black/40 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Screen */}
            <div className="absolute right-2 top-2 w-14 h-10 md:w-16 md:h-12 bg-slate-900 rounded border border-slate-700">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-[8px] text-rose-400 font-mono">REC</div>
              </div>
            </div>
            
            {/* Controls */}
            <div className="absolute bottom-2 right-2 flex gap-1">
              <div className="w-2 h-2 rounded-full bg-red-500" />
              <div className="w-2 h-2 rounded-full bg-green-500" />
            </div>
          </div>
          
          {/* Tripod */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
            {/* Tripod head */}
            <div className="w-8 h-4 bg-gradient-to-b from-slate-600 to-slate-700 rounded-t mx-auto" />
            {/* Tripod legs */}
            <div className="relative w-20 h-12">
              <div className="absolute left-0 top-0 w-1 h-12 bg-gradient-to-b from-slate-600 to-slate-800 origin-top -rotate-12 rounded-full" />
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-1 h-14 bg-gradient-to-b from-slate-600 to-slate-800 rounded-full" />
              <div className="absolute right-0 top-0 w-1 h-12 bg-gradient-to-b from-slate-600 to-slate-800 origin-top rotate-12 rounded-full" />
            </div>
          </div>
          
          {/* Film strip decoration */}
          <div className="absolute top-4 right-0 w-8 h-20 bg-slate-900 rounded-sm border border-slate-700 flex flex-col justify-between py-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex justify-between px-0.5">
                <div className="w-1 h-2 bg-slate-700 rounded-sm" />
                <div className="w-4 h-2 bg-gradient-to-r from-rose-500/30 to-orange-500/30 rounded-sm" />
                <div className="w-1 h-2 bg-slate-700 rounded-sm" />
              </div>
            ))}
          </div>
          
          {/* Photo frames */}
          <div className="absolute -top-2 -left-2 w-10 h-12 bg-white rounded shadow-lg p-1 -rotate-6 border border-slate-200">
            <div className="w-full h-8 bg-gradient-to-br from-rose-400/40 to-orange-400/40 rounded-sm" />
          </div>
          
          {/* Play button overlay */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-rose-500/20 backdrop-blur-sm border border-rose-500/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-0 h-0 border-l-[8px] border-l-rose-400 border-y-[5px] border-y-transparent ml-1" />
          </div>
        </div>
        
        {/* Decorative elements - Static */}
        <div className="absolute -inset-4 opacity-20 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 200 200">
            <circle cx="180" cy="30" r="3" fill="currentColor" className="text-rose-400" />
            <circle cx="20" cy="60" r="2" fill="currentColor" className="text-orange-400" />
            <circle cx="170" cy="170" r="2" fill="currentColor" className="text-rose-300" />
            <rect x="10" y="150" width="6" height="6" rx="1" fill="currentColor" className="text-orange-400/50" />
          </svg>
        </div>
      </motion.div>
    </div>
  );
};

export default Skill3DCamera;
