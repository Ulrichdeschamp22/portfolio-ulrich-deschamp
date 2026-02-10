-- Allow public full access to contact_messages for admin
DROP POLICY IF EXISTS "Admins can view all messages" ON public.contact_messages;
DROP POLICY IF EXISTS "Admins can update messages" ON public.contact_messages;
DROP POLICY IF EXISTS "Admins can delete messages" ON public.contact_messages;

CREATE POLICY "Public can view all messages" ON public.contact_messages FOR SELECT TO public USING (true);
CREATE POLICY "Public can update messages" ON public.contact_messages FOR UPDATE TO public USING (true);
CREATE POLICY "Public can delete messages" ON public.contact_messages FOR DELETE TO public USING (true);

-- Allow public full access to projects for admin
DROP POLICY IF EXISTS "Admins can view all projects" ON public.projects;
DROP POLICY IF EXISTS "Admins can insert projects" ON public.projects;
DROP POLICY IF EXISTS "Admins can update projects" ON public.projects;
DROP POLICY IF EXISTS "Admins can delete projects" ON public.projects;

CREATE POLICY "Public can view all projects" ON public.projects FOR SELECT TO public USING (true);
CREATE POLICY "Public can insert projects" ON public.projects FOR INSERT TO public WITH CHECK (true);
CREATE POLICY "Public can update projects" ON public.projects FOR UPDATE TO public USING (true);
CREATE POLICY "Public can delete projects" ON public.projects FOR DELETE TO public USING (true);

-- Allow public full access to skills for admin
DROP POLICY IF EXISTS "Admins can view all skills" ON public.skills;
DROP POLICY IF EXISTS "Admins can insert skills" ON public.skills;
DROP POLICY IF EXISTS "Admins can update skills" ON public.skills;
DROP POLICY IF EXISTS "Admins can delete skills" ON public.skills;

CREATE POLICY "Public can view all skills" ON public.skills FOR SELECT TO public USING (true);
CREATE POLICY "Public can insert skills" ON public.skills FOR INSERT TO public WITH CHECK (true);
CREATE POLICY "Public can update skills" ON public.skills FOR UPDATE TO public USING (true);
CREATE POLICY "Public can delete skills" ON public.skills FOR DELETE TO public USING (true);

-- Allow public full access to design_portfolio for admin
DROP POLICY IF EXISTS "Admins can view all design portfolio items" ON public.design_portfolio;
DROP POLICY IF EXISTS "Admins can insert design portfolio items" ON public.design_portfolio;
DROP POLICY IF EXISTS "Admins can update design portfolio items" ON public.design_portfolio;
DROP POLICY IF EXISTS "Admins can delete design portfolio items" ON public.design_portfolio;

CREATE POLICY "Public can view all design portfolio" ON public.design_portfolio FOR SELECT TO public USING (true);
CREATE POLICY "Public can insert design portfolio" ON public.design_portfolio FOR INSERT TO public WITH CHECK (true);
CREATE POLICY "Public can update design portfolio" ON public.design_portfolio FOR UPDATE TO public USING (true);
CREATE POLICY "Public can delete design portfolio" ON public.design_portfolio FOR DELETE TO public USING (true);

-- Also add public storage policy for uploads
CREATE POLICY "Public can upload to project-images" ON storage.objects FOR INSERT TO public WITH CHECK (bucket_id = 'project-images');
CREATE POLICY "Public can update project-images" ON storage.objects FOR UPDATE TO public USING (bucket_id = 'project-images');
CREATE POLICY "Public can delete from project-images" ON storage.objects FOR DELETE TO public USING (bucket_id = 'project-images');