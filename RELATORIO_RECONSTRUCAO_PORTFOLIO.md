# RELATÓRIO DE RECONSTRUÇÃO DO PORTFÓLIO

## 1. Resumo

O portfólio foi reconstruído como uma landing page editorial técnica em PT-BR, orientada a dois públicos com o mesmo peso: clientes que precisam construir software e empresas que buscam contratar um Full-Stack Software Engineer.

A autoridade da página agora vem de decisões auditadas em projetos reais. Métricas promocionais, senioridade não sustentada e ferramentas sem evidência foram removidas. O resultado apresenta Barbô, TecnoBook, PedidosSaaS e automações por meio de problema, construção, atuação, decisões técnicas, stack e limites conhecidos.

A implementação usa Next.js App Router, Server Components por padrão, três ilhas de interatividade e nenhuma biblioteca adicional de UI ou motion.

## 2. Problemas encontrados no portfolio antigo

- Hero com senioridade não sustentada pela auditoria.
- Contador de "Professional Views" calculado aleatoriamente no cliente.
- Métricas e afirmações sem fonte, incluindo tempo de resposta, operação irrestrita e alcance global.
- Copy baseada em adjetivos como performance e escala sem benchmark.
- Ferramentas listadas sem implementação encontrada no código auditado.
- Linguagem de automação com risco reputacional, incluindo bypass, CAPTCHA e anti-detecção como destaque.
- TecnoBook apresentado como Next.js e aplicativo nativo, embora a implementação auditada use React/Vite e Capacitor.
- Galerias com elementos clicáveis não operáveis por teclado.
- Vídeos longos em autoplay e loop, sem controles.
- Aproximadamente 17,62 MiB em `public/`, incluindo mídia com possíveis dados pessoais, domínio de apostas, paths locais e assets duplicados.
- Menu mobile fechado com links ainda potencialmente focalizáveis.
- Ausência de `main`, skip link, reduced motion, foco consistente e offset de âncoras.
- Metadata genérica, sem canonical, imagem social, sitemap, robots ou dados estruturados.
- Conteúdo hardcoded e repetido entre componentes.
- Dockerfile com Node 18, incompatível com Next.js 16.
- README padrão do `create-next-app`, divergente da implementação real.

## 3. Estratégia adotada

Foi adotada a sequência narrativa:

1. Posicionamento e proposta de valor.
2. Mapa visual do sistema ponta a ponta.
3. Capacidades concretas.
4. Prova principal por cases.
5. Automação como segunda área técnica.
6. Engineering Lab para mostrar processo e limites.
7. Processo de engenharia assistida por IA.
8. Stack hierarquizada por evidência.
9. Identidade pessoal.
10. Caminhos separados para projeto e contratação.
11. Contato de baixa fricção.

O conteúdo foi centralizado em `src/data/portfolio.ts`, com tipos explícitos para os cases e uma única fonte para telefone, e-mail, GitHub, URL e mensagens de intenção.

## 4. Posicionamento profissional aplicado

Título principal:

`Full-Stack Software Engineer`

Descrição complementar:

`Full-Stack & Automation`

Narrativa aplicada:

Willian constrói sistemas web, SaaS e automações entre interface, backend, dados, integrações e entrega. IA aparece como acelerador de pesquisa, implementação e revisão, subordinada a critérios, testes e responsabilidade técnica.

Não foram usados nível hierárquico, anos de experiência, formação acadêmica, disponibilidade ou métricas profissionais.

## 5. Arquitetura de informação

- Navegação sticky: Projetos, Engenharia, Stack, Sobre e Contato.
- Hero com nome, função, proposta de valor, CTAs universais e blueprint interativo.
- Capacidades: produtos full-stack, automação, dados/regras e engenharia assistida por IA.
- Featured Work: Barbô e TecnoBook.
- Automação: browser automation e pipeline LLM/Telegram.
- Engineering Lab: PedidosSaaS apresentado explicitamente como protótipo e spikes.
- Processo: entender, arquitetar, construir com IA, verificar, entregar e aprender.
- Stack por evidência.
- Sobre Willian.
- Bifurcação equivalente entre "Tenho um projeto" e "Estou contratando".
- Contato com WhatsApp, e-mail e GitHub verificados.

