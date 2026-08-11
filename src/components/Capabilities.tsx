import { capabilities } from "@/data/portfolio";

export function Capabilities() {
  return (
    <section id="capacidades" className="section section-bone capabilities-section" aria-labelledby="capabilities-title">
      <div className="section-shell">
        <div className="section-intro reveal">
          <p className="eyebrow">Capacidade demonstrada</p>
          <h2 id="capabilities-title">O trabalho atravessa o sistema inteiro.</h2>
          <p>
            Menos lista de ferramentas. Mais clareza sobre as partes que precisam
            funcionar juntas para um produto sair da ideia.
          </p>
        </div>

        <div className="capability-grid">
          {capabilities.map((capability) => (
            <article className="capability-card reveal" key={capability.index}>
              <div className="card-index">
                <span>{capability.index}</span>
                <span>{capability.label}</span>
              </div>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
              <small>{capability.proof}</small>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
