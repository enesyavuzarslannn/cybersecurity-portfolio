import { useEffect, useRef } from 'react';

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions to match window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Characters to display (just 0 and 1 for cybersecurity theme)
    const chars = "01";

    // Number of columns
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);

    // An array of drops - one per column
    const drops: number[] = [];

    // Initialize all drops to start at random position
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * canvas.height / fontSize);
    }

    // Set interval to animate
    const interval = setInterval(() => {
      // Semi-transparent black background to create fade effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set color and font
      ctx.fillStyle = "#ff0000"; // Red color for cybersecurity theme
      ctx.font = `${fontSize}px monospace`;

      // Loop through each drop
      for (let i = 0; i < drops.length; i++) {
        // Get a random character
        const text = chars[Math.floor(Math.random() * chars.length)];
        
        // Draw the character
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        // Move the drop down
        drops[i]++;
        
        // Reset drop if it goes off screen or randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
      }
    }, 50);

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Recalculate columns
      const columns = Math.floor(canvas.width / fontSize);
      
      // Reset drops array
      drops.length = 0;
      for (let i = 0; i < columns; i++) {
        drops[i] = Math.floor(Math.random() * canvas.height / fontSize);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
}