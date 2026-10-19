'use client';

import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react';

type Effect = 'up' | 'right' | 'left' | 'zoom' | 'fade';

/** Fades its children in when they scroll into view (hidden state lives in globals.css). */
export function Reveal({ children, effect = 'up', delay = 0, className = '' }: { children: ReactNode; effect?: Effect; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('in');
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.classList.add('in');
        io.disconnect();
      },
      { threshold: 0.12, rootMargin: '0px 0px -4% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return <div ref={ref} className={`reveal ${className}`} data-reveal={effect} style={{ '--delay': `${delay}ms` } as CSSProperties}>{children}</div>;
}
