import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/curaduria")({
  head: () => ({
    meta: [
      { title: "Curaduría Musical — GEO Selektor" },
      { name: "description", content: "Vibraciones, raíces y territorialidad. Sesiones y selecciones de vinilo." },
    ],
  }),
  component: CuraduriaPage,
});

function CuraduriaPage() {
  return (
    <>
      <PageHero eyebrow="03 / Sonido" title="Curaduría Musical" />
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-lg text-muted-foreground">
          Próximamente: columnas, sesiones y selecciones de vinilo desde GEO Selektor.
        </p>
      </section>
    </>
  );
}
