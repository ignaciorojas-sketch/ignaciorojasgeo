import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import heroImg from "@/assets/hero-valpo.jpg";

export const Route = createFileRoute("/pasantias")({
  head: () => ({
    meta: [
      { title: "Pasantías — Dr. Ignacio Rojas-Rubio" },
      { name: "description", content: "Pasantías e intercambios académicos." },
    ],
  }),
  component: PasantiasPage,
});

function PasantiasPage() {
  return (
    <div>
      <PageHero title="Pasantías" description="Estancias e intercambios académicos." image={heroImg} />
      <section className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-muted-foreground">Contenido en preparación.</p>
      </section>
    </div>
  );
}
