export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1a2d4a] bg-[#070c1b] px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-xs text-[#6b85a8] sm:flex-row">
        <p>© {year} Willian Brendo — Engenheiro de Software Sênior</p>
        <div className="flex items-center gap-6">
          <a href="mailto:willianbrendo.dev@gmail.com" className="transition-colors hover:text-white">
            willianbrendo.dev@gmail.com
          </a>
          <a
            href="https://wa.me/5586981854932"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
