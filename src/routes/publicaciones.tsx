import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import heroImg from "@/assets/hero-valpo.jpg";

export const Route = createFileRoute("/publicaciones")({
  head: () => ({
    meta: [
      { title: "Publicaciones — Ignacio Rojas-Rubio" },
      { name: "description", content: "Libros, capítulos, artículos científicos y ponencias del Dr. Ignacio Rojas-Rubio." },
      { property: "og:title", content: "Publicaciones — Ignacio Rojas-Rubio" },
    ],
    links: [{ rel: "canonical", href: "/publicaciones" }],
  }),
  component: Publicaciones,
});

const categories = [
  {
    key: "books",
    title: "Libros",
    items: [
      { year: "2024", title: "Geografías críticas del puerto: Valparaíso en disputa", meta: "Editorial UPLA · Valparaíso" },
    ],
  },
  {
    key: "chapters",
    title: "Capítulos de Libros",
    items: [
      { year: "2023", title: "Cartografías críticas del despojo urbano", meta: "En: Ciudad y conflicto en América Latina, CLACSO" },
      { year: "2021", title: "Pedagogías del territorio", meta: "En: Geografía y educación crítica, Ariadna Ediciones" },
    ],
  },
  {
    key: "manuscripts",
    title: "Artículos Científicos",
    items: [
      { year: "2024", title: "Geografías del despojo en el Chile post-estallido", meta: "Revista de Geografía Norte Grande, n.º 87" },
      { year: "2023", title: "Habitar el sonido: dub, espacio y memoria", meta: "Bifurcaciones, n.º 39" },
      { year: "2022", title: "Vivienda, deuda y desplazamiento en Valparaíso", meta: "EURE, vol. 48" },
      { year: "2020", title: "Resistencias territoriales en cerros porteños", meta: "Scripta Nova, vol. 24" },
    ],
  },
  {
    key: "conferences",
    title: "Ponencias y Congresos",
    items: [
      { year: "2024", title: "Geografía crítica y música urbana: una agenda", meta: "EGAL · Santiago" },
      { year: "2023", title: "Cartografías del puerto olvidado", meta: "Congreso AGE · Madrid" },
      { year: "2022", title: "Pedagogías territoriales", meta: "EGAL · La Paz" },
    ],
  },
];

function Publicaciones() {
  return (
    <>
      <PageHero
        image={heroImg}
        eyebrow="Producción académica"
        title="Publicaciones"
        description="Libros, capítulos, artículos científicos y ponencias en geografía crítica y filosofía política."
        tint="yellow"
      />
      <div className="mx-auto max-w-7xl px-6 py-20 space-y-20">
        {categories.map((cat) => (
          <section key={cat.key} id={cat.key}>
            <div className="border-b-2 border-ink pb-3 mb-8 flex items-end justify-between">
              <h2 className="font-display text-4xl md:text-5xl uppercase">{cat.title}</h2>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">{cat.items.length} entradas</span>
            </div>
            <ul className="divide-y-2 divide-ink/10">
              {cat.items.map((it) => (
                <li key={it.title} className="py-6 grid md:grid-cols-[100px_1fr] gap-4 items-baseline">
                  <span className="font-display text-3xl text-muted-foreground">[{it.year}]</span>
                  <div>
                    <h3 className="font-display text-2xl leading-tight">{it.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{it.meta}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
