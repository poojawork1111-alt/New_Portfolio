import React, { useState, useEffect, useRef } from 'react';

/**
 * AnimatedCounter component
 * Parses values like "8.98", "1+ Yrs", "100%", "2+"
 * and animates from 0 to the target number when in viewport.
 */
const AnimatedCounter = ({ value, duration = 1600, className = '' }) => {
  const [displayValue, setDisplayValue] = useState('0');
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          startAnimation();
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, [hasAnimated, value]);

  const startAnimation = () => {
    // Extract numerical part and suffix/prefix
    const strVal = String(value).trim();
    const match = strVal.match(/^([\d.]+)(.*)$/);

    if (!match) {
      setDisplayValue(strVal);
      return;
    }

    const targetNum = parseFloat(match[1]);
    const suffix = match[2] || '';
    const isFloat = match[1].includes('.');
    const decimalPlaces = isFloat ? (match[1].split('.')[1] || '').length : 0;

    const startTime = performance.now();

    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = targetNum * easeProgress;

      if (isFloat) {
        setDisplayValue(currentVal.toFixed(decimalPlaces) + suffix);
      } else {
        setDisplayValue(Math.floor(currentVal) + suffix);
      }

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setDisplayValue(strVal);
      }
    };

    requestAnimationFrame(updateCounter);
  };

  return (
    <span ref={elementRef} className={className}>
      {hasAnimated ? displayValue : '0'}
    </span>
  );
};

export default AnimatedCounter;
