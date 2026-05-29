'use client';

import type { ReactNode } from 'react';
import { useInView } from '@/lib/useInView';

type Props = {
  className?: string;
  children: ReactNode;
};

export default function RevealOnView({ className = '', children }: Props) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className={`${className}${inView ? ' is-inview' : ''}`}>
      {children}
    </div>
  );
}
