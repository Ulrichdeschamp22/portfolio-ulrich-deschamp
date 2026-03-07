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

      {/* Main store visual */}
      <motion.div
        className="relative cursor-pointer"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{ perspective: 1000 }}
      >
        {/* Browser frame */}
        <div className="w-52 h-40 md:w-64 md:h-48 rounded-xl bg-gradient-to-br from-muted via-border to-muted p-1.5 shadow-xl shadow-emerald-500/30">
          <div className="w-full h-full rounded-lg bg-background overflow-hidden relative">
            {/* Header */}
            <div className="h-5 bg-emerald-500/20 flex items-center px-2 gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <span className="text-[6px] text-muted-foreground ml-2">ma-boutique.com</span>
            </div>

            {/* Store content */}
            <div className="p-1.5 space-y-1.5">
              {/* Nav */}
              <div className="flex items-center justify-between">
                <div className="text-[7px] font-bold text-foreground">🏪 Boutique</div>
                <div className="flex items-center gap-1">
                  <div className="w-8 h-2.5 bg-muted rounded-full" />
                  <div className="text-[7px]">🛒<sup className="text-[5px] text-emerald-400">3</sup></div>
                </div>
              </div>

              {/* Product grid */}
              <div className="grid grid-cols-3 gap-1">
                {[
                  { color: 'from-emerald-500/20 to-emerald-600/10', price: '€19' },
                  { color: 'from-teal-500/20 to-teal-600/10', price: '€35' },
                  { color: 'from-green-500/20 to-green-600/10', price: '€55' },
                ].map((item, i) => (
                  <div key={i} className={`rounded bg-gradient-to-b ${item.color} p-0.5`}>
                    <div className="w-full h-8 bg-white/5 rounded mb-0.5" />
                    <div className="text-[5px] text-foreground font-medium">Produit</div>
                    <div className="text-[5px] text-emerald-400 font-bold">{item.price}</div>
                  </div>
                ))}
              </div>

              {/* Payment bar */}
              <div className="flex items-center justify-between bg-card/50 rounded p-1">
                <div className="flex gap-0.5">
                  <div className="w-4 h-2.5 bg-blue-500/30 rounded-sm" />
                  <div className="w-4 h-2.5 bg-orange-500/30 rounded-sm" />
                  <div className="w-4 h-2.5 bg-yellow-500/30 rounded-sm" />
                </div>
                <div className="w-12 h-3 rounded bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center">
                  <span className="text-[5px] text-white font-bold">ACHETER</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stand */}
        <div className="mx-auto w-10 h-3 bg-gradient-to-b from-border to-muted rounded-b" />
        <div className="mx-auto w-16 h-1.5 bg-gradient-to-b from-border to-muted rounded-b-lg" />
      </motion.div>

      {/* Revenue badge */}
      <div className="absolute bottom-4 left-10 px-2 py-1 bg-card/80 rounded-full border border-border/50 text-xs text-emerald-400 font-medium">
        +€12.4K/mois
      </div>
    </div>
  );
};

export default Skill3DEcommerce;
