// Páginas de treinamento (/profissionalismo-a-mesa, /apaixonados-por-vendas, /mesa-estrategica).
// Textos enviados pela Allê; aqui só foi corrigida a ortografia. Para criar outra página, acrescente um item em `trainingPages`.
// TODO (falta a Allê confirmar): horário e unidade da Mesa Estratégica (15/12), links de inscrição da Mesa Estratégica,
// e a pergunta "Dá para fazer dentro do meu estabelecimento?" do Profissionalismo à Mesa (ainda sem resposta).

export const SEBRAE_VENDEDORES_URL = 'https://pe.loja.sebrae.com.br/treinamento-de-vendas-ev-931677';
// Script do Google que grava as inscrições na planilha "Mesa estratégica" (aba Inscrições).
export const PLANILHA_INSCRICOES_URL =
  process.env.NEXT_PUBLIC_INSCRICAO_URL
  ?? 'https://script.google.com/macros/s/AKfycbwXiOr5ua5h53wONUgy0CbiIBtgPI1X6rCnvBlFSVpx9zAC3Ojw7BRrsirUL2Vo9Qjg/exec';
export const INSCRICAO_MESA_URL = 'https://docs.google.com/document/d/1bB3XRxNCDfWNa8tQeq9kgV3guuBFQT32ZKxlhjNgc4s/edit?usp=sharing';
export const SEBRAE_GARCONS_URL = 'https://pe.loja.sebrae.com.br/profissionalismo-a-mesa-habilidades-para-garcons-de-sucesso-ev-931692';

/** Item de lista: texto simples, ou um destaque em negrito seguido do texto. */
export type Item = string | { lead: string; text: string };

export type Person = { name?: string; bio: string; photo?: string; initials?: string };

export type Training = {
  slug: string;
  /** Primeira linha (branca) e segunda linha (mostarda) do título. */
  title: [string, string];
  subtitle: string;
  chips: string[];
  /** Foto de fundo do topo da página (a mesma do cartão na home). */
  heroImage: { src: string; position: string };
  cta: { label: string; href: string; form?: boolean };
  audience: { intro: string; listLead?: string; items: string[] };
  why: { title: string; paragraphs: string[]; highlight?: string };
  /** Cartões "O que vamos trabalhar" (Mesa Estratégica usa `journey` no lugar). */
  topics?: { title: string; items: { lead: string; text: string }[] };
  /** Passos "ontem, hoje e amanhã". */
  journey?: { title: string; steps: { word: string; headline: string; text?: string; items?: Item[] }[] };
  gains: { title: string; items: Item[] };
  format: { title: string; items: string[] };
  investment: {
    title: string;
    prices: { old?: string; value: string; note: string }[];
    bonus?: string;
    cta: string;
  };
  hosts: { title: string; people: Person[]; closing?: string; links?: boolean };
  faq: { q: string; a: string; desktopOnly?: boolean }[];
};

const ALLE_PHOTO = '/images/alle-recortada-3.webp';

