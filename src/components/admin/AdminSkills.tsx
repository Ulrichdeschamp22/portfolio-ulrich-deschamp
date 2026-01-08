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
import { Plus, Pencil, Trash2, GripVertical, X, Code, Palette, Camera, Users, Video, ShoppingCart, Bot, Sparkles, Lightbulb, Wrench, Globe, Smartphone } from 'lucide-react';
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

interface Skill {
  id: string;
  icon_name: string;
  title: string;
  description: string | null;
  skills_list: string[];
  is_visible: boolean;
  display_order: number;
  created_at: string;
}

const iconOptions = [
  { name: 'Code', icon: Code },
  { name: 'Palette', icon: Palette },
  { name: 'Camera', icon: Camera },
  { name: 'Users', icon: Users },
  { name: 'Video', icon: Video },
  { name: 'ShoppingCart', icon: ShoppingCart },
  { name: 'Bot', icon: Bot },
  { name: 'Sparkles', icon: Sparkles },
  { name: 'Lightbulb', icon: Lightbulb },
  { name: 'Wrench', icon: Wrench },
  { name: 'Globe', icon: Globe },
  { name: 'Smartphone', icon: Smartphone },
];

const getIconComponent = (iconName: string) => {
  const found = iconOptions.find(opt => opt.name === iconName);
  return found?.icon || Code;
};

