import { motion } from 'framer-motion';

const Skill3DTicket = () => {
  return (
    <div className="relative w-full h-64 md:h-80 flex items-center justify-center">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-fuchsia-500/15 blur-3xl rounded-full opacity-40" />

      {/* Floating ticket stubs */}
      <motion.div
        className="absolute top-3 right-6 w-16 h-11 rounded-lg bg-gradient-to-r from-fuchsia-500/70 to-pink-500/70 shadow-lg rotate-6 p-1.5"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="text-[6px] text-white font-bold">🎟️ VIP</div>
        <div className="text-[5px] text-white/80">Événement 2026</div>
        <div className="mt-0.5 h-px border-t border-dashed border-white/40" />
        <div className="text-[5px] text-white/70 mt-0.5">Siège A12</div>
      </motion.div>

      <div
        className="absolute bottom-8 left-6 w-14 h-10 rounded-lg bg-gradient-to-r from-cyan-500/60 to-fuchsia-500/60 shadow-lg -rotate-6 p-1.5"
      >
        <div className="text-[6px] text-white font-bold">🎟️ STD</div>
        <div className="text-[5px] text-white/70">Concert Live</div>
        <div className="mt-0.5 h-px border-t border-dashed border-white/40" />
        <div className="text-[5px] text-white/70 mt-0.5">Siège C04</div>
      </div>

      {/* Calendar / date badge */}
      <div className="absolute top-8 left-10 w-9 h-9 rounded-lg bg-gradient-to-br from-yellow-400 to-amber-600 flex flex-col items-center justify-center shadow-lg">
        <span className="text-[5px] text-amber-900 font-bold leading-none">OCT</span>
        <span className="text-sm text-amber-900 font-bold leading-none">12</span>
      </div>

      {/* Main platform visual */}
      <motion.div
        className="relative cursor-pointer"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{ perspective: 1000 }}
      >
        {/* Browser frame */}
        <div className="w-52 h-44 md:w-64 md:h-52 rounded-xl bg-gradient-to-br from-muted via-border to-muted p-1.5 shadow-xl shadow-fuchsia-500/30">
          <div className="w-full h-full rounded-lg bg-background overflow-hidden relative">
            {/* Browser bar */}
            <div className="h-5 bg-fuchsia-500/20 flex items-center px-2 gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <span className="text-[6px] text-muted-foreground ml-2">billetterie-event.ci</span>
            </div>

            {/* Ticketing content */}
            <div className="p-2 space-y-1.5">
              <div className="text-[8px] font-bold text-foreground text-center">🎟️ Billetterie en ligne</div>

              {/* Event featured card */}
              <div className="rounded-lg bg-gradient-to-r from-fuchsia-500/25 to-pink-500/20 p-1.5 flex items-center gap-1.5">
                <div className="w-6 h-6 rounded bg-fuchsia-400/40 flex items-center justify-center text-[10px]">🎵</div>
                <div className="flex-1">
                  <div className="text-[6px] font-bold text-foreground">Festival Abidjan Live</div>
                  <div className="text-[5px] text-muted-foreground">12 Oct • Palais des Sports</div>
                </div>
                <div className="text-[6px] text-fuchsia-400 font-bold">15 000 F</div>
              </div>

              {/* Category tickets */}
              <div className="grid grid-cols-3 gap-1">
                <div className="rounded bg-gradient-to-b from-fuchsia-500/20 to-fuchsia-500/10 p-1 text-center border border-fuchsia-400/30">
                  <div className="text-[5px] font-bold text-fuchsia-400">VIP</div>
                  <div className="text-[5px] text-foreground">50 000 F</div>
                  <div className="w-full h-1 bg-muted rounded-full mt-0.5 overflow-hidden">
                    <div className="w-[18%] h-full bg-fuchsia-500 rounded-full" />
                  </div>
                  <div className="text-[4px] text-muted-foreground">18/100</div>
                </div>
                <div className="rounded bg-gradient-to-b from-pink-500/20 to-pink-500/10 p-1 text-center">
                  <div className="text-[5px] font-bold text-pink-400">GOLD</div>
                  <div className="text-[5px] text-foreground">25 000 F</div>
                  <div className="w-full h-1 bg-muted rounded-full mt-0.5 overflow-hidden">
                    <div className="w-[64%] h-full bg-pink-500 rounded-full" />
                  </div>
                  <div className="text-[4px] text-muted-foreground">64/100</div>
                </div>
                <div className="rounded bg-gradient-to-b from-cyan-500/20 to-cyan-500/10 p-1 text-center">
                  <div className="text-[5px] font-bold text-cyan-400">STD</div>
                  <div className="text-[5px] text-foreground">15 000 F</div>
                  <div className="w-full h-1 bg-muted rounded-full mt-0.5 overflow-hidden">
                    <div className="w-[92%] h-full bg-cyan-500 rounded-full" />
                  </div>
                  <div className="text-[4px] text-muted-foreground">92/100</div>
                </div>
              </div>

              {/* Buy button */}
              <div className="mx-auto w-20 h-4 rounded bg-gradient-to-r from-fuchsia-500 to-pink-500 flex items-center justify-center">
                <span className="text-[6px] text-white font-bold">ACHETER MON BILLET</span>
              </div>

              {/* Payment methods */}
              <div className="flex items-center justify-center gap-1">
                <span className="text-[4px] text-muted-foreground">Paiement :</span>
                <div className="px-1 rounded bg-orange-500/20 text-[4px] text-orange-400">Orange</div>
                <div className="px-1 rounded bg-yellow-500/20 text-[4px] text-yellow-400">MTN</div>
                <div className="px-1 rounded bg-blue-500/20 text-[4px] text-blue-400">Wave</div>
                <div className="px-1 rounded bg-emerald-500/20 text-[4px] text-emerald-400">Visa</div>
              </div>
            </div>
          </div>
        </div>

        {/* Browser stand */}
        <div className="mx-auto w-10 h-3 bg-gradient-to-b from-border to-muted rounded-b" />
        <div className="mx-auto w-16 h-1.5 bg-gradient-to-b from-border to-muted rounded-b-lg" />
      </motion.div>

      {/* Live sales badge */}
      <div className="absolute bottom-5 right-8 px-2 py-1 bg-card/80 rounded-full border border-border/50 text-xs text-green-400 font-medium">
        🔴 1 248 billets vendus
      </div>
    </div>
  );
};

export default Skill3DTicket;
