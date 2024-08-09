<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Metodología de algoritmos
    .row.bg-c20
      .col-12
        .px-5
          .row.align-items-center.mb-5
            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema3/img2.png', style="width: 400px" alt='').m-auto
            .col-lg-8(data-aos="fade-left")
              p De manera implícita, en las distintas áreas productivas de la sociedad se usan algoritmos. Un par de ejemplos pueden ser que, en la construcción de una casa, el ingeniero o el arquitecto analiza el terreno, diseña unos planos, realiza maquetas y así continúa siguiendo una secuencia lógica de procesos para la resolución del problema; o un abogado que, antes de defender a un cliente, analiza las pruebas, elabora un plan, practica sus argumentos y sigue un método para lograr la defensa de su cliente. #[b.txt-c1 Se puede concluir, entonces, que una solución a la medida de un problema requiere una metodología que lleve a la solución final].
              .row
                .col-12
                  .p-4.bg-c21
                    .row.align-items-center
                      .col-md-auto.mb-4.mb-md-0
                        figure
                          img(src='@/assets/curso/tema3/img1.svg', style="width: 90px" alt='').m-auto
                      .col
                        p.mb-0 En el proceso de desarrollo de programas informáticos, aparte de conocer esta metodología, se necesita conocer las funciones que puede realizar un computador y la representación de estas.
          p.mb-5(data-aos="fade-right") #[b.txt-c1 En general, existen tres fases secuenciales para la elaboración de un algoritmo, de las cuales se abordarán las dos primeras:]
          .row.justify-content-center
            .col-10.col-md-8.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              .p-4.bg-c11
                figure.mb-4
                  img(src='@/assets/curso/tema3/img2.svg', style="width: 80px" alt='').m-auto
                p.text-white.text-center #[b Análisis]
                ul.lista-ul
                  li.d-flex
                    i.fas.fa-code(style="color: #FFFFFF")
                    |
                    p.text-white.mb-0 Planteamiento del problema.
                  li.d-flex
                    i.fas.fa-code(style="color: #FFFFFF")
                    |
                    p.text-white.mb-0 Identificación de datos.
                  li.d-flex
                    i.fas.fa-code(style="color: #FFFFFF")
                    |
                    p.text-white.mb-0 Identificación de procesos y operaciones.
                  li.d-flex
                    i.fas.fa-code(style="color: #FFFFFF")
                    |
                    p.text-white.mb-0 Identificación de salidas y resultados.
            .col-10.col-md-8.col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
              .p-4.bg-c11
                figure.mb-4
                  img(src='@/assets/curso/tema3/img3.svg', style="width: 80px" alt='').m-auto
                p.text-white.text-center #[b Diseño]
                ul.lista-ul
                  li.d-flex
                    i.fas.fa-code(style="color: #FFFFFF")
                    |
                    p.text-white.mb-0 Desarrollo de algoritmos.
                  li.d-flex
                    i.fas.fa-code(style="color: #FFFFFF")
                    |
                    p.text-white.mb-0 Verificación de algoritmos.
                  li.d-flex
                    i.fas.fa-code(style="color: #FFFFFF")
                    |
                    p.text-white.mb-0 Implementación.
            .col-10.col-md-8.col-lg-4(data-aos="fade-right")
              .p-4.bg-c11
                figure.mb-4
                  img(src='@/assets/curso/tema3/img4.svg', style="width: 80px" alt='').m-auto
                p.text-white.text-center #[b Codificación de algoritmo]
                ul.lista-ul
                  li.d-flex
                    i.fas.fa-code(style="color: #FFFFFF")
                    |
                    p.text-white.mb-0 Prueba y depuración.
                  li.d-flex
                    i.fas.fa-code(style="color: #FFFFFF")
                    |
                    p.text-white.mb-0 Documentación.
                  li.d-flex
                    i.fas.fa-code(style="color: #FFFFFF")
                    |
                    p.text-white.mb-0 Mantenimiento.
          Separador
          #t_3_1
          .titulo-segundo.color-acento-contenido
            h2 3.1 Análisis
    .row.align-items-center.mb-5
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        .row.mb-3
          .col-12
            .p-4.bg-c2
              .row.align-items-center
                .col-md-auto.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema3/img5.svg', style="width: 90px" alt='').m-auto
                .col
                  p.mb-0 Como se explicó en componentes anteriores, la fase de análisis trata de responder a la pregunta: #[b ¿Qué es lo que se debe hacer?] Esto es necesario para entender el problema. Por ello, es preciso relacionar los datos de entrada, salida o resultados con los procesos a ejecutar con esta información y los datos auxiliares que se puedan requerir en las tareas.
        p.mb-0 Hasta este punto, parece que esas son las actividades propias del análisis. Sin embargo, el éxito de un algoritmo consiste en reducir a cero la brecha entre lo que el cliente necesita y los resultados que el algoritmo entrega. Para lograrlo en su totalidad, es importante indagar otros aspectos que corresponden a la naturaleza del problema. Las siguientes preguntas modeladoras son de referencia casi obligatoria a tener en cuenta:
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img3.png', style="width: 400px" alt='').m-auto
    .row.justify-content-center(data-aos="fade-down")
      .col-9.col-md-5.col-lg-3.mb-4
        .p-4.bg-c11.h-100
          p.text-white.text-center.mb-0 ¿Qué es?
      .col-9.col-md-5.col-lg-3.mb-4
        .p-4.bg-c11.h-100
          p.text-white.text-center.mb-0 ¿Quiénes intervienen?
      .col-9.col-md-5.col-lg-3.mb-4
        .p-4.bg-c11.h-100
          p.text-white.text-center.mb-0 ¿Cómo interviene o se comporta?
      .col-9.col-md-5.col-lg-3.mb-4
        .p-4.bg-c11.h-100
          p.text-white.text-center.mb-0 ¿Cuándo?
      .col-9.col-md-5.col-lg-3.mb-4
        .p-4.bg-c11.h-100
          p.text-white.text-center.mb-0 ¿Cómo lo hace?
      .col-9.col-md-5.col-lg-3.mb-4
        .p-4.bg-c11.h-100
          p.text-white.text-center.mb-0 ¿Por qué?
      .col-9.col-md-5.col-lg-3.mb-0.mb-lg-4
        .p-4.bg-c11.h-100
          p.text-white.text-center.mb-0 ¿Para qué?
    Separador
    #t_3_2
    .titulo-segundo.color-acento-contenido
      h2 3.2 Diseño
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/img4.png', style="width: 400px" alt='').m-auto
      .col-lg-8(data-aos="fade-left")
        .row.mb-3
          .col-12
            .p-4.bg-c21
              .row.align-items-center
                .col-md-auto.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema3/img6.svg', style="width: 90px" alt='').m-auto
                .col
                  p.mb-0 En esta etapa se responde, básicamente, a la pregunta: ¿Cómo se va a hacer?, refiriéndose a la manera en que el sistema va a realizar la tarea solicitada. Lo importante en este punto es que debe quedar bien definido el problema, sin dar espacio a más de una interpretación de la acción o acciones que debe hacer el sistema.
        p.mb-0 En el proceso de desarrollo del algoritmo, las siguientes actividades son obligatorias, especialmente si se está comenzando en el diseño de soluciones basadas en algoritmos y no se cuenta con mucha experiencia:
    .row.mb-5
      .col-12
        .p-4.bg-c3(data-aos="fade-down")
          .titulo-sexto.color-acento-contenido.mb-4
            p.mb-0 #[b Figura 5.] Actividades diseño algoritmo
          figure
            img(src='@/assets/curso/tema3/img7.svg', style='width: 500px', alt='Diagrama de actividades para el diseño de un algoritmo que incluye: definir las partes del algoritmo, pasos para el desarrollo del algoritmo y la representación del algoritmo mediante notación, diagrama o pseudocódigo.').m-auto
    p.mb-5(data-aos="fade-right") Para la verificación del algoritmo, se aplica una técnica denominada pruebas de escritorio o trazas, que trata de la validación y verificación del algoritmo mediante la ejecución de las sentencias u operaciones que lo componen (proceso), y así determinar sus resultados de salida a partir de una base determinada de elementos en la entrada del proceso.
    .row.mb-5
      .col-12
        .p-4.bg-c6(data-aos="fade-up")
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema3/img8.svg', style="width: 90px" alt='').m-auto
            .col
              p.txt-c2.mb-0 Como el resultado del proceso de diseño es un algoritmo, es obligatorio saber representarlo de alguna manera. Inicialmente, se empleará la notación de pseudocódigo para hacer este tipo de representaciones.
    .row.mb-5
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
        .p-4.bg-c2
          p #[b Notación de diseño: pseudocódigo]
          p Para expresar el contenido de un programa de computadora, se necesita un lenguaje de programación que las computadoras puedan interpretar. Sin embargo, se puede expresar ese mismo contenido en el lenguaje natural, empleando expresiones sencillas que lo simplifican y abrevian. Cuando se emplea esta técnica, se dice que está escrito en pseudocódigo.
          figure.d-flex.justify-content-end
            img(src='@/assets/curso/tema3/img9.svg', style="width: 100px", alt='')
      .col-lg-6(data-aos="fade-left")
        .p-4.bg-c6
          .row.align-items-center
            .col-lg.mb-4.mb-lg-0
              p #[b.txt-c4 Ejemplo:]
              p.text-white.mb-0 El cliente pide que se desarrolle un programa de computadora que le solicite al usuario un número, luego el sistema debe mostrar en pantalla el número digitado.
            .col-lg-auto
              figure
                img(src='@/assets/curso/tema3/img10.svg', style="width: 275px" alt='').m-auto
    p.mb-5(data-aos="fade-right") #[b.txt-c1 A continuación, se aplica la metodología:]
    .row.align-items-center.mb-4
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/img5.png', style="width: 400px" alt='').m-auto
      .col-lg-9(data-aos="fade-left")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Análisis")
            .col-12
              p El programa debe solicitar al usuario que ingrese un número. Luego, recibirá ese número desde el teclado y lo almacenará en una variable. Para ello, se debe definir una variable antes de empezar el algoritmo, reservando un espacio para guardar un número entero.
              p.mb-0 Una vez definida la variable, se leerá el número ingresado por el usuario y se almacenará en dicha variable. Finalmente, el programa imprimirá el contenido de la variable, concluyendo así el proceso.
          .row(titulo="Diseño")
            .col-12
              p El anterior análisis se contemplaron los datos de entrada, datos auxiliares (variable), operaciones (impresión en pantalla, lectura de datos e impresión en pantalla de resultados). Pero son muchas las palabras usadas en el análisis por lo tanto lo abreviamos con el siguiente código que, posteriormente, se explicará.
              .row
                .col-lg-8
                  .px-4.py-3.bg-c22
                    figure
                      img(src='@/assets/curso/tema3/img11.svg', style="width:50px" alt='')
                .col-lg-8
                  .px-4.py-3.bg-c23
                    pre
                      p.mb-0  ALGORITMO Mostrar número digitado;
                      p.mb-0  VAR
                      p.mb-0              ENTERO entrada;
                      p.mb-0  INICIO
                      p.mb-0              ESCRIBIR ("Por favor ingrese un número");
                      p.mb-0              LEER (entrada);
                      p.mb-0              ESCRIBIR (entrada);
                      p.mb-0  FIN
    p(data-aos="fade-right") En un algoritmo, se indica el nombre del mismo y luego se declaran las variables que serán usadas (con VAR), especificando su tipo de dato (un valor de tipo ENTERO, para este ejemplo).
    .row.mb-4(data-aos="fade-right")
      .col-auto.d-none.d-md-block
        figure.mt-1
          img(src='@/assets/curso/tema2/img6.svg', style="width: 80px" alt='')
      .col
        p.mb-0 Entre INICIO y FIN se escriben las diferentes acciones que realizará el algoritmo. Usamos ESCRIBIR() para mostrar un mensaje por pantalla (el texto que se va a mostrar 'tal cual' debe ir entre paréntesis dobles) y LEER() para recibir el dato desde el teclado.
    .row.align-items-center(data-aos="fade-down")
      .col-lg-8.mb-4.mb-lg-0
        .p-4.bg-c13
          p.mb-0 Se debe tener en cuenta que cada línea termina en punto y coma (excepto INICIO y FIN). El punto y coma indica que lo que se ejecuta es una sentencia que hace una única operación, mientras que lo que está entre INICIO y FIN agrupa varias sentencias que se ejecutan en un orden determinado.
      .col-lg-4
        figure
          img(src='@/assets/curso/tema3/img12.svg', style="width: 400px" alt='').m-auto
    Separador
    #t_3_3
    .titulo-segundo.color-acento-contenido
      h2 3.3 Pruebas de escritorio o trazas
    p.mb-5(data-aos="fade-right") Las pruebas de escritorio son simulaciones de ejecución de un algoritmo que permiten determinar la validez o efectividad del mismo.
    .tarjeta.color-primario1.p-3.mb-5(data-aos="fade-up")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-auto
          img(src="@/assets/curso/tema3/img13.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.txt-c4.mb-1 Pruebas de escritorio o trazas
              p.text-white Consisten en escribir en una tabla con tantas columnas como variables tiene el algoritmo y seguir las instrucciones, registrando los valores correspondientes. Ingrese al siguiente documento para conocer más.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/anexo1.pdf')" target="_blank")
                span Descargar
                i.fas.fa-link
    p(data-aos="fade-right") #[b Ejemplo]
    p.mb-5(data-aos="fade-right") Escribir un algoritmo que calcule el cuadrado y el cubo de un número introducido por teclado y, mostrar los resultados para el cubo y el cuadrado.
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
      .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Análisis")
            .col-12
              p Nuevamente, el dato de entrada debe ser un número ingresado por el usuario, y al igual que en el ejemplo anterior, se debe solicitar al usuario que lo digite.
              p Antes de realizar las operaciones de elevar al cuadrado y al cubo, se necesita definir las dos variables que recibirán estos datos (el cuadrado y el cubo). Por lo tanto, el algoritmo debe definirlas antes de realizar las operaciones y asignarles a ellas los resultados.
              p.mb-0 Una vez realizadas las operaciones, el algoritmo debe mostrar en pantalla el contenido de estas variables, con un mensaje de texto que indique si es el resultado del cuadrado o del cubo.
          .row(titulo="Diseño")
            .col-12
              p El siguiente código tiene la representación del resultado al análisis anterior.
              .row
                .col-lg-8
                  .px-4.py-3.bg-c22
                    figure
                      img(src='@/assets/curso/tema3/img11.svg', style="width:50px" alt='')
                .col-lg-8
                  .px-4.py-3.bg-c23
                    pre
                      p.mb-0  ALGORITMO Calcular el cuadrado y el cubo;
                      p.mb-0  VAR
                      p.mb-0                 ENTERO entrada;
                      p.mb-0                 ENTERO cuadrado;
                      p.mb-0                 ENTERO cubo;
                      p.mb-0  INICIO
                      p.mb-0                 ESCRIBIR ("Por favor ingrese un número");
                      p.mb-0                 LEER ( entrada );
                      p.mb-0                 cuadrado <= entrada * entrada;
                      p.mb-0                 cubo <= entrada * entrada * entrada;
                      p.mb-0                 ESCRIBIR( "El Cuadrado " cuadrado );
                      p.mb-0                 ESCRIBIR( "El Cubo " cubo);
                      p.mb-0  FIN
      .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img6.png', style="width: 400px" alt='').m-auto
    p.mb-5(data-aos="fade-right") Las pruebas de escritorio permiten verificar que el pseudocódigo realice lo que se espera al resolver el problema. Es importante que a todos los pseudocódigos se les aplique, al menos, una prueba de escritorio o las que se consideren necesarias.
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        .p-4.bg-c13
          p.mb-0 La mayoría de las pruebas de escritorio se representan en una tabla, donde en cada columna se anotan las variables y condiciones, si las hay, en el orden en que aparecen en el algoritmo. Para entenderlo, se debe recorrer línea a línea el pseudocódigo, identificando tanto las variables como las condiciones e ir anotándolas en la tabla de la prueba de escritorio.
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-down")
        figure
          img(src='@/assets/curso/tema3/img7.png', style="width: 370px" alt='').m-auto
      .col-lg-4(data-aos="fade-left")
        .p-4.bg-c2
          p Es importante que en la tabla no aparezcan variables o condiciones repetidas. En la última columna se pueden anotar los datos de salida, identificándolos como "Salida".
          figure.d-flex.justify-content-end
            img(src='@/assets/curso/tema3/img14.svg', style="width: 110px" alt='')
    p.mb-5(data-aos="fade-right") #[b.txt-c1 Ejecutando línea a línea el algoritmo del ejemplo anterior, se va llenando la tabla:]
    .tarjeta.tarjeta--gris.p-4.p-lg-5.mb-5(data-aos="fade-left")
      PasosB.color-primario
        .row.justify-content-center.align-items-center(titulo="Paso")
          .col-12
            .p-4
              p ESCRIBIR ("Por favor ingrese un número");
              .row
                .col-lg-8
                  .tabla-j1
                    table.tabla-j2(style="background-color: #F9F9F9")
                      tbody
                        tr
                          td.text-center #[b Número]
                          td.text-center #[b Cuadrado]
                          td.text-center #[b Cubo]
                          td.text-center #[b Salida]
                        tr
                          td.text-center 
                          td.text-center 
                          td.text-center 
                          td.text-center Por favor ingrese un número
        .row.justify-content-center.align-items-center(titulo="Paso")
          .col-12
            .p-4
              p LEER(entrada);
              .row
                .col-lg-8
                  .tabla-j1
                    table.tabla-j2(width="100%" style="background-color: #F9F9F9")
                      tbody
                        tr
                          td.text-center #[b Número]
                          td.text-center #[b Cuadrado]
                          td.text-center #[b Cubo]
                          td.text-center #[b Salida]
                        tr
                          td.text-center 3
                          td.text-center 
                          td.text-center 
                          td.text-center Por favor ingrese un número 3
        .row.justify-content-center.align-items-center(titulo="Paso")
          .col-12
            .p-4
              p cuadrado <= entrada * entrada;
              .row
                .col-lg-8
                  .tabla-j1
                    table.tabla-j2(width="100%" style="background-color: #F9F9F9")
                      tbody
                        tr
                          td.text-center #[b Número]
                          td.text-center #[b Cuadrado]
                          td.text-center #[b Cubo]
                          td.text-center #[b Salida]
                        tr
                          td.text-center 3
                          td.text-center 9
                          td.text-center 
                          td.text-center Por favor ingrese un número 3
        .row.justify-content-center.align-items-center(titulo="Paso")
          .col-12
            .p-4
              p cubo <= entrada * entrada * entrada;
              .row
                .col-lg-8
                  .tabla-j1
                    table.tabla-j2(width="100%" style="background-color: #F9F9F9")
                      tbody
                        tr
                          td.text-center #[b Número]
                          td.text-center #[b Cuadrado]
                          td.text-center #[b Cubo]
                          td.text-center #[b Salida]
                        tr
                          td.text-center 3
                          td.text-center 9
                          td.text-center 27
                          td.text-center Por favor ingrese un número 3
        .row.justify-content-center.align-items-center(titulo="Paso")
          .col-12
            .p-4
              p ESCRIBIR (cuadrado);
              .row
                .col-lg-8
                  .tabla-j1
                    table.tabla-j2(width="100%" style="background-color: #F9F9F9")
                      tbody
                        tr
                          td.text-center #[b Número]
                          td.text-center #[b Cuadrado]
                          td.text-center #[b Cubo]
                          td.text-center #[b Salida]
                        tr
                          td.text-center 3
                          td.text-center 9
                          td.text-center 27
                          td
                            p.mb-0 Por favor ingrese un número 3
                            p.mb-0 El cuadrado 9
        .row.justify-content-center.align-items-center(titulo="Paso")
          .col-12
            .p-4
              p ESCRIBIR (cuadrado);
              .row
                .col-lg-8
                  .tabla-j1
                    table.tabla-j2(width="100%" style="background-color: #F9F9F9")
                      tbody
                        tr
                          td.text-center #[b Número]
                          td.text-center #[b Cuadrado]
                          td.text-center #[b Cubo]
                          td.text-center #[b Salida]
                        tr
                          td.text-center 3
                          td.text-center 9
                          td.text-center 27
                          td
                            p.mb-0 Por favor ingrese un número 3
                            p.mb-0 El cuadrado 9
                            p.mb-0 El cubo 27
    .row
      .col-12
        .p-4.bg-c6(data-aos="fade-right")
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema3/img15.svg', style="width:80px" alt='').m-auto
            .col
              p.text-white.mb-0 También es posible realizar pruebas de escritorio a otras representaciones de algoritmos, como los diagramas de flujo, expuestos a continuación. Se recomienda realizar la prueba de escritorio correspondiente a cada ejemplo presentado.

</template>

<script>
export default {
  name: 'Tema3',
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
