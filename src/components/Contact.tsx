export function Contact() {
  return (
    <section id="contato" className="bg-card py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="mb-8 text-center text-3xl font-bold text-foreground">
          Vamos Conversar
        </h2>
        <p className="mb-12 text-center text-gray-400">
          Aberto a propostas B2B, consultorias em arquitetura e projetos de
          automacao complexos.
        </p>

        <form className="space-y-5 rounded-2xl border border-border bg-background p-6 shadow-lg shadow-black/10">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Nome
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground outline-none transition focus:border-brand"
              placeholder="Seu nome"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              E-mail Corporativo
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground outline-none transition focus:border-brand"
              placeholder="nome@empresa.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full resize-none rounded-lg border border-border bg-card px-4 py-3 text-foreground outline-none transition focus:border-brand"
              placeholder="Descreva o desafio tecnico ou objetivo do projeto"
            />
          </div>

          <button
            type="button"
            className="w-full rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/20 transition hover:bg-blue-500 sm:w-auto"
          >
            Enviar Mensagem
          </button>
        </form>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 text-center text-sm text-gray-400 sm:flex-row sm:gap-6">
          <a
            href="mailto:willianbrendo.dev@gmail.com"
            className="transition-colors hover:text-brand"
          >
            willianbrendo.dev@gmail.com
          </a>
          <a
            href="https://wa.me/5586981854932"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-brand"
          >
            WhatsApp: 86981854932
          </a>
        </div>
      </div>
    </section>
  );
}
