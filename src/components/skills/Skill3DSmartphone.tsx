import { motion } from 'framer-motion';

const Skill3DSmartphone = () => {
  return (
    <div className="relative w-full h-80 md:h-96 flex items-center justify-center">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-secondary/20 blur-3xl rounded-full opacity-40" />
      
      {/* Floating tickets */}
      <motion.div
        className="absolute top-6 right-8 w-16 h-10 rounded bg-gradient-to-r from-primary to-secondary shadow-lg"
        animate={{ 
          y: [-5, 5, -5], 
          rotate: [5, -5, 5],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div className="p-1.5 text-[6px] text-white font-bold">TICKET</div>
        <div className="absolute right-1 top-1 w-4 h-4 bg-white/20 rounded" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-12 left-6 w-14 h-9 rounded bg-gradient-to-r from-secondary to-primary shadow-lg"
        animate={{ 
          y: [5, -5, 5], 
          rotate: [-3, 3, -3],
          opacity: [0.5, 0.9, 0.5]
        }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
      >
        <div className="p-1 text-[5px] text-white font-bold">VIP</div>
      </motion.div>

      {/* QR codes floating */}
      <motion.div
        className="absolute top-16 left-12 w-8 h-8 bg-white rounded p-1 shadow-lg"
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      >
        <div className="w-full h-full grid grid-cols-3 gap-0.5">
          {[...Array(9)].map((_, i) => (
            <div key={i} className={`${Math.random() > 0.5 ? 'bg-black' : 'bg-transparent'}`} />
          ))}
        </div>
      </motion.div>
      
      {/* Main smartphone 3D */}
      <motion.div
        className="relative"
        initial={{ rotateY: -10, rotateX: 5 }}
        whileHover={{ rotateY: 0, rotateX: 0, scale: 1.05 }}
        transition={{ duration: 0.5 }}
        style={{ perspective: 1000 }}
      >
        {/* Phone frame */}
        <div className="w-32 h-64 md:w-40 md:h-80 rounded-3xl bg-gradient-to-br from-muted via-border to-muted p-1.5 shadow-2xl shadow-secondary/40">
          {/* Screen */}
          <div className="w-full h-full rounded-2xl bg-background overflow-hidden relative">
            {/* Status bar */}
            <div className="h-6 bg-primary/10 flex items-center justify-between px-3">
              <span className="text-[8px] text-muted-foreground">9:41</span>
              <div className="flex gap-1">
                <div className="w-3 h-1.5 bg-muted-foreground/50 rounded-sm" />
                <div className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full" />
              </div>
            </div>
            
            {/* App content */}
            <div className="p-2 space-y-2">
              <div className="text-[10px] font-bold text-foreground">🎫 Billetterie</div>
              
              {/* Event cards */}
              <motion.div
                className="space-y-1.5"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                <div className="h-12 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 p-1.5">
                  <div className="text-[7px] font-semibold text-foreground">Concert Live</div>
                  <div className="text-[6px] text-muted-foreground">15 Jan • 20:00</div>
                </div>
                <div className="h-12 rounded-lg bg-gradient-to-r from-secondary/20 to-primary/20 p-1.5">
                  <div className="text-[7px] font-semibold text-foreground">Conférence Tech</div>
                  <div className="text-[6px] text-muted-foreground">22 Jan • 14:00</div>
                </div>
                <div className="h-10 rounded-lg bg-gradient-to-r from-accent/20 to-primary/20 p-1.5">
                  <div className="text-[7px] font-semibold text-foreground">Workshop Design</div>
                  <div className="text-[6px] text-muted-foreground">28 Jan</div>
                </div>
              </motion.div>
            </div>
            
            {/* Bottom nav */}
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-card/80 backdrop-blur-sm flex items-center justify-around px-2">
              <div className="w-4 h-4 rounded-full bg-primary/50" />
              <div className="w-4 h-4 rounded-full bg-muted" />
              <div className="w-4 h-4 rounded-full bg-muted" />
            </div>
          </div>
        </div>
        
        {/* Holographic ticket emerging */}
        <motion.div
          className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-14 rounded-lg bg-gradient-to-r from-primary/60 via-secondary/60 to-accent/60 backdrop-blur-sm border border-white/20 shadow-lg"
          animate={{ 
            y: [-5, -15, -5], 
            opacity: [0.5, 1, 0.5],
            rotateX: [0, 10, 0]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="p-2 text-center">
            <div className="text-[8px] font-bold text-white">E-TICKET</div>
            <div className="text-[6px] text-white/80">SCAN TO ENTER</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skill3DSmartphone;
