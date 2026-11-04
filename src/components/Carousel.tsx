'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import type { PointerEvent } from 'react';

type Slide = { src: string; alt: string };

const AUTOPLAY_MS = 4500;

/** Scroll-snap photo carousel: passes on its own, and can be dragged (touch or mouse) or driven by the dots. */
export function Carousel({ slides }: { slides: Slide[] }) {
  const track = useRef<HTMLDivElement>(null);
  const touchedAt = useRef(0);
  const drag = useRef<{ x: number; left: number; index: number } | null>(null);
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
    const onTouch = () => { touchedAt.current = Date.now(); };
    el.addEventListener('scroll', onScroll, { passive: true });
    el.addEventListener('touchstart', onTouch, { passive: true });
    return () => {
      el.removeEventListener('scroll', onScroll);
      el.removeEventListener('touchstart', onTouch);
    };
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => {
      if (!drag.current && Date.now() - touchedAt.current > AUTOPLAY_MS) goTo(index + 1);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [index, goTo]);

  // Touch already scrolls natively; the mouse needs this small drag handler.
  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    const el = track.current;
    if (!el || event.pointerType !== 'mouse' || event.button !== 0) return;
    drag.current = { x: event.clientX, left: el.scrollLeft, index };
    touchedAt.current = Date.now();
    el.style.scrollSnapType = 'none';
    el.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const el = track.current;
    if (!el || !drag.current) return;
    el.scrollLeft = drag.current.left - (event.clientX - drag.current.x);
  };

  const onPointerEnd = (event: PointerEvent<HTMLDivElement>) => {
    const el = track.current;
    if (!el || !drag.current) return;
    const moved = event.clientX - drag.current.x;
    const start = drag.current.index;
    drag.current = null;
    touchedAt.current = Date.now();
    el.style.scrollSnapType = '';
    goTo(Math.abs(moved) > el.clientWidth * 0.12 ? start + (moved < 0 ? 1 : -1) : start);
  };

  return <div className="carousel">
    <div className="carousel-track" ref={track} onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerEnd} onPointerCancel={onPointerEnd}>
      {slides.map((slide) => <figure key={slide.src}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={slide.src} alt={slide.alt} loading="lazy" draggable={false} />
      </figure>)}
    </div>
    <div className="carousel-dots">
      {slides.map((slide, i) => <button key={slide.src} type="button" aria-label={`Ir para a foto ${i + 1}`} aria-current={i === index} onClick={() => { touchedAt.current = Date.now(); goTo(i); }} />)}
    </div>
  </div>;
}