const AdminSkills = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingSkill, setEditingSkill] = useState<Skill | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newSkillItem, setNewSkillItem] = useState('');
  
  const [formData, setFormData] = useState({
    icon_name: 'Code',
    title: '',
    description: '',
    skills_list: [] as string[],
    is_visible: true,
    display_order: 0,
  });

  const fetchSkills = async () => {
    try {
      const { data, error } = await supabase
        .from('skills')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) throw error;
      setSkills(data || []);
    } catch (error) {
      console.error('Error fetching skills:', error);
      toast({
        title: 'Erreur',
        description: 'Impossible de charger les compétences.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  const resetForm = () => {
    setFormData({
      icon_name: 'Code',
      title: '',
      description: '',
      skills_list: [],
      is_visible: true,
      display_order: skills.length,
    });
    setEditingSkill(null);
    setNewSkillItem('');
  };

  const openEditDialog = (skill: Skill) => {
    setEditingSkill(skill);
    setFormData({
      icon_name: skill.icon_name,
      title: skill.title,
      description: skill.description || '',
      skills_list: skill.skills_list || [],
      is_visible: skill.is_visible,
      display_order: skill.display_order,
    });
    setIsDialogOpen(true);
  };

  const openNewDialog = () => {
    resetForm();
    setIsDialogOpen(true);
  };

  const addSkillItem = () => {
    if (newSkillItem.trim() && !formData.skills_list.includes(newSkillItem.trim())) {
      setFormData(prev => ({
        ...prev,
        skills_list: [...prev.skills_list, newSkillItem.trim()],
      }));
      setNewSkillItem('');
    }
  };

  const removeSkillItem = (itemToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      skills_list: prev.skills_list.filter(item => item !== itemToRemove),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const skillData = {
        icon_name: formData.icon_name,
        title: formData.title,
        description: formData.description || null,
        skills_list: formData.skills_list,
        is_visible: formData.is_visible,
        display_order: formData.display_order,
      };

      if (editingSkill) {
        const { error } = await supabase
          .from('skills')
          .update(skillData)
          .eq('id', editingSkill.id);

        if (error) throw error;
        
        toast({
          title: 'Succès',
          description: 'Compétence mise à jour.',
        });
      } else {
        const { error } = await supabase
          .from('skills')
          .insert([skillData]);

        if (error) throw error;
        
        toast({
          title: 'Succès',
          description: 'Compétence créée.',
        });
      }

      setIsDialogOpen(false);
      resetForm();
      fetchSkills();
    } catch (error) {
      console.error('Error saving skill:', error);
      toast({
        title: 'Erreur',
        description: 'Impossible de sauvegarder la compétence.',
        variant: 'destructive',
      });
    }
  };

  const deleteSkill = async (id: string) => {
    try {
      const { error } = await supabase
        .from('skills')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      setSkills(prev => prev.filter(s => s.id !== id));
      toast({
        title: 'Succès',
        description: 'Compétence supprimée.',
      });
    } catch (error) {
      console.error('Error deleting skill:', error);
      toast({
        title: 'Erreur',
        description: 'Impossible de supprimer la compétence.',
        variant: 'destructive',
      });
    }
  };

  const toggleVisibility = async (skill: Skill) => {
    try {
      const { error } = await supabase
        .from('skills')
        .update({ is_visible: !skill.is_visible })
        .eq('id', skill.id);

      if (error) throw error;
      
      setSkills(prev => 
        prev.map(s => s.id === skill.id ? { ...s, is_visible: !s.is_visible } : s)
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
          <h2 className="text-2xl font-bold mb-2">Compétences</h2>
          <p className="text-muted-foreground">
            {skills.length} catégorie{skills.length !== 1 ? 's' : ''}
          </p>
        </div>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={openNewDialog}>
              <Plus className="h-4 w-4 mr-2" />
              Nouvelle catégorie
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingSkill ? 'Modifier la catégorie' : 'Nouvelle catégorie'}
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
                  <Label htmlFor="icon">Icône</Label>
                  <Select
                    value={formData.icon_name}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, icon_name: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {iconOptions.map((opt) => (
                        <SelectItem key={opt.name} value={opt.name}>
                          <div className="flex items-center gap-2">
                            <opt.icon className="h-4 w-4" />
                            {opt.name}
                          </div>
                        </SelectItem>
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
                  rows={2}
                />
              </div>
              
              <div className="space-y-2">
                <Label>Compétences</Label>
                <div className="flex gap-2">
                  <Input
                    value={newSkillItem}
                    onChange={(e) => setNewSkillItem(e.target.value)}
                    placeholder="Ajouter une compétence"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        addSkillItem();
                      }
                    }}
                  />
                  <Button type="button" variant="outline" onClick={addSkillItem}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {formData.skills_list.map((item, index) => (
                    <Badge key={index} variant="secondary" className="flex items-center gap-1">
                      {item}
                      <button type="button" onClick={() => removeSkillItem(item)}>
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
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
                <Button type="submit">
                  {editingSkill ? 'Mettre à jour' : 'Créer'}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {skills.length === 0 ? (
        <Card className="glass-card">
          <CardContent className="flex flex-col items-center justify-center py-12">
            <p className="text-muted-foreground">Aucune catégorie pour le moment</p>
            <Button className="mt-4" onClick={openNewDialog}>
              <Plus className="h-4 w-4 mr-2" />
              Ajouter une catégorie
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-3">
          {skills.map((skill) => {
            const IconComponent = getIconComponent(skill.icon_name);
            return (
              <Card 
                key={skill.id} 
                className={`glass-card transition-opacity ${!skill.is_visible ? 'opacity-50' : ''}`}
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <GripVertical className="h-5 w-5 text-muted-foreground cursor-grab" />
                    
                    <div className="p-2 rounded-lg bg-primary/10">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold truncate">{skill.title}</h3>
                        {!skill.is_visible && (
                          <Badge variant="secondary">Masqué</Badge>
                        )}
                      </div>
                      {skill.description && (
                        <p className="text-sm text-muted-foreground truncate">{skill.description}</p>
                      )}
                      {skill.skills_list.length > 0 && (
                        <p className="text-xs text-muted-foreground mt-1">
                          {skill.skills_list.length} compétence{skill.skills_list.length !== 1 ? 's' : ''}
                        </p>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Switch
                        checked={skill.is_visible}
                        onCheckedChange={() => toggleVisibility(skill)}
                      />
                      
                      <Button variant="ghost" size="icon" onClick={() => openEditDialog(skill)}>
                        <Pencil className="h-4 w-4" />
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
                              Êtes-vous sûr de vouloir supprimer "{skill.title}" ? Cette action est irréversible.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Annuler</AlertDialogCancel>
                            <AlertDialogAction onClick={() => deleteSkill(skill.id)}>
                              Supprimer
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AdminSkills;
