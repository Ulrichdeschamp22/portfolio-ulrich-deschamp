import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const HERO_IMAGE_KEY = 'hero_image_url';
export const DEFAULT_HERO_IMAGE = '/lovable-uploads/hero-photo.jpeg';

export const useHeroImage = () => {
  const [imageUrl, setImageUrl] = useState<string>(DEFAULT_HERO_IMAGE);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    const load = async () => {
      const { data } = await supabase
        .from('site_settings')
        .select('value')
        .eq('key', HERO_IMAGE_KEY)
        .maybeSingle();

      if (active) {
        if (data?.value) setImageUrl(data.value);
        setLoading(false);
      }
    };

    load();
    return () => {
      active = false;
    };
  }, []);

  return { imageUrl, loading, setImageUrl };
};
