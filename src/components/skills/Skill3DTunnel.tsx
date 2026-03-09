import { motion } from 'framer-motion';

const Skill3DTunnel = () => {
  return (
    <div className="relative w-full h-64 md:h-80 flex items-center justify-center">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-amber-500/15 blur-3xl rounded-full opacity-40" />

      {/* Main website/landing page visual */}
      <motion.div
        className="relative cursor-pointer"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{ perspective: 1000 }}
      >
        {/* Browser frame */}
        <div className="w-52 h-44 md:w-64 md:h-52 rounded-xl bg-gradient-to-br from-muted via-border to-muted p-1.5 shadow-xl shadow-amber-500/30">
          <div className="w-full h-full rounded-lg bg-background overflow-hidden relative">
            {/* Browser bar */}
            <div className="h-5 bg-amber-500/15 flex items-center px-2 gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <span className="text-[6px] text-muted-foreground ml-2">mon-tunnel.com</span>
            </div>

            {/* Landing page content */}
            <div className="p-2 space-y-1.5">
              {/* Hero section */}
              <div className="w-full h-12 bg-gradient-to-r from-amber-500/20 via-orange-500/15 to-rose-500/20 rounded-lg flex items-center justify-center p-1.5">
                <div className="text-center">
                  <div className="text-[7px] font-bold text-foreground">🚀 Doublez vos ventes</div>
                  <div className="text-[5px] text-muted-foreground mt-0.5">Méthode éprouvée en 3 étapes</div>
                </div>
              </div>

              {/* Funnel steps */}
              <div className="flex items-center gap-1">
                <div className="flex-1 h-6 bg-gradient-to-b from-amber-500/25 to-amber-500/10 rounded p-0.5 text-center">
                  <div className="text-[5px] font-bold text-amber-400">1</div>
                  <div className="text-[4px] text-foreground">Capture</div>
                </div>
                <svg className="w-2 h-2 text-amber-400 flex-shrink-0" viewBox="0 0 8 8" fill="none">
                  <path d="M2 4H6M4.5 2L6.5 4L4.5 6" stroke="currentColor" strokeWidth="1" />
                </svg>
                <div className="flex-1 h-6 bg-gradient-to-b from-orange-500/25 to-orange-500/10 rounded p-0.5 text-center">
                  <div className="text-[5px] font-bold text-orange-400">2</div>
                  <div className="text-[4px] text-foreground">Nurture</div>
                </div>
                <svg className="w-2 h-2 text-orange-400 flex-shrink-0" viewBox="0 0 8 8" fill="none">
                  <path d="M2 4H6M4.5 2L6.5 4L4.5 6" stroke="currentColor" strokeWidth="1" />
                </svg>
                <div className="flex-1 h-6 bg-gradient-to-b from-rose-500/25 to-rose-500/10 rounded p-0.5 text-center">
                  <div className="text-[5px] font-bold text-rose-400">3</div>
                  <div className="text-[4px] text-foreground">Vente</div>
                </div>
              </div>

              {/* Email capture form */}
              <div className="flex gap-1">
                <div className="flex-1 h-4 bg-muted/50 rounded border border-border/30 px-1 flex items-center">
                  <span className="text-[5px] text-muted-foreground">votre@email.com</span>
                </div>
                <div className="w-12 h-4 rounded bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center">
                  <span className="text-[5px] text-white font-bold">GO →</span>
                </div>
              </div>

              {/* Stats row */}
              <div className="flex items-center justify-between px-1">
                <div className="text-center">
                  <div className="text-[6px] font-bold text-amber-400">10K</div>
                  <div className="text-[4px] text-muted-foreground">Visiteurs</div>
                </div>
                <div className="text-center">
                  <div className="text-[6px] font-bold text-orange-400">2.5K</div>
                  <div className="text-[4px] text-muted-foreground">Leads</div>
                </div>
                <div className="text-center">
                  <div className="text-[6px] font-bold text-rose-400">120</div>
                  <div className="text-[4px] text-muted-foreground">Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stand */}
        <div className="mx-auto w-10 h-3 bg-gradient-to-b from-border to-muted rounded-b" />
        <div className="mx-auto w-16 h-1.5 bg-gradient-to-b from-border to-muted rounded-b-lg" />
      </motion.div>

      {/* Email icon */}
      <div className="absolute top-6 right-8 w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-lg">
        <span className="text-sm">📧</span>
      </div>

      {/* Revenue badge */}
      <div className="absolute bottom-4 left-8 px-2 py-1 bg-card/80 rounded-full border border-border/50 text-xs text-amber-400 font-medium">
        +€8.2K/mois
      </div>

      {/* Conversion badge */}
      <div className="absolute top-4 left-10 px-2 py-1 bg-card/80 rounded-full border border-border/50 text-xs text-rose-400 font-medium">
        Taux: 1.2%
      </div>
    </div>
  );
};

export default Skill3DTunnel;
