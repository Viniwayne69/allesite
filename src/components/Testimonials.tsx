'use client';

import { useState } from 'react';
import { Reveal } from '@/components/Reveal';
import { testimonials } from '@/data/content';

const LONG_TEXT = 100;

function QuoteIcon() {
  return <svg className="quote-mark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
    <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
  </svg>;
}

function Card({ title, text, image }: { title: string; text: string; image: string }) {
  const [open, setOpen] = useState(false);
  const long = text.length > LONG_TEXT;

  return <figure className="quote">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img className="quote-bg" src={image} alt="" aria-hidden="true" loading="lazy" />
    <QuoteIcon />
    <p className="quote-title">{title}</p>
    <blockquote className={long && !open ? 'clamped' : undefined}>{text}</blockquote>
    {long && <button type="button" className="quote-more" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? testimonials.less : testimonials.more}</button>}
    <figcaption><span className="quote-line" aria-hidden="true" />{testimonials.author}</figcaption>
  </figure>;
}

export function Testimonials() {
  return <section className="social testimonials" id="depoimentos">
    <Reveal effect="up"><h2 className="title center">{testimonials.title} <strong>{testimonials.highlight}</strong></h2></Reveal>
    <div className="quotes">
      {testimonials.items.map((item, i) => <Reveal key={item.title} effect="up" delay={(i % 3) * 100} className="quote-wrap">
        <Card title={item.title} text={item.text} image={item.image} />
      </Reveal>)}
    </div>
  </section>;
}
