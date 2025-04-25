import { SiUdemy, SiCisco, SiGoogle } from 'react-icons/si';
import { useLanguage } from "@/hooks/use-language";

export default function Certificates() {
  const { t } = useLanguage();
  return (
    <section id="certificates" className="py-16 sm:py-20 md:py-24 bg-background-dark relative z-10">
      <div className="container mx-auto px-4">
        <div className="terminal-window max-w-4xl mx-auto">
          {/* Terminal Header */}
          <div className="terminal-header flex items-center p-2 bg-secondary border-b border-red-600/30 rounded-t-lg">
            <div className="flex gap-1.5 mr-3 sm:mr-4">
              <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-red-500"></div>
              <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-yellow-500"></div>
              <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="terminal-text text-xs sm:text-sm ml-1 sm:ml-2">root@kali: ~/certificates</div>
          </div>
          
          {/* Terminal Content */}
          <div className="bg-secondary p-4 sm:p-6 rounded-b-lg text-center border-x border-b border-red-600/30">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-red-600">{t('certificates.title')}</h2>
            <p className="text-sm sm:text-base text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto">
              {t('certificates.description')}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
              {/* Udemy Sertifikaları */}
              <div className="bg-background-dark p-4 sm:p-6 rounded-lg border border-red-600/20 shadow-lg hover:shadow-red-600/10 transition-all duration-300 hover:-translate-y-1">
                <div className="text-red-600 text-2xl sm:text-3xl mb-3 sm:mb-4">
                  <SiUdemy />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Udemy</h3>
                <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">{t('certificates.networkBasics')}</p>
                <div className="text-xs text-gray-500">2023</div>
              </div>
              
              <div className="bg-background-dark p-4 sm:p-6 rounded-lg border border-red-600/20 shadow-lg hover:shadow-red-600/10 transition-all duration-300 hover:-translate-y-1">
                <div className="text-red-600 text-2xl sm:text-3xl mb-3 sm:mb-4">
                  <SiUdemy />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Udemy</h3>
                <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">{t('certificates.nmap')}</p>
                <div className="text-xs text-gray-500">2023</div>
              </div>
              
              <div className="bg-background-dark p-4 sm:p-6 rounded-lg border border-red-600/20 shadow-lg hover:shadow-red-600/10 transition-all duration-300 hover:-translate-y-1">
                <div className="text-red-600 text-2xl sm:text-3xl mb-3 sm:mb-4">
                  <SiUdemy />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Udemy</h3>
                <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">{t('certificates.wireshark')}</p>
                <div className="text-xs text-gray-500">2023</div>
              </div>
              
              {/* Cisco Sertifikası */}
              <div className="bg-background-dark p-4 sm:p-6 rounded-lg border border-red-600/20 shadow-lg hover:shadow-red-600/10 transition-all duration-300 hover:-translate-y-1">
                <div className="text-red-600 text-2xl sm:text-3xl mb-3 sm:mb-4">
                  <SiCisco />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Cisco</h3>
                <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">{t('certificates.cisco')}</p>
                <div className="text-xs text-gray-500">2025</div>
              </div>
              
              {/* Google Sertifikası */}
              <div className="bg-background-dark p-4 sm:p-6 rounded-lg border border-red-600/20 shadow-lg hover:shadow-red-600/10 transition-all duration-300 hover:-translate-y-1">
                <div className="text-red-600 text-2xl sm:text-3xl mb-3 sm:mb-4">
                  <SiGoogle />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Google</h3>
                <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">{t('certificates.google')}</p>
                <div className="text-xs text-gray-500">2025</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}