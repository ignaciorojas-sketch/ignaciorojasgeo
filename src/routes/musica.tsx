import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import vinylImg from "@/assets/vinyl.jpg";

export const Route = createFileRoute("/musica")({
  head: () => ({
    meta: [
      { title: "Música — GEO Selektor" },
      { name: "description", content: "Selecciones de vinilo, dub y música urbana por GEO Selektor desde Valparaíso." },
      { property: "og:title", content: "Música — GEO Selektor" },
      { property: "og:description", content: "Sesiones de dub, raíces y bajo profundo en vinilo desde el puerto olvidado." },
    ],
    links: [{ rel: "canonical", href: "/musica" }],
  }),
  component: Musica,
});

const sessions = [
  { n: "#012", title: "Dub from the Port", duration: "62 min", tag: "Roots / Dub" },
  { n: "#011", title: "Cerro Sessions vol. 3", duration: "55 min", tag: "Cumbia / Digital" },
  { n: "#010", title: "Scientist of Dub Tribute", duration: "70 min", tag: "Dub / Tributo" },
  { n: "#009", title: "Bajo Pacífico", duration: "48 min", tag: "Bass / Latin" },
];

function Musica() {
  return (
    <>
      <PageHero image={vinylImg} eyebrow="GEO Selektor" title="Música" description="Bajo profundo, raíces y rotaciones desde el puerto olvidado. Selecciones de vinilo y sesiones en vivo." tint="blue" />

      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="border-b-2 border-ink pb-3 mb-10 flex items-end justify-between">
          <h2 className="font-display text-4xl md:text-5xl uppercase">Sesiones</h2>
          <a href="https://soundcloud.com/geoselector" target="_blank" rel="noreferrer" className="text-sm uppercase tracking-widest hover:underline">
            Escuchar en SoundCloud →
          </a>
        </div>

        <ul className="divide-y-2 divide-ink/10">
          {sessions.map((s) => (
            <li key={s.n} className="py-6 grid md:grid-cols-[100px_1fr_auto_auto] gap-4 items-baseline group hover:bg-secondary/60 transition-colors px-2 -mx-2">
              <span className="font-display text-3xl text-muted-foreground">{s.n}</span>
              <h3 className="font-display text-2xl leading-tight">{s.title}</h3>
              <span className="text-xs uppercase tracking-widest bg-ink text-highlight px-2 py-1">{s.tag}</span>
              <span className="text-sm text-muted-foreground">{s.duration}</span>
            </li>
          ))}
        </ul>

        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {[
            { label: "Instagram", value: "@geo.selektor", href: "https://instagram.com/geo.selektor" },
            { label: "SoundCloud", value: "geoselector", href: "https://soundcloud.com/geoselector" },
            { label: "YouTube", value: "@ignaciorojasgeo", href: "https://youtube.com/@ignaciorojasgeo" },
          ].map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer"
              className="border-2 border-ink p-6 block bg-card hover:bg-ink hover:text-highlight transition-colors">
              <div className="text-xs uppercase tracking-[0.3em] opacity-70">{l.label}</div>
              <div className="font-display text-3xl mt-2">{l.value}</div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
