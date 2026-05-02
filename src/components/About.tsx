export function About() {
  const pillars = ["Escalabilidade", "Automação", "Performance"];

  return (
    <section id="sobre" className="py-24">
      <div className="mx-auto px-6">
        <h2 className="mb-8 text-center text-3xl font-bold text-white">
          Sobre a Engenharia
        </h2>

        <div className="mx-auto max-w-3xl space-y-6 text-center text-lg leading-relaxed text-gray-300">
          <p>
            Atuo como Engenheiro de Software Full-Stack, focado em resolver
            gargalos operacionais de empresas através de arquiteturas sólidas em
            back-end e front-end.
          </p>
          <p>
            Tenho especialidade em automação de tarefas complexas, incluindo web
            scraping e fluxos sistêmicos com visão computacional, com
            preferência por desenvolver e orquestrar deploys em ambientes
            Linux/Ubuntu de alta performance.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar}
              className="rounded-xl border border-brand/20 bg-brand/5 px-4 py-6 text-center transition-colors hover:bg-brand/10"
            >
              <span className="font-semibold text-white">{pillar}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
