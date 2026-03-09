import { motion } from 'framer-motion';

const Skill3DWebApp = () => {
  return (
    <div className="relative w-full h-64 md:h-80 flex items-center justify-center">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-sky-500/15 blur-3xl rounded-full opacity-40" />

      {/* Floating elements */}
      <div className="absolute top-6 right-8 w-8 h-8 rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center shadow-lg">
        <span className="text-sm">🌐</span>
      </div>
      <div className="absolute bottom-12 left-8 w-7 h-7 rounded-full bg-gradient-to-br from-blue-400 to-sky-600 flex items-center justify-center shadow-lg">
        <span className="text-xs">🔗</span>
      </div>

      {/* Main web app visual */}
      <motion.div
        className="relative cursor-pointer"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{ perspective: 1000 }}
      >
        {/* Browser frame */}
        <div className="w-52 h-40 md:w-64 md:h-48 rounded-xl bg-gradient-to-br from-muted via-border to-muted p-1.5 shadow-xl shadow-sky-500/30">
          <div className="w-full h-full rounded-lg bg-background overflow-hidden relative">
            {/* Browser bar */}
            <div className="h-5 bg-sky-500/15 flex items-center px-2 gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <div className="flex-1 mx-2 h-2.5 bg-muted/50 rounded-full flex items-center px-1">
                <span className="text-[5px] text-muted-foreground">🔒 mon-app-web.com</span>
              </div>
            </div>

            {/* Web app content */}
            <div className="flex h-[calc(100%-1.25rem)]">
              {/* Navigation */}
              <div className="w-10 bg-card/40 border-r border-border/30 p-1 space-y-1">
                <div className="w-6 h-3 mx-auto rounded bg-sky-500/40 flex items-center justify-center">
                  <span className="text-[5px]">🏠</span>
                </div>
                <div className="w-6 h-3 mx-auto rounded bg-muted flex items-center justify-center">
                  <span className="text-[5px]">📋</span>
                </div>
                <div className="w-6 h-3 mx-auto rounded bg-muted flex items-center justify-center">
                  <span className="text-[5px]">👥</span>
                </div>
                <div className="w-6 h-3 mx-auto rounded bg-muted flex items-center justify-center">
                  <span className="text-[5px]">⚙️</span>
                </div>
              </div>

              {/* Main content */}
              <div className="flex-1 p-1.5 space-y-1">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="text-[7px] font-bold text-foreground">Dashboard</div>
                  <div className="w-4 h-4 rounded-full bg-sky-500/30 flex items-center justify-center">
                    <span className="text-[6px]">👤</span>
                  </div>
                </div>

                {/* Content cards */}
                <div className="grid grid-cols-2 gap-1">
                  <div className="h-10 bg-gradient-to-br from-sky-500/15 to-blue-500/10 rounded-lg p-1">
                    <div className="text-[5px] text-muted-foreground">Projets</div>
                    <div className="text-[8px] font-bold text-sky-400">24</div>
                    <div className="w-full h-1 bg-muted rounded-full overflow-hidden mt-0.5">
                      <div className="w-3/4 h-full bg-sky-500 rounded-full" />
                    </div>
                  </div>
                  <div className="h-10 bg-gradient-to-br from-blue-500/15 to-indigo-500/10 rounded-lg p-1">
                    <div className="text-[5px] text-muted-foreground">Tâches</div>
                    <div className="text-[8px] font-bold text-blue-400">156</div>
                    <div className="w-full h-1 bg-muted rounded-full overflow-hidden mt-0.5">
                      <div className="w-1/2 h-full bg-blue-500 rounded-full" />
                    </div>
                  </div>
                </div>

                {/* List */}
                <div className="space-y-0.5">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="flex items-center gap-0.5 h-3 bg-card/30 rounded px-0.5">
                      <div className="w-1.5 h-1.5 rounded-sm bg-sky-500/40" />
                      <div className="flex-1 h-1 bg-muted/40 rounded" />
                      <div className="w-4 h-1.5 bg-sky-500/20 rounded text-[4px] text-center text-sky-400">Done</div>
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

      {/* Badge */}
      <div className="absolute bottom-4 left-10 px-2 py-1 bg-card/80 rounded-full border border-border/50 text-xs text-sky-400 font-medium">
        Progressive Web App
      </div>
    </div>
  );
};

export default Skill3DWebApp;
