import { useEffect } from 'react';

export default function SmoothScroll() {
  useEffect(() => {
    // Tüm anchor linklerini seç
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    // Her anchor için click fonksiyonu
    const handleClick = function(this: HTMLAnchorElement, e: Event) {
      e.preventDefault();
      
      // Link hedefini al
      const targetId = this.getAttribute('href');
      
      if (!targetId || targetId === '#') {
        // Eğer hedef yoksa veya sadece # ise sayfanın en üstüne scroll
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        return;
      }
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Hedef elementin pozisyonunu al
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        
        // Offset ekle (header yüksekliği kadar)
        const offset = 80; // Header yüksekliği + ekstra boşluk
        const offsetPosition = targetPosition - offset;
        
        // Smooth scroll kullanarak hedefe git
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    };
    
    // Her birine event listener ekle
    anchorLinks.forEach(anchor => {
      anchor.addEventListener('click', handleClick as EventListener);
    });
    
    // Cleanup - Event listener'ları kaldır
    return () => {
      anchorLinks.forEach(anchor => {
        anchor.removeEventListener('click', handleClick as EventListener);
      });
    };
  }, []);
  
  return null; // Bu komponent UI render etmiyor
}