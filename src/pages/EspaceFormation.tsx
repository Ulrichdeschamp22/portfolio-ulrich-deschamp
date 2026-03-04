import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, BookOpen, Users, Video, UserCircle,
  MessageSquare, Newspaper, Handshake, Bug, CreditCard,
  Settings, Menu, X, ChevronLeft, ChevronRight,
  GraduationCap, Home, Calendar, Rocket
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { motion } from 'framer-motion';

const PlaceholderSection = ({ title, description, icon: Icon }: { title: string; description: string; icon: React.ElementType }) => (
  <motion.div 
    className="flex flex-col items-center justify-center py-16 text-center relative"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
  >
    <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-8 relative">
      <Icon className="w-12 h-12 text-primary" />
      <div className="absolute inset-0 rounded-3xl bg-primary/10 animate-pulse" />
    </div>
    <h2 className="text-2xl sm:text-3xl font-bold mb-3">{title}</h2>
    <p className="text-muted-foreground max-w-md mb-8 text-sm sm:text-base">{description}</p>
    <div className="flex flex-col sm:flex-row gap-3">
      <Button variant="outline" className="gap-2">
        <Rocket className="w-4 h-4" />
        Bientôt disponible
      </Button>
      <Button variant="ghost" asChild>
        <Link to="/#contact">Être notifié</Link>
      </Button>
    </div>
  </motion.div>
);

