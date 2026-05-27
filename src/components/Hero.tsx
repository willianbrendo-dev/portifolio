import Image from "next/image";

const stats = [
  { value: "Full-Stack", label: "Especialização" },
  { value: "3+", label: "Cases documentados" },
  { value: "100%", label: "Remoto & Global" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center gap-10 overflow-hidden px-6 py-24 sm:gap-14 lg:flex-row lg:justify-between lg:gap-12 lg:py-20"
    >
      {/* Ambient glow orbs */}
      <div className="glow-orb pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] bg-[#4f8ef7]/8" />
      <div className="glow-orb pointer-events-none absolute -right-40 bottom-20 h-[400px] w-[400px] bg-[#a78bfa]/6" />

      {/* Left — text */}
      <div className="relative z-10 max-w-xl text-center lg:text-left">
        {/* Availability badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1a2d4a] bg-[#0c1525] px-4 py-1.5 text-xs font-medium text-[#6b85a8]">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </span>
          Disponível para novos projetos
        </div>

        {/* Overline */}
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#4f8ef7]">
          Software Engineering
        </p>

        {/* Name */}
        <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
          Willian<br />
          <span className="text-gradient">Brendo</span>
        </h1>

        {/* Role */}
        <p className="mt-4 text-xl font-semibold text-[#dce8f8]/80 sm:text-2xl">
          Engenheiro de Software Sênior
        </p>

        {/* Value prop */}
        <p className="mt-5 max-w-lg text-base leading-relaxed text-[#6b85a8] sm:text-lg">
          Resolvo gargalos operacionais com arquiteturas escaláveis, automação
          inteligente e sistemas Full&#8209;Stack que funcionam em produção — não só em demo.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
          <a
            href="https://wa.me/5586981854932"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-xl bg-[#4f8ef7] px-7 py-3.5 text-center text-sm font-semibold text-white shadow-[0_4px_24px_rgba(79,142,247,0.35)] transition-all hover:shadow-[0_4px_32px_rgba(79,142,247,0.5)] hover:brightness-110"
          >
            Falar com Especialista
          </a>
          <a
            href="#projetos"
            className="rounded-xl border border-[#1a2d4a] px-7 py-3.5 text-center text-sm font-semibold text-[#dce8f8] transition-all hover:border-[#4f8ef7]/60 hover:bg-[#4f8ef7]/8 hover:text-white"
          >
            Ver Cases →
          </a>
        </div>

        {/* Stats */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 lg:justify-start">
          {stats.map((s) => (
            <div key={s.label} className="text-center lg:text-left">
              <p className="text-xl font-bold text-white">{s.value}</p>
              <p className="mt-0.5 text-xs text-[#6b85a8]">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right — photo */}
      <div className="relative z-10 flex-shrink-0">
        <div className="relative h-[360px] w-[300px] sm:h-[420px] sm:w-[340px] lg:h-[480px] lg:w-[380px]">
          {/* Glow ring behind photo */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#4f8ef7]/20 via-transparent to-[#a78bfa]/20 blur-2xl" />
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-[#4f8ef7]/30 to-[#a78bfa]/20 p-px">
            <div className="h-full w-full rounded-3xl overflow-hidden bg-[#0c1525]">
              <Image
                src="/profile.jpg"
                alt="Willian Brendo — Engenheiro de Software Sênior"
                fill
                priority
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
