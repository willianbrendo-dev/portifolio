import { Icon } from "@/components/Icons";
import { SystemBlueprint } from "@/components/SystemBlueprint";
import { getWhatsAppUrl, siteConfig } from "@/data/portfolio";

export function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-shell">
        <div className="hero-copy">
          <p className="hero-kicker">
            <span>WB / 2026</span>
            {siteConfig.role}
          </p>

          <h1 id="hero-title">
            <span>{siteConfig.name}</span>
            Produtos e automações,
            <br />
            <em>do dado ao deploy.</em>
          </h1>

          <p className="hero-lead">
            Construo sistemas web e SaaS de ponta a ponta. IA acelera a execução;
            critérios, testes e decisões técnicas mantêm a engenharia sob controle.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projetos">
              Explorar projetos <Icon name="arrow" />
            </a>
            <a className="button button-ghost-dark" href={getWhatsAppUrl()} target="_blank" rel="noreferrer">
              Entrar em contato <Icon name="external" size={16} />
            </a>
          </div>

          <ul className="hero-disciplines" aria-label="Áreas de atuação">
            <li>Full-Stack Products</li>
            <li>Automation</li>
            <li>AI-assisted Engineering</li>
          </ul>
        </div>

        <div className="hero-visual">
          <SystemBlueprint />
        </div>
      </div>

      <a className="scroll-cue" href="#capacidades">
        <span>Continuar</span>
        <span aria-hidden="true">↓</span>
      </a>
    </section>
  );
}
