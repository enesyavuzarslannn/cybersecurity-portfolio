# Siber Güvenlik Sitesi - Frontend Kodları

## HTML (index.html)
```html
<!DOCTYPE html>
<html lang="tr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
    <title>Enes Yavuzarslan | Siber Güvenlik</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Segoe+UI:wght@400;500;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## CSS (index.css)
```css@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  /* Light theme colors (default) */
  --background: 0 0% 100%;
  --foreground: 20 14.3% 4.1%;
  --muted: 60 4.8% 95.9%;
  --muted-foreground: 25 5.3% 44.7%;
  --popover: 0 0% 100%;
  --popover-foreground: 20 14.3% 4.1%;
  --card: 0 0% 100%;
  --card-foreground: 20 14.3% 4.1%;
  --border: 20 5.9% 90%;
  --input: 20 5.9% 90%;
  --primary: 0 100% 50%; /* Red */
  --primary-foreground: 211 100% 99%;
  --secondary: 215 25% 10%; /* Dark gray */
  --secondary-foreground: 0 0% 98%;
  --accent: 0 100% 60%; /* Light red */
  --accent-foreground: 24 9.8% 10%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 60 9.1% 97.8%;
  --ring: 20 14.3% 4.1%;
  --radius: 0.5rem;
  
  /* Custom theme colors */
  --background-dark: 0 0% 4%; /* #0a0a0a */
  --background-medium: 0 0% 10%; /* Dark background */
  --text-light: 0 0% 94%; /* Light text */
  --accent-color: 0 100% 50%; /* Red accent */
  
  /* Terminal colors */
  --terminal-red: 0 100% 50%; /* #ff0000 */
  --terminal-green: 120 100% 40%; /* #00cc00 */
  --terminal-yellow: 60 100% 50%; /* #ffff00 */
  --terminal-blue: 240 100% 50%; /* #0000ff */
  --terminal-magenta: 300 100% 50%; /* #ff00ff */
  --terminal-cyan: 180 100% 50%; /* #00ffff */
}



@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply font-sans antialiased bg-background text-foreground;
  }
}

/* Custom styles */
.terminal-text {
  font-family: 'Courier Prime', monospace;
}

