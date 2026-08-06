'use client';

import { useEffect } from 'react';
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

  /* A title in the left rail has a narrow column to work with. Once it
     breaks to three lines it stops reading as a heading, so measure the
     rendered line count and step the size down when it does.

     The flag rides on data-tight rather than className: className is React's
     (it carries is-revealed), and a re-render would wipe anything we added
     to it. */
  useEffect(() => {
    const el = ref.current;
    const inner = el?.querySelector<HTMLElement>('.reveal-h__inner');
    if (!el || !inner || !el.closest('.sec-split__aside')) return;

    const measure = () => {
      // Measure untightened, so a wider viewport can lift the step back off.
      el.removeAttribute('data-tight');
      const lineHeight = parseFloat(getComputedStyle(inner).lineHeight);
      if (!lineHeight) return;
      const lines = inner.getBoundingClientRect().height / lineHeight;
      if (lines > 2.5) el.setAttribute('data-tight', 'true');
    };

    measure();
    // A ResizeObserver on the heading would loop: the step changes its own
    // height, which fires the observer again. Width only changes on resize,
    // and the web fonts land after first paint.
    window.addEventListener('resize', measure);
    document.fonts?.ready.then(measure);
    return () => window.removeEventListener('resize', measure);
  }, [ref]);

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
