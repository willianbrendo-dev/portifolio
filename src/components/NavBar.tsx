const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#skills", label: "Skills" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

export function NavBar() {
  return (
    <header className="fixed z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-xl font-bold tracking-tight text-white">
          WB.
        </a>

        <div className="flex items-center gap-4 text-sm font-medium text-gray-300 sm:gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors duration-200 hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
