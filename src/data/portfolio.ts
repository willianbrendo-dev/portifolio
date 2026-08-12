export type ProjectMediaAsset = {
  src: string;
  alt: string;
  label: string;
  caption: string;
  width: number;
  height: number;
};

export type ProjectMedia = {
  id: string;
  projectName: string;
  coordinate: string;
  title: string;
  note: string;
  mobile: [ProjectMediaAsset, ProjectMediaAsset, ProjectMediaAsset];
  desktop: ProjectMediaAsset;
};

export type ProjectCase = {
  id: string;
  index: string;
  title: string;
  eyebrow: string;
  summary: string;
  problem: string;
  built: string;
  contribution: string;
  media?: ProjectMedia;
  engineering: Array<{
    title: string;
    detail: string;
    evidence: string;
  }>;
  stack: string[];
  status: string;
};

export const siteConfig = {
  name: "Willian Brendo",
  role: "Full-Stack Software Engineer",
  descriptor: "Full-Stack & Automation",
  email: "willianbrendo.dev@gmail.com",
  phoneDisplay: "+55 86 99825-2264",
  phoneDigits: "5586998252264",
  github: "https://github.com/willianbrendo-dev",
  siteUrl: "https://portifolio-ivory-tau.vercel.app",
} as const;

export const navigation = [
  { href: "#projetos", label: "Projetos" },
  { href: "#engenharia", label: "Engenharia" },
  { href: "#stack", label: "Stack" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
] as const;

export const capabilities = [
  {
    index: "01",
    label: "Construir",
    title: "Produtos full-stack",
    description:
      "Interfaces, backend, autenticação, regras no servidor e dados tratados como um único produto.",
    proof: "Next.js · React · TypeScript",
  },
  {
    index: "02",
    label: "Automatizar",
    title: "Processos e integrações",
    description:
      "Fluxos de browser, mensageria e hardware transformados em sistemas operáveis e supervisionados.",
    proof: "Python · Patchright · FastAPI",
  },
  {
    index: "03",
    label: "Garantir",
    title: "Dados e regras",
    description:
      "Isolamento por tenant, autorização no servidor e integridade concorrente aplicada no banco.",
    proof: "PostgreSQL · RLS · Prisma",
  },
  {
    index: "04",
    label: "Acelerar",
    title: "Engenharia assistida por IA",
    description:
      "LLMs apoiam pesquisa e implementação sob critérios, testes, revisão e limites determinísticos.",
    proof: "Tool gating · Human-in-the-loop",
  },
] as const;

export const featuredCases: ProjectCase[] = [
  {
    id: "barbo",
    index: "01",
    title: "Barbô",
    eyebrow: "Case principal · SaaS full-stack",
    summary:
      "SaaS modular para gestão e agendamento de barbearias, reunindo operação, billing, integrações e assistentes de IA.",
    problem:
      "Centralizar agenda, operação e atendimento sem depender apenas de validações na interface.",
    built:
      "Aplicação Next.js com autenticação, regras no servidor, PostgreSQL, Prisma, billing, integrações e testes.",
    contribution:
      "Construção ponta a ponta do produto, da experiência web à modelagem de dados, controles de acesso e entrega.",
    media: {
      id: "barbo-product-view",
      projectName: "Barbô",
      coordinate: "BARBÔ / 01",
      title: "Produto em operação.",
      note: "Interface real capturada em ambiente isolado, com dados demonstrativos.",
      mobile: [
        {
          src: "/projects/barbo/dashboard-mobile.png",
          alt: "Painel mobile do Barbô com próximo atendimento e resumo operacional.",
          label: "Dashboard",
          caption: "Visão operacional.",
          width: 780,
          height: 1688,
        },
        {
          src: "/projects/barbo/agendamento-mobile.png",
          alt: "Fluxo público mobile do Barbô com seleção de serviço e profissional.",
          label: "Agendamento",
          caption: "Experiência do cliente.",
          width: 780,
          height: 1688,
        },
        {
          src: "/projects/barbo/agenda-mobile.png",
          alt: "Agenda mobile do Barbô com lista de atendimentos do dia.",
          label: "Agenda",
          caption: "Atendimentos e estados do dia.",
          width: 780,
          height: 1688,
        },
      ],
      desktop: {
        src: "/projects/barbo/agenda-desktop.png",
        alt: "Agenda web do Barbô exibida em viewport desktop.",
        label: "Agenda web",
        caption: "Operação preservada em viewport ampla.",
        width: 1800,
        height: 1350,
      },
    },
    engineering: [
      {
        title: "Multi-tenancy em profundidade",
        detail:
          "O contexto do tenant entra na transação e o PostgreSQL força RLS com um papel de aplicação restrito.",
        evidence: "Contexto transacional + FORCE RLS",
      },
      {
        title: "Concorrência no banco",
        detail:
          "Uma exclusion constraint GiST impede sobreposição de agenda por profissional, inclusive entre requisições concorrentes.",
        evidence: "Constraint PostgreSQL anti-overlap",
      },
      {
        title: "IA com confirmação humana",
        detail:
          "Tools são liberadas por módulo e ações de escrita viram propostas antes de qualquer execução.",
        evidence: "Tool gating + human-in-the-loop",
      },
      {
        title: "Verificação",
        detail:
          "A suíte cobre isolamento entre tenants, autenticação, agenda, billing, webhooks e limites das ações de IA.",
        evidence: "Vitest + PostgreSQL de integração",
      },
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Docker",
      "GitHub Actions",
    ],
    status:
      "Estado verificado: implementação ampla e preparada para piloto. Operação comercial e integrações ponta a ponta não foram verificadas externamente.",
  },
  {
    id: "tecnobook",
    index: "02",
    title: "TecnoBook",
    eyebrow: "Sistema B2B · Software conectado ao hardware",
    summary:
      "Sistema multi-loja para assistência técnica, cobrindo ordens de serviço, clientes, estoque, caixa, relatórios e impressão.",
    problem:
      "Concentrar a rotina operacional da assistência e levar trabalhos de impressão do sistema até dispositivos locais.",
    built:
      "SPA React conectada ao Supabase/PostgreSQL, com Realtime, relatórios e aplicação híbrida Capacitor.",
    contribution:
      "Implementação dos fluxos de domínio, integração de dados, impressão web e suporte USB/OTG no cliente híbrido.",
    engineering: [
      {
        title: "Realtime com contingência",
        detail:
          "A fila de impressão combina eventos do Supabase Realtime com polling de fallback.",
        evidence: "Realtime + polling",
      },
      {
        title: "Aquisição condicional",
        detail:
          "O job só é assumido quando continua elegível, reduzindo processamento duplicado.",
        evidence: "Lock condicional no banco",
      },
      {
        title: "Browser até o dispositivo",
        detail:
          "WebUSB, Web Serial e Capacitor conectam o fluxo web a impressoras e dispositivos USB/OTG.",
        evidence: "WebUSB · Web Serial · Capacitor USB",
      },
    ],
    stack: [
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Realtime",
      "Capacitor",
    ],
    status:
      "Estado verificado: há workflow de deploy e backups datados. A operação atual, o volume e os resultados de negócio não foram verificados.",
  },
];

export const automationCases = [
  {
    index: "A.01",
    title: "Automação de browser",
    description:
      "Orquestração assíncrona com um contexto de browser por conta, sessões isoladas, máquina de estados e painel operacional.",
    flow: ["Painel React", "API FastAPI", "Workers asyncio", "Patchright", "SQLite"],
    stack: ["Python", "Patchright", "asyncio", "FastAPI", "React", "Docker"],
  },
  {
    index: "A.02",
    title: "Triagem com LLM",
    description:
      "Pipeline assíncrono de mensagens com pré-filtro lexical, classificação estruturada e notificação por Telegram.",
    flow: ["Telethon", "Pré-filtro", "LangChain + Gemini", "Pydantic", "Telegram"],
    stack: ["Python", "Telethon", "LangChain", "Gemini", "Pydantic", "SQLite"],
  },
] as const;

export const stackGroups = [
  {
    label: "Principal",
    note: "Base dos produtos full-stack",
    items: ["TypeScript", "React", "Next.js", "PostgreSQL", "Prisma"],
  },
  {
    label: "Automação",
    note: "Browser, serviços e testes",
    items: ["Python", "Patchright", "Playwright", "FastAPI"],
  },
  {
    label: "Infra / entrega",
    note: "Empacotamento e operação prática",
    items: ["Docker", "Git", "GitHub Actions", "Linux / VPS"],
  },
  {
    label: "Ecossistema",
    note: "Integrações aplicadas",
    items: ["Supabase", "Capacitor", "LangChain", "SQLite"],
  },
  {
    label: "Experiência secundária",
    note: "Prática em projetos educacionais",
    items: ["Java", "Spring Boot", "MongoDB"],
  },
] as const;

export type ContactIntent = "projeto" | "contratacao" | "conversa";

const intentMessages: Record<ContactIntent, string> = {
  projeto:
    "Olá, Willian. Vim pelo portfólio e gostaria de conversar sobre um projeto.",
  contratacao:
    "Olá, Willian. Vim pelo portfólio e gostaria de conversar sobre uma oportunidade de Full-Stack Software Engineering.",
  conversa:
    "Olá, Willian. Vim pelo portfólio e gostaria de iniciar uma conversa profissional.",
};

export function getWhatsAppUrl(intent: ContactIntent = "conversa") {
  return `https://wa.me/${siteConfig.phoneDigits}?text=${encodeURIComponent(intentMessages[intent])}`;
}
