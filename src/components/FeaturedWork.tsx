import Image from "next/image";
import { featuredCases } from "@/data/portfolio";

const [barbo, tecnobook] = featuredCases;

function TagList({ items, inverse = false }: { items: string[]; inverse?: boolean }) {
  return (
    <ul className={`tag-list ${inverse ? "tag-list-inverse" : ""}`} aria-label="Tecnologias utilizadas">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function BarboArchitecture() {
  return (
    <div className="architecture-map" role="img" aria-label="Arquitetura resumida do Barbô: interfaces acessam aplicação Next.js, que aplica autenticação, contexto de tenant, regras no servidor e controle de ferramentas de IA antes do PostgreSQL e das integrações.">
      <div className="map-coordinate map-coordinate-top">ARCH / BARBO-01</div>
      <div className="map-entry">
        <span>Cliente</span>
        <span>Painel</span>
        <span>Admin</span>
      </div>
      <span className="map-arrow" aria-hidden="true">↓</span>
      <div className="map-core">
        <div>
          <small>APPLICATION</small>
          <strong>Next.js modular</strong>
        </div>
        <ul>
          <li>Auth + roles</li>
          <li>Tenant context</li>
          <li>Server rules</li>
          <li>AI tool gating</li>
        </ul>
      </div>
      <div className="map-branches" aria-hidden="true"><span /><span /><span /></div>
      <div className="map-destinations">
        <div><small>DATA</small><strong>PostgreSQL</strong><span>RLS + constraints</span></div>
        <div><small>DELIVERY</small><strong>Docker</strong><span>GitHub Actions</span></div>
        <div><small>EXTERNAL</small><strong>Integrações</strong><span>Billing + mensageria</span></div>
      </div>
      <div className="map-coordinate map-coordinate-bottom">TENANT / AUTH / DATA / AI</div>
    </div>
  );
}

export function FeaturedWork() {
  return (
    <section id="projetos" className="work-section" aria-labelledby="work-title">
      <div className="section-shell">
        <div className="work-heading reveal">
          <div>
            <p className="eyebrow eyebrow-light">Projetos selecionados</p>
            <h2 id="work-title">A prova está nas decisões.</h2>
          </div>
          <p>
            Cases lidos como sistemas: problema, construção, atuação, trade-offs e
            limites conhecidos.
          </p>
        </div>

        <article className="featured-case reveal" aria-labelledby="barbo-title">
          <header className="case-header">
            <div className="case-number">{barbo.index}</div>
            <div>
              <p>{barbo.eyebrow}</p>
              <h3 id="barbo-title">{barbo.title}</h3>
            </div>
            <p className="case-summary">{barbo.summary}</p>
          </header>

          <div className="case-main-grid">
            <BarboArchitecture />
            <div className="case-brief">
              <div>
                <span>Problema</span>
                <p>{barbo.problem}</p>
              </div>
              <div>
                <span>O que foi construído</span>
                <p>{barbo.built}</p>
              </div>
              <div>
                <span>Atuação</span>
                <p>{barbo.contribution}</p>
              </div>
            </div>
          </div>

          <div className="decision-grid">
            {barbo.engineering.map((decision, index) => (
              <div className="decision-card" key={decision.title}>
                <small>DECISION / {String(index + 1).padStart(2, "0")}</small>
                <h4>{decision.title}</h4>
                <p>{decision.detail}</p>
                <strong>{decision.evidence}</strong>
              </div>
            ))}
          </div>

          <footer className="case-footer">
            <TagList items={barbo.stack} inverse />
            <p><span>Nota de evidência</span>{barbo.status}</p>
          </footer>
        </article>

        <article className="secondary-case reveal" aria-labelledby="tecnobook-title">
          <div className="secondary-case-copy">
            <div className="case-number case-number-dark">{tecnobook.index}</div>
            <p className="eyebrow">{tecnobook.eyebrow}</p>
            <h3 id="tecnobook-title">{tecnobook.title}</h3>
            <p className="secondary-summary">{tecnobook.summary}</p>

            <div className="case-brief case-brief-light">
              <div>
                <span>Problema</span>
                <p>{tecnobook.problem}</p>
              </div>
              <div>
                <span>O que foi construído</span>
                <p>{tecnobook.built}</p>
              </div>
              <div>
                <span>Atuação</span>
                <p>{tecnobook.contribution}</p>
              </div>
            </div>

            <TagList items={tecnobook.stack} />
          </div>

          <div className="secondary-case-visual">
            <figure className="product-frame">
              <div className="product-frame-bar">
                <span>REAL PRODUCT VIEW</span>
                <span>TECNOBOOK / 02</span>
              </div>
              <Image
                src="/tecnobook-dashboard.png"
                alt="Tela real do sistema de gestão com módulos de ordens de serviço, caixa, clientes, estoque, relatórios e impressora"
                width={1920}
                height={1156}
                sizes="(max-width: 900px) 92vw, 52vw"
              />
              <figcaption>
                Tela auditada do sistema, identificada internamente como OrderSistem.
              </figcaption>
            </figure>

            <div className="hardware-flow" aria-label="Fluxo de impressão do TecnoBook">
              {[
                ["01", "Aplicação web"],
                ["02", "Fila Realtime"],
                ["03", "WebUSB / Serial"],
                ["04", "Impressora"],
              ].map(([index, label], itemIndex) => (
                <div key={label}>
                  <span>{index}</span><strong>{label}</strong>
                  {itemIndex < 3 ? <i aria-hidden="true">→</i> : null}
                </div>
              ))}
            </div>
          </div>

          <div className="secondary-decisions">
            {tecnobook.engineering.map((decision) => (
              <div key={decision.title}>
                <h4>{decision.title}</h4>
                <p>{decision.detail}</p>
                <small>{decision.evidence}</small>
              </div>
            ))}
          </div>

          <p className="evidence-note"><span>Nota de evidência</span>{tecnobook.status}</p>
        </article>
      </div>
    </section>
  );
}
