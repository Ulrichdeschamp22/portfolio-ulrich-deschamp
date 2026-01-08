-- =====================================================
-- MIGRATION COMPLÈTE POUR LE PORTFOLIO ULRICH DESCHAMP
-- =====================================================

-- 1. TYPES PERSONNALISÉS
-- =====================================================

-- Type pour les rôles utilisateur
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Type pour les statuts de messages
CREATE TYPE public.message_status AS ENUM ('new', 'read', 'replied', 'archived');

-- Type pour les types de projets
CREATE TYPE public.project_type AS ENUM ('Portfolio', 'Landing Page', 'Site Web', 'Application SaaS', 'Boutique en ligne', 'Autre');

-- 2. TABLE PROFILES
-- =====================================================
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT,
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- 3. TABLE USER_ROLES
-- =====================================================
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL DEFAULT 'user',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- 4. TABLE CONTACT_MESSAGES
-- =====================================================
CREATE TABLE public.contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status message_status NOT NULL DEFAULT 'new',
  admin_notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Index pour améliorer les performances
CREATE INDEX idx_contact_messages_status ON public.contact_messages(status);
CREATE INDEX idx_contact_messages_created_at ON public.contact_messages(created_at DESC);

-- 5. TABLE PROJECTS (pour le portfolio)
-- =====================================================
CREATE TABLE public.projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  url TEXT,
  image_url TEXT,
  type project_type NOT NULL DEFAULT 'Site Web',
  tags TEXT[] DEFAULT '{}',
  is_visible BOOLEAN NOT NULL DEFAULT true,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- Index pour améliorer les performances
CREATE INDEX idx_projects_visible ON public.projects(is_visible);
CREATE INDEX idx_projects_order ON public.projects(display_order);

-- 6. TABLE SKILLS (pour les compétences)
-- =====================================================
CREATE TABLE public.skills (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  icon_name TEXT NOT NULL DEFAULT 'Code',
  title TEXT NOT NULL,
  description TEXT,
  skills_list TEXT[] DEFAULT '{}',
  is_visible BOOLEAN NOT NULL DEFAULT true,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.skills ENABLE ROW LEVEL SECURITY;

-- Index pour améliorer les performances
CREATE INDEX idx_skills_visible ON public.skills(is_visible);
CREATE INDEX idx_skills_order ON public.skills(display_order);

-- 7. FONCTION SECURITY DEFINER POUR VÉRIFIER LES RÔLES
-- =====================================================
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- 8. FONCTION POUR METTRE À JOUR updated_at
-- =====================================================
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- 9. FONCTION POUR CRÉER UN PROFIL À L'INSCRIPTION
-- =====================================================
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data ->> 'full_name', NEW.email)
  );
  RETURN NEW;
END;
$$;

-- 10. TRIGGERS
-- =====================================================

-- Trigger pour créer un profil automatiquement
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Triggers pour updated_at
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_contact_messages_updated_at
  BEFORE UPDATE ON public.contact_messages
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_projects_updated_at
  BEFORE UPDATE ON public.projects
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_skills_updated_at
  BEFORE UPDATE ON public.skills
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- 11. POLICIES RLS
-- =====================================================

-- PROFILES: Lecture publique, modification par le propriétaire
CREATE POLICY "Profiles are viewable by everyone"
  ON public.profiles FOR SELECT
  USING (true);

CREATE POLICY "Users can update their own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile"
  ON public.profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

-- USER_ROLES: Admins uniquement
CREATE POLICY "Admins can view all roles"
  ON public.user_roles FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage roles"
  ON public.user_roles FOR ALL
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- CONTACT_MESSAGES: Insertion publique, lecture/modification admins uniquement
CREATE POLICY "Anyone can submit contact messages"
  ON public.contact_messages FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Admins can view all messages"
  ON public.contact_messages FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update messages"
  ON public.contact_messages FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete messages"
  ON public.contact_messages FOR DELETE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- PROJECTS: Lecture publique pour projets visibles, gestion complète admins
CREATE POLICY "Anyone can view visible projects"
  ON public.projects FOR SELECT
  USING (is_visible = true);

CREATE POLICY "Admins can view all projects"
  ON public.projects FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert projects"
  ON public.projects FOR INSERT
  TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update projects"
  ON public.projects FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete projects"
  ON public.projects FOR DELETE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- SKILLS: Lecture publique pour compétences visibles, gestion complète admins
