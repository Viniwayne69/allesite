'use client';

import Link from 'next/link';
import { useState } from 'react';
import { INSTAGRAM_URL, menu, WHATSAPP_URL } from '@/data/content';
import { InstagramIcon, WhatsAppIcon } from '@/components/Icons';

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return <header className="site-header">
    <div className="site-header-inner">
      <Link className="site-logo" href="/" aria-label="Allê Ebrahim — início" onClick={close}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="wordmark" src="/brand/logo-alle-reduzida-claro.svg" alt="Allê Ebrahim" width={120} height={64} fetchPriority="high" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="pinwheel" src="/brand/catavento-mostarda.svg" alt="" aria-hidden="true" width={44} height={44} />
      </Link>
      <nav className={`site-nav${open ? ' open' : ''}`} aria-label="Principal">
        <ul>{menu.map((item) => <li key={item.label}><a href={item.href} onClick={close}>{item.label}</a></li>)}</ul>
      </nav>
      <div className="site-actions">
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><WhatsAppIcon /></a>
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon /></a>
        <button type="button" className="site-burger" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          <span /><span /><span />
        </button>
      </div>
    </div>
  </header>;
}
