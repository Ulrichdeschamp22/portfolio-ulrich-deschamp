import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { Mail, Briefcase, Lightbulb, MessageSquare } from 'lucide-react';

interface Stats {
  totalMessages: number;
  newMessages: number;
  totalProjects: number;
  totalSkills: number;
}

const AdminDashboard = () => {
  const [stats, setStats] = useState<Stats>({
    totalMessages: 0,
    newMessages: 0,
    totalProjects: 0,
    totalSkills: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [messagesResult, newMessagesResult, projectsResult, skillsResult] = await Promise.all([
          supabase.from('contact_messages').select('id', { count: 'exact', head: true }),
          supabase.from('contact_messages').select('id', { count: 'exact', head: true }).eq('status', 'new'),
          supabase.from('projects').select('id', { count: 'exact', head: true }),
          supabase.from('skills').select('id', { count: 'exact', head: true }),
        ]);

        setStats({
          totalMessages: messagesResult.count || 0,
          newMessages: newMessagesResult.count || 0,
          totalProjects: projectsResult.count || 0,
          totalSkills: skillsResult.count || 0,
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    {
      title: 'Messages totaux',
      value: stats.totalMessages,
      icon: Mail,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      title: 'Nouveaux messages',
      value: stats.newMessages,
      icon: MessageSquare,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
    },
    {
      title: 'Projets',
      value: stats.totalProjects,
      icon: Briefcase,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
    },
    {
      title: 'Compétences',
      value: stats.totalSkills,
      icon: Lightbulb,
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
    },
  ];

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <Card key={i} className="glass-card animate-pulse">
            <CardHeader className="pb-2">
              <div className="h-4 bg-muted rounded w-24"></div>
            </CardHeader>
            <CardContent>
              <div className="h-8 bg-muted rounded w-16"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Tableau de bord</h2>
        <p className="text-muted-foreground">Vue d'ensemble de votre portfolio</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((stat, index) => (
          <Card key={index} className="glass-card hover-lift">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Bienvenue dans l'administration</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Depuis ce tableau de bord, vous pouvez gérer :
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              <span><strong>Messages</strong> - Consultez et répondez aux messages du formulaire de contact</span>
            </li>
            <li className="flex items-center gap-2">
              <Briefcase className="h-4 w-4 text-primary" />
              <span><strong>Projets</strong> - Ajoutez, modifiez ou supprimez vos projets réalisés</span>
            </li>
            <li className="flex items-center gap-2">
              <Lightbulb className="h-4 w-4 text-primary" />
              <span><strong>Compétences</strong> - Gérez vos catégories de compétences</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
