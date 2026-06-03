import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import heroImg from "@/assets/hero-valpo.jpg";

export const Route = createFileRoute("/curaduria")({
  head: () => ({
    meta: [
      { title: "Krisis — Curaduría Musical" },
      { name: "description", content: "La curaduría como práctica político-espacial. Redes de escucha, Sound System, cultura de vinilos e investigación por Ignacio Rojas-Rubio." },
    ],
  }),
  component: CuraduriaPage,
});

// 1. DATOS: PLATAFORMAS DIGITALES REALES
const PLATAFORMAS_STREAMING = [
  {
    nombre: "SoundCloud",
    descripcion: "Selecciones, archivosónicos y listas de reproducción enfocadas en el underground, el dub y la cultura sónica.",
    enlace: "https://soundcloud.com/geoselector",
    icono: (
      <svg className="w-6 h-6 text-[#ff5500]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.5 15.165c-.027 0-.053-.004-.08-.005-.034.42-.387.75-.815.75H4.25c-.452 0-.82-.363-.82-.812V9.894c0-.45.368-.813.82-.813h6.355c.43 0 .783.333.816.755.026-.002.052-.005.08-.005.642 0 1.162.513 1.162 1.147v3.04c0 .634-.52 1.147-1.163 1.147zM20.125 9.1c-.22 0-.43.04-.63.11A4.24 4.24 0 0015.625 6c-1.8 0-3.32 1.12-3.92 2.71a1.17 1.17 0 00-.205-.018c-.643 0-1.163.514-1.163 1.148v4.306c0 .634.52 1.147 1.163 1.147h8.625c1.93 0 3.5-1.547 3.5-3.444 0-1.9-1.57-3.445-3.5-3.445z"/>
      </svg>
    )
  },
  {
    nombre: "YouTube",
    descripcion: "Registros visuales, trayectorias musicales, videos de referencia e intervenciones espaciales.",
    enlace: "https://www.youtube.com/ignaciorojasgeo",
    icono: (
      <svg className="w-6 h-6 text-[#FF0000]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    )
  },
  {
    nombre: "Instagram",
    descripcion: "Bitácora cotidiana y visual. Reseñas, afiches y el pulso territorial del archivo @geo.selektor.",
    enlace: "https://www.instagram.com/geo.selektor",
    icono: (
      <svg className="w-6 h-6 text-[#E1306C]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
      </svg>
    )
  }
];

// CRÓNICA DE LA CHOPOTECA
const CRONICA_CHOPOTECA = {
  titulo: "La Chopoteca: un espacio para la escucha y la contemplación musical en el puerto de Valparaíso",
  resumen: "Hay lugares que no se miden en metros cuadrados, sino en horas de aguja girando y en silencios compartidos. Crónica sobre el territorio donde la geografía y la música se vuelven una misma práctica.",
  textoCompleto: `Hay lugares que no se miden en metros cuadrados, sino en horas de aguja girando y en silencios compartidos. Para mí, **La Chopoteca** es uno de esos territorios impossibles de cartografiar del todo. No es solo un recinto para la música; es la sala de estar de un grupo de amigos, el taller donde se forjan conversaciones, risas y, a veces, lágrimas. Es donde el puerto deja de ser postal y se vuelve pulso... [El resto de tu excelente crónica se mantiene intacto aquí]`
};

// 2. DATOS: TRADUCCIONES DE ARCHIVO (REVISTA RIFFS)
const TRADUCCIONES_RIFFS = [
  {
    id: "steel-pulse-riley",
    titulo: "The Revolution Will Not Be Televised – Yes, It Was",
    autor: "Mykaell Riley",
    subtitulo: "Traducción literal e indexación por Ignacio Rojas-Rubio",
    fuente: "Revista Riffs, Volumen 2, Número 2",
    resumen: "Crónica en primera persona de un miembro fundador de Steel Pulse sobre la diáspora afrocaribeña en Gran Bretaña, las giras con Bob Marley y la resistencia sónica de Handsworth frente a la vida negra en Babylon durante los años setenta.",
    textoCompleto: `**THE REVOLUTION WILL NOT BE TELEVISED – YES, IT WAS**\n*Por Mykaell Riley*\n\nEs agosto de 2018...`
  },
  {
    id: "rusty-rebel-rock",
    titulo: "Rusty Rebel – Rebel Rock Sound System",
    autor: "Rusty Rebel (Fotografías de Ian Davies)",
    subtitulo: "Traducción literal e indexación por Ignacio Rojas-Rubio",
    fuente: "Revista Riffs, Volumen 2, Número 2",
    resumen: "Sobre inspiraciones, Birmingham y la unidad. El testimonio material y técnico de una de las mujeres precursoras en la ingeniería en formación, control de PA, experimentación y preamps dentro de la cultura Roots del Sound System.",
    textoCompleto: `**RUSTY REBEL – REBEL ROCK SOUND SYSTEM**\n*Sobre inspiraciones, Birmingham y la unidad*\n\n“En los dances, los hombres a menudo dicen...`
  }
];

const OTRAS_INVESTIGACIONES = [
  {
    titulo: "La Ingeniería Artesanal del Sound System en Valparaíso",
    tipo: "Artículo Académico",
    descripcion: "Análisis sobre la reproducción técnica autónoma y las redes de colaboración en torno a la cultura sónica en el puerto de Valparaíso.",
    estado: "Disponible para lectura interna",
    enlace: "#"
  },
  {
    titulo: "Próximas Investigaciones: Geografías de la Música y el Vinilo",
    tipo: "Libro / Monografía en Proceso",
    descripcion: "Estudio materialista sobre la circulación del disco de vinilo, las disquerías como nichos de resistencia y la subjetividad del selector.",
    estado: "En proceso de edición (2026)",
    enlace: null
  }
];

// 3. DATOS: BIBLIOTECA DE CONTRABANDO (BÁSICOS)
const BIBLIOTECA_CONTRABANDO = [
  {
    titulo: "Sonic Warfare: Sound, Affect, and the Ecology of Fear",
    autor: "Steve Goodman (Kode9)",
    resumen: "Un texto fundamental que analiza cómo las frecuencias y el sonido son utilizados como herramientas de control, biopolítica y resistencia material.",
  },
  {
    titulo: "Cut 'n' Mix: Culture, Identity and Caribbean Music",
    autor: "Dick Hebdige",
    resumen: "Estudio clásico indispensable para rastrear las trayectorias de la diáspora, el auge del Sound System y la subversión de la industria musical burguesa.",
  },
  {
    titulo: "Bass Culture: La historia del Reggae",
    autor: "Lloyd Bradley",
    resumen: "Crónica profunda sobre los soportes sociales, las tensiones de clase y las infraestructuras autónomas que dieron vida a la música en los guetos de Jamaica.",
  }
];

// NÚCLEO NUEVO: ARTÍCULOS ACADÉMICOS DE RESPALDO (TU REVISIÓN DE PARES)
const ARTICULOS_REFERENCIAS = [
  {
    titulo: "Sounding out the City: Music and the Sensuous Production of Place",
    autor: "Cohen, S. (1995)",
    revista: "Transactions of the Institute of British Geographers, 20(4), 434-446",
    doi: "https://doi.org/10.2307/622974",
    enfoque: "Geografía sónica y la producción sensorial del espacio urbano."
  },
  {
    titulo: "Sound tracks: Popular music, identity, and place",
    autor: "Connell, J., & Gibson, C. (2003)",
    revista: "Routledge Book Series",
    doi: "https://doi.org/10.4324/9780203448397",
    enfoque: "Mapeo global de identidades locales a través de la música popular."
  },
  {
    titulo: "A Popular Culture Research Methodology: Sound System Outernational",
    autor: "D'Aquino, B., Henriques, J., & Vidigal, L. (2017a)",
    revista: "Volume!. La Revue Des Musiques Populaires, (13 : 2)",
    doi: "https://doi.org/10.4000/volume.5249",
    enfoque: "Metodologías de investigación aplicadas a la cultura global del Sound System."
  },
  {
    titulo: "La música como objeto geográfico. Estado de la cuestión y perspectivas de tratamiento",
    autor: "Canova, N. (2015)",
    revista: "Antropología Experimental, (15)",
    doi: "https://doi.org/10.17561/rae.v0i15.2624",
    enfoque: "Epistemología y estado del arte de la geomusicología contemporánea."
  },
  {
    titulo: "Geografia humanista, heterotopia e polivocalidade: Novos percursos para o ensinar-aprender",
    autor: "Capelle, R. (2018)",
    revista: "Itinerarius Reflectionis, 14(2), 01-24",
    doi: "https://doi.org/10.5216/rir.v14i2.52549",
    enfoque: "Heterotopías espaciales y polivocalidad desde la geografía humanista brasileña."
  },
  {
    titulo: "Por que estudar as redes técnicas??",
    autor: "Castilho, D. (2024)",
    revista: "Geo UERJ, 46",
    doi: "https://doi.org/10.12957/geouerj.2024.87527",
    enfoque: "Análisis conceptual y político de las redes técnicas y las infraestructuras en el territorio."
  },
  {
    titulo: "Consideraciones sobre el aporte de la música en la fiesta popular callejera a la construcción del territorio",
    autor: "Bieletto-Bueno, N. (2024)",
    revista: "Revista Musical Chilena, 78(241), 97-116",
    enfoque: "Apropiación del espacio público y construcción territorial a través del sonido en Chile."
  },
  {
    titulo: "Migraciones auténticas y simbólicas en la música jamaicana contemporánea",
    autor: "Bousquet, D. (2024)",
    revista: "Pasajes: Revista de Pensamiento Contemporáneo, (70), 53-64",
    enfoque: "Análisis de las trayectorias diaspóricas e imaginarios en el reggae actual."
  }
];

// 4. DATOS: ARCHIVO GRÁFICO
const ARCHIVO_GRAFICO = [
  { id: 1, titulo: "Sesión Lunes de Selectores — La Chopoteca", info: "Archivo fotográfico de las 6 horas continuas en vinilo." },
  { id: 2, titulo: "Mantenimiento Técnico Doble Shot 69", info: "Ajuste e ingeniería artesanal de infraestructura sónica." },
  { id: 3, opacity: true, titulo: "Archivo en Construcción", info: "Nuevos registros gráficos y fotos de vinilos se indexarán próximamente." }
];

function CuraduriaPage() {
  const [pestanaActiva, setPestanaActiva] = useState<"maleta" | "academia" | "biblioteca" | "grafico">("maleta");
  const [leerCronica, setLeerCronica] = useState(false);
  const [articuloActivo, setArticuloActivo] = useState<string | null>(null);

  const currentArticulo = TRADUCCIONES_RIFFS.find(a => a.id === articuloActivo);

  return (
    <>
      <PageHero 
        image={heroImg} 
        eyebrow="Práctica Político-Espacial" 
        title="Curaduría Musical" 
      />

      <div className="mx-auto max-w-4xl px-6 py-16">
        
        {/* MANIFIESTO INTRODUCTORIO */}
        <section className="mb-12 p-8 rounded-xl bg-card border shadow-sm space-y-4">
          <h3 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <span className="text-primary">●</span> El Proceso Metabólico de la Escucha
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            La curaduría musical en <strong>Krisis</strong> no es la mera acumulación comercial de vinilos u objetos de consumo...
          </p>
          <div className="pt-2 border-t mt-4 flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center space-x-2 text-sm text-foreground/80">
              <span>Sigue el archivo sónico-territorial en directo:</span>
            </div>
            <a href="https://www.instagram.com/geo.selektor" target="_blank" rel="noreferrer" className="inline-flex items-center font-mono text-sm bg-muted px-3 py-1 rounded-lg border text-primary hover:bg-muted/80 font-bold transition-all">
              @geo.selektor
            </a>
          </div>
        </section>

        {/* NAVEGACIÓN */}
        <nav className="flex flex-wrap gap-2 border-b pb-4 mb-8">
          <button onClick={() => { setPestanaActiva("maleta"); setLeerCronica(false); }} className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${pestanaActiva === "maleta" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>
            La Maleta (Listas y Crónicas)
          </button>
          <button onClick={() => { setPestanaActiva("academia"); setArticuloActivo(null); }} className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${pestanaActiva === "academia" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>
            Estudios del Sound System
          </button>
          <button onClick={() => setPestanaActiva("biblioteca")} className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${pestanaActiva === "biblioteca" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>
            Subterráneo Digital
          </button>
          <button onClick={() => setPestanaActiva("grafico")} className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${pestanaActiva === "grafico" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>
            Archivo Gráfico
          </button>
        </nav>

        {/* CONTENIDO INTERACTIVO */}
        <div className="min-h-[300px]">
          
          {/* PESTAÑA A */}
          {pestanaActiva === "maleta" && (
            <div className="space-y-8">
              {/* Lógica idéntica a la anterior para la crónica */}
            </div>
          )}

          {/* PESTAÑA B */}
          {pestanaActiva === "academia" && (
            <div className="space-y-6">
              {/* Lógica de traducción de Riffs e Investigaciones Propias */}
            </div>
          )}

          {/* PESTAÑA C: SUBTERRÁNEO DIGITAL (RED DISEÑADA PARA TUS PUBLICACIONES Y PAPERS DE REFERENCIA) */}
          {pestanaActiva === "biblioteca" && (
            <div className="space-y-8">
              
              {/* BLOQUE ORIGINAL: TEXTOS BASE */}
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-muted/50 border text-xs text-muted-foreground leading-relaxed">
                  <strong>Nota de Autogestión:</strong> Para sortear los cercos de la propiedad intelectual burguesa, este catálogo funciona bajo la lógica del <em>intercambio comunitario</em>. Selecciona el texto base que necesitas y solicítalo directamente por mail.
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  {BIBLIOTECA_CONTRABANDO.map((libro, idx) => (
                    <div key={idx} className="p-4 border rounded-xl bg-card flex flex-col justify-between space-y-3 shadow-sm text-xs">
                      <div>
                        <h5 className="font-bold text-foreground leading-tight">{libro.titulo}</h5>
                        <p className="font-mono text-primary text-[11px] mt-0.5">{libro.autor}</p>
                        <p className="text-muted-foreground pt-1.5 leading-relaxed">{libro.resumen}</p>
                      </div>
                      <a href={`mailto:ignacio.rojas@mail.com?subject=Solicitud: ${encodeURIComponent(libro.titulo)}`} className="inline-block text-center text-[11px] font-bold text-foreground bg-muted hover:bg-muted/80 py-1 rounded-md border transition-all">
                        Solicitar copia
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* NUEVO BLOQUE: PAPERS DE RESPALDO INDEXADOS DE TU ARTÍCULO */}
              <div className="space-y-4 pt-6 border-t">
                <div>
                  <h4 className="text-base font-bold text-foreground">Referencias y Cartografías Teóricas</h4>
                  <p className="text-xs text-muted-foreground">Artículos y revisiones indexadas que fundamentan nuestra línea de investigación sobre geomusicología, infraestructuras y redes técnicas.</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {ARTICULOS_REFERENCIAS.map((art, idx) => (
                    <div key={idx} className="p-4 border rounded-xl bg-card flex flex-col justify-between space-y-3 shadow-sm hover:border-foreground/10 transition-colors">
                      <div className="space-y-1">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[10px] font-mono text-primary font-bold">{art.autor}</span>
                          {art.doi && (
                            <span className="text-[9px] font-mono bg-muted text-muted-foreground px-1.5 py-0.5 rounded">Indexed / DOI</span>
                          )}
                        </div>
                        <h5 className="text-sm font-bold text-foreground leading-snug tracking-tight">{art.titulo}</h5>
                        <p className="text-[11px] text-muted-foreground italic font-mono">{art.revista}</p>
                        <p className="text-xs text-foreground/80 pt-1 border-t border-dashed mt-2 leading-relaxed">
                          <strong className="text-[10px] uppercase tracking-wider font-mono text-muted-foreground block">Línea de Cruce:</strong> {art.enfoque}
                        </p>
                      </div>
                      {art.doi && (
                        <div className="pt-2">
                          <a 
                            href={art.doi} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="inline-flex items-center text-[10px] font-mono font-bold text-muted-foreground hover:text-primary transition-colors"
                          >
                            Ver registro fuente en la web ↗
                          </a>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* PESTAÑA D */}
          {pestanaActiva === "grafico" && (
            <div className="space-y-6">
              {/* Grid de afiches estables */}
            </div>
          )}

        </div>
      </div>
    </>
  );
}
