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
    <section id="skills" className="py-12 sm:py-16 px-4 sm:px-6 bg-bg-dark">
      <div className="container mx-auto">
        <div className="terminal-container p-4 sm:p-6 rounded-lg border border-border-light/30 bg-bg-darker shadow-lg">
          <div className="terminal-header flex items-center mb-4 sm:mb-6">
            <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-red-500 mr-1.5 sm:mr-2"></div>
            <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-yellow-500 mr-1.5 sm:mr-2"></div>
            <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-green-500 mr-1.5 sm:mr-2"></div>
            <div className="flex-grow">
              <p className="text-text-light/70 text-xs sm:text-sm text-center">
                {language === 'tr' ? '~/beceriler' : '~/skills'}
              </p>
            </div>
          </div>

          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-red-600 mb-3 sm:mb-4 flex items-center">
              <span className="text-text-light mr-2">$</span> 
              {t('skills.title')}
              <span className="animate-blink ml-2">_</span>
            </h2>
            <p className="text-sm sm:text-base text-text-light/80 mb-6 sm:mb-8">{t('skills.description')}</p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {skills.map((skill, index) => (
              <div key={index} className="mb-4 sm:mb-6">
                <div className="flex justify-between mb-1 group">
                  <span className="text-sm sm:text-base text-text-light/90 font-mono group-hover:text-white transition-colors duration-300">{skill.name}</span>
                  <span className="text-sm sm:text-base text-text-light/70 font-mono group-hover:text-red-500 transition-colors duration-300">{skill.level}%</span>
                </div>
                <div className="h-3 sm:h-4 w-full bg-bg-light/10 rounded-full overflow-hidden group">
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