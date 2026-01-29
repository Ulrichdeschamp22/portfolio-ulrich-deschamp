import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import { Plus, Pencil, Trash2, Image, Video, GripVertical, ExternalLink } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
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

interface DesignItem {
  id: string;
  title: string;
  description: string | null;
  category: string;
  media_type: 'image' | 'video';
  media_url: string;
  thumbnail_url: string | null;
  is_visible: boolean;
  display_order: number;
  created_at: string;
}

const categories = [
  'Design Graphique',
  'Logo & Identité',
  'Affiche & Flyer',
  'Bannière Web',
  'Réseaux Sociaux',
  'Branding',
  'Illustration',
  'Motion Design',
];

const AdminDesignPortfolio = () => {
  const [items, setItems] = useState<DesignItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingItem, setEditingItem] = useState<DesignItem | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'Design Graphique',
    media_type: 'image' as 'image' | 'video',
    media_url: '',
    thumbnail_url: '',
    is_visible: true,
    display_order: 0,
  });

  const fetchItems = async () => {
    try {
      const { data, error } = await supabase
        .from('design_portfolio')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) throw error;
      setItems((data || []).map(item => ({
        ...item,
        media_type: item.media_type as 'image' | 'video'
      })));
    } catch (error) {
      console.error('Error fetching design portfolio:', error);
      toast({
        title: 'Erreur',
        description: 'Impossible de charger les créations.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      category: 'Design Graphique',
      media_type: 'image',
      media_url: '',
      thumbnail_url: '',
      is_visible: true,
      display_order: items.length,
    });
    setEditingItem(null);
  };

  const openEditDialog = (item: DesignItem) => {
    setEditingItem(item);
    setFormData({
      title: item.title,
      description: item.description || '',
      category: item.category,
      media_type: item.media_type,
      media_url: item.media_url,
      thumbnail_url: item.thumbnail_url || '',
      is_visible: item.is_visible,
      display_order: item.display_order,
    });
    setIsDialogOpen(true);
  };

  const openNewDialog = () => {
    resetForm();
    setIsDialogOpen(true);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, field: 'media_url' | 'thumbnail_url') => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
      const filePath = `design/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('project-images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('project-images')
        .getPublicUrl(filePath);

      setFormData(prev => ({ ...prev, [field]: publicUrl }));
      
      toast({
        title: 'Succès',
        description: 'Fichier téléchargé avec succès.',
      });
    } catch (error) {
      console.error('Error uploading file:', error);
      toast({
        title: 'Erreur',
        description: 'Impossible de télécharger le fichier.',
        variant: 'destructive',
      });
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const itemData = {
        title: formData.title,
        description: formData.description || null,
        category: formData.category,
        media_type: formData.media_type,
        media_url: formData.media_url,
        thumbnail_url: formData.thumbnail_url || null,
        is_visible: formData.is_visible,
        display_order: formData.display_order,
      };

      if (editingItem) {
        const { error } = await supabase
          .from('design_portfolio')
          .update(itemData)
          .eq('id', editingItem.id);

        if (error) throw error;
        
        toast({
          title: 'Succès',
          description: 'Création mise à jour.',
        });
      } else {
        const { error } = await supabase
          .from('design_portfolio')
          .insert([itemData]);

        if (error) throw error;
        
        toast({
          title: 'Succès',
          description: 'Création ajoutée.',
        });
      }

      setIsDialogOpen(false);
      resetForm();
      fetchItems();
    } catch (error) {
      console.error('Error saving design item:', error);
      toast({
        title: 'Erreur',
        description: 'Impossible de sauvegarder la création.',
        variant: 'destructive',
      });
    }
  };

  const deleteItem = async (id: string) => {
    try {
      const { error } = await supabase
        .from('design_portfolio')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      setItems(prev => prev.filter(item => item.id !== id));
      toast({
        title: 'Succès',
        description: 'Création supprimée.',
      });
    } catch (error) {
      console.error('Error deleting design item:', error);
      toast({
        title: 'Erreur',
        description: 'Impossible de supprimer la création.',
        variant: 'destructive',
      });
    }
  };

  const toggleVisibility = async (item: DesignItem) => {
    try {
      const { error } = await supabase
        .from('design_portfolio')
        .update({ is_visible: !item.is_visible })
        .eq('id', item.id);

      if (error) throw error;
      
      setItems(prev => 
        prev.map(i => i.id === item.id ? { ...i, is_visible: !i.is_visible } : i)
      );
    } catch (error) {
      console.error('Error toggling visibility:', error);
    }
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
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">Portfolio Design</h2>
          <p className="text-muted-foreground">
            {items.length} création{items.length !== 1 ? 's' : ''} graphique{items.length !== 1 ? 's' : ''}
          </p>
        </div>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={openNewDialog}>
              <Plus className="h-4 w-4 mr-2" />
              Nouvelle création
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingItem ? 'Modifier la création' : 'Nouvelle création'}
              </DialogTitle>
            </DialogHeader>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Titre *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="category">Catégorie *</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  rows={3}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="media_type">Type de média *</Label>
                <Select
                  value={formData.media_type}
                  onValueChange={(value: 'image' | 'video') => setFormData(prev => ({ ...prev, media_type: value }))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="image">
                      <div className="flex items-center gap-2">
                        <Image className="h-4 w-4" />
                        Image
                      </div>
                    </SelectItem>
                    <SelectItem value="video">
                      <div className="flex items-center gap-2">
                        <Video className="h-4 w-4" />
                        Vidéo
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label>Fichier média principal *</Label>
                <div className="flex gap-2">
                  <Input
                    type="url"
                    value={formData.media_url}
                    onChange={(e) => setFormData(prev => ({ ...prev, media_url: e.target.value }))}
                    placeholder="URL du fichier ou télécharger..."
                    className="flex-1"
                  />
                  <Label className="cursor-pointer">
                    <Input
                      type="file"
                      accept={formData.media_type === 'image' ? 'image/*' : 'video/*'}
                      onChange={(e) => handleFileUpload(e, 'media_url')}
                      className="hidden"
                    />
                    <Button type="button" variant="outline" disabled={uploading} asChild>
                      <span>{uploading ? 'Chargement...' : 'Parcourir'}</span>
                    </Button>
                  </Label>
                </div>
                {formData.media_url && formData.media_type === 'image' && (
                  <img src={formData.media_url} alt="Aperçu" className="mt-2 max-h-32 rounded-lg object-cover" />
                )}
              </div>
              
              <div className="space-y-2">
                <Label>Miniature (optionnel, pour les vidéos)</Label>
                <div className="flex gap-2">
                  <Input
                    type="url"
                    value={formData.thumbnail_url}
                    onChange={(e) => setFormData(prev => ({ ...prev, thumbnail_url: e.target.value }))}
                    placeholder="URL de la miniature..."
                    className="flex-1"
                  />
                  <Label className="cursor-pointer">
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileUpload(e, 'thumbnail_url')}
                      className="hidden"
                    />
                    <Button type="button" variant="outline" disabled={uploading} asChild>
                      <span>Parcourir</span>
                    </Button>
                  </Label>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="display_order">Ordre d'affichage</Label>
                  <Input
                    id="display_order"
                    type="number"
                    value={formData.display_order}
                    onChange={(e) => setFormData(prev => ({ ...prev, display_order: parseInt(e.target.value) || 0 }))}
                  />
                </div>
                
                <div className="flex items-center space-x-2 pt-6">
                  <Switch
                    id="is_visible"
                    checked={formData.is_visible}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, is_visible: checked }))}
                  />
                  <Label htmlFor="is_visible">Visible sur le site</Label>
                </div>
              </div>
              
              <div className="flex justify-end gap-2 pt-4">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Annuler
                </Button>
                <Button type="submit" disabled={!formData.media_url}>
                  {editingItem ? 'Mettre à jour' : 'Créer'}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {items.length === 0 ? (
        <Card className="glass-card">
          <CardContent className="flex flex-col items-center justify-center py-12">
            <Image className="h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-muted-foreground">Aucune création graphique pour le moment</p>
            <Button className="mt-4" onClick={openNewDialog}>
              <Plus className="h-4 w-4 mr-2" />
              Ajouter une création
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <Card 
              key={item.id} 
              className={`glass-card overflow-hidden transition-opacity ${!item.is_visible ? 'opacity-50' : ''}`}
            >
              <div className="aspect-video relative overflow-hidden bg-muted">
                {item.media_type === 'image' ? (
                  <img 
                    src={item.media_url} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    {item.thumbnail_url ? (
                      <img 
                        src={item.thumbnail_url} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Video className="h-12 w-12 text-muted-foreground" />
                    )}
                  </div>
                )}
                <div className="absolute top-2 right-2">
                  <Badge variant={item.media_type === 'image' ? 'secondary' : 'default'}>
                    {item.media_type === 'image' ? <Image className="h-3 w-3 mr-1" /> : <Video className="h-3 w-3 mr-1" />}
                    {item.media_type}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-semibold truncate">{item.title}</h3>
                    <Badge variant="outline" className="text-xs mt-1">{item.category}</Badge>
                  </div>
                  <Switch
                    checked={item.is_visible}
                    onCheckedChange={() => toggleVisibility(item)}
                  />
                </div>
                {item.description && (
                  <p className="text-sm text-muted-foreground line-clamp-2 mt-2">{item.description}</p>
                )}
                <div className="flex items-center gap-2 mt-4">
                  <Button variant="ghost" size="icon" onClick={() => openEditDialog(item)}>
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href={item.media_url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="ghost" size="icon" className="text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Confirmer la suppression</AlertDialogTitle>
                        <AlertDialogDescription>
                          Êtes-vous sûr de vouloir supprimer "{item.title}" ? Cette action est irréversible.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Annuler</AlertDialogCancel>
                        <AlertDialogAction onClick={() => deleteItem(item.id)}>
                          Supprimer
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminDesignPortfolio;
