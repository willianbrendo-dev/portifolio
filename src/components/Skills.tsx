const skills = [
  "Python",
  "Playwright",
  "OpenCV",
  "n8n",
  "LangChain",
  "Selenium",
  "JavaScript/TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Java",
  "Linux (Ubuntu)",
  "Docker",
  "Nginx",
  "PostgreSQL",
  "MongoDB",
  "Git/GitHub",
  "Tailwind CSS",
  "Framer Motion",
];

export function Skills() {
  return (
    <section id="skills" className="bg-card py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
          Stack Tecnológica & Ferramentas
        </h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="cursor-default rounded-xl border border-border bg-background p-6 text-center transition-all hover:border-brand/50 hover:bg-brand/5"
            >
              <span className="font-medium text-foreground">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
