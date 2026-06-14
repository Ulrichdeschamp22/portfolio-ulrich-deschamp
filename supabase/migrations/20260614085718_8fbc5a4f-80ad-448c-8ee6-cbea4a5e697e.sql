GRANT SELECT, INSERT, UPDATE, DELETE ON public.contact_messages TO anon, authenticated;
GRANT ALL ON public.contact_messages TO service_role;

GRANT SELECT, INSERT, UPDATE, DELETE ON public.projects TO anon, authenticated;
GRANT ALL ON public.projects TO service_role;

GRANT SELECT, INSERT, UPDATE, DELETE ON public.skills TO anon, authenticated;
GRANT ALL ON public.skills TO service_role;

GRANT SELECT, INSERT, UPDATE, DELETE ON public.design_portfolio TO anon, authenticated;
GRANT ALL ON public.design_portfolio TO service_role;

GRANT SELECT, INSERT, UPDATE, DELETE ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;

DROP POLICY IF EXISTS "Public can view all messages" ON public.contact_messages;
DROP POLICY IF EXISTS "Public can update messages" ON public.contact_messages;
DROP POLICY IF EXISTS "Public can delete messages" ON public.contact_messages;
CREATE POLICY "Admins can view all messages" ON public.contact_messages FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'::public.app_role));
CREATE POLICY "Admins can update messages" ON public.contact_messages FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin'::public.app_role)) WITH CHECK (public.has_role(auth.uid(), 'admin'::public.app_role));
CREATE POLICY "Admins can delete messages" ON public.contact_messages FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'::public.app_role));

DROP POLICY IF EXISTS "Public can view all projects" ON public.projects;
DROP POLICY IF EXISTS "Public can insert projects" ON public.projects;
DROP POLICY IF EXISTS "Public can update projects" ON public.projects;
DROP POLICY IF EXISTS "Public can delete projects" ON public.projects;
CREATE POLICY "Admins can view all projects" ON public.projects FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'::public.app_role));
CREATE POLICY "Admins can insert projects" ON public.projects FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'admin'::public.app_role));
CREATE POLICY "Admins can update projects" ON public.projects FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin'::public.app_role)) WITH CHECK (public.has_role(auth.uid(), 'admin'::public.app_role));
CREATE POLICY "Admins can delete projects" ON public.projects FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'::public.app_role));

DROP POLICY IF EXISTS "Public can view all skills" ON public.skills;
DROP POLICY IF EXISTS "Public can insert skills" ON public.skills;
DROP POLICY IF EXISTS "Public can update skills" ON public.skills;
DROP POLICY IF EXISTS "Public can delete skills" ON public.skills;
CREATE POLICY "Admins can view all skills" ON public.skills FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'::public.app_role));
CREATE POLICY "Admins can insert skills" ON public.skills FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'admin'::public.app_role));
CREATE POLICY "Admins can update skills" ON public.skills FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin'::public.app_role)) WITH CHECK (public.has_role(auth.uid(), 'admin'::public.app_role));
CREATE POLICY "Admins can delete skills" ON public.skills FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'::public.app_role));

DROP POLICY IF EXISTS "Public can view all design portfolio" ON public.design_portfolio;
DROP POLICY IF EXISTS "Public can insert design portfolio" ON public.design_portfolio;
DROP POLICY IF EXISTS "Public can update design portfolio" ON public.design_portfolio;
DROP POLICY IF EXISTS "Public can delete design portfolio" ON public.design_portfolio;
CREATE POLICY "Admins can view all design portfolio" ON public.design_portfolio FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'::public.app_role));
CREATE POLICY "Admins can insert design portfolio" ON public.design_portfolio FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'admin'::public.app_role));
CREATE POLICY "Admins can update design portfolio" ON public.design_portfolio FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin'::public.app_role)) WITH CHECK (public.has_role(auth.uid(), 'admin'::public.app_role));
CREATE POLICY "Admins can delete design portfolio" ON public.design_portfolio FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'::public.app_role));