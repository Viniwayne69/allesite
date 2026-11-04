import type { CSSProperties } from 'react';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Reveal } from '@/components/Reveal';
import { TreeLines } from '@/components/TreeLines';
import { EnrollForm } from '@/components/EnrollForm';
import { CheckIcon } from '@/components/Icons';
import { INSTAGRAM_URL } from '@/data/content';
import { PLANILHA_INSCRICOES_URL } from '@/data/treinamentos';
import type { Item, Training } from '@/data/treinamentos';

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;

// Cartões "Ontem, Hoje e Amanhã": cor e ícone por posição (relógio voltando, alvo, calendário).
const wayTones = ['cream', 'mustard', 'wine'] as const;
const wayIcons = [
  <svg key="ontem" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12a9 9 0 1 0 3-6.7L3 8M3 3v5h5M12 7v5l4 2" /></svg>,
  <svg key="hoje" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></svg>,
  <svg key="amanha" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>,
];

function ListItem({ item }: { item: Item }) {
  return <li>
    <CheckIcon />
    <span>{typeof item === 'string' ? item : <><strong>{item.lead}:</strong> {item.text}</>}</span>
  </li>;
}

/** O formulário só entra na página quando o endereço da planilha está configurado. */
const hasEnrollForm = (t: Training) => !!t.cta.form && !!PLANILHA_INSCRICOES_URL;

/** Botão de inscrição: rola até o formulário da página quando há um, senão leva ao link de inscrição. */
function CtaButton({ training: t, label }: { training: Training; label: string }) {
  if (hasEnrollForm(t)) return <a className="btn" href="#inscricao">{label}</a>;
  return <a className="btn" href={t.cta.href} {...ext}>{label}</a>;
}

function Price({ prices }: { prices: Training['investment']['prices'] }) {
  return <div className="tp-prices">
    {prices.map((price, i) => <div key={price.value} className="tp-price-row">
      {i > 0 && <span className="tp-or">ou</span>}
      {price.old && <p className="tp-price-old">De <s>{price.old}</s> por</p>}
      <p className="tp-price">{price.value} <small>{price.note}</small></p>
    </div>)}
  </div>;
}

