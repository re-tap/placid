import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { StrictMode } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import GlobalImpact from "./pages/GlobalImpact";
import BackButton from "./components/BackButton";
import Message from "./pages/Message";
import WhoIsThisFor from "./pages/WhoIsThisFor";

// Import Community pages
import Discord from "./pages/Community/Discord";
import Twitter from "./pages/Community/Twitter";
import Events from "./pages/Community/Events";
import Sponsorships from "./pages/Community/Sponsorships";

// Import Legal pages
import Privacy from "./pages/Legal/Privacy";
import Terms from "./pages/Legal/Terms";
import CodeOfConduct from "./pages/Legal/CodeOfConduct";

// Create placeholder pages for the community links
const Members = () => (
  <div className="min-h-screen bg-black text-white flex items-center justify-center">
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold mb-4">Community Members</h1>
      <p className="text-xl text-gray-300">Page coming soon...</p>
    </div>
  </div>
);

const Projects = () => (
  <div className="min-h-screen bg-black text-white flex items-center justify-center">
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold mb-4">Active Projects</h1>
      <p className="text-xl text-gray-300">Page coming soon...</p>
    </div>
  </div>
);

const EnergyImpact = () => (
  <div className="min-h-screen bg-black text-white flex items-center justify-center">
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold mb-4">Renewable Energy Impact</h1>
      <p className="text-xl text-gray-300">Page coming soon...</p>
    </div>
  </div>
);

// Create the QueryClient inside a component to ensure it's only created once
const App = () => {
  // Create a new instance of QueryClient
  const queryClient = React.useMemo(() => new QueryClient(), []);

  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <BackButton />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/global-impact" element={<GlobalImpact />} />
              <Route path="/members" element={<Members />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/energy-impact" element={<EnergyImpact />} />
              <Route path="/message" element={<Message />} />
              <Route path="/who-is-this-for" element={<WhoIsThisFor />} />
              
              {/* Community Pages */}
              <Route path="/discord" element={<Discord />} />
              <Route path="/twitter" element={<Twitter />} />
              <Route path="/events" element={<Events />} />
              <Route path="/sponsorships" element={<Sponsorships />} />
              
              {/* Legal Pages */}
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/code-of-conduct" element={<CodeOfConduct />} />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </StrictMode>
  );
};

export default App;
