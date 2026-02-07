import { motion } from 'framer-motion';

const Skill3DCamera = () => {
  return (
    <div className="relative w-full h-64 md:h-80 flex items-center justify-center">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-orange-500/10 to-secondary/15 blur-3xl rounded-full opacity-40" />
      
      {/* Static polaroids */}
      <div className="absolute top-4 right-8 w-12 h-14 bg-white/90 rounded shadow-md p-1 rotate-6">
        <div className="w-full h-9 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-sm" />
        <div className="h-3 flex items-center justify-center">
          <div className="text-[4px] text-gray-400">Photo 1</div>
        </div>
      </div>
      
      <div className="absolute top-14 left-6 w-10 h-12 bg-white/90 rounded shadow-md p-1 -rotate-6">
        <div className="w-full h-7 bg-gradient-to-br from-orange-300/40 to-pink-300/40 rounded-sm" />
      </div>
      
      <div className="absolute bottom-16 right-10 w-9 h-10 bg-white/90 rounded shadow-md p-0.5 rotate-12">
        <div className="w-full h-6 bg-gradient-to-br from-secondary/30 to-primary/30 rounded-sm" />
      </div>
      
      {/* Main camera 3D */}
      <motion.div
        className="relative z-10 cursor-pointer"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{ perspective: 1000 }}
      >
        {/* Camera body */}
        <div className="relative w-36 h-24 md:w-48 md:h-32 bg-gradient-to-br from-muted via-border to-muted rounded-xl shadow-xl shadow-primary/20">
          {/* Top section with viewfinder */}
          <div className="absolute -top-3 left-5 w-10 h-5 md:w-14 md:h-6 bg-gradient-to-b from-border to-muted rounded-t-lg shadow-sm">
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-4 h-2.5 md:w-5 md:h-3 bg-background rounded-sm" />
          </div>
          
          {/* Lens */}
          <div className="absolute left-3 top-1/2 -translate-y-1/2 w-14 h-14 md:w-18 md:h-18 rounded-full bg-gradient-to-br from-gray-800 via-gray-900 to-black shadow-inner">
            <div className="absolute inset-1.5 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
              <div className="w-7 h-7 md:w-9 md:h-9 rounded-full bg-gradient-to-br from-primary via-secondary to-primary shadow-lg">
                <div className="w-full h-full rounded-full bg-black/50 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-white/30" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Flash unit */}
          <div className="absolute top-2 right-3 w-5 h-3 md:w-7 md:h-4 rounded bg-gradient-to-r from-yellow-200 to-yellow-100 shadow-sm" />
          
          {/* Mode dial */}
          <div className="absolute top-2 right-12 md:right-14 w-4 h-4 md:w-5 md:h-5 rounded-full bg-gradient-to-b from-muted to-border shadow-sm">
            <div className="absolute top-0.5 left-1/2 w-0.5 h-1.5 bg-foreground/40 rounded" />
          </div>
          
          {/* Grip texture */}
          <div className="absolute right-1 top-1/2 -translate-y-1/2 w-5 h-16 md:h-20 bg-gradient-to-r from-border to-muted rounded-r-lg">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-full h-px bg-muted-foreground/20 mt-3" />
            ))}
          </div>
          
          {/* Screen on back */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-16 h-1.5 md:w-20 md:h-2 bg-background/50 rounded" />
        </div>
      </motion.div>
    </div>
  );
};

export default Skill3DCamera;
