import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Carousel } from '@/components/Carousel';
import { Reveal } from '@/components/Reveal';
import { CheckIcon, socialIcons } from '@/components/Icons';
import { Testimonials } from '@/components/Testimonials';
import { about, cta, gallery, hero, social, trainings } from '@/data/content';

export default function Home() {
  return <>
    <Header />
    <main id="inicio">
      <section className="hero">
        <div className="hero-inner">
          <Reveal effect="up">
            <p className="hero-kicker">{hero.kicker}</p>
            <h1 className="hero-title">{hero.title}</h1>
            <a className="btn" href={hero.href}>{hero.button}</a>
          </Reveal>
        </div>
      </section>

      <section className="about" id="apresentacao">
        <div className="about-inner">
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

      <section className="cases" id="treinamentos">
        <Reveal effect="up"><h2 className="title center">{trainings.title} <strong>{trainings.highlight}</strong></h2></Reveal>
        <div className="cards">
          {trainings.items.map((item, i) => <Reveal key={item.name} effect="zoom" delay={i * 120} className="card-wrap">
            <article className={item.image ? 'case photo' : 'case'} style={item.image ? { '--case-photo': `url('${item.image}')`, '--case-pos': item.imagePos } as React.CSSProperties : undefined}>
              <span className="case-date">{item.date}</span>
              <h3>{item.name}</h3>
              <p>{item.text}</p>
              {item.href.startsWith('/')
                ? <a className="btn small" href={item.href}>{item.button}</a>
                : <a className="btn small" href={item.href} target="_blank" rel="noopener noreferrer">{item.button}</a>}
            </article>
          </Reveal>)}
        </div>
        <Reveal effect="up"><a className="btn outline" href={trainings.moreHref} target="_blank" rel="noopener noreferrer">{trainings.more}</a></Reveal>
      </section>

      <Testimonials />

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

    <Footer />
  </>;
}