.cursor {
  display: inline-block;
  width: 10px;
  height: 20px;
  background-color: #ff0000;
  margin-left: 5px;
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@keyframes growWidth {
  from { width: 0; }
  to { width: var(--target-width, 100%); }
}

.red-cursor {
  display: inline-block;
  width: 10px;
  height: 18px;
  background-color: #ff0000;
  margin-left: 0;
  vertical-align: middle;
  position: relative;
  top: -1px;
  animation: blink 1s infinite;
}

@keyframes typewriter {
  from { width: 0; }
  to { width: 100%; }
}

.typewriter-effect {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  animation: typewriter 2s steps(40, end) 1 forwards;
  width: 0;
}

.delay-1 {
  animation-delay: 0.5s;
}

.delay-2 {
  animation-delay: 2s;
}

.delay-3 {
  animation-delay: 3.5s;
}

.delay-4 {
  animation-delay: 5s;
}

/* Custom utilities */
@layer utilities {
  .bg-background-dark {
    background-color: hsl(var(--background-dark));
  }
  
  .text-text-light {
    color: hsl(var(--text-light));
  }
  
  .text-shadow {
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
  }
  
  .text-shadow-lg {
    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
  }
}

```

## Ana React Bileşenleri

### App.tsx
```tsx
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

```

### Header.tsx
```tsx
import { useState, useEffect } from 'react';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../hooks/use-language';

interface HeaderProps {
  toggleMobileMenu: () => void;
}

export default function Header({ toggleMobileMenu }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={`bg-secondary fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'shadow-md shadow-red-600/20 py-2' : 'py-4'
    }`}>
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-red-600">
            Enes <span className="text-text-light">Yavuzarslan</span>
          </a>
          
          <ul className="hidden md:flex space-x-8">
            <li>
              <a 
                href="#" 
                className="font-medium hover:text-red-600 transition-colors duration-300 relative after:absolute after:w-0 after:h-0.5 after:bg-red-600 after:left-0 after:bottom-0 hover:after:w-full after:transition-all after:duration-300"
              >
                {t('nav.home')}
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className="font-medium hover:text-red-600 transition-colors duration-300 relative after:absolute after:w-0 after:h-0.5 after:bg-red-600 after:left-0 after:bottom-0 hover:after:w-full after:transition-all after:duration-300"
              >
                {t('nav.about')}
              </a>
            </li>
            <li>
              <a 
                href="#certificates" 
                className="font-medium hover:text-red-600 transition-colors duration-300 relative after:absolute after:w-0 after:h-0.5 after:bg-red-600 after:left-0 after:bottom-0 hover:after:w-full after:transition-all after:duration-300"
              >
                {t('nav.certificates')}
              </a>
            </li>
            <li>
              <a 
                href="#education" 
                className="font-medium hover:text-red-600 transition-colors duration-300 relative after:absolute after:w-0 after:h-0.5 after:bg-red-600 after:left-0 after:bottom-0 hover:after:w-full after:transition-all after:duration-300"
              >
                {t('education.title')}
              </a>
            </li>
            <li>
              <a 
                href="#resources" 
                className="font-medium hover:text-red-600 transition-colors duration-300 relative after:absolute after:w-0 after:h-0.5 after:bg-red-600 after:left-0 after:bottom-0 hover:after:w-full after:transition-all after:duration-300"
              >
                {t('nav.resources')}
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="font-medium hover:text-red-600 transition-colors duration-300 relative after:absolute after:w-0 after:h-0.5 after:bg-red-600 after:left-0 after:bottom-0 hover:after:w-full after:transition-all after:duration-300"
              >
                {t('nav.contact')}
              </a>
            </li>
          </ul>
          
          <div className="flex items-center gap-4">
            <LanguageToggle />
            
            <div 
              className="md:hidden cursor-pointer" 
              onClick={toggleMobileMenu}
            >
              <div className="w-6 h-0.5 bg-text-light my-1.5 transition-all duration-300"></div>
              <div className="w-6 h-0.5 bg-text-light my-1.5 transition-all duration-300"></div>
              <div className="w-6 h-0.5 bg-text-light my-1.5 transition-all duration-300"></div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

```

### Hero.tsx
```tsx
import { useLanguage } from "../hooks/use-language";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-center bg-background-dark overflow-hidden" id="home">
      {/* Background overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-primary/10 z-10"></div>
      
      {/* Background image - reduced opacity for better contrast */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-20 py-24">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-10 text-shadow-lg">
            {t('hero.greeting')} <span className="text-red-600">Enes<br/>Yavuzarslan</span>
          </h1>
          
          {/* Terminal Window */}
          <div className="bg-black/90 border border-red-600 rounded-lg p-6 mb-8 w-full md:w-[800px] shadow-lg shadow-red-600/20">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-800">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-sm text-gray-500">terminal.sh</div>
            </div>
            
            <div className="terminal-text text-sm md:text-base lg:text-lg space-y-3 font-mono">
              <p className="text-red-600">root@kali:~# ./scan.sh</p>
              <p className="text-gray-300 ml-2 md:ml-4">
                <span className="typewriter-effect delay-1">Scanning target...</span>
              </p>
              <p className="text-gray-300 ml-2 md:ml-4">
                <span className="typewriter-effect delay-2">Target identified: {t('hero.title')}</span>
              </p>
              
              <p className="text-red-600 mt-6">root@kali:~# cat profile.txt</p>
              <p className="text-gray-300 ml-2 md:ml-4">
                <span className="typewriter-effect delay-3">{t('hero.subtitle')}</span>
              </p>
              
              <p className="text-red-600 mt-6">
                root@kali:~# sudo add-hacker --name="Enes" --level="Ultra" --coolness=9999<span className="red-cursor"></span>
              </p>
            </div>
          </div>
          
          <p className="text-lg mb-8 max-w-3xl text-text-light/90 text-shadow">
            {t('hero.description')}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-semibold transition-all duration-300 shadow-lg shadow-red-600/30 hover:-translate-y-1 flex items-center"
            >
              <i className="fas fa-paper-plane mr-2"></i> {t('nav.contact')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

```

### About.tsx
```tsx
import { useLanguage } from "../hooks/use-language";

export default function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-16 md:py-24 bg-background-dark">
      <div className="container mx-auto px-6">
        {/* Section Title with Improved Spacing */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold text-red-600 inline-block relative pb-3 after:content-[''] after:absolute after:w-1/2 after:h-0.5 after:bg-red-600 after:bottom-0 after:left-1/4">
            {t('about.title')}
          </h2>
        </div>
        
        {/* Content with Terminal Style Text */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-black/90 border border-red-600/40 rounded-lg p-6 shadow-lg shadow-black/30">
            {/* Terminal Header */}
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-gray-800">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="terminal-text text-sm text-gray-500">about_me.sh</div>
            </div>
            
            <div className="terminal-text text-md md:text-lg mb-4 text-red-600">
              <span className="text-red-600">$ cat profile.txt</span>
            </div>
            
            <div className="space-y-4 pl-4">
              <p className="text-text-light/90">
                <span className="text-red-600">{'>'}</span> {t('about.paragraph1')}
              </p>
              
              <p className="text-text-light/90">
                <span className="text-red-600">{'>'}</span> {t('about.paragraph2')}
              </p>
            </div>
            
            <div className="terminal-text text-md md:text-lg mt-8 mb-4 text-red-600">
              <span className="text-red-600">$ ls -la {t('about.skills').toLowerCase()}/</span>
            </div>
            
            <div className="flex flex-wrap gap-2 pl-4">
              {/* Certified Skills (From certificates) */}
              <span className="bg-black/40 border border-red-600/30 px-4 py-2 rounded hover:bg-red-600/10 transition-all duration-300 hover:-translate-y-1 text-yellow-400">{t('skills.nmap')}</span>
              <span className="bg-black/40 border border-red-600/30 px-4 py-2 rounded hover:bg-red-600/10 transition-all duration-300 hover:-translate-y-1 text-yellow-400">{t('skills.wireshark')}</span>
              <span className="bg-black/40 border border-red-600/30 px-4 py-2 rounded hover:bg-red-600/10 transition-all duration-300 hover:-translate-y-1 text-yellow-400">{t('skills.cisco')}</span>
              <span className="bg-black/40 border border-red-600/30 px-4 py-2 rounded hover:bg-red-600/10 transition-all duration-300 hover:-translate-y-1 text-yellow-400">{t('skills.googleSecurity')}</span>
            </div>
            
            <div className="mt-6 pt-3 border-t border-gray-800">
              <p className="text-gray-500 text-sm terminal-text">{t('about.tagline')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

```

### Contact.tsx
```tsx
import { useState } from 'react';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from "@/hooks/use-language";

export default function Contact() {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: t('contact.error'),
        description: t('contact.fillRequired'),
        variant: "destructive"
      });
      return;
    }
    
    try {
      setIsSubmitting(true);
      const response = await apiRequest('POST', '/api/contact', formData);
      
      if (response.ok) {
        toast({
          title: t('contact.success'),
          description: t('contact.messageSent'),
          variant: "default"
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      }
    } catch (error) {
      toast({
        title: t('contact.sendFailed'),
        description: t('contact.tryAgain'),
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-secondary">
      <div className="container mx-auto px-6">
        {/* FIXED: Reduced spacing between title and form */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-red-600 inline-block relative pb-3 after:content-[''] after:absolute after:w-1/2 after:h-0.5 after:bg-red-600 after:bottom-0 after:left-1/4">
            {t('nav.contact')}
          </h2>
        </div>
        
        {/* Contact Form with Terminal Style */}
        <div className="max-w-3xl mx-auto">
          <p className="text-center mb-6">
            {t('contact.description')}
          </p>
          
          <form 
            className="bg-black/90 border border-red-600/40 rounded-lg p-6 shadow-lg shadow-black/30"
            onSubmit={handleSubmit}
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-800">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="terminal-text text-sm text-gray-500">contact_form.sh</div>
            </div>
            
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 font-medium">
                <span className="text-red-600">$</span> {t('contact.name')}
              </label>
              <input 
                type="text" 
                id="name" 
                className="w-full bg-black/60 border border-gray-700 rounded px-4 py-3 focus:outline-none focus:border-red-600 transition-colors text-text-light"
                placeholder={t('contact.namePlaceholder')}
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 font-medium">
                <span className="text-red-600">$</span> {t('contact.email')}
              </label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-black/60 border border-gray-700 rounded px-4 py-3 focus:outline-none focus:border-red-600 transition-colors text-text-light"
                placeholder={t('contact.emailPlaceholder')}
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="phone" className="block mb-2 font-medium">
                <span className="text-red-600">$</span> {t('contact.phone')} <span className="text-gray-500 text-sm">({t('contact.optional')})</span>
              </label>
              <input 
                type="tel" 
                id="phone" 
                className="w-full bg-black/60 border border-gray-700 rounded px-4 py-3 focus:outline-none focus:border-red-600 transition-colors text-text-light"
                placeholder={t('contact.phonePlaceholder')}
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            
            <div className="mb-5">
              <label htmlFor="message" className="block mb-2 font-medium">
                <span className="text-red-600">$</span> {t('contact.message')}
              </label>
              <textarea 
                id="message" 
                rows={5}
                className="w-full bg-black/60 border border-gray-700 rounded px-4 py-3 focus:outline-none focus:border-red-600 transition-colors text-text-light"
                placeholder={t('contact.messagePlaceholder')}
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded transition-all duration-300 hover:shadow-lg hover:shadow-red-600/30 disabled:opacity-70 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? t('contact.sending') : t('contact.send')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

```

### Footer.tsx
```tsx
import { useLanguage } from "@/hooks/use-language";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background-dark py-8 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-2xl font-bold text-red-600 mb-4">Enes Yavuzarslan</h3>
          
          <div className="flex space-x-8 my-4">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-white transition-colors duration-300">
              <FaLinkedin className="text-3xl" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-white transition-colors duration-300">
              <FaInstagram className="text-3xl" />
            </a>
          </div>
          
          <div className="text-center">
            <p className="text-red-600/80 italic mb-3 hover:text-white transition-colors duration-300 cursor-default">"{t('footer.slogan')}"</p>
            <p className="text-text-light/60">&copy; {currentYear} Enes Yavuzarslan. {t('footer.rights')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

```

### Certificates.tsx
```tsx
import { SiUdemy, SiCisco, SiGoogle } from 'react-icons/si';
import { useLanguage } from "@/hooks/use-language";

export default function Certificates() {
  const { t } = useLanguage();
  return (
    <section id="certificates" className="py-24 bg-background-dark relative z-10">
      <div className="container mx-auto px-4">
        <div className="terminal-window max-w-4xl mx-auto">
          {/* Terminal Header */}
          <div className="terminal-header flex items-center p-2 bg-secondary border-b border-red-600/30 rounded-t-lg">
            <div className="flex gap-1.5 mr-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="terminal-text text-sm ml-2">root@kali: ~/certificates</div>
          </div>
          
          {/* Terminal Content */}
          <div className="bg-secondary p-6 rounded-b-lg text-center border-x border-b border-red-600/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-red-600">{t('certificates.title')}</h2>
            <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
              {t('certificates.description')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {/* Udemy Sertifikaları */}
              <div className="bg-background-dark p-6 rounded-lg border border-red-600/20 shadow-lg hover:shadow-red-600/10 transition-all duration-300 hover:-translate-y-1">
                <div className="text-red-600 text-3xl mb-4">
                  <SiUdemy />
                </div>
                <h3 className="text-xl font-bold mb-2">Udemy</h3>
                <p className="text-gray-400 mb-4">{t('certificates.networkBasics')}</p>
                <div className="text-xs text-gray-500">2023</div>
              </div>
              
              <div className="bg-background-dark p-6 rounded-lg border border-red-600/20 shadow-lg hover:shadow-red-600/10 transition-all duration-300 hover:-translate-y-1">
                <div className="text-red-600 text-3xl mb-4">
                  <SiUdemy />
                </div>
                <h3 className="text-xl font-bold mb-2">Udemy</h3>
                <p className="text-gray-400 mb-4">{t('certificates.nmap')}</p>
                <div className="text-xs text-gray-500">2023</div>
              </div>
              
              <div className="bg-background-dark p-6 rounded-lg border border-red-600/20 shadow-lg hover:shadow-red-600/10 transition-all duration-300 hover:-translate-y-1">
                <div className="text-red-600 text-3xl mb-4">
                  <SiUdemy />
                </div>
                <h3 className="text-xl font-bold mb-2">Udemy</h3>
                <p className="text-gray-400 mb-4">{t('certificates.wireshark')}</p>
                <div className="text-xs text-gray-500">2023</div>
              </div>
              
              {/* Cisco Sertifikası */}
              <div className="bg-background-dark p-6 rounded-lg border border-red-600/20 shadow-lg hover:shadow-red-600/10 transition-all duration-300 hover:-translate-y-1">
                <div className="text-red-600 text-3xl mb-4">
                  <SiCisco />
                </div>
                <h3 className="text-xl font-bold mb-2">Cisco</h3>
                <p className="text-gray-400 mb-4">{t('certificates.cisco')}</p>
                <div className="text-xs text-gray-500">2025</div>
              </div>
              
              {/* Google Sertifikası */}
              <div className="bg-background-dark p-6 rounded-lg border border-red-600/20 shadow-lg hover:shadow-red-600/10 transition-all duration-300 hover:-translate-y-1">
                <div className="text-red-600 text-3xl mb-4">
                  <SiGoogle />
                </div>
                <h3 className="text-xl font-bold mb-2">Google</h3>
                <p className="text-gray-400 mb-4">{t('certificates.google')}</p>
                <div className="text-xs text-gray-500">2025</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

### SkillGraph.tsx
```tsx
import React from 'react';
import { useLanguage } from '@/hooks/use-language';

interface Skill {
  name: string;
  level: number; // 0-100
  color: string;
}

export default function SkillGraph() {
  const { t, language } = useLanguage();
  
  // Siber güvenlik araçları listesi
  const skills: Skill[] = [
    { name: 'Kali Linux', level: 95, color: 'bg-red-600' },
    { name: 'Nmap', level: 90, color: 'bg-red-500' },
    { name: 'Wireshark', level: 85, color: 'bg-red-400' },
    { name: 'Metasploit', level: 80, color: 'bg-yellow-500' },
  ];

  return (
    <section id="skills" className="py-16 px-6 bg-bg-dark">
      <div className="container mx-auto">
        <div className="terminal-container p-6 rounded-lg border border-border-light/30 bg-bg-darker shadow-lg">
          <div className="terminal-header flex items-center mb-6">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
            <div className="flex-grow">
              <p className="text-text-light/70 text-sm text-center">
                {language === 'tr' ? '~/beceriler' : '~/skills'}
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-red-600 mb-4 flex items-center">
              <span className="text-text-light mr-2">$</span> 
              {t('skills.title')}
              <span className="animate-blink ml-2">_</span>
            </h2>
            <p className="text-text-light/80 mb-8">{t('skills.description')}</p>
          </div>

          <div className="space-y-4">
            {skills.map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between mb-1 group">
                  <span className="text-text-light/90 font-mono group-hover:text-white transition-colors duration-300">{skill.name}</span>
                  <span className="text-text-light/70 font-mono group-hover:text-red-500 transition-colors duration-300">{skill.level}%</span>
                </div>
                <div className="h-4 w-full bg-bg-light/10 rounded-full overflow-hidden group">
                  <div 
                    className={`h-full ${skill.color} transition-all duration-300 ease-out group-hover:brightness-125 group-hover:shadow-md group-hover:shadow-white/20`}
                    style={{ 
                      width: "0%",
                      animation: `growWidth 1.5s ease-out ${index * 0.2}s forwards`,
                      '--target-width': `${skill.level}%`
                    } as React.CSSProperties}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

## Hooks ve Altyapı

### use-language.tsx
```tsx
import { createContext, useContext, useEffect, useState } from "react";

type Language = "tr" | "en";

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  t: (key: keyof typeof translations.tr | keyof typeof translations.en | string) => string;
};

// Çeviriler için nesne
const translations = {
  en: {
    // Header
    "nav.home": "Home",
    "nav.about": "About Me",
    "nav.certificates": "Certificates",
    "nav.resources": "Resources",
    "nav.contact": "Contact",
    
    // Hero
    "hero.greeting": "Hello, I'm",
    "hero.title": "Cybersecurity Enthusiast",
    "hero.subtitle": "Those who steal rights get hacked!",
    "hero.description": "I'm a Computer Programming student at Erzurum Atatürk University. I'm developing myself in the field of cybersecurity and working to shape the technologies of the future.",
    
    // About
    "about.title": "About Me",
    "about.description": "I'm a cybersecurity student with a passion for ethical hacking, digital forensics, and network security. I'm constantly learning and improving my skills in this ever-evolving field.",
    "about.paragraph1": "I'm passionate about cybersecurity, ethical hacking, and protecting digital systems from threats.",
    "about.paragraph2": "I believe in sharing knowledge and continuous learning in this ever-evolving field.",
    "about.tagline": "Security is not just a feature, it's a mindset.",
    "about.skills": "My Skills",
    "skills.webSecurity": "Web Security",
    "skills.networkAnalysis": "Network Analysis",
    "skills.ctf": "CTF Challenges",
    "skills.cryptography": "Cryptography",
    "skills.nmap": "Network Discovery (Nmap certified)",
    "skills.wireshark": "Network Traffic Analysis (Wireshark certified)",
    "skills.cisco": "Enterprise Security (Cisco certified)",
    "skills.googleSecurity": "Cloud Security (Google certified)",
    "about.skill.pentesting": "Penetration Testing",
    "about.skill.forensics": "Digital Forensics",
    "about.skill.networking": "Network Security",
    "about.skill.linux": "Linux Administration",
    "about.skill.programming": "Security Programming",
    
    // Certificates
    "certificates.title": "My Certificates",
    "certificates.description": "I'm constantly taking various courses and collecting certificates to improve myself in the field of cybersecurity.",
    "certificates.networkBasics": "Network Fundamentals Training",
    "certificates.nmap": "Network Discovery with Nmap",
    "certificates.wireshark": "Wireshark Network Analysis",
    "certificates.cisco": "Cyber Security Training",
    "certificates.google": "Cyber Security Training",
    
    // Skills Graph
    "skills.title": "Technical Skills",
    "skills.description": "My proficiency level in various cybersecurity tools and technologies.",
    
    // Education
    "education.title": "Education History",
    "education.description": "My academic journey and educational background.",
    "education.combinedTitle": "Education & Certificates",
    "education.combinedDescription": "My academic journey and professional certifications in cybersecurity.",
    
    // Resources
    "resources.title": "Recommended Resources",
    "resources.description": "A collection of valuable resources for learning cybersecurity and ethical hacking.",
    "resources.visitLink": "Visit resource",
    "resources.disclaimer": "Note: These resources are recommended based on personal experience and may be updated periodically.",
    
    // Contact
    "contact.title": "Contact Me",
    "contact.description": "Fill out the form below to get in touch with me. I will get back to you as soon as possible.",
    "contact.name": "Full Name",
    "contact.namePlaceholder": "Enter your full name",
    "contact.email": "Email Address",
    "contact.emailPlaceholder": "Enter your email address",
    "contact.phone": "Phone Number",
    "contact.phonePlaceholder": "Enter your phone number",
    "contact.optional": "Optional",
    "contact.message": "Message",
    "contact.messagePlaceholder": "Enter your message",
    "contact.send": "Send",
    "contact.sending": "Sending...",
    "contact.error": "Error",
    "contact.fillRequired": "Please fill all required fields.",
    "contact.success": "Success",
    "contact.messageSent": "Your message has been sent. We will get back to you as soon as possible.",
    "contact.sendFailed": "Send Failed",
    "contact.tryAgain": "An error occurred while sending your message. Please try again later.",
    
    // Footer
    "footer.rights": "All rights reserved",
    "footer.description": "Computer programming student and cybersecurity enthusiast. Working to shape the technologies of the future.",
    "footer.slogan": "Security is not a product, but a process.",
    "footer.quickLinks": "Quick Links",
    "footer.home": "Home",
    "footer.about": "About",
    "footer.projects": "Projects",
    "footer.certificates": "Certificates",
    "footer.contact": "Contact",
    "footer.contactInfo": "Contact Information",
    
    // Language
    "language.switch": "Türkçe'ye Geç",
  },
  tr: {
    // Header
    "nav.home": "Ana Sayfa",
    "nav.about": "Hakkımda",
    "nav.certificates": "Sertifikalar",
    "nav.resources": "Kaynaklar",
    "nav.contact": "İletişim",
    
    // Hero
    "hero.greeting": "Merhaba, Ben",
    "hero.title": "Siber Güvenlik Meraklısı",
    "hero.subtitle": "Hak yiyen hack yer!",
    "hero.description": "Erzurum Atatürk Üniversitesi Bilgisayar Programcılığı öğrencisiyim. Siber güvenlik alanında kendimi geliştiriyor ve geleceğin teknolojilerine yön vermek için çalışıyorum.",
    
    // About
    "about.title": "Hakkımda",
    "about.description": "Etik hackerlik, dijital adli bilişim ve ağ güvenliği konularına tutkulu bir siber güvenlik öğrencisiyim. Bu sürekli gelişen alanda becerilerimi sürekli geliştiriyorum.",
    "about.paragraph1": "Siber güvenlik, etik hackerlik ve dijital sistemleri tehditlerden koruma konularında tutkuluyum.",
    "about.paragraph2": "Bu sürekli gelişen alanda bilgi paylaşımına ve sürekli öğrenmeye inanıyorum.",
    "about.tagline": "Güvenlik sadece bir özellik değil, bir düşünce biçimidir.",
    "about.skills": "Yeteneklerim",
    "skills.webSecurity": "Web Güvenliği",
    "skills.networkAnalysis": "Ağ Analizi",
    "skills.ctf": "CTF Yarışmaları",
    "skills.cryptography": "Kriptografi",
    "skills.nmap": "Ağ Keşfi (Nmap sertifikalı)",
    "skills.wireshark": "Ağ Trafiği Analizi (Wireshark sertifikalı)",
    "skills.cisco": "Kurumsal Güvenlik (Cisco sertifikalı)",
    "skills.googleSecurity": "Bulut Güvenliği (Google sertifikalı)",
    "about.skill.pentesting": "Sızma Testleri",
    "about.skill.forensics": "Dijital Adli Bilişim",
    "about.skill.networking": "Ağ Güvenliği",
    "about.skill.linux": "Linux Yönetimi",
    "about.skill.programming": "Güvenlik Programlama",
    
    // Certificates
    "certificates.title": "Sertifikalarım",
    "certificates.description": "Siber güvenlik alanında kendimi sürekli geliştirmek için çeşitli eğitimler alıyor ve sertifikalar topluyorum.",
    "certificates.networkBasics": "Ağ Temelleri Eğitimi",
    "certificates.nmap": "Nmap ile Ağ Keşfi",
    "certificates.wireshark": "Wireshark Ağ Analizi",
    "certificates.cisco": "Siber Güvenlik Eğitimi",
    "certificates.google": "Siber Güvenlik Eğitimi",
    
    // Skills Graph
    "skills.title": "Teknik Yeteneklerim",
    "skills.description": "Çeşitli siber güvenlik araçları ve teknolojilerindeki yetkinlik seviyelerim.",
    
    // Education
    "education.title": "Eğitim Geçmişim",
    "education.description": "Akademik yolculuğum ve eğitim geçmişim.",
    "education.combinedTitle": "Eğitim ve Sertifikalar",
    "education.combinedDescription": "Akademik yolculuğum ve siber güvenlik alanındaki profesyonel sertifikalarım.",
    
    // Resources
    "resources.title": "Tavsiye Kaynaklar",
    "resources.description": "Siber güvenlik ve etik hackerlik öğrenmek için değerli kaynaklar koleksiyonu.",
    "resources.visitLink": "Kaynağı ziyaret et",
    "resources.disclaimer": "Not: Bu kaynaklar kişisel deneyimime dayanarak önerilmektedir ve periyodik olarak güncellenebilir.",
    
    // Contact
    "contact.title": "İletişim",
    "contact.description": "Aşağıdaki formu doldurarak benimle iletişime geçebilirsiniz. En kısa zamanda size geri dönüş yapacağım.",
    "contact.name": "Adınız Soyadınız",
    "contact.namePlaceholder": "Adınızı ve soyadınızı giriniz",
    "contact.email": "E-posta Adresiniz",
    "contact.emailPlaceholder": "E-posta adresinizi giriniz",
    "contact.phone": "Telefon Numaranız",
    "contact.phonePlaceholder": "Telefon numaranızı giriniz",
    "contact.optional": "İsteğe Bağlı",
    "contact.message": "Mesajınız",
    "contact.messagePlaceholder": "Mesajınızı yazınız",
    "contact.send": "Gönder",
    "contact.sending": "Gönderiliyor...",
    "contact.error": "Hata",
    "contact.fillRequired": "Lütfen tüm zorunlu alanları doldurun.",
    "contact.success": "Başarılı",
    "contact.messageSent": "Mesajınız gönderildi. En kısa sürede size dönüş yapacağız.",
    "contact.sendFailed": "Gönderim Başarısız",
    "contact.tryAgain": "Mesajınız gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
    
    // Footer
    "footer.rights": "Tüm hakları saklıdır",
    "footer.description": "Bilgisayar programcılığı öğrencisi ve siber güvenlik tutkunu. Geleceğin teknolojilerine yön vermek için çalışıyorum.",
    "footer.slogan": "Güvenlik bir ürün değil, bir süreçtir.",
    "footer.quickLinks": "Hızlı Bağlantılar",
    "footer.home": "Ana Sayfa",
    "footer.about": "Hakkımda",
    "footer.projects": "Projeler",
    "footer.certificates": "Sertifikalar",
    "footer.contact": "İletişim",
    "footer.contactInfo": "İletişim Bilgileri",
    
    // Language
    "language.switch": "Switch to English",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    // Tarayıcı tercihine göre veya önceki tercihe göre dil belirle
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") as Language;
      if (savedLanguage) return savedLanguage;
      
      // Tarayıcı dilini kontrol et ve varsayılan olarak tr kullan
      const browserLanguage = navigator.language.split('-')[0];
      return browserLanguage === "en" ? "en" : "tr";
    }
    return "tr"; // Varsayılan olarak Türkçe
  });

  useEffect(() => {
    // Dil değiştiğinde localStorage'a kaydet
    localStorage.setItem("language", language);
    
    // HTML'nin lang özelliğini güncelle
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(language === "tr" ? "en" : "tr");
  };
  
  // Çeviri fonksiyonu
  const t = (key: string): string => {
    if (!translations[language]) return key;
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
```

### use-theme.tsx
```tsx
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Tarayıcı tercihine göre ilk değeri ayarla
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") as Theme;
      if (savedTheme) return savedTheme;
      
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "dark";
  });

  useEffect(() => {
    // Tema değiştiğinde localStorage'a kaydet
    localStorage.setItem("theme", theme);
    
    // Body elementine tema class'ını ekle
    if (theme === "dark") {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
    } else {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
```

## Backend Kodları

### server/routes.ts
```ts
import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, phone, message } = req.body;
      
      // Validate required fields
      if (!name || !email || !message) {
        return res.status(400).json({ message: 'Adınız, email ve mesaj alanları zorunludur.' });
      }
      
      try {
        // Validate with zod schema
        const validatedData = insertContactMessageSchema.parse({ name, email, phone, message });
        
        // Veritabanına kaydet
        const savedMessage = await storage.createContactMessage(validatedData);
        
        return res.status(200).json({ 
          success: true,
          message: 'İletişim formu başarıyla gönderildi.',
          data: savedMessage
        });
      } catch (validationError) {
        if (validationError instanceof z.ZodError) {
          return res.status(400).json({ 
            message: 'Form verilerinde hata var.',
            errors: validationError.errors 
          });
        }
        throw validationError;
      }
    } catch (error) {
      console.error('Contact form error:', error);
      return res.status(500).json({ 
        message: 'Bir hata oluştu. Lütfen daha sonra tekrar deneyin.' 
      });
    }
  });

  // Tüm mesajları getir (sadece admin tarafından kullanılacak, normalde authentication gerekir)
  app.get('/api/admin/messages', async (req, res) => {
    try {
      const messages = await storage.getAllContactMessages();
      return res.status(200).json({
        success: true,
        data: messages
      });
    } catch (error) {
      console.error('Get messages error:', error);
      return res.status(500).json({
        message: 'Mesajlar alınırken bir hata oluştu.'
      });
    }
  });

  // Bir mesajı işaretleme
  app.patch('/api/admin/messages/:id/read', async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      
      if (isNaN(id)) {
        return res.status(400).json({ message: 'Geçersiz ID formatı.' });
      }
      
      const success = await storage.markContactMessageAsRead(id);
      
      if (!success) {
        return res.status(404).json({ message: 'Mesaj bulunamadı.' });
      }
      
      return res.status(200).json({
        success: true,
        message: 'Mesaj okundu olarak işaretlendi.'
      });
    } catch (error) {
      console.error('Mark message as read error:', error);
      return res.status(500).json({
        message: 'Mesaj işaretlenirken bir hata oluştu.'
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

```

### shared/schema.ts
```ts
import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// İletişim mesajları için tablo
export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  message: text("message").notNull(),
  isRead: boolean("is_read").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertContactMessageSchema = createInsertSchema(contactMessages).pick({
  name: true,
  email: true,
  phone: true,
  message: true,
});

export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;

```
