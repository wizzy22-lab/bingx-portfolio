'use client';

import { useEffect, useState } from 'react';
import { useInView } from '@/lib/useInView';

type Props = {
  value: string;
  delay?: number;
  duration?: number;
  className?: string;
};

export default function ScrambleNumber({
  value,
  delay = 0,
  duration = 1200,
  className,
}: Props) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!inView) {
      setDisplay(value);
      return;
    }

    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setDisplay(value);
      return;
    }

    const hasDecimal = value.includes('.');
    const intPart = hasDecimal ? value.split('.')[0] : value;
    const intLen = intPart.length;
    const intMax = Math.pow(10, intLen);

    let frameId = 0;
    let startTime: number | null = null;
    let lastUpdate = 0;

    const tick = (ts: number) => {
      if (startTime === null) startTime = ts;
      const elapsed = ts - startTime;
      if (elapsed < delay) {
        frameId = requestAnimationFrame(tick);
        return;
      }
      const scrambleElapsed = elapsed - delay;
      if (scrambleElapsed >= duration) {
        setDisplay(value);
        return;
      }
      if (ts - lastUpdate > 60) {
        const rndInt = Math.floor(Math.random() * intMax)
          .toString()
          .padStart(intLen, '0');
        const rndDec = hasDecimal ? '.' + Math.floor(Math.random() * 10) : '';
        setDisplay(rndInt + rndDec);
        lastUpdate = ts;
      }
      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [inView, value, delay, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
