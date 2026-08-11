# Portfólio — Willian Brendo

Landing page profissional construída com Next.js, React, TypeScript e Tailwind CSS 4. O conteúdo apresenta projetos full-stack, automações e o processo de engenharia assistida por IA com claims baseados em evidência técnica.

## Requisitos

- Node.js 20.9 ou superior
- npm 10 ou superior

## Desenvolvimento

```bash
npm ci
npm run dev
```

Acesse `http://localhost:3000`.

## Qualidade

```bash
npm run lint
npm run typecheck
npm run build
```

## Estrutura

- `src/app`: rota, metadata, SEO e estilos globais.
- `src/components`: seções e componentes interativos isolados.
- `src/data/portfolio.ts`: conteúdo tipado, contatos e stack pública.
- `public`: somente assets aprovados para exposição pública.

## Docker

```bash
docker compose up --build
```

O build Docker ativa a saída standalone do Next.js e executa com usuário sem privilégios.
