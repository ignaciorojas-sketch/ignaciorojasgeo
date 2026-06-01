import { createFileRoute, Link } from "@tanstack/react-router";
import portraitImg from "@/assets/ignacio-portrait.jpg";
import vinylImg from "@/assets/vinyl.jpg";
import terrenoImg from "@/assets/terreno.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ignacio Rojas-Rubio — Geógrafo · Scientist of Dub" },
      { name: "description", content: "Geografía crítica, filosofía política y música urbana desde el puerto olvidado de Valparaíso, Chile." },
    ],
  }),
  component: Index,
});

const latest = [
  { year: "2024", title: "Geografías del despojo en el Chile post-estallido", venue: "Revista de Geografía Norte Grande", tag: "Artículo" },
  { year: "2023", title: "Cartografías críticas del puerto", venue: "Editorial UPLA", tag: "Capítulo" },
  { year: "2023", title: "Habitar el sonido: dub, espacio y memoria", venue: "Revista Bifurcaciones", tag: "Artículo" },
  { year: "2022", title: "Pedagogías territoriales en Valparaíso", venue: "Congreso EGAL, La Paz", tag: "Ponencia" },
];

function Index() {
  return (
    <>
      {/* HERO — retrato + tipografía */}
      <section className="relative overflow-hidden border-b-2 border-ink bg-ink text-background">
        <div className="mx-auto max-w-7xl px-6 py-10 md:py-16 grid md:grid-cols-[1.1fr_1fr] gap-8 md:gap-12 items-center">
          {/* Texto */}
          <div className="order-2 md:order-1">
            <span className="hl-block inline-block text-xs uppercase tracking-[0.3em] font-bold mb-6">
              Geografía crítica · Valparaíso
            </span>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.85]">
              Pensar el espacio,<br />
              <span className="text-highlight">habitar el sonido.</span>
            </h1>
            <p className="mt-6 max-w-md text-base md:text-lg text-background/80">
              Investigaciones sobre el espacio geográfico, la filosofía y economía política, la vivienda para la clase trabajadora y la producción urbana de la música.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/publicaciones" className="bg-highlight text-background px-5 py-3 font-display text-xl uppercase tracking-wide hover:bg-background hover:text-ink transition-colors">
                Publicaciones →
              </Link>
              <Link to="/musica" className="border-2 border-background px-5 py-3 font-display text-xl uppercase tracking-wide hover:bg-background hover:text-ink transition-colors">
                Música
              </Link>
            </div>
          </div>
          {/* Retrato */}
          <div className="order-1 md:order-2 relative">
            <div className="relative aspect-[4/5] overflow-hidden border-2 border-highlight">
              <img
                src={portraitImg}
                alt="Ignacio Rojas-Rubio en su estudio con tornamesas"
                width={1280}
                height={1600}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[oklch(0.5_0.22_27)] mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
            </div>
            <div className="absolute -bottom-3 -left-3 bg-highlight text-background px-3 py-2 font-display text-sm uppercase tracking-widest">
              Self-portrait · Valpo
            </div>
          </div>
        </div>
      </section>

      {/* TRES IDENTIDADES */}
      <section className="border-b-2 border-ink bg-ink text-background">
        <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-3 divide-y-2 md:divide-y-0 md:divide-x-2 divide-background/15">
          {[
            { n: "01", alias: "Dr. Ignacio Rojas-Rubio", role: "Dr. en Geografía · Investigador", desc: "Geografía crítica, vivienda y filosofía política. Publicaciones, ponencias y proyectos.", to: "/publicaciones" },
            { n: "02", alias: "Profe Nacho", role: "Docencia · UPLA", desc: "Pedagogías territoriales y trabajo de campo con estudiantes en los cerros de Valparaíso.", to: "/terreno" },
            { n: "03", alias: "GEO Selektor", role: "Selector de vinilo · Dub", desc: "Bajo profundo, raíces y rotaciones. Sesiones y selecciones desde el puerto olvidado.", to: "/musica" },
          ].map((p) => (
            <a key={p.n} href={p.to} className="group p-6 md:p-8 first:pt-8 md:first:pt-8 hover:bg-highlight transition-colors">
              <div className="font-display text-5xl text-highlight group-hover:text-ink">{p.n}</div>
              <div className="mt-4 font-display text-3xl uppercase leading-tight">{p.alias}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.3em] text-background/60 group-hover:text-ink/70">{p.role}</div>
              <p className="mt-4 text-sm text-background/80 group-hover:text-ink/90 max-w-xs">{p.desc}</p>
              <div className="mt-5 text-xs uppercase tracking-[0.3em] text-highlight group-hover:text-ink">Ver →</div>
            </a>
          ))}
        </div>
      </section>

      {/* LATEST */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex items-end justify-between border-b-2 border-ink pb-3 mb-10">
          <h2 className="font-display text-4xl md:text-5xl uppercase">Últimas publicaciones</h2>
          <Link to="/publicaciones" className="text-sm uppercase tracking-widest hover:underline">Ver todas →</Link>
        </div>
        <ul className="divide-y-2 divide-ink/10">
          {latest.map((p) => (
            <li key={p.title} className="py-6 grid md:grid-cols-[100px_1fr_auto] gap-4 items-baseline group">
              <span className="font-display text-3xl text-muted-foreground group-hover:text-ink transition-colors">[{p.year}]</span>
              <div>
                <h3 className="font-display text-2xl leading-tight">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{p.venue}</p>
              </div>
              <span className="text-xs uppercase tracking-widest bg-ink text-highlight px-2 py-1 justify-self-start md:justify-self-end">{p.tag}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* DUAL: Terreno + Música */}
      <section className="border-t-2 border-ink bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-2 gap-10">
          <Link to="/terreno" className="group block">
            <div className="relative aspect-[4/3] overflow-hidden border-2 border-ink">
              <img src={terrenoImg} alt="Trabajo de terreno" loading="lazy" width={1280} height={896}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-[oklch(0.55_0.22_25)] mix-blend-multiply opacity-60 group-hover:opacity-40 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-5">
                <span className="hl-block text-xs uppercase tracking-[0.3em]">01 / Trabajo</span>
              </div>
            </div>
            <h3 className="mt-5 font-display text-4xl uppercase">Terreno →</h3>
            <p className="mt-2 text-muted-foreground max-w-md">Notas, mapas y registros desde el trabajo de campo en los cerros y quebradas de Valparaíso.</p>
          </Link>
          <Link to="/musica" className="group block">
            <div className="relative aspect-[4/3] overflow-hidden border-2 border-ink">
              <img src={vinylImg} alt="Vinilos" loading="lazy" width={1280} height={896}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-[oklch(0.45_0.2_260)] mix-blend-multiply opacity-60 group-hover:opacity-40 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-5">
                <span className="hl-block text-xs uppercase tracking-[0.3em]">02 / Sonido</span>
              </div>
            </div>
            <h3 className="mt-5 font-display text-4xl uppercase">Música →</h3>
            <p className="mt-2 text-muted-foreground max-w-md">GEO Selektor: dub, raíces y bajos profundos. Sesiones, mixes y selecciones de vinilo.</p>
          </Link>
        </div>
      </section>

      {/* QUOTE / ABOUT */}
      <section className="border-t-2 border-ink">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <p className="font-display text-3xl md:text-5xl leading-tight">
            "El puerto enseña a leer el mundo desde sus orillas:{" "}
            <span className="hl-block">lo que se descarga, lo que se desplaza, lo que resuena.</span>"
          </p>
          <p className="mt-6 text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Universidad de Playa Ancha · Valparaíso, Chile
          </p>
        </div>
      </section>
    </>
  );
}
