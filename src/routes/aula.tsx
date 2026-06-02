import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import heroImg from "@/assets/hero-valpo.jpg";

export const Route = createFileRoute("/aula")({
  head: () => ({
    meta: [
      { title: "Aula — Profe Nacho" },
      { name: "description", content: "Docencia, educación formal y no formal, trabajo de campo e IAP." },
    ],
  }),
  component: AulaPage,
});

function AulaPage() {
  return (
    <>
      <PageHero image={heroImg} eyebrow="02 / Docencia" title="Aula" />
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-lg text-muted-foreground">
          Próximamente: cursos, materiales pedagógicos y trabajo con estudiantes.
        </p>
      </section>
    </>
  );
}
