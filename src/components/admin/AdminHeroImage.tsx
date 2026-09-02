import { useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload, Loader2, RotateCcw } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { useHeroImage, HERO_IMAGE_KEY, DEFAULT_HERO_IMAGE } from '@/hooks/useHeroImage';

const AdminHeroImage = () => {
  const { imageUrl, loading, setImageUrl } = useHeroImage();
  const [uploading, setUploading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const saveUrl = async (url: string) => {
    const { error } = await supabase
      .from('site_settings')
      .upsert({ key: HERO_IMAGE_KEY, value: url }, { onConflict: 'key' });
    if (error) throw error;
    setImageUrl(url);
  };

  const handleFile = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      toast.error('Veuillez choisir un fichier image');
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      toast.error('Image trop lourde (max 10 Mo)');
      return;
    }

    setUploading(true);
    try {
      const ext = file.name.split('.').pop() || 'jpg';
      const path = `hero/hero-${Date.now()}.${ext}`;

      const { error: uploadError } = await supabase.storage
        .from('project-images')
        .upload(path, file, { cacheControl: '3600', upsert: true });
      if (uploadError) throw uploadError;

      const { data } = supabase.storage.from('project-images').getPublicUrl(path);
      await saveUrl(data.publicUrl);
      toast.success('Photo mise à jour ! Rechargez la page d\'accueil pour la voir.');
    } catch (e) {
      console.error(e);
      toast.error("Échec de l'envoi de l'image");
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = '';
    }
  };

  const handleReset = async () => {
    setUploading(true);
    try {
      await saveUrl(DEFAULT_HERO_IMAGE);
      toast.success('Photo par défaut restaurée');
    } catch {
      toast.error('Échec de la restauration');
    } finally {
      setUploading(false);
    }
  };

  return (
    <Card className="glass-card max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-lg">Photo de la section Hero</CardTitle>
        <CardDescription>
          Envoyez une nouvelle photo pour l'accueil du site (JPG ou PNG, 10 Mo max).
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start">
          <div className="w-40 h-52 rounded-xl overflow-hidden border border-border/60 bg-muted shrink-0">
            {!loading && (
              <img
                src={imageUrl}
                alt="Aperçu de la photo actuelle du site"
                className="w-full h-full object-cover object-top"
              />
            )}
          </div>

          <div className="flex-1 w-full space-y-3">
            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleFile(file);
              }}
            />
            <Button
              className="w-full h-11"
              onClick={() => inputRef.current?.click()}
              disabled={uploading}
            >
              {uploading ? (
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              ) : (
                <Upload className="h-4 w-4 mr-2" />
              )}
              {uploading ? 'Envoi en cours...' : 'Choisir une image'}
            </Button>
            <Button
              variant="outline"
              className="w-full h-11"
              onClick={handleReset}
              disabled={uploading}
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              Remettre la photo par défaut
            </Button>
            <p className="text-xs text-muted-foreground">
              Conseil : utilisez une photo verticale (format portrait) pour un rendu optimal.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminHeroImage;
