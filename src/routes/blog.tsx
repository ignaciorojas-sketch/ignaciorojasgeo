import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import heroImg from "@/assets/hero-valpo.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Krisis — Columnas Para-Académicas" },
      { name: "description", content: "Bitácora de reflexión, opinión y análisis territorial libre por el Dr. Ignacio Rojas-Rubio." },
    ],
  }),
  component: BlogPage,
});

// ARCHIVO DE COLUMNAS 100% COMPLETADO CON TUS SIETE ESCRITOS
const COLUMNAS_PARA_ACADEMICAS = [
  {
    id: "krisis-en-el-viejo-pancho",
    titulo: "Krisis en el viejo pancho",
    fecha: "Bitácora Krisis",
    resumen: "Reflexiones territoriales y apuntes críticos desde el espacio local.",
    textoCompleto: `Este blog surge como necesidad de plasmar diferentes reflexiones personales en un momento y espacio cruzado por el ordenamiento de los motivos de la existencia, de la vida y de nuestros puntos de fuga en una ciudad portuaria. El objetivo es externalizar, por medio de un lenguaje común, los vínculos entre la experiencia cotidiana de la reflexión académica, las irracionalidades del corazón con la mente y las formas políticas que asumen nuestras representaciones en el espacio vivido del capitalismo advanced.

Permitirme compartir mis reflexiones y sentires más profundos, nace producto del momento en el que busco nuevas experiencias que me permitan una fuga a la realidad y a la angustia individual que generan las arremetidas psíquicas del capitalismo. La necesidad de preguntarme ¿Cuál es el sentido de mi existencia en este mundo? Se transforma en un carrusel de emociones que busco responder por medio de las herramientas que he elaborado a lo largo de mi vida para enfrentar las contradicciones propias del ser, como un artesano que produce un artefacto sin la conciencia de sus actos.

La respuesta a esta compleja, radical y peligrosa interrogante puede llevar, a quien me lea, a empatizar (…o no) con las formas políticas que utilizamos como herramientas de sobrevivencia en una ciudad como Valparaíso. Algunos de mis textos tal vez se plasmaran de sin sentidos, al estar en la constante búsqueda de un mural donde plasmar mis fantasmas individuales para transformarlos en colectivos.

Temas como la música, el espacio, la ciudad, los paisajes y los momentos anacrónicos de una ciudad que lidia cotidianamente entre el pasado y el presente, entre la naturaleza y el asfalto, entre la decadencia y la resistencia, serán los motores de mi escritura y desahogo. Espero que cada entrada de este blog sea un espacio de reflexión y crítica a nuestras formas de sobrevivir antes las tempestades de la vida capitalista, las cuales, muchas veces, escondemos en nuestras individualidades y el espacio íntimo.

La primera y gran pregunta que me haré será ¿Cómo hemos lidiado con nuestro propios fantasmas en la ciudad y de qué forma este espacio nos ha permitido producir herramientas para enfrentarlos? Les invito a responderme… a compartir nuestras propias Krisis…`
  },
  {
    id: "primera-krisis-el-capitalismo-o-yo",
    titulo: "Primera krisis: el capitalismo o yo",
    fecha: "Bitácora Krisis",
    resumen: "Una mirada subjetiva y materialista a las contradicciones de la existencia bajo el modelo actual.",
    textoCompleto: `Como buen marxista, el concepto de crisis tiene una centralidad fundamental en mis reflexiones y pensamientos. De forma muy simple, podemos definir la crisis como momentos y procesos que el capitalismo crea como propias limitaciones productivas y de acumulación a la “expansión” económica, para renovarse, ajustar y generar nuevas formas de explotación humana. Desde hace algún tiempo el concepto de crisis, que le he dedicado parte de mi tiempo, se materializa y contrae en mi psiquis y lenguaje, se hace carne en mi cotidianidad y en mis acciones. Es común para mí hablar de “crisis de ansiedad”, “crisis emocional”, “crisis de pareja”, crisis, crisis, crisis…… pero, ¿qué tienen de privativo/común ambas interpretaciones de un mismo concepto?

Una primera reflexión que busca responder a la interrogante tiene relación con la escala de materialización. Mientras la crisis económica capitalista es una escala global y principalmente socio-espacial, la crisis psíquica es una escala individual, personal e íntima, representada en un cuerpo y alojada en nuestra cognición.

Un segundo punto que les diferencia es la forma en que la crisis es responsabilizada. En la crisis económica la responsabilidad es social, mientras que en el crisis de la psiquis la responsabilidad es individual, es decir, una unidad dividida de la totalidad social.

Y, un tercer eje de reflexión tiene relación con la espacialidad de la crisis. Mientras la primera se concretan en una condición global, multiescalar y euclidiana (en las geometrías del poder global y de sus consecuencias en las estructuras de clase). La de la psiquis es íntima, es corporeizada pero, a la vez, invisibilizada por la sociedad en su conjunto, transformándola en una “aespacilidad”, es decir, fuera de un espacio y un tiempo concreto.

Lo común, se puede sentir, vivir y percibir por medio del establecimiento de auto-límites que producen la crisis, ya sea económica o psíquica. En ambos el sentir de la crisis es una extirpación de la pertenencia y de la identidad social e individual. En ambas crisis nos sentimos extraños, ajenos a la realidad, en el marco de una constante incertidumbre del día a día y del futuro.

Creo que en este último párrafo se encuentra una de las claves para repensar la relación entre psiquis y economía, particularmente en la búsqueda de lo común, en las interacciones dialécticas que se presentan como posibilidades en un momento en que no encontramos respuestas, ni logramos ordenar las piezas del puzzle. Es en ese desorden y kaos donde se presentan las posibilidades de sobrevivencia o las posibilidades de deceso corporal y psíquico. La complejidad del momento en el que debemos tomar la decisión entre vivir o morir es una trama de sensaciones que en nuestra corporalidad no podemos controlar y que nos llevan a la desesperanza y al abismo.

Tomando nuevamente a Marx, debemos tener presente que el capitalismo es esencialmente corporal. Es desde estas corporalidades donde extrae fuerza y energía para la explotación y son esos propios métodos de subsistencia que nos hacen navegar hacia la tormenta y a que nos envolvamos en una crisis psquica que cada vez tiene más sentido relacional al modelo, especially en el periodo neoliberal.

Es con estas ideas donde inicio mi auto conocimiento histórico-espacial y de las vivencias personales que me llevaron a estar hoy en un momento complejo y de crisis. Sin ese ejercicio de memoria, tal vez, el tiempo del capital las hubiese invisibilizado, haciéndome creer que eran parte del pasado, no de mi presente. De ahí que comprendo mi KRISIS como una continuidad histórica, pero diferenciada espacialmente.

Esa diferencia espacial se da en los sucesos familiares,los cuales están determinados por el lugar que me tocó habitar (y que habito en ocasiones) en un pueblo, en el campo, en una familia obrera y popular. Hoy en el Viejo Pancho enfrento esos sucesos situados temporal y espacialmente en lo urbano, en el concreto. El propio puerto me da referencias sobre el sentir y la morfología de los lugares. Cuando miro las largas y estrechas escaleras de algunos rincones del puerto, automáticamente los transpongo a mi ansiedad: pareciera que es eterna, que aprieta mi cuerpo y cabeza, con una fuerza solo vista en una ciudad como Valparaíso. El puerto es la psiquis misma de decadencia humana.

Pareciera que ese patrimonio que tanto hablan es el de la psiquis. Es el patrimonio que nos dejan las ciudades en nuestros cuerpos y cognición en un lugar. Ahora les pregunto ¿Cómo viven sus KRISIS en sus lugares de sobrevivencia?`
  },
  {
    id: "krisis-2-el-espacio-la-musica-y-la-existencia",
    titulo: "Krisis 2: el espacio, la música y la existencia",
    fecha: "Bitácora Krisis",
    resumen: "Exploración fenomenológica y espacial que vincula las dimensiones del sonido y el habitar humano.",
    textoCompleto: `Hace un tiempo que tengo la inquietud de relacionar una dimensión de mi vida que me ha permitido contener las crisis de la psiquis, como es la música, y, por otro lado, mis reflexiones académicas en torno al espacio y su teorizacion ontologica y epistemica.

Desde una mirada ontologica, busco preguntarme (sin respuesta clara) sobre la relación entre espacio y música desde un punto de vista existencial e identitario. En este punto podemos plantear como hipótesis que el espacio y la música se vinculan como una producción central de la existencia humana, lo cual le da diferentes características identitarias que podemos vincular desde el cuerpo hasta las diferencias regionales y escalares. Estos dos últimos conceptos, región y escala, se enmarcan en el punto epistemológico de mi reflexión.

En mis reflexiones presentes sobre mi KRISIS, creo que la razón de existencia entre la música y el espacio como producción, son centrales para comprender la conciencia de uno mismo para mantenerse vivo. Ambos elementos se producen, por ejemplo, en el espacio del hogar donde diferentes expresiones musicales acompañan nuestro cotidiano. En el espacio del trabajo podemos escuchar una radio de fondo o ver a los/las trabajadoras (que tienen la posibilidad de hacerlo) con sus auriculares haciendo correr alguna lista de Spotify, en el campo un celular suena entre medio de los árboles cosechados o algún trabajador se canta su tonada o su silbido para acompañar la dura tarea. Otro punto que podemos mencionar es la música en los pueblos originarios, donde la base de esta como aspecto ceremonial, les da un punto a favor a nuestra hipótesis.

Desde un punto de vista psicológico, también aparece la razón de existencia humana de la música para la sobreviviencia. Al igual que el espacio, la música se ha transformado en un elemento de resistencia y sobrevivencia al capitalismo. La pregunta es si esto se ha traducido en un paso posterior, desde un punto de vista político, como es la música y el espacio como resistencia al neoliberalismo. Esto también está expresado en el cuerpo como una primera escala, por ejemplo, la vestimenta o los cortes de pelo se transformaron en una resistencia a lo normado por la sociedad burguesa. Otros ejemplos son la música y los ghettos, donde también se dan producciones musicales en espacios específicos que resistían a la industria musical o el uso del espacio público para realizar manifestaciones o protestas donde la música tiene un rol fundamental.

Hoy muchos de estos elementos son cada vez menos visibles por la propia razón de normatividad impuesta y la racionalidad del orden. El uso del espacio público responde a una dimensión netamente ideológica y especulativa de quienes gobiernan. Esto nos plantea otra interrogante sin resolver individualmente, que es ¿cómo se desarrolla una resistencia desde la música si el principal espacio, como es el público, está coartado para algunas expresiones o grupos?

Claramente desde estas interrogantes aparece el tema epistemic geográfico al analizarlo desde la música, no menos polémico para quienes trabajamos con el concepto de región. Y es que la escala regional se ha perdido como una categoría de estudio en el campo de la geografía cultural crítica, pero no por ello se ha perdido la producción espacial, lo cual destaco como punto de reflexión constante. Se pierde lo regional porque incluso antiguas tradiciones o festivales barriales se han perdido con el tiempo o perdido continuidad. Al perderse la escala barrial, desaparece la región como una categoría de estudio geográfico en este campo de análisis. Epistemicamente me queda la pregunta de ¿cuál es la categoría adecuada para referirse a los nuevos espacios de resistencia, particularmente en la ciudad?

Un poco de lo que iremos navegando en las próximas columnas tiene que ver con reflexiones personales sobre las aristas que toma la resistencia desde diferentes espacios y grupos o colectivos/as/es de personas que producen música en la ciudad de Valparaíso. Trataré de responder a las interrogantes propuestas y, si no es posible, espero que el intento permita superar mi KRISIS. Y tú ¿has resistido alguna KRISIS con música?`
  },
  {
    id: "de-la-krisis-psiquica-a-la-krisis-de-existencia-politico-material",
    titulo: "De la krisis psíquica a la krisis de existencia político-material",
    fecha: "Bitácora Krisis",
    resumen: "Análisis sobre la salud mental y su arraigo en las estructuras políticas y de producción material del entorno.",
    textoCompleto: `Hoy he despertado bajo el lamento democrático de una izquierda vacía.

Hoy nada ha cambiado en el país, las cosas siguen igual, pero la convicción ideológica y política sigue más firme que nunca (eso dicen algunxs…)

Hoy leo y escucho murmullos que buscan al culpable entre sus filas, entre las subjetividades, mientras el verdadero culpable se les presenta de forma concreta y material ante sus ojos. Aún no lo creen, porque el fascismo solo vivió en sus privilegios, al lado de ellos, fue el mismo el que les robo la brújula, pero la buscan entre el propio pueblo, el mismo que por ellos fue olvidado.

Hoy la izquierda reformista despierta desesperanzada, derrotada frentes a un antiproyecto de país que se fraguo en dictadura y que nos sigue oprimiendo en estos días. Fueron esos mismos los que descompusieron el trabajo territorial y de base diciéndonos que eso “no servía para nada” y que la única solución estaba en tomar el poder del modelo burgués: ¡les creímos, pero lo peor, lo siguen creyendo!

Le cedieron una parte de la mesa y de nuestra comida a quienes nos la quitan día a día, a quienes nos han llevado a esa KRISIS psíquica que nos encuentra sumidos en una depresión profunda y sin esperanzas, mientras SU esperanza estaba en asegurar sus puestos políticos y privilegios.

Hoy despierto con la tranquilidad de que no tengo nada que perder, que los privilegios que me otorgan por ser un académico, son los mismos que quiero para ese pueblo condenado por sus representantes, que con su moral intelectual culpan de ignorante a aquel que no tiene nada, mientras ellos lo tienen todo, o tuvieron (el poder)…

Yo no tengo miedo, porque ya tuve miedo cuando me enfrenté a la explotación, a la discriminación y al bullyng en mi niñez por ser popular (y por ir en un colegio católico) Yo no tengo miedo a una bala, a un golpe, o a un cara a cara con un fascista, porque la vida me ha dado tantos golpes que la bandera antifascista la llevo tatuada en mi espalda, para recordarme que la lucha es cotidiana y que no pasa por un voto coyuntural.

No tengo miedo a perder por defender lo que es justo para nuestra clase, porque siempre hemos perdido ante el discurso del reformismo que ha maquillado todo y que, al momento de marcar una posición clara, sigue manteniendo sus privilegios y sus puestos de poder… no tengo miedo porque no tuve nada, y no tengo miedo a perderlo todo…

La solidaridad concreta se vive en la KRISIS, la solidaridad solo se encuentra en la necesidad, en un tiempo y lugar común… estamos claros que con muchos que dijeron ser antifascistas en esta pasada: no tenemos lugares, ni espacios comunes… recuerda que no somos iguales, ni tampoco quiero que lo seamos.

Mis KRISIS, no son tus KRISIS…..`
  },
  {
    id: "ingenieria-artesanal-y-musica-reflexiones-cotidianas",
    titulo: "Ingeniería artesanal y música: reflexiones cotidianas",
    fecha: "20 dic 2025",
    resumen: "Notas sueltas sobre procesos de creación técnica manual, la escucha y las prácticas artísticas cotidianas.",
    textoCompleto: `Preamplifiador Quebrada Soundsystem, Valparaíso
La imposición de un modelo cuantitativo ha llevado a comprender muchos conceptos como parte de una realidad tecnificada, única y aparentemente incuestionable. El concepto de ingeniería es uno de ellos: suele asumirse desde una predefinición dada por los usos cotidianos del sistema técnico capitalista. Generalmente se la asocia a una “disciplina” que utiliza el conocimiento matemático para resolver problemas “prácticos”. Este carácter definitorio, entendido exclusivamente como disciplina, limita la posibilidad de pensar la ingeniería más allá de esa visión estrecha, impidiendo comprenderla como una dimensión central de la reproducción humana y social a lo largo de la historia.

Antes de continuar, creo importante decir que esta reflexión no nace en el ámbito académico. Surge fuera de la oficina, fuera del paper y fuera del aula. Es fruto del diálogo con un amigo productor de Caleta Gómez, el Médico Brujo, con quien nos conocemos hace más de quince años. En una de tantas conversaciones, él me planteaba la necesidad de reflexionar conceptos desde la experiencia y la práctica cotidiana del trabajo en torno a la música que realizan distintos colectivos de la ciudad. Colectivos que, sin decirlo en esos términos, conforman una red de colaboración sostenida en una forma de ingeniería artesanal, tanto en los sistemas de sonido como en las maneras de producir música en una ciudad como Valparaíso.

Dándole vueltas a esa idea —potente, simple y profundamente política— y conectándola con mis temas de interés, como el espacio y la filosofía política, comencé a pensar la ingeniería no como una disciplina cerrada, sino como un proceso. Un proceso que articula conocimiento técnico, experiencia empírica, organización del trabajo y control de procesos. 

Epistemológicamente, la ingeniería puede entenderse como una síntesis entre trabajo y naturaleza, que se despliega en un orden espacial específico y en distintas temporalidades. En el modelo neoliberal, en cambio, la ingeniería se presenta como un saber estrictamente profesional, proyectado como imparcial y neutro, y asociado al desarrollo técnico de los territorios a partir de una diferenciación mediada por las clases sociales.

Desde ahí, la ingeniería artesanal puede definirse como un conjunto de prácticas sustentadas en saberes populares que producen objetos y dispositivos mediante conocimiento acumulado, transmitido tanto en el tiempo como en el espacio. En la cultura Sound System, por ejemplo, esta transmisión no proviene de sistemas formales de enseñanza, sino de la práctica colectiva, originada en Jamaica y proyectada hacia distintos lugares del mundo a través de la diáspora afrocaribeña. En un contexto como el chileno, donde la población afrodescendiente es comparativamente menor que en otros países de la región, el Sound System se configura como una vía de difusión, y reconocimiento de la cultural a través de la música.

Este tipo de ingeniería no responde a la lógica industrial moderna ni a los estándares de la producción tecnocientífica. Por el contrario, se enraíza en conocimientos acumulados, en la experimentación práctica, en el error, en el ensayo y en la transmisión intergeneracional.

La ingeniería artesanal del Sound System produce infraestructuras alternativas que operan fuera de los circuitos formales de la industria musical, pero que generan capacidades locales de producción económica, cultural y social. Estas infraestructuras sostienen redes técnicas que se articulan a distintas escalas: desde talleres comunitarios y bodegas improvisadas hasta circuitos internacionales de artistas, productores, selectores y operadores. No se trata solo de parlantes, cajas o amplificadores, sino de un entramado técnico-social que permite activar espacialidades urbanas específicas y crear territorios culturales que disputan los sentidos dominantes de la ciudad.

En eso estamos ahora… dándole cuerpo a estas reflexiones desde la experiencia compartida, desde el trabajo colectivo y desde la música. Porque las KRISIS no están hechas para tranquilizar conciencias ni para funcionar como sedantes. Están para incomodar, para amplificar lo que suena por debajo y para recordarnos que también ahí —en el ruido, en el bajo, en el hacer— se produce conocimiento.`
  },
  {
    id: "apunte-para-una-critica-materialista-del-presente",
    titulo: "Apunte para una crítica materialista del presente",
    fecha: "Bitácora Krisis",
    resumen: "Ensayo analítico sobre la vigencia del materialismo histórico frente a las lecturas fragmentadas de la coyuntura actual.",
    textoCompleto: `Durante años se instaló la idea de que el mundo había entrado en una fase “post”: postindustrial, postmoderna, postcolonial. Bajo ese clima intelectual, el marxismo —y en particular el marxismo-leninismo— fue presentado como un marco agotado, demasiado rígido para un presente supuestamente fragmentado y dominado por la cultura. Sin embargo, el escenario global actual muestra algo muy distinto: las categorías estructurales nunca desaparecieron. Lo que desapareció, en ciertos espacios académicos, fue la voluntad de nombrarlas.

Hoy asistimos a un retorno explícito de dinámicas que el marxismo nunca dejó de analizar: imperialismo, guerra, control de recursos, Estados fuertes, disciplinamiento económico y violencia organizada. La historia no entró en una fase “post”. Entró en una fase de reorganización abierta del poder global.

Esto no significa negar los aportes de las teorías poscoloniales o decoloniales. Estas corrientes han tenido el mérito de visibilizar continuidades coloniales, denunciar jerarquías raciales y culturales, y recuperar memorias históricas silenciadas. Reconocen, correctamente, que las prácticas coloniales siguen presentes y que es necesario superarlas. El problema aparece cuando esa superación se piensa principalmente en el plano del pensamiento, como si bastara con producir nuevas epistemologías o resignificar identidades para alterar relaciones materiales de poder que siguen intactas.

Desde una perspectiva materialista, la cuestión es más simple —y más incómoda—: no hay postcolonialidad porque no hay postimperialismo. Las prácticas económicas coloniales no sobreviven como restos del pasado, sino como mecanismos activos del capitalismo global. Extractivismo, dependencia financiera, sanciones económicas, control tecnológico y guerra no son anomalías: son formas contemporáneas de dominación. Mientras esas prácticas sigan organizando el mundo, no existe un “después” histórico, solo una continuidad bajo nuevas formas.

La coyuntura actual lo confirma con claridad. La guerra entre Rusia y Ucrania, el colonialismo de asentamiento de Israel sobre Palestina, el cerco económico de Estados Unidos contra Venezuela, o la disputa estratégica entre China y Taiwán, no pueden explicarse como conflictos de discursos, identidades o narrativas. Son expresiones directas de la competencia imperial por poder, recursos y hegemonía.

Este escenario también obliga a revisar el lugar de la ética y la moral. Lejos de ser un residuo burgués, la moral forma parte de la estructura social y ha sido objeto de una renovación importante dentro del marxismo contemporáneo. La justicia, los derechos y la dignidad humana siguen siendo aspiraciones universales. Lo que hoy queda en evidencia es que no funcionan como consensos garantizados, sino como campos de lucha. Sin organización, estrategia y correlación de fuerzas, la ética se vacía de efectividad y se convierte en un lenguaje bien intencionado pero políticamente impotente.

Algo similar ocurre con la recuperación de prácticas ancestrales o precoloniales. Estas resignificaciones han enriquecido la comprensión de formas históricas de vida comunitaria y resistencia colectiva. Sin embargo, su potencia transformadora depende de que se articulen con proyectos políticos capaces de confrontar el capitalismo realmente existente. De lo contrario, corren el riesgo de quedar confinadas al reconocimiento cultural, sin capacidad de alterar las estructuras que reproducen la dominación.

En este contexto, el marxismo-leninismo no reaparece como dogma ni como nostalgia, sino como marco analítico vivo. Su vigencia radica en algo fundamental: permite pensar el presente como una totalidad conflictiva, donde economía, política, ética y poder no están separadas, sino profundamente entrelazadas. Frente a un mundo que vuelve a organizarse en bloques, alianzas militares y disputas abiertas, renunciar a ese tipo de análisis no es un gesto crítico, sino una forma de desarme intelectual.

El debate, entonces, no es entre “viejas” y “nuevas” teorías. Es entre enfoques capaces de nombrar el poder real y otros que se quedan en la superficie del discurso. La historia no se fragmentó por sí sola. Fue fragmentada en ciertos relatos, mientras el capital y los Estados seguían actuando con una lógica brutalmente coherente.

Hoy, más que nunca, pensar críticamente el presente exige recuperar herramientas que nunca dejaron de ser necesarias, actualizarlas y ponerlas en diálogo con las luchas actuales. No para cerrar el debate, sino para devolverle densidad histórica, política y estratégica.

La historia sigue en disputa.
Y entenderla sigue siendo una tarea urgente`
  },
  {
    id: "la-miopia-estrategica-en-la-academia-progresista",
    titulo: "Entre la crítica declarativa y la miopía estratégica en la academia progresista",
    fecha: "Bitácora Krisis",
    resumen: "Una columna de opinión punzante respecto a los alcances, límites y contradicciones de la producción intelectual en las universidades.",
    textoCompleto: `En los últimos años se ha vuelto habitual que ciertos sectores de la academia se autodefinan como “críticos”, “territoriales” o “comprometidos con las comunidades”. Sin embargo, cuando se examina con mayor detención el tipo de conocimiento que producen, así como su capacidad de intervenir en debates de mayor escala, emerge una tensión evidente entre discurso y práctica.

Una parte importante de esta academia progresista ha centrado su trabajo en estudios situados que, si bien pueden ser valiosos en su escala inmediata, carecen de articulación con procesos estructurales más amplios. Se trata de investigaciones que describen realidades locales, prácticas comunitarias o experiencias específicas, pero que rara vez logran proyectarse hacia una comprensión estratégica del poder, del Estado o de las transformaciones contemporáneas del capitalismo.

El problema no radica en la investigación situada en sí misma —que es fundamental para comprender la vida social concreta—, sino en su aislamiento teórico y político. Cuando lo local se convierte en un fin en sí mismo, sin mediaciones hacia escalas mayores, se produce una forma de miopía analítica: se pierde la capacidad de leer la coyuntura, de interpretar procesos nacionales e internacionales, y de posicionarse frente a ellos.

Esta limitación se vuelve especialmente evidente en momentos de inflexión política. Frente a transformaciones profundas —como giros en la orientación de los gobiernos, crisis económicas o conflictos internacionales—, gran parte de esta academia “crítica” guarda silencio o responde desde marcos interpretativos que no logran salir del nivel comunitario. Problemas como la reconfiguración del orden global, las guerras contemporáneas o las nuevas formas de acumulación quedan fuera de su horizonte analítico, como si no fueran también cuestiones profundamente territoriales.

Aquí aparece una cuestión de fondo: la ausencia de un posicionamiento ontológico y político consistente. La crítica, en muchos casos, se reduce a una etiqueta identitaria más que a una práctica intelectual rigurosa. Se habla de territorio, de comunidad o de resistencia, pero sin una teoría del poder que permita comprender cómo estas dimensiones se articulan con el Estado, el capital y las dinámicas globales. El resultado es una crítica fragmentada, que opera en espacios acotados, pero que no logra incidir en los problemas estructurales que afectan a la sociedad.

Esta situación también tiene implicancias en el plano de la acción. Si el diagnóstico es parcial, la práctica derivada también lo será. Las investigaciones no se traducen en estrategias, ni en propuestas de transformación, ni en articulaciones capaces de disputar el poder en distintas escalas. En su lugar, se consolida un circuito relativamente cerrado de producción académica, validación institucional y reproducción de posiciones dentro del propio campo universitario.

La pregunta que se abre, entonces, es incómoda pero necesaria: ¿hasta qué punto esta academia progresista está contribuyendo efectivamente a la comprensión y transformación de la realidad social? ¿Y hasta qué punto está reproduciendo una forma de crítica limitada, incapaz de enfrentar los desafíos del presente?

En un escenario marcado por crisis múltiples —económicas, políticas, ambientales y geopolíticas—, la tarea de una academia crítica no puede reducirse a la descripción de lo inmediato. Requiere una articulación entre escalas, una teoría del poder consistente y una voluntad de intervenir en los debates de fondo. De lo contrario, el riesgo es claro: que la crítica se transforme en retórica, y que la academia deje de ser un espacio de pensamiento estratégico para convertirse en un lugar de reproducción de certezas cómodas.`
  }
];

