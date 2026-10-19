// Conteúdo da Allê Ebrahim. Fontes: cartão digital (datas dos treinamentos, WhatsApp, Instagram, slogan)
// e o texto de posicionamento do site anterior.
// TODO (falta a Allê confirmar): número de WhatsApp definitivo, biografia com conquistas e números reais,
// depoimentos, TikTok/Facebook/YouTube, links de inscrição dos treinamentos de 11/11 e 16/11 e política de privacidade.

export const WHATSAPP_URL = 'https://wa.me/558199369935';
export const INSTAGRAM_URL = 'https://www.instagram.com/alleebrahim/';
export const VIRADA_URL = 'https://viradadevendas.vercel.app/';

/** Link do WhatsApp com a mensagem já preenchida. */
export const whatsapp = (text: string) => `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`;

export const menu = [
  { label: 'Início', href: '/' },
  { label: 'Allê Ebrahim', href: '#apresentacao' },
  { label: 'Soluções', href: '#ajuda' },
  { label: 'Ebook', href: '#ebook' },
  { label: 'Consultoria Grátis', href: '#consultoria' },
  { label: 'Próximos treinamentos', href: '#treinamentos' },
  { label: 'Contato', href: '#contato' },
];

export const hero = {
  kicker: 'Vender fica mais leve',
  title: 'Quando existe conexão e estratégia',
  button: 'Fale com a Allê',
  href: whatsapp('Olá, Allê! Vim pelo site e quero saber mais.'),
};

export const about = {
  title: 'Quem é',
  name: 'Allê Ebrahim?',
  items: [
    'Consultora, palestrante e especialista em vendas',
    'Treinamentos, consultoria e implementação para equipes comerciais',
    'Acredita em times mais preparados, conversas mais humanas e resultados que fazem sentido',
    'Vender com verdade e constância',
    'Vender fica mais leve quando existe conexão',
  ],
  button: 'Fale com a Allê',
  href: whatsapp('Olá, Allê! Quero conhecer o seu trabalho.'),
};

export const gallery = [
  { src: '/images/palestra-selfie.webp', alt: 'Allê Ebrahim com a plateia acenando ao fundo' },
  { src: '/images/palestra-lateral.webp', alt: 'Allê Ebrahim apresentando no palco para a plateia' },
  { src: '/images/palestra-microfone.webp', alt: 'Allê Ebrahim com o microfone durante a palestra' },
  { src: '/images/palestra-slide.webp', alt: 'Allê Ebrahim explicando um slide sobre personalização' },
  { src: '/images/fundo-cards.webp', alt: 'Treinamento com a plateia reunida' },
  { src: '/images/fundo-rodape.webp', alt: 'Plateia animada durante o treinamento' },
];

export const help = {
  title: 'Como posso te',
  highlight: 'ajudar?',
  cards: [
    {
      title: 'Treinamento',
      text: 'Ensinamos seu time a fazer. Workshops, in company, turmas e imersões com conteúdo prático e direto ao ponto.',
      button: 'Quero treinar meu time',
      href: whatsapp('Olá, Allê! Quero saber mais sobre os treinamentos.'),
      image: '/images/palestra-lateral.webp',
    },
    {
      title: 'Consultoria',
      text: 'Fazemos com você. Diagnóstico, plano de ação e acompanhamento para descobrir onde sua empresa está perdendo vendas.',
      button: 'Quero uma consultoria',
      href: whatsapp('Olá, Allê! Quero saber mais sobre a consultoria.'),
      image: '/images/palestra-slide.webp',
    },
    {
      title: 'Implementação',
      text: 'Fazemos por você. Estruturamos processos, ferramentas e rotina comercial: CRM, site e páginas de venda, cadência e follow-up, scripts e processo comercial.',
      button: 'Quero estruturar meu comercial',
      href: whatsapp('Olá, Allê! Quero saber mais sobre a implementação.'),
      image: '/images/alle-recortada-2.webp',
    },
    {
      // TODO: texto provisório, trocar pela descrição real do ebook.
      id: 'ebook',
      title: 'Ebook',
      text: 'Conteúdo prático em formato ebook para você aplicar no seu dia a dia de vendas e com o seu time.',
      button: 'Quero o ebook',
      href: whatsapp('Olá, Allê! Quero saber mais sobre o ebook.'),
      image: '/images/palestra-microfone.webp',
    },
  ],
};

export const trainings = {
  title: 'Próximos',
  highlight: 'treinamentos',
  items: [
    {
      name: 'Virada de Vendas',
      date: '04/11',
      text: 'Quero participar da Virada de Vendas.',
      button: 'Quero participar',
      href: VIRADA_URL,
    },
    {
      name: 'Treinamento para vendedores',
      date: '11/11',
      text: 'Próximo treinamento para vendedores.',
      button: 'Quero participar',
      href: whatsapp('Olá, Allê! Quero participar do treinamento para vendedores de 11/11.'),
    },
    {
      name: 'Treinamento para garçons',
      date: '16/11',
      text: 'Próximo treinamento para garçons.',
      button: 'Quero participar',
      href: whatsapp('Olá, Allê! Quero participar do treinamento para garçons de 16/11.'),
    },
  ],
  more: 'Quero treinamento só para a minha empresa',
  moreHref: whatsapp('Olá! Quero um treinamento só para a minha empresa.'),
};

export const cta = {
  kicker: 'Consultoria gratuita',
  title: 'Quero acelerar minhas vendas com estratégia',
  button: 'Inscreva-se agora!',
  href: whatsapp('Olá, Allê! Quero acelerar minhas vendas com estratégia e saber mais sobre a consultoria gratuita.'),
};

export const social = {
  title: 'Acompanhe a',
  highlight: 'Allê',
  links: [
    { name: 'Instagram', href: INSTAGRAM_URL },
    { name: 'WhatsApp', href: WHATSAPP_URL },
  ],
};

export const footer = {
  company: 'Allê Ebrahim',
  tagline: 'Vender fica mais leve quando existe conexão.',
  links: [
    { label: 'Início', href: '/' },
    { label: 'Allê Ebrahim', href: '#apresentacao' },
    { label: 'Próximos treinamentos', href: '#treinamentos' },
    { label: 'Contato', href: '#contato' },
  ],
};
