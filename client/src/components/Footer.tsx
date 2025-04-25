import { useLanguage } from "@/hooks/use-language";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background-dark py-6 sm:py-8 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-xl sm:text-2xl font-bold text-red-600 mb-3 sm:mb-4">Enes Yavuzarslan</h3>
          
          <div className="flex space-x-6 sm:space-x-8 my-3 sm:my-4">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-white transition-colors duration-300">
              <FaLinkedin className="text-2xl sm:text-3xl" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-white transition-colors duration-300">
              <FaInstagram className="text-2xl sm:text-3xl" />
            </a>
          </div>
          
          <div className="text-center">
            <p className="text-red-600/80 italic mb-2 sm:mb-3 hover:text-white transition-colors duration-300 cursor-default text-sm sm:text-base">"{t('footer.slogan')}"</p>
            <p className="text-text-light/60 text-xs sm:text-sm">&copy; {currentYear} Enes Yavuzarslan. {t('footer.rights')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
