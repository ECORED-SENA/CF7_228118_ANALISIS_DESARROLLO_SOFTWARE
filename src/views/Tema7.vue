<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Estructuras de control secuencial
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        .p-4.bg-c13
          p.mb-0 Una estructura se define como un esquema con determinada distribución y orden que permite representar una idea de forma simplificada. La estructura de control secuencial es la más sencilla y es conocida como estructura lineal. Se compone de instrucciones que deben ejecutarse de forma consecutiva, una tras otra, siguiendo una línea de flujo.
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-down")
        figure
          img(src='@/assets/curso/tema7/img1.png', style="width: 370px" alt='').m-auto
      .col-lg-4(data-aos="fade-left")
        .p-4.bg-c2
          p.mb-0 Los problemas más sencillos pueden resolverse haciendo uso únicamente de esta estructura. Por lo general, la estructura secuencial forma parte de soluciones a problemas complejos, en las que se utilizan otras estructuras iterativas (repetir varias veces un conjunto de instrucciones) y condicionales (López, 2009).
    p.mb-5(data-aos="fade-right") #[b.txt-c1 La siguiente figura presenta la estructura general del algoritmo más básico.]
    .row.mb-5
      .col-12
        .p-4.bg-c3(data-aos="fade-left")
          .titulo-sexto.color-acento-contenido.mb-4
            p.mb-0 #[b Figura 9.] Modelo de estructura secuencial
          figure
            img(src='@/assets/curso/tema7/img1.svg', style='width: 200px', alt='Diagrama de flujo que muestra un proceso desde Inicio, pasando por Leer datos, Procesos, Mostrar resultados, y terminando con Final.').m-auto
    .row.mb-4.pt-4(data-aos="fade-down")
      .col-auto.bg-c4
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img2.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white Ejemplo estructura de control secuencial
    p.mb-5(data-aos="fade-right") Escribir un algoritmo para calcular el área de cualquier triángulo rectángulo, en él se debe pedir al usuario que ingrese los valores de la altura y la base del triángulo.
    .row.mb-5
      .col-12
        .p-4.bg-c13(data-aos="fade-down")
          p #[b.txt-c1 Análisis]
          ul.lista-ul
            li.d-flex
              i.fas.fa-code(style="color: #8722E2")
              |
              p.mb-0 #[b Formular el problema:] está claramente planteado y consiste en calcular el área de un triángulo rectángulo.
            li.d-flex
              i.fas.fa-code(style="color: #8722E2")
              |
              p.mb-0 #[b Resultados esperados:] se espera que el algoritmo sea capaz de calcular el área del rectángulo y mostrar en la pantalla el resultado de ese cálculo.
            li.d-flex
              i.fas.fa-code(style="color: #8722E2")
              |
              p.mb-0 #[b Datos disponibles:] dos datos números que son la base y la altura del triángulo (se deben solicitar al usuario). El aprendiz debe preguntarse si sus conocimientos actuales de matemáticas le permiten resolver este problema, de no ser así, tendrá que plantear una estrategia para obtener los conocimientos requeridos. Para este ejemplo recordar que un triángulo rectángulo es aquel que uno de sus lados tiene un ángulo recto (90 grados).
            li.d-flex
              i.fas.fa-code(style="color: #8722E2")
              |
              p.mb-0 #[b Restricciones:] los valores de base y altura son variables y se deben solicitar al usuario.
            li.d-flex
              i.fas.fa-code(style="color: #8722E2")
              |
              p.mb-0 #[b Procesos necesarios:] definir variables; asignar el valor 2 a la constante usando para dividir (divisor); solicitar al usuario el valor de la altura del triángulo; solicitar al usuario el valor de la base; aplicar la fórmula de área; mostrar el resultado.
    p(data-aos="fade-right") #[b Diseño]
    p.mb-5(data-aos="fade-right") El algoritmo resultado del análisis, en la que están representados tanto el diagrama de flujo como en pseudocódigo. Mientras se está aprendiendo a diseñarlos, es importante hacer los algoritmos en diagrama de flujo, y a medida que se va adquiriendo experticia con la representación en pseudocódigo, es más conveniente hacer esta representación debido a la velocidad a la hora de diseñarlo.
    .row.mb-5
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        .row
          .col-12
            .p-4.bg-c3
              .titulo-sexto.color-acento-contenido.mb-4
                p.mb-0 #[b Figura 10.] Diagrama al área de un triángulo
              figure
                img(src='@/assets/curso/tema7/img2.svg', style='width: 160px', alt='Diagrama de flujo para calcular el área, comenzando con Inicio, declarando variables, y ejecutando cálculos, para finalizar con area y Fin.').m-auto
      .col-lg-5(data-aos="fade-left")
        .row
          .col-12
            .px-4.py-3.bg-c22
              figure
                img(src='@/assets/curso/tema3/img11.svg', style="width:50px" alt='')
          .col-12
            .px-4.py-3.bg-c23
              pre
                p.mb-0 
                p.mb-0  ALGORITMO área de un triángulo;
                p.mb-0  VAR
                p.mb-0                     ENTERO divisor;
                p.mb-0                     REAL area;
                p.mb-0                     REAL base;
                p.mb-0                     REAL altura;
                p.mb-0  INICIO
                p.mb-0                     divisor = 2;
                p.mb-0                     ESCRIBIR( "Escriba la base ");
                p.mb-0                     LEER ( base )
                p.mb-0                     ESCRIBIR( "Escriba la altura ");
                p.mb-0                     LEER( altura ) ;
                p.mb-0                     area = base * altura / divisor;
                p.mb-0                     ESCRIBIR( area ) ;
                p.mb-0  FIN
                p.mb-0 
    p(data-aos="fade-right") Del diagrama de flujo y el pseudocódigo se puede notar lo siguiente: el identificador "area" no tiene tilde por la razón antes mencionada. El tipo de dato REAL hace referencia a que es un número que no solamente puede contener un valor entero, sino también cifras decimales.
    Separador
    #t_7_1
    .titulo-segundo.color-acento-contenido
      h2 7.1 Estructura condicional
    .row.mb-5
      .col-lg-6.order-2.order-lg-1(data-aos="fade-right")
        p #[b.txt-c1 Es importante prestar atención a las estructuras que se utilizan para resolver problemas y poderlas reconocer para lograr mayor control sobre la solución planteada]. La estructura condicional se emplea para indicarle al computador que debe evaluar una condición y, según el resultado, ejecutar el bloque de instrucciones correspondiente.
        .row
          .col-12
            .p-3.bg-c21
              .row.align-items-center
                .col-md-auto.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema7/img3.svg', style='width: 70px', alt='')
                .col
                  p.mb-0 La forma más común está compuesta por una condición que se evalúa y dos bloques de instrucciones que se ejecutan: uno cuando la condición es verdadera y otro cuando la condición es falsa.
      .col-lg-6.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema7/img2.png', style="width: 550px" alt='')
    p(data-aos="fade-right") #[b Ejemplo:]
    p(data-aos="fade-right") Un aprendiz aprueba un examen cuando la calificación de este es mayor o igual a 3. Elaborar un algoritmo que pida al usuario una calificación, aplicar el criterio de aprobación e imprimir “Aprobado” o “Reprobado”, según sea el caso.
    .row.mb-5
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
        .p-4.bg-c2
          p #[b Análisis]
          ul.lista-ul.mb-0
            li.d-flex
              i.fas.fa-code(style="color: #8722E2")
              |
              p.mb-0 #[b Formular el problema:] es un problema sencillo solo consiste en usar una sentencia de repetición.
            li.d-flex
              i.fas.fa-code(style="color: #8722E2")
              |
              p.mb-0 #[b Resultados esperados:] el mensaje “Esto es un algoritmo” 7 veces impreso en pantalla.
            li.d-flex
              i.fas.fa-code(style="color: #8722E2")
              |
              p.mb-0 #[b Datos disponibles:] constante con el número de repeticiones (7).
            li.d-flex
              i.fas.fa-code(style="color: #8722E2")
              |
              p.mb-0 #[b Restricciones:] ninguna.
            li.d-flex.mb-0
              i.fas.fa-code(style="color: #8722E2")
              |
              p.mb-0 #[b Procesos necesarios:] necesarios: hacer que se imprima en pantalla el mensaje 7 veces.
      .col-lg-6(data-aos="fade-left")
        .p-4.bg-c29
          p #[b Diseño]
          p Como se presenta en la figura, no se ejecuta nada en caso de que NO se cumpla la condición. Este tipo de estructura condicional se denomina estructura condicional simple. Además, todo el proceso (pedir la edad, comprobar la condición, mostrar o no el mensaje) se realiza una única vez y finaliza la ejecución del algoritmo. Si se deseara que el programa repitiera estas mismas operaciones más de una vez, se tendría que usar una estructura de iteración, como se verá a continuación.
          figure.d-flex.justify-content-end
            img(src='@/assets/curso/tema7/img4.svg', style="width: 50px" alt='')
    .row
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        .row
          .col-12
            .p-4.bg-c3
              .titulo-sexto.color-acento-contenido.mb-4
                p.mb-0 #[b Figura 11.] Estructura condicional simple
              figure
                img(src='@/assets/curso/tema7/img5.svg', style='width: 360px', alt='Un diagrama de flujo que muestra un algoritmo para determinar si una persona es mayor de edad en base a su edad ingresada.').m-auto
      .col-lg-5(data-aos="fade-left")
        .row
          .col-12
            p #[b ALGORITMO Calificación del usuario.]
          .col-12
            .px-4.py-3.bg-c22
              figure
                img(src='@/assets/curso/tema3/img11.svg', style="width:50px" alt='')
          .col-12
            .px-4.py-3.bg-c23
              pre
                p.mb-0 
                p.mb-0  ALGORITMO Edad del usuario;
                p.mb-0  VAR
                p.mb-0  
                p.mb-0                    REAL edad;
                p.mb-0  INICIO
                p.mb-0                    ESCRIBIR( "Escriba la calificación");
                p.mb-0                    LEER ( edad )
                p.mb-0                    SI ( edad >= 18)
                p.mb-0                       ESCRIBIR ( "Usted es mayor de edad" );
                p.mb-0                    FINSI
                p.mb-0  
                p.mb-0  FIN
                p.mb-0 
    Separador
    #t_7_2
    .titulo-segundo.color-acento-contenido
      h2 7.2 Estructuras de iteración o repetitivas
    p.mb-5(data-aos="fade-right") Las estructuras iterativas o de repetición permiten ejecutar una o varias instrucciones un número determinado de veces o indefinidamente hasta que se cumpla una condición. Esta estructura ayuda a simplificar los algoritmos.
    .row.align-items-center.mb-5
      .col-lg-7.order-2.order-lg-1(data-aos="fade-right")
        .row
          .col-12
            .p-4.bg-c29
              p En programación existen, como mínimo, dos tipos de estructuras repetitivas, las cuales tienen variantes en los diferentes lenguajes de programación. La característica común es que ambos tipos permiten ejecutar una o varias instrucciones:
              ol.lista-ol--cuadro.mb-0
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span 1.
                  |
                  p.mb-0 Un número conocido de veces (Estructura PARA o FOR en inglés).
                li.d-flex.mb-0
                  .lista-ol--cuadro__vineta
                    span 2.
                  |
                  p.mb-0 Mientras se cumpla una condición (Estructura MIENTRAS o WHILE).
      .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema7/img3.png', style='width: 500px', alt='').m-auto
    .row.mb-4.pt-4(data-aos="fade-down")
      .col-auto.bg-c4
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img2.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white Estructura PARA (FOR)
    p.mb-5(data-aos="fade-right") Esta estructura se usa cuando se sabe el número de veces que se debe ejecutar un conjunto de operaciones.
    .row.mb-5
      .col-12
        .p-4.bg-c21(data-aos="fade-down")
          .row.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/tema7/img6.svg', style='width: 80px', alt='').m-auto
            .col
              p.mb-0 #[b Ejemplo:]
              p.mb-0 Escribir un procedimiento que muestre siete (7) veces en pantalla la frase “Esto es un algoritmo”. Mostrar en pantalla la salida del en el computador.
    .row.mb-5
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        .p-4.bg-c12
          p #[b Análisis]
          ol.lista-ol--cuadro.mb-0
            li.d-flex
              .lista-ol--cuadro__vineta
                span 1.
              |
              p.mb-0 #[b Formular el problema:] es un problema sencillo solo consiste en usar una sentencia de repetición.
            li.d-flex
              .lista-ol--cuadro__vineta
                span 2.
              |
              p.mb-0 #[b Resultados esperados:] el mensaje “Esto es un algoritmo” 7 veces impreso en pantalla.
            li.d-flex
              .lista-ol--cuadro__vineta
                span 3.
              |
              p.mb-0 #[b Datos disponibles:] constante con el número de repeticiones (7).
            li.d-flex
              .lista-ol--cuadro__vineta
                span 4.
              |
              p.mb-0 #[b Restricciones:] ninguna.
            li.d-flex.mb-0
              .lista-ol--cuadro__vineta
                span 5.
              |
              p.mb-0 #[b Procesos necesarios:] hacer que se imprima en pantalla el mensaje 7 veces.
      .col-lg-5(data-aos="fade-left")
        .p-4.bg-c6
          br
          p #[b.text-white Diseño]
          p.mb-0 #[span.txt-c6 Como se presenta en el algoritmo de la siguiente figura, existe una variable i tendrá el valor 1, 2, 3 ... hasta 7, esta variable, se puede usar dentro del el bloque] #[b.txt-c2 PARA] #[span.txt-c6 hasta] #[b.txt-c2 FINPARA]#[span.txt-c6 .]
          br
    .row.mb-5
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        .row
          .col-12
            .p-4.bg-c3
              .titulo-sexto.color-acento-contenido.mb-4
                p.mb-0 #[b Figura 10.] Diagrama al área de un triángulo
              figure
                img(src='@/assets/curso/tema7/img7.svg', style='width: 360px', alt='Un diagrama de flujo que ilustra un ciclo de iteración para un algoritmo, que muestra un mensaje durante siete repeticiones.').m-auto
      .col-lg-5(data-aos="fade-left")
        .row
          .col-12
            .px-4.py-3.bg-c22
              figure
                img(src='@/assets/curso/tema3/img11.svg', style="width:50px" alt='')
          .col-12
            .px-4.py-3.bg-c23
              pre
                p.mb-0 
                p.mb-0  ALGORITMO Ciclo para;
                p.mb-0  
                p.mb-0  INICIO
                p.mb-0  
                p.mb-0  
                p.mb-0                    PARA i DESDE 1 HASTA 7
                p.mb-0                             ESCRIBIR( "Esto es un algoritmo" );
                p.mb-0                    FINPARA
                p.mb-0  
                p.mb-0  FIN
                p.mb-0 
    .row.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        .p-4.bg-c13
          p #[b La salida en pantalla sería:]
          p.mb-0 Esto es un algoritmo
          p.mb-0 Esto es un algoritmo
          p.mb-0 Esto es un algoritmo
          p.mb-0 Esto es un algoritmo
          p.mb-0 Esto es un algoritmo
          p.mb-0 Esto es un algoritmo
          p.mb-0 Esto es un algoritmo
      .col-lg-8(data-aos="fade-left")
        .p-4.bg-c6
          p #[b.txt-c6 Ahora se presenta un ejemplo un poco más elaborado.]
          p #[b.txt-c2 Ejemplo:] #[span.txt-c6 se necesita elaborar un algoritmo que solicite al usuario un número entero y sume todos los números naturales que hay hasta ese número. Por ejemplo, si el usuario digita 3, el programa debe sumar: 1 + 2 + 3, si el usuario digita 5 el programa debe sumar 1+2+3+4+5. Al finalizar debe imprimir el resultado.]
          figure.d-flex.justify-content-end
            img(src='@/assets/curso/tema7/img8.svg', style='width: 80px', alt='')
    .row.mb-5
      .col-12
        .p-4.bg-c30(data-aos="fade-left")
          p #[b Análisis]
          ol.lista-ol--cuadro.mb-0
            li.d-flex
              .lista-ol--cuadro__vineta
                span 1.
              |
              p.mb-0 #[b Formular el problema:] necesita la sumatoria de los números en secuencia natural.
            li.d-flex
              .lista-ol--cuadro__vineta
                span 2.
              |
              p.mb-0 #[b Resultados esperados:] la suma de los números en sucesivos de uno hasta el número digitado por el usuario.
            li.d-flex
              .lista-ol--cuadro__vineta
                span 3.
              |
              p.mb-0 #[b Datos disponibles:] el dato entero que digita el usuario es la entrada.
            li.d-flex
              .lista-ol--cuadro__vineta
                span 4.
              |
              p.mb-0 #[b Datos adicionales:] se necesita un acumulador donde ir guardando el valor de las sumas sucesivas.
            li.d-flex
              .lista-ol--cuadro__vineta
                span 5.
              |
              p.mb-0 #[b Restricciones:] ninguna.
            li.d-flex.mb-0
              .lista-ol--cuadro__vineta
                span 6.
              |
              p.mb-0 #[b Procesos necesarios:] definir un acumulador con valor inicial cero, imprimir para que el usuario sepa que debe digitar un número (“Escriba el número”), Leer del teclado el número del usuario, sumar cada vez el dato que se va incrementando de uno en uno al valor digitado por el usuario.
    p(data-aos="fade-right") #[b Diseño]
    p.mb-5(data-aos="fade-right") La siguiente figura presenta el algoritmo en sus dos representaciones más comunes, se propone en secciones posteriores hacer una prueba de escritorio a este problema.
    .row.mb-5
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        .row
          .col-12
            .p-4.bg-c3
              .titulo-sexto.color-acento-contenido.mb-4
                p.mb-0 #[b Figura 13.] Estructura de repetición FOR acumulador suma
              figure
                img(src='@/assets/curso/tema7/img9.svg', style='width: 300px', alt='Un diagrama de flujo que describe un algoritmo para calcular la suma de números desde 1 hasta un número ingresado por el usuario.').m-auto
      .col-lg-5(data-aos="fade-left")
        .row
          .col-12
            .px-4.py-3.bg-c22
              figure
                img(src='@/assets/curso/tema3/img11.svg', style="width:50px" alt='')
          .col-12
            .px-4.py-3.bg-c23
              pre
                p.mb-0 
                p.mb-0  ALGORITMO sumas sucesivas;
                p.mb-0  
                p.mb-0  VAR
                p.mb-0  
                p.mb-0                         ENTERO número;
                p.mb-0                          ENTERO suma;
                p.mb-0  INICIO
                p.mb-0  
                p.mb-0                         suma = 0;
                p.mb-0                         ESCRIBIR( "Escriba el número" ) ;
                p.mb-0                         LEER ( número
                p.mb-0                         PARA i DESDE 1 HASTA numero
                p.mb-0                                suma = suma + i;
                p.mb-0                         
                p.mb-0                          FINPARA
                p.mb-0                         ESCRIBIR ( suma ) ;
                p.mb-0  
                p.mb-0  FIN
                p.mb-0  
    .row.mb-4.pt-4(data-aos="fade-down")
      .col-auto.bg-c4
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img2.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white Estructura MIENTRAS (WHILE)
    p.mb-5(data-aos="fade-right") La instrucción “Mientras”, puede impedir la ejecución de un conjunto de instrucciones, si la evaluación de una condición lógica es falsa. Esto significa que es repetitiva únicamente cuando la evaluación de la condición es verdadera.
    .row.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema7/img4.png', style='width: 400px', alt='').m-auto
      .col-lg-8(data-aos="fade-left")
        p #[b Ejemplo:]
        p realice un programa que permita obtener la factorial de un número dado por el usuario.
        .row
          .col-12
            .p-3.bg-c2
              p #[b Análisis]
              p #[b Formular el problema:] la factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n.
              p #[b Ejemplo:] ¡Matemáticamente 5! = 5 * 4 * 3 * 2 * 1 o a la inversa: 5! = 1 * 2 * 3 * 4 * 5.
              p #[b Resultados esperados:] la factorial del número digitado por el usuario.
    .row.mb-5
      .col-12
        .p-4.bg-c3(data-aos="fade-left")
          .titulo-sexto.color-acento-contenido.mb-4
            p.mb-0 #[b Figura 14.] Proceso de factorial
          figure
            img(src='@/assets/curso/tema7/img10.svg', style='width: 1000px', alt='Un diagrama de flujo que muestra el proceso para calcular el factorial de un número, incluyendo el uso de un contador y acumulador de productos.').m-auto
    .row.mb-5
      .col-12
        .p-4.bg-c6(data-aos="fade-down")
          p.text-white #[b Análisis]
          ol.lista-ol--cuadro.mb-0
            li.d-flex
              .lista-ol--cuadro__vineta
                span 1.
              |
              p.text-white.mb-0 #[b Datos disponibles:] el dato entero que digita el usuario es la entrada.
            li.d-flex
              .lista-ol--cuadro__vineta
                span 2.
              |
              p.text-white.mb-0 #[b Datos adicionales:] se requiere de un acumulador donde ir guardando el valor de las multiplicaciones sucesivas, también un contador para ir contando el número secuencial (como lo hace el número i en el ciclo PARA).
            li.d-flex
              .lista-ol--cuadro__vineta
                span 3.
              |
              p.text-white.mb-0 #[b Restricciones:] la repetición se detiene cuando.
            li.d-flex.mb-0
              .lista-ol--cuadro__vineta
                span 4.
              |
              p.text-white.mb-0 #[b Procesos necesarios:] definir un acumulador con valor inicial cero, imprimir para que el usuario sepa que debe digitar un número (“Por favor el número”), leer del teclado el número del usuario, multiplicar cada vez el dato que se va incrementando de uno en uno al valor digitado por el usuario.
    p(data-aos="fade-right") #[b Diseño]
    p.mb-5(data-aos="fade-right") El diseño es el siguiente:
    .row
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        .row
          .col-12
            .p-4.bg-c3
              .titulo-sexto.color-acento-contenido.mb-4
                p.mb-0 #[b Figura 15.] Algoritmo factorial ciclo mientras
              figure
                img(src='@/assets/curso/tema7/img11.svg', style='width: 300px', alt='Un diagrama de flujo que ilustra un algoritmo para calcular el factorial de un número ingresado por el usuario, utilizando un ciclo de iteración.').m-auto
      .col-lg-5(data-aos="fade-left")
        .row
          .col-12
            .px-4.py-3.bg-c22
              figure
                img(src='@/assets/curso/tema3/img11.svg', style="width:50px" alt='')
          .col-12
            .px-4.py-3.bg-c23
              pre
                p.mb-0 
                p.mb-0  ALGORITMO factorial;
                p.mb-0  VAR
                p.mb-0                   ENTERO contador;
                p.mb-0                   ENTERO factorial;
                p.mb-0  
                p.mb-0  INICIO
                p.mb-0                   contador = 1;
                p.mb-0                   factorial = 1;
                p.mb-0                   ESCRIBIR( "Escriba el número" ) ;
                p.mb-0                   LEER ( numero ) ;
                p.mb-0  
                p.mb-0  MIENTRAS
                p.mb-0                   factorial = factorial * contador;
                p.mb-0                   contador = contador + 1;
                p.mb-0                   FINMIENTRAS
                p.mb-0                   ESCRIBIR( factorial );
                p.mb-0  FIN
                p.mb-0 

</template>

<script>
export default {
  name: 'Tema7',
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