## 6. Direção visual

Direção aplicada: Technical Editorial / Precision Engineering.

- Fundo graphite em seções de posicionamento e profundidade técnica.
- Superfícies bone e paper nas seções editoriais.
- Electric cobalt como único accent relevante.
- Grid fino, coordenadas, índices, divisores e labels monoespaçadas.
- Escala tipográfica ampla com `clamp()`.
- Composição assimétrica no hero e ritmo alternado entre seções claras e escuras.
- Screenshot real somente quando considerado seguro para publicação.
- Diagramas CSS/SVG para arquitetura, sem criar telas de produto fictícias.

## 7. Sistema de design

Tokens centralizados em `src/app/globals.css`:

- Cores: ink, ink-soft, bone, paper, accent, muted e line.
- Tipografia: Bricolage Grotesque para interface/display e IBM Plex Mono para metadados técnicos.
- Espaçamento fluido com `clamp()`.
- Três escalas de radius.
- Sombra principal controlada.
- Durações e easing compartilhados.
- Container responsivo em `--shell`.

Os componentes reutilizam classes semânticas como `button`, `eyebrow`, `tag-list`, `case-brief` e `section-shell`.

## 8. Motion e interações

- Entrada inicial do hero com opacity e transform.
- Desenho único das conexões do blueprint.
- Scroll reveal progressivo com CSS `animation-timeline: view()` quando suportado.
- Fallback visível em navegadores sem suporte a scroll-driven animations.
- Hover de profundidade leve em cards.
- Transições de setas, bordas e estados ativos.
- Nenhum autoplay, canvas contínuo, WebGL, cursor customizado ou scroll hijacking.
- Nenhuma biblioteca de motion adicionada.

`prefers-reduced-motion: reduce` desativa scroll suave, animações e transições relevantes, mantendo todo o conteúdo visível e funcional.

## 9. Signature interaction

O hero contém um Interactive System Blueprint com o fluxo:

`UI -> API -> Auth -> Business Rules -> Database -> Integrations`

Características:

- Nodes são botões semânticos e operáveis por teclado.
- Foco, hover e toque alteram o estado selecionado.
- A descrição do node ativo é atualizada em região `aria-live`.
- Conexões são desenhadas uma vez ao carregar.
- Há reação de perspectiva discreta ao pointer no desktop.
- Em reduced motion, perspectiva e animações são desativadas.
- O diagrama continua compreensível sem movimento.

## 10. Cases escolhidos e motivo

### Barbô

Case principal por ser a evidência mais forte de produto full-stack, dados, autenticação, multi-tenancy, concorrência, testes, integrações e controle de IA.

### TecnoBook

Segundo case por demonstrar domínio B2B e uma fronteira menos comum: software web conectado a impressão e hardware via WebUSB, Web Serial e Capacitor.

### PedidosSaaS

Apresentado como Engineering Lab, não como SaaS pronto. Demonstra discovery, ADRs, protocolo de evidência, testes, webhook experimental e hardening de staging.

### Automação de browser

Incluída como recorte arquitetural de Python, Patchright, asyncio, contextos isolados, máquina de estados e painel FastAPI/React. Mídias e linguagem reputacionalmente sensíveis foram removidas.

### Pipeline LLM/Telegram

Incluído como case compacto de Telethon, pré-filtro, LangChain/Gemini, Pydantic structured output e notificação Telegram.

## 11. Claims removidos

- Senior Software Engineer e equivalentes em português.
- Faixa Pleno/Sênior.
- Quatro anos ou qualquer número de anos de experiência.
- ADS em andamento.
- Professional Views e qualquer contador artificial.
- Especialização absoluta em arquitetura, segurança, IA ou DevOps.
- Arquitetura escalável e alta performance sem medição.
- Produção como afirmação irrestrita.
- 100% Global.
- Tempo médio de resposta.
- Vue, Django, Selenium, OpenCV, n8n e Nginx como competências públicas.
- Framer Motion como competência.
- Computer Vision.
- Aplicativo Android nativo ou APK publicado.
- Garantia de ingressos e números de resultados.
- Anti-detecção, bypass e CAPTCHA como headline.
- Consultoria e liderança sem evidência externa.

