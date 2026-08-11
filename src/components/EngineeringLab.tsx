const labEvidence = [
  {
    index: "01",
    title: "Discovery antes do framework",
    text: "Problema, restrições, hipóteses e critérios são separados antes da implementação do produto.",
  },
  {
    index: "02",
    title: "Spikes para riscos reais",
    text: "Webhook experimental persiste antes do ACK, cifra payloads e trata replay e deduplicação.",
  },
  {
    index: "03",
    title: "Decisões registradas",
    text: "ADRs e protocolo de evidência distinguem fato, inferência, hipótese e item ainda não verificado.",
  },
  {
    index: "04",
    title: "Ambiente restrito",
    text: "O staging experimental usa container non-root, filesystem read-only, redes isoladas e imagens fixadas.",
  },
] as const;

export function EngineeringLab() {
  return (
    <section id="engenharia" className="lab-section" aria-labelledby="lab-title">
      <div className="lab-grid" aria-hidden="true" />
      <div className="section-shell">
        <div className="lab-heading reveal">
          <div>
            <p className="eyebrow eyebrow-light">Engineering Lab · PedidosSaaS</p>
            <h2 id="lab-title">Pensar antes de construir também é entrega.</h2>
          </div>
          <div className="status-stamp">
            <span>STATUS</span>
            <strong>Protótipo + spikes</strong>
            <small>Não é um SaaS finalizado</small>
          </div>
        </div>

        <p className="lab-lead reveal">
          O valor deste projeto está no processo: discovery, prototipação, ADRs,
          testes e provas técnicas usados para reduzir incerteza antes do MVP.
        </p>

        <div className="lab-evidence">
          {labEvidence.map((item) => (
            <article className="reveal" key={item.index}>
              <span>{item.index}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <div className="lab-pipeline reveal" aria-label="Pipeline experimental do PedidosSaaS">
          <div><small>INPUT</small><strong>Webhook sandbox</strong></div>
          <i aria-hidden="true">→</i>
          <div><small>GATE</small><strong>Validar + limitar</strong></div>
          <i aria-hidden="true">→</i>
          <div><small>COMMIT</small><strong>Persistir + cifrar</strong></div>
          <i aria-hidden="true">→</i>
          <div><small>OUTPUT</small><strong>ACK / replay</strong></div>
        </div>
      </div>
    </section>
  );
}
