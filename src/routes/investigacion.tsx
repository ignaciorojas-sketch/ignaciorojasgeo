import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import heroImg from "@/assets/hero-valpo.jpg";

export const Route = createFileRoute("/investigacion")({
  head: () => ({
    meta: [
      { title: "Investigación — Ignacio Rojas Rubio" },
      { name: "description", content: "Libros, artículos académicos, proyectos de investigación, ponencias y trabajo de campo por Ignacio Rojas-Rubio." },
    ],
  }),
  component: InvestigacionPage,
});

function InvestigacionPage() {
  const [ejeActivo, setEjeActivo] = useState<"publicaciones" | "proyectos" | "congresos" | "campo">("publicaciones");

  return (
    <>
      <PageHero image={heroImg} eyebrow="03 / Trayectoria" title="Investigación" />
      
      <div className="mx-auto max-w-5xl px-6 py-16">
        
        {/* REDES ACADÉMICAS Y REPOSITORIOS */}
        <section className="mb-12 p-6 rounded-xl bg-card border shadow-sm space-y-4">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            [ Perfiles Académicos e Indexación ]
          </h3>
          <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-4 pt-1">
            <a
              href="https://orcid.org/0000-0001-5003-141X"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 border rounded-lg bg-muted/30 hover:border-primary/30 hover:bg-muted/50 transition-all text-xs font-mono"
            >
              <span>ORCID</span>
              <span className="text-[10px] text-muted-foreground">→</span>
            </a>
            <a
              href="https://www.scopus.com/authid/detail.uri?authorId=57204360068"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 border rounded-lg bg-muted/30 hover:border-primary/30 hover:bg-muted/50 transition-all text-xs font-mono"
            >
              <span>Scopus</span>
              <span className="text-[10px] text-muted-foreground">→</span>
            </a>
            <a
              href="https://scholar.google.com/citations?user=Yeo-sOgAAAAJ&hl=en&source=sh/x/srp/wr/m1/0&kgs=546640a28aeb4af7&utm_source=sh/x/srp/wr/m1/0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 border rounded-lg bg-muted/30 hover:border-primary/30 hover:bg-muted/50 transition-all text-xs font-mono"
            >
              <span>Google Scholar</span>
              <span className="text-[10px] text-muted-foreground">→</span>
            </a>
            <a
              href="https://github.com/ignaciorojas-sketch"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 border rounded-lg bg-muted/30 hover:border-primary/30 hover:bg-muted/50 transition-all text-xs font-mono"
            >
              <span>GitHub Repository</span>
              <span className="text-[10px] text-muted-foreground">→</span>
            </a>
          </div>
        </section>

        {/* NAVEGACIÓN INTERNA DE INVESTIGACIÓN */}
        <nav className="flex flex-wrap gap-2 border-b pb-4 mb-8">
          <button
            onClick={() => setEjeActivo("publicaciones")}
            className={`px-4 py-2 text-xs font-mono font-bold tracking-tight rounded-lg transition-all border ${
              ejeActivo === "publicaciones" 
                ? "bg-primary text-primary-foreground border-primary" 
                : "bg-muted/50 text-muted-foreground border-transparent hover:bg-muted"
            }`}
          >
            [ Publicaciones ]
          </button>
          <button
            onClick={() => setEjeActivo("proyectos")}
            className={`px-4 py-2 text-xs font-mono font-bold tracking-tight rounded-lg transition-all border ${
              ejeActivo === "proyectos" 
                ? "bg-primary text-primary-foreground border-primary" 
                : "bg-muted/50 text-muted-foreground border-transparent hover:bg-muted"
            }`}
          >
            [ Proyectos y Pasantías ]
          </button>
          <button
            onClick={() => setEjeActivo("congresos")}
            className={`px-4 py-2 text-xs font-mono font-bold tracking-tight rounded-lg transition-all border ${
              ejeActivo === "congresos" 
                ? "bg-primary text-primary-foreground border-primary" 
                : "bg-muted/50 text-muted-foreground border-transparent hover:bg-muted"
            }`}
          >
            [ Congresos y Divulgación ]
          </button>
          <button
            onClick={() => setEjeActivo("campo")}
            className={`px-4 py-2 text-xs font-mono font-bold tracking-tight rounded-lg transition-all border ${
              ejeActivo === "campo" 
                ? "bg-primary text-primary-foreground border-primary" 
                : "bg-muted/50 text-muted-foreground border-transparent hover:bg-muted"
            }`}
          >
            [ Trabajo de Campo ]
          </button>
        </nav>

        {/* CONTENEDOR DINÁMICO */}
        <div className="min-h-[350px]">
          
          {/* EJE 1: PUBLICACIONES */}
          {ejeActivo === "publicaciones" && (
            <div className="space-y-6">
              <div className="text-xs text-muted-foreground max-w-2xl">
                <h4 className="text-base font-bold text-foreground mb-1">Producción Bibliográfica y Editorial</h4>
                <p>Índice de libros, artículos académicos y columnas de opinión académicas.</p>
              </div>

              {/* Grid de Columnas de Opinión */}
              <div className="grid gap-4 md:grid-cols-3">
                <a
                  href="https://g5noticias.cl/2021/08/26/academico-upla-acusa-que-existe-una-folclorizacion-de-la-cultura-mapuche/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 border rounded-xl bg-card flex flex-col justify-between shadow-sm hover:border-primary/30 transition-all group"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono uppercase text-primary font-bold">
                      // Columna de Opinión Académica
                    </span>
                    <h5 className="font-bold text-foreground text-xs tracking-tight group-hover:text-primary transition-colors leading-snug">
                      Académico UPLA acusa que existe una folclorización de la cultura Mapuche
                    </h5>
                  </div>
                  <div className="pt-4 flex items-center justify-between text-[10px] font-mono text-muted-foreground border-t border-dashed mt-4">
                    <span>G5Noticias (2021)</span>
                    <span>Leer →</span>
                  </div>
                </a>

                <a
                  href="https://www.elmostrador.cl/dia/2020/06/26/investigadores-de-cuatro-universidades-critican-medidas-economicas-del-gobierno-para-valparaiso/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 border rounded-xl bg-card flex flex-col justify-between shadow-sm hover:border-primary/30 transition-all group"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono uppercase text-primary font-bold">
                      // Columna de Opinión Académica
                    </span>
                    <h5 className="font-bold text-foreground text-xs tracking-tight group-hover:text-primary transition-colors leading-snug">
                      Investigadores de cuatro universidades critican medidas económicas del gobierno para Valparaíso
                    </h5>
                  </div>
                  <div className="pt-4 flex items-center justify-between text-[10px] font-mono text-muted-foreground border-t border-dashed mt-4">
                    <span>El Mostrador (2020)</span>
                    <span>Leer →</span>
                  </div>
                </a>

                <a
                  href="https://upla.cl/noticias/2026/01/21/incendios-forestales-en-chile-nada-nuevo-que-contar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 border rounded-xl bg-card flex flex-col justify-between shadow-sm hover:border-primary/30 transition-all group"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono uppercase text-primary font-bold">
                      // Columna de Opinión Académica
                    </span>
                    <h5 className="font-bold text-foreground text-xs tracking-tight group-hover:text-primary transition-colors leading-snug">
                      Incendios forestales en Chile: nada nuevo que contar
                    </h5>
                  </div>
                  <div className="pt-4 flex items-center justify-between text-[10px] font-mono text-muted-foreground border-t border-dashed mt-4">
                    <span>UPLA Noticias (2026)</span>
                    <span>Leer →</span>
                  </div>
                </a>
              </div>

              <div className="pt-4 text-center">
                <p className="text-xs text-muted-foreground font-mono">
                  Pronto se subirá más material de libros y artículos académicos en esta sección.
                </p>
              </div>
            </div>
          )}

          {/* EJE 2: PROYECTOS Y PASANTÍAS */}
          {ejeActivo === "proyectos" && (
            <div className="space-y-6">
              <div className="text-xs text-muted-foreground max-w-2xl">
                <h4 className="text-base font-bold text-foreground mb-1">Financiamiento, Redes e Investigación Institucional</h4>
                <p>Historial de proyectos de investigación adjudicados y estancias o pasantías de investigación nacionales e internacionales.</p>
              </div>
              <div className="py-12 text-center border border-dashed rounded-xl bg-muted/20">
                <p className="text-sm text-muted-foreground font-mono">
                  Pronto se subirá más material en esta sección.
                </p>
              </div>
            </div>
          )}

          {/* EJE 3: CONGRESOS Y DIVULGACIÓN */}
          {ejeActivo === "congresos" && (
            <div className="space-y-6">
              <div className="text-xs text-muted-foreground max-w-2xl">
                <h4 className="text-base font-bold text-foreground mb-1">Transferencia de Conocimiento y Debate Público</h4>
                <p>Ponencias presentadas, actas de charlas o conferencias escritas y registros audiovisuales de intervenciones académicas.</p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href="https://www.youtube.com/watch?v=gR-l7WsVDIs&t=535s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border rounded-xl bg-card flex items-center justify-between shadow-sm hover:border-primary/30 transition-all group"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase text-primary font-bold">
                      // Video de Charla / Conferencia
                    </span>
                    <h5 className="text-xs font-mono text-muted-foreground group-hover:text-foreground transition-colors">
                      gR-l7WsVDIs
                    </h5>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground group-hover:text-primary transition-colors pl-2">
                    [ Ver ]
                  </span>
                </a>

                <a
                  href="https://www.youtube.com/watch?v=Nowjn2SRMx8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border rounded-xl bg-card flex items-center justify-between shadow-sm hover:border-primary/30 transition-all group"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase text-primary font-bold">
                      // Video de Charla / Conferencia
                    </span>
                    <h5 className="text-xs font-mono text-muted-foreground group-hover:text-foreground transition-colors">
                      Nowjn2SRMx8
                    </h5>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground group-hover:text-primary transition-colors pl-2">
                    [ Ver ]
                  </span>
                </a>

                <a
                  href="https://www.youtube.com/watch?v=BuyCG8Efj27s&t=315s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border rounded-xl bg-card flex items-center justify-between shadow-sm hover:border-primary/30 transition-all group"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase text-primary font-bold">
                      // Video de Charla / Conferencia
                    </span>
                    <h5 className="text-xs font-mono text-muted-foreground group-hover:text-foreground transition-colors">
                      UyCG8Efj27s
                    </h5>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground group-hover:text-primary transition-colors pl-2">
                    [ Ver ]
                  </span>
                </a>

                <a
                  href="https://www.youtube.com/watch?v=HK3FcuxxyII&t=5391s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border rounded-xl bg-card flex items-center justify-between shadow-sm hover:border-primary/30 transition-all group"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase text-primary font-bold">
                      // Video de Charla / Conferencia
                    </span>
                    <h5 className="text-xs font-mono text-muted-foreground group-hover:text-foreground transition-colors">
                      HK3FcuxxyII
                    </h5>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground group-hover:text-primary transition-colors pl-2">
                    [ Ver ]
                  </span>
                </a>

                <a
                  href="https://www.youtube.com/watch?v=5U8S996zalY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border rounded-xl bg-card flex items-center justify-between shadow-sm hover:border-primary/30 transition-all group"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase text-primary font-bold">
                      // Video de Charla / Conferencia
                    </span>
                    <h5 className="text-xs font-mono text-muted-foreground group-hover:text-foreground transition-colors">
                      5U8S996zalY
                    </h5>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground group-hover:text-primary transition-colors pl-2">
                    [ Ver ]
                  </span>
                </a>
              </div>

              <div className="pt-4 text-center">
                <p className="text-xs text-muted-foreground font-mono">
                  Pronto se subirá más material escrito de ponencias y actas en esta sección.
                </p>
              </div>
            </div>
          )}

          {/* EJE 4: TRABAJO DE CAMPO */}
          {ejeActivo === "campo" && (
            <div className="space-y-6">
              <div className="text-xs text-muted-foreground max-w-2xl">
                <h4 className="text-base font-bold text-foreground mb-1">Registros y Metodologías In Situ</h4>
                <p>Bitácoras, sistematizaciones y archivos derivados del trabajo de campo de investigación territorial.</p>
              </div>
              <div className="py-12 text-center border border-dashed rounded-xl bg-muted/20">
                <p className="text-sm text-muted-foreground font-mono">
                  Pronto se subirá más material en esta sección.
                </p>
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
}