## 12. Claims utilizados e evidências

| Claim público | Evidência usada |
|---|---|
| Full-Stack Software Engineer | Barbô e TecnoBook cobrem frontend, backend/BaaS, banco, autenticação, integrações e entrega |
| TypeScript, React e Next.js | Código auditado em Barbô, TecnoBook e portfólio |
| PostgreSQL e Prisma | Schema, migrations, RLS, constraints e testes do Barbô |
| Multi-tenancy em profundidade | Contexto transacional, papel restrito e PostgreSQL FORCE RLS no Barbô |
| Concorrência de agenda | Exclusion constraint GiST no PostgreSQL |
| IA com controle | Tool gating por módulo e confirmação humana antes de escrita |
| Testes | Suítes de isolamento, autenticação, concorrência, billing, webhook e IA no Barbô |
| Sistema B2B multi-loja | Fluxos TecnoBook de O.S., clientes, estoque, caixa, relatórios e impressão |
| Integração software/hardware | WebUSB, Web Serial e Capacitor USB no TecnoBook |
| Automação Python | Orquestração asyncio, Patchright, contextos isolados e FastAPI |
| Pipeline LLM | Telethon, pré-filtro, LangChain/Gemini e Pydantic structured output |
| Engenharia assistida por IA | Protocolo de evidência, gates, ADRs, testes e separação de hipótese/fato no PedidosSaaS |
| Docker e GitHub Actions | Configurações e workflows encontrados nos projetos auditados |

Limitações relevantes são publicadas junto aos cases. Nenhum número de usuário, cliente, receita, uptime, latência ou ganho percentual foi usado.

## 13. Stack pública final

### Principal

- TypeScript
- React
- Next.js
- PostgreSQL
- Prisma

### Automação

- Python
- Patchright
- Playwright
- FastAPI

### Infra / entrega

- Docker
- Git
- GitHub Actions
- Linux / VPS

### Ecossistema

- Supabase
- Capacitor
- LangChain
- SQLite

### Experiência secundária

- Java
- Spring Boot
- MongoDB

## 14. Arquitetura frontend implementada

- `src/app/page.tsx`: composição server-side da homepage e JSON-LD.
- `src/app/layout.tsx`: fontes e metadata.
- `src/data/portfolio.ts`: dados tipados, contatos, cases, stack e mensagens.
- Componentes por seção em `src/components`.
- Client Components limitados a `SiteHeader`, `SystemBlueprint` e `Contact`.
- Demais seções renderizadas como Server Components.
- Mídia pública aprovada renderizada com `next/image`.
- Conteúdo repetível estruturado em arrays tipados.
- Sem biblioteca de estado, UI ou animação.

## 15. Performance

- Todos os vídeos foram removidos da homepage e de `public/`.
- Assets sensíveis, duplicados, sem uso ou oriundos do template foram removidos.
- `public/` passou de aproximadamente 17,62 MiB auditados para os assets aprovados do portfólio.
- As imagens usam `next/image`, dimensões intrínsecas, `sizes` responsivo e lazy loading padrão.
- A homepage é prerenderizada como conteúdo estático.
- Fontes são self-hosted automaticamente por `next/font`.
- Interatividade isolada em três componentes pequenos.
- Motion usa transform/opacity e CSS, sem runtime externo.
- Docker usa output standalone somente no build do container.

Não foi executado Lighthouse. Portanto, não são declarados scores ou ganhos percentuais.

## 16. Acessibilidade

- `lang="pt-BR"`.
- Skip link funcional.
- Landmarks `header`, `nav`, `main`, `section`, `footer`.
- Um único `h1` e hierarquia de headings por seção.
- Menu mobile com `aria-expanded`, `aria-controls`, Escape e conteúdo removido da navegação por foco quando fechado.
- Blueprint com botões, `aria-pressed` e feedback em `aria-live`.
- Formulário com labels associados por nesting, tipos corretos, validação nativa e autocomplete.
- Foco visível global com contraste reforçado.
- Alvos interativos com altura mínima próxima ou superior a 44 px.
- Reduced motion completo.
- Alt text descritivo nas imagens públicas.
- Links externos identificáveis e protegidos com `rel="noreferrer"`.

