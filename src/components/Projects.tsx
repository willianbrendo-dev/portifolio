"use client";

import { useRef, useState } from "react";

const BRAND = "#4f8ef7";

const projects = [
  {
    title: "TecnoBook",
    badge: "Plataforma SaaS",
    description:
      "Plataforma Full-Stack com gestão completa. Infraestrutura própria hospedada em VPS Linux (Ubuntu), orquestração de deploy automatizado e geração de aplicativo Android (APK) nativo.",
    stack: ["Next.js", "Node.js", "VPS Ubuntu", "Mobile Build"],
    action: "Discutir este Projeto",
    hasTecnoBookMedia: true,
  },
  {
    title: "Automação com Visão Computacional",
    badge: "Automação",
    description:
      "Sistema autônomo capaz de navegar em ambientes web restritos. Usa template matching e análise de tela em tempo real para contornar bloqueios de UI sem intervenção humana.",
    stack: ["Python", "OpenCV", "Playwright", "Automação"],
    action: "Quero uma Automação",
    hasVideoPlaceholder: true,
  },
  {
    title: "Bot de Ingressos FutebolCard",
    badge: "Bot em Produção",
    description:
      "Bot de alta performance para garantia automática de ingressos. Opera múltiplas contas em paralelo com anti-detecção, resolução de CAPTCHA e painel web de controle em tempo real. Testado em produção: 3 ingressos garantidos em evento real.",
    stack: ["Python", "Patchright", "FastAPI", "Docker", "Anti-Detecção"],
    action: "Quero uma Automação Similar",
    hasFutebolCardMedia: true,
  },
];

function MediaThumbPlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#4f8ef7]/80 pl-0.5 text-[10px] text-white shadow-md">
        ▶
      </div>
    </div>
  );
}

