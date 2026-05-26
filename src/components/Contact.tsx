"use client";

const trust = [
  { icon: "⚡", text: "Resposta em até 24h" },
  { icon: "🔒", text: "Sigilo total do projeto" },
  { icon: "🌎", text: "Atendimento 100% remoto" },
];

export function Contact() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const text = [
      "Olá, Willian! Vim pelo seu portfólio.",
      name && `Nome: ${name}`,
      email && `E-mail: ${email}`,
      message && `Mensagem: ${message}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/5586981854932?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <section id="contato" className="relative bg-[#0c1525] py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#4f8ef7]/30 to-transparent" />

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#4f8ef7]">
            Próximo passo
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Vamos transformar seu{" "}
            <span className="text-gradient">desafio em solução</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-[#6b85a8]">
            Aberto a propostas B2B, consultorias em arquitetura e projetos de automação complexos.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-5">
          {/* Trust sidebar */}
          <div className="flex flex-col justify-center gap-6 lg:col-span-2">
            {trust.map((t) => (
              <div key={t.text} className="flex items-center gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-[#1a2d4a] bg-[#070c1b] text-lg">
                  {t.icon}
                </div>
                <span className="text-sm text-[#6b85a8]">{t.text}</span>
              </div>
            ))}

            <div className="mt-4 rounded-xl border border-[#1a2d4a] bg-[#070c1b] p-5">
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[#4f8ef7]">
                Contato direto
              </p>
              <a
                href="mailto:willianbrendo.dev@gmail.com"
                className="block text-sm text-[#6b85a8] transition-colors hover:text-white"
              >
                willianbrendo.dev@gmail.com
              </a>
              <a
                href="https://wa.me/5586981854932"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-sm text-[#6b85a8] transition-colors hover:text-white"
              >
                WhatsApp: +55 86 98185-4932
              </a>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="card-premium lg:col-span-3 p-7 space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#6b85a8]">
                  Nome
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Seu nome"
                  className="w-full rounded-lg border border-[#1a2d4a] bg-[#070c1b] px-4 py-3 text-sm text-[#dce8f8] placeholder-[#6b85a8]/60 outline-none transition focus:border-[#4f8ef7]/60 focus:ring-1 focus:ring-[#4f8ef7]/20"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#6b85a8]">
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="nome@empresa.com"
                  className="w-full rounded-lg border border-[#1a2d4a] bg-[#070c1b] px-4 py-3 text-sm text-[#dce8f8] placeholder-[#6b85a8]/60 outline-none transition focus:border-[#4f8ef7]/60 focus:ring-1 focus:ring-[#4f8ef7]/20"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#6b85a8]">
                Desafio ou Projeto
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Descreva o desafio técnico, automação desejada ou objetivo do projeto..."
                className="w-full resize-none rounded-lg border border-[#1a2d4a] bg-[#070c1b] px-4 py-3 text-sm text-[#dce8f8] placeholder-[#6b85a8]/60 outline-none transition focus:border-[#4f8ef7]/60 focus:ring-1 focus:ring-[#4f8ef7]/20"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-[#4f8ef7] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_4px_24px_rgba(79,142,247,0.3)] transition-all hover:shadow-[0_4px_32px_rgba(79,142,247,0.5)] hover:brightness-110"
            >
              Enviar via WhatsApp →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
