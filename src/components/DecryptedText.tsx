'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  characters?: string;
  className?: string;
  parentClassName?: string;
  encryptedClassName?: string;
  animateOn?: 'hover' | 'view' | 'load';
  revealDirection?: 'left' | 'right' | 'center';
}

export default function DecryptedText({
  text,
  speed = 50,
  maxIterations = 10,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;:,.<>?',
  className = '',
  parentClassName = '',
  encryptedClassName = '',
  animateOn = 'hover',
  revealDirection = 'left',
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const elementRef = useRef<HTMLSpanElement>(null);
  const iterationRef = useRef(0);

  const scrambleText = useCallback(() => {
    if (isAnimating) return;

    setIsAnimating(true);
    iterationRef.current = 0;

    const animate = () => {
      let newText = '';

      for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
          newText += ' ';
          continue;
        }

        const shouldReveal = (() => {
          switch (revealDirection) {
            case 'left':
              return i < iterationRef.current;
            case 'right':
              return i >= text.length - iterationRef.current;
            case 'center':
              const center = Math.floor(text.length / 2);
              const distance = Math.abs(i - center);
              return distance <= iterationRef.current;
            default:
              return i < iterationRef.current;
          }
        })();

        if (shouldReveal) {
          newText += text[i];
        } else {
          newText += characters[Math.floor(Math.random() * characters.length)];
        }
      }

      setDisplayText(newText);
      iterationRef.current++;

      if (iterationRef.current <= Math.max(text.length, maxIterations)) {
        intervalRef.current = setTimeout(animate, speed);
      } else {
        setDisplayText(text);
        setIsAnimating(false);
        if (animateOn === 'view') {
          setHasAnimated(true);
        }
      }
    };

    animate();
  }, [
    isAnimating,
    text,
    revealDirection,
    characters,
    maxIterations,
    speed,
    animateOn,
  ]);

  const stopAnimation = () => {
    if (intervalRef.current) {
      clearTimeout(intervalRef.current);
      intervalRef.current = null;
    }
    setDisplayText(text);
    setIsAnimating(false);
  };

  useEffect(() => {
    if (animateOn === 'load') {
      scrambleText();
    }

    if (animateOn === 'view') {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimated) {
              scrambleText();
            }
          });
        },
        { threshold: 0.1 }
      );

      if (elementRef.current) {
        observer.observe(elementRef.current);
      }

      return () => observer.disconnect();
    }

    return () => {
      if (intervalRef.current) {
        clearTimeout(intervalRef.current);
      }
    };
  }, [animateOn, hasAnimated, scrambleText]);

  const handlers =
    animateOn === 'hover'
      ? {
          onMouseEnter: scrambleText,
          onMouseLeave: stopAnimation,
        }
      : {};

  return (
    <span
      ref={elementRef}
      className={`${parentClassName} ${isAnimating ? encryptedClassName : className}`}
      {...handlers}
    >
      {displayText}
    </span>
  );
}
