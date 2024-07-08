<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Introducción a la algoritmia
    .row.mb-5
      .col-12
        .p-4.bg-c2
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema1/img1.svg', style='width: 100px', alt='').m-auto
            .col
              p.mb-0 La correcta aplicación de una serie de pasos detallados puede garantizar una solución precisa para un problema. Es precisamente en esta práctica donde se basa la programación de computadoras y la construcción de #[i software].
    .row.mb-5
      .col-12
        .p-4.bg-c3
          .titulo-sexto.color-acento-contenido.mb-4
            p.mb-0 #[b Figura 1.] Pasos en la algoritmia básica
          figure
            img(src='@/assets/curso/tema1/img2.png', style='width: 400px', alt='Imagen de un círculo con cuatro secciones etiquetadas como Validación, Análisis, Diseño, e Implementación, y el texto Algoritmia Básica en el centro.').m-auto
    .row.mb-4.pt-4(data-aos="fade-down")
      .col-auto.bg-c4
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img2.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white Definición de algoritmo
    p.mb-5 Según la #[b.txt-c1 Real Academia Española (2020)], un #[b.txt-c1 algoritmo] está definido como un #[i “conjunto ordenado y finito de operaciones que permite hallar la solución de un problema”].
    .row.mb-5
      .col-lg-auto.pe-0.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/img3.png', style='width: 350px', alt='').m-auto
      .col.bg-c5
        .row.align-items-center.h-100
          .col-12
            .p-4
              p.text-white.mb-0 Es importante comprender que #[b computacionalmente], las máquinas están en capacidad de realizar #[b unas pocas operaciones matemáticas muy básicas y sencillas], pero también se considera que computan #[b enormes cantidades de estas operaciones en unidades de tiempo muy corto].
    p Entonces, la solución de un problema utilizando computadoras #[b.txt-c1 fácilmente se puede convertir en una enorme cantidad de pequeñas operaciones matemáticas], tal vez abrumadoras desde el punto de vista humano. Es por eso que se requiere la #[b.txt-c1 especialización de conjuntos de operaciones], los cuales se agrupan en pequeños procesos que componen la solución de un problema.
    Separador
    .row.bg-c9
      .col-12
        .px-5
          #t_1_1
          .titulo-segundo.color-acento-contenido
            h2 1.1 Pensamiento algorítmico
          .row.align-items-center.mb-5
            .col-lg-10
              p Así como un problema puede ser abordado de #[b.txt-c1 varias maneras] y aportar la misma solución, lo que siempre tendrán en común es que para resolverlo se utilizó una #[b.txt-c1 secuencia de pasos ordenados].
              p.mb-0 Por ejemplo, si se entrega una hoja de papel cuadriculado a los aprendices de una clase y se les pide que dibujen un cuadrado sin levantar el lápiz, habrá quienes lo hagan de manera diferente y obtengan el mismo resultado, como se presenta en la siguiente figura:
            .col-lg-2
              figure
                img(src='@/assets/curso/tema1/img3.svg', style='width: 140px', alt='').m-auto
          .titulo-sexto.color-acento-contenido.mb-4
            p.mb-0 #[b Figura 2.] Pensamiento lógico y procedimental
          .row.mb-5
            .col-lg-6.mb-4.mb-lg-0
              .p-4.bg-c6
                figure
                  img(src='@/assets/curso/tema1/img4.svg', style='width: 350px', alt='').m-auto
            .col-lg-6
              .p-4.bg-c7
                p En la figura, el #[b.txt-c1 aprendiz A] comenzó realizando una #[b.txt-c1 línea vertical hacia arriba], mientras que el #[b.txt-c1 aprendiz B] trazó una #[b.txt-c1 vertical hacia abajo], y el #[b.txt-c1 aprendiz D] dibujó una #[b.txt-c1 horizontal hacia la derecha]. Todos ellos llevaron a cabo un proceso que les permitió cumplir con la solución al problema planteado. En términos globales, prácticamente existe una #[b.txt-c1 gran cantidad de soluciones] al mismo problema.
                figure.d-flex.justify-content-end
                  img(src='@/assets/curso/tema1/img5.svg', style='width: 160px', alt='')
          p.mb-5 Al imaginar que el problema es #[b mucho más complejo] que el descrito en el ejemplo anterior, se concluye que existen #[b tantas soluciones como el enfoque o lógica empleada por cada aprendiz o persona]. Sin embargo, lo que sí es común en todos los casos es que se realizaron #[b unas fases mentales secuencialmente ordenadas], las cuales son:
          .row.mb-0.mb-lg-5
            .col-lg.mb-4.mb-lg-0
              .p-4.bg-c8.h-100
                .row
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema1/img6.svg', style='width: 70px', alt='').m-auto
                  .col
                    p.text-white.mb-0 A. Entender el problema enunciado por el instructor (entender el problema).
            .col-lg.mb-4.mb-lg-0
              .p-4.bg-c8.h-100
                .row
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema1/img6.svg', style='width: 70px', alt='').m-auto
                  .col
                    p.text-white.mb-0 B. Escoger una ruta a seguir del rectángulo (hacer un plan).
            .col-lg.mb-4.mb-lg-0
              .p-4.bg-c8.h-100
                .row
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema1/img6.svg', style='width: 70px', alt='').m-auto
                  .col
                    p.text-white.mb-0 C. Plasmar en el papel cuadriculado ese plan (ejecutar el plan).
            .col-lg.mb-4.mb-lg-.mb-lg-0
              .p-4.bg-c8.h-100
                .row
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema1/img6.svg', style='width: 70px', alt='').m-auto
                  .col
                    p.text-white.mb-0 D. Revisar el resultado y ver que se alcanzó el objetivo (revisar).
          p.mb-0 Cuando el problema es muy complejo de resolver, muchas veces toca volver y analizar el problema, o trazar un nuevo plan o plasmar ese nuevo plan una y otra vez, revisando los resultados y volviendo a analizar hasta encontrar la solución del problema.
          Separador
    #t_1_2
    .titulo-segundo.color-acento-contenido
      h2 1.2 Solución de problemas y programación
    .row.align-items-center.mb-5
      .col-lg-8.order-2.order-lg-1
        p Los algoritmos son una herramienta que permite describir claramente un conjunto finito de instrucciones.
        .bloque-texto-d.color-secundario.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            p.text-regular En el ámbito de la computación, los algoritmos son una herramienta que permite describir claramente un conjunto finito de instrucciones ordenadas secuencialmente y libres de ambigüedad, que debe llevar a cabo un computador para lograr un resultado previsible. Vale la pena recordar que un programa de computador consiste en una serie de instrucciones muy precisas y escritas en un lenguaje de programación que el computador. entiende.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .p.mb-0 #[b (López, 2019, p.7).]
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/tema1/img5.png', style='width: 450px', alt='').m-auto
    .row.mb-5
      .col-lg-6.mb-4.mb-lg-0
        p #[b.txt-c1 Ejemplo 2:] se propone diseñar un algoritmo para apagar una computadora.
        .row
          .col-12
            .p-4.bg-c6.bg-c10
              p.fs-4.text-center.txt-c2.mb-5 #[b Algoritmo: apagar computadora]
              .row.mb-3
                .col-auto
                  p.mb-0.txt-c3 INICIO
              ol.lista-ol--cuadro
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span 1
                  |
                  p.text-white.mb-0 Dar clic en el icono INICIO.
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span 2
                  |
                  p.text-white.mb-0 Dar clic en el icono que dice APAGAR.
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span 3
                  |
                  p.text-white.mb-0 Esperar que se apague completamente.
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span 4
                  |
                  p.text-white.mb-0 Desconectar los cables del enchufe.
              .row
                .col-auto
                  p.mb-0.txt-c3 FIN
      .col-lg-6
        p #[b.txt-c1 Ejemplo 1:] se propone diseñar un algoritmo para apagar una computadora.
        .row
          .col-12
            .p-4.bg-c6
              p.fs-4.text-center.txt-c2.mb-5 #[b Algoritmo: cargar un celular]
              .row.mb-3
                .col-auto
                  p.mb-0.txt-c3 INICIO
              ol.lista-ol--cuadro
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span 1
                  |
                  p.text-white.mb-0 Buscar el cargador.
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span 2
                  |
                  p.text-white.mb-0 Agarrar el cargador.
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span 3
                  |
                  p.text-white.mb-0 Agarrar el celular.
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span 4
                  |
                  p.text-white.mb-0 Poner el enchufe en el celular.
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span 5
                  |
                  p.text-white.mb-0 Conectarlo al tomacorriente.
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span 6
                  |
                  p.text-white.mb-0 Esperar a que se ponga a cargar.
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span 7
                  |
                  p.text-white.mb-0 Desconectarlo del tomacorriente.
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span 8
                  |
                  p.text-white.mb-0 Ponerlo en un lugar seguro.
              .row
                .col-auto
                  p.mb-0.txt-c3 FIN
    p.mb-5 #[b.txt-c1 Con base en los ejemplos anteriormente planteados. se puede concluir que un algoritmo debe ser:]
    .row.justify-content-center.mb-5
      .col-11.col-md-10.col-lg-4.mb-4.mb-lg-0
        .p-4.bg-c11
          figure.mb-4
            img(src='@/assets/curso/tema1/img7.svg', style='width: 100px', alt='').m-auto
          p.text-white.text-center #[b Realizable]
          p.text-white.text-center.mb-0 El proceso algorítmico debe terminar después de una cantidad finita de pasos. Se dice que un algoritmo es inaplicable cuando se ejecuta con un conjunto de datos iniciales y el proceso resulta infinito o durante la ejecución se encuentra con un obstáculo insuperable sin arrojar un resultado.
      .col-11.col-md-10.col-lg-4.mb-4.mb-lg-0
        .p-4.bg-c11
          figure.mb-4
            img(src='@/assets/curso/tema1/img8.svg', style='width: 100px', alt='').m-auto
          p.text-white.text-center #[b Comprensible]
          p.text-white.text-center.mb-0 Debe ser claro lo que hace, de forma que quien ejecute los pasos (ser humano o máquina) sepa qué, cómo y cuándo hacerlo. Debe existir un procedimiento que determine el proceso de ejecución.
      .col-11.col-md-10.col-lg-4
        .p-4.bg-c11
          figure.mb-4
            img(src='@/assets/curso/tema1/img9.svg', style='width: 100px', alt='').m-auto
          p.text-white.text-center #[b Preciso]
          p.text-white.text-center.mb-0 El orden de ejecución de las instrucciones debe estar perfectamente indicado. Cuando se ejecuta varias veces, con los mismos datos iniciales, el resultado debe ser el mismo siempre. La precisión implica determinismo. #[b (López, 2009, p. 22)]
    p.mb-5 La figura presenta las fases y sus relaciones en el proceso de diseño de algoritmos de programas informáticos, que están basados en un algoritmo que posteriormente es escrito en un lenguaje de programación.
    .row
      .col-12
        .p-4.bg-c3
          .titulo-sexto.color-acento-contenido.mb-4
            p.mb-0 #[b Figura 3.] Fases para elaborar un programa de computador
          figure
            img(src='@/assets/curso/tema1/img10.svg', style='width: 700px', alt='Diagrama de flujo que muestra cuatro etapas: Analizar el problema, Diseñar un Algoritmo, Traducir el algoritmo, y Depurar el programa, conectadas con flechas.').m-auto
    Separador
    #t_1_3
    .titulo-segundo.color-acento-contenido
      h2 1.3 Análisis del problema (entenderlo)
    p Como los programas de computador tienen por objetivo resolver problemas muy puntuales, lo primero que se debe realizar para resolverlos es lograr una mejor comprensión posible de estos.
    p.mb-5 Para realizar esta actividad se debe:
    .row.mb-4.pt-4(data-aos="fade-down")
      .col-auto.bg-c4
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img2.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white A. Formular claramente el problema
    .row.mb-5
      .col-lg-6.order-2.order-lg-1
        .row
          .col-12
            .p-4.bg-c12
              p A continuación, algunas preguntas previas a la formulación del problema:
              ul.lista-ul
                li.d-flex
                  i.fas.fa-angle-right
                  |
                  p.mb-0 ¿Es posible definir de forma más clara el problema?
                li.d-flex
                  i.fas.fa-angle-right
                  |
                  p.mb-0 ¿Qué palabras no son conocidas o se desconoce su significado?
                li.d-flex
                  i.fas.fa-angle-right
                  |
                  p.mb-0 ¿Se ha resuelto antes algún problema similar?
                li.d-flex
                  i.fas.fa-angle-right
                  |
                  p.mb-0 ¿Qué información es importante para resolver el problema?
                li.d-flex
                  i.fas.fa-angle-right
                  |
                  p.mb-0 ¿Qué información no es importante y se puede omitir?
      .col-lg-6.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/tema1/img6.png', style='width: 500px', alt='').m-auto
    p.mb-5 #[b Ejemplo:]
    .row.justify-content-center.mb-5
      .col-md-8.col-lg-4.mb-4.mb-lg-0
        .p-3.bg-c13
          p Don Juan necesita decidir cómo comprar un teléfono celular que cuesta $870.000 de contado o $980.000 a crédito; él tiene $630.000 pesos en efectivo.
          p Luego de revisar las preguntas previas se puede concluir:
          p.mb-0 Como el efectivo que tiene don Juan no le alcanza para comprar el teléfono celular de contado, entonces él tiene dos opciones:
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img7.png', style='width: 400px', alt='').m-auto
      .col-md-8.col-lg-4
        .p-3.bg-c2.h-100
          p comprarlo completamente a crédito o también pagar una parte de contado (como cuota inicial) y el resto diferirlo a crédito.
          p.mb-0 Para poder resolver este problema se debe conocer el número de cuotas en el que difiere, si desea pagarlo totalmente a crédito o conocer el número de cuotas y el valor total del celular si se da una cuota inicial de $630.000 pesos.
    .row.mb-4.pt-4(data-aos="fade-down")
      .col-auto.bg-c4
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img2.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white B. Precisar elementos de entrada
    p.mb-5 Otro punto importante en la fase de análisis del problema es determinar cuál es la información disponible, por lo tanto:
    .row.justify-content-center.mb-4
      .col-md-10.col-lg-4.mb-4.mb-lg-0
        .p-4.bg-c8.h-100
          .row.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/tema1/img6.svg', style='width: 100px', alt='').m-auto
            .col
              p.text-white.mb-0 ¿Qué información es importante y necesaria para resolver el problema?
      .col-md-10.col-lg-4.mb-4.mb-lg-0
        .p-4.bg-c8.h-100
          .row.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/tema1/img6.svg', style='width: 100px', alt='').m-auto
            .col
              p.text-white.mb-0 ¿Qué información no es importante y se puede prescindir?
      .col-md-10.col-lg-4
        .p-4.bg-c8.h-100
          .row.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/tema1/img6.svg', style='width: 100px', alt='').m-auto
            .col
              p.text-white.mb-0 ¿Cuáles son los datos de entrada conocidos?
    .row.justify-content-center.mb-5
      .col-md-10.col-lg-4.mb-4.mb-lg-0
        .p-4.bg-c8.h-100
          .row.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/tema1/img6.svg', style='width: 100px', alt='').m-auto
            .col
              p.text-white.mb-0 ¿Cuál es la incógnita o qué se debe calcular?
      .col-md-10.col-lg-4.mb-4.mb-lg-0
        .p-4.bg-c8.h-100
          .row.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/tema1/img6.svg', style='width: 100px', alt='').m-auto
            .col
              p.text-white.mb-0 ¿Los datos se pueden agrupar en categorías?
      .col-md-10.col-lg-4
        .p-4.bg-c8.h-100
          .row.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/tema1/img6.svg', style='width: 100px', alt='').m-auto
            .col
              p.text-white.mb-0 ¿Qué información adicional hace falta para resolver el problema?
    p.mb-5 Otro elemento a resaltar es el nivel de conocimiento y las limitaciones que se tienen en el ámbito o el contexto del problema que está tratando de resolver. Por ejemplo, si el problema requiere conceptos financieros para entender la naturaleza de los datos, o si es necesario adquirir nueva información y/o poder consultarla, para estar seguros de que es posible tratarla conforme el contexto lo requiera.
    .row.mb-4.pt-4(data-aos="fade-down")
      .col-auto.bg-c4
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img2.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white C. Precisar resultados esperados
    .row
      .col-lg-8.order-2.order-lg-1
        p Para determinar con claridad cuál es el resultado final esperado (o producto) que se quiere obtener es necesario determinar o definir qué resultados se solicitan y, en qué tipo o formato deben estar (mostrados en pantalla, diagramación, orden, entre otros.). Para ello, es importante tener en cuenta:
        .row
          .col-lg-6.mb-4.mb-lg-0
            .p-4.bg-c14
              p.text-center.mb-0 #[b ¿Qué información están solicitando?]
          .col-lg-6
            .p-4.bg-c14
              p.text-center.mb-0 #[b ¿En qué formato se debe entregar esta información?]
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/tema1/img8.png', style='width: 400px', alt='').m-auto
    Separador
    #t_1_4
    .titulo-segundo.color-acento-contenido
      h2 1.4 Desarrollo de la creatividad: elementos, modelos, fases y sus objetivos
    p.mb-5 Resolver algoritmos es una actividad que requiere, en la mayoría de los casos, creatividad por parte del programador. Esta es una habilidad que se va fortaleciendo en la medida en que se desempeña más y más en procesos de desarrollo de software.
    .row.mb-5
      .col-12
        .p-4.bg-c3
          .titulo-sexto.color-acento-contenido.mb-4
            p.mb-0 #[b Figura 4.] Espiral del Pensamiento Creativo diseñada por el Dr. Mitchel Resnick
          figure
            img(src='@/assets/curso/tema1/img11.svg', style='width: 500px', alt='Imagen de un círculo con cuatro secciones etiquetadas como Validación, Análisis, Diseño, e Implementación, y el texto Algoritmia Básica en el centro.').m-auto
    .row
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img12.svg', style='width: 400px', alt='').m-auto
      .col-lg-8
        .bloque-texto-d.color-secundario.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            p.text-regular Para estimular el pensamiento creativo, propuesto por Resnick (2007), el programador debe imaginar qué quiere hacer; crear un proyecto basado en sus ideas; jugar y compartir sus ideas y creaciones con otros para reflexionar sobre sus experiencias y permitirse imaginar nuevas ideas y nuevos proyectos. La espiral genera un proceso indefinido de mejoramiento continuo.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .p.mb-0 #[b (López, 2009, p. 19).]
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
