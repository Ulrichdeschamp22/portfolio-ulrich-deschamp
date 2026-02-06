import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import PageLoader from "@/components/ui/PageLoader";
import MorphingBlob from "@/components/ui/MorphingBlob";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LegalNotice from "./pages/LegalNotice";
import Auth from "./pages/Auth";
import Administration from "./pages/Administration";
import Tarifs from "./pages/Tarifs";
import EspaceFormation from "./pages/EspaceFormation";

const queryClient = new QueryClient();

const App = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          {/* Page loader */}
          {showLoader && <PageLoader />}
          
          {/* Morphing blob - fil conducteur visuel */}
          <MorphingBlob />
          
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/mentions-legales" element={<LegalNotice />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/administration" element={<Administration />} />
              <Route path="/tarifs" element={<Tarifs />} />
              <Route path="/espace-formation" element={<EspaceFormation />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