export function TrainingPage({ training: t }: { training: Training }) {
  const [bonusLead, ...bonusRest] = (t.investment.bonus ?? '').split(': ');

  return <>
    <Header />
    <main>
      <section className="tp-hero" style={{ '--hero-photo': `url('${t.heroImage.src}')`, '--hero-pos': t.heroImage.position } as CSSProperties}>
        <div className="tp-hero-inner">
          <Reveal effect="up">
            <ul className="tp-chips">{t.chips.map((chip) => <li key={chip}>{chip}</li>)}</ul>
            <h1 className="tp-h1"><span className="tp-h1-lead">{t.title[0]}</span> <span className="tp-h1-tail">{t.title[1]}</span></h1>
            <p className="tp-sub">{t.subtitle}</p>
            <CtaButton training={t} label={t.cta.label} />
          </Reveal>
        </div>
      </section>

      <section className="tp-audience">
        <div className="tp-wrap">
          <div className="tp-split">
            <Reveal effect="up"><h2 className="tp-title">Para quem é</h2></Reveal>
            <Reveal effect="up" delay={120}><p className="tp-intro">{t.audience.intro}</p></Reveal>
          </div>
          <Reveal effect="up" delay={160}>
            {t.audience.listLead && <h3 className="tp-listlead">{t.audience.listLead}</h3>}
            <ul className="tp-list tp-audience-list">{t.audience.items.map((item) => <ListItem key={item} item={item} />)}</ul>
          </Reveal>
        </div>
      </section>

      <section className="tp-why">
        <div className="tp-wrap tp-split">
          <Reveal effect="up"><h2 className="tp-title">{t.why.title}</h2></Reveal>
          <Reveal effect="up" delay={120}>
            {t.why.paragraphs.map((text, i) => <p key={text} className={i === 0 ? 'tp-text first' : 'tp-text'}>{text}</p>)}
            {t.why.highlight && <p className="tp-callout">{t.why.highlight}</p>}
          </Reveal>
        </div>
      </section>

      {t.topics && <section className="tp-topics">
        <div className="tp-wrap">
          <Reveal effect="up"><h2 className="tp-title">{t.topics.title}</h2></Reveal>
          <div className="tp-cards">
            {t.topics.items.map((item, i) => <Reveal key={item.lead} effect="up" delay={(i % 3) * 100} className="tp-card-wrap">
              <article className="tp-card">
                <h3>{item.lead}</h3>
                <p>{item.text}</p>
              </article>
            </Reveal>)}
          </div>
        </div>
      </section>}

      {t.journey && <section className="tp-topics tp-way">
        <div className="tp-wrap">
          <Reveal effect="up"><h2 className="tp-title">{t.journey.title}</h2></Reveal>
          <div className="tp-way-wrap">
            <TreeLines />
            <div className="tp-way-grid">
              {t.journey.steps.map((step, i) => <Reveal key={step.word} effect="up" delay={250 + i * 140} className="tp-way-cell">
                <article className={`tp-way-card tone-${wayTones[i % wayTones.length]}`}>
                  <span className="tp-way-icon">{wayIcons[i % wayIcons.length]}</span>
                  <div className="tp-way-body">
                    <h3>{step.word}</h3>
                    <p className="tp-way-sub">{step.headline}</p>
                    <span className="tp-way-rule" aria-hidden="true" />
                    {step.text && <p className="tp-way-text">{step.text}</p>}
                    {step.items && <ul className="tp-way-list">
                      {step.items.map((item) => <ListItem key={typeof item === 'string' ? item : item.lead} item={item} />)}
                    </ul>}
                  </div>
                </article>
              </Reveal>)}
            </div>
          </div>
        </div>
      </section>}

      <section className="tp-gains">
        <div className="tp-wrap">
          <Reveal effect="up"><h2 className="tp-title">{t.gains.title}</h2></Reveal>
          <ul className="tp-gain-list">
            {t.gains.items.map((item, i) => <li key={typeof item === 'string' ? item : item.lead}>
              <Reveal effect="up" delay={(i % 2) * 100}><div className="tp-gain"><CheckIcon /><span>{typeof item === 'string' ? item : <><strong>{item.lead}:</strong> {item.text}</>}</span></div></Reveal>
            </li>)}
          </ul>
        </div>
      </section>

      <section className="tp-invest">
        <div className="tp-wrap tp-two">
          <Reveal effect="up">
            <h2 className="tp-title">{t.format.title}</h2>
            <ul className="tp-format">{t.format.items.map((item) => <li key={item}>{item}</li>)}</ul>
          </Reveal>
          <Reveal effect="zoom" delay={120}>
            <div className="tp-price-card">
              <h2 className="tp-title">{t.investment.title}</h2>
              <Price prices={t.investment.prices} />
              {t.investment.bonus && <p className="tp-bonus"><strong>{bonusLead}:</strong> {bonusRest.join(': ')}</p>}
              <CtaButton training={t} label={t.investment.cta} />
            </div>
          </Reveal>
        </div>
      </section>

      {hasEnrollForm(t) && <section className="tp-enroll" id="inscricao">
        <div className="tp-wrap">
          <Reveal effect="up">
            <h2 className="tp-title">Quero minha vaga</h2>
            <p className="enroll-sub">{t.title[0].replace(/:$/, '')}: preencha os seus dados para garantir a inscrição.</p>
          </Reveal>
          <Reveal effect="up" delay={120}><EnrollForm training={t.title[0].replace(/:$/, '')} /></Reveal>
        </div>
      </section>}

      <section className="tp-hosts">
        <div className="tp-wrap">
          <Reveal effect="up"><h2 className="tp-title">{t.hosts.title}</h2></Reveal>
          <div className={`tp-host-grid${t.hosts.people.length === 1 ? ' single' : ''}`}>
            {t.hosts.people.map((person, i) => <Reveal key={person.name ?? person.bio} effect="up" delay={i * 120}>
              <article className="tp-host">
                {person.photo
                  ? <div className="tp-host-photo"><Image src={person.photo} alt={person.name ?? 'Allê Ebrahim'} width={1800} height={2250} unoptimized /></div>
                  : <div className="tp-avatar" aria-hidden="true">{person.initials}</div>}
                <div>
                  {person.name && <h3 className="tp-host-name">{person.name}</h3>}
                  <p className="tp-text">{person.bio}</p>
                  {t.hosts.links && <p className="tp-host-links"><a href="/">allebrahimsite.vercel.app</a> · <a href={INSTAGRAM_URL} {...ext}>Instagram @alleebrahim</a></p>}
                </div>
              </article>
            </Reveal>)}
          </div>
          {t.hosts.closing && <Reveal effect="up"><p className="tp-closing">{t.hosts.closing}</p></Reveal>}
        </div>
      </section>

      <section className="tp-faq">
        <div className="tp-wrap tp-split">
          <Reveal effect="up"><h2 className="tp-title">Perguntas frequentes</h2></Reveal>
          <Reveal effect="up" delay={100}>
            <div className="tp-faq-list">{t.faq.map((item) => <details key={item.q} className={item.desktopOnly ? 'tp-faq-item desktop-only' : 'tp-faq-item'}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>)}</div>
          </Reveal>
        </div>
      </section>
    </main>
    <Footer />
  </>;
}
