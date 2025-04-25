import { useLanguage } from "../hooks/use-language";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-center bg-background-dark overflow-hidden" id="home">
      {/* Background overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-primary/10 z-10"></div>
      
      {/* Background image - reduced opacity for better contrast */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center opacity-20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-20 py-12 sm:py-24 mt-16 sm:mt-0">
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-10 text-shadow-lg">
            {t('hero.greeting')} <span className="text-red-600">Enes<br/>Yavuzarslan</span>
          </h1>
          
          {/* Terminal Window */}
          <div className="bg-black/90 border border-red-600 rounded-lg p-3 sm:p-6 mb-6 sm:mb-8 w-full shadow-lg shadow-red-600/20 overflow-x-auto">
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-800">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-xs sm:text-sm text-gray-500">terminal.sh</div>
            </div>
            
            <div className="terminal-text text-xs sm:text-sm md:text-base lg:text-lg space-y-2 sm:space-y-3 font-mono">
              <p className="text-red-600">root@kali:~# ./scan.sh</p>
              <p className="text-gray-300 ml-2 md:ml-4">
                <span className="typewriter-effect delay-1">Scanning target...</span>
              </p>
              <p className="text-gray-300 ml-2 md:ml-4 break-words">
                <span className="typewriter-effect delay-2">Target identified: {t('hero.title')}</span>
              </p>
              
              <p className="text-red-600 mt-4 sm:mt-6">root@kali:~# cat profile.txt</p>
              <p className="text-gray-300 ml-2 md:ml-4 break-words">
                <span className="typewriter-effect delay-3">{t('hero.subtitle')}</span>
              </p>
              
              <div className="text-red-600 mt-4 sm:mt-6 whitespace-normal break-words">
                <span className="inline">root@kali:~# sudo add-hacker --name="Enes" --level="Ultra" --coolness=9999<span className="red-cursor"></span></span>
              </div>
            </div>
          </div>
          
          <p className="text-base sm:text-lg mb-6 sm:mb-8 max-w-3xl text-text-light/90 text-shadow">
            {t('hero.description')}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 rounded-md font-semibold transition-all duration-300 shadow-lg shadow-red-600/30 hover:-translate-y-1 flex items-center"
            >
              <i className="fas fa-paper-plane mr-2"></i> {t('nav.contact')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
