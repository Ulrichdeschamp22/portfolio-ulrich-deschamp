import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BookOpen, 
  Users, 
  Video, 
  UserCircle,
  MessageSquare,
  Newspaper,
  Handshake,
  Bug,
  CreditCard,
  Settings,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Home,
  Calendar
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

// Placeholder components for all sections
const PlaceholderSection = ({ title, description, icon: Icon }: { title: string; description: string; icon: React.ElementType }) => (
  <div className="flex flex-col items-center justify-center py-20 text-center">
    <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
      <Icon className="w-10 h-10 text-primary" />
    </div>
    <h2 className="text-2xl font-bold mb-2">{title}</h2>
    <p className="text-muted-foreground max-w-md">{description}</p>
    <Button className="mt-6" variant="outline">Bientôt disponible</Button>
  </div>
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
    switch (activeSection) {
      case 'dashboard':
        return <PlaceholderSection title="Tableau de bord" description="Vue globale de vos formations, progression et prochaines sessions." icon={LayoutDashboard} />;
      case 'formations':
        return <PlaceholderSection title="Formations" description="Découvrez notre catalogue de formations et suivez votre progression." icon={BookOpen} />;
      case 'groups':
        return <PlaceholderSection title="Groupes & Classes" description="Gérez vos groupes de classe et accédez aux contenus réservés." icon={Users} />;
      case 'webinars':
        return <PlaceholderSection title="Webinaires" description="Participez à des sessions live et accédez aux replays." icon={Video} />;
      case 'coaching':
        return <PlaceholderSection title="Coaching" description="Réservez des sessions de coaching personnalisées." icon={UserCircle} />;
      case 'presentiel':
        return <PlaceholderSection title="Formations Présentiel" description="Découvrez nos formations en présentiel à Abidjan." icon={Calendar} />;
      case 'forum':
        return <PlaceholderSection title="Forum" description="Échangez avec la communauté et posez vos questions." icon={MessageSquare} />;
      case 'news':
        return <PlaceholderSection title="Actualités" description="Restez informé des dernières nouvelles et formations." icon={Newspaper} />;
      case 'partners':
        return <PlaceholderSection title="Partenaires" description="Découvrez nos partenaires et opportunités de collaboration." icon={Handshake} />;
      case 'bugs':
        return <PlaceholderSection title="Signalement de bugs" description="Signalez un problème technique." icon={Bug} />;
      case 'subscription':
        return <PlaceholderSection title="Abonnements" description="Gérez vos abonnements et accès premium." icon={CreditCard} />;
      case 'settings':
        return <PlaceholderSection title="Paramètres" description="Configurez votre profil et vos préférences." icon={Settings} />;
      default:
        return <PlaceholderSection title="Tableau de bord" description="Vue globale de vos formations, progression et prochaines sessions." icon={LayoutDashboard} />;
    }
  };

  return (
    <TooltipProvider delayDuration={0}>
      <div className="min-h-screen bg-background flex">
        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside className={cn(
          "fixed lg:static inset-y-0 left-0 z-50 bg-card/95 backdrop-blur-xl border-r border-border/50 transition-all duration-300 lg:translate-x-0",
          sidebarCollapsed ? "w-[70px]" : "w-64",
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}>
          <div className="flex flex-col h-full">
            {/* Logo */}
            <div className={cn(
              "p-4 border-b border-border/50 flex items-center",
              sidebarCollapsed ? "justify-center" : "justify-between"
            )}>
              <Link to="/" className="flex items-center gap-2">
                <div className={cn(
                  "rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center",
                  sidebarCollapsed ? "w-10 h-10" : "w-10 h-10"
                )}>
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                {!sidebarCollapsed && (
                  <div>
                    <span className="font-bold text-lg">UD Academy</span>
                    <p className="text-xs text-muted-foreground">Espace Formation</p>
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

            {/* Collapse Toggle Button - Desktop only */}
            <div className="hidden lg:flex justify-end p-2 border-b border-border/50">
              <button
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
              >
                {sidebarCollapsed ? (
                  <ChevronRight className="w-4 h-4" />
                ) : (
                  <ChevronLeft className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Navigation */}
            <nav className={cn(
              "flex-1 overflow-y-auto",
              sidebarCollapsed ? "p-2 space-y-1" : "p-4 space-y-1"
            )}>
              {menuItems.map((item) => (
                sidebarCollapsed ? (
                  <Tooltip key={item.id}>
                    <TooltipTrigger asChild>
                      <button
                        onClick={() => {
                          setActiveSection(item.id);
                          setSidebarOpen(false);
                        }}
                        className={cn(
                          "w-full flex items-center justify-center p-3 rounded-xl transition-all",
                          activeSection === item.id
                            ? "bg-primary text-primary-foreground"
                            : "text-sidebar-foreground hover:bg-sidebar-accent"
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
                    onClick={() => {
                      setActiveSection(item.id);
                      setSidebarOpen(false);
                    }}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all",
                      activeSection === item.id
                        ? "bg-primary text-primary-foreground"
                        : "text-sidebar-foreground hover:bg-sidebar-accent"
                    )}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.label}
                    {activeSection === item.id && (
                      <ChevronRight className="w-4 h-4 ml-auto" />
                    )}
                  </button>
                )
              ))}
            </nav>

            {/* Back to site */}
            <div className={cn(
              "border-t border-border/50",
              sidebarCollapsed ? "p-2" : "p-4"
            )}>
              {sidebarCollapsed ? (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link 
                      to="/"
                      className="flex items-center justify-center p-3 rounded-xl text-sidebar-foreground hover:bg-sidebar-accent transition-all"
                    >
                      <Home className="w-5 h-5" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right" className="font-medium">
                    Retour au site
                  </TooltipContent>
                </Tooltip>
              ) : (
                <Link 
                  to="/"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent transition-all"
                >
                  <Home className="w-5 h-5" />
                  Retour au site
                </Link>
              )}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col min-h-screen">
          {/* Header */}
          <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-xl border-b border-border px-4 lg:px-6 py-4">
            <div className="flex items-center justify-between">
              <button 
                className="lg:hidden p-2 hover:bg-muted rounded-lg"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="w-5 h-5" />
              </button>
              
              <div className="flex items-center gap-4 ml-auto">
                <Button variant="outline" size="sm" asChild>
                  <Link to="/auth">Se connecter</Link>
                </Button>
                <Button size="sm">S'inscrire</Button>
              </div>
            </div>
          </header>

          {/* Content */}
          <main className="flex-1 p-4 lg:p-6 pb-24 lg:pb-6">
            {renderContent()}
          </main>

          {/* Mobile Bottom Navigation */}
          <nav className="fixed bottom-0 left-0 right-0 lg:hidden bg-background/90 backdrop-blur-xl border-t border-border z-40">
            <div className="flex items-center justify-around py-2">
              {bottomNavItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={cn(
                    "flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all",
                    activeSection === item.id
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="text-xs">{item.label}</span>
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
