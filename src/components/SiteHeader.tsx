import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/", label: "Inicio", exact: true },
  { to: "/publicaciones", label: "Publicaciones" },
  { to: "/terreno", label: "Terreno" },
  { to: "/pasantias", label: "Pasantías" },
  { to: "/musica", label: "Música" },
  { to: "/cv", label: "CV" },
];

export function SiteHeader() {
  return (
    <header className="border-b-2 border-ink">
      <div className="bg-highlight text-background border-b border-ink/20">
        <div className="mx-auto max-w-7xl px-6 py-1.5 text-xs font-medium flex items-center justify-between">
          <span className="uppercase tracking-widest">Valparaíso · Chile</span>
          <a href="mailto:ignacio.rojas@upla.cl" className="hover:underline">
            ignacio.rojas@upla.cl
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <Link to="/" className="block leading-none">
          <div className="font-display text-4xl md:text-5xl tracking-tight">
            IGNACIO <span className="hl-block">ROJAS-RUBIO</span>
          </div>
          <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            <span>Dr. · Geógrafo</span>
            <span className="text-ink/30">/</span>
            <span>Profe Nacho · UPLA</span>
            <span className="text-ink/30">/</span>
            <span>GEO Selektor · Vinilo</span>
          </div>
        </Link>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 font-display text-xl">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.exact }}
              activeProps={{ className: "hl-block" }}
              className="uppercase tracking-wide hover:text-foreground/70 transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
