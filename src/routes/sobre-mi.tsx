import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import heroImg from "@/assets/hero-valpo.jpg";

export const Route = createFileRoute("/sobre-mi")({
  head: () => ({
    meta: [
      { title: "Sobre mí — Ignacio Rojas-Rubio" },
      { name: "description", content: "Geógrafo, docente y selector de vinilo desde Valparaíso, Chile." },
    ],
  }),
  component: SobreMiPage,
});

function SobreMiPage() {
  return (
    <>
      <PageHero image={heroImg} eyebrow="Bio" title="Sobre mí" />
      <section className="mx-auto max-w-3xl px-6 py-20 prose prose-lg">
        <p className="text-lg text-muted-foreground">
          Ignacio Rojas-Rubio. Doctor en Geografía. Profesor de la Universidad de Playa Ancha (UPLA).
          Investigador en geografía crítica, vivienda y filosofía política. Selector de vinilo bajo el
          alias GEO Selektor.
        </p>
      </section>
    </>
  );
}
