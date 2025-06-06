
import { useEffect, useState } from "react";

interface BackgroundElement {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
}

export const InteractiveBackground = () => {
  const [elements, setElements] = useState<BackgroundElement[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Generate random floating elements
    const generateElements = () => {
      const newElements: BackgroundElement[] = [];
      for (let i = 0; i < 15; i++) {
        newElements.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 100 + 50,
          opacity: Math.random() * 0.1 + 0.05,
          speed: Math.random() * 0.5 + 0.2,
        });
      }
      setElements(newElements);
    };

    generateElements();
    window.addEventListener('resize', generateElements);

    return () => window.removeEventListener('resize', generateElements);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const animateElements = () => {
      setElements(prev => prev.map(element => ({
        ...element,
        y: element.y - element.speed,
        x: element.x + Math.sin(Date.now() * 0.001 + element.id) * 0.5,
        // Reset position when element goes off screen
        ...(element.y < -element.size && {
          y: window.innerHeight + element.size,
          x: Math.random() * window.innerWidth,
        })
      })));
    };

    const interval = setInterval(animateElements, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating geometric elements */}
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute rounded-full bg-gradient-to-br from-blue-400/20 to-purple-600/20 dark:from-blue-600/10 dark:to-purple-400/10 blur-xl"
          style={{
            left: element.x,
            top: element.y,
            width: element.size,
            height: element.size,
            opacity: element.opacity,
            transform: `translate(-50%, -50%)`,
            transition: 'opacity 0.3s ease',
          }}
        />
      ))}

      {/* Mouse follower gradient */}
      <div
        className="absolute w-96 h-96 bg-gradient-radial from-blue-500/5 via-purple-500/5 to-transparent dark:from-blue-400/10 dark:via-purple-400/10 dark:to-transparent rounded-full blur-3xl pointer-events-none"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.3s ease',
        }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>
    </div>
  );
};
