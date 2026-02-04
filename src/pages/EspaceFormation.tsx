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
  ChevronRight,
  GraduationCap,
  Home,
  Calendar
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Dashboard Component
const Dashboard = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl font-bold mb-2">Tableau de bord</h1>
      <p className="text-muted-foreground">Bienvenue dans votre espace formation</p>
    </div>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      {[
        { label: 'Formations suivies', value: '3', icon: BookOpen, color: 'bg-primary/20 text-primary' },
        { label: 'Progression moyenne', value: '67%', icon: GraduationCap, color: 'bg-green-500/20 text-green-400' },
        { label: 'Webinaires à venir', value: '2', icon: Video, color: 'bg-blue-500/20 text-blue-400' },
        { label: 'Sessions coaching', value: '1', icon: UserCircle, color: 'bg-orange-500/20 text-orange-400' },
      ].map((stat, idx) => (
        <div key={idx} className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
          <div className={cn('w-12 h-12 rounded-xl flex items-center justify-center mb-4', stat.color)}>
            <stat.icon className="w-6 h-6" />
          </div>
          <p className="text-2xl font-bold">{stat.value}</p>
          <p className="text-sm text-muted-foreground">{stat.label}</p>
        </div>
      ))}
    </div>

    <div className="grid lg:grid-cols-2 gap-6">
      <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
        <h3 className="font-semibold mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-primary" />
          Formations en cours
        </h3>
        <div className="space-y-4">
          {[
            { name: 'Développement Web Avancé', progress: 75 },
            { name: 'Marketing Digital', progress: 45 },
            { name: 'Automatisation & IA', progress: 20 },
          ].map((course, idx) => (
            <div key={idx} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>{course.name}</span>
                <span className="text-primary">{course.progress}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
        <h3 className="font-semibold mb-4 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-primary" />
          Prochaines sessions
        </h3>
        <div className="space-y-3">
          {[
            { name: 'Webinaire: IA pour débutants', date: 'Demain, 14h00', type: 'Webinaire' },
            { name: 'Coaching personnalisé', date: 'Jeudi, 10h00', type: 'Coaching' },
            { name: 'Formation présentielle', date: 'Samedi, 09h00', type: 'Présentiel' },
          ].map((session, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
              <div>
                <p className="font-medium text-sm">{session.name}</p>
                <p className="text-xs text-muted-foreground">{session.date}</p>
              </div>
              <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">
                {session.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// Formations Component
const Formations = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl font-bold mb-2">Formations</h1>
      <p className="text-muted-foreground">Découvrez notre catalogue de formations</p>
    </div>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { title: 'Développement Web Full Stack', price: '150 000 FCFA', duration: '40h', level: 'Intermédiaire' },
        { title: 'Marketing Digital Complet', price: '100 000 FCFA', duration: '25h', level: 'Débutant' },
        { title: 'IA & Automatisation', price: '200 000 FCFA', duration: '35h', level: 'Avancé' },
        { title: 'Design UI/UX', price: '120 000 FCFA', duration: '30h', level: 'Intermédiaire' },
        { title: 'E-commerce avec Shopify', price: '80 000 FCFA', duration: '15h', level: 'Débutant' },
        { title: 'SEO Avancé', price: '90 000 FCFA', duration: '20h', level: 'Intermédiaire' },
      ].map((course, idx) => (
        <div key={idx} className="group p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all">
          <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl mb-4 flex items-center justify-center">
            <BookOpen className="w-12 h-12 text-primary/50" />
          </div>
          <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{course.title}</h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <span>{course.duration}</span>
            <span>•</span>
            <span>{course.level}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-bold text-primary">{course.price}</span>
            <Button size="sm">Voir plus</Button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Placeholder components for other sections
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
        return <Dashboard />;
      case 'formations':
        return <Formations />;
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
        return <Dashboard />;
    }
  };

  return (
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
        "fixed lg:static inset-y-0 left-0 z-50 w-64 bg-sidebar-background border-r border-sidebar-border transition-transform duration-300 lg:translate-x-0",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-4 border-b border-sidebar-border flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-bold text-lg">UD Academy</span>
                <p className="text-xs text-muted-foreground">Espace Formation</p>
              </div>
            </Link>
            <button 
              className="lg:hidden p-2 hover:bg-muted rounded-lg"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {menuItems.map((item) => (
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
            ))}
          </nav>

          {/* Back to site */}
          <div className="p-4 border-t border-sidebar-border">
            <Link 
              to="/"
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent transition-all"
            >
              <Home className="w-5 h-5" />
              Retour au site
            </Link>
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
  );
};

export default EspaceFormation;