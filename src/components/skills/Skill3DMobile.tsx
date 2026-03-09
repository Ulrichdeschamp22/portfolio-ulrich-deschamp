import { motion } from 'framer-motion';

const Skill3DMobile = () => {
  return (
    <div className="relative w-full h-64 md:h-80 flex items-center justify-center">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-violet-500/15 blur-3xl rounded-full opacity-40" />

      {/* Floating app icons */}
      <div className="absolute top-6 left-8 w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg">
        <span className="text-sm">📱</span>
      </div>
      <div className="absolute bottom-10 right-6 w-7 h-7 rounded-lg bg-gradient-to-br from-pink-500 to-violet-600 flex items-center justify-center shadow-lg">
        <span className="text-xs">🔔</span>
      </div>
      <div className="absolute top-14 right-10 w-6 h-6 rounded-full bg-gradient-to-br from-indigo-400 to-violet-500 flex items-center justify-center shadow-md">
        <span className="text-[10px]">⚙️</span>
      </div>

      {/* Main mobile app visual - Two phones */}
      <motion.div
        className="relative cursor-pointer"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{ perspective: 1000 }}
      >
        {/* Background phone */}
        <div className="absolute -right-6 top-2 w-24 h-44 md:w-28 md:h-52 rounded-2xl bg-gradient-to-br from-muted via-border to-muted p-1 shadow-lg opacity-60 rotate-6">
          <div className="w-full h-full rounded-xl bg-background overflow-hidden">
            <div className="h-4 bg-violet-500/10" />
            <div className="p-1.5 space-y-1">
              <div className="w-full h-6 bg-violet-500/10 rounded" />
              <div className="w-full h-6 bg-muted/30 rounded" />
              <div className="w-full h-6 bg-muted/20 rounded" />
            </div>
          </div>
        </div>

        {/* Main phone */}
        <div className="relative w-28 h-52 md:w-34 md:h-60 rounded-3xl bg-gradient-to-br from-muted via-border to-muted p-1.5 shadow-xl shadow-violet-500/30">
          <div className="w-full h-full rounded-2xl bg-background overflow-hidden relative">
            {/* Status bar */}
            <div className="h-5 bg-violet-500/15 flex items-center justify-between px-2.5">
              <span className="text-[7px] text-muted-foreground">9:41</span>
              <div className="w-8 h-2 bg-muted rounded-full" />
              <div className="flex gap-1">
                <div className="w-2.5 h-1.5 bg-muted-foreground/50 rounded-sm" />
              </div>
            </div>

            {/* App content */}
            <div className="p-2 space-y-1.5">
              <div className="text-[8px] font-bold text-foreground">Mon App</div>
              
              {/* Welcome card */}
              <div className="w-full h-10 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-xl p-1.5 flex items-center gap-1.5">
                <div className="w-6 h-6 rounded-full bg-violet-500/40 flex items-center justify-center text-[10px]">👋</div>
                <div>
                  <div className="text-[6px] font-bold text-foreground">Bienvenue</div>
                  <div className="text-[5px] text-muted-foreground">3 notifications</div>
                </div>
              </div>

              {/* Feature cards */}
              <div className="grid grid-cols-2 gap-1">
                <div className="h-10 bg-gradient-to-b from-violet-500/15 to-violet-500/5 rounded-lg p-1 flex flex-col items-center justify-center">
                  <div className="text-[10px]">📊</div>
                  <div className="text-[5px] text-foreground font-medium">Stats</div>
                </div>
                <div className="h-10 bg-gradient-to-b from-purple-500/15 to-purple-500/5 rounded-lg p-1 flex flex-col items-center justify-center">
                  <div className="text-[10px]">💬</div>
                  <div className="text-[5px] text-foreground font-medium">Chat</div>
                </div>
              </div>

              {/* List items */}
              <div className="space-y-1">
                {[1, 2, 3].map(i => (
                  <div key={i} className="flex items-center gap-1 h-4">
                    <div className="w-3 h-3 rounded bg-violet-500/20" />
                    <div className="flex-1 h-1.5 bg-muted/40 rounded" />
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom nav */}
            <div className="absolute bottom-0 left-0 right-0 h-7 bg-card/80 backdrop-blur-sm flex items-center justify-around px-3 border-t border-border/30">
              <div className="w-3.5 h-3.5 rounded-full bg-violet-500/50" />
              <div className="w-3.5 h-3.5 rounded-full bg-muted" />
              <div className="w-3.5 h-3.5 rounded-full bg-muted" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Platform badges */}
      <div className="absolute bottom-4 left-10 px-2 py-1 bg-card/80 rounded-full border border-border/50 text-xs text-violet-400 font-medium">
        iOS & Android
      </div>
    </div>
  );
};

export default Skill3DMobile;
