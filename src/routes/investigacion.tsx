import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/investigacion")({
  head: () => ({
    meta: [
      { title: "Investigación — Ignacio Rojas-Rubio" },
      { name: "description", content: "Investigaciones sobre geografía crítica, vivienda y filosofía política." },
    ],
  }),
  component: InvestigacionPage,
});

function InvestigacionPage() {
  return (
    <>
      <PageHero eyebrow="01 / Investigación" title="Investigación" />
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-lg text-muted-foreground">
          Próximamente: líneas de investigación, proyectos en curso y publicaciones recientes.
        </p>
      </section>
    </>
  );
}
