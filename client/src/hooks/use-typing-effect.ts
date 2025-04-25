import { useState, useEffect } from 'react';

export function useTypingEffect(text: string, speed = 50, delay = 0) {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    setDisplayedText('');
    
    const delayTimer = setTimeout(() => {
      let i = 0;
      const timer = setInterval(() => {
        if (i < text.length) {
          setDisplayedText(prev => prev + text.charAt(i));
          i++;
        } else {
          clearInterval(timer);
        }
      }, Math.random() * speed + 30);
      
      return () => clearInterval(timer);
    }, delay);
    
    return () => clearTimeout(delayTimer);
  }, [text, speed, delay]);
  
  return displayedText;
}
