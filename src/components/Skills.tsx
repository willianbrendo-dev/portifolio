const categories = [
  {
    label: "Automação & Inteligência",
    accent: "#4f8ef7",
    skills: ["Python", "Playwright", "Patchright", "OpenCV", "Selenium", "n8n", "LangChain"],
  },
  {
    label: "Frontend",
    accent: "#a78bfa",
    skills: ["JavaScript / TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    label: "Backend & Dados",
    accent: "#34d399",
    skills: ["Node.js", "Java", "PostgreSQL", "MongoDB", "SQLite"],
  },
  {
    label: "DevOps & Infraestrutura",
    accent: "#fb923c",
    skills: ["Docker", "Linux (Ubuntu)", "Nginx", "Git / GitHub", "VPS Deploy"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-[#0c1525] py-28">
      {/* Decorative top border gradient */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#4f8ef7]/30 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#4f8ef7]/20 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#4f8ef7]">
            Arsenal técnico
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Stack & Ferramentas
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {categories.map((cat) => (
            <div
              key={cat.label}
              className="card-premium group p-6 transition-all hover:shadow-[0_4px_32px_rgba(0,0,0,0.3)]"
            >
              {/* Category label */}
              <div className="mb-5 flex items-center gap-2.5">
                <div
                  className="h-4 w-1 rounded-full"
                  style={{ background: cat.accent }}
                />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6b85a8]">
                  {cat.label}
                </span>
              </div>

              {/* Skills as tags */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[#1a2d4a] bg-[#070c1b] px-3 py-1 text-sm font-medium text-[#dce8f8] transition-colors hover:border-opacity-60"
                    style={{ ["--tw-border-opacity" as string]: "0.8" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
