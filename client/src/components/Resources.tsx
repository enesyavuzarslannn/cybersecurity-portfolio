import React from 'react';
import { FaBook, FaChalkboardTeacher, FaLaptopCode, FaVideo, FaGlobe } from 'react-icons/fa';
import { useLanguage } from '@/hooks/use-language';

interface Resource {
  id: number;
  title: string;
  description: string;
  link: string;
  category: 'book' | 'course' | 'platform' | 'video' | 'website';
}

export default function Resources() {
  const { t, language } = useLanguage();
  
  const resources: Resource[] = [
    {
      id: 1,
      title: 'TryHackMe',
      description: language === 'tr' 
        ? 'Siber güvenlik becerilerinizi geliştirmek için pratik laboratuvar ortamı.'
        : 'Hands-on cyber security training with practical labs.',
      link: 'https://tryhackme.com',
      category: 'platform'
    },
    {
      id: 2,
      title: 'HackTheBox',
      description: language === 'tr' 
        ? 'Penetrasyon testi becerileri geliştirmek için zorlu laboratuvarlar.'
        : 'Challenging labs for penetration testing skill development.',
      link: 'https://hackthebox.com',
      category: 'platform'
    },
    {
      id: 3,
      title: language === 'tr' ? 'Kali Linux Kursu' : 'Kali Linux Course',
      description: language === 'tr' 
        ? 'Kali Linux ve penetrasyon testi araçlarını öğrenin.'
        : 'Learn Kali Linux and penetration testing tools.',
      link: 'https://www.udemy.com/course/learn-kali-linux-fundamentals/',
      category: 'course'
    },
    {
      id: 4,
      title: 'OWASP',
      description: language === 'tr' 
        ? 'Web uygulama güvenliği hakkında temel bilgiler.'
        : 'Essential information about web application security.',
      link: 'https://owasp.org',
      category: 'website'
    }
  ];
  
  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'book':
        return <FaBook className="text-red-600" />;
      case 'course':
        return <FaChalkboardTeacher className="text-red-600" />;
      case 'platform':
        return <FaLaptopCode className="text-red-600" />;
      case 'video':
        return <FaVideo className="text-red-600" />;
      case 'website':
      default:
        return <FaGlobe className="text-red-600" />;
    }
  }
  
  return (
    <section id="resources" className="py-12 sm:py-16 px-4 sm:px-6 bg-bg-dark">
      <div className="container mx-auto">
        <div className="terminal-container p-4 sm:p-6 rounded-lg border border-border-light/30 bg-bg-darker shadow-lg">
          <div className="terminal-header flex items-center mb-4 sm:mb-6">
            <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-red-500 mr-1.5 sm:mr-2"></div>
            <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-yellow-500 mr-1.5 sm:mr-2"></div>
            <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-green-500 mr-1.5 sm:mr-2"></div>
            <div className="flex-grow">
              <p className="text-text-light/70 text-xs sm:text-sm text-center">
                {language === 'tr' ? '~/tavsiye-kaynaklar' : '~/recommended-resources'}
              </p>
            </div>
          </div>

          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-red-600 mb-3 sm:mb-4 flex items-center">
              <span className="text-text-light mr-2">$</span> 
              {t('resources.title')}
              <span className="animate-blink ml-2">_</span>
            </h2>
            <p className="text-sm sm:text-base text-text-light/80 mb-3 sm:mb-4">{t('resources.description')}</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {resources.map((resource) => (
              <div key={resource.id} className="p-3 sm:p-4 rounded-lg bg-bg-dark/90 border border-border-light/20 shadow-lg hover:border-red-600/30 transition-all duration-300 group">
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-red-600/50 bg-bg-darker shadow group-hover:border-red-600 transition-all duration-300 text-sm sm:text-base">
                    {getCategoryIcon(resource.category)}
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-red-600 group-hover:text-red-500 transition-colors duration-300">{resource.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-text-light/80 mb-2">{resource.description}</p>
                <a 
                  href={resource.link} 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-xs text-text-light/60 hover:text-red-600 transition-colors duration-300"
                >
                  {t('resources.visitLink')} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}