Foi feita validação manual e programática direcionada. Não foi executada auditoria automatizada com axe, portanto conformidade WCAG 2.2 AA absoluta não é declarada.

## 17. Responsividade

Breakpoints e composição foram revisados para desktop, tablet e mobile.

Validação programática em 1440 px, 390 px e 320 px confirmou:

- `scrollWidth` igual a `clientWidth`.
- Sem overflow horizontal.
- Um `main`.
- Um `h1`.
- Dez seções renderizadas.
- Nenhuma âncora interna sem destino.

Capturas headless foram revisadas para hero, featured work e contato em desktop/mobile. Grids passam de quatro ou duas colunas para uma coluna, o blueprint mantém nodes legíveis, os CTAs ocupam a largura disponível e o formulário preserva touch targets.

## 18. SEO

- Título: `Willian Brendo — Full-Stack Software Engineer`.
- Description factual sobre Full-Stack, SaaS, automação, IA assistida e stack principal.
- Canonical verificado para `https://portifolio-ivory-tau.vercel.app`.
- Open Graph com tipo profile e imagem dinâmica 1200x630.
- Twitter card `summary_large_image`.
- Autor e creator.
- Favicon/ícone WB atualizado.
- `robots.ts` e `sitemap.ts`.
- JSON-LD com `Person` e `ProfilePage`.
- GitHub como único `sameAs` verificado.
- Nenhum LinkedIn inventado.

Metadata, canonical, OG image, Twitter card e JSON-LD foram encontrados no HTML final servido.

## 19. Testes e validações executados

### Qualidade obrigatória

| Comando | Resultado real |
|---|---|
| `npm run lint` | Passou, sem erros ou warnings |
| `npm run typecheck` | Passou, sem erros |
| `npm run build` | Passou com Next.js 16.3.0; 7/7 páginas estáticas geradas |
| `git diff --check` | Passou, sem whitespace errors |

### Segurança e dependências

| Comando | Resultado real |
|---|---|
| `npm audit --omit=dev` após upgrade | 0 vulnerabilidades |
| `npm audit` após `npm audit fix` | 0 vulnerabilidades |

### Docker

| Comando | Resultado real |
|---|---|
| `docker build --tag portfolio-rebuild-check .` | Passou |
| `docker run --rm --detach --publish 3101:3000 ...` | Container iniciou |
| `curl http://127.0.0.1:3101` | HTTP 200 |
| `docker inspect --format '{{.Config.User}}' ...` | Usuário `nextjs` |

### Fluxos e renderização

- Homepage servida localmente por `npm run start` e validada por `curl`.
- `robots.txt` e `sitemap.xml` responderam com conteúdo esperado.
- Headers CSP, Referrer-Policy, X-Content-Type-Options, X-Frame-Options e Permissions-Policy foram conferidos na resposta.
- Capturas com Google Chrome headless em 1440x1200, 390x844, 390x1700 e seções específicas via Chrome DevTools Protocol.
- Menu mobile abriu, atualizou `aria-expanded`, fechou e ocultou links novamente.
- Blueprint atualizou `aria-pressed` e descrição ao selecionar outro node.
- Formulário vazio retornou inválido pela validação nativa.
- Dois campos obrigatórios foram encontrados: nome e mensagem.
- Imagem contém `width="1920"` e `height="1156"` no HTML.
- Busca final pelos termos proibidos não encontrou claims no código público; correspondências da busca combinada ficaram restritas a hashes do lockfile.

### Warnings e limitações da validação

- O Chrome headless emitiu mensagens ambientais de MESA/Vulkan e Google Cloud Messaging; as capturas foram geradas normalmente e isso não veio da aplicação.
- O Docker informou que existe uma nova versão major do npm; nenhuma atualização global foi feita.
- Não há framework E2E persistido no repositório. Os fluxos críticos foram validados via browser headless/CDP para evitar adicionar infraestrutura desproporcional.
- Lighthouse e axe não foram executados.

## 20. Dependências adicionadas/removidas

Nenhuma biblioteca de runtime, UI ou motion foi adicionada.

Alterações diretas:

- `next`: 16.2.4 -> 16.3.0.
- `eslint-config-next`: 16.2.4 -> 16.3.0.

