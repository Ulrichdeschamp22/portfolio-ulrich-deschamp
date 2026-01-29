-- Add new project types
DO $$
BEGIN
  -- Check if 'Design Graphique' doesn't exist in the enum
  IF NOT EXISTS (
    SELECT 1 FROM pg_enum 
    WHERE enumlabel = 'Design Graphique' 
    AND enumtypid = (SELECT oid FROM pg_type WHERE typname = 'project_type')
  ) THEN
    ALTER TYPE project_type ADD VALUE 'Design Graphique';
  END IF;
END $$;

-- Create table for design portfolio items (images/videos)
CREATE TABLE IF NOT EXISTS public.design_portfolio (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL DEFAULT 'Design Graphique',
  media_type TEXT NOT NULL DEFAULT 'image' CHECK (media_type IN ('image', 'video')),
  media_url TEXT NOT NULL,
  thumbnail_url TEXT,
  is_visible BOOLEAN NOT NULL DEFAULT true,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.design_portfolio ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can view visible design portfolio items"
ON public.design_portfolio
FOR SELECT
USING (is_visible = true);

CREATE POLICY "Admins can view all design portfolio items"
ON public.design_portfolio
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can insert design portfolio items"
ON public.design_portfolio
FOR INSERT
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update design portfolio items"
ON public.design_portfolio
FOR UPDATE
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete design portfolio items"
ON public.design_portfolio
FOR DELETE
USING (has_role(auth.uid(), 'admin'::app_role));

-- Create trigger for updated_at
CREATE TRIGGER update_design_portfolio_updated_at
BEFORE UPDATE ON public.design_portfolio
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert the two new projects into the projects table
INSERT INTO public.projects (title, description, url, type, tags, is_visible, display_order) VALUES
('Les Awards des Familles', 'Plateforme de vote en ligne pour célébrer et promouvoir les valeurs familiales africaines lors de la cérémonie Les Awards des Familles', 'https://lesawardsdesfamilles.damehortysholding.com/', 'Application SaaS', ARRAY['Vote en ligne', 'Événementiel', 'React'], true, 0),
('Dame Hortys Holding', 'Site de présentation de la structure de Madame Hortense Konan avec boutique en ligne et vente de formations digitales', 'https://www.damehortysholding.com/', 'Boutique en ligne', ARRAY['E-commerce', 'Formation', 'Boutique'], true, 1)
ON CONFLICT DO NOTHING;