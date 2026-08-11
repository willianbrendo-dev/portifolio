import { Icon } from "@/components/Icons";
import { getWhatsAppUrl } from "@/data/portfolio";

const paths = [
  {
    index: "01",
    title: "Tenho um projeto",
    text: "SaaS, sistema interno, automação ou integração para transformar um processo em software.",
    link: getWhatsAppUrl("projeto"),
    action: "Conversar sobre o projeto",
  },
  {
    index: "02",
    title: "Estou contratando",
    text: "Full-Stack Software Engineering com TypeScript, React, Next.js, dados e automação.",
    link: getWhatsAppUrl("contratacao"),
    action: "Conversar sobre a oportunidade",
  },
] as const;

export function IntentPaths() {
  return (
    <section className="intent-section" aria-labelledby="intent-title">
      <div className="section-shell">
        <div className="intent-heading reveal">
          <p className="eyebrow">Próximo contexto</p>
          <h2 id="intent-title">Dois caminhos. A mesma conversa objetiva.</h2>
        </div>

        <div className="intent-grid">
          {paths.map((path) => (
            <article className="intent-card reveal" key={path.index}>
              <span>{path.index}</span>
              <h3>{path.title}</h3>
              <p>{path.text}</p>
              <a href={path.link} target="_blank" rel="noreferrer">
                {path.action} <Icon name="arrow" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
