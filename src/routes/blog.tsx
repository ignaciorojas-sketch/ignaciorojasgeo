import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import heroImg from "@/assets/hero-valpo.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Ignacio Rojas-Rubio" },
      { name: "description", content: "Notas, columnas y reflexiones sobre territorio, política y sonido." },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <>
      <PageHero image={heroImg} eyebrow="Bitácora" title="Blog" />
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-lg text-muted-foreground">Próximamente: notas y columnas.</p>
      </section>
    </>
  );
}