export function Projects() {
  const [activeMedia, setActiveMedia] = useState({ type: "video", src: "/tecnobook-demo.webm" });
  const [automationActiveMedia, setAutomationActiveMedia] = useState({ type: "video", src: "/automacao-cv-demo.webm" });
  const [futebolCardActiveMedia, setFutebolCardActiveMedia] = useState({ type: "video", src: "/futebolcard-bot-demo.webm" });
  const scrollRef = useRef<HTMLDivElement>(null);
  const automationScrollRef = useRef<HTMLDivElement>(null);
  const futebolCardScrollRef = useRef<HTMLDivElement>(null);

  const scroll = (ref: React.RefObject<HTMLDivElement | null>, offset: number) =>
    ref.current?.scrollBy({ left: offset, behavior: "smooth" });

  const thumbClass = (active: boolean) =>
    `relative h-16 w-28 flex-shrink-0 cursor-pointer overflow-hidden rounded-lg transition-all ${
      active
        ? "border-2 border-[#4f8ef7] shadow-[0_0_12px_rgba(79,142,247,0.3)]"
        : "border border-[#1a2d4a] hover:border-[#4f8ef7]/50"
    }`;

  return (
    <section id="projetos" className="relative py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#4f8ef7]/20 to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#4f8ef7]">
            Projetos reais · Resultados reais
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Cases de Sucesso &{" "}
            <span className="text-gradient">Engenharia</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`card-premium flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)] ${
                index === projects.length - 1 && projects.length % 2 !== 0 ? "lg:col-span-2" : ""
              }`}
            >
              {/* ── TecnoBook media ── */}
              {project.hasTecnoBookMedia && (
                <>
                  <div className="relative h-64 w-full overflow-hidden bg-black">
                    <div className={`h-full w-full ${activeMedia.type === "video" ? "flex items-center justify-center" : "overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"}`}>
                      {activeMedia.type === "video" ? (
                        <video src={activeMedia.src} autoPlay loop muted playsInline className="h-full w-full object-contain" />
                      ) : (
                        <img src={activeMedia.src} alt="Project Media" className="h-auto w-full object-top" />
                      )}
                    </div>
                    {activeMedia.type === "image" && (
                      <>
                        <div className="pointer-events-none absolute left-0 top-0 h-8 w-full bg-gradient-to-b from-black to-transparent" />
                        <div className="pointer-events-none absolute bottom-0 left-0 h-8 w-full bg-gradient-to-t from-black to-transparent" />
                      </>
                    )}
                  </div>

                  <div className="group relative border-b border-[#1a2d4a] bg-black/60">
                    <button onClick={() => scroll(scrollRef, -150)} className="absolute bottom-0 left-0 top-0 z-10 flex w-10 cursor-pointer items-center justify-center bg-gradient-to-r from-black/90 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                      <span className="text-2xl text-white">‹</span>
                    </button>
                    <div ref={scrollRef} className="flex gap-2 overflow-x-auto p-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                      <div onClick={() => setActiveMedia({ type: "video", src: "/tecnobook-demo.webm" })} className={thumbClass(activeMedia.src === "/tecnobook-demo.webm")}>
                        <video src="/tecnobook-demo.webm" className="h-full w-full object-cover opacity-50" muted />
                        <MediaThumbPlay />
                      </div>
                      {["/tecnobook-dashboard.png", "/tecnobook-modulo1.png"].map((src, i) => (
                        <img key={i} src={src} onClick={() => setActiveMedia({ type: "image", src })} alt={`Screenshot ${i}`} className={thumbClass(activeMedia.src === src)} />
                      ))}
                    </div>
                    <button onClick={() => scroll(scrollRef, 150)} className="absolute bottom-0 right-0 top-0 z-10 flex w-10 cursor-pointer items-center justify-center bg-gradient-to-l from-black/90 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                      <span className="text-2xl text-white">›</span>
                    </button>
                  </div>
                </>
              )}

              {/* ── Automation CV media ── */}
              {project.hasVideoPlaceholder && (
                <>
                  <div className="relative h-64 w-full overflow-hidden bg-black">
                    <div className={`h-full w-full ${automationActiveMedia.type === "video" ? "flex items-center justify-center" : "overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"}`}>
                      {automationActiveMedia.src.includes("automacao-cv-demo") && automationActiveMedia.type === "video" ? (
                        <video src={automationActiveMedia.src} autoPlay loop muted playsInline className="h-full w-full object-contain" />
                      ) : (
                        <img src={automationActiveMedia.src} alt="Automação Media" className="h-auto w-full object-top" />
                      )}
                    </div>
                    {automationActiveMedia.type === "image" && (
                      <>
                        <div className="pointer-events-none absolute left-0 top-0 h-8 w-full bg-gradient-to-b from-black to-transparent" />
                        <div className="pointer-events-none absolute bottom-0 left-0 h-8 w-full bg-gradient-to-t from-black to-transparent" />
                      </>
                    )}
                  </div>

                  <div className="group relative border-b border-[#1a2d4a] bg-black/60">
                    <button onClick={() => scroll(automationScrollRef, -150)} className="absolute bottom-0 left-0 top-0 z-10 flex w-10 cursor-pointer items-center justify-center bg-gradient-to-r from-black/90 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                      <span className="text-2xl text-white">‹</span>
                    </button>
                    <div ref={automationScrollRef} className="flex gap-2 overflow-x-auto p-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                      <div onClick={() => setAutomationActiveMedia({ type: "video", src: "/automacao-cv-demo.webm" })} className={thumbClass(automationActiveMedia.src === "/automacao-cv-demo.webm")}>
                        <video src="/automacao-cv-demo.webm" className="h-full w-full object-cover opacity-50" muted />
                        <MediaThumbPlay />
                      </div>
                      {["/cv-codigo.png", "/cv-target.png", "/cv-sucesso.png"].map((src, i) => (
                        <img key={i} src={src} onClick={() => setAutomationActiveMedia({ type: "image", src })} alt={`Automação ${i}`} className={thumbClass(automationActiveMedia.src === src)} />
                      ))}
                    </div>
                    <button onClick={() => scroll(automationScrollRef, 150)} className="absolute bottom-0 right-0 top-0 z-10 flex w-10 cursor-pointer items-center justify-center bg-gradient-to-l from-black/90 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                      <span className="text-2xl text-white">›</span>
                    </button>
                  </div>
                </>
              )}

              {/* ── FutebolCard media ── */}
              {project.hasFutebolCardMedia && (
                <>
                  <div className="relative h-64 w-full overflow-hidden bg-black">
                    <div className="flex h-full w-full items-center justify-center">
                      <video src={futebolCardActiveMedia.src} autoPlay loop muted playsInline className="h-full w-full object-contain" />
                    </div>
                  </div>

                  <div className="group relative border-b border-[#1a2d4a] bg-black/60">
                    <button onClick={() => scroll(futebolCardScrollRef, -150)} className="absolute bottom-0 left-0 top-0 z-10 flex w-10 cursor-pointer items-center justify-center bg-gradient-to-r from-black/90 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                      <span className="text-2xl text-white">‹</span>
                    </button>
                    <div ref={futebolCardScrollRef} className="flex gap-2 overflow-x-auto p-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                      <div onClick={() => setFutebolCardActiveMedia({ type: "video", src: "/futebolcard-bot-demo.webm" })} className={thumbClass(futebolCardActiveMedia.src === "/futebolcard-bot-demo.webm")}>
                        <video src="/futebolcard-bot-demo.webm" className="h-full w-full object-cover opacity-50" muted />
                        <MediaThumbPlay />
                      </div>
                    </div>
                    <button onClick={() => scroll(futebolCardScrollRef, 150)} className="absolute bottom-0 right-0 top-0 z-10 flex w-10 cursor-pointer items-center justify-center bg-gradient-to-l from-black/90 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                      <span className="text-2xl text-white">›</span>
                    </button>
                  </div>
                </>
              )}

              {/* Card body */}
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center gap-3">
                  <span className="rounded-full border border-[#4f8ef7]/20 bg-[#4f8ef7]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#4f8ef7]">
                    {project.badge}
                  </span>
                </div>

                <h3 className="mb-3 text-lg font-bold text-white">{project.title}</h3>
                <p className="mb-6 text-sm leading-6 text-[#6b85a8]">{project.description}</p>

                <div className="mb-8 flex flex-wrap gap-2">
                  {project.stack.map((tag) => (
                    <span key={tag} className="rounded-full border border-[#1a2d4a] bg-[#070c1b] px-3 py-1 text-xs font-medium text-[#dce8f8]">
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#contato"
                  className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-[#4f8ef7] transition-colors hover:text-white"
                >
                  {project.action} <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
