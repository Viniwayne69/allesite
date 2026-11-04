'use client';

import { useEffect, useRef } from 'react';

/** Dotted lines that branch from the title to the three cards; they draw themselves when scrolled into view. */
export function TreeLines() {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.dataset.drawn = 'true';
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.dataset.drawn = 'true';
        io.disconnect();
      },
      { threshold: 0.25 },
    );
    // Observes the wrapper: the lines themselves are fully clipped until drawn, which can hide them from the observer.
    io.observe(el.parentElement ?? el);
    return () => io.disconnect();
  }, []);

  return <svg ref={ref} className="tp-tree" viewBox="0 0 1000 80" preserveAspectRatio="none" fill="none" aria-hidden="true" data-drawn="false">
    <path d="M500 0V80" stroke="currentColor" strokeWidth="2" strokeDasharray="2 8" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    <path d="M500 18C500 52 160 44 160 80" stroke="currentColor" strokeWidth="2" strokeDasharray="2 8" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    <path d="M500 18C500 52 840 44 840 80" stroke="currentColor" strokeWidth="2" strokeDasharray="2 8" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
  </svg>;
}
