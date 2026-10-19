import Image from 'next/image';
import { Header } from '@/components/Header';
import { Carousel } from '@/components/Carousel';
import { Reveal } from '@/components/Reveal';
import { CheckIcon, socialIcons } from '@/components/Icons';
import { about, cta, footer, gallery, help, hero, social, trainings, WHATSAPP_URL } from '@/data/content';

export default function Home() {
  return <>
    <Header />
    <main id="inicio">
      <section className="hero">
        <div className="hero-inner">
          <Reveal effect="up">
            <p className="hero-kicker">{hero.kicker}</p>
            <h1 className="hero-title">{hero.title}</h1>
            <a className="btn" href={hero.href} target="_blank" rel="noopener noreferrer">{hero.button}</a>
          </Reveal>
        </div>
      </section>

      <section className="about" id="apresentacao">
        <div className="about-inner">
          <Reveal effect="right" className="about-photo">
            <Image src="/images/alle-recortada-2.webp" alt="Allê Ebrahim sorrindo, de braços cruzados" width={1122} height={1402} unoptimized />
          </Reveal>
          <div className="about-copy">
            <Reveal effect="up"><h2 className="title">{about.title} <strong>{about.name}</strong></h2></Reveal>
            <ul className="checklist">
              {about.items.map((item, i) => <li key={item}><Reveal effect="up" delay={i * 80}><CheckIcon /><span>{item}</span></Reveal></li>)}
            </ul>
            <Reveal effect="up" delay={300}><a className="btn" href={about.href} target="_blank" rel="noopener noreferrer">{about.button}</a></Reveal>
          </div>
        </div>
        <Reveal effect="zoom"><Carousel slides={gallery} /></Reveal>
      </section>

      <section className="help" id="ajuda">
        <Reveal effect="up"><h2 className="title center">{help.title} <strong>{help.highlight}</strong></h2></Reveal>
        <div className="cards">
          {help.cards.map((card, i) => <Reveal key={card.title} effect="up" delay={i * 120} className="card-wrap">
            <article className="card" id={'id' in card ? card.id : undefined}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className={card.image.includes('recortada') ? 'cutout' : undefined} src={card.image} alt="" loading="lazy" />
              <div className="card-body">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <a className="btn small" href={card.href} target="_blank" rel="noopener noreferrer">{card.button}</a>
              </div>
            </article>
          </Reveal>)}
        </div>
      </section>

      <section className="cases" id="treinamentos">
        <Reveal effect="up"><h2 className="title center">{trainings.title} <strong>{trainings.highlight}</strong></h2></Reveal>
        <div className="cards">
          {trainings.items.map((item, i) => <Reveal key={item.name} effect="zoom" delay={i * 120} className="card-wrap">
            <article className="case">
              <span className="case-date">{item.date}</span>
              <h3>{item.name}</h3>
              <p>{item.text}</p>
              <a className="btn small" href={item.href} target="_blank" rel="noopener noreferrer">{item.button}</a>
            </article>
          </Reveal>)}
        </div>
        <Reveal effect="up"><a className="btn outline" href={trainings.moreHref} target="_blank" rel="noopener noreferrer">{trainings.more}</a></Reveal>
      </section>

      <section className="cta" id="consultoria">
        <div className="cta-inner">
          <Reveal effect="up">
            <p className="cta-kicker">{cta.kicker}</p>
            <h2 className="cta-title">{cta.title}</h2>
            <a className="btn" href={cta.href} target="_blank" rel="noopener noreferrer">{cta.button}</a>
          </Reveal>
          <Reveal effect="up" delay={250} className="cta-photo">
            <Image src="/images/alle-sentada.webp" alt="Allê Ebrahim sentada, sorrindo" width={1254} height={1254} unoptimized />
          </Reveal>
        </div>
      </section>

      <section className="social" id="contato">
        <Reveal effect="up"><h2 className="title center">{social.title} <strong>{social.highlight}</strong></h2></Reveal>
        <Reveal effect="up" delay={120}>
          <ul className="social-list">
            {social.links.map((link) => {
              const Icon = socialIcons[link.name as keyof typeof socialIcons];
              return <li key={link.name}><a href={link.href} target="_blank" rel="noopener noreferrer"><Icon /><span>{link.name}</span></a></li>;
            })}
          </ul>
        </Reveal>
      </section>
    </main>

    <footer className="site-footer">
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
    </footer>
  </>;
}
