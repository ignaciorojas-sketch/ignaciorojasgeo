import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import heroImg from "@/assets/hero-valpo.jpg";

export const Route = createFileRoute("/musica")({
  head: () => ({
    meta: [
      { title: "Música — Dr. Ignacio Rojas-Rubio" },
      { name: "description", content: "Proyectos musicales y sonoros." },
    ],
  }),
  component: MusicaPage,
});

function MusicaPage() {
  return (
    <div>
      <PageHero title="Música" subtitle="Proyectos sonoros y musicales." image={heroImg} />
      <section className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-muted-foreground">Contenido en preparación.</p>
      </section>
    </div>
  );
}
