'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

type Slide = { src: string; alt: string };

/** Scroll-snap photo carousel with arrows, dots and a gentle autoplay. */
export function Carousel({ slides }: { slides: Slide[] }) {
  const track = useRef<HTMLDivElement>(null);
  const paused = useRef(false);
  const [index, setIndex] = useState(0);

  const goTo = useCallback((next: number) => {
    const el = track.current;
    if (!el) return;
    const target = (next + slides.length) % slides.length;
    el.scrollTo({ left: target * el.clientWidth, behavior: 'smooth' });
  }, [slides.length]);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const onScroll = () => setIndex(Math.round(el.scrollLeft / el.clientWidth));
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => {
      if (!paused.current) goTo(index + 1);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [index, goTo]);

  return <div className="carousel" onMouseEnter={() => { paused.current = true; }} onMouseLeave={() => { paused.current = false; }}>
    <div className="carousel-track" ref={track}>
      {slides.map((slide) => <figure key={slide.src}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={slide.src} alt={slide.alt} loading="lazy" />
      </figure>)}
    </div>
    <button type="button" className="carousel-arrow prev" aria-label="Foto anterior" onClick={() => goTo(index - 1)}>‹</button>
    <button type="button" className="carousel-arrow next" aria-label="Próxima foto" onClick={() => goTo(index + 1)}>›</button>
    <div className="carousel-dots">
      {slides.map((slide, i) => <button key={slide.src} type="button" aria-label={`Ir para a foto ${i + 1}`} aria-current={i === index} onClick={() => goTo(i)} />)}
    </div>
  </div>;
}
