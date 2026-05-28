'use client';

import type { CSSProperties, ReactNode } from 'react';
import { useInView } from '@/lib/useInView';

type Props = {
  level?: 'h1' | 'h2' | 'h3';
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

export default function RevealHeading({
  level = 'h2',
  className = '',
  style,
  children,
}: Props) {
  const { ref, inView } = useInView<HTMLHeadingElement>();
  const Tag = level;

  return (
    <Tag
      ref={ref}
      className={`reveal-h ${className}${inView ? ' is-revealed' : ''}`.trim()}
      style={style}
    >
      <span className="reveal-h__mask">
        <span className="reveal-h__inner">{children}</span>
      </span>
    </Tag>
  );
}
