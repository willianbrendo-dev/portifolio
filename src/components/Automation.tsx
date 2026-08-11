import { automationCases } from "@/data/portfolio";

export function Automation() {
  return (
    <section className="section section-bone automation-section" aria-labelledby="automation-title">
      <div className="section-shell">
        <div className="automation-heading reveal">
          <div>
            <p className="eyebrow">Automação</p>
            <h2 id="automation-title">Software para processos que não param no formulário.</h2>
          </div>
          <p>
            Browser, mensageria e modelos de linguagem entram como componentes de
            um fluxo operável, não como demonstrações isoladas.
          </p>
        </div>

        <div className="automation-grid">
          {automationCases.map((automation) => (
            <article className="automation-card reveal" key={automation.index}>
              <header>
                <span>{automation.index}</span>
                <h3>{automation.title}</h3>
              </header>
              <p>{automation.description}</p>
              <div className="automation-flow" aria-label={`Fluxo técnico de ${automation.title}`}>
                {automation.flow.map((step, index) => (
                  <div key={step}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{step}</strong>
                  </div>
                ))}
              </div>
              <ul className="inline-stack" aria-label="Tecnologias utilizadas">
                {automation.stack.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
