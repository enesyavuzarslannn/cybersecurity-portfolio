import React from 'react';
import { useLanguage } from '@/hooks/use-language';
import { FaGraduationCap, FaUniversity } from 'react-icons/fa';

interface EducationItem {
  id: number;
  date: string;
  title: string;
  institution: string;
  description: string;
}

export default function Education() {
  const { t, language } = useLanguage();
  
  const educationItems: EducationItem[] = [
    {
      id: 1,
      date: language === 'tr' ? '2022 - Günümüz' : '2022 - Present',
      title: language === 'tr' ? 'Bilgisayar Programcılığı' : 'Computer Programming',
      institution: language === 'tr' ? 'Atatürk Üniversitesi' : 'Atatürk University',
      description: language === 'tr' 
        ? 'Bilgisayar programlama, veri tabanı yönetimi ve web geliştirme üzerine kapsamlı eğitim.' 
        : 'Comprehensive education in computer programming, database management, and web development.'
    },
    {
      id: 2,
      date: '2022',
      title: language === 'tr' ? 'Üniversite Sınavı' : 'University Entrance Exam',
      institution: language === 'tr' ? 'YKS' : 'YKS (Turkish Higher Education Entrance Exam)',
      description: language === 'tr' 
        ? 'Üniversite sınavında başarılı oldum fakat daha iyi bir sonuç için mezuna bıraktım.' 
        : 'Successfully passed the university entrance exam but chose to retake it for a better score.'
    },
    {
      id: 3,
      date: '2021',
      title: language === 'tr' ? 'Lise Diploması' : 'High School Diploma',
      institution: language === 'tr' ? 'Açık Öğretim Lisesi' : 'Open Education High School',
      description: language === 'tr' 
        ? 'Açık öğretim lisesinden başarıyla mezun oldum.' 
        : 'Successfully graduated from open education high school.'
    }
  ];

  return (
    <section id="education" className="py-12 sm:py-16 px-4 sm:px-6 bg-bg-dark">
      <div className="container mx-auto">
        <div className="terminal-container p-4 sm:p-6 rounded-lg border border-border-light/30 bg-bg-darker shadow-lg">
          <div className="terminal-header flex items-center mb-4 sm:mb-6">
            <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-red-500 mr-1.5 sm:mr-2"></div>
            <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-yellow-500 mr-1.5 sm:mr-2"></div>
            <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-green-500 mr-1.5 sm:mr-2"></div>
            <div className="flex-grow">
              <p className="text-text-light/70 text-xs sm:text-sm text-center">
                {language === 'tr' ? '~/egitim' : '~/education'}
              </p>
            </div>
          </div>

          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-red-600 mb-3 sm:mb-4 flex items-center">
              <span className="text-text-light mr-2">$</span> 
              {t('education.title')}
              <span className="animate-blink ml-2">_</span>
            </h2>
            <p className="text-sm sm:text-base text-text-light/80 mb-6 sm:mb-8">{t('education.description')}</p>
          </div>

          <div className="relative space-y-6 sm:space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-red-600 before:to-transparent">
            {educationItems.sort((a, b) => parseInt(b.date.split(' ')[0]) - parseInt(a.date.split(' ')[0])).map((item, index) => (
              <div key={item.id} className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-red-600 bg-bg-darker shadow z-10 text-red-600 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-sm sm:text-base">
                  {index === 0 ? <FaUniversity /> : <FaGraduationCap />}
                </div>
                
                <div className="w-[calc(100%-2.5rem)] sm:w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] p-3 sm:p-4 rounded-lg bg-bg-dark/90 border border-border-light/20 shadow-lg hover:shadow-red-600/5 transition-shadow duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                    <div className="font-bold text-red-600 text-sm sm:text-base break-words">{item.title}</div>
                    <time className="text-xs font-semibold text-text-light/80 whitespace-nowrap">{item.date}</time>
                  </div>
                  <div className="text-xs sm:text-sm text-text-light/60 mb-1 sm:mb-2 italic">{item.institution}</div>
                  <div className="text-xs sm:text-sm text-text-light/80">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}