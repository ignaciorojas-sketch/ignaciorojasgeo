import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import heroImg from "@/assets/hero-valpo.jpg";

export const Route = createFileRoute("/sobre-mi")({
  head: () => ({
    meta: [
      { title: "Sobre mí — Dr. Ignacio Rojas-Rubio" },
      { name: "description", content: "Doctor en Geografía, académico e investigador especializado en filosofía política del espacio, economía política urbana y educación crítica." },
    ],
  }),
  component: SobreMiPage,
});

function SobreMiPage() {
  const perfil = {
    nombre: "Ignacio Froilán Rojas Rubio",
    grados: [
      "Doctor en Geografía — Pontificia Universidad Católica de Chile",
      "Magíster en Geografía (mención Intervención Ambiental y Territorial) — Universidad Academia de Humanismo Cristiano",
      "Geógrafo y Licenciado en Geografía — Universidad de Playa Ancha"
    ],
    afiliacion: "Académico e Investigador, Universidad de Playa Ancha (Facultad de Humanidades)",
    editoriales: [
      "Editor de la Revista de Geografía Norte Grande (Instituto de Geografía, PUC)",
      "Editor de la Revista de Geografía Espacio y Sociedad"
    ]
  };

  const lineasInvestigacion = [
    {
      titulo: "Filosofía Política del Espacio y Economía Política Urbana",
      desc: "Estudio teórico y epistemológico de la dimensión ética del territorio. Análisis crítico de los procesos de acumulación de capital, la producción del espacio bajo el modelo neoliberal y las teorías de la justicia socio-espacial, fundamentado en la investigación doctoral sobre la desigualdad residencial y las políticas de vivienda en el Valparaíso histórico y contemporáneo."
    },
    {
      titulo: "Geografía Urbana, Vivienda y Segregación",
      desc: "Investigación aplicada sobre las dinámicas de segregación socio-espacial, precarización habitacional y desposesión en contextos urbanos vulnerables. Foco prioritario en los conflictos territoriales, transformaciones socio-espaciales y dinámicas de los cerros y sectores de la Región de Valparaíso (como Playa Ancha y Rodelillo)."
    },
    {
      titulo: "Educación Geográfica Crítica y Didáctica Territorial",
      desc: "Desarrollo de marcos metodológicos de enseñanza-aprendizaje basados en la geografía crítica latinoamericana. Estudio del barrio como espacio pedagógico fundamental a través de la observación directa e itinerarios urbanos, con especial énfasis en los contextos de educación urbano-mapuche en entornos metropolitanos."
    },
    {
      titulo: "Metodologías Mixtas: Epistemología Cualitativa y SIG",
      desc: "Integración técnico-metodológica para el análisis complejo del territorio. Uso a nivel profesional y avanzado de herramientas cualitativas CAQDAS (Atlas.ti, Etnograph) para el diseño de planes de análisis y codificación conceptual, combinadas con análisis geoespacial digital y analógico mediante Sistemas de Información Geográfica (ArcGIS, gvSIG)."
    }
  ];

  const enlacesAcademicos = [
    {
      plataforma: "ORCID",
      url: "https://orcid.org/0000-0001-5003-141X",
      label: "ID de Investigador verificado y registro unificado de publicaciones."
    },
    {
      plataforma: "Scopus",
      url: "https://www.scopus.com/authid/detail.uri?authorId=57204360068",
      label: "Perfil de indexación internacional y comités editoriales de corriente principal."
    },
    {
      plataforma: "Google Scholar",
      url: "https://scholar.google.com/citations?user=Yeo-sOgAAAAJ&hl=es",
      label: "Citas en tiempo real, métricas de impacto y producción científica global."
    },
    {
      plataforma: "GitHub",
      url: "https://github.com/ignaciorojas-sketch",
      label: "Repositorios de código abierto, cartografía interactiva y experimentación sonora."
    }
  ];

  return (
    <>
      <PageHero image={heroImg} eyebrow="Trayectoria" title="Sobre mí" />
      
      <div className="mx-auto max-w-4xl px-6 py-16 space-y-16">
        
        {/* Perfil Principal */}
        <section className="prose prose-lg dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold tracking-tight text-foreground border-b pb-2">Perfil Académico</h2>
          <p className="text-xl leading-relaxed text-muted-foreground mt-4">
            Soy <strong>{perfil.nombre}</strong>. Profesor e investigador especializado en la teoría y metodología de la geografía, con un enfoque crítico fuertemente asentado en la filosofía política del espacio y la economía política urbana. 
          </p>
          <p className="text-base text-muted-foreground">
            Actualmente me desempeño como {perfil.afiliacion}. Cuento con una trayectoria consolidada en docencia universitaria, estancias de investigación internacionales (Karlsruhe Institute of Technology en Alemania, Universidad Autónoma de Barcelona en España, y Universidad Federal de Goiás en Brasil) y en la dirección editorial científica, desempeñándome como:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-base text-muted-foreground">
            {perfil.editoriales.map((ed, i) => (
              <li key={i}>{ed}</li>
            ))}
          </ul>
        </section>

        {/* Grados Académicos */}
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold tracking-tight text-foreground">Formación Superior</h3>
          <div className="grid gap-3 sm:grid-cols-1">
            {perfil.grados.map((grado, i) => (
              <div key={i} className="p-4 rounded-lg bg-muted/40 border text-card-foreground">
                <p className="font-medium text-base">{grado}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Líneas de Investigación */}
        <section className="space-y-6">
          <h3 className="text-2xl font-semibold tracking-tight text-foreground">Líneas de Investigación y Producción Teórica</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {lineasInvestigacion.map((linea, i) => (
              <div key={i} className="p-6 rounded-xl bg-card border shadow-sm space-y-2 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-bold tracking-tight text-foreground">{linea.titulo}</h4>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{linea.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Conectividad Académica */}
        <section className="space-y-6">
          <h3 className="text-2xl font-semibold tracking-tight text-foreground">Redes y Repositorios Científicos</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {enlacesAcademicos.map((enlace, i) => (
              <a
                key={i}
                href={enlace.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border bg-card hover:bg-muted/60 transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg text-primary group-hover:underline">
                      {enlace.plataforma}
                    </span>
                    <svg className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 leading-normal">
                    {enlace.label}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
