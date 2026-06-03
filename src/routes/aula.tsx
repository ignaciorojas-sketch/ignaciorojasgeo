import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import heroImg from "@/assets/hero-valpo.jpg";

export const Route = createFileRoute("/aula")({
  head: () => ({
    meta: [
      { title: "Aula — Profe Nacho" },
      { name: "description", content: "Trabajo de campo, manuales de geografía crítica, laboratorios open access y vinculación con organizaciones sociales." },
    ],
  }),
  component: AulaPage,
});

const ENSEÑANZA_GEOGRAFIA = [
  {
    titulo: "Aprehender el espacio geográfico: del conocimiento intuitivo al concientizado",
    autores: "Joaquín Gallastegui Vega, Ignacio Rojas Rubio",
    institucion: "Facultad de Humanidades, Universidad de Playa Ancha",
    financiamiento: "Convenio de Desempeño, Ministerio de Educación de Chile",
    registro: "RPI: 259.805 | ISBN: 978-956-296-140-0",
    tipo: "Libro / Manual de Aula"
  },
  {
    titulo: "Universidad y barrio. Diálogo entre dos saberes",
    autores: "Joaquín Gallastegui Vega, Ignacio Rojas Rubio, Romina Pérez Muñoz, Juan Galea Alarcón",
    institucion: "Facultad de Humanidades, Universidad de Playa Ancha",
    financiamiento: "Proyecto CD UPA 1301, Ministerio de Educación de Chile",
    registro: "RPI: 285.410 | ISBN: 978-956-296-178-3",
    tipo: "Libro / Coinvestigación Territorial"
  }
];

function AulaPage() {
  const [seccionActiva, setSeccionActiva] = useState<"geografia" | "software" | "organizaciones">("geografia");

  return (
    <>
      <PageHero image={heroImg} eyebrow="02 / Docencia" title="Aula" />
      
      <div className="mx-auto max-w-5xl px-6 py-16">
        
        {/* NAVEGACIÓN INTERNA */}
        <nav className="flex flex-wrap gap-2 border-b pb-4 mb-8">
          <button
            onClick={() => setSeccionActiva("geografia")}
            className={`px-4 py-2 text-xs font-mono font-bold tracking-tight rounded-lg transition-all border ${
              seccionActiva === "geografia" 
                ? "bg-primary text-primary-foreground border-primary" 
                : "bg-muted/50 text-muted-foreground border-transparent hover:bg-muted"
            }`}
          >
            [ Terreno y Geografía Crítica ]
          </button>
          <button
            onClick={() => setSeccionActiva("software")}
            className={`px-4 py-2 text-xs font-mono font-bold tracking-tight rounded-lg transition-all border ${
              seccionActiva === "software" 
                ? "bg-primary text-primary-foreground border-primary" 
                : "bg-muted/50 text-muted-foreground border-transparent hover:bg-muted"
            }`}
          >
            [ Laboratorio Open Access ]
          </button>
          <button
            onClick={() => setSeccionActiva("organizaciones")}
            className={`px-4 py-2 text-xs font-mono font-bold tracking-tight rounded-lg transition-all border ${
              seccionActiva === "organizaciones" 
                ? "bg-primary text-primary-foreground border-primary" 
                : "bg-muted/50 text-muted-foreground border-transparent hover:bg-muted"
            }`}
          >
            [ Vinculación Comunitaria ]
          </button>
        </nav>

        {/* CONTENEDOR DE CONTENIDOS */}
        <div className="min-h-[350px]">
          
          {/* SECCIÓN 1: ENSEÑANZA DE LA GEOGRAFÍA Y TERRENO */}
          {seccionActiva === "geografia" && (
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="p-4 rounded-lg bg-yellow-500/5 border border-yellow-500/20 text-xs text-muted-foreground leading-relaxed">
                  <strong className="text-foreground font-semibold flex items-center gap-1.5 mb-1">
                    ⚠️ Nota de Distribución y Derechos de Autor:
                  </strong>
                  Estos materiales son libres de venta por ser parte de proyectos del Ministerio de Educación de Chile y de la institución, por lo que son de libre distribución. Está estrictamente prohibida la copia sin citar o cualquier elemento que viole los derechos de autor y de la institución.
                </div>
              </div>

              {/* Listado de Libros */}
              <div className="grid gap-6 md:grid-cols-2">
                {ENSEÑANZA_GEOGRAFIA.map((libro, idx) => (
                  <div key={idx} className="p-6 border rounded-xl bg-card flex flex-col justify-between space-y-4 shadow-sm">
                    <div className="space-y-3">
                      <span className="text-[10px] font-mono uppercase bg-primary/10 text-primary px-2 py-0.5 rounded border border-primary/20 font-semibold tracking-wider">
                        {libro.tipo}
                      </span>
                      <div>
                        <h5 className="font-bold text-foreground text-base tracking-tight leading-snug">
                          {libro.titulo}
                        </h5>
                        <p className="text-[11px] font-mono text-primary mt-1">
                          {libro.autores}
                        </p>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-dashed space-y-2 text-[11px] font-mono text-foreground/80">
                      <div className="text-[10px] text-muted-foreground leading-normal">
                        <span className="font-sans block font-bold text-foreground uppercase tracking-wide text-[9px] mb-0.5">Institución y Respaldo:</span>
                        {libro.institucion} <br />
                        <span className="text-primary/90">{libro.financiamiento}</span>
                      </div>
                      <div className="text-[10px] text-muted-foreground pt-1 flex items-center justify-between border-t border-muted">
                        <span>{libro.registro}</span>
                        <span className="text-emerald-600 font-bold bg-emerald-500/10 px-1.5 py-0.2 rounded text-[9px] uppercase tracking-wide">Libre Acceso</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SECCIÓN 2: LABORATORIO INTERACTIVO OPEN ACCESS */}
          {seccionActiva === "software" && (
            <div className="py-12 text-center border border-dashed rounded-xl bg-muted/20">
              <p className="text-sm text-muted-foreground font-mono">
                Pronto se subirá más material en esta sección.
              </p>
            </div>
          )}

          {/* SECCIÓN 3: VINCULACIÓN COMUNITARIA */}
          {seccionActiva === "organizaciones" && (
            <div className="py-12 text-center border border-dashed rounded-xl bg-muted/20">
              <p className="text-sm text-muted-foreground font-mono">
                Pronto se subirá más material en esta sección.
              </p>
            </div>
          )}

        </div>
      </div>
    </>
  );
}