const EspaceFormation = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Tableau de bord', icon: LayoutDashboard },
    { id: 'formations', label: 'Formations', icon: BookOpen },
    { id: 'groups', label: 'Groupes / Classes', icon: Users },
    { id: 'webinars', label: 'Webinaires', icon: Video },
    { id: 'coaching', label: 'Coaching', icon: UserCircle },
    { id: 'presentiel', label: 'Présentiel', icon: Calendar },
    { id: 'forum', label: 'Forum', icon: MessageSquare },
    { id: 'news', label: 'Actualités', icon: Newspaper },
    { id: 'partners', label: 'Partenaires', icon: Handshake },
    { id: 'bugs', label: 'Signalement', icon: Bug },
    { id: 'subscription', label: 'Abonnements', icon: CreditCard },
    { id: 'settings', label: 'Paramètres', icon: Settings },
  ];

  const bottomNavItems = [
    { id: 'dashboard', label: 'Accueil', icon: Home },
    { id: 'formations', label: 'Formations', icon: BookOpen },
    { id: 'webinars', label: 'Webinaires', icon: Video },
    { id: 'groups', label: 'Groupes', icon: Users },
    { id: 'settings', label: 'Profil', icon: UserCircle },
  ];

  const renderContent = () => {
    const sections: Record<string, { title: string; description: string; icon: React.ElementType }> = {
      dashboard: { title: 'Tableau de bord', description: 'Vue globale de vos formations, progression et prochaines sessions.', icon: LayoutDashboard },
      formations: { title: 'Formations', description: 'Découvrez notre catalogue de formations et suivez votre progression.', icon: BookOpen },
      groups: { title: 'Groupes & Classes', description: 'Gérez vos groupes de classe et accédez aux contenus réservés.', icon: Users },
      webinars: { title: 'Webinaires', description: 'Participez à des sessions live et accédez aux replays.', icon: Video },
      coaching: { title: 'Coaching', description: 'Réservez des sessions de coaching personnalisées.', icon: UserCircle },
      presentiel: { title: 'Formations Présentiel', description: 'Découvrez nos formations en présentiel à Abidjan.', icon: Calendar },
      forum: { title: 'Forum', description: 'Échangez avec la communauté et posez vos questions.', icon: MessageSquare },
      news: { title: 'Actualités', description: 'Restez informé des dernières nouvelles et formations.', icon: Newspaper },
      partners: { title: 'Partenaires', description: 'Découvrez nos partenaires et opportunités de collaboration.', icon: Handshake },
      bugs: { title: 'Signalement de bugs', description: 'Signalez un problème technique.', icon: Bug },
      subscription: { title: 'Abonnements', description: 'Gérez vos abonnements et accès premium.', icon: CreditCard },
      settings: { title: 'Paramètres', description: 'Configurez votre profil et vos préférences.', icon: Settings },
    };
    const section = sections[activeSection] || sections.dashboard;
    return <PlaceholderSection {...section} />;
  };

  return (
    <TooltipProvider delayDuration={0}>
      <div className="min-h-screen bg-background flex relative overflow-hidden">
        {/* "Bientôt disponible" diagonal banner */}
        <div className="fixed top-0 right-0 z-[60] pointer-events-none">
          <div className="absolute top-[40px] right-[-80px] w-[320px] text-center rotate-45 py-2 bg-primary shadow-lg shadow-primary/40 text-primary-foreground text-sm font-bold tracking-wider"
            style={{
              background: 'linear-gradient(90deg, hsl(271 91% 55%), hsl(271 91% 65%), hsl(271 91% 55%))',
              backgroundSize: '200% 100%',
              animation: 'shimmer-banner 3s ease-in-out infinite',
            }}
          >
            ✨ Bientôt disponible
          </div>
        </div>

        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside className={cn(
          "fixed lg:static inset-y-0 left-0 z-50 transition-all duration-300 lg:translate-x-0 flex flex-col",
          "bg-gradient-to-b from-card to-card/95 backdrop-blur-xl border-r border-border/30",
          sidebarCollapsed ? "w-[72px]" : "w-[260px]",
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}>
          {/* Logo */}
          <div className={cn(
            "p-4 border-b border-border/20 flex items-center",
            sidebarCollapsed ? "justify-center" : "justify-between"
          )}>
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg shadow-primary/20">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              {!sidebarCollapsed && (
                <div>
                  <span className="font-bold text-base">UD Academy</span>
                  <p className="text-[11px] text-muted-foreground leading-none mt-0.5">Espace Formation</p>
                </div>
              )}
            </Link>
            <button 
              className="lg:hidden p-2 hover:bg-muted rounded-lg"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Collapse Toggle */}
          <div className="hidden lg:flex justify-end px-2 py-2 border-b border-border/20">
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="p-2 hover:bg-muted rounded-lg transition-colors text-muted-foreground hover:text-foreground"
            >
              {sidebarCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            </button>
          </div>

          {/* Navigation */}
          <nav className={cn(
            "flex-1 overflow-y-auto py-3",
            sidebarCollapsed ? "px-2 space-y-1" : "px-3 space-y-0.5"
          )}>
            {menuItems.map((item) => {
              const isActive = activeSection === item.id;
              return sidebarCollapsed ? (
                <Tooltip key={item.id}>
                  <TooltipTrigger asChild>
                    <button
                      onClick={() => { setActiveSection(item.id); setSidebarOpen(false); }}
                      className={cn(
                        "w-full flex items-center justify-center p-3 rounded-xl transition-all duration-200",
                        isActive
                          ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      )}
                    >
                      <item.icon className="w-5 h-5" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="right" className="font-medium">
                    {item.label}
                  </TooltipContent>
                </Tooltip>
              ) : (
                <button
                  key={item.id}
                  onClick={() => { setActiveSection(item.id); setSidebarOpen(false); }}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <item.icon className="w-[18px] h-[18px]" />
                  <span className="truncate">{item.label}</span>
                  {isActive && <ChevronRight className="w-4 h-4 ml-auto opacity-60" />}
                </button>
              );
            })}
          </nav>

          {/* Back to site */}
          <div className={cn("border-t border-border/20", sidebarCollapsed ? "p-2" : "p-3")}>
            {sidebarCollapsed ? (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link to="/" className="flex items-center justify-center p-3 rounded-xl text-muted-foreground hover:bg-muted hover:text-foreground transition-all">
                    <Home className="w-5 h-5" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right" className="font-medium">Retour au site</TooltipContent>
              </Tooltip>
            ) : (
              <Link to="/" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-all">
                <Home className="w-[18px] h-[18px]" />
                Retour au site
              </Link>
            )}
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col min-h-screen">
          {/* Header */}
          <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-xl border-b border-border/30 px-4 lg:px-8 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button 
                  className="lg:hidden p-2 hover:bg-muted rounded-lg"
                  onClick={() => setSidebarOpen(true)}
                >
                  <Menu className="w-5 h-5" />
                </button>
                <div className="hidden sm:block">
                  <h1 className="text-sm font-semibold">{menuItems.find(m => m.id === activeSection)?.label}</h1>
                  <p className="text-xs text-muted-foreground">Espace de formation en ligne</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm" asChild>
                  <Link to="/auth">Se connecter</Link>
                </Button>
                <Button size="sm" className="shadow-md shadow-primary/20">S'inscrire</Button>
              </div>
            </div>
          </header>

          {/* Content */}
          <main className="flex-1 p-4 lg:p-8 pb-24 lg:pb-8">
            <div className="max-w-4xl mx-auto">
              {renderContent()}
            </div>
          </main>

          {/* Mobile Bottom Navigation */}
          <nav className="fixed bottom-0 left-0 right-0 lg:hidden bg-background/95 backdrop-blur-xl border-t border-border/30 z-40 safe-area-inset-bottom">
            <div className="flex items-center justify-around py-1.5">
              {bottomNavItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={cn(
                    "flex flex-col items-center gap-0.5 px-3 py-2 rounded-xl transition-all",
                    activeSection === item.id
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  <item.icon className={cn("w-5 h-5", activeSection === item.id && "scale-110")} />
                  <span className="text-[10px] font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default EspaceFormation;
