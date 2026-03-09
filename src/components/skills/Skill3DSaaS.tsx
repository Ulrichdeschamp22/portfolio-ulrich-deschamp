import { motion } from 'framer-motion';

const Skill3DSaaS = () => {
  return (
    <div className="relative w-full h-64 md:h-80 flex items-center justify-center">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-cyan-500/15 blur-3xl rounded-full opacity-40" />

      {/* Cloud icons */}
      <div className="absolute top-4 right-8 w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg">
        <span className="text-sm">☁️</span>
      </div>
      <div className="absolute bottom-12 left-6 w-7 h-7 rounded-full bg-gradient-to-br from-blue-400 to-cyan-600 flex items-center justify-center shadow-lg">
        <span className="text-xs">⚡</span>
      </div>

      {/* Main SaaS dashboard visual */}
      <motion.div
        className="relative cursor-pointer"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{ perspective: 1000 }}
      >
        {/* Browser frame */}
        <div className="w-52 h-40 md:w-64 md:h-48 rounded-xl bg-gradient-to-br from-muted via-border to-muted p-1.5 shadow-xl shadow-cyan-500/30">
          <div className="w-full h-full rounded-lg bg-background overflow-hidden relative">
            {/* Header */}
            <div className="h-5 bg-cyan-500/15 flex items-center px-2 gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <span className="text-[6px] text-muted-foreground ml-2">app.saas-platform.com</span>
            </div>

            {/* Dashboard content */}
            <div className="flex h-[calc(100%-1.25rem)]">
              {/* Sidebar */}
              <div className="w-8 bg-card/60 border-r border-border/30 p-1 space-y-1.5">
                <div className="w-4 h-4 mx-auto rounded bg-cyan-500/40" />
                <div className="w-4 h-4 mx-auto rounded bg-muted" />
                <div className="w-4 h-4 mx-auto rounded bg-muted" />
                <div className="w-4 h-4 mx-auto rounded bg-muted" />
              </div>

              {/* Main area */}
              <div className="flex-1 p-1.5 space-y-1">
                {/* Stats row */}
                <div className="flex gap-1">
                  <div className="flex-1 h-7 bg-gradient-to-b from-cyan-500/20 to-cyan-500/5 rounded p-1">
                    <div className="text-[5px] text-muted-foreground">Utilisateurs</div>
                    <div className="text-[7px] font-bold text-cyan-400">12.4K</div>
                  </div>
                  <div className="flex-1 h-7 bg-gradient-to-b from-blue-500/20 to-blue-500/5 rounded p-1">
                    <div className="text-[5px] text-muted-foreground">MRR</div>
                    <div className="text-[7px] font-bold text-blue-400">€24K</div>
                  </div>
                  <div className="flex-1 h-7 bg-gradient-to-b from-indigo-500/20 to-indigo-500/5 rounded p-1">
                    <div className="text-[5px] text-muted-foreground">Churn</div>
                    <div className="text-[7px] font-bold text-green-400">2.1%</div>
                  </div>
                </div>

                {/* Chart area */}
                <div className="h-14 bg-card/30 rounded border border-border/20 p-1 flex items-end gap-0.5">
                  {[40, 55, 35, 60, 45, 70, 65, 80, 75, 90].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-cyan-500 to-cyan-400/60 rounded-t"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>

                {/* Table preview */}
                <div className="space-y-0.5">
                  {[1, 2].map(i => (
                    <div key={i} className="flex gap-1 items-center h-3">
                      <div className="w-3 h-3 rounded-full bg-muted" />
                      <div className="flex-1 h-1.5 bg-muted/50 rounded" />
                      <div className="w-6 h-1.5 bg-cyan-500/30 rounded" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stand */}
        <div className="mx-auto w-10 h-3 bg-gradient-to-b from-border to-muted rounded-b" />
        <div className="mx-auto w-16 h-1.5 bg-gradient-to-b from-border to-muted rounded-b-lg" />
      </motion.div>

      {/* SaaS badge */}
      <div className="absolute bottom-4 left-10 px-2 py-1 bg-card/80 rounded-full border border-border/50 text-xs text-cyan-400 font-medium">
        99.9% uptime
      </div>
    </div>
  );
};

export default Skill3DSaaS;
