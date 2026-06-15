import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Home, Mail, Briefcase, Lightbulb, LayoutDashboard, Palette, LogOut } from 'lucide-react';
import AdminMessages from '@/components/admin/AdminMessages';
import AdminProjects from '@/components/admin/AdminProjects';
import AdminSkills from '@/components/admin/AdminSkills';
import AdminDashboard from '@/components/admin/AdminDashboard';
import AdminDesignPortfolio from '@/components/admin/AdminDesignPortfolio';
import { useAuth } from '@/hooks/useAuth';

const TABS = [
  { value: 'dashboard', label: 'Tableau', icon: LayoutDashboard },
  { value: 'messages', label: 'Messages', icon: Mail },
  { value: 'projects', label: 'Projets', icon: Briefcase },
  { value: 'design', label: 'Design', icon: Palette },
  { value: 'skills', label: 'Skills', icon: Lightbulb },
];

const Administration = () => {
  const navigate = useNavigate();
  const { user, isAdmin, loading, signOut } = useAuth();
  const [active, setActive] = useState('dashboard');

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      navigate('/auth');
    }
  }, [user, isAdmin, loading, navigate]);

  if (loading || !user || !isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-24 md:pb-0">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3 min-w-0">
            <div className="p-2 rounded-lg bg-primary/10 shrink-0">
              <LayoutDashboard className="h-5 w-5 text-primary" />
            </div>
            <h1 className="text-lg sm:text-xl font-bold truncate">
              <span className="text-gradient">Administration</span>
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={async () => { await signOut(); navigate('/auth'); }}
              aria-label="Déconnexion"
            >
              <LogOut className="h-4 w-4 sm:mr-2" />
              <span className="hidden sm:inline">Déconnexion</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate('/')}
              aria-label="Retour au site"
            >
              <Home className="h-4 w-4 sm:mr-2" />
              <span className="hidden sm:inline">Accueil</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-6 md:py-8 relative z-10">
        <Tabs value={active} onValueChange={setActive} className="space-y-6">
          {/* Desktop tabs (top) */}
          <TabsList className="hidden md:grid w-full max-w-3xl mx-auto grid-cols-5 glass-card">
            {TABS.map(({ value, label, icon: Icon }) => (
              <TabsTrigger key={value} value={value} className="flex items-center gap-2">
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="dashboard"><AdminDashboard /></TabsContent>
          <TabsContent value="messages"><AdminMessages /></TabsContent>
          <TabsContent value="projects"><AdminProjects /></TabsContent>
          <TabsContent value="design"><AdminDesignPortfolio /></TabsContent>
          <TabsContent value="skills"><AdminSkills /></TabsContent>
        </Tabs>
      </main>

      {/* Mobile bottom navigation */}
      <nav
        className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-background/90 backdrop-blur-xl border-t border-border/50 pb-[env(safe-area-inset-bottom)]"
        aria-label="Navigation administration"
      >
        <ul className="grid grid-cols-5">
          {TABS.map(({ value, label, icon: Icon }) => {
            const isActive = active === value;
            return (
              <li key={value}>
                <button
                  type="button"
                  onClick={() => setActive(value)}
                  className="w-full flex flex-col items-center justify-center gap-1 py-2.5 px-1 transition-colors"
                  aria-current={isActive ? 'page' : undefined}
                  aria-label={label}
                >
                  <span
                    className={`flex items-center justify-center h-9 w-9 rounded-xl transition-all ${
                      isActive
                        ? 'bg-primary/15 text-primary shadow-[0_0_20px_-4px_hsl(var(--primary)/0.6)]'
                        : 'text-muted-foreground'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span
                    className={`text-[10px] font-medium leading-none transition-colors ${
                      isActive ? 'text-primary' : 'text-muted-foreground'
                    }`}
                  >
                    {label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Administration;
