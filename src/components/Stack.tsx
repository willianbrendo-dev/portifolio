import { stackGroups } from "@/data/portfolio";

export function Stack() {
  return (
    <section id="stack" className="stack-section" aria-labelledby="stack-title">
      <div className="section-shell">
        <div className="stack-heading reveal">
          <div>
            <p className="eyebrow eyebrow-light">Stack por evidência</p>
            <h2 id="stack-title">Profundidade primeiro. Amplitude com contexto.</h2>
          </div>
          <p>
            A hierarquia reflete o que aparece de forma consistente nos projetos,
            não cada biblioteca já utilizada.
          </p>
        </div>

        <div className="stack-table reveal">
          {stackGroups.map((group, index) => (
            <div className="stack-row" key={group.label}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{group.label}</h3>
                <p>{group.note}</p>
              </div>
              <ul>
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
