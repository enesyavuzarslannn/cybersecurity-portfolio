import { useEffect, useState } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Certificates from "@/components/Certificates";
import SkillGraph from "@/components/SkillGraph";
import Education from "@/components/Education";
import Resources from "@/components/Resources";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileMenu from "@/components/MobileMenu";
import SmoothScroll from "@/components/utils/SmoothScroll";
import { LanguageProvider } from "./hooks/use-language";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <SmoothScroll />
          <div className="min-h-screen bg-background-dark text-text-light">
            <Header 
              toggleMobileMenu={() => setIsMobileMenuOpen(true)} 
            />
            
            <main>
              <Hero />
              <About />
              <Certificates />
              <SkillGraph />
              <Education />
              <Resources />
              <Contact />
            </main>
            
            <Footer />
            
            <MobileMenu 
              isOpen={isMobileMenuOpen} 
              onClose={() => setIsMobileMenuOpen(false)} 
            />
          </div>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
