export function SiteFooter() {
  return (
    <footer className="mt-24 border-t-2 border-ink bg-ink text-background">
      <div className="mx-auto max-w-7xl px-6 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="font-display text-3xl">IGNACIO ROJAS-RUBIO</div>
          <p className="mt-3 text-sm text-background/70 max-w-xs">
            Geografía crítica, filosofía política y música urbana desde el puerto olvidado de Valparaíso.
          </p>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-[0.25em] text-highlight">Académico</h4>
          <ul className="mt-3 space-y-1 text-sm">
            <li><a className="hover:text-highlight" href="https://orcid.org/0000-0001-5003-141X" target="_blank" rel="noreferrer">ORCID</a></li>
            <li><a className="hover:text-highlight" href="https://www.scopus.com/authid/detail.uri?authorId=57204360068" target="_blank" rel="noreferrer">Scopus</a></li>
            <li><a className="hover:text-highlight" href="https://share.google/wu2s3Xk1q2yfFZn62" target="_blank" rel="noreferrer">Google Scholar</a></li>
            <li><a className="hover:text-highlight" href="https://github.com/ignaciorojasgeo" target="_blank" rel="noreferrer">GitHub</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-[0.25em] text-highlight">Sonido</h4>
          <ul className="mt-3 space-y-1 text-sm">
            <li><a className="hover:text-highlight" href="https://instagram.com/geo.selektor" target="_blank" rel="noreferrer">Instagram · @geo.selektor</a></li>
            <li><a className="hover:text-highlight" href="https://soundcloud.com/geoselector" target="_blank" rel="noreferrer">SoundCloud · geoselector</a></li>
            <li><a className="hover:text-highlight" href="https://youtube.com/@ignaciorojasgeo" target="_blank" rel="noreferrer">YouTube</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="mx-auto max-w-7xl px-6 py-4 text-xs text-background/50 flex justify-between">
          <span>© {new Date().getFullYear()} Ignacio Rojas-Rubio</span>
          <span>Universidad de Playa Ancha</span>
        </div>
      </div>
    </footer>
  );
}
