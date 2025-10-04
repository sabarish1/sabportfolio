import { useEffect, useState } from 'react';

interface ShuffleTextProps {
  text: string;
  className?: string;
}

const ShuffleText = ({ text, className = '' }: ShuffleTextProps) => {
  const [displayText, setDisplayText] = useState(text);
  const [isShuffling, setIsShuffling] = useState(false);

  const shuffle = () => {
    if (isShuffling) return;
    
    setIsShuffling(true);
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let iteration = 0;
    const intervalDuration = 50;

    const interval = setInterval(() => {
      setDisplayText((prev) =>
        prev
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) {
              return text[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join('')
      );

      iteration += 1 / 2;

      if (iteration >= text.length) {
        clearInterval(interval);
        setDisplayText(text);
        setIsShuffling(false);
      }
    }, intervalDuration);
  };

  useEffect(() => {
    shuffle();
  }, []);

  return (
    <span 
      className={`${className} cursor-pointer`}
      onMouseEnter={shuffle}
    >
      {displayText}
    </span>
  );
};

export default ShuffleText;
