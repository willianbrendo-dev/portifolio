import { Icon } from "@/components/Icons";
import { siteConfig } from "@/data/portfolio";

export function About() {
  return (
    <section id="sobre" className="section section-bone about-section" aria-labelledby="about-title">
      <div className="section-shell about-grid">
        <div className="about-title reveal">
          <p className="eyebrow">Sobre Willian</p>
          <h2 id="about-title">Curiosidade técnica com compromisso de entrega.</h2>
        </div>

        <div className="about-copy reveal">
          <p>
            Sou um Full-Stack Software Engineer orientado a produto. Gosto de entender
            o processo real, modelar suas regras e construir o caminho completo entre
            interface, backend, dados e integrações.
          </p>
          <p>
            Minha formação é prática e contínua: documentação, cursos técnicos,
            experimentos e projetos usados para aprender construindo. Hoje concentro
            meu trabalho em TypeScript/React/Next.js, PostgreSQL e automação com Python.
          </p>
          <p>
            Uso IA de forma aberta como parte do toolkit. O padrão que busco é simples:
            nenhuma sugestão vale mais que o comportamento verificado do sistema.
          </p>

          <a href={siteConfig.github} target="_blank" rel="noreferrer" className="text-link">
            Ver perfil no GitHub <Icon name="external" size={16} />
          </a>
        </div>

        <aside className="about-note reveal" aria-label="Princípio de trabalho">
          <span>PRINCÍPIO / 01</span>
          <strong>Prova &gt; promessa.</strong>
          <p>
            Decisões concretas comunicam mais do que adjetivos: RLS, constraints,
            confirmação humana, testes e limites explícitos.
          </p>
        </aside>
      </div>
    </section>
  );
}
