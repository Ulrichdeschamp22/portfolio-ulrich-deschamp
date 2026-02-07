import { motion } from 'framer-motion';

const Skill3DSmartphone = () => {
  return (
    <div className="relative w-full h-64 md:h-80 flex items-center justify-center">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-secondary/15 blur-3xl rounded-full opacity-40" />
      
      {/* Static tickets */}
      <div className="absolute top-6 right-8 w-14 h-9 rounded bg-gradient-to-r from-primary/60 to-secondary/60 shadow-lg rotate-6">
        <div className="p-1.5 text-[6px] text-white font-bold">TICKET</div>
      </div>
      
      <div className="absolute bottom-12 left-6 w-12 h-8 rounded bg-gradient-to-r from-secondary/60 to-primary/60 shadow-lg -rotate-3">
        <div className="p-1 text-[5px] text-white font-bold">VIP</div>
      </div>

      {/* QR code */}
      <div className="absolute top-14 left-10 w-7 h-7 bg-white/80 rounded p-1 shadow-md">
        <div className="w-full h-full grid grid-cols-3 gap-0.5">
          <div className="bg-black" /><div /><div className="bg-black" />
          <div /><div className="bg-black" /><div />
          <div className="bg-black" /><div /><div className="bg-black" />
        </div>
      </div>
      
      {/* Main smartphone 3D */}
      <motion.div
        className="relative cursor-pointer"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{ perspective: 1000 }}
      >
        {/* Phone frame */}
        <div className="w-28 h-56 md:w-36 md:h-72 rounded-3xl bg-gradient-to-br from-muted via-border to-muted p-1.5 shadow-xl shadow-secondary/30">
          {/* Screen */}
          <div className="w-full h-full rounded-2xl bg-background overflow-hidden relative">
            {/* Status bar */}
            <div className="h-5 bg-primary/10 flex items-center justify-between px-2.5">
              <span className="text-[7px] text-muted-foreground">9:41</span>
              <div className="flex gap-1">
                <div className="w-2.5 h-1.5 bg-muted-foreground/50 rounded-sm" />
                <div className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full" />
              </div>
            </div>
            
            {/* App content */}
            <div className="p-2 space-y-2">
              <div className="text-[9px] font-bold text-foreground">🎫 Billetterie</div>
              
              {/* Event cards - Static */}
              <div className="space-y-1.5">
                <div className="h-10 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 p-1.5">
                  <div className="text-[7px] font-semibold text-foreground">Concert Live</div>
                  <div className="text-[5px] text-muted-foreground">15 Jan • 20:00</div>
                </div>
                <div className="h-10 rounded-lg bg-gradient-to-r from-secondary/20 to-primary/20 p-1.5">
                  <div className="text-[7px] font-semibold text-foreground">Conférence Tech</div>
                  <div className="text-[5px] text-muted-foreground">22 Jan • 14:00</div>
                </div>
                <div className="h-9 rounded-lg bg-gradient-to-r from-accent/20 to-primary/20 p-1.5">
                  <div className="text-[7px] font-semibold text-foreground">Workshop</div>
                  <div className="text-[5px] text-muted-foreground">28 Jan</div>
                </div>
              </div>
            </div>
            
            {/* Bottom nav */}
            <div className="absolute bottom-0 left-0 right-0 h-7 bg-card/80 backdrop-blur-sm flex items-center justify-around px-2">
              <div className="w-3.5 h-3.5 rounded-full bg-primary/50" />
              <div className="w-3.5 h-3.5 rounded-full bg-muted" />
              <div className="w-3.5 h-3.5 rounded-full bg-muted" />
            </div>
          </div>
        </div>
        
        {/* E-ticket emerging - Static */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-20 h-12 rounded-lg bg-gradient-to-r from-primary/50 via-secondary/50 to-accent/50 backdrop-blur-sm border border-white/20 shadow-lg">
          <div className="p-1.5 text-center">
            <div className="text-[7px] font-bold text-white">E-TICKET</div>
            <div className="text-[5px] text-white/80">SCAN TO ENTER</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skill3DSmartphone;
