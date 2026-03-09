import { motion } from 'framer-motion';

const Skill3DEcommerce = () => {
  return (
    <div className="relative w-full h-64 md:h-80 flex items-center justify-center">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-emerald-500/15 blur-3xl rounded-full opacity-40" />

      {/* Floating product cards */}
      <div className="absolute top-6 left-8 w-12 h-14 rounded-lg bg-gradient-to-b from-emerald-500/40 to-emerald-700/40 shadow-lg -rotate-6 p-1">
        <div className="w-full h-7 bg-white/10 rounded mb-0.5" />
        <div className="text-[5px] text-white font-bold">€29.99</div>
      </div>

      <div className="absolute bottom-8 right-6 w-10 h-12 rounded-lg bg-gradient-to-b from-teal-500/40 to-emerald-600/40 shadow-lg rotate-3 p-1">
        <div className="w-full h-6 bg-white/10 rounded mb-0.5" />
        <div className="text-[5px] text-white font-bold">€49.99</div>
      </div>

      {/* Shopping cart icon */}
      <div className="absolute top-10 right-10 w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg">
        <span className="text-sm">🛒</span>
      </div>

      {/* Main smartphone with shop */}
      <motion.div
        className="relative cursor-pointer"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{ perspective: 1000 }}
      >
        {/* Phone frame */}
        <div className="w-32 h-60 md:w-40 md:h-72 rounded-3xl bg-gradient-to-br from-muted via-border to-muted p-1.5 shadow-xl shadow-emerald-500/30">
          {/* Screen */}
          <div className="w-full h-full rounded-2xl bg-background overflow-hidden relative">
            {/* Status bar */}
            <div className="h-5 bg-emerald-500/15 flex items-center justify-between px-2.5">
              <span className="text-[7px] text-muted-foreground">9:41</span>
              <div className="flex gap-1">
                <div className="w-2.5 h-1.5 bg-muted-foreground/50 rounded-sm" />
                <div className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full" />
              </div>
            </div>

            {/* Shop header */}
            <div className="px-2 py-1.5 flex items-center justify-between border-b border-border/30">
              <div className="text-[8px] font-bold text-foreground">🏪 Ma Boutique</div>
              <div className="flex items-center gap-1">
                <div className="w-6 h-2.5 bg-muted rounded-full" />
                <div className="text-[7px]">🛒<sup className="text-[5px] text-emerald-400">3</sup></div>
              </div>
            </div>

            {/* Product grid */}
            <div className="p-1.5 space-y-1.5">
              <div className="grid grid-cols-2 gap-1">
                {[
                  { emoji: '👟', name: 'Sneakers', price: '€59', color: 'from-emerald-500/20 to-emerald-600/10' },
                  { emoji: '👜', name: 'Sac cuir', price: '€89', color: 'from-teal-500/20 to-teal-600/10' },
                  { emoji: '⌚', name: 'Montre', price: '€129', color: 'from-green-500/20 to-green-600/10' },
                  { emoji: '👕', name: 'T-shirt', price: '€35', color: 'from-emerald-500/20 to-teal-500/10' },
                ].map((item, i) => (
                  <div key={i} className={`rounded-lg bg-gradient-to-b ${item.color} p-1`}>
                    <div className="w-full h-10 bg-white/5 rounded flex items-center justify-center text-lg">
                      {item.emoji}
                    </div>
                    <div className="text-[5px] text-foreground font-medium truncate mt-0.5">{item.name}</div>
                    <div className="flex items-center justify-between">
                      <div className="text-[5px] text-emerald-400 font-bold">{item.price}</div>
                      <div className="text-[4px] text-yellow-400">★★★★</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add to cart button */}
              <div className="w-full h-5 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center">
                <span className="text-[6px] text-white font-bold">AJOUTER AU PANIER</span>
              </div>

              {/* Payment methods */}
              <div className="flex items-center justify-center gap-1">
                <div className="w-5 h-3 bg-blue-500/30 rounded-sm" />
                <div className="w-5 h-3 bg-orange-500/30 rounded-sm" />
                <div className="w-5 h-3 bg-yellow-500/30 rounded-sm" />
              </div>
            </div>

            {/* Bottom nav */}
            <div className="absolute bottom-0 left-0 right-0 h-7 bg-card/80 backdrop-blur-sm flex items-center justify-around px-2 border-t border-border/30">
              <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/50" />
              <div className="w-3.5 h-3.5 rounded-full bg-muted" />
              <div className="w-3.5 h-3.5 rounded-full bg-muted" />
              <div className="w-3.5 h-3.5 rounded-full bg-muted" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Revenue badge */}
      <div className="absolute bottom-4 left-10 px-2 py-1 bg-card/80 rounded-full border border-border/50 text-xs text-emerald-400 font-medium">
        +€12.4K/mois
      </div>
    </div>
  );
};

export default Skill3DEcommerce;
