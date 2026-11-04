import { footer, WHATSAPP_URL } from '@/data/content';

export function Footer() {
  return <footer className="site-footer">
    <div className="site-footer-inner">
      <span className="site-logo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="wordmark" src="/brand/logo-alle-reduzida-claro.svg" alt="Allê Ebrahim" width={120} height={64} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="pinwheel" src="/brand/catavento-mostarda.svg" alt="" aria-hidden="true" width={44} height={44} />
      </span>
      <p>{footer.company}<br />{footer.tagline}</p>
      <nav aria-label="Rodapé"><ul>{footer.links.map((link) => <li key={link.label}><a href={link.href}>{link.label}</a></li>)}</ul></nav>
      <a className="footer-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Fale no WhatsApp</a>
    </div>
  </footer>;
}
