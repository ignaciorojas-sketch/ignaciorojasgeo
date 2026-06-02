import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import heroImg from "@/assets/hero-valpo.jpg";

export const Route = createFileRoute("/pasantias")({
  head: () => ({
    meta: [
      { title: "Pasantías — Ignacio Rojas-Rubio" },
      { name: "description", content: "Estancias y pasantías de investigación nacionales e internacionales." },
      { property: "og:title", content: "Pasantías de investigación · Ignacio Rojas-Rubio" },
      { property: "og:description", content: "Estancias en Madrid, Quito y CDMX en geografía urbana y filosofía política." },
    ],
    links: [{ rel: "canonical", href: "/pasantias" }],
  }),
  component: Pasantias,
});

const stays = [
  { year: "2023", host: "Universidad Complutense de Madrid", country: "España", focus: "Geografía urbana crítica · gentrificación turística" },
  { year: "2021", host: "FLACSO Ecuador", country: "Ecuador", focus: "Estudios territoriales y movimientos sociales" },
  { year: "2019", host: "Universidad Nacional Autónoma de México (UNAM)", country: "México", focus: "Cartografía social y filosofía política" },
];

function Pasantias() {
  return (
    <>
      <PageHero image={heroImg} eyebrow="Estancias de investigación" title="Pasantías" description="Trayectorias académicas en redes latinoamericanas y europeas." tint="yellow" />
      <div className="mx-auto max-w-6xl px-6 py-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {stays.map((s) => (
          <article key={s.year + s.host} className="border-2 border-ink bg-card p-6 hover:bg-ink hover:text-highlight transition-colors">
            <div className="font-display text-5xl">{s.year}</div>
            <h3 className="mt-3 font-display text-2xl uppercase leading-tight">{s.host}</h3>
            <div className="mt-1 text-sm uppercase tracking-widest opacity-70">{s.country}</div>
            <p className="mt-4 text-sm">{s.focus}</p>
          </article>
        ))}
      </div>
    </>
  );
}
