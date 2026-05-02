import Image from "next/image";

export function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center gap-12 px-6 py-28 lg:flex-row lg:justify-between lg:py-20"
    >
      <div className="max-w-2xl text-center lg:text-left">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-brand">
          Software Engineering
        </p>
        <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          Willian Brendo
        </h1>
        <p className="mt-5 text-2xl font-semibold text-brand">
          Engenheiro de Software Sênior
        </p>
        <p className="mb-8 max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl">
          Foco em arquiteturas escaláveis e automação de alto nível.
          Especialista em resolver gargalos complexos com Python/OpenCV e
          construir aplicações Full-Stack de ponta com Next.js e Node.js.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
          <a
            href="https://wa.me/5586981854932"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-brand px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-brand/20 transition hover:bg-blue-500"
          >
            Falar com Especialista
          </a>
          <a
            href="#projetos"
            className="rounded-lg border border-border px-6 py-3 text-center text-sm font-semibold text-foreground transition hover:border-brand hover:text-brand"
          >
            Ver Projetos
          </a>
        </div>
      </div>

      <div className="w-full max-w-sm lg:max-w-md">
        <Image
          src="/profile.jpg"
          alt="Willian Brendo"
          width={500}
          height={500}
          priority
          className="rounded-2xl border border-border object-cover object-top shadow-2xl shadow-black/30"
        />
      </div>
    </section>
  );
}
