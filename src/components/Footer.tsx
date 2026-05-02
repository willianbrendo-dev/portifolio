export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-2 text-center text-sm text-gray-400 sm:flex-row sm:gap-3">
        <p>Copyright {year} Willian Brendo.</p>
        <a
          href="mailto:willianbrendo.dev@gmail.com"
          className="transition-colors hover:text-brand"
        >
          willianbrendo.dev@gmail.com
        </a>
      </div>
    </footer>
  );
}
