import { useLanguage } from '../hooks/use-language';
import LanguageToggle from './LanguageToggle';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { t } = useLanguage();
  
  const handleLinkClick = () => {
    onClose();
  };
  
  return (
    <div 
      className={`fixed inset-0 bg-black/95 z-50 ${isOpen ? 'flex' : 'hidden'} flex-col justify-center items-center`}
    >
      <button 
        className="absolute top-6 right-6 text-text-light hover:text-red-600 p-2"
        onClick={onClose}
        aria-label="Close menu"
      >
        <X size={24} />
      </button>
      
      {/* Terminal Style Header */}
      <div className="absolute top-6 left-6 flex items-center">
        <div className="flex gap-1.5 mr-4">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="terminal-text text-sm text-gray-500">navigation.sh</div>
      </div>
      
      <ul className="text-center space-y-6">
        <li>
          <a 
            href="#" 
            className="text-2xl font-bold text-text-light hover:text-red-600 transition-colors duration-300 flex items-center justify-center"
            onClick={handleLinkClick}
          >
            <span className="text-red-600 mr-2 terminal-text">$</span> {t('nav.home')}
          </a>
        </li>
        <li>
          <a 
            href="#about" 
            className="text-2xl font-bold text-text-light hover:text-red-600 transition-colors duration-300 flex items-center justify-center"
            onClick={handleLinkClick}
          >
            <span className="text-red-600 mr-2 terminal-text">$</span> {t('nav.about')}
          </a>
        </li>
        <li>
          <a 
            href="#certificates" 
            className="text-2xl font-bold text-text-light hover:text-red-600 transition-colors duration-300 flex items-center justify-center"
            onClick={handleLinkClick}
          >
            <span className="text-red-600 mr-2 terminal-text">$</span> {t('nav.certificates')}
          </a>
        </li>
        <li>
          <a 
            href="#education" 
            className="text-2xl font-bold text-text-light hover:text-red-600 transition-colors duration-300 flex items-center justify-center"
            onClick={handleLinkClick}
          >
            <span className="text-red-600 mr-2 terminal-text">$</span> {t('education.title')}
          </a>
        </li>
        <li>
          <a 
            href="#resources" 
            className="text-2xl font-bold text-text-light hover:text-red-600 transition-colors duration-300 flex items-center justify-center"
            onClick={handleLinkClick}
          >
            <span className="text-red-600 mr-2 terminal-text">$</span> {t('nav.resources')}
          </a>
        </li>
        <li>
          <a 
            href="#contact" 
            className="text-2xl font-bold text-text-light hover:text-red-600 transition-colors duration-300 flex items-center justify-center"
            onClick={handleLinkClick}
          >
            <span className="text-red-600 mr-2 terminal-text">$</span> {t('nav.contact')}
          </a>
        </li>
      </ul>
      
      <div className="flex space-x-6 mt-12">
        <a href="#" className="text-text-light hover:text-red-600 transition-colors duration-300">
          <i className="fab fa-twitter text-2xl"></i>
        </a>
        <a href="#" className="text-text-light hover:text-red-600 transition-colors duration-300">
          <i className="fab fa-linkedin text-2xl"></i>
        </a>
        <a href="#" className="text-text-light hover:text-red-600 transition-colors duration-300">
          <i className="fab fa-github text-2xl"></i>
        </a>
        
        <div className="ml-4">
          <LanguageToggle />
        </div>
      </div>
    </div>
  );
}
