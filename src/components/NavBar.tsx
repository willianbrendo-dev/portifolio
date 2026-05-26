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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-[#1a2d4a] bg-[#070c1b]/90 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="group flex items-center gap-2">
          <span className="text-lg font-bold tracking-tight text-white transition-colors group-hover:text-[#4f8ef7]">
            WB<span className="text-[#4f8ef7]">.</span>
          </span>
        </a>

        <div className="flex items-center gap-1 text-sm font-medium text-[#6b85a8] sm:gap-2">
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
      </nav>
    </header>
  );
}
