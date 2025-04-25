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
            
            <button 
              className="md:hidden cursor-pointer flex flex-col items-center justify-center p-1 focus:outline-none" 
              onClick={toggleMobileMenu}
              aria-label="Mobile menu toggle"
            >
              <span className="w-6 h-0.5 bg-text-light my-1 block hover:bg-red-600 transition-all duration-300"></span>
              <span className="w-6 h-0.5 bg-text-light my-1 block hover:bg-red-600 transition-all duration-300"></span>
              <span className="w-6 h-0.5 bg-text-light my-1 block hover:bg-red-600 transition-all duration-300"></span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
