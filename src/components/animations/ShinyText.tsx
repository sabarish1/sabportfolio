import { useEffect, useRef, useState } from 'react';

interface ShinyTextProps {
  text: string;
  className?: string;
}

const ShinyText = ({ text, className = '' }: ShinyTextProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${className} relative inline-block`}>
      <span className={`relative inline-block ${isVisible ? 'animate-shiny' : ''}`}>
        {text}
      </span>
    </div>
  );
};

export default ShinyText;
