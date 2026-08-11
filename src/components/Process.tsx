const processSteps = [
  {
    index: "01",
    title: "Entender",
    text: "Problema, contexto, restrições e critérios de aceite antes de escolher tecnologia.",
  },
  {
    index: "02",
    title: "Arquitetar",
    text: "Dados, boundaries, riscos e trade-offs transformados em uma direção testável.",
  },
  {
    index: "03",
    title: "Construir com IA",
    text: "LLMs aceleram pesquisa, alternativas, implementação e revisão dentro do escopo definido.",
  },
  {
    index: "04",
    title: "Verificar",
    text: "Typecheck, testes, segurança, revisão do comportamento e evidência contra o código real.",
  },
  {
    index: "05",
    title: "Entregar e aprender",
    text: "Build, deploy, observação do resultado e evolução orientada pelo que foi realmente validado.",
  },
] as const;

export function Process() {
  return (
    <section className="section section-bone process-section" aria-labelledby="process-title">
      <div className="section-shell">
        <div className="process-heading reveal">
          <p className="eyebrow">Como eu construo</p>
          <h2 id="process-title">IA é multiplicador de execução. Responsabilidade técnica não é delegada.</h2>
          <p>
            O processo mais recente explicita gates contra invenção, separa hipótese de
            fato e exige verificação antes de promover um experimento a produto.
          </p>
        </div>

        <ol className="process-list">
          {processSteps.map((step) => (
            <li className="reveal" key={step.index}>
              <span>{step.index}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>

        <blockquote className="process-quote reveal">
          <span aria-hidden="true">“</span>
          <p>Ferramentas aceleram o caminho. Critério, validação e consequência continuam humanos.</p>
        </blockquote>
      </div>
    </section>
  );
}