function BlogPage() {
  const [columnaActiva, setColumnaActiva] = useState<typeof COLUMNAS_PARA_ACADEMICAS[0] | null>(null);

  return (
    <>
      <PageHero 
        image={heroImg} 
        eyebrow="Bitácora Para-Académica" 
        title="KRISIS" 
      />
      
      <div className="mx-auto max-w-4xl px-6 py-16">
        
        {!columnaActiva ? (
          <div className="space-y-12">
            <div className="p-6 rounded-xl bg-muted/40 border text-sm text-muted-foreground leading-relaxed">
              <strong>Krisis</strong> es tu archivo digital autónomo. Un espacio de ejercicio para-académico donde confluyen análisis territoriales, reflexiones éticas, economía política y anotaciones sueltas desde Valparaíso.
            </div>

            <section className="space-y-8">
              <h3 className="text-2xl font-bold tracking-tight text-foreground border-b pb-2">
                Escritos y Columnas ({COLUMNAS_PARA_ACADEMICAS.length})
              </h3>
              
              <div className="grid gap-6">
                {COLUMNAS_PARA_ACADEMICAS.map((columna) => (
                  <article 
                    key={columna.id} 
                    className="p-6 rounded-xl border bg-card hover:border-primary/40 transition-all duration-200 flex flex-col justify-between space-y-4 shadow-sm"
                  >
                    <div className="space-y-2">
                      <span className="text-xs font-mono text-muted-foreground">{columna.fecha}</span>
                      <h4 className="text-xl font-bold tracking-tight text-foreground">
                        {columna.titulo}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {columna.resumen}
                      </p>
                    </div>

                    <div>
                      <button 
                        onClick={() => setColumnaActiva(columna)}
                        className="text-sm font-semibold text-primary hover:underline flex items-center"
                      >
                        Leer escrito
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        ) : (
          /* Vista de Lectura Avanzada */
          <div className="space-y-8">
            <button 
              onClick={() => setColumnaActiva(null)}
              className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors bg-muted px-3 py-1.5 rounded-lg border"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Volver a los escritos
            </button>

            <article className="prose prose-lg dark:prose-invert max-w-none bg-card border p-8 rounded-xl shadow-sm">
              <div className="space-y-2 not-prose mb-6">
                <span className="text-sm font-mono text-muted-foreground">{columnaActiva.fecha}</span>
                <h2 className="text-3xl font-extrabold tracking-tight text-foreground leading-tight">
                  {columnaActiva.titulo}
                </h2>
              </div>
              
              {/* Separación automática inteligente basada en saltos de línea (\n\n) */}
              <div className="text-base leading-relaxed text-foreground/90 space-y-6 font-normal">
                {columnaActiva.textoCompleto.split("\n\n").map((parrafo, idx) => (
                  <p key={idx}>{parrafo}</p>
                ))}
              </div>
            </article>
          </div>
        )}

      </div>
    </>
  );
}
