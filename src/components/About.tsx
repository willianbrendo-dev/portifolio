const metrics = [
  { value: "Full-Stack", sub: "Backend · Frontend · DevOps" },
  { value: "Automação", sub: "Web · Visão Computacional · IA" },
  { value: "Produção", sub: "Entregues e rodando em VPS real" },
  { value: "< 24h", sub: "Tempo médio de resposta" },
];

const pillars = [
  {
    icon: "⬡",
    title: "Escalabilidade",
    desc: "Arquiteturas que crescem com o negócio — sem reescrever tudo do zero.",
  },
  {
    icon: "⚡",
    title: "Automação",
    desc: "Elimino trabalho manual repetitivo com bots, pipelines e integrações robustas.",
  },
  {
    icon: "▲",
    title: "Performance",
    desc: "Sistemas rápidos e estáveis, otimizados da query ao deploy.",
  },
];

export function About() {
  return (
    <section id="sobre" className="relative py-28">
      {/* Dot grid background */}
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#4f8ef7]">
            Quem está por trás do código
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Engenharia que gera{" "}
            <span className="text-gradient">resultado de negócio</span>
          </h2>
        </div>

        {/* Two columns */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text */}
          <div className="space-y-5 text-base leading-relaxed text-[#6b85a8] sm:text-lg">
            <p>
              Atuo como <span className="font-semibold text-[#dce8f8]">Engenheiro de Software Full-Stack</span>,
              com foco em resolver gargalos operacionais de empresas através de
              arquiteturas sólidas e automações de alto nível.
            </p>
            <p>
              Tenho especialidade em sistemas de automação complexos — incluindo
              web scraping avançado, visão computacional e bots com anti-detecção —
              e em orquestrar deploys robustos em ambientes{" "}
              <span className="font-semibold text-[#dce8f8]">Linux/Ubuntu com Docker</span>.
            </p>
            <p>
              Entrego código que vai para produção e permanece lá: testado,
              documentado e fácil de manter.
            </p>
          </div>

          {/* Metrics grid */}
          <div className="grid grid-cols-2 gap-4">
            {metrics.map((m) => (
              <div
                key={m.value}
                className="card-premium flex flex-col justify-between gap-2 p-5"
              >
                <p className="text-xl font-bold text-white">{m.value}</p>
                <p className="text-xs text-[#6b85a8]">{m.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pillars */}
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="group card-premium p-6 transition-all hover:shadow-[0_4px_32px_rgba(79,142,247,0.1)]"
            >
              <div className="mb-4 text-2xl text-[#4f8ef7]">{p.icon}</div>
              <h3 className="mb-2 font-semibold text-white">{p.title}</h3>
              <p className="text-sm leading-relaxed text-[#6b85a8]">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