Justificativa: o primeiro `npm audit` encontrou vulnerabilidades altas na versão instalada e indicou correção em Next.js 16.3.0. A atualização é minor e motivada por segurança, não um upgrade geral da stack.

`npm audit fix` atualizou dependências transitivas compatíveis no lockfile. O resultado final foi `0 vulnerabilities`.

O arquivo legado `tailwind.config.ts` foi removido porque o projeto usa Tailwind CSS 4 via `@import "tailwindcss"` e tokens CSS; a configuração antiga não estava carregada e divergia do tema real.

## 21. Arquivos principais alterados

- `src/app/page.tsx`
- `src/app/layout.tsx`
- `src/app/globals.css`
- `src/app/opengraph-image.tsx`
- `src/app/robots.ts`
- `src/app/sitemap.ts`
- `src/app/icon.svg`
- `src/data/portfolio.ts`
- `src/components/Hero.tsx`
- `src/components/SystemBlueprint.tsx`
- `src/components/FeaturedWork.tsx`
- `src/components/Automation.tsx`
- `src/components/EngineeringLab.tsx`
- `src/components/Process.tsx`
- `src/components/Stack.tsx`
- `src/components/About.tsx`
- `src/components/IntentPaths.tsx`
- `src/components/Contact.tsx`
- `src/components/SiteHeader.tsx`
- `src/components/Footer.tsx`
- `next.config.ts`
- `Dockerfile`
- `.dockerignore`
- `docker-compose.yml`
- `package.json`
- `package-lock.json`
- `README.md`

Componentes antigos acoplados, contador artificial e galerias foram removidos. Assets inseguros, duplicados ou sem uso também foram removidos de `public/`.

## 22. Pontos que ainda dependem de Willian

- Confirmar a cronologia profissional antes de citar qualquer duração de experiência.
- Confirmar quais projetos foram próprios, pagos, freelancer ou estudo.
- Confirmar responsabilidade individual e eventuais colaboradores por case.
- Confirmar status operacional atual de Barbô e TecnoBook.
- Obter métricas reais somente com fonte verificável.
- Confirmar autorização pública para nome, marca e screenshot do TecnoBook; a tela usa a identidade interna OrderSistem.
- Produzir screenshots sanitizados da impressão do TecnoBook e das automações em ambiente autorizado.
- Atualizar a bio pública do GitHub, atualmente desalinhada ao posicionamento do portfólio.
- Fornecer LinkedIn correto caso deva ser publicado.
- Reconstruir e aprovar o currículo antes de exibir download.
- Definir disponibilidade em configuração somente quando houver processo para mantê-la atualizada.
- Informar um domínio próprio caso deva substituir o canonical Vercel.
- Validar se os projetos privados podem receber links públicos ou demonstrações controladas.

## 23. Próximas melhorias opcionais

- Criar screenshots sanitizados e autorizados das integrações de hardware.
- Adicionar páginas individuais de case quando houver mais material factual.
- Publicar currículo revisado e habilitar CTA configurável.
- Adicionar LinkedIn após confirmação do perfil.
- Introduzir teste E2E pequeno com Playwright para navegação, menu, formulário e acessibilidade básica.
- Executar Lighthouse CI e estabelecer budgets antes de declarar resultados de performance.
- Executar axe e revisão manual com leitor de tela.
- Migrar do domínio Vercel para domínio próprio e atualizar canonical/structured data.
- Coletar analytics somente com objetivo, consentimento e configuração de privacidade adequados.
- Revisar e corrigir os riscos técnicos dos projetos apontados na auditoria antes de publicar código ou demos.

## 24. Checklist final

