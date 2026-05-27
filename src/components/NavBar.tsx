"use client";
import { useEffect, useState } from "react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#skills", label: "Skills" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed z-50 w-full transition-all duration-300 ${
        scrolled || menuOpen
          ? "border-b border-[#1a2d4a] bg-[#070c1b]/95 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#top" className="group flex items-center gap-2" onClick={closeMenu}>
          <span className="text-lg font-bold tracking-tight text-white transition-colors group-hover:text-[#4f8ef7]">
            WB<span className="text-[#4f8ef7]">.</span>
          </span>
        </a>

        {/* Desktop links — hidden on mobile */}
        <div className="hidden items-center gap-1 text-sm font-medium text-[#6b85a8] md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 transition-colors duration-200 hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5586981854932"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 rounded-lg border border-[#4f8ef7]/40 bg-[#4f8ef7]/10 px-4 py-2 text-[#4f8ef7] transition-all hover:border-[#4f8ef7] hover:bg-[#4f8ef7]/20"
          >
            Contratar
          </a>
        </div>

        {/* Mobile right-side: CTA compact + hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href="https://wa.me/5586981854932"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-[#4f8ef7]/40 bg-[#4f8ef7]/10 px-3 py-1.5 text-xs font-semibold text-[#4f8ef7] transition-all hover:border-[#4f8ef7] hover:bg-[#4f8ef7]/20"
          >
            Contratar
          </a>

          {/* Hamburger button */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-lg border border-[#1a2d4a] bg-[#0c1525] transition-colors hover:border-[#4f8ef7]/40"
          >
            <span
              className={`block h-0.5 w-5 rounded-full bg-[#dce8f8] transition-all duration-300 origin-center ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-[#dce8f8] transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-[#dce8f8] transition-all duration-300 origin-center ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          menuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-[#1a2d4a] px-4 pb-4 pt-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="flex w-full items-center rounded-lg px-4 py-3 text-sm font-medium text-[#6b85a8] transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
