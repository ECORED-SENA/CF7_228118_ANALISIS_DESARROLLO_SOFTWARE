<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Lógica matemática
    .row.bg-c15
      .col-12
        .px-5
          .row
            .col-lg-auto.pe-0.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema2/img2.png', style='width: 290px', alt='').m-auto
            .col.bg-c5
              .row.align-items-center.h-100
                .col-12
                  .p-4
                    p.text-white.mb-0 La lógica matemática es la disciplina que trata de métodos de razonamiento. En un nivel elemental, la lógica proporciona reglas y técnicas para determinar si un argumento dado es válido o no. El razonamiento lógico se emplea en matemáticas para demostrar teoremas; en ciencias de la computación para verificar si los programas son correctos; en las ciencias físicas y naturales para sacar conclusiones de experimentos; y en las ciencias sociales y en la vida cotidiana para resolver una multitud de problemas. Ciertamente, se usa de forma constante el razonamiento lógico para realizar cualquier actividad (EcuRed, s.f.).
          Separador
          #t_2_1
          .titulo-segundo.color-acento-contenido
            h2 2.1 Componentes de la lógica matemática
          p.mb-5 Todo razonamiento lógico está compuesto por una serie de elementos que se interrelacionan entre sí. La correcta interpretación de estos componentes y de sus relaciones corresponde al análisis deductivo. Estos componentes son las proposiciones y los conectores lógicos, que se describen a continuación:
          .row.mb-4.pt-4(data-aos="fade-down")
            .col-auto.bg-c4
              .px-3.pb-0
                .row.align-items-end
                  .col-auto.px-0
                    figure.fig-p1
                      img(src='@/assets/curso/tema1/img2.svg', style="width:50px" alt='').m-auto
                  .col
                    h3.text-white a. Proposiciones
          .row.mb-4
            .col-lg-6.mb-4.mb-lg-0
              p Una proposición o enunciado es una oración que puede ser falsa o verdadera, pero no ambas a la vez. La proposición es un elemento fundamental de la lógica matemática.
              .row.mb-3
                .col-12
                  .p-4.bg-c2
                    .row.align-items-center
                      .col-md-auto
                        figure
                          img(src='@/assets/curso/tema2/img1.svg', style='width: 70px', alt='').m-auto
                      .col
                        p.mb-0 Las proposiciones pueden ser simples o compuestas. Las primeras están formadas por una sola proposición; por el contrario, las proposiciones compuestas están conformadas por dos o más proposiciones unidas por un conector.
            .col-lg-6
              figure
                img(src='@/assets/curso/tema2/img3.png', style='width: 600px', alt='').m-auto
          .row.mb-5
            .col-lg-6.mb-4.mb-lg-0
              .p-4.bg-c16
                p.mb-0 #[b p:] la tierra es plana.
                p.mb-0 #[b q:] -17 + 38 = 21
                p.mb-0 #[b r:] hola ¿cómo estás?
                p.mb-0 #[b S:] lava el carro por favor.
            .col-lg-6
              .p-4.bg-c7
                p.mb-0 #[b p] y #[b q] son proposiciones simples válidas porque pueden tomar un valor verdadero o falso; sin embargo, los enunciados #[b r] y #[b s] son proposiciones no válidas, porque no pueden tomar un valor de falso o verdadero. Uno de ellos es un saludo y el otro es una orden.
          .row.mb-4.pt-4(data-aos="fade-down")
            .col-auto.bg-c4
              .px-3.pb-0
                .row.align-items-end
                  .col-auto.px-0
                    figure.fig-p1
                      img(src='@/assets/curso/tema1/img2.svg', style="width:50px" alt='').m-auto
                  .col
                    h3.text-white b. Conectores lógicos y proposiciones compuestas
          p Existen las proposiciones compuestas que son las que se componen de varias proposiciones, las cuales utilizan para su conexión operadores o conectores lógicos que son:
    .row.mb-5
      .col-12
        .p-4.p-lg-5.bg-c17
          .tarjeta.tarjeta--azul.p-4.p-lg-5
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-lg-5.mb-4.mb-lg-0
                  p #[b.txt-c1 Operador AND (y) conjunción]
                  p Conecta dos proposiciones que se deben unir para que se pueda obtener un resultado verdadero, esta se representa por el siguiente símbolo ∧.
                  p #[b Ejemplo]
                  ul.lista-ul
                    li.d-flex
                      i.fas.fa-code(style="color: #8722E2")
                      |
                      p.mb-0 Nuestra bandera es de color amarillo, azul y rojo.
                    li.d-flex
                      i.fas.fa-code(style="color: #8722E2")
                      |
                      p.mb-0 El número 9 es mayor que 7 y menor que 12.
                    li.d-flex
                      i.fas.fa-code(style="color: #8722E2")
                      |
                      p.mb-0 El carro enciende cuando tiene corriente eléctrica y gasolina en el tanque.
                .col-lg-5
                  figure
                    img(src='@/assets/curso/tema2/img5.png', style='width: 400px', alt='').m-auto
              .row.justify-content-center.align-items-center
                .col-lg-5.mb-4.mb-lg-0
                  p #[b.txt-c1 Operador OR (o) disyunción]
                  p Conecta dos proposiciones y se obtiene una proposición compuesta verdadera cuando por lo menos unas de las proposiciones son verdaderas.
                  p #[b Ejemplo]
                  ul.lista-ul
                    li.d-flex
                      i.fas.fa-code(style="color: #8722E2")
                      |
                      p.mb-0 Puedo ir a Bogotá en avión o en bus.
                    li.d-flex
                      i.fas.fa-code(style="color: #8722E2")
                      |
                      p.mb-0 Puedo entrar al estadio si compro mi boleta o si tengo un pase de cortesía.
                    li.d-flex
                      i.fas.fa-code(style="color: #8722E2")
                      |
                      p.mb-0 Voy a desayunar con huevos revueltos o huevos pericos.
                .col-lg-5
                  figure
                    img(src='@/assets/curso/tema2/img6.png', style='width: 400px', alt='').m-auto
              .row.justify-content-center.align-items-center
                .col-lg-5.mb-4.mb-lg-0
                  p #[b.txt-c1 Operador NOT (no) negación]
                  p Su propósito es negar una proposición, es decir, que si tenemos una proposición verdadera al aplicarle este tipo de operador se obtiene la negación, es decir, es falso.
                  p #[b Ejemplo]
                  ul.lista-ul
                    li.d-flex
                      i.fas.fa-code(style="color: #8722E2")
                      |
                      p.mb-0 No es cierto que Gabriel García Márquez escribió la Ilíada.
                    li.d-flex
                      i.fas.fa-code(style="color: #8722E2")
                      |
                      p.mb-0 No es cierto que el América de Cali es de la ciudad de Bogotá.
                    li.d-flex
                      i.fas.fa-code(style="color: #8722E2")
                      |
                      p.mb-0 Es falso que el agua es un hidrocarburo.
                .col-lg-5
                  figure
                    img(src='@/assets/curso/tema2/img7.png', style='width: 400px', alt='').m-auto
    .row.mb-4.pt-4(data-aos="fade-down")
      .col-auto.bg-c4
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img2.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white Tablas de verdad
    p Una estrategia de la lógica que tiene como objetivo determinar la validez de varias propuestas en alguna situación es la tabla de verdad. Esta estrategia determina las condiciones necesarias en las que un enunciado es verdadero, representando dichas condiciones en una tabla que establece el valor de verdad de todas las proposiciones que componen la situación. Así como lo explica el principio de bivalencia: #[b.txt-c1 una proposición puede ser verdadera o falsa únicamente, nunca ambas].
    .row.mb-5
      .col-lg-7.order-2.order-lg-1
        p Algunas consideraciones:
        ol.lista-ol--cuadro
          li.d-flex
            .lista-ol--cuadro__vineta
              span a.
            |
            p.mb-0 El valor de una proposición verdadera se representa por “V” o un “1”.
          li.d-flex
            .lista-ol--cuadro__vineta
              span b.
            |
            p.mb-0 El valor de una proposición falsa se representa por “F” o un “0”.
          li.d-flex
            .lista-ol--cuadro__vineta
              span c.
            |
            p.mb-0 Existe una tabla de verdad para cada uno de los conectores lógicos, lo que se tiene que evaluar para responder si una proposición compuesta es verdadera o falsa es el estatus actual de las proposiciones simples.
      .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/tema2/img8.png', style='width: 500px', alt='').m-auto
    p.mb-5 #[b.txt-c1 A continuación, se presentan las tablas de verdad.]
    .row.justify-content-center.mb-5
      .col-lg-10.mb-5
        .titulo-sexto.color-acento-contenido.mb-4
          p.mb-0 #[b Tabla 1.] Tabla de verdad conjunción (Y)
        .row.justify-content-center
          .col-10.col-md-8.col-lg-5.mb-4.mb-lg-0
            table(width="100%")
              tbody
                tr
                  td.text-center #[b P]
                  td.text-center #[b Q]
                  td.text-center #[b P ∧ Q]
                tr
                  td.text-center V
                  td.text-center V
                  td.text-center V
                tr
                  td.text-center V
                  td.text-center V
                  td.text-center V
                tr
                  td.text-center F
                  td.text-center V
                  td.text-center F
                tr
                  td.text-center F
                  td.text-center F
                  td.text-center F
          .col-10.col-md-8.col-lg-2.mb-4.mb-lg-0
            .p-4.bg-c12.h-100
              .row.align-items-center.h-100
                .col-12
                  p.text-center.mb-0 #[b O puede]
          .col-10.col-md-8.col-lg-5
            table(width="100%")
              tbody
                tr
                  td.text-center #[b P]
                  td.text-center #[b Q]
                  td.text-center #[b P ∧ Q]
                tr
                  td.text-center V
                  td.text-center V
                  td.text-center V
                tr
                  td.text-center V
                  td.text-center V
                  td.text-center V
                tr
                  td.text-center F
                  td.text-center V
                  td.text-center F
                tr
                  td.text-center F
                  td.text-center F
                  td.text-center F
      .col-lg-10.mb-5
        .titulo-sexto.color-acento-contenido.mb-4
          p.mb-0 #[b Tabla 2.] Tabla de verdad disyunción (O)
        .row.justify-content-center
          .col-10.col-md-8.col-lg-5.mb-4.mb-lg-0
            table(width="100%")
              tbody
                tr
                  td.text-center #[b P]
                  td.text-center #[b Q]
                  td.text-center #[b P ∨ Q]
                tr
                  td.text-center V
                  td.text-center V
                  td.text-center V
                tr
                  td.text-center V
                  td.text-center F
                  td.text-center V
                tr
                  td.text-center F
                  td.text-center V
                  td.text-center V
                tr
                  td.text-center F
                  td.text-center F
                  td.text-center F
          .col-10.col-md-8.col-lg-2.mb-4.mb-lg-0
            .p-4.bg-c12.h-100
              .row.align-items-center.h-100
                .col-12
                  p.text-center.mb-0 #[b O puede]
          .col-10.col-md-8.col-lg-5
            table(width="100%")
              tbody
                tr
                  td.text-center #[b P]
                  td.text-center #[b Q]
                  td.text-center #[b P ∨ Q]
                tr
                  td.text-center 1
                  td.text-center 1
                  td.text-center 1
                tr
                  td.text-center 1
                  td.text-center 0
                  td.text-center 1
                tr
                  td.text-center 0
                  td.text-center 1
                  td.text-center 1
                tr
                  td.text-center 0
                  td.text-center 0
                  td.text-center 0
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4
          p.mb-0 #[b Tabla 3.] Tabla de verdad negación (no)
        .row.justify-content-center
          .col-10.col-md-8.col-lg-5.mb-4.mb-lg-0
            table(width="100%")
              tbody
                tr
                  td.text-center #[b P]
                  td.text-center #[b ¬P]
                tr
                  td.text-center V
                  td.text-center F
                tr
                  td.text-center F
                  td.text-center V
          .col-10.col-md-8.col-lg-2.mb-4.mb-lg-0
            .p-4.bg-c12.h-100
              .row.align-items-center.h-100
                .col-12
                  p.text-center.mb-0 #[b O puede]
          .col-10.col-md-8.col-lg-5
            table(width="100%")
              tbody
                tr
                  td.text-center #[b P]
                  td.text-center #[b ¬P]
                tr
                  td.text-center 1
                  td.text-center 0
                tr
                  td.text-center 0
                  td.text-center 1
    p Existe otro tipo de conectores que se llaman proposiciones condicionales, aquellas que están formadas por dos proposiciones simples o compuesta por p y q, la cual se representa y se lee de la siguiente manera:
    p.mb-5 #[b.txt-c1 p → q se lee “Si p entonces q”]
    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-5
      .row(titulo="Ejemplo 1")
        .col-12
          p.mb-0 #[b Las palomas vuelan.]
          p.mb-0 #[b p:] todas las palomas vuelan
          p.mb-0 #[b q:] todas las aves tienen plumas
          p.mb-0 #[b r:] luego todas las palomas son aves
          p Estas proposiciones se pueden escribir utilizando los operadores lógicos de la siguiente manera: (p ∧ q) → r.
          p #[b.txt-c1 Para el anterior ejercicio se construye la tabla de verdad:]
          .row
            .col-lg-6
              table(width="100%" style="background-color: #F9F9F9")
                tbody
                  tr
                    td.text-center #[b P]
                    td.text-center #[b Q]
                    td.text-center #[b Q]
                    td.text-center #[b P ∧ Q]
                    td.text-center #[b Q]
                  tr
                    td.text-center V
                    td.text-center V
                    td.text-center V
                    td.text-center V
                    td.text-center V
                  tr
                    td.text-center V
                    td.text-center V
                    td.text-center V
                    td.text-center V
                    td.text-center V
                  tr
                    td.text-center F
                    td.text-center V
                    td.text-center V
                    td.text-center F
                    td.text-center V
                  tr
                    td.text-center F
                    td.text-center F
                    td.text-center F
                    td.text-center F
                    td.text-center F
                  tr
                    td.text-center F
                    td.text-center F
                    td.text-center F
                    td.text-center F
                    td.text-center F
                  tr
                    td.text-center F
                    td.text-center F
                    td.text-center F
                    td.text-center F
                    td.text-center F
                  tr
                    td.text-center F
                    td.text-center F
                    td.text-center F
                    td.text-center F
                    td.text-center F
                  tr
                    td.text-center F
                    td.text-center F
                    td.text-center F
                    td.text-center F
                    td.text-center F
      .row(titulo="Ejemplo 2")
        .col-12
          p.mb-0 #[b Si no llueve se arruina la cosecha.]
          p Este tipo de proposición se conoce como la condición “para que”, de manera que para que no se arruine la cosecha se requiere que llueva.
          p.mb-0 #[b p:] si no llueve
          p.mb-0 #[b q:] se arruina la cosecha
          p #[b.txt-c1 Al aplicar el operador p → q su tabla de verdad quedaría de la siguiente manera:]
          .row.justify-content-center.mb-4
            .col-10.col-md-8.col-lg-5.mb-4.mb-lg-0
              table(width="100%" style="background-color: #F9F9F9")
                tbody
                  tr
                    td.text-center #[b P]
                    td.text-center #[b Q]
                    td.text-center #[b P → Q]
                  tr
                    td.text-center V
                    td.text-center V
                    td.text-center V
                  tr
                    td.text-center V
                    td.text-center F
                    td.text-center F
                  tr
                    td.text-center F
                    td.text-center V
                    td.text-center V
                  tr
                    td.text-center F
                    td.text-center F
                    td.text-center V
            .col-10.col-md-8.col-lg-2.mb-4.mb-lg-0
              .p-4.h-100
                .row.align-items-center.h-100
                  .col-12
                    p.text-center.mb-0 #[b O puede]
            .col-10.col-md-8.col-lg-5
              table(width="100%" style="background-color: #F9F9F9")
                tbody
                  tr
                    td.text-center #[b P]
                    td.text-center #[b Q]
                    td.text-center #[b P → Q]
                  tr
                    td.text-center 1
                    td.text-center 1
                    td.text-center 1
                  tr
                    td.text-center 1
                    td.text-center 0
                    td.text-center 0
                  tr
                    td.text-center 0
                    td.text-center 1
                    td.text-center 1
                  tr
                    td.text-center 0
                    td.text-center 0
                    td.text-center 1
          p De igual manera, existe una proposición bicondicional que indica que una proposición es verdadera si y solo si las proposiciones simples o compuestas que forman la proposición son verdaderas o son falsas si y solo si ambas proposiciones son falsas, esta se representa y se lee de la siguiente manera: #[b.txt-c1 p ↔ q se lee "p si solo si q"]
      .row(titulo="Ejemplo 3")
        .col-12
          p.mb-0 #[b Es buen estudiante.]
          p.mb-0 Es buen estudiante, si y solo si tiene promedio de cinco, donde se puede concluir lo siguiente:
          p.mb-0 #[b p:] es un buen estudiante
          p #[b q:] tiene promedio de 5
          p #[b.txt-c1 al aplicar el operador p ↔ q su tabla de verdad quedaría de la siguiente manera:]
          .row.justify-content-center
            .col-10.col-md-8.col-lg-5.mb-4.mb-lg-0
              table(width="100%" style="background-color: #F9F9F9")
                tbody
                  tr
                    td.text-center #[b P]
                    td.text-center #[b Q]
                    td.text-center #[b P ↔ Q]
                  tr
                    td.text-center V
                    td.text-center V
                    td.text-center V
                  tr
                    td.text-center V
                    td.text-center F
                    td.text-center F
                  tr
                    td.text-center F
                    td.text-center V
                    td.text-center V
                  tr
                    td.text-center F
                    td.text-center F
                    td.text-center V
            .col-10.col-md-8.col-lg-2.mb-4.mb-lg-0
              .p-4.h-100
                .row.align-items-center.h-100
                  .col-12
                    p.text-center.mb-0 #[b O puede]
            .col-10.col-md-8.col-lg-5
              table(width="100%" style="background-color: #F9F9F9")
                tbody
                  tr
                    td.text-center #[b P]
                    td.text-center #[b Q]
                    td.text-center #[b P ↔ Q]
                  tr
                    td.text-center 1
                    td.text-center 1
                    td.text-center 1
                  tr
                    td.text-center 1
                    td.text-center 0
                    td.text-center 0
                  tr
                    td.text-center 0
                    td.text-center 1
                    td.text-center 1
                  tr
                    td.text-center 0
                    td.text-center 0
                    td.text-center 1
    p.mb-5 #[b.txt-c1 Cuando se aplican tablas de verdad se puede llegar a tres tipos de resultado que son:]
    .row.align-items-center
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema2/img9.png', style="width: 450px" alt='').m-auto
      .col-lg-8
        .p-4.bg-c13
          p #[b Tautología:] es una expresión lógica que es verdadera para todos los posibles valores de verdad de sus componentes atómicos. Las proposiciones dan el resultado positivo.
          p #[b Contradicción:] son aquellas fórmulas que son falsas para cualquier valoración de los símbolos proposicionales que contiene. Las proposiciones dan el resultado negativo.
          p.mb-0 #[b Contingencia:] son aquellas fórmulas cuyo valor de verdad o falsedad depende de la valoración de los símbolos proposicionales que contiene. Las proposiciones dan un resultado negativo y positivo. (TOMi.digital, 2021).
    Separador
    #t_2_1
    .titulo-segundo.color-acento-contenido
      h2 2.1 Componentes de la lógica matemática
    p A continuación, se plantean a manera de ejemplo algunos ejercicios con su respectiva solución que permiten identificar un problema, reconocer los datos de entrada y los procesos a ser aplicados como estrategia a seguir con la utilización de la lógica proposicional en la identificación y solución de problemas. Para dar solución al enunciado anterior se realiza las siguientes actividades.
    p.mb-5 #[b Ejercicio 1:] se necesita personal femenino que sepa Microsoft Office o Gsuite.
    .row.align-items-center.mb-5
      .col-lg-6.mb-4.mb-lg-0
        .p-4.bg-c6
          p.text-white #[b Pasos a seguir:]
          ol.lista-ol--cuadro
            li.d-flex
              .lista-ol--cuadro__vineta
                span a.
              |
              p.text-white.mb-0 Identificar el problema.
            li.d-flex
              .lista-ol--cuadro__vineta
                span b.
              |
              p.text-white.mb-0 Descomponer el enunciado en proposiciones atómicas.
            li.d-flex
              .lista-ol--cuadro__vineta
                span c.
              |
              p.text-white.mb-0 Evaluar los posibles casos derivados del enunciado anterior.
            li.d-flex
              .lista-ol--cuadro__vineta
                span d.
              |
              p.text-white.mb-0 Determinar los casos donde se cumpla la condición y hacer la selección de las personas de acuerdo con el requerimiento.
      .col-lg-6
        figure
          img(src='@/assets/curso/tema2/img2.svg', style="width: 550px" alt='').m-auto
    .row.mb-4.pt-4(data-aos="fade-down")
      .col-auto.bg-c4
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img2.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white Solución
    .tarjeta.tarjeta--gris.p-4.p-lg-5.mb-5
      PasosB.color-primario
        .row.justify-content-center.align-items-center(titulo="Paso")
          .col-lg-6.mb-4.mb-lg-0
            p #[b Identificar el problema]
            p.mb-0 Se trata de buscar o contratar personal femenino que sepa utilizar Microsoft Office o Google Suite.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema2/img3.svg', style="width: 120px" alt='').m-auto
        .row.justify-content-center.align-items-center(titulo="Paso")
          .col-lg-6.mb-4.mb-lg-0
            p #[b Descomponer el enunciado]
            p Descomponer en proposiciones atómicas del enunciado (cuando están separadas del contexto del problema se llaman proposiciones atómicas).
            p.mb-0 #[b p:] es personal femenino.
            p.mb-0 #[b q:] sabe utilizar el Microsoft Office.
            p #[b r:] sabe utilizar la suite de Google.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema2/img4.svg', style="width: 120px" alt='').m-auto
        .row.justify-content-center.align-items-center(titulo="Paso")
          .col-lg-6.mb-4.mb-lg-0
            p #[b Determinar los casos]
            p Determinar las relaciones lógicas de acuerdo con lo planteado en el enunciado, utilizando las proposiciones atómicas definidas en el punto anterior.
            p.mb-0 p ∧ (q V r).
          .col-lg-4
            figure
              img(src='@/assets/curso/tema2/img5.svg', style="width: 120px" alt='').m-auto
    p.mb-5 #[b Ejercicio 2:]  Juan sabe utilizar Microsoft Office y Gsuite, Martha sabe utilizar Gsuite, Natalia sabe utilizar Gsuite y Microsoft Office.
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema2/img11.png', style="width: 400px" alt='').m-auto
      .col-lg-8
        .row.mb-3
          .col-auto.d-none.d-md-block
            figure.mt-1
              img(src='@/assets/curso/tema2/img6.svg', style="width: 70px" alt='').m-auto
          .col
            p.mb-0 Crear la tabla de verdad y aplicar la lógica proposicional para elegir las personas que cumplan con los requisitos exigidos.
        .row.mb-3
          .col-12
            .p-4.bg-c18
              .row.align-items-center
                .col-md-auto.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema2/img7.svg', style="width: 90px" alt='').m-auto
                .col
                  p.mb-0 Para la construcción de la tabla de verdad se evalúa cada una de las preposiciones atómicas y, se van validando para verificar si se cumple lo que la haría verdadera o si no se cumple, lo cual haría que la proposición sea falsa.
        p.mb-0 Se analiza cada posible caso por lo que se evalúa a Juan, para la primera proposición sería un valor falso, ya que p requiere que sea personal femenino, el cual se pondrá en la columna 2, luego se evalúa si Juan sabe utilizar Microsoft Office o la Suite de Google, el valor va en la columna tres y por último, se evalúa la conjunción para determinar la solución.
    .row.align-items-center.mb-5
      .col-lg-4.order-2.order-lg-1
        .titulo-sexto.color-acento-contenido.mb-4
          p.mb-0 #[b Tabla 4.] Tabla de verdad ejemplo 2
        .row
          .col-12
            table(width="100%")
              tbody
                tr
                  td.text-center #[b Nombre]
                  td.text-center #[b P]
                  td.text-center #[b (q ∨ r)]
                  td.text-center #[b p ∧ (q ∨ r)]
                tr
                  td.text-center Juan
                  td.text-center F
                  td.text-center V
                  td.text-center F
                tr
                  td.text-center Martha
                  td.text-center V
                  td.text-center V
                  td.text-center V
                tr
                  td.text-center Nathalia
                  td.text-center V
                  td.text-center V
                  td.text-center V
      .col-lg-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/tema2/img8.svg', style="width: 800px" alt='').m-auto
    p.mb-5 #[b Ejemplo 3.] Sandra dice adelgazo o no hago dieta.
    .row.mb-5
      .col-lg-auto.pe-0.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema2/img9.svg', style='width: 400px', alt='').m-auto
      .col.bg-c19
        .row.align-items-center.h-100
          .col-12
            .p-4
              p Para este enunciado además se propone una serie de alternativas que podrían ser válidas o no, dependiendo de la solución propuesta utilizando la lógica matemática. Las siguientes son las posibles respuestas de las cuales se deberá elegir la que se considera es real al problema planteado.
              ul.lista-ul.mb-0
                li.d-flex.mb-0
                  i.fas.fa-code(style="color: #8722E2")
                  |
                  p.mb-0 Si adelgazo, hago dieta.
                li.d-flex.mb-0
                  i.fas.fa-code(style="color: #8722E2")
                  |
                  p.mb-0 Si no adelgazo, hago dieta.
                li.d-flex.mb-0
                  i.fas.fa-code(style="color: #8722E2")
                  |
                  p.mb-0 Si hago dieta, no adelgazo.
                li.d-flex.mb-0
                  i.fas.fa-code(style="color: #8722E2")
                  |
                  p.mb-0 Si hago dieta adelgazo.
                li.d-flex.mb-0
                  i.fas.fa-code(style="color: #8722E2")
                  |
                  p.mb-0 Hago dieta o no adelgazo.
    .row.mb-4.pt-4(data-aos="fade-down")
      .col-auto.bg-c4
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img2.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white Solución
    .tarjeta.tarjeta--gris.p-4.p-lg-5
      PasosB.color-primario
        .row.justify-content-center.align-items-center(titulo="Paso")
          .col-lg-6.mb-4.mb-lg-0
            p #[b Problema]
            p.mb-0 Identificar la respuesta correcta al problema presentado por Sandra.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema2/img3.svg', style="width: 120px" alt='').m-auto
        .row.justify-content-center.align-items-center(titulo="Paso")
          .col-lg-6.mb-4.mb-lg-0
            p #[b Definir]
            p Definir las proposiciones atómicas:
            p.mb-0 #[b p:] adelgazo.
            p.mb-0 #[b q:] hago dieta.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema2/img10.svg', style="width: 120px" alt='').m-auto
        .row.justify-content-center.align-items-center(titulo="Paso")
          .col-lg-6.mb-4.mb-lg-0
            p #[b Determinar]
            p Determinar la relación lógica.
            p.mb-0 #[b p V ¬ q.]
          .col-lg-4
            figure
              img(src='@/assets/curso/tema2/img11.svg', style="width: 120px" alt='').m-auto
        .row.justify-content-center.align-items-center(titulo="Paso")
          .col-lg-5.mb-4.mb-lg-0
            p #[b Crear]
            p.mb-0 Crear la tabla de verdad.
          .col-lg-5
            .row
              .col-12
                table(width="100%" style="background-color: #F9F9F9")
                  tbody
                    tr
                      td.text-center #[b P]
                      td.text-center #[b Q]
                      td.text-center #[b PQP∨¬Q]
                    tr
                      td.text-center V
                      td.text-center V
                      td.text-center V
                    tr
                      td.text-center V
                      td.text-center F
                      td.text-center V
                    tr
                      td.text-center F
                      td.text-center V
                      td.text-center F
                    tr
                      td.text-center F
                      td.text-center F
                      td.text-center V

</template>

<script>
export default {
  name: 'Tema2',
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
