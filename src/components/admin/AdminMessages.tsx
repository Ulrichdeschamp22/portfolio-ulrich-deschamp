import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import { Mail, Eye, Trash2, Archive, Reply, Calendar, User } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

type MessageStatus = 'new' | 'read' | 'replied' | 'archived';

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: MessageStatus;
  admin_notes: string | null;
  created_at: string;
}

const statusColors: Record<MessageStatus, string> = {
  new: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  read: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
  replied: 'bg-primary/15 text-primary border-primary/30',
  archived: 'bg-muted text-muted-foreground border-border',
};

const statusLabels: Record<MessageStatus, string> = {
  new: 'Nouveau',
  read: 'Lu',
  replied: 'Répondu',
  archived: 'Archivé',
};

const AdminMessages = () => {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);
  const [adminNotes, setAdminNotes] = useState('');

  const fetchMessages = async () => {
    try {
      const { data, error } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setMessages(data || []);
    } catch (error) {
      console.error('Error fetching messages:', error);
      toast({
        title: 'Erreur',
        description: 'Impossible de charger les messages.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const openMessage = async (message: ContactMessage) => {
    setSelectedMessage(message);
    setAdminNotes(message.admin_notes || '');
    
    if (message.status === 'new') {
      await updateStatus(message.id, 'read');
    }
  };

  const updateStatus = async (id: string, status: MessageStatus) => {
    try {
      const { error } = await supabase
        .from('contact_messages')
        .update({ status })
        .eq('id', id);

      if (error) throw error;
      
      setMessages(msgs => 
        msgs.map(m => m.id === id ? { ...m, status } : m)
      );
      
      if (selectedMessage?.id === id) {
        setSelectedMessage(prev => prev ? { ...prev, status } : null);
      }
    } catch (error) {
      console.error('Error updating status:', error);
      toast({
        title: 'Erreur',
        description: 'Impossible de mettre à jour le statut.',
        variant: 'destructive',
      });
    }
  };

  const saveNotes = async () => {
    if (!selectedMessage) return;
    
    try {
      const { error } = await supabase
        .from('contact_messages')
        .update({ admin_notes: adminNotes })
        .eq('id', selectedMessage.id);

      if (error) throw error;
      
      setMessages(msgs => 
        msgs.map(m => m.id === selectedMessage.id ? { ...m, admin_notes: adminNotes } : m)
      );
      
      toast({
        title: 'Succès',
        description: 'Notes enregistrées.',
      });
    } catch (error) {
      console.error('Error saving notes:', error);
      toast({
        title: 'Erreur',
        description: 'Impossible d\'enregistrer les notes.',
        variant: 'destructive',
      });
    }
  };

  const deleteMessage = async (id: string) => {
    try {
      const { error } = await supabase
        .from('contact_messages')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      setMessages(msgs => msgs.filter(m => m.id !== id));
      setSelectedMessage(null);
      
      toast({
        title: 'Succès',
        description: 'Message supprimé.',
      });
    } catch (error) {
      console.error('Error deleting message:', error);
      toast({
        title: 'Erreur',
        description: 'Impossible de supprimer le message.',
        variant: 'destructive',
      });
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <Card key={i} className="glass-card animate-pulse">
            <CardContent className="p-6">
              <div className="h-4 bg-muted rounded w-1/3 mb-2"></div>
              <div className="h-3 bg-muted rounded w-1/2"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Messages</h2>
        <p className="text-muted-foreground">
          {messages.length} message{messages.length !== 1 ? 's' : ''} reçu{messages.length !== 1 ? 's' : ''}
        </p>
      </div>

      {messages.length === 0 ? (
        <Card className="glass-card">
          <CardContent className="flex flex-col items-center justify-center py-12">
            <Mail className="h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-muted-foreground">Aucun message pour le moment</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {messages.map((message) => {
            const isNew = message.status === 'new';
            const initial = (message.name || '?').trim().charAt(0).toUpperCase();
            return (
              <Card
                key={message.id}
                onClick={() => openMessage(message)}
                className={`group relative overflow-hidden cursor-pointer rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm hover:border-primary/50 hover:bg-card/70 transition-all duration-300 ${
                  isNew ? 'ring-1 ring-emerald-500/30' : ''
                }`}
              >
                {isNew && (
                  <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-emerald-400 to-emerald-600" />
                )}
                <CardContent className="p-4 sm:p-5">
                  <div className="flex items-start gap-3 min-w-0">
                    {/* Avatar */}
                    <div className="shrink-0 h-10 w-10 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/30 flex items-center justify-center text-sm font-semibold text-primary">
                      {initial}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0 space-y-1.5">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-semibold text-sm sm:text-base leading-tight truncate">
                          {message.subject || message.name}
                        </h3>
                        <Eye className="h-4 w-4 text-muted-foreground shrink-0 group-hover:text-primary transition-colors" />
                      </div>

                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge
                          variant="outline"
                          className={`${statusColors[message.status]} text-[10px] uppercase tracking-wider px-1.5 py-0 h-5 font-medium`}
                        >
                          {statusLabels[message.status]}
                        </Badge>
                        <span className="text-[11px] text-muted-foreground flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {formatDate(message.created_at)}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 min-w-0 text-xs text-muted-foreground pt-0.5">
                        <Mail className="h-3 w-3 shrink-0" />
                        <span className="truncate min-w-0">{message.email}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}

      {/* Message Detail Dialog */}
      <Dialog open={!!selectedMessage} onOpenChange={() => setSelectedMessage(null)}>
        <DialogContent className="max-w-2xl">
          {selectedMessage && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-2">
                  <DialogTitle>{selectedMessage.subject}</DialogTitle>
                  <Badge className={statusColors[selectedMessage.status]}>
                    {statusLabels[selectedMessage.status]}
                  </Badge>
                </div>
                <DialogDescription>
                  De: {selectedMessage.name} ({selectedMessage.email}) - {formatDate(selectedMessage.created_at)}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="whitespace-pre-wrap">{selectedMessage.message}</p>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Notes admin</label>
                  <Textarea
                    value={adminNotes}
                    onChange={(e) => setAdminNotes(e.target.value)}
                    placeholder="Ajoutez des notes..."
                    rows={3}
                  />
                  <Button size="sm" onClick={saveNotes}>
                    Enregistrer les notes
                  </Button>
                </div>
                
                <div className="flex flex-wrap gap-2 pt-4 border-t">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(`mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.subject}`, '_blank')}
                  >
                    <Reply className="h-4 w-4 mr-1" />
                    Répondre
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      updateStatus(selectedMessage.id, 'replied');
                    }}
                  >
                    Marquer comme répondu
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      updateStatus(selectedMessage.id, 'archived');
                    }}
                  >
                    <Archive className="h-4 w-4 mr-1" />
                    Archiver
                  </Button>
                  
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive" size="sm">
                        <Trash2 className="h-4 w-4 mr-1" />
                        Supprimer
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Confirmer la suppression</AlertDialogTitle>
                        <AlertDialogDescription>
                          Cette action est irréversible. Le message sera définitivement supprimé.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Annuler</AlertDialogCancel>
                        <AlertDialogAction onClick={() => deleteMessage(selectedMessage.id)}>
                          Supprimer
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminMessages;
