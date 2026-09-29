'use client';

import { animate, useInView, useMotionValue, useReducedMotion, type AnimationPlaybackControls } from 'motion/react';
import { useCallback, useEffect, useRef } from 'react';

interface CountUpProps {
  to: number;
  from?: number;
  direction?: 'up' | 'down';
  delay?: number;
  duration?: number;
  className?: string;
  startWhen?: boolean;
  separator?: string;
  onStart?: () => void;
  onEnd?: () => void;
}

export default function CountUp({
  to,
  from = 0,
  direction = 'up',
  delay = 0,
  duration = 2,
  className = '',
  startWhen = true,
  separator = '',
  onStart,
  onEnd
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  // With reduced motion the server-rendered final value simply stays put.
  const reduceMotion = useReducedMotion();
  const motionValue = useMotionValue(direction === 'down' ? to : from);

  const isInView = useInView(ref, { once: true, margin: '0px' });

  const getDecimalPlaces = (num: number): number => {
    const str = num.toString();
    if (str.includes('.')) {
      const decimals = str.split('.')[1];
      if (parseInt(decimals) !== 0) {
        return decimals.length;
      }
    }
    return 0;
  };

  const maxDecimals = Math.max(getDecimalPlaces(from), getDecimalPlaces(to));

  const formatValue = useCallback(
    (latest: number) => {
      const hasDecimals = maxDecimals > 0;

      const options: Intl.NumberFormatOptions = {
        useGrouping: !!separator,
        minimumFractionDigits: hasDecimals ? maxDecimals : 0,
        maximumFractionDigits: hasDecimals ? maxDecimals : 0
      };

      const formattedNumber = Intl.NumberFormat('es-AR', options).format(latest);

      return separator ? formattedNumber.replace(/,/g, separator) : formattedNumber;
    },
    [maxDecimals, separator]
  );

  useEffect(() => {
    if (reduceMotion) return;
    if (ref.current) {
      ref.current.textContent = formatValue(direction === 'down' ? to : from);
    }
  }, [from, to, direction, formatValue, reduceMotion]);

  useEffect(() => {
    if (isInView && startWhen && !reduceMotion) {
      if (typeof onStart === 'function') {
        onStart();
      }

      // A timed ease-out instead of the original spring, whose long tail left
      // the numbers creeping (125, 23 h) for seconds before landing.
      let controls: AnimationPlaybackControls | undefined;
      const timeoutId = setTimeout(() => {
        controls = animate(motionValue, direction === 'down' ? from : to, {
          duration,
          ease: [0.22, 1, 0.36, 1]
        });
      }, delay * 1000);

      const durationTimeoutId = setTimeout(
        () => {
          if (typeof onEnd === 'function') {
            onEnd();
          }
        },
        delay * 1000 + duration * 1000
      );

      return () => {
        clearTimeout(timeoutId);
        clearTimeout(durationTimeoutId);
        controls?.stop();
      };
    }
  }, [isInView, startWhen, reduceMotion, motionValue, direction, from, to, delay, onStart, onEnd, duration]);

  useEffect(() => {
    const unsubscribe = motionValue.on('change', (latest: number) => {
      if (ref.current) {
        ref.current.textContent = formatValue(latest);
      }
    });

    return () => unsubscribe();
  }, [motionValue, formatValue]);

  // Server-render the final value so the number is there without JS.
  return (
    <span className={className} ref={ref}>
      {formatValue(direction === 'down' ? from : to)}
    </span>
  );
}
