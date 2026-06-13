
-- Grant table privileges (RLS policies already exist but PostgREST also requires table-level GRANTs)
GRANT SELECT, INSERT, UPDATE, DELETE ON public.contact_messages TO anon, authenticated;
GRANT ALL ON public.contact_messages TO service_role;

GRANT SELECT, INSERT, UPDATE, DELETE ON public.projects TO anon, authenticated;
GRANT ALL ON public.projects TO service_role;

GRANT SELECT, INSERT, UPDATE, DELETE ON public.skills TO anon, authenticated;
GRANT ALL ON public.skills TO service_role;

GRANT SELECT, INSERT, UPDATE, DELETE ON public.design_portfolio TO anon, authenticated;
GRANT ALL ON public.design_portfolio TO service_role;
