"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/Icons";
import { getWhatsAppUrl, navigation } from "@/data/portfolio";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Navegação principal">
        <a className="brand-mark" href="#top" aria-label="Willian Brendo, início">
          <span>WB</span>
          <span aria-hidden="true">/</span>
          <small>Software Engineering</small>
        </a>

        <div className="desktop-nav">
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <a className="nav-cta" href={getWhatsAppUrl()} target="_blank" rel="noreferrer">
          Conversar <Icon name="arrow" size={16} />
        </a>

        <button
          ref={menuButtonRef}
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <Icon name={menuOpen ? "close" : "menu"} size={22} />
        </button>
      </nav>

      <div id="mobile-navigation" className="mobile-nav" hidden={!menuOpen}>
        {navigation.map((item) => (
          <a href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>
            {item.label}
          </a>
        ))}
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noreferrer"
          onClick={() => setMenuOpen(false)}
        >
          Iniciar conversa <Icon name="arrow" size={16} />
        </a>
      </div>
    </header>
  );
}
