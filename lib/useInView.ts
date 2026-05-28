'use client';

import { useEffect, useRef, useState } from 'react';

export function useInView<T extends Element = HTMLElement>(
  options?: IntersectionObserverInit,
) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.2, ...options },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, inView } as const;
}
