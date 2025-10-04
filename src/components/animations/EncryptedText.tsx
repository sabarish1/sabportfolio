import { useEffect, useState, useRef } from 'react';

interface EncryptedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const EncryptedText = ({ text, className = '', delay = 0 }: EncryptedTextProps) => {
  const [displayText, setDisplayText] = useState(text);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const characters = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`';
    let iteration = 0;
    const intervalDuration = 30;

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayText((prev) =>
          prev
            .split('')
            .map((char, index) => {
              if (index < iteration) {
                return text[index];
              }
              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join('')
        );

        iteration += 1 / 3;

        if (iteration >= text.length) {
          clearInterval(interval);
          setDisplayText(text);
        }
      }, intervalDuration);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isVisible, text, delay]);

  return (
    <div ref={ref} className={className}>
      {displayText}
    </div>
  );
};

export default EncryptedText;
