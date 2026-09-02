import { motion } from 'framer-motion';

const Skill3DLanding = () => {
  return (
    <div className="relative w-full h-64 md:h-80 flex items-center justify-center">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-violet-500/15 blur-3xl rounded-full opacity-40" />

      {/* Floating conversion badge */}
      <motion.div
        className="absolute top-4 right-6 px-2 py-1 rounded-full bg-gradient-to-r from-violet-500/80 to-fuchsia-500/80 shadow-lg text-[8px] text-white font-bold"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        +38% conversion
      </motion.div>

      {/* Floating CTA chip */}
      <div className="absolute bottom-8 left-6 px-2 py-1 rounded-full bg-gradient-to-r from-cyan-500/70 to-blue-500/70 shadow-lg text-[7px] text-white font-bold">
        🎯 CTA haut rendement
      </div>

      {/* Main landing page visual */}
      <motion.div
        className="relative cursor-pointer"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{ perspective: 1000 }}
      >
        {/* Browser frame */}
        <div className="w-52 h-44 md:w-64 md:h-52 rounded-xl bg-gradient-to-br from-muted via-border to-muted p-1.5 shadow-xl shadow-violet-500/30">
          <div className="w-full h-full rounded-lg bg-background overflow-hidden relative">
            {/* Browser bar */}
            <div className="h-5 bg-violet-500/20 flex items-center px-2 gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <span className="text-[6px] text-muted-foreground ml-2">ma-landing-page.ci</span>
            </div>

            {/* Landing page content */}
            <div className="p-2 space-y-1.5">
              {/* Hero headline */}
              <div className="w-full h-14 bg-gradient-to-br from-violet-500/25 via-fuchsia-500/20 to-cyan-500/15 rounded-lg flex flex-col items-center justify-center p-1.5 text-center">
                <div className="text-[8px] font-bold text-foreground">Boostez votre business</div>
                <div className="text-[5px] text-muted-foreground mt-0.5">Landing page haute conversion</div>
                <div className="mt-1 px-2 py-0.5 rounded bg-gradient-to-r from-violet-500 to-fuchsia-500 text-[6px] text-white font-bold">
                  DEMANDER UNE DÉMO
                </div>
              </div>

              {/* Benefits row */}
              <div className="grid grid-cols-3 gap-1">
                <div className="rounded bg-gradient-to-b from-violet-500/20 to-violet-500/10 p-1 text-center">
                  <div className="text-[8px]">⚡</div>
                  <div className="text-[5px] font-semibold text-foreground">Rapide</div>
                </div>
                <div className="rounded bg-gradient-to-b from-fuchsia-500/20 to-fuchsia-500/10 p-1 text-center">
                  <div className="text-[8px]">🎯</div>
                  <div className="text-[5px] font-semibold text-foreground">Ciblée</div>
                </div>
                <div className="rounded bg-gradient-to-b from-cyan-500/20 to-cyan-500/10 p-1 text-center">
                  <div className="text-[8px]">📈</div>
                  <div className="text-[5px] font-semibold text-foreground">Convertit</div>
                </div>
              </div>

              {/* Email capture form */}
              <div className="flex gap-1">
                <div className="flex-1 h-4 rounded bg-muted/60 border border-border/50" />
                <div className="px-1.5 h-4 rounded bg-gradient-to-r from-violet-500 to-fuchsia-500 flex items-center">
                  <span className="text-[6px] text-white font-bold">GO</span>
                </div>
              </div>

              {/* Conversion stats */}
              <div className="flex items-center justify-between px-1">
                <div className="text-[5px] text-muted-foreground">Taux de conversion</div>
                <div className="flex items-center gap-1">
                  <div className="w-10 h-1.5 bg-muted rounded-full overflow-hidden">
                    <div className="w-[68%] h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full" />
                  </div>
                  <div className="text-[5px] text-violet-400 font-bold">68%</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Browser stand */}
        <div className="mx-auto w-10 h-3 bg-gradient-to-b from-border to-muted rounded-b" />
        <div className="mx-auto w-16 h-1.5 bg-gradient-to-b from-border to-muted rounded-b-lg" />
      </motion.div>

      {/* Analytics spark badge */}
      <div className="absolute bottom-6 right-10 px-2 py-1 bg-card/80 rounded-full border border-border/50 text-xs text-violet-400 font-medium">
        📈 +1 240 leads
      </div>
    </div>
  );
};

export default Skill3DLanding;
