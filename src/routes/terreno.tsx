import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import heroImg from "@/assets/hero-valpo.jpg";

export const Route = createFileRoute("/terreno")({
  head: () => ({
    meta: [
      { title: "Terreno — Dr. Ignacio Rojas-Rubio" },
      { name: "description", content: "Trabajo de terreno y geografía aplicada." },
    ],
  }),
  component: TerrenoPage,
});

function TerrenoPage() {
  return (
    <div>
      <PageHero title="Terreno" description="Geografía aplicada y trabajo en campo." image={heroImg} />
      <section className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-muted-foreground">Contenido en preparación.</p>
      </section>
    </div>
  );
}
