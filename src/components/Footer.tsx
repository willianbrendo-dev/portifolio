import { Icon } from "@/components/Icons";
import { siteConfig } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <a className="footer-mark" href="#top" aria-label="Voltar ao início">
          WB<span>/</span>
        </a>
        <p>
          {siteConfig.name}<br />
          <span>{siteConfig.role}</span>
        </p>
        <nav aria-label="Links de contato">
          <a href={siteConfig.github} target="_blank" rel="noreferrer">
            GitHub <Icon name="external" size={14} />
          </a>
          <a href={`mailto:${siteConfig.email}`}>E-mail</a>
          <a href={`https://wa.me/${siteConfig.phoneDigits}`} target="_blank" rel="noreferrer">WhatsApp</a>
        </nav>
        <small>© 2026 · Construído com Next.js e atenção aos detalhes.</small>
      </div>
    </footer>
  );
}
