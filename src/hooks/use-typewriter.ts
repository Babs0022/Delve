'use client';

import { useState, useEffect } from 'react';

export function useTypewriter(text: string, speed: number = 20) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    setDisplayedText(''); // Immediately clear for new text
    if (text) {
      let i = 0;
      const intervalId = setInterval(() => {
        if (i < text.length) {
          setDisplayedText(prev => prev + text[i]);
          i++;
        } else {
          clearInterval(intervalId);
        }
      }, speed);

      return () => clearInterval(intervalId);
    }
  }, [text, speed]);

  return displayedText;
}
