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
  { label: 'Allê Ebrahim', href: '/#apresentacao' },
  { label: 'Soluções', href: '/#treinamentos' },
  { label: 'Depoimentos', href: '/#depoimentos' },
  { label: 'Contato', href: '/#contato' },
];

// Depoimentos copiados do site da Virada de Vendas (viradadevendas.vercel.app), sem alteração.
export const testimonials = {
  title: 'Quem viveu um treinamento da',
  highlight: 'Allê',
  items: [
    {
      title: 'Saí da palestra encantada',
      image: '/images/depoimento-1.webp',
      text: 'Eu saí da palestra de sábado encantada com o seu conteúdo, a didática, a postura e a sua presença. Não tem ser humano no mundo que não se envolva e não pare para ouvir cada palavra sua. Maravilhosa!',
    },
    {
      title: 'Super esclarecedor',
      image: '/images/depoimento-2.webp',
      text: 'O treinamento foi super esclarecedor. Você é muito criativa e nos instiga a sair da caixinha. Saí com muitas ideias e tenho certeza de que irão trazer resultados, principalmente sobre a importância de fazer uma qualificação e uma sondagem mais eficientes. Mas a principal parte para mim foi sobre não esquecer os meus próprios objetivos: às vezes entramos no modo automático e esquecemos os motivos que nos fizeram começar. Sempre busco me desenvolver, como você disse, e vou buscar aprender mais com você a partir de agora. Adorei que você é enérgica e mostra na prática como fazer.',
    },
    {
      title: 'Bem mais dinâmico e proveitoso',
      image: '/images/depoimento-3.webp',
      text: 'Eu gostei bastante, achei bem mais dinâmico que o da outra vez. Foi mais leve também e bastante proveitoso para a minha rotina em loja.',
    },
    {
      title: 'Todas as estratégias foram muito boas',
      image: '/images/depoimento-4.webp',
      text: 'Foi muito produtiva a palestra. Todas as estratégias que ela falou foram muito boas. Uma das mais importantes foi gerar um relacionamento com o cliente, ou seja, saber conquistar, escutar o cliente e ter hospitalidade para ele se sentir bem no ambiente, porque o bom atendimento faz toda a diferença e o cliente sempre vai querer voltar. Se colocarmos em prática, acredito que dará muito certo. Desde já agradeço a vocês pela oportunidade que me deram.',
    },
    {
      title: 'Tem sido um prazer aprender com você',
      image: '/images/depoimento-5.webp',
      text: 'Você merece reconhecimento para valer, viu? Tem sido um prazer ouvir e aprender com você. Tenho aprendido com o seu exemplo, com a habilidade de resgatar ideias, validar pessoas e promover outros olhares de uma forma respeitosa. Que bom que você chegou na equipe com leveza, bom humor, gargalhada… mas também foco, direção e assertividade.',
    },
  ],
  author: 'Participante do treinamento',
  more: 'Ler mais',
  less: 'Ler menos',
};

export const hero = {
  kicker: 'Vender fica mais leve',
  title: 'Quando existe conexão e estratégia',
  button: 'Próximos treinamentos',
  href: '#treinamentos',
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
  { src: '/images/galeria-1.webp', alt: 'Allê Ebrahim de perfil, de blazer bege, falando para a plateia' },
  { src: '/images/galeria-2.webp', alt: 'Allê Ebrahim abraçando um participante do evento' },
  { src: '/images/galeria-3.webp', alt: 'Allê Ebrahim com o microfone diante da turma reunida na sala' },
  { src: '/images/galeria-4.webp', alt: 'Allê Ebrahim com o microfone em meio aos participantes do treinamento' },
  { src: '/images/galeria-5.webp', alt: 'Allê Ebrahim apresentando em frente ao telão para a turma' },
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
      name: 'Apaixonados por Vendas',
      date: '11/11',
      text: 'Treinamento para vendedores e equipes comerciais.',
      button: 'Quero participar',
      href: '/apaixonados-por-vendas',
      image: '/images/treinamentos-fundo.webp',
    },
    {
      name: 'Profissionalismo à Mesa',
      date: '16/11',
      text: 'Treinamento para garçons e maîtres.',
      button: 'Quero participar',
      href: '/profissionalismo-a-mesa',
      image: '/images/treinamentos-fundo-2.webp',
    },
    {
      name: 'Mesa Estratégica',
      date: '15/12',
      text: 'O seu 2027 planejado em um dia, com apenas 10 vagas.',
      button: 'Quero participar',
      href: '/mesa-estrategica',
      image: '/images/treinamentos-fundo-3.webp',
      imagePos: '38% 20%',
    },
  ],
  more: 'Quero treinamento só para a minha empresa',
  moreHref: whatsapp('Olá! Quero um treinamento só para a minha empresa.'),
};

export const cta = {
  kicker: 'Fale com a minha equipe',
  title: 'Quero acelerar minhas vendas com estratégia',
  button: 'Falar com a equipe',
  href: whatsapp('Olá, Allê! Quero acelerar minhas vendas com estratégia e falar com a sua equipe.'),
};

export const social = {
  title: 'Me',
  highlight: 'acompanhe',
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
    { label: 'Allê Ebrahim', href: '/#apresentacao' },
    { label: 'Próximos treinamentos', href: '/#treinamentos' },
    { label: 'Contato', href: '/#contato' },
  ],
};
