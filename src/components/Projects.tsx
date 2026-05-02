"use client";

import { useRef, useState } from "react";

const projects = [
  {
    title: "TecnoBook",
    description:
      "Plataforma Full-Stack com gestão completa. Destaque para a infraestrutura própria hospedada em VPS Linux (Ubuntu), orquestração de deploy e geração de aplicativo Android (APK) nativo.",
    stack: ["Next.js", "Node.js", "VPS Ubuntu", "Mobile Build"],
    action: "Discutir este Projeto",
    hasTecnoBookMedia: true,
  },
  {
    title: "Automação com Visão Computacional",
    description:
      "Sistema autônomo de cadastros capaz de navegar em ambientes web restritos. Utiliza template matching e análise de tela em tempo real para contornar bloqueios de UI.",
    stack: ["Python", "OpenCV", "Playwright", "Automação"],
    action: "Quero uma Automação",
    hasVideoPlaceholder: true,
  },
];

export function Projects() {
  const [activeMedia, setActiveMedia] = useState({
    type: "video",
    src: "/tecnobook-demo.webm",
  });
  const [automationActiveMedia, setAutomationActiveMedia] = useState({
    type: "video",
    src: "/automacao-cv-demo.webm",
  });
  const scrollRef = useRef<HTMLDivElement>(null);
  const automationScrollRef = useRef<HTMLDivElement>(null);

  const scroll = (offset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  const scrollAutomation = (offset: number) => {
    if (automationScrollRef.current) {
      automationScrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section id="projetos" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
          Cases de Sucesso & Engenharia
        </h2>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20"
            >
              <div className="flex w-full flex-col">
                {project.hasTecnoBookMedia ? (
                  <div>
                    <div className="group/monitor relative h-64 w-full overflow-hidden border-b border-border bg-black">
                      {/* Área de Scroll com barra invisível */}
                      <div
                        className={`h-full w-full ${activeMedia.type === "video" ? "flex items-center justify-center" : "overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"}`}
                      >
                        {activeMedia.src.includes("tecnobook-demo") ? (
                          <img
                            src={activeMedia.src}
                            alt="TecnoBook Demo"
                            className="h-full w-full object-contain"
                          />
                        ) : activeMedia.src.includes("automacao-cv-demo") &&
                          activeMedia.type === "video" ? (
                          <video
                            src={activeMedia.src}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="h-full w-full object-contain"
                          />
                        ) : (
                          <img
                            src={activeMedia.src}
                            alt="Project Media"
                            className="h-auto w-full object-top"
                          />
                        )}
                      </div>

                      {/* Máscaras de Gradiente (Apenas para imagens longas) */}
                      {activeMedia.type === "image" && (
                        <>
                          <div className="pointer-events-none absolute left-0 top-0 h-8 w-full bg-gradient-to-b from-black to-transparent" />
                          <div className="pointer-events-none absolute bottom-0 left-0 h-8 w-full bg-gradient-to-t from-black to-transparent" />
                        </>
                      )}
                    </div>
                    <div className="group relative border-b border-border bg-black/40">
                      {/* Seta Esquerda */}
                      <button
                        onClick={() => scroll(-150)}
                        className="absolute bottom-0 left-0 top-0 z-10 flex w-10 cursor-pointer items-center justify-center bg-gradient-to-r from-black/90 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                      >
                        <span className="text-2xl font-bold text-white">
                          ‹
                        </span>
                      </button>

                      {/* Container Scrollável */}
                      <div
                        ref={scrollRef}
                        className="flex scroll-smooth gap-3 overflow-x-auto p-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                      >
                        {/* Thumbnail do Vídeo */}
                        <div
                          onClick={() =>
                            setActiveMedia({
                              type: "video",
                              src: "/tecnobook-demo.webm",
                            })
                          }
                          className={`relative h-16 w-28 flex-shrink-0 cursor-pointer overflow-hidden rounded transition-all ${activeMedia.src === "/tecnobook-demo.webm" ? "border-2 border-brand" : "border border-border hover:border-brand/50"}`}
                        >
                          <img
                            src="/tecnobook-demo.webm"
                            className="h-full w-full object-cover opacity-60"
                            alt="Thumb Video TecnoBook"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand/80 pl-0.5 text-xs text-white">
                              ▶
                            </div>
                          </div>
                        </div>

                        {/* Miniaturas de Imagem */}
                        {[
                          "/tecnobook-dashboard.png",
                          "/tecnobook-modulo1.png",
                        ].map((imgSrc, idx) => (
                          <img
                            key={idx}
                            src={imgSrc}
                            onClick={() =>
                              setActiveMedia({ type: "image", src: imgSrc })
                            }
                            alt={`Screenshot ${idx}`}
                            className={`h-16 w-28 flex-shrink-0 cursor-pointer rounded object-cover transition-colors ${activeMedia.src === imgSrc ? "border-2 border-brand" : "border border-border hover:border-brand/50"}`}
                          />
                        ))}
                      </div>

                      {/* Seta Direita */}
                      <button
                        onClick={() => scroll(150)}
                        className="absolute bottom-0 right-0 top-0 z-10 flex w-10 cursor-pointer items-center justify-center bg-gradient-to-l from-black/90 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                      >
                        <span className="text-2xl font-bold text-white">
                          ›
                        </span>
                      </button>
                    </div>
                  </div>
                ) : null}

                {project.hasVideoPlaceholder ? (
                  <div>
                    <div className="group/monitor relative h-64 w-full overflow-hidden border-b border-border bg-black">
                      <div
                        className={`h-full w-full ${automationActiveMedia.type === "video" ? "flex items-center justify-center" : "overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"}`}
                      >
                        {automationActiveMedia.src.includes("tecnobook-demo") ? (
                          <img
                            src={automationActiveMedia.src}
                            alt="TecnoBook Demo"
                            className="h-full w-full object-contain"
                          />
                        ) : automationActiveMedia.src.includes("automacao-cv-demo") &&
                          automationActiveMedia.type === "video" ? (
                          <video
                            src={automationActiveMedia.src}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="h-full w-full object-contain"
                          />
                        ) : (
                          <img
                            src={automationActiveMedia.src}
                            alt="Project Media"
                            className="h-auto w-full object-top"
                          />
                        )}
                      </div>

                      {automationActiveMedia.type === "image" && (
                        <>
                          <div className="pointer-events-none absolute left-0 top-0 h-8 w-full bg-gradient-to-b from-black to-transparent" />
                          <div className="pointer-events-none absolute bottom-0 left-0 h-8 w-full bg-gradient-to-t from-black to-transparent" />
                        </>
                      )}
                    </div>

                    <div className="group relative border-b border-border bg-black/40">
                      <button
                        onClick={() => scrollAutomation(-150)}
                        className="absolute bottom-0 left-0 top-0 z-10 flex w-10 cursor-pointer items-center justify-center bg-gradient-to-r from-black/90 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                      >
                        <span className="text-2xl font-bold text-white">
                          ‹
                        </span>
                      </button>

                      <div
                        ref={automationScrollRef}
                        className="flex scroll-smooth gap-3 overflow-x-auto p-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                      >
                        <div
                          onClick={() =>
                            setAutomationActiveMedia({
                              type: "video",
                              src: "/automacao-cv-demo.webm",
                            })
                          }
                          className={`relative h-16 w-28 flex-shrink-0 cursor-pointer overflow-hidden rounded transition-all ${automationActiveMedia.src === "/automacao-cv-demo.webm" ? "border-2 border-brand" : "border border-border hover:border-brand/50"}`}
                        >
                          <video
                            src="/automacao-cv-demo.webm"
                            className="h-full w-full object-cover opacity-60"
                            muted
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand/80 pl-0.5 text-xs text-white">
                              ▶
                            </div>
                          </div>
                        </div>

                        {["/cv-codigo.png", "/cv-target.png", "/cv-sucesso.png"].map(
                          (imgSrc, idx) => (
                            <img
                              key={idx}
                              src={imgSrc}
                              onClick={() =>
                                setAutomationActiveMedia({
                                  type: "image",
                                  src: imgSrc,
                                })
                              }
                              alt={`Automação Screenshot ${idx}`}
                              className={`h-16 w-28 flex-shrink-0 cursor-pointer rounded object-cover transition-colors ${automationActiveMedia.src === imgSrc ? "border-2 border-brand" : "border border-border hover:border-brand/50"}`}
                            />
                          ),
                        )}
                      </div>

                      <button
                        onClick={() => scrollAutomation(150)}
                        className="absolute bottom-0 right-0 top-0 z-10 flex w-10 cursor-pointer items-center justify-center bg-gradient-to-l from-black/90 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                      >
                        <span className="text-2xl font-bold text-white">
                          ›
                        </span>
                      </button>
                    </div>
                  </div>
                ) : null}

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-3 text-xl font-bold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mb-6 text-sm leading-6 text-gray-400">
                    {project.description}
                  </p>

                  <div className="mb-8 flex flex-wrap gap-2">
                    {project.stack.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-background px-3 py-1 text-xs text-brand"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contato"
                    className="mt-auto text-sm font-medium text-brand hover:underline"
                  >
                    {project.action}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
