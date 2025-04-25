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