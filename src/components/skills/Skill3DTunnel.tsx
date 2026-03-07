import { motion } from 'framer-motion';

const Skill3DTunnel = () => {
  return (
    <div className="relative w-full h-64 md:h-80 flex items-center justify-center">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-amber-500/15 blur-3xl rounded-full opacity-40" />

      {/* Funnel visual */}
      <motion.div
        className="relative cursor-pointer"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{ perspective: 1000 }}
      >
        <div className="relative w-48 h-56 md:w-56 md:h-64 flex flex-col items-center">
          {/* Funnel stages */}
          {/* Stage 1 - Awareness */}
          <div className="w-48 md:w-56 h-12 md:h-14 bg-gradient-to-r from-amber-500/30 to-orange-500/30 rounded-t-2xl border border-amber-400/20 flex items-center justify-between px-3 relative">
            <div className="text-[8px] md:text-[9px] font-bold text-foreground">👀 Trafic</div>
            <div className="text-[7px] text-amber-400 font-bold">10K visiteurs</div>
            <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-amber-500/20 border border-amber-400/30 flex items-center justify-center">
              <span className="text-[8px]">1</span>
            </div>
          </div>

          {/* Stage 2 - Interest */}
          <div className="w-40 md:w-48 h-12 md:h-14 bg-gradient-to-r from-orange-500/30 to-rose-500/30 border-x border-orange-400/20 flex items-center justify-between px-3 relative">
            <div className="text-[8px] md:text-[9px] font-bold text-foreground">📧 Capture</div>
            <div className="text-[7px] text-orange-400 font-bold">2.5K leads</div>
            <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-orange-500/20 border border-orange-400/30 flex items-center justify-center">
              <span className="text-[8px]">2</span>
            </div>
          </div>

          {/* Stage 3 - Decision */}
          <div className="w-32 md:w-40 h-12 md:h-14 bg-gradient-to-r from-rose-500/30 to-pink-500/30 border-x border-rose-400/20 flex items-center justify-between px-3 relative">
            <div className="text-[8px] md:text-[9px] font-bold text-foreground">🔥 Offre</div>
            <div className="text-[7px] text-rose-400 font-bold">800 prospects</div>
            <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-rose-500/20 border border-rose-400/30 flex items-center justify-center">
              <span className="text-[8px]">3</span>
            </div>
          </div>

          {/* Stage 4 - Action */}
          <div className="w-24 md:w-32 h-12 md:h-14 bg-gradient-to-r from-pink-500/30 to-primary/30 rounded-b-2xl border border-pink-400/20 flex items-center justify-between px-3 relative">
            <div className="text-[8px] md:text-[9px] font-bold text-foreground">💰 Vente</div>
            <div className="text-[7px] text-primary font-bold">120 clients</div>
            <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
              <span className="text-[8px]">4</span>
            </div>
          </div>

          {/* Conversion arrow */}
          <div className="mt-2 flex flex-col items-center">
            <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none">
              <path d="M12 4 L12 18 M6 14 L12 20 L18 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="px-3 py-1 rounded-full bg-gradient-to-r from-primary to-amber-500 text-[7px] text-white font-bold shadow-lg">
              Taux: 1.2%
            </div>
          </div>
        </div>
      </motion.div>

      {/* Email icon */}
      <div className="absolute top-6 right-8 w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-lg">
        <span className="text-sm">📧</span>
      </div>

      {/* Revenue badge */}
      <div className="absolute bottom-4 left-8 px-2 py-1 bg-card/80 rounded-full border border-border/50 text-xs text-amber-400 font-medium">
        +€8.2K/mois
      </div>

      {/* Upsell badge */}
      <div className="absolute top-4 left-10 px-2 py-1 bg-card/80 rounded-full border border-border/50 text-xs text-rose-400 font-medium">
        Upsell +35%
      </div>
    </div>
  );
};

export default Skill3DTunnel;
