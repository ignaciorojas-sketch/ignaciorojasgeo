import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import terrenoImg from "@/assets/terreno.jpg";

export const Route = createFileRoute("/terreno")({
  head: () => ({
    meta: [
      { title: "Terreno — Ignacio Rojas-Rubio" },
      { name: "description", content: "Trabajo de campo, cartografías y registros desde el territorio porteño." },
    ],
    links: [{ rel: "canonical", href: "/terreno" }],
  }),
  component: Terreno,
});

const entries = [
  { date: "2024 · Otoño", place: "Cerro Cordillera, Valparaíso", note: "Mapeo participativo con vecinos del sector tras los incendios de febrero." },
  { date: "2023 · Primavera", place: "Quebrada Márquez", note: "Recorridos etnográficos sobre despojo, autoconstrucción y memoria sonora." },
  { date: "2023 · Verano", place: "San Antonio", note: "Observación de la ampliación portuaria y sus efectos sobre el barrio." },
  { date: "2022", place: "Madrid (Lavapiés)", note: "Pasantía de investigación: gentrificación turística comparada." },
];

function Terreno() {
  return (
    <>
      <PageHero image={terrenoImg} eyebrow="Trabajo de campo" title="Terreno" description="Notas, recorridos y registros desde los cerros, quebradas y orillas." tint="red" />
      <div className="mx-auto max-w-5xl px-6 py-20">
        <ol className="relative border-l-2 border-ink pl-8 space-y-12">
          {entries.map((e, i) => (
            <li key={i} className="relative">
              <span className="absolute -left-[42px] top-1 h-4 w-4 bg-ink" />
              <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{e.date}</div>
              <h3 className="font-display text-3xl mt-1">{e.place}</h3>
              <p className="mt-2 text-base text-foreground/80 max-w-prose">{e.note}</p>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
