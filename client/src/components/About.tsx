import { useLanguage } from "../hooks/use-language";

export default function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 bg-background-dark">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Title with Improved Spacing */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-red-600 inline-block relative pb-3 after:content-[''] after:absolute after:w-1/2 after:h-0.5 after:bg-red-600 after:bottom-0 after:left-1/4">
            {t('about.title')}
          </h2>
        </div>
        
        {/* Content with Terminal Style Text */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-black/90 border border-red-600/40 rounded-lg p-4 sm:p-6 shadow-lg shadow-black/30">
            {/* Terminal Header */}
            <div className="flex items-center justify-between mb-4 sm:mb-6 pb-2 sm:pb-3 border-b border-gray-800">
              <div className="flex gap-1.5">
                <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-red-500"></div>
                <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-yellow-500"></div>
                <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="terminal-text text-xs sm:text-sm text-gray-500">about_me.sh</div>
            </div>
            
            <div className="terminal-text text-sm sm:text-md md:text-lg mb-3 sm:mb-4 text-red-600">
              <span className="text-red-600">$ cat profile.txt</span>
            </div>
            
            <div className="space-y-3 sm:space-y-4 pl-2 sm:pl-4">
              <p className="text-text-light/90 text-sm sm:text-base">
                <span className="text-red-600">{'>'}</span> {t('about.paragraph1')}
              </p>
              
              <p className="text-text-light/90 text-sm sm:text-base">
                <span className="text-red-600">{'>'}</span> {t('about.paragraph2')}
              </p>
            </div>
            
            <div className="terminal-text text-sm sm:text-md md:text-lg mt-6 sm:mt-8 mb-3 sm:mb-4 text-red-600 break-words">
              <span className="text-red-600">$ ls -la {t('about.skills').toLowerCase()}/</span>
            </div>
            
            <div className="flex flex-wrap gap-2 pl-2 sm:pl-4">
              {/* Certified Skills (From certificates) */}
              <span className="bg-black/40 border border-red-600/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded text-sm sm:text-base hover:bg-red-600/10 transition-all duration-300 hover:-translate-y-1 text-yellow-400">{t('skills.nmap')}</span>
              <span className="bg-black/40 border border-red-600/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded text-sm sm:text-base hover:bg-red-600/10 transition-all duration-300 hover:-translate-y-1 text-yellow-400">{t('skills.wireshark')}</span>
              <span className="bg-black/40 border border-red-600/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded text-sm sm:text-base hover:bg-red-600/10 transition-all duration-300 hover:-translate-y-1 text-yellow-400">{t('skills.cisco')}</span>
              <span className="bg-black/40 border border-red-600/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded text-sm sm:text-base hover:bg-red-600/10 transition-all duration-300 hover:-translate-y-1 text-yellow-400">{t('skills.googleSecurity')}</span>
            </div>
            
            <div className="mt-5 sm:mt-6 pt-2 sm:pt-3 border-t border-gray-800">
              <p className="text-gray-500 text-xs sm:text-sm terminal-text">{t('about.tagline')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