- [x] Relatório de auditoria profissional lido integralmente.
- [x] Trabalho local `debug/` preservado.
- [x] Posicionamento Full-Stack Software Engineer aplicado.
- [x] Senioridade e anos removidos.
- [x] Métricas falsas removidas.
- [x] Stack pública hierarquizada por evidência.
- [x] Barbô tratado como case principal.
- [x] TecnoBook apresentado com software/hardware e limitações.
- [x] PedidosSaaS rotulado como protótipo + spikes.
- [x] Automação apresentada com linguagem profissional.
- [x] Uso de IA explicado por processo e controles.
- [x] Dois caminhos de conversão equivalentes.
- [x] Contatos reais centralizados e verificados.
- [x] GitHub verificado e publicado.
- [x] Currículo antigo não publicado.
- [x] LinkedIn não inventado.
- [x] Assets sensíveis removidos.
- [x] Screenshot real seguro mantido.
- [x] Mídia real sanitizada do Barbô integrada.
- [x] Metadata, OG, Twitter, canonical, robots, sitemap e JSON-LD implementados.
- [x] Navegação por teclado e foco visível implementados.
- [x] Reduced motion implementado.
- [x] Desktop, mobile e 320 px revisados.
- [x] Lint passou.
- [x] Typecheck passou.
- [x] Build passou.
- [x] Docker build e execução passaram.
- [x] `npm audit` final com zero vulnerabilidades.
- [x] Nenhum commit, push ou deploy executado.

## 25. Integração de mídia Barbô

### Assets utilizados

Somente quatro capturas aprovadas foram copiadas para `public/projects/barbo/`:

- `dashboard-mobile.png`: visão operacional principal.
- `agendamento-mobile.png`: experiência pública do cliente.
- `agenda-mobile.png`: agenda e estados dos atendimentos.
- `agenda-desktop.png`: prova secundária da experiência em viewport ampla.

Os arquivos copiados mantêm os mesmos hashes SHA-256 dos originais selecionados em `Barbearia(SaaS)/artifacts/barbo-media/selected/`.

### Assets deliberadamente não utilizados

- `barbo-financeiro-mobile-01.png` e `barbo-financeiro-desktop-01.png`, porque valores demonstrativos poderiam ser lidos rapidamente como resultados comerciais reais.
- Todos os arquivos de `raw/`.
- Contact sheet.
- Demais screenshots selecionados fora do escopo aprovado.

### Estratégia visual

- O componente tipado `ProductView` foi inserido somente no case Barbô, entre arquitetura/brief e decisões de engenharia.
- O dashboard mobile é a peça dominante.
- Agendamento e Agenda formam uma composição secundária assimétrica, sem device frame, perspectiva, autoplay ou movimento contínuo.
- A Agenda desktop aparece abaixo como uma faixa editorial com `overflow: hidden`, `object-fit: cover` e `object-position: center top`.
- As decisões sobre multi-tenancy, RLS, concorrência, IA, testes, stack e nota de evidência foram preservadas integralmente.
- TecnoBook não foi redesenhado nem teve conteúdo alterado.

### Tratamento mobile

- Em `390px`, o dashboard aparece primeiro com largura útil de `336px`.
- As duas telas secundárias usam uma região horizontal focável com `overflow-x: auto` e `scroll-snap-type: x mandatory`.
- O trilho tem `336px` de largura visível e `592px` de conteúdo, com deslocamento manual verificado até `256px`.
- A página não apresenta overflow horizontal global.
- A captura desktop de suporte muda para proporção `4 / 3` no mobile para preservar o contexto da interface.

### Tratamento desktop

- Em `1440px`, o dashboard renderiza como principal com `384px` de largura de coluna.
- As telas secundárias renderizam em duas colunas menores e com deslocamento vertical estático.
- A captura desktop usa crop `9 / 4`, preservando título, filtros e atendimentos essenciais sem competir com as telas mobile.

### Origem e dados

As quatro capturas mostram a interface real do Barbô em ambiente Docker isolado, com banco separado, conta fictícia, dados demonstrativos e nenhuma integração externa configurada. Nenhum número visível foi convertido em claim ou copy do case.

### Performance e validações

- Volume original dos quatro PNGs: aproximadamente `928 KiB` no total.
- Renderização por `next/image`, com dimensões intrínsecas, `sizes` responsivo, alt text factual e carregamento lazy.
- Nenhuma imagem recebeu preload ou `priority`, pois o bloco está abaixo da dobra.
- Nenhum vídeo, biblioteca de galeria, biblioteca de motion ou dependência foi adicionado.
- QA visual em `1440x1000` e `390x844`.
- Quatro imagens carregadas e decodificadas sem erro de console ou exceção de página.
- `npm run lint`: passou.
- `npm run typecheck`: passou.
- `npm run build`: passou.
- `git diff --check`: passou.
