import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-valpo.jpg";
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
      {/* HERO */}
      <section className="relative overflow-hidden border-b-2 border-ink">
        <div className="relative h-[78vh] min-h-[520px] w-full">
          <img src={heroImg} alt="Vista aérea de Valparaíso" width={1920} height={1024} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[oklch(0.5_0.22_27)] mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-tr from-ink/40 via-transparent to-transparent" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 h-full flex flex-col justify-center">
            <span className="hl-block self-start text-xs uppercase tracking-[0.3em] font-bold mb-5">
              Geografía crítica · Valparaíso
            </span>
            <h1 className="font-display text-6xl md:text-8xl leading-[0.85] max-w-4xl">
              <span className="hl-block">Pensar el espacio,</span>{" "}
              <span className="hl-block">habitar el sonido.</span>
            </h1>
            <p className="mt-6 max-w-xl bg-ink text-background px-4 py-3 text-base md:text-lg">
              Investigaciones sobre territorio, desplazamiento y vivienda; selecciones de vinilo desde el puerto olvidado.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/publicaciones" className="bg-ink text-highlight px-5 py-3 font-display text-xl uppercase tracking-wide hover:opacity-90">
                Publicaciones →
              </Link>
              <Link to="/musica" className="bg-background border-2 border-ink px-5 py-3 font-display text-xl uppercase tracking-wide hover:bg-ink hover:text-highlight">
                Música
              </Link>
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
