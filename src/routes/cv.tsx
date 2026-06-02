import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import heroImg from "@/assets/hero-valpo.jpg";

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title: "CV — Ignacio Rojas-Rubio" },
      { name: "description", content: "Trayectoria académica del Dr. Ignacio Rojas-Rubio: formación, docencia e investigación." },
      { property: "og:title", content: "CV del Dr. Ignacio Rojas-Rubio" },
      { property: "og:description", content: "Formación doctoral, docencia en la UPLA y líneas de investigación en geografía crítica." },
    ],
    links: [{ rel: "canonical", href: "/cv" }],
  }),
  component: Cv,
});

function Cv() {
  return (
    <>
      <PageHero image={heroImg} eyebrow="Trayectoria" title="CV" description="Profesor e investigador. Universidad de Playa Ancha — Valparaíso, Chile." tint="yellow" />
      <div className="mx-auto max-w-5xl px-6 py-20 grid gap-16">
        <section>
          <h2 className="font-display text-4xl uppercase border-b-2 border-ink pb-3 mb-6">Bio</h2>
          <p className="text-lg leading-relaxed max-w-prose">
            Investigador en <strong>geografía crítica</strong>, docente en la Universidad de Playa Ancha
            (Profe Nacho) y selector de vinilos (GEO). Trabaja en la intersección entre territorio,
            filosofía política y cultura sonora, pensando el espacio y habitando el sonido como un
            <em> Scientist of Dub</em>.
          </p>
        </section>

        <section>
          <h2 className="font-display text-4xl uppercase border-b-2 border-ink pb-3 mb-6">Formación</h2>
          <ul className="space-y-4">
            {[
              { y: "Doctorado", t: "Doctor en Geografía - PUC" },
              { y: "Magíster", t: "Magíster en Geografía m/ Intervención Ambiental y Territorial - UAHC" },
              { y: "Pregrado", t: "Licenciatura en Geografía - UPLA" },
            ].map((x) => (
              <li key={x.y} className="grid md:grid-cols-[180px_1fr] gap-4 items-baseline">
                <span className="font-display text-2xl uppercase text-muted-foreground">{x.y}</span>
                <span className="text-lg">{x.t}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-display text-4xl uppercase border-b-2 border-ink pb-3 mb-6">Líneas de investigación</h2>
          <div className="flex flex-wrap gap-2">
            {["Geografía crítica", "Filosofía política", "Vivienda y desplazamiento", "Cartografía social", "Música urbana", "Cultura sonora", "Estudios portuarios"].map((t) => (
              <span key={t} className="bg-ink text-highlight px-3 py-1 text-sm uppercase tracking-wide">{t}</span>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-4xl uppercase border-b-2 border-ink pb-3 mb-6">Contacto</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a href="mailto:ignacio.rojas@upla.cl" className="border-2 border-ink p-6 hover:bg-ink hover:text-highlight transition-colors block">
              <div className="text-xs uppercase tracking-[0.3em] opacity-70">Email</div>
              <div className="font-display text-2xl mt-2">ignacio.rojas@upla.cl</div>
            </a>
            <div className="border-2 border-ink p-6">
              <div className="text-xs uppercase tracking-[0.3em] opacity-70">Afiliación</div>
              <div className="font-display text-2xl mt-2">Universidad de Playa Ancha</div>
              <div className="text-sm mt-1 text-muted-foreground">Valparaíso, Chile</div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