CREATE POLICY "Anyone can view visible skills"
  ON public.skills FOR SELECT
  USING (is_visible = true);

CREATE POLICY "Admins can view all skills"
  ON public.skills FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert skills"
  ON public.skills FOR INSERT
  TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update skills"
  ON public.skills FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete skills"
  ON public.skills FOR DELETE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- 12. STORAGE BUCKET POUR LES IMAGES
-- =====================================================
INSERT INTO storage.buckets (id, name, public)
VALUES ('project-images', 'project-images', true);

-- Policies pour le bucket d'images
CREATE POLICY "Anyone can view project images"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'project-images');

CREATE POLICY "Admins can upload project images"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'project-images' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update project images"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (bucket_id = 'project-images' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete project images"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'project-images' AND public.has_role(auth.uid(), 'admin'));

-- 13. DONNÉES INITIALES (Projets existants du code)
-- =====================================================
INSERT INTO public.projects (title, description, url, type, tags, display_order) VALUES
  ('Portfolio Pasteur KOUADIO.G', 'Un portfolio moderne et interactif présentant le Pasteur KOUADIO GERMAIN', 'https://germain-kouadio.lovable.app/', 'Portfolio', ARRAY['React', 'Tailwind', 'Animations'], 1),
  ('Fondation Miracle of God', 'Landing page élégante pour une fondation caritative avec design moderne', 'https://fondation-miracle-of-god.lovable.app/', 'Landing Page', ARRAY['Landing Page', 'Responsive', 'UX/UI'], 2),
  ('Hôtel Résidence Sunday', 'Site web complet pour un établissement hôtelier avec système de réservation', 'https://hotel-residence-sunday.lovable.app/', 'Site Web', ARRAY['Hôtellerie', 'Booking', 'Design'], 3),
  ('stocknix - SaaS PME/TPE', 'Application SaaS complète pour la gestion d''entreprise avec tableau de bord', 'https://stocknix.space/', 'Application SaaS', ARRAY['SaaS', 'Dashboard', 'Gestion'], 4);

-- 14. DONNÉES INITIALES (Compétences existantes du code)
-- =====================================================
INSERT INTO public.skills (icon_name, title, description, skills_list, display_order) VALUES
  ('Code', 'Développement Web', 'Développeur web expert Abidjan - Création site web premium', ARRAY['Développement application web sur mesure', 'Sites vitrines & Landing pages premium', 'Applications SaaS performantes', 'Boutiques e-commerce', 'Billetterie en ligne', 'Optimisation SEO & performance web', 'API & bases de données', 'Sécurisation & hébergement'], 1),
  ('Bot', 'Automatisation & IA', 'Expert automatisation digitale - Solutions IA pour entreprises', ARRAY['Automatisation intelligente des processus', 'Intégration solutions IA', 'Optimisation process et gain de temps', 'Chatbots et assistants virtuels', 'Machine Learning appliqué', 'Workflows automatisés'], 2),
  ('Sparkles', 'Solutions Digitales & Événementiel', 'Plateformes digitales sur mesure pour entreprises', ARRAY['Plateformes digitales personnalisées', 'Systèmes de réservation en ligne', 'Billetterie événementielle', 'Solutions digitales événementielles', 'Intégration d''outils métiers', 'Transformation digitale avancée'], 3),
  ('Users', 'Marketing & Branding', 'Stratégie digitale avancée - Marketing digital premium', ARRAY['Community management expert', 'Gestion campagnes digitales performantes', 'Stratégies marketing digital', 'Création de contenus impactants', 'Animation de communautés', 'Calendrier éditorial & reporting'], 4),
  ('Palette', 'Design & Contenu', 'Design graphique professionnel - Identité visuelle premium', ARRAY['Logos & branding haut de gamme', 'Affiches publicitaires', 'Charte graphique complète', 'Création contenus digitaux impactants', 'Mockups & retouche photo', 'Packaging & supports print'], 5),
  ('Camera', 'Photographie & Vidéo', 'Photographie digitale professionnelle', ARRAY['Événements & corporate', 'Portraits professionnels', 'Shooting produits', 'Captation vidéo événementielle', 'Montage dynamique', 'Vidéos promotionnelles'], 6);