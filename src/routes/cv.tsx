import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import heroImg from "@/assets/hero-valpo.jpg";

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title: "CV — Dr. Ignacio Rojas-Rubio" },
      { name: "description", content: "Trayectoria académica, docente e investigadora del Dr. Ignacio Rojas-Rubio (Universidad de Playa Ancha)." },
      { property: "og:title", content: "CV del Dr. Ignacio Rojas-Rubio" },
      { property: "og:description", content: "Formación doctoral, docencia, proyectos de investigación y publicaciones en geografía crítica." },
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
        
        {/* Sección: Bio */}
        <section>
          <h2 className="font-display text-4xl uppercase border-b-2 border-ink pb-3 mb-6">Bio</h2>
          <p className="text-lg leading-relaxed max-w-prose mb-4">
            Investigador en <strong>geografía crítica</strong>, docente en la Universidad de Playa Ancha 
            (Profe Nacho) y selector de vinilos (GEO). Desarrolla su trabajo en la intersección entre 
            el análisis territorial, la filosofía política, la vivienda, los desplazamientos y la cultura sonora, 
            pensando el espacio y habitando el sonido como un <em>Scientist of Dub</em>.
          </p>
          <p class="text-lg leading-relaxed max-w-prose">
            Cuenta con una sólida trayectoria en docencia universitaria, guiando procesos formativos en asignaturas 
            de geografía humana, social y metodologías de investigación, junto con una activa participación en proyectos 
            de investigación aplicada y cartografía social en la Región de Valparaíso.
          </p>
        </section>

        {/* Sección: Formación */}
        <section>
          <h2 className="font-display text-4xl uppercase border-b-2 border-ink pb-3 mb-6">Formación</h2>
          <ul className="space-y-4">
            {[
              { y: "Doctorado", t: "Doctor en Geografía - Pontificia Universidad Católica de Chile (PUC)" },
              { y: "Magíster", t: "Magíster en Geografía, mención Intervención Ambiental y Territorial - Universidad Academia de Humanismo Cristiano (UAHC)" },
              { y: "Pregrado", t: "Licenciado en Geografía / Geógrafo - Universidad de Playa Ancha (UPLA)" },
            ].map((x) => (
              <li key={x.y} className="grid md:grid-cols-[180px_1fr] gap-4 items-baseline">
                <span className="font-display text-2xl uppercase text-muted-foreground">{x.y}</span>
                <span className="text-lg font-medium">{x.t}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Sección: Experiencia Docente */}
        <section>
          <h2 className="font-display text-4xl uppercase border-b-2 border-ink pb-3 mb-6">Docencia Universitaria</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold">Universidad de Playa Ancha (UPLA)</h3>
              <p className="text-sm text-muted-foreground mb-2">Facultad de Ciencias Naturales y Exactas • Departamento de Ciencias de la Tierra</p>
              <ul className="list-disc pl-5 space-y-1 text-base">
                <li>Profesor de asignaturas de Geografía Humana, Geografía Social y Geografía Política.</li>
                <li>Cátedras de Epistemología de la Geografía y Metodologías de Investigación Social.</li>
                <li>Profesor guía e informante de tesis de pregrado en la carrera de Geografía.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold">Otras Experiencias Docentes Históricas</h3>
              <p className="text-sm text-muted-foreground mb-2">Docencia de pregrado y talleres integrados</p>
              <p className="text-base">
                Desarrollo de módulos académicos enfocados en Ordenamiento Territorial, Cartografía Temática, Teoría Urbana y metodologías cualitativas aplicadas al análisis socioespacial.
              </p>
            </div>
          </div>
        </section>

        {/* Sección: Investigación y Proyectos */}
        <section>
          <h2 className="font-display text-4xl uppercase border-b-2 border-ink pb-3 mb-6">Investigación y Proyectos</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-ink pl-4">
              <span className="text-xs uppercase tracking-wider bg-ink text-highlight px-2 py-0.5">Líneas de Investigación</span>
              <p className="text-lg mt-2 font-medium">Geografía crítica, Filosofía política, Vivienda y desplazamiento, Cartografía social, Cultura sonora y Estudios portuarios.</p>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-lg">Proyectos de Investigación y Asistencia Técnica</h4>
                <p className="text-base text-muted-foreground">Participación en proyectos institucionales (UPLA) y consultorías asociadas a:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2 text-base">
                  <li>Diagnósticos socioambientales y dinámicas habitacionales en zonas periféricas y portuarias.</li>
                  <li>Cartografía social y participativa con comunidades de la Región de Valparaíso.</li>
                  <li>Estudios sobre vulnerabilidad socioespacial y transformaciones territoriales urbanas.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Sección: Áreas de Especialidad / Tags */}
        <section>
          <h2 className="font-display text-4xl uppercase border-b-2 border-ink pb-3 mb-6">Especialidades</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Geografía crítica", 
              "Filosofía política", 
              "Vivienda y desplazamiento", 
              "Cartografía social", 
              "Música urbana", 
              "Cultura sonora", 
              "Estudios portuarios", 
              "Epistemología",
              "Planificación Territorial"
            ].map((t) => (
              <span key={t} className="bg-ink text-highlight px-3 py-1 text-sm uppercase tracking-wide">{t}</span>
            ))}
          </div>
        </section>

        {/* Sección: Contacto */}
        <section>
          <h2 className="font-display text-4xl uppercase border-b-2 border-ink pb-3 mb-6">Contacto Oficial</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a href="mailto:ignacio.rojas@upla.cl" className="border-2 border-ink p-6 hover:bg-ink hover:text-highlight transition-colors block">
              <div className="text-xs uppercase tracking-[0.3em] opacity-70">Email Institucional</div>
              <div className="font-display text-2xl mt-2">ignacio.rojas@upla.cl</div>
            </a>
            <div class="border-2 border-ink p-6">
              <div className="text-xs uppercase tracking-[0.3em] opacity-70">Afiliación Académica</div>
              <div className="font-display text-2xl mt-2">Universidad de Playa Ancha</div>
              <div className="text-sm mt-1 text-muted-foreground">Avenida Playa Ancha 850, Valparaíso, Chile</div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
