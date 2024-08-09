<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Uso de identificadores y palabras reservadas
    .row.bg-c24
      .col-12
        .px-5
          .row.align-items-center.mb-5
            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema5/img2.png', style='width: 450px', alt='').m-auto
            .col-lg-8(data-aos="fade-left")
              .row.mb-3
                .col-12
                  .p-4.bg-c14
                    .row.align-items-center
                      .col-md-auto.mb-4.mb-md-0
                        figure
                          img(src='@/assets/curso/tema5/img1.svg', style='width: 70px', alt='').m-auto
                      .col
                        p.mb-0 En la elaboración de diagramas de flujo o algoritmos, muchas veces se necesitan datos auxiliares. A continuación, se definen algunos de estos tipos de datos auxiliares.
              p.mb-0 Los identificadores son nombres que se dan a los elementos utilizados para resolver un problema y poder diferenciar unos de otros. De acuerdo con López (2009), al asignar nombres (identificadores) a variables, constantes y procedimientos, se deben tener en cuenta algunas reglas, a saber:
          .row.mb-5
            .col-12.bg-c25(data-aos="fade-right")
              .p-4.p-lg-0
                .row.align-items-center
                  .col-4.d-none.d-lg-block
                    figure
                      img(src='@/assets/curso/tema5/img2.svg', style='width: 400px', alt='').m-auto
                  .col-lg-8
                    SlyderF(columnas="col-md-6")
                      .tarjeta.color-acento-botones.p-4
                        .row.justify-content-center.mb-3
                          .col-6
                            img(src='@/assets/curso/tema5/img3.svg' alt='AvatarTop')
                        p.text-center Pueden estar formados por una combinación de letras y números (saldoMes, salario, fecha2, etc.).
                      .tarjeta.color-acento-botones.p-4
                        .row.justify-content-center.mb-3
                          .col-6
                            img(src='@/assets/curso/tema5/img4.svg' alt='AvatarTop')
                        p.text-center El primer carácter de un nombre debe ser una letra.
                      .tarjeta.color-acento-botones.p-4
                        .row.justify-content-center.mb-3
                          .col-6
                            img(src='@/assets/curso/tema5/img5.svg' alt='AvatarTop')
                        p.text-center La mayoría de los lenguajes de programación diferencian las mayúsculas de las minúsculas.
                      .tarjeta.color-acento-botones.p-4
                        .row.justify-content-center.mb-3
                          .col-6
                            img(src='@/assets/curso/tema5/img6.svg' alt='AvatarTop')
                        p.text-center Los nombres deben ser nemotécnicos; con solo leerlos se debe entender lo que contienen.
                      .tarjeta.color-acento-botones.p-4
                        .row.justify-content-center.mb-3
                          .col-6
                            img(src='@/assets/curso/tema5/img7.svg' alt='AvatarTop')
                        p.text-center Deben ser muy descriptivos; no utilizar abreviaturas, a menos que se justifique.
                      .tarjeta.color-acento-botones.p-4
                        .row.justify-content-center.mb-3
                          .col-6
                            img(src='@/assets/curso/tema5/img11.svg' alt='AvatarTop')
                        p.text-center Es conveniente utilizar una sola palabra para nombrar páginas, controles, variables, etc.
                      .tarjeta.color-acento-botones.p-4
                        .row.justify-content-center.mb-3
                          .col-6
                            img(src='@/assets/curso/tema5/img8.svg' alt='AvatarTop')
                        p.text-center No utilizar caracteres reservados (%, +, /, >, etc.) ni letras acentuadas (á, é, í, ó, ú).
                      .tarjeta.color-acento-botones.p-4
                        .row.justify-content-center.mb-3
                          .col-6
                            img(src='@/assets/curso/tema5/img9.svg' alt='AvatarTop')
                        p.text-center No utilizar palabras reservadas por los lenguajes de programación.
    .row.mb-5
      .col-12
        .p-4.bg-c14(data-aos="fade-left")
          .row.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/tema5/img10.svg', style='width: 80px', alt='').m-auto
            .col
              p.mb-0 #[b Ejemplo:]
              p.mb-0 Listar los identificadores usados en los algoritmos previos.
    .row.mb-4.pt-4(data-aos="fade-down")
      .col-auto.bg-c4
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img2.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white Solución
    .row.align-items-center.mb-5
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        .row
          .col-12
            .p-4.bg-c13
              p En el algoritmo de imprimir un número entero, se usa el identificador "entrada" para representar el número digitado. En el algoritmo de imprimir el cuadrado y el cubo de un número entero, se emplean los siguientes identificadores:
              ol.lista-ol--cuadro
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span 1.
                  |
                  p.mb-0 "entrada" para representar el número digitado.
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span 2.
                  |
                  p.mb-0 "cuadrado" para representar el valor del cuadrado del número de entrada.
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span 3.
                  |
                  p.mb-0 "cubo" para almacenar el cubo del número de entrada.
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema5/img4.png', style='width: 400px', alt='').m-auto
    p.mb-5(data-aos="fade-right") Todos los lenguajes de programación tienen palabras reservadas para nombrar sus comandos, instrucciones y funciones; estas palabras no se pueden usar como identificadores.
    .row.align-items-center
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema5/img5.png', style='width: 400px', alt='').m-auto
      .col-lg-9(data-aos="fade-left")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Variables")
            .col-12
              p.mb-0 Para los algoritmos con diversos conjuntos de datos iniciales, se debe determinar una independencia entre los datos iniciales de un problema y la estructura de su solución. Esto se hace mediante la utilización de variables (cantidades que se suelen emplear y que durante la ejecución del algoritmo pueden tomar cualquier valor de un intervalo de valores posibles). Las variables son espacios de trabajo (contenedores) dispuestos para almacenar datos (valores). El valor de una variable puede ir cambiando en algún paso del algoritmo o permanecer sin cambios; por lo tanto, el valor de una variable es el último valor o dato asignado a esta.
          .row(titulo="Constantes")
            .col-12
              p.mb-0 Las constantes se crean de la misma forma que las variables, a diferencia de que se procura su definición o creación al inicio del algoritmo. Las constantes consisten en datos que, luego de ser asignados, no cambian en ninguna instrucción del algoritmo; pueden contener constantes matemáticas (pi).
          .row(titulo="Contadores")
            .col-12
              p Un contador es una variable que está en ambos lados de una asignación (a la derecha y a la izquierda) interna, a la que se le suma un valor constante. Es necesario haberla iniciado al principio del algoritmo, ya que va a ser leído su contenido. 
              p #[b Ejemplo:] definir un contador llamado contador que se incremente en uno cada vez tres veces.
              .row
                .col-lg-8
                  .px-4.py-3.bg-c22
                    figure
                      img(src='@/assets/curso/tema3/img11.svg', style="width:50px" alt='')
                .col-lg-8
                  .px-4.py-3.bg-c23
                    pre
                      p.mb-0  ALGORITMO Contador;
                      p.mb-0  VAR
                      p.mb-0               ENTERO contador;
                      p.mb-0  
                      p.mb-0  INICIO
                      p.mb-0               contador = 0;
                      p.mb-0               contador <= contador + 1;
                      p.mb-0               contador <= contador + 1;
                      p.mb-0               contador <= contador + 1;
                      p.mb-0               ESCRIBIR (contador);
                      p.mb-0  FIN
          .row(titulo="Acumuladores")
            .col-12
              p.mb-0 Los acumuladores son una versión ampliada de contadores. Tienen las mismas características que un contador, excepto que el valor que se va incrementando no es una constante, sino un valor variable.

</template>

<script>
export default {
  name: 'Tema5',
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
