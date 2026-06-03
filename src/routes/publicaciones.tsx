import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import heroImg from "@/assets/hero-valpo.jpg";

export const Route = createFileRoute("/publicaciones")({
  head: () => ({
    meta: [
      { title: "Publicaciones — Dr. Ignacio Rojas-Rubio" },
      { name: "description", content: "Libros, capítulos y artículos académicos del Dr. Ignacio Rojas-Rubio." },
    ],
  }),
  component: PublicacionesPage,
});

function PublicacionesPage() {
  return (
    <div>
      <PageHero title="Publicaciones" description="Libros, capítulos y artículos académicos." image={heroImg} />
      <section className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-muted-foreground">Listado de publicaciones en preparación.</p>
      </section>
    </div>
  );
}
