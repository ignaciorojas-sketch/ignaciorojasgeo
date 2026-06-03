import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import heroImg from "@/assets/hero-valpo.jpg"; // Puedes cambiar esta imagen por una de tu preferencia

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Krisis — Bitácora de Geografía Crítica" },
      { name: "description", content: "Espacio de reflexión y análisis sobre filosofía política del espacio, economía política urbana y las krisis territoriales contemporáneas." },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  // Arreglo de artículos traspasados desde tu Wix (Krisis)
  // Puedes ir alimentando este objeto con el texto completo o resúmenes de tus entradas
  const publicaciones = [
    {
      id: "krisis-espacial-vivienda-valparaiso",
      titulo: "Krisis y desigualdad residencial en el Valparaíso neoliberal",
      fecha: "Mayo 2026",
      categoria: "Economía Política Urbana",
      resumen: "Un examen crítico sobre cómo los marcos éticos y las dinámicas de acumulación de capital han moldeado la segregación socio-espacial y la precarización habitacional en los cerros de Valparaíso.",
      leerMas: "/blog/krisis-espacial-vivienda-valparaiso"
    },
    {
      id: "filosofia-politica-del-espacio",
      titulo: "La dimensión ética del territorio: Notas sobre filosofía política del espacio",
      fecha: "Marzo 2026",
      categoria: "Filosofía Política",
      resumen: "Reflexiones en torno a la producción del espacio bajo el modelo neoliberal. ¿Es posible articular una teoría de la justicia socio-espacial desde la geografía crítica latinoamericana?",
      leerMas: "/blog/filosofia-politica-del-espacio"
    },
    {
      id: "itinerarios-urbanos-pedagogia",
      titulo: "El barrio como espacio pedagógico: Itinerarios urbanos y educación crítica",
      fecha: "Enero 2026",
      categoria: "Educación Geográfica",
      resumen: "Análisis metodológico sobre el uso de la observación directa y los recorridos territoriales como herramientas de transformación didáctica en contextos de educación urbano-mapuche.",
      leerMas: "/blog/itinerarios-urbanos-pedagogia"
    }
  ];

  return (
    <>
      {/* Cabecera del Blog con la identidad de Krisis */}
      <PageHero 
        image={heroImg} 
        eyebrow="Bitácora de Geografía Crítica" 
        title="KRISIS" 
      />
      
      <div className="mx-auto max-w-4xl px-6 py-16 space-y-12">
        
        {/* Manifiesto / Presentación del Blog */}
        <div className="p-6 rounded-xl bg-muted/40 border border-primary/10 max-w-none text-center md:text-left">
          <p className="text-base text-muted-foreground leading-relaxed">
            Bienvenido a <strong>Krisis</strong>, un archivo digital y cuaderno de notas dedicado al examen epistemológico de la geografía, las contradicciones de la economía política urbana, la educación geográfica y el registro analítico del territorio desde Valparaíso.
          </p>
        </div>

        {/* Listado Dinámico de Entradas */}
        <section className="space-y-8">
          <h3 className="text-2xl font-semibold tracking-tight text-foreground border-b pb-2">
            Publicaciones recientes
          </h3>
          
          <div className="grid gap-8">
            {publicaciones.map((post) => (
              <article 
                key={post.id} 
                className="p-6 rounded-xl border bg-card hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  {/* Meta información */}
                  <div className="flex items-center space-x-3 text-xs font-medium">
                    <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
                      {post.categoria}
                    </span>
                    <span className="text-muted-foreground">
                      {post.fecha}
                    </span>
                  </div>
                  
                  {/* Título */}
                  <h4 className="text-xl font-bold tracking-tight text-foreground hover:text-primary transition-colors">
                    {post.titulo}
                  </h4>
                  
                  {/* Resumen */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {post.resumen}
                  </p>
                </div>

                {/* Enlace de lectura - Ajustado a la arquitectura de TanStack Router */}
                <div>
                  <span className="inline-flex items-center text-sm font-semibold text-primary hover:underline cursor-pointer">
                    Leer artículo completo
                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
