import { motion } from 'framer-motion';

const Skill3DVote = () => {
  return (
    <div className="relative w-full h-64 md:h-80 flex items-center justify-center">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-indigo-500/15 blur-3xl rounded-full opacity-40" />

      {/* Floating vote cards */}
      <div className="absolute top-4 right-6 w-14 h-10 rounded-lg bg-gradient-to-r from-indigo-500/60 to-cyan-500/60 shadow-lg rotate-6 p-1.5">
        <div className="text-[6px] text-white font-bold">✓ VOTE</div>
        <div className="text-[5px] text-white/70">Candidat A</div>
      </div>

      <div className="absolute bottom-10 left-6 w-12 h-9 rounded-lg bg-gradient-to-r from-cyan-500/60 to-indigo-500/60 shadow-lg -rotate-3 p-1">
        <div className="text-[5px] text-white font-bold">✓ VOTE</div>
        <div className="text-[4px] text-white/70">Candidat B</div>
      </div>

      {/* Trophy/Award icon */}
      <div className="absolute top-8 left-12 w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center shadow-lg">
        <span className="text-sm">🏆</span>
      </div>

      {/* Main platform visual */}
      <motion.div
        className="relative cursor-pointer"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{ perspective: 1000 }}
      >
        {/* Monitor frame */}
        <div className="w-52 h-36 md:w-64 md:h-44 rounded-xl bg-gradient-to-br from-muted via-border to-muted p-1.5 shadow-xl shadow-indigo-500/30">
          {/* Screen */}
          <div className="w-full h-full rounded-lg bg-background overflow-hidden relative">
            {/* Header bar */}
            <div className="h-5 bg-indigo-500/20 flex items-center px-2 gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <span className="text-[6px] text-muted-foreground ml-2">plateforme-vote.ci</span>
            </div>

            {/* Vote content */}
            <div className="p-2 space-y-1.5">
              <div className="text-[8px] font-bold text-foreground text-center">🗳️ Votez maintenant</div>
              
              {/* Candidate cards */}
              <div className="grid grid-cols-3 gap-1">
                <div className="rounded bg-gradient-to-b from-indigo-500/20 to-indigo-500/10 p-1 text-center">
                  <div className="w-5 h-5 mx-auto rounded-full bg-indigo-400/30 mb-0.5" />
                  <div className="text-[5px] font-semibold text-foreground">Candidat 1</div>
                  <div className="text-[5px] text-indigo-400 font-bold">34%</div>
                </div>
                <div className="rounded bg-gradient-to-b from-cyan-500/20 to-cyan-500/10 p-1 text-center border border-cyan-400/30">
                  <div className="w-5 h-5 mx-auto rounded-full bg-cyan-400/30 mb-0.5" />
                  <div className="text-[5px] font-semibold text-foreground">Candidat 2</div>
                  <div className="text-[5px] text-cyan-400 font-bold">42%</div>
                </div>
                <div className="rounded bg-gradient-to-b from-purple-500/20 to-purple-500/10 p-1 text-center">
                  <div className="w-5 h-5 mx-auto rounded-full bg-purple-400/30 mb-0.5" />
                  <div className="text-[5px] font-semibold text-foreground">Candidat 3</div>
                  <div className="text-[5px] text-purple-400 font-bold">24%</div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden flex">
                <div className="w-[34%] h-full bg-indigo-500" />
                <div className="w-[42%] h-full bg-cyan-500" />
                <div className="w-[24%] h-full bg-purple-500" />
              </div>

              {/* Vote button */}
              <div className="mx-auto w-16 h-4 rounded bg-gradient-to-r from-indigo-500 to-cyan-500 flex items-center justify-center">
                <span className="text-[6px] text-white font-bold">VOTER</span>
              </div>
            </div>
          </div>
        </div>

        {/* Monitor stand */}
        <div className="mx-auto w-10 h-3 bg-gradient-to-b from-border to-muted rounded-b" />
        <div className="mx-auto w-16 h-1.5 bg-gradient-to-b from-border to-muted rounded-b-lg" />
      </motion.div>

      {/* Live counter badge */}
      <div className="absolute bottom-6 right-8 px-2 py-1 bg-card/80 rounded-full border border-border/50 text-xs text-green-400 font-medium">
        🔴 12.5K votes
      </div>
    </div>
  );
};

export default Skill3DVote;