export const trainingPages: Training[] = [
  {
    slug: 'profissionalismo-a-mesa',
    title: ['Profissionalismo à Mesa:', 'habilidades para um garçom de sucesso.'],
    subtitle:
      'Um treinamento para as equipes de atendimento de negócios de alimentação (restaurantes, bares, cafeterias, confeitarias e docerias) atenderem melhor, venderem mais em cada mesa e fazerem o cliente voltar. Dia 16/11, das 8h30 às 12h30, no Sebrae PE.',
    chips: ['16/11', '8h30 às 12h30', 'Sebrae PE'],
    heroImage: { src: '/images/treinamentos-fundo-2.webp', position: '50% 30%' },
    cta: { label: 'Quero inscrever minha equipe', href: SEBRAE_GARCONS_URL },
    audience: {
      intro:
        'Para o time de atendimento de negócios de alimentação: garçons, maîtres e o time de atendimento online (WhatsApp, delivery, reservas e encomendas). Não é um treinamento para o dono: é para quem atende o cliente todos os dias.',
      listLead: 'É para a casa em que:',
      items: [
        'a equipe é simpática, mas cada um atende de um jeito',
        'o cliente pede só o prato principal ou só o café, quando poderia ter pedido a entrada, a bebida, a sobremesa ou levado algo para casa',
        'o WhatsApp demora a responder e perde a reserva, o pedido ou a encomenda por falta de uma boa sugestão',
        'tem gente nova no salão e ninguém com tempo de treinar um por um',
        'o objetivo é o cliente voltar, indicar e avaliar bem a casa',
      ],
    },
    why: {
      title: 'Por que agora',
      paragraphs: [
        'O fim de ano é a temporada da alimentação: confraternizações, encomendas de Natal, mesas cheias e cliente novo conhecendo a casa. É quando um bom atendimento mais vende, e quando um atendimento ruim mais aparece nas avaliações. Preparar a equipe agora é chegar em dezembro com todo mundo atendendo do mesmo jeito: bem.',
      ],
    },
    topics: {
      title: 'O que vamos trabalhar',
      items: [
        { lead: 'Atendimento e hospitalidade', text: 'Fazer o cliente se sentir bem-vindo desde a porta.' },
        { lead: 'Postura profissional', text: 'Apresentação, atenção à mesa e o comportamento que passa confiança.' },
        { lead: 'Comunicação com o cliente', text: 'O que falar, como falar e como lidar com reclamações, no salão e no WhatsApp.' },
        { lead: 'Técnicas de serviço', text: 'O passo a passo do serviço à mesa, com agilidade e cuidado.' },
        { lead: 'Conhecimento dos produtos', text: 'Saber descrever o cardápio, porque ninguém recomenda o que não conhece.' },
        { lead: 'Venda consultiva e aumento do ticket médio', text: 'Sugerir a entrada, a bebida, a sobremesa e o “para levar” sem parecer empurrado.' },
        { lead: 'Fidelização de clientes', text: 'Os detalhes que fazem o cliente voltar e indicar.' },
      ],
    },
    gains: {
      title: 'O que a sua equipe leva',
      items: [
        'Um padrão de atendimento único para a casa',
        'Frases prontas para receber, sugerir, oferecer o adicional e se despedir',
        'Mais segurança para recomendar o cardápio e aumentar o valor de cada mesa',
        'Um olhar de quem cuida do cliente para que ele volte',
      ],
    },
    format: {
      title: 'Formato',
      items: [
        'Presencial, dia 16/11, das 8h30 às 12h30 (4 horas), no Sebrae PE',
        'Para garçons, maîtres e o time de atendimento online',
      ],
    },
    investment: {
      title: 'Investimento',
      prices: [{ old: 'R$ 350,00', value: 'R$ 126,00', note: 'por pessoa' }],
      cta: 'Inscrever minha equipe',
    },
    hosts: {
      title: 'Quem conduz',
      people: [
        {
          bio: 'Allê Ebrahim começou como vendedora, foi gerente e supervisora em uma grande rede de varejo e empreendeu no ramo de entretenimento e alimentação, à frente de bar e casa noturna. Hoje tem uma empresa de treinamentos de vendas que já preparou milhares de pessoas. Ela conhece o salão porque já esteve do outro lado do balcão.',
          photo: ALLE_PHOTO,
        },
      ],
      links: true,
    },
    faq: [
      {
        q: 'Quem deve participar?',
        a: 'Garçons, maîtres e o time de atendimento online (WhatsApp, delivery, reservas e encomendas). Não é um treinamento para o dono: o dono inscreve a equipe e recebe o time de volta com um padrão de atendimento único.',
      },
      {
        q: 'Serve para o meu tipo de negócio?',
        a: 'Serve para restaurantes, bares, cafeterias, confeitarias, docerias e qualquer casa com atendimento à mesa, no balcão ou pelo WhatsApp.',
      },
      {
        q: 'Minha equipe é pequena. Vale a pena?',
        a: 'Vale ainda mais: em casa pequena, cada atendimento pesa no resultado e nas avaliações.',
      },
    ],
  },

  {
    slug: 'apaixonados-por-vendas',
    title: ['Apaixonados por Vendas:', 'a última edição aberta de 2026.'],
    subtitle:
      'Prepare a sua equipe antes do período em que o movimento aumenta, os clientes estão mais dispostos a comprar e cada oportunidade precisa virar venda. Dia 11/11, das 8h30 às 12h30, no Sebrae PE.',
    chips: ['11/11', '8h30 às 12h30', 'Sebrae PE'],
    heroImage: { src: '/images/treinamentos-fundo.webp', position: '60% 10%' },
    cta: { label: 'Quero inscrever minha equipe', href: SEBRAE_VENDEDORES_URL },
    audience: {
      intro:
        'Para o time comercial: vendedores presenciais e online, gerentes e autônomos que vendem o próprio serviço. Não é um treinamento para o dono da empresa: é para quem está na linha de frente, falando com o cliente todos os dias.',
      listLead: 'É para você que:',
      items: [
        'vai atender muito mais gente em novembro e dezembro e quer dar conta quando a loja ou o WhatsApp estiverem cheios',
        'chegou há pouco tempo no time e quer pegar o ritmo antes do pico',
        'vê o cliente entrar, olhar e ir embora sem comprar, ou parar de responder no WhatsApp',
        'quer vender com mais segurança, sem depender só de desconto',
        'lidera uma equipe e precisa que todo mundo venda do mesmo jeito',
      ],
    },
    why: {
      title: 'Por que agora',
      paragraphs: [
        'O fim de ano é a época em que o cliente mais compra, e também a época em que a equipe menos tem tempo para aprender. O cliente de hoje chega pesquisado: compara preço no celular, conhece o produto e sabe o que quer. Quem atende no improviso perde venda justamente nos dias de maior movimento.',
      ],
      highlight: 'Esta é a última edição aberta do ano: depois dela, a equipe já entra na Black Friday e no Natal.',
    },
    topics: {
      title: 'O que vamos trabalhar',
      items: [
        { lead: 'Comportamento do consumidor', text: 'O que o cliente de hoje busca, e a diferença entre quem compra online e quem escolhe ir à loja.' },
        { lead: 'Cada etapa da venda', text: 'Da abordagem ao pós-venda, com o que fazer e o que dizer em cada momento.' },
        { lead: 'Conexão e abordagem', text: 'Como fugir do “posso ajudar?” e começar uma conversa que vira venda.' },
        { lead: 'Estratégias para aumentar a conversão', text: 'Transformar quem entra em quem compra.' },
        { lead: 'Vender com segurança e estratégia', text: 'Contornar objeções, oferecer o adicional e fechar sem empurrar.' },
      ],
    },
    gains: {
      title: 'O que a sua equipe leva',
      items: [
        { lead: 'Um jeito comum de vender', text: 'veterano e novato seguindo as mesmas etapas' },
        'Frases prontas para abordagem, sondagem, objeções e fechamento',
        'Mais segurança para atender o cliente que chega pesquisado',
        'Disposição renovada para a época mais puxada do ano',
      ],
    },
    format: {
      title: 'Formato',
      items: [
        'Presencial, dia 11/11, das 8h30 às 12h30 (4 horas), no Sebrae PE',
        'Para vendedores presenciais e online, gerentes e autônomos. Quem aprende junto vende do mesmo jeito: vale inscrever o time inteiro',
      ],
    },
    investment: {
      title: 'Investimento',
      prices: [{ old: 'R$ 350,00', value: 'R$ 126,00', note: 'por pessoa' }],
      cta: 'Inscrever minha equipe',
    },
    hosts: {
      title: 'Quem conduz',
      people: [
        {
          bio: 'Allê Ebrahim começou como vendedora, foi gerente e supervisora em uma grande rede de varejo, empreendeu no ramo de entretenimento e alimentação e hoje tem uma empresa de treinamentos de vendas que já preparou milhares de pessoas. Ela conhece o balcão porque já esteve nele.',
          photo: ALLE_PHOTO,
        },
      ],
      links: true,
    },
    faq: [
      {
        q: 'Serve para qualquer segmento?',
        a: 'Sim. O treinamento trabalha comportamento do consumidor e etapas da venda, que valem para loja, serviço, alimentação e atendimento por WhatsApp.',
      },
      {
        q: 'Meu vendedor é iniciante. Vale a pena?',
        a: 'Vale muito. É o jeito mais rápido de colocar quem chegou agora no padrão da casa antes do pico.',
      },
      {
        q: 'É para o dono da empresa?',
        a: 'Não. É para quem vende: vendedores presenciais e online, gerentes e autônomos. O dono inscreve o time e recebe a equipe de volta preparada para o fim de ano.',
      },
    ],
  },

  {
    slug: 'mesa-estrategica',
    title: ['Mesa Estratégica:', 'o seu 2027 planejado em um dia.'],
    subtitle:
      '8 horas, ao vivo e presencial, para olhar os números do seu negócio, entender o que funcionou em 2026 e sair com metas e calendário de 2027 prontos. Apenas 10 vagas.',
    chips: ['15/12', '8 horas', 'Sebrae', 'Apenas 10 vagas'],
    heroImage: { src: '/images/treinamentos-fundo-3.webp', position: '50% 22%' },
    cta: { label: 'Quero minha vaga', href: INSCRICAO_MESA_URL, form: true },
    audience: {
      intro: 'Para donos de empresa, gestores e autônomos que:',
      items: [
        'terminam todo ano com a sensação de que poderiam ter vendido mais',
        'definem a meta “no feeling”, sem saber de onde ela vem',
        'correm atrás das datas comemorativas em cima da hora',
        'têm dados espalhados (sistema, planilha, Instagram, agência) e nunca param para olhar tudo junto',
        'querem chegar em janeiro sabendo exatamente o que fazer em cada mês',
      ],
    },
    why: {
      title: 'Por que agora, no início do ano',
      paragraphs: [
        '2027 não vai ser um ano de crescimento fácil. As projeções apontam um varejo crescendo cerca de 2,4%, juros ainda altos e um consumidor endividado, que pesquisa, compara e escolhe com cuidado onde gastar. Ao mesmo tempo, a reforma tributária entra em vigor e muda a forma de precificar, e o cliente compra cada vez mais pelo WhatsApp, pelas redes e até com ajuda de inteligência artificial.',
        'Nesse cenário, quem cresce não é quem trabalha mais. É quem planeja melhor. Janeiro e fevereiro são os meses certos para isso: a correria do fim de ano passou, os números de 2026 estão fechados e ainda dá tempo de se preparar para todas as datas importantes do ano.',
      ],
    },
    journey: {
      title: 'Como funciona: ontem, hoje e amanhã',
      steps: [
        {
          word: 'Ontem',
          headline: 'De onde você veio.',
          text: 'Olhamos os anos anteriores: quanto vendeu por mês e o resultado anual. Os padrões aparecem: meses fortes, meses fracos, sazonalidades que você sente mas nunca mediu.',
        },
        {
          word: 'Hoje',
          headline: 'O raio-x de 2026.',
          text: 'Antes da Mesa, você recebe um formulário que ensina onde encontrar cada dado. No dia, analisamos juntos:',
          items: [
            'vendas por mês e por vendedor',
            'curva ABC: os produtos que sustentam o seu faturamento',
            'vendas por canal (loja, WhatsApp, Instagram, site, marketplace)',
            'produtos e serviços que você ainda não explora',
            'datas que já funcionam para o seu negócio, incluindo o aniversário da marca',
            'o que aconteceu dentro e fora da empresa e afetou as vendas',
            'concorrentes',
            'resultados de marketing: tráfego pago, agência, influenciadores',
            'NPS: o que os seus clientes dizem de você',
          ],
        },
        {
          word: 'Amanhã',
          headline: 'O seu 2027.',
          items: [
            { lead: 'Jornada do cliente', text: 'como ele descobre, considera, compra, é atendido e volta, e onde você está perdendo vendas em cada etapa' },
            'Tendências de mercado para 2027 e o que elas significam para o seu segmento',
            { lead: 'Metas', text: 'quanto você quer crescer, se esse número é realista e como acompanhar mês a mês' },
            { lead: 'Calendário 2027', text: 'as datas e os eventos do ano que importam para o seu negócio, com a programação mês a mês' },
          ],
        },
      ],
    },
    gains: {
      title: 'O que você leva',
      items: [
        'Diagnóstico do seu 2026 com números reais',
        'Meta de 2027 construída com base nos dados, não no achismo',
        'Mapa da jornada do seu cliente com os pontos de melhoria',
        { lead: 'Plano de 90 dias', text: 'as ações do primeiro trimestre, com responsável e prazo, para começar a executar na segunda-feira seguinte' },
        { lead: 'Rituais de gestão', text: 'a agenda de acompanhamento da sua empresa (reunião semanal de metas, fechamento mensal e revisão trimestral) para o plano não ficar na gaveta' },
        { lead: 'Calendário 2027', text: 'as datas e campanhas do seu negócio mês a mês, em formato para deixar à vista no escritório' },
        { lead: 'Grupo da turma', text: 'os empresários da sua Mesa em um grupo para trocar resultados, ideias e se cobrar ao longo do ano' },
      ],
    },
    format: {
      title: 'Formato',
      items: [
        '8 horas ao vivo e presencial',
        '15/12, no Sebrae',
        'Apenas 10 vagas, cada uma para até 2 pessoas da mesma empresa (traga seu sócio ou seu gerente)',
        'Formulário de preparação enviado após a inscrição',
      ],
    },
    investment: {
      title: 'Investimento',
      prices: [
        { value: 'R$ 1.799,00', note: 'em até 12x' },
        { value: 'R$ 1.500,00', note: 'à vista' },
      ],
      bonus:
        'Bônus exclusivo para quem garantir a vaga durante o evento: uma reunião individual de 1 hora com a gente depois da Mesa, para revisar a execução do seu plano.',
      cta: 'Garantir minha vaga',
    },
    hosts: {
      title: 'Quem conduz',
      people: [
        {
          name: 'Allê Ebrahim',
          bio: 'Começou como vendedora, foi gerente e supervisora em uma grande rede de varejo, empreendeu nos ramos de entretenimento e alimentação e hoje tem uma empresa de treinamentos de vendas que já preparou milhares de pessoas. Conhece o balcão e a planilha, e sabe o valor do entusiasmo e da técnica juntos para fazer bons resultados para os negócios em que entra.',
          photo: ALLE_PHOTO,
        },
        {
          name: 'Priscilla Figueirôa',
          photo: '/images/priscilla.webp',
          bio: 'Consultora de vendas, com 14 anos de experiência como empreendedora, período em que esteve à frente da própria marca. Essa trajetória proporcionou uma vivência prática em vendas, gestão de negócios, relacionamento com clientes e vendas on-line. Hoje, utiliza toda essa experiência para ajudar empresas a desenvolverem estratégias comerciais, aprimorarem seus processos e alcançarem melhores resultados.',
        },
      ],
      closing: 'E é esta combinação que levamos para a Mesa Estratégica',
    },
    faq: [
      {
        q: 'Preciso ter todos os dados?',
        a: 'Não. O formulário mostra onde buscar cada um, e trabalhamos com o que você tiver. Quanto mais completo, mais preciso o plano.',
      },
      {
        q: 'Serve para empresa pequena ou autônomo?',
        a: 'Sim. A lógica de olhar o passado, o presente e planejar o futuro vale para qualquer tamanho de negócio.',
      },
      {
        q: 'Meus números ficam expostos para os outros participantes?',
        a: 'Você decide o que compartilha. A análise individual é feita com você, e a troca em grupo é sobre aprendizados, não sobre faturamento.',
      },
      {
        q: 'Posso levar mais de uma pessoa?',
        a: 'Cada vaga vale para até 2 pessoas da mesma empresa.',
      },
    ],
  },
];

export const findTraining = (slug: string) => trainingPages.find((page) => page.slug === slug);
