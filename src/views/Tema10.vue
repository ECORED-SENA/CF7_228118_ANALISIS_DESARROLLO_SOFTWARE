<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 10
      h1 Sintaxis del lenguaje JavaScript
    p(data-aos="fade-right") En adelante, se presentan las características básicas de la sintaxis de JavaScript, codificando algoritmos básicos para ejemplificar la estructura propia del lenguaje de programación. Sin embargo, se recomienda que, siempre que se esté codificando algoritmos, se tenga a disposición la documentación técnica oficial del lenguaje y el material complementario propuesto.
    .row.mb-5
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema10/img1.png', style='width: 360px', alt='').m-auto
      .col-lg-9(data-aos="fade-left")
        p En JavaScript se pueden utilizar muchas funciones matemáticas. Por ejemplo, un algoritmo que toma dos números (8 y 6) y les aplica las 4 operaciones básicas puede servir para revisar las características de la sintaxis de JavaScript y conocer las operaciones matemáticas del lenguaje.
        .row
          .col-12
            .p-4.bg-c7
              p.mb-0 Para ello, ingresar en la ruta del navegador a 
                |
                a(href="https://playcode.io/new" target="_blank") https://playcode.io/new
                |  y escribir el código de la línea 1 a la 12 en la pestaña script.js, como se presenta a continuación:
    .row.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        .row
          .col-12
            .px-4.py-3.bg-c22
              figure
                img(src='@/assets/curso/tema3/img11.svg', style="width:50px" alt='')
          .col-12
            .px-4.py-3.bg-c23
              pre
                p.mb-0 1.   let numero1 = 8;
                p.mb-0 2.   let numero2 = 6;
                hr
                p.mb-0 3.   var suma = numero1 + numero2;
                p.mb-0 4.   var resta = numero1 - numero2;
                p.mb-0 5.   var producto = numero1 * numero2;
                p.mb-0 6.   var division = numero1 / numero2;
                hr
                p.mb-0 7.   console.log("la suma es: " + suma );
                p.mb-0 8.   console.log("la resta es: " + resta );
                p.mb-0 9.   console.log("el producto es: " + producto );
                p.mb-0 10. console.log("la división es: " + division );
                hr
                p.mb-0 Consola
                p.mb-0 la suma es: 14
                p.mb-0 la resta es: 2
                p.mb-0 el producto es: 48
                p.mb-0 la división es: 1.3333333333333333
      .col-lg-5(data-aos="fade-left")
        .p-4.bg-c7
          p En las líneas 1 y 2 aparece la palabra reservada #[b let] que sirve para indicar que se define una variable accesible en el contexto donde se crea (cuando se vea programación modular quedará más claro esto del contexto).
          p Las palabras reservadas #[b numero1] y #[b numero2] se les asigna el valor correspondiente. Es de conocer que se definen y se inicializa la variable en una misma línea, esto es una característica del lenguaje.
          p Luego en las líneas 3 al 6 se crean o se definen unas variables con la palabra reservada #[b var], a diferencia de la palabra #[b let] estas variables se pueden ver desde cualquier parte o módulo del #[i script].
          p Una vez se crean las variables con identificadores suma, resta, producto, división, también son inicializados sus valores empleando las operaciones matemáticas respectivas.
          p.mb-0 Una de las formas que JavaScript permite mostrar los resultados es con la función #[b log] del objeto #[b console] y se accede #[b console.log()] (con el operador punto .) y entre paréntesis lo que se desea mostrar en la pantalla de la consola.
    .row.align-items-center.mb-5
      .col-lg-7.order-2.order-lg-1(data-aos="fade-right")
        p #[b Validación:]
        p Dentro de los paréntesis "la suma es: " + suma, aparece el operador +, usado anteriormente para sumar dos números. Sin embargo, en este caso, no hay dos números, sino una cadena de texto y un número. Aquí, el operador + concatena o junta el texto "la suma es:" y el valor de la variable suma. Esta característica de los operadores se llama sobrecarga de operadores, porque según el contexto, el operador + puede sumar o concatenar.
        .row
          .col-12
            .p-4.bg-c14
              p.mb-0 Cuando las operaciones matemáticas son más complejas, como la raíz cuadrada, la función exponencial, o las funciones trigonométricas, existe un objeto que agrupa estas funciones llamado #[b Math]. Puede ver la documentación técnica completa de esta clase en #[b Math] (MDN, 2021b). A continuación, se presenta un ejemplo de su uso.
      .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema10/img2.png', style="width: 570px" alt='').m-auto
    p.mb-5(data-aos="fade-right") #[b.txt-c1 Se debe crear un algoritmo que muestre el seno del valor PI (3.1416) multiplicado por 3 y que también eleve 6 a la tercera potencia, mostrando su resultado:]
    .row.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        .row
          .col-12
            .px-4.py-3.bg-c22
              figure
                img(src='@/assets/curso/tema3/img11.svg', style="width:50px" alt='')
          .col-12
            .px-4.py-3.bg-c23
              pre
                p.mb-0  var angulo = Math.PI * 3;
                p.mb-0  console.log('seno(3PI) =' + Math.sin(angulo));
                p.mb-0  
                p.mb-0  var potencia = Math.pow(6, 3);
                p.mb-0  console.log('6^3 =' + potencia);
                p.mb-0  
                p.mb-0  Consola
                p.mb-0  seno(3PI) = -3.6739403974420594e-16
                p.mb-0  6^3 = 216
      .col-lg-5(data-aos="fade-left")
        .p-4.bg-c32
          p Se debe escribir el código fuente, y obtener los mismos resultados en la consola, como se presentan en cada imagen, de esta forma se familiariza con la herramienta de trabajo.
          figure.d-flex.justify-content-end
            img(src='@/assets/curso/tema10/img1.svg', style="width: 70px" alt='')
    .tarjeta.color-primario1.p-3.mb-5(data-aos="fade-down")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-auto
          img(src="@/assets/curso/tema3/img13.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.txt-c4.mb-1 Funciones clase Math
              p.text-white A continuación, puede revisar el listado de funciones de la clase #[b Math].
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/anexo4.pdf')" target="_blank")
                span Descargar
                i.fas.fa-link
    p.mb-0(data-aos="fade-right") Todas las funciones matemáticas se pueden combinar con otras operaciones aritméticas o emplear operadores de evaluación de condición. Previo a ello, es preciso conocer los diferentes tipos de datos que existen.
    Separador
    #t_10_1
    .titulo-segundo.color-acento-contenido
      h2 10.1 Tipos de datos, operadores y orden de evaluación
    p.mb-5(data-aos="fade-right") Existen muchos tipos de operadores para JavaScript, cuya función es realizar una operación entre dos o más valores contenidos en variables, constantes o acumuladores:
    .row.mb-4.pt-4(data-aos="fade-down")
      .col-auto.bg-c4
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img2.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white A. Tipos de datos
    p(data-aos="fade-right") JavaScript tiene los siguientes tipos de operadores (se describirán los principales para aprender a programar).
    p.mb-5(data-aos="fade-right") Según sea el tipo que las variables o constantes almacenan, se pueden clasificar en seis (6) tipos de datos primitivos, la referencia del lenguaje dice que son:
    .row.justify-content-center.mb-0.mb-lg-4
      .col-md-10.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        .p-4.bg-c8.h-100
          .row.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/tema1/img6.svg', style='width: 80px', alt='').m-auto
            .col
              p.text-white.mb-0 #[b #[i Undefined]]
              p.text-white.mb-0 Indeterminado o indefinido.
      .col-md-10.col-lg-4.mb-4.mb-lg-0(data-aos="fade-down")
        .p-4.bg-c8.h-100
          .row.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/tema1/img6.svg', style='width: 80px', alt='').m-auto
            .col
              p.text-white.mb-0 #[b #[i Boolean]]
              p.text-white.mb-0 Tipo booleano los valores posibles son #[i true] o #[i false].
      .col-md-10.col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
        .p-4.bg-c8.h-100
          .row.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/tema1/img6.svg', style='width: 80px', alt='').m-auto
            .col
              p.text-white.mb-0 #[b #[i Number]]
              p.text-white.mb-0 Números enteros, o decimales.
    .row.justify-content-center.mb-5
      .col-md-10.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        .p-4.bg-c8.h-100
          .row.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/tema1/img6.svg', style='width: 80px', alt='').m-auto
            .col
              p.text-white.mb-0 #[b #[i String]]
              p.text-white.mb-0 Cadenas de texto.
      .col-md-10.col-lg-4.mb-4.mb-lg-0(data-aos="fade-down")
        .p-4.bg-c8.h-100
          .row.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/tema1/img6.svg', style='width: 80px', alt='').m-auto
            .col
              p.text-white.mb-0 #[b #[i BigInt]]
              p.text-white.mb-0 Números enteros grandes.
      .col-md-10.col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
        .p-4.bg-c8.h-100
          .row.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/tema1/img6.svg', style='width: 80px', alt='').m-auto
            .col
              p.text-white.mb-0 #[b #[i Symbol]]
              p.text-white.mb-0 Referencia a otros datos.
    p.mb-5(data-aos="fade-right") #[b.txt-c1 Otros tipos de datos más complejos o abstractos de datos:]
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-8.mb-3
        .p-4.bg-c13
          p.mb-0 #[b #[i Null]:] tipo primitivo especial que tiene un uso adicional para su valor: si el objeto no se hereda, se muestra #[i null].
      .col-lg-8.mb-3
        .p-4.bg-c35
          p.mb-0 #[b #[i Object]:] tipo estructural especial que no es de datos, pero para cualquier instancia de objeto construido que también se utiliza como estructuras de datos (#[b #[i new Object]], #[b #[i new Array]], #[b #[i new Map]], #[b #[i new Set]], #[b #[i new WeakMap]], #[b #[i new WeakSet]], #[b #[i new Date]] y casi todo lo hecho con la palabra clave #[b #[i new]]).
      .col-lg-8
        .p-4.bg-c6
          p.text-white.mb-0 #[b #[i Function]:] una estructura sin datos, aunque también responde al operador t.
    p.mb-5(data-aos="fade-right") #[b.txt-c1 Cuando se declaran variables se debe considerar los siguientes tipos, ya se han usado dos (2) de ellas:]
    .row.justify-content-center.mb-5
      .col-md-10.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        .p-4.bg-c8.h-100
          .row.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/tema1/img6.svg', style='width: 80px', alt='').m-auto
            .col
              p.text-white.mb-0 #[b var:] declara una variable, opcionalmente la inicia a un valor.
      .col-md-10.col-lg-4.mb-4.mb-lg-0(data-aos="fade-down")
        .p-4.bg-c8.h-100
          .row.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/tema1/img6.svg', style='width: 80px', alt='').m-auto
            .col
              p.text-white.mb-0 #[b let:] declara una variable local con ámbito de bloque, opcionalmente la inicia a un valor.
      .col-md-10.col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
        .p-4.bg-c8.h-100
          .row.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/tema1/img6.svg', style='width: 80px', alt='').m-auto
            .col
              p.text-white.mb-0 #[b const:] declara un nombre de constante de solo lectura y ámbito de bloque.
    p.mb-5(data-aos="fade-right") Una variable en JavaScript puede tener cualquier tipo de dato, entero, real, cadena de texto, etc. JavaScript no es un lenguaje fuertemente tipado de manera que queda en el programador la responsabilidad de saber qué tipo de dato está almacenando en cada variable.
    .row.mb-4.pt-4(data-aos="fade-down")
      .col-auto.bg-c4
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img2.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white B. Operadores
    p.mb-5(data-aos="fade-right") Asignar un valor a una variable también se considera una expresión, aunque de un tipo distinto. Para todas estas operaciones se emplean los denominados "operadores". A continuación, se listan algunos de los operadores que se utilizan con mucha frecuencia:
    .row.mb-5
      .col-12
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-down")
          .row(titulo="Operadores de asignación")
            .col-12
              p Un operador de asignación asigna un valor a la variable a la izquierda basándose en el valor de su operando derecho. El operador de asignación más simple es igual (=), que asigna el valor de su operando derecho a su operando izquierdo. Es decir, x = y asigna el valor de y a x. A continuación, se presenta una lista de operadores más usados.
              p También hay operadores de asignación compuestos que son una abreviatura de las operaciones enumeradas en la siguiente tabla:
              .row
                .col-lg-8
                  .tabla-j1
                    table.tabla-j2(width="100%" style="background-color: #F9F9F9")
                      tbody
                        tr
                          td.text-center #[b Nombre]
                          td.text-center #[b Operador abreviado]
                          td.text-center #[b Significado]
                        tr
                          td Asignación.
                          td x = y
                          td x = y
                        tr
                          td Asignación de adición.
                          td x + = y
                          td x = x + y
                        tr
                          td Asignación de resta.
                          td x - = y
                          td x = x - y
                        tr
                          td Asignación de multiplicación.
                          td x * = y
                          td x = x * y
                        tr
                          td Asignación de división.
                          td x / = y
                          td x = x / y
                        tr
                          td Asignación de residuo.
                          td x % = y
                          td x = x % y
                        tr
                          td Asignación de exponenciación.
                          td x ** = y
                          td x = x ** y
          .row(titulo="Operadores de comparación")
            .col-12
              p Son operadores cuya función es comparar dos expresiones y, como resultado de la comparación, devuelven un valor falso o verdadero (booleano) que representa la relación de sus valores comparados. Existen operadores para comparar valores numéricos, pero también operadores para comparar cadenas y otros tipos de datos.
              .row
                .col-12
                  .tabla-j1
                    table.tabla-j2(width="100%" style="background-color: #F9F9F9")
                      tbody
                        tr
                          td.text-center #[b Nombre]
                          td.text-center(width="60%") #[b Operador abreviado]
                          td.text-center #[b Significado]
                        tr
                          td Igual (==)
                          td Devuelve true si los operandos son iguales.
                          td
                            p.mb-0 3 == var1
                            p.mb-0 "3" == var1
                            p.mb-0 3 == '3'
                        tr
                          td No es igual (!=)
                          td Devuelve true si los operandos no son iguales.
                          td
                            p.mb-0 var1 != 4
                            p.mb-0 var2 != "3"
                        tr
                          td Estrictamente igual (===)
                          td Devuelve true si los operandos son iguales y del mismo tipo. Consulta también Object.is y similitud en JS.
                          td
                            p.mb-0 3 === var1
                        tr
                          td Desigualdad estricta (!==)
                          td Devuelve true si los operandos son del mismo tipo, pero no iguales, o son de diferente tipo.
                          td
                            p.mb-0 var1 !== "3"
                            p.mb-0 3 !== '3'
                        tr
                          td Mayor que (>)
                          td Devuelve true si el operando izquierdo es mayor que el operando derecho.
                          td
                            p.mb-0 var2 > var1
                            p.mb-0 "12" > 2
                        tr
                          td Mayor o igual que (>=)
                          td Devuelve true si el operando izquierdo es mayor o igual que el operando derecho.
                          td
                            p.mb-0 var2 >= var1
                            p.mb-0 var1 >= 3
                        tr
                          td Menor que (<)
                          td Devuelve true si el operando izquierdo es menor que el operando derecho.
                          td
                            p.mb-0 var1 < var2
                            p.mb-0 "2" < 12
                        tr
                          td Menor o igual (<=)
                          td Devuelve true si el operando izquierdo es menor o igual que el operando derecho.
                          td
                            p.mb-0 var1 <= var2
                            p.mb-0 var2 <= 5
          .row(titulo="Operadores de aritméticos")
            .col-12
              p Los operadores aritméticos toman valores numéricos (ya sean literales o variables) como sus operandos y devuelven un solo valor numérico. Los operadores aritméticos básicos son suma (+), resta (-), multiplicación (*) y división (/). Estos operadores funcionan como en la mayoría de los otros lenguajes de programación cuando se usan con números de punto flotante, teniendo en cuenta que la división por cero produce un error.
              .row
                .col-12
                  .tabla-j1
                    table.tabla-j2(width="100%" style="background-color: #F9F9F9")
                      tbody
                        tr
                          td.text-center #[b Nombre]
                          td.text-center(width="60%") #[b Operador abreviado]
                          td.text-center #[b Significado]
                        tr
                          td Residuo (%)
                          td Operador binario. Devuelve el resto entero de dividir los dos operandos.
                          td
                            p.mb-0 12 % 5 devuelve 2
                        tr
                          td Incremento (++)
                          td Operador unario. Agrega uno a su operando. Si se usa como operador prefijo (++x), devuelve el valor de su operando después de agregar uno; si se usa como operador sufijo (x++), devuelve el valor de su operando antes de agregar uno.
                          td
                            p.mb-0 Si x es 3, ++x establece x en 4 y devuelve 4, mientras que x++ devuelve 3 y, solo entonces, establece x en 4.
                        tr
                          td Decremento (--)
                          td Operador unario. Resta uno de su operando. El valor de retorno es análogo al del operador de incremento.
                          td
                            p.mb-0 Si x es 3, entonces --x establece x en 2 y devuelve 2, mientras que x-- devuelve 3 y, solo entonces, establece x en 2.
                        tr
                          td Negación unaria (-)
                          td Operador unario. Devuelve la negación de su operando.
                          td
                            p.mb-0 Si x es 3, entonces -x devuelve -3.
                        tr
                          td Positivo unario (+)
                          td Operador unario. Intenta convertir el operando en un número, si aún no lo es.
                          td
                            p.mb-0 +"3" devuelve 3. +true devuelve 1.
                        tr
                          td Operador de exponenciación (**)
                          td Calcula la base a la potencia de exponente, es decir, base exponente.
                          td
                            p.mb-0 2 ** 3 retorna 8.
                            p.mb-0 10 ** -1 retorna 0.1.
          .row(titulo="Operadores lógicos")
            .col-12
              p Con los operadores lógicos, se pueden crear condiciones compuestas. Por ejemplo, cuando se deben cumplir dos o más condiciones para elegir las operaciones a ejecutar. Además, se pueden describir estas combinaciones de condiciones utilizando los operadores lógicos como AND (&&), OR (||), y NOT (!). Estos operadores permiten evaluar múltiples expresiones booleanas en una sola sentencia.
              .tabla-j1
                table.tabla-j2(width="100%" style="background-color: #F9F9F9")
                  tbody
                    tr
                      td.text-center #[b Nombre]
                      td.text-center #[b Operador abreviado]
                      td.text-center(width="60%") #[b Significado]
                    tr
                      td AND Lógico (&&)
                      td expr1 && expr2
                      td
                        p.mb-0 Devuelve #[b expr1] si se puede convertir a #[b false]; de lo contrario, devuelve #[b expr2]. Por lo tanto, cuando se usa con valores booleanos, #[b &&] devuelve #[b true] si ambos operandos son #[b true]; de lo contrario, devuelve #[b false].
                    tr
                      td OR lógico (||)
                      td expr1 || expr2
                      td
                        p.mb-0 Devuelve #[b expr1] si se puede convertir a #[b true]; de lo contrario, devuelve #[b expr2]. Por lo tanto, cuando se usa con valores booleanos, #[b ||] devuelve #[b true] si alguno de los operandos es #[b true]; si ambos son falsos, devuelve #[b false].
                    tr
                      td NOT lógico (!)
                      td !expr
                      td
                        p.mb-0 Devuelve #[b false] si su único operando se puede convertir a #[b true]; de lo contrario, devuelve #[b true].
    .row.mb-4.pt-4(data-aos="fade-down")
      .col-auto.bg-c4
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img2.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white C. Orden de evaluación de operadores
    p(data-aos="fade-right") Es importante recordar que los computadores ejecutan los operadores en un orden establecido. El siguiente es el orden (jerarquía), de acuerdo con los expuestos anteriormente, y deben conservar el orden de precedencia de operadores:
    .row.align-items-center
      .col-lg-6.order-2.order-lg-1(data-aos="fade-right")
        .p-4.bg-c7
          ol.lista-ol--cuadro.mb-0
            li.d-flex
              .lista-ol--cuadro__vineta
                span a.
              |
              p.mb-0 Paréntesis (se ejecutan primero los más internos).
            li.d-flex
              .lista-ol--cuadro__vineta
                span b.
              |
              p.mb-0 Signo (-2), si un valor es positivo o negativo.
            li.d-flex
              .lista-ol--cuadro__vineta
                span c.
              |
              p.mb-0 Potencias (^) y Raíces y otras funciones (Math.sqrt()); Productos y Divisiones (* y /), en este mismo orden.
            li.d-flex
              .lista-ol--cuadro__vineta
                span d.
              |
              p.mb-0 Sumas y Restas (+ y -).
            li.d-flex
              .lista-ol--cuadro__vineta
                span e.
              |
              p.mb-0 Concatenación (+).
            li.d-flex
              .lista-ol--cuadro__vineta
                span f.
              |
              p.mb-0 Relacionales (=, <, >).
            li.d-flex
              .lista-ol--cuadro__vineta
                span g.
              |
              p.mb-0 Negación (no).
            li.d-flex
              .lista-ol--cuadro__vineta
                span h.
              |
              p.mb-0 Conjunción (y).
            li.d-flex
              .lista-ol--cuadro__vineta
                span i.
              |
              p.mb-0 Disyunción (o).
      .col-lg-6.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema10/img3.png', style='width: 560px', alt='').m-auto
    Separador
    #t_10_2
    .titulo-segundo.color-acento-contenido
      h2 10.2 Expresiones y comentarios
    p.mb-5(data-aos="fade-right") #[b.txt-c1 JavaScript permite poner comentarios en el código fuente, como la mayoría de los lenguajes de programación. Existen dos tipos de comentarios:]
    .row.align-items-center
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        .row
          .col-12
            .px-4.py-3.bg-c22
              figure
                img(src='@/assets/curso/tema3/img11.svg', style="width:50px" alt='')
          .col-12
            .px-4.py-3.bg-c23
              pre
                p.mb-0 /*
                p.mb-0 Comentario que puede tener más de una línea
                p.mb-0 de texto
                p.mb-0 */
                p.mb-0 
                p.mb-0 var var1 = 3;
                p.mb-0 var var2 = 4;
                p.mb-0 
                p.mb-0 console.log( var2 > var1 );   // Este es un comentario de línea
                p.mb-0 console.log( var2 < var1 );   // Este es otro comentario de línea
                p.mb-0 console.log( var1 !== var2 );
                hr
                p.mb-0 Consola
                p.mb-0 true
                p.mb-0 false
                p.mb-0 true
      .col-lg-5(data-aos="fade-left")
        .p-4.bg-c7
          p Los comentarios son importantes porque le dan mantenibilidad al programa, es decir que otro programador, o el mismo, tiempo después puede revisar el código y apoyarse en los comentarios para saber qué hace el algoritmo y como lo hace. 
          p.mb-0 En adelante se procura que exista al menos un comentario en cada código fuente empleado para ejemplificar los elementos constitutivos del lenguaje de programación JavaScript y puede hacer lo mismo durante la creación de los diferentes códigos.
    Separador
    #t_10_3
    .titulo-segundo.color-acento-contenido
      h2 10.3 Estructuras de selección
    .row.bg-c36
      .col-12
        .px-5
          .row.align-items-center.mb-5
            .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
              .row.mb-4
                .col-12
                  .p-4.bg-c2
                    p.mb-0 La estructura de selección, se necesita cuando el código de tu programa ejecuta uno de varios resultados posibles, basado en el valor de una condición.
              p #[b Ejemplo:]
              p.mb-0 Un aprendiz aprueba un examen cuando la calificación de este es mayor o igual a 3. Elaborar un programa en JavaScript donde que dada una calificación, aplique el criterio de aprobación e imprima “Aprobado” o “Reprobado”, según sea el caso.
            .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema10/img2.svg', style='width: 270px', alt='').m-auto
          .row.justify-content-center.mb-5
            .col-lg-6(data-aos="fade-right")
              p Como resultado del análisis a este problema tenemos el diseño del siguiente algoritmo:
              .row
                .col-12
                  .px-4.py-3.bg-c22
                    figure
                      img(src='@/assets/curso/tema3/img11.svg', style="width:50px" alt='')
                .col-12
                  .px-4.py-3.bg-c23
                    pre
                      p.mb-0  ALGORITMO Calificación del usuario;
                      p.mb-0  
                      p.mb-0  VAR
                      p.mb-0                REAL calificacion
                      p.mb-0  INICIO
                      p.mb-0                 calificacion = 4;
                      p.mb-0                  SI ( calificación >= 3)
                      p.mb-0                           ESCRIBIR("Aprobo");
                      p.mb-0  SINO
                      p.mb-0                ESCRIBIR("Reprobo");
                      p.mb-0  FINSI
                      p.mb-0  
                      p.mb-0  FIN
          .row.justify-content-center.mb-5
            .col-lg-6(data-aos="fade-left")
              p El mismo algoritmo se puede visualizar, pero ya en lenguaje de programación:
              .row
                .col-12
                  .px-4.py-3.bg-c22
                    figure
                      img(src='@/assets/curso/tema3/img11.svg', style="width:50px" alt='')
                .col-12
                  .px-4.py-3.bg-c23
                    pre
                      p.mb-0 /*
                      p.mb-0 Algoritmo calificaciones
                      p.mb-0 */
                      p.mb-0 
                      p.mb-0 const calificacion = 4;
                      p.mb-0 
                      p.mb-0 if (calificacion >= 3) {
                      p.mb-0     console.log('Aprobó');
                      p.mb-0 } else {
                      p.mb-0     console.log('Reprobó');
                      p.mb-0 }
                      hr
                      p.mb-0 Consola
                      p.mb-0 Aprobó
          p(data-aos="fade-right") Como la línea 1 empieza con /*, todo lo que sigue será un comentario hasta que aparezcan los caracteres */ (línea 3). En este comentario se debe escribir qué hace el algoritmo y otra información relevante que se verá más adelante.
          p.mb-5(data-aos="fade-right") En la línea 4 se define un valor constante (es decir, no se modificará más en todo el algoritmo). Se ha puesto como identificador la palabra #[b calificacion].
          .row.mb-5
            .col-12
              .p-4.bg-c37(data-aos="fade-down")
                .row.align-items-center
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema7/img6.svg', style='width: 80px', alt='').m-auto
                  .col
                    p.text-white.mb-0 #[b Para recordar:] una palabra reservada es una palabra que no se puede utilizar como identificador de algún dato.
    p.mb-5(data-aos="fade-right") #[b En la línea 6 ocurren varias cosas que se deben tener en cuenta:]
    .row.align-items-center.mb-5
      .col-12
        .p-4.bg-c13(data-aos="fade-left")
          ol.lista-ol--cuadro.mb-0
            li.d-flex
              .lista-ol--cuadro__vineta
                span a.
              |
              p.mb-0 Se usa la palabra reservada #[b if] y, entre paréntesis, la condición que se quiere comparar.
            li.d-flex
              .lista-ol--cuadro__vineta
                span b.
              |
              p.mb-0 Se emplea el símbolo de corchete abierto #[b {], que se llama abrir corchete.
            li.d-flex
              .lista-ol--cuadro__vineta
                span c.
              |
              p.mb-0 En la línea 7 se envía la instrucción de imprimir el resultado de que aprobó.
            li.d-flex
              .lista-ol--cuadro__vineta
                span d.
              |
              p.mb-0 En la línea 8 se cierra un bloque de código con el símbolo de corchete cerrado #[b }], lo que indica que hasta este punto termina el bloque. A todo lo que esté entre estos corchetes se le llamará contexto. En el primer contexto están agrupadas las operaciones que se ejecutarán si la condición #[b calificacion >= 3] es verdadera.
            li.d-flex
              .lista-ol--cuadro__vineta
                span e.
              |
              p.mb-0 También en la línea 8 se observa la palabra reservada #[b else], que sirve para indicarle al intérprete de JavaScript que se creará un bloque o contexto para cuando la condición evaluada por el #[b if] no se cumpla. Enseguida se abre el contexto con el carácter de corchete abierto #[b {].
            li.d-flex
              .lista-ol--cuadro__vineta
                span f.
              |
              p.mb-0 Luego, en la línea 9, se ha puesto la operación de escribir en la consola que ha reprobado.
            li.d-flex
              .lista-ol--cuadro__vineta
                span g.
              |
              p.mb-0 Para finalizar el contexto, se cierra con el carácter de corchete cerrado #[b }].
    p(data-aos="fade-right") Ahora se debe escribir el programa y cambiar los valores de la constante para validar que el algoritmo está bien diseñado.
    p.mb-5(data-aos="fade-right") #[b.txt-c1 De la misma forma, se puede realizar el algoritmo que, dada una edad en años, evalúe e imprima si es mayor de edad:]
    .row.align-items-center
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        .row
          .col-12
            .px-4.py-3.bg-c22
              figure
                img(src='@/assets/curso/tema3/img11.svg', style="width:50px" alt='')
          .col-12
            .px-4.py-3.bg-c23
              pre
                p.mb-0 /*
                p.mb-0 Algoritmo saber si es o no mayor de edad
                p.mb-0 */
                p.mb-0 
                p.mb-0 const edad = 41;
                p.mb-0 
                p.mb-0 if (edad >= 18) {
                p.mb-0     console.log('Es mayor de edad');
                p.mb-0 }
                hr
                p.mb-0 Consola
                p.mb-0 Es mayor de edad
      .col-lg-5(data-aos="fade-left")
        .p-4.bg-c7
          p De acuerdo con el código anterior, no existe un contexto si no se cumple la condición de mayoría de edad; a esta estructura se le denomina #[b CONDICIONAL SIMPLE]. 
          p El flujo de ejecución del algoritmo anterior es básico, y puede haber otros mucho más complejos, como las estructuras de repetición o iterativas, que también tienen una sintaxis particular.
          figure.d-flex.justify-content-end
            img(src='@/assets/curso/tema10/img3.svg', style="width: 70px" alt='')
    Separador
    #t_10_4
    .titulo-segundo.color-acento-contenido
      h2 10.4 Estructuras de repetición
    p.mb-5(data-aos="fade-right") Las estructuras de repetición permiten repetir un bloque de instrucciones un número determinado o indeterminado de veces. A continuación, se ejemplifican las más comunes (#[i FOR], #[i WHILE]), que se pueden codificar también en la sintaxis de JavaScript.
    .row.mb-4.pt-4(data-aos="fade-down")
      .col-auto.bg-c4
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img2.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white a. Estructura de repetición #[i FOR]
    p(data-aos="fade-right") #[b Ejemplo 1:]
    p.mb-5(data-aos="fade-right") Escribir un procedimiento que muestre siete (7) veces en pantalla la frase “Esto es un algoritmo”. Mostrar en pantalla la salida del ejercicio.
    .row.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        .row
          .col-12
            .px-4.py-3.bg-c22
              figure
                img(src='@/assets/curso/tema3/img11.svg', style="width:50px" alt='')
          .col-12
            .px-4.py-3.bg-c23
              pre
                p.mb-0 /*
                p.mb-0 Algoritmo imprimir 7 veces un mensaje
                p.mb-0 */
                p.mb-0 
                p.mb-0 for (let i = 0; i < 7; i++) {
                p.mb-0     console.log('esto es un algoritmo');
                p.mb-0 }
                hr
                p.mb-0 Consola
                p.mb-0 esto es un algoritmo
                p.mb-0 esto es un algoritmo
                p.mb-0 esto es un algoritmo
                p.mb-0 esto es un algoritmo
                p.mb-0 esto es un algoritmo
                p.mb-0 esto es un algoritmo
                p.mb-0 esto es un algoritmo
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema10/img5.png', style="width: 570px" alt='').m-auto
    p.mb-5(data-aos="fade-right") Como se puede identificar en la línea 4, se ha usado la palabra reservada #[i for] y dentro del paréntesis aparecen tres instrucciones separadas por punto y coma.
    .row.justify-content-center.mb-5
      .col-10.col-md-8.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        .p-4.bg-c11
          figure.mb-4
            img(src='@/assets/curso/tema10/img4.svg', style="width: 80px" alt='').m-auto
          p.text-white.text-center #[b Primero]
          p.text-white La primera instrucción let i = 0; es la creación e inicialización de una variable con identificador i. Como se usó la palabra reservada let, se está indicando que la variable i solo podrá ser accedida dentro del contexto del #[i for].
      .col-10.col-md-8.col-lg-4.mb-4.mb-lg-0(data-aos="fade-down")
        .p-4.bg-c11
          figure.mb-4
            img(src='@/assets/curso/tema10/img5.svg', style="width: 80px" alt='').m-auto
          p.text-white.text-center #[b Segundo]
          p.text-white Luego se ve una condición i < 7;. Esta condición significa que, mientras i tenga valores de 0 a 6, debe ejecutar el bloque o contexto definido en el #[i for] (desde el corchete abierto hasta el corchete cerrado).
      .col-10.col-md-8.col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
        .p-4.bg-c11
          figure.mb-4
            img(src='@/assets/curso/tema10/img6.svg', style="width: 80px" alt='').m-auto
          p.text-white.text-center #[b Tercero]
          p.text-white Una vez ha terminado de ejecutar el contexto, se ejecutará la tercera sentencia i++, que es equivalente a i = i + 1. Esto incrementa en 1 la variable i. Luego de incrementarla, procede a evaluar nuevamente la condición y, si se cumple, volverá a ejecutar las instrucciones que están dentro del contexto (lo que está dentro de los corchetes).
    p.mb-5(data-aos="fade-right") Es de notar que los valores que toma la variable i son 0, 1, 2, 3, 4, 5, 6. En total, 7 valores, que es el número de veces que se necesita que se repita el bucle.
    .row.mb-5
      .col-12
        .p-4.bg-c13(data-aos="fade-down")
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema10/img7.svg', style="width: 80px" alt='').m-auto
            .col
              p.mb-0 #[b Para recordar:]
              p.mb-0 El carácter punto y coma se usa para decirle al computador, o intérprete, que ha finalizado una instrucción.
              p.mb-0 La estructura de repetición PARA (#[i FOR]) se usa cuando se sabe cuántas veces se debe repetir un grupo de instrucciones.
    p(data-aos="fade-right") #[b Ejemplo 2:]
    p.mb-5(data-aos="fade-right") Se necesita elaborar un algoritmo en JavaScript que, dado un número entero, sume todos los números naturales que hay hasta ese número. Por ejemplo, si el usuario digita 3, el programa debe sumar: 1 + 2 + 3. Si el usuario digita 5, el programa debe sumar 1 + 2 + 3 + 4 + 5. Al finalizar, debe imprimir el resultado.
    .row.align-items-center.mb-5
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema10/img6.png', style="width: 570px" alt='').m-auto
      .col-lg-6(data-aos="fade-left")
        .row
          .col-12
            .px-4.py-3.bg-c22
              figure
                img(src='@/assets/curso/tema3/img11.svg', style="width:50px" alt='')
          .col-12
            .px-4.py-3.bg-c23
              pre
                p.mb-0 /*
                p.mb-0 sumar los números que van desde 1 hasta el valor dado
                p.mb-0 */
                p.mb-0 
                p.mb-0 const cantidad = 5;
                p.mb-0 var suma = 0;
                p.mb-0 
                p.mb-0 for (let i = 1; i <= cantidad; i++) {
                p.mb-0     suma += i;  // esto es igual a suma = suma + i;
                p.mb-0 }
                p.mb-0 
                p.mb-0 console.log(suma);
                hr
                p.mb-0 Consola
                p.mb-0 15
    p.mb-5(data-aos="fade-right") Como se puede ver, se define una constante con valor 5 y una variable que será un acumulador donde se almacenarán las sumas. También, note que los valores de i van desde 1 hasta exactamente el valor que tiene la constante (es decir, 5).
    .row.mb-4.pt-4(data-aos="fade-down")
      .col-auto.bg-c4
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img2.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white B. Estructura de repetición #[i WHILE]
    .row.mb-5
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
        p A través del ejemplo del cálculo de factorial se explicará el uso y comportamiento de la sentencia #[i while]. Recordando el algoritmo diseñado:
        .row
          .col-12
            .px-4.py-3.bg-c22
              figure
                img(src='@/assets/curso/tema3/img11.svg', style="width:50px" alt='')
          .col-12
            .px-4.py-3.bg-c23
              pre
                p.mb-0  ALGORITMO cálculo de factorial;
                p.mb-0  
                p.mb-0  VAR
                p.mb-0                   ENTERO contador;
                p.mb-0                   ENTERO factorial;
                p.mb-0  INICIO
                p.mb-0                   contador = 1;
                p.mb-0                   factorial = 1;
                p.mb-0                   ESCRIBIR ("Escriba el número");
                p.mb-0                   LEER (numero);
                p.mb-0                   MIENTRAS contador <= numero HACER
                p.mb-0                            factorial = factorial * contador;
                p.mb-0                            contador = contador + 1;
                p.mb-0                   FINMIENTRAS
                p.mb-0                   ESCRIBIR (factorial);
                p.mb-0  FIN
      .col-lg-6(data-aos="fade-left")
        p De acuerdo con el anterior algoritmo, el resultante para el cálculo de factorial es:
        .row
          .col-12
            .px-4.py-3.bg-c22
              figure
                img(src='@/assets/curso/tema3/img11.svg', style="width:50px" alt='')
          .col-12
            .px-4.py-3.bg-c23
              pre
                p.mb-0 /*
                p.mb-0 Comentario que puede tener más de una línea de texto
                p.mb-0 */
                p.mb-0 
                p.mb-0 var var1 = 3;
                p.mb-0 var var2 = 4;
                p.mb-0 
                p.mb-0 console.log(var2 > var1);  // Este es un comentario de línea
                p.mb-0 console.log(var2 < var1);  // este es otro comentario de línea
                p.mb-0 console.log(var1 !== var2);
                hr
                p.mb-0 Consola
                p.mb-0 true
                p.mb-0 false
                p.mb-0 true
    .row.mb-4
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        .row
          .col-12
            .p-4.bg-c7
              .row.align-items-center
                .col-md-auto.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema10/img8.svg', style="width: 70px" alt='').m-auto
                .col
                  p.mb-0 Es ideal transcribir el código usando 
                    |
                    a(href="https://playcode.io/" target="_blank") https://playcode.io/
                    | . Para ello, se debe escribir la condición del #[i while], es decir, contador <= numero, al final, para que el sistema PlayCode no entre en un ciclo que nunca termina. Una vez funcione correctamente, se propone el código que está entre comentarios (//) para practicar las dos formas de sintaxis.
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema10/img7.png', style='width: 470px', alt='').m-auto
    p.mb-0(data-aos="fade-right") Es importante recordar que las estructuras de repetición básicas y su sintaxis son comúnmente utilizadas para recorrer estructuras de datos.
    Separador
    #t_10_5
    .titulo-segundo.color-acento-contenido
      h2 10.5  Estructuras de datos
    p.mb-5(data-aos="fade-right") Las estructuras de datos, también conocidas como arreglos, son importantes en el desarrollo de algunos algoritmos y son obligatorias a la hora de hacer aplicaciones web o móviles. Por ello, se explica su sintaxis en JavaScript para los vectores, matrices y registros.
    .row.mb-4.pt-4(data-aos="fade-down")
      .col-auto.bg-c4
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img2.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white A.  Vectores
    p.mb-5(data-aos="fade-right") A través del ejemplo del cálculo de factorial se explicará el uso y comportamiento de la sentencia #[i while]. Recordando el algoritmo diseñado:
    .row.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        .row
          .col-12
            .px-4.py-3.bg-c22
              figure
                img(src='@/assets/curso/tema3/img11.svg', style="width:50px" alt='')
          .col-12
            .px-4.py-3.bg-c23
              pre
                p.mb-0 1.  let frutas = ["Manzana", "Banana", "Pera"];
                p.mb-0 2.	
                p.mb-0 3.  console.log(frutas);
                p.mb-0 4.  console.log(frutas.length);	
                hr
                p.mb-0 Console
                p.mb-0 [  "Manzana",  "Banana",  "Pera"]
                p.mb-0 3
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema10/img8.png', style="width: 570px" alt='').m-auto
    .row.justify-content-center.mb-5
      .col-md-10.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        .p-4.bg-c8
          .row.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/tema1/img6.svg', style='width: 80px', alt='').m-auto
            .col
              p.text-white.mb-0 En la línea 1 se ve cómo se define un vector con identificador frutas, de tres (3) elementos, cada uno de ellos es una cadena de texto con una fruta.
      .col-md-10.col-lg-4.mb-4.mb-lg-0(data-aos="fade-down")
        .p-4.bg-c8.h-100
          .row.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/tema1/img6.svg', style='width: 80px', alt='').m-auto
            .col
              p.text-white.mb-0 En la línea 3 se manda imprimir en la consola todo el vector con su contenido, como se ve en la consola.
      .col-md-10.col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
        .p-4.bg-c8.h-100
          .row.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/tema1/img6.svg', style='width: 80px', alt='').m-auto
            .col
              p.text-white.mb-0 En la línea 4 se llama al atributo frutas.length, que contiene el tamaño del vector (es decir, 3).
    p.mb-5(data-aos="fade-right") #[b.txt-c1 A continuación, se presenta cómo acceder a los elementos de un vector:]
    .row.mb-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        .row.mb-3
          .col-lg-6.mb-4.mb-lg-0
            .row
              .col-12
                .px-4.py-3.bg-c22
                  figure
                    img(src='@/assets/curso/tema3/img11.svg', style="width:50px" alt='')
              .col-12
                .px-4.py-3.bg-c23
                  pre
                    p.mb-0 1.  let arreglo = [5, 7, 23, 12, 43];
                    p.mb-0 2.	
                    p.mb-0 3.  console.log(arreglo[0]);
                    p.mb-0 4.  console.log(arreglo[2]);
                    p.mb-0 5.  console.log(arreglo[arreglo.length - 1]);
                    p.mb-0 6.  console.log(arreglo[arreglo.length]);
                    hr
                    p.mb-0 Consola
                    p.mb-0 5
                    p.mb-0 23
                    p.mb-0 43
                    p.mb-0 undefined
          .col-lg-6
            .row
              .col-12
                .p-4.bg-c32
                  p Los índices de los vectores comienzan en cero. En otras palabras, el índice del primer elemento de un vector es 0, y el del último elemento es igual al valor de la propiedad #[b length] del array restándole 1. Si se utiliza un número de índice no válido, se obtendrá #[b undefined].
                  p Ahora, se debe crear un programa que guarde los resultados de la tabla de 5 en un vector, con estos resultados recorrer el vector e imprimir:
                  figure.d-flex.justify-content-end
                    img(src='@/assets/curso/tema10/img9.svg', style="width: 80px" alt='')
        figure
          img(src='@/assets/curso/tema10/img9.png', style="width: 800px" alt='').m-auto
      .col-lg-4(data-aos="fade-left")
        .row
          .col-12
            .px-4.py-3.bg-c22
              figure
                img(src='@/assets/curso/tema3/img11.svg', style="width:50px" alt='')
          .col-12
            .px-4.py-3.bg-c23
              pre
                p.mb-0 let resultados = [];
                p.mb-0 for (let i = 1; i <= 10; i++) {
                p.mb-0     resultados.push(i * 5);
                p.mb-0 }
                p.mb-0 for (let i = 1; i <= 10; i++) {
                p.mb-0     console.log('5 x ' + i + ' = ' + resultados[i - 1]);
                p.mb-0 }
                hr
                p.mb-0 Consola
                p.mb-0 5 x 1 = 5
                p.mb-0 5 x 2 = 10
                p.mb-0 5 x 3 = 15
                p.mb-0 5 x 4 = 20
                p.mb-0 5 x 5 = 25
                p.mb-0 5 x 6 = 30
                p.mb-0 5 x 7 = 35
                p.mb-0 5 x 8 = 40
                p.mb-0 5 x 9 = 45
                p.mb-0 5 x 10 = 50
    p.mb-5(data-aos="fade-right") #[b.txt-c1 Es ideal revisar la lista de los métodos más comunes en los arreglos:]
    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
      p.mb-0 #[b Tabla 7.] Funciones comunes de un vector
    .tabla-a.color-acento-contenido.mb-5(data-aos="fade-left")
      table
        thead
          tr
            th(style="width: 15%") Función
            th Operador Abreviado
        tbody(style="background-color: #F6F6F6")
          tr
            td.text-center #[b indexOf()]
            td Devuelve el índice del primer elemento del #[b array] que sea igual a elemento Buscado, o -1 si no existe.
          tr
            td.text-center #[b join()]
            td Concatena en un #[b string] todos los elementos de un #[b array].
          tr
            td.text-center #[b push()]
            td Añade uno o más elementos al final de un #[b array] y devuelve el nuevo valor de su propiedad #[b length].
          tr
            td.text-center #[b pop()]
            td Elimina el último elemento de un #[b array], y devuelve dicho elemento.
          tr
            td.text-center #[b sort()]
            td Ordena los elementos de un #[b array], modificando este, y devuelve el #[b array] ordenado.
          tr
            td.text-center #[b shift()]
            td Elimina el primer elemento de un #[b array], y devuelve dicho elemento.
    .row.mb-4.pt-4(data-aos="fade-down")
      .col-auto.bg-c4
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img2.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white B. Matrices
    p.mb-5(data-aos="fade-right") Las matrices se pueden ver lógicamente como un vector, y cada uno de sus elementos es otro vector, así la representación de la matriz queda codificada como se presenta a continuación:
    .row.align-items-center.justify-content-center.mb-5
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        .tabla-j1
          table.tabla-j2(width="100%")
            tbody
              tr
                td.text-center "Manzana"
                td.text-center "Pera"
                td.text-center "Papaya"
                td.text-center "Piña"
              tr
                td.text-center "Papa"
                td.text-center "Tomate"
                td.text-center "Yuca"
                td.text-center "Ajo"
              tr
                td.text-center "Arroz"
                td.text-center "Frijol"
                td.text-center "Cebada"
                td.text-center "Garbanzo"
      .col-lg-5(data-aos="fade-left")
        .row
          .col-12
            .px-4.py-3.bg-c22
              figure
                img(src='@/assets/curso/tema3/img11.svg', style="width:50px" alt='')
          .col-12
            .px-4.py-3.bg-c23
              pre
                p.mb-0  let datos = [
                p.mb-0      ["Manzana", "Pera", "Papaya", "Piña"],
                p.mb-0      ["Papa", "Tomate", "Yuca", "Ajo"],
                p.mb-0      ["Arroz", "Frijol", "Cebada", "Garbanzo"]
                p.mb-0  ];
                p.mb-0  
                p.mb-0  console.log(datos);
    .row.bg-c38
      .col-12
        .px-5
          .row.mb-4.pt-4(data-aos="fade-down")
            .col-auto.bg-c4
              .px-3.pb-0
                .row.align-items-end
                  .col-auto.px-0
                    figure.fig-p1
                      img(src='@/assets/curso/tema1/img2.svg', style="width:50px" alt='').m-auto
                  .col
                    h3.text-white C. Registros
          p.mb-5(data-aos="fade-right") Hasta ahora se ha revisado  cómo un arreglo es la colección de datos del mismo tipo, pero un registro es una colección de datos de diferente tipo que se relacionan entre sí:
          .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
            p.mb-0 #[b Tabla 8.] Registros
          .row.justify-content-center.mb-5
            .col-lg-8(data-aos="fade-left")
              .tabla-j1
                table.tabla-j2(width="100%")
                  tbody
                    tr
                      td.text-center #[b Nombre]
                      td.text-center #[b Correo]
                      td.text-center #[b Edad]
                      td.text-center #[b Saldo]
                    tr
                      td.text-center Juan
                      td.text-center juan@sindato.com
                      td.text-center 19
                      td.text-center 36.234
                    tr
                      td.text-center Luis
                      td.text-center luis@sindato.com
                      td.text-center 18
                      td.text-center 23.234
                    tr
                      td.text-center Andrea
                      td.text-center andrea@sindato.com
                      td.text-center 22
                      td.text-center 0
                    tr
                      td.text-center Pedro
                      td.text-center pedro@sindato.com
                      td.text-center 12
                      td.text-center 65.234
                    tr
                      td.text-center Maria
                      td.text-center maria@sindato.com
                      td.text-center 16
                      td.text-center 123
          p.mb-5(data-aos="fade-right") Exceptuando el encabezado de la tabla 8, cada fila representa un registro y cada dato de un registro puede tener un tipo de dato diferente. Si se está interesado en codificar la tabla 8, en una estructura con JavaScript el código sería como se tiene en:
          .row.align-items-center.mb-5
            .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
              .row
                .col-12
                  .px-4.py-3.bg-c22
                    figure
                      img(src='@/assets/curso/tema3/img11.svg', style="width:50px" alt='')
                .col-12
                  .px-4.py-3.bg-c23
                    pre
                      p.mb-0  let registros = [
                      p.mb-0      ["Juan", "juan@sindato.com", 19, 36.234],
                      p.mb-0      ["Luis", "luis@sindato.com", 18, 23.234],
                      p.mb-0      ["Andrea", "andrea@sindato.com", 22, 0],
                      p.mb-0      ["Pedro", "pedro@sindato.com", 12, 65.234],
                      p.mb-0      ["Maria", "maria@sindato.com", 16, 123]
                      p.mb-0  ];
            .col-lg-6(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema10/img11.png', style='width: 470px', alt='').m-auto
          p.mb-5(data-aos="fade-right") Para recorrer todos los registros se precisan dos (2) ciclos #[i for], uno dentro de otro (anidado) como se presenta a continuación:
          .row
            .col-lg-6.order-2.order-lg-1(data-aos="fade-right")
              .row
                .col-12
                  .px-4.py-3.bg-c22
                    figure
                      img(src='@/assets/curso/tema3/img11.svg', style="width:50px" alt='')
                .col-12
                  .px-4.py-3.bg-c23
                    pre
                      p.mb-0  let registros = [
                      p.mb-0      ["Juan", "juan@sindato.com", 19, 36.234],
                      p.mb-0      ["Luis", "luis@sindato.com", 18, 23.234],
                      p.mb-0      ["Andrea", "andrea@sindato.com", 22, 0],
                      p.mb-0      ["Pedro", "pedro@sindato.com", 12, 65.234],
                      p.mb-0      ["Maria", "maria@sindato.com", 16, 123]
                      p.mb-0  ];
                      p.mb-0  
                      p.mb-0  var total = 0;
                      p.mb-0  
                      p.mb-0  for (let i = 0; i < registros.length; i++) {
                      p.mb-0      console.log(`Registro #${i + 1}`);
                      p.mb-0      for (let j = 0; j < registros[i].length; j++) {
                      p.mb-0          console.log("  " + registros[i][j]);
                      p.mb-0      }
                      p.mb-0  }
                      hr
                      p.mb-0  Consola
                      p.mb-0  Registro #1
                      p.mb-0    Juan
                      p.mb-0    juan@sindato.com
                      p.mb-0    19
                      p.mb-0    36.234
                      p.mb-0  Registro #2
                      p.mb-0    Luis
                      p.mb-0    luis@sindato.com
                      p.mb-0    18
                      p.mb-0    23.234
                      p.mb-0  Registro #3
                      p.mb-0    Andrea
                      p.mb-0    andrea@sindato.com
                      p.mb-0    22
                      p.mb-0    0
                      p.mb-0  Registro #4
                      p.mb-0    Pedro
                      p.mb-0    pedro@sindato.com
                      p.mb-0    12
                      p.mb-0    65.234
                      p.mb-0  Registro #5
                      p.mb-0    Maria
                      p.mb-0    maria@sindato.com
                      p.mb-0    16
                      p.mb-0    123
            .col-lg-6.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              .p-4.bg-c21
                p.mb-0 Como se puede identificar, se requieren dos ciclos #[i for] anidados, y cada ciclo tiene una variable de índice de nombre diferente i y j y la manera de indexar la matriz vista anteriormente en el ejemplo de registros [ i ][ j ].
    Separador
    #t_10_6
    .titulo-segundo.color-acento-contenido
      h2 10.6 Estructuras de salto
    p.mb-5(data-aos="fade-right") Estas estructuras son instrucciones que permiten romper la ejecución natural o secuencial de los programas, permitiendo que se salte a otro punto de la ejecución del programa. Estas instrucciones tienen las siguientes palabras reservadas: #[b continue], #[b break] y #[b return].
    .row.justify-content-center
      .col-lg-10
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-down")
          .row(titulo="La sentencia continue")
            .col-12
              p La sentencia #[b continue] se salta a la siguiente iteración del ciclo #[i for] o #[i while], como se presenta en el siguiente ejemplo y teniendo en cuenta los resultados:
              .row.mb-3
                .col-lg-5.mb-4.mb-lg-0
                  .row
                    .col-12
                      .px-4.py-3.bg-c22
                        figure
                          img(src='@/assets/curso/tema3/img11.svg', style="width:50px" alt='')
                    .col-12
                      .px-4.py-3.bg-c23
                        pre
                          p.mb-0  var i = 0;
                          p.mb-0  while (i < 5) {
                          p.mb-0      i++;
                          p.mb-0      console.log(i);
                          p.mb-0  }
                          p.mb-0 
                          p.mb-0 
                          hr
                          p.mb-0  Consola
                          p.mb-0  1
                          p.mb-0  2
                          p.mb-0  3
                          p.mb-0  4
                          p.mb-0  5
                .col-lg-5
                  .row
                    .col-12
                      .px-4.py-3.bg-c22
                        figure
                          img(src='@/assets/curso/tema3/img11.svg', style="width:50px" alt='')
                    .col-12
                      .px-4.py-3.bg-c23
                        pre
                          p.mb-0  var i = 0;
                          p.mb-0 while (i < 5) {
                          p.mb-0     i++;
                          p.mb-0     if (i == 3) {
                          p.mb-0         continue;
                          p.mb-0     }
                          p.mb-0     console.log(i);
                          p.mb-0 }
                          hr
                          p.mb-0  Consola
                          p.mb-0  1
                          p.mb-0  2
                          p.mb-0  4
                          p.mb-0  5
              p.mb-0 Cuando la variable i tiene el valor 3, se ejecuta la sentencia continue se salta la sentencia donde debe imprimir el valor de 3, por ese motivo no aparece en la consola.
          .row(titulo="Sentencia <i>break</i>")
            .col-12
              p La sentencia #[i break], detiene la ejecución del ciclo independientemente de cuántas veces este configurando el ciclo; preste especial atención en la salida de consola.
              .row.mb-3
                .col-lg-5.mb-4.mb-lg-0
                  .row
                    .col-12
                      .px-4.py-3.bg-c22
                        figure
                          img(src='@/assets/curso/tema3/img11.svg', style="width:50px" alt='')
                    .col-12
                      .px-4.py-3.bg-c23
                        pre
                          p.mb-0  for (let i = 1; i <= 5; i++) {
                          p.mb-0      console.log(i);
                          p.mb-0  }
                          p.mb-0 
                          p.mb-0 
                          hr
                          p.mb-0  Consola
                          p.mb-0  1
                          p.mb-0  2
                          p.mb-0  3
                          p.mb-0  4
                          p.mb-0  5
                .col-lg-5
                  .row
                    .col-12
                      .px-4.py-3.bg-c22
                        figure
                          img(src='@/assets/curso/tema3/img11.svg', style="width:50px" alt='')
                    .col-12
                      .px-4.py-3.bg-c23
                        pre
                          p.mb-0  for (let i = 1; i <= 5; i++) {
                          p.mb-0      if (i == 3) {
                          p.mb-0          break;
                          p.mb-0      }
                          p.mb-0      console.log(i);
                          p.mb-0  }
                          hr
                          p.mb-0  Consola
                          p.mb-0  1
                          p.mb-0  2
                          p.mb-0 
                          p.mb-0 
              p.mb-0 Cuando i tiene el valor de 3 ya no se sigue ejecutando más el ciclo, aunque esté programado para ejecutarse 5 veces, solo ejecuta 3 iteraciones y, ya que en el tercero luego de evaluar la condición i == 3 ejecuta la sentencia #[i break] haciendo que termine todo.
          .row(titulo="Sentencia <i>return</i>")
            .col-12
              p El uso de la sentencia #[i return] sirve para terminar la ejecución de un bloque de instrucciones y es muy común en la programación modular cuando se quiere retornar un resultado. A continuación, se presenta un ejemplo para ilustrar su uso:
              .row.mb-3
                .col-lg-5.mb-4.mb-lg-0
                  .row
                    .col-12
                      .px-4.py-3.bg-c22
                        figure
                          img(src='@/assets/curso/tema3/img11.svg', style="width:50px" alt='')
                    .col-12
                      .px-4.py-3.bg-c23
                        pre
                          p.mb-0  Sin return
                          p.mb-0  var divideByFour = function (num) {
                          p.mb-0      num / 4;
                          p.mb-0  };
                          p.mb-0  
                          p.mb-0  var divided = divideByFour(27);
                          p.mb-0  console.log(divided); // undefined
                .col-lg-5
                  .row
                    .col-12
                      .px-4.py-3.bg-c22
                        figure
                          img(src='@/assets/curso/tema3/img11.svg', style="width:50px" alt='')
                    .col-12
                      .px-4.py-3.bg-c23
                        pre
                          p.mb-0  Con return
                          p.mb-0  var divideByFour = function (num) {
                          p.mb-0      return num / 4;
                          p.mb-0  };
                          p.mb-0  
                          p.mb-0  var divided = divideByFour(27);
                          p.mb-0  console.log(divided); // 6.75
    Separador
    #t_10_7
    .titulo-segundo.color-acento-contenido
      h2 10.7 Métodos de ordenamiento y búsqueda
    p.mb-4(data-aos="fade-right") Existen varias técnicas de ordenamiento de vectores que son importantes para realizar búsquedas. Al igual que en la vida real, es más fácil buscar en un lugar que esté ordenado que en uno que no lo esté. JavaScript está diseñado para pequeños algoritmos que resuelven problemas específicos y convertirlos en servicios. #[b.txt-c1 El uso de estas técnicas puede no tener mucha aplicabilidad en volúmenes de datos pequeños, ya que la diferencia en tiempos computacionales de ejecución es considerable solo cuando se manejan grandes volúmenes de datos. Para volúmenes de datos pequeños, los tiempos computacionales no presentan diferencias significativas].
    .row.mb-4.pt-4(data-aos="fade-down")
      .col-auto.bg-c4
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img2.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white A. Ordenamiento de cadenas de texto
    p.mb-5(data-aos="fade-right") Para ordenar un vector de mayor a menor valor y teniendo en cuenta que el arreglo se modifica al ordenarlo, es importante hacer una copia del arreglo si se desea mantener el vector original inmutable. A continuación, se presenta un ejemplo que ilustra cómo realizar este proceso en JavaScript:
    .row.align-items-center.mb-4
      .col-lg-9(data-aos="fade-right")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Ordenamiento de números como cadenas de texto")
            .col-12
              p Por defecto el método #[b Array.sort()] ordena los elementos del array como si fueran cadenas, inclusive si los datos son de tipo entero, como en este ejemplo:
              .row
                .col-lg-5
                  .row
                    .col-12
                      .px-4.py-3.bg-c22
                        figure
                          img(src='@/assets/curso/tema3/img11.svg', style="width:50px" alt='')
                    .col-12
                      .px-4.py-3.bg-c23
                        pre
                          p.mb-0  var arg = [10, 53, 12, 56, 120];
                          p.mb-0  
                          p.mb-0  console.log(arg.join(', '));
                          p.mb-0  arg.sort();
                          p.mb-0  console.log(arg.join(', '));
                          hr
                          p.mb-0  Consola
                          p.mb-0  10, 53, 12, 56, 120 
                          p.mb-0  10, 12, 120, 53, 56
          .row(titulo="Ordenamiento de cadenas de texto")
            .col-12
              p El arreglo a ordenar en la línea 1, en la línea 2, se presenta en consola el vector, se ha usado la función #[b join(', ')] que sirve para concatenar los datos del vector o arreglo poniendo entre ellos una coma (,) y espacio (línea 2). Luego se aplica la función #[b sort()] en la tercera línea de código y, posteriormente, se presenta el vector ya ordenado. Como se presenta, el resultado en consola es un ordenamiento como si los elementos fueran cadenas de texto.
              .row
                .col-lg-8
                  .row
                    .col-12
                      .px-4.py-3.bg-c22
                        figure
                          img(src='@/assets/curso/tema3/img11.svg', style="width:50px" alt='')
                    .col-12
                      .px-4.py-3.bg-c23
                        pre
                          p.mb-0  1.  var data = ["Montería", "Sincelejo", "Cartagena", "Bogotá"];
                          p.mb-0  2.  data.sort();
                          p.mb-0  3.  console.log(data);
                          hr
                          p.mb-0  Consola
                          p.mb-0  ["Bogotá", "Cartagena", "Montería", "Sincelejo"]
          .row(titulo="Invertir el orden de los elementos")
            .col-12
              p En el ejemplo de un ordenamiento de cadenas de texto. También se puede ordenar el arreglo de forma descendente con el método #[b Array.reverse()].
              .row
                .col-lg-8
                  .row
                    .col-12
                      .px-4.py-3.bg-c22
                        figure
                          img(src='@/assets/curso/tema3/img11.svg', style="width:50px" alt='')
                    .col-12
                      .px-4.py-3.bg-c23
                        pre
                          p.mb-0  var data = ["Montería", "Sincelejo", "Cartagena", "Bogotá"];
                          p.mb-0  data.sort().reverse();
                          p.mb-0  console.log(data);
                          hr
                          p.mb-0  Consola
                          p.mb-0  ["Sincelejo", "Montería", "Cartagena", "Bogotá"]
      .col-lg-3.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema10/img12.png', style="width: 400px" alt='').m-auto
    p.mb-5(data-aos="fade-right") La función #[b Array.reverse()] no ordena los elementos, simplemente toma los elementos y les invierte el orden, es decir, el primero pasa a ser el último, el segundo, el penúltimo y así hasta que el última pasa al primer puesto. Es por esto que primero se ordena en orden ascendente y luego se invierte para lograr el orden descendente.
    .row.mb-4.pt-4(data-aos="fade-down")
      .col-auto.bg-c4
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img2.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white B. Ordenamiento de datos numéricos
    p.mb-5(data-aos="fade-right") Como se explica, el ordenamiento con la función #[b Array.sort()] se realiza considerando los elementos del arreglo como cadenas de texto. Antes de describir cómo se ordenan con datos numéricos, se explicará qué es una función en JavaScript.
    .row.align-items-center.mb-5
      .col-lg-7.order-2.order-lg-1(data-aos="fade-right")
        .p-4.bg-c13
          .row
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema10/img10.svg', style="width: 70px" alt='').m-auto
            .col
              p.mb-0 Las funciones son uno de los bloques de construcción fundamentales en JavaScript. Una función en JavaScript es similar a un procedimiento o “un conjunto de instrucciones que realiza una tarea o calcula un valor, pero para que un procedimiento califique como función, debe tomar alguna entrada y devolver una salida donde hay alguna relación obvia entre la entrada y la salida”. Para usar una función, se debe definir en algún lugar del ámbito en el que se desea llamarla (MDN, 2021d).
      .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema10/img13.png', style="width: 570px" alt='').m-auto
    p(data-aos="fade-right") #[b Ejemplo]
    p.mb-4(data-aos="fade-right") Se quiere construir una función que reciba dos (2) datos numéricos, hay que multiplicar estos dos números, al resultado se le suma el valor de 100 y, por último, retorna la mitad de este resultado.
    .row.mb-4
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
        .row
          .col-12
            .px-4.py-3.bg-c22
              figure
                img(src='@/assets/curso/tema3/img11.svg', style="width:50px" alt='')
          .col-12
            .px-4.py-3.bg-c23
              pre
                p.mb-0  function operacion(a, b) {
                p.mb-0      return (a * b + 100) / 2;
                p.mb-0  }
                p.mb-0  
                p.mb-0  var dato1 = operacion(3, 8);
                p.mb-0  var dato2 = operacion(2, 4);
                p.mb-0  
                p.mb-0  console.log(dato1);
                p.mb-0  console.log(dato2);
                hr
                p.mb-0  Consola
                p.mb-0  62
                p.mb-0  54
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-down")
        .p-4.bg-c32.h-100
          p En la línea 1, se usa la palabra reservada #[b function] y luego se elige un identificador para la función, que en este caso es #[b operacion]. Luego, entre paréntesis, se seleccionan nombres para las variables de entrada (en el ejemplo, a y b). A continuación, se define un contexto (espacio de código entre corchetes) para indicar cuáles son las instrucciones que ejecutará la función. En la línea 2, se indica que la función retorna la multiplicación de a * b sumando 100 y a este resultado dividido entre 2. En la línea 4, se ve cómo se invoca la función #[b operacion] y se le pasan los parámetros 3 y 8 para las variables a y b respectivamente, el resultado es almacenado en la variable dato1. Y la función puede invocarse más de una vez (las que se necesiten).
          figure.d-flex.justify-content-end
            img(src='@/assets/curso/tema10/img11.svg', style="width: 90px" alt='')
      .col-lg-3(data-aos="fade-left")
        .row
          .col-12
            .px-4.py-3.bg-c22
              figure
                img(src='@/assets/curso/tema3/img11.svg', style="width:50px" alt='')
          .col-12
            .px-4.py-3.bg-c23
              pre
                p.mb-0  var arg = [10, 53, 12, 56, 120];
                p.mb-0  arg.sort(function(a, b) {
                p.mb-0      return a - b;
                p.mb-0  });
                p.mb-0  console.log(arg.join(', '));
                p.mb-0 
                p.mb-0 
                p.mb-0 
                p.mb-0 
                p.mb-0 
                hr
                p.mb-0  Consola
                p.mb-0  10, 12, 53, 56, 120
    p(data-aos="fade-right") Para ordenar un vector con datos numéricos, se debe pasar como argumento una función al método #[b Array.sort()]. Esta función indica qué operación debe hacerse sobre los datos a comparar entre dos datos del arreglo. Para comparar si un número es mayor que otro, es muy común usar la resta porque, al restar un número, solo existen tres tipos de respuestas. Cuando a un número a se le resta un número #[b b (a - b)], si el resultado es negativo, es porque #[b b] es mayor que #[b a]; si el resultado es positivo, es porque a es mayor que #[b b]; y si el resultado es cero, es porque #[b a y b] son iguales.
    p(data-aos="fade-right") Como se puede apreciar, se pasa una función (sin identificador) que recibe dos datos del arreglo (a y b) y los compara con la diferencia (resta) de ellos. A las funciones que no se les pone identificador se les llaman funciones anónimas. También existe otra forma de sintaxis para funciones anónimas, denominada funciones flecha. #[b.txt-c1 A continuación, se presenta cómo ordenar un arreglo numérico de manera inversa utilizando la sintaxis de función]:
    .row.bg-c39.mb-5
      .col-12
        .px-5
          .row.align-items-center.mb-5
            .col-lg-6.order-2.order-lg-1(data-aos="fade-right")
              .row
                .col-12
                  .px-4.py-3.bg-c22
                    figure
                      img(src='@/assets/curso/tema3/img11.svg', style="width:50px" alt='')
                .col-12
                  .px-4.py-3.bg-c23
                    pre
                      p.mb-0  var arg = [10, 53, 12, 56, 120];
                      p.mb-0  arg.sort((a, b) => b - a);
                      p.mb-0  console.log(arg.join(', '));
                      hr
                      p.mb-0  Consola
                      p.mb-0  120, 56, 53, 12, 10 
            .col-lg-6.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema10/img15.png', style="width: 570px" alt='')
          .row.mb-4.pt-4(data-aos="fade-down")
            .col-auto.bg-c4
              .px-3.pb-0
                .row.align-items-end
                  .col-auto.px-0
                    figure.fig-p1
                      img(src='@/assets/curso/tema1/img2.svg', style="width:50px" alt='').m-auto
                  .col
                    h3.text-white C. Ordenamiento de registros
          p.mb-5(data-aos="fade-right") Suponiendo que se tienen los registros de la tabla, se desea ordenarlos de mayor edad a menor edad.
          .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
            p.mb-0 #[b Tabla 9.] Registros
          .row.justify-content-center.mb-5(data-aos="fade-left")
            .col-lg-8
              table(width="100%")
                tbody
                  tr
                    td.text-center #[b Usuario]
                    td.text-center #[b Edad]
                    td.text-center #[b Rol]
                  tr
                    td.text-center Mariela
                    td.text-center 31
                    td.text-center SAC
                  tr
                    td.text-center Eduardo
                    td.text-center 30
                    td.text-center SEO
                  tr
                    td.text-center Andrés
                    td.text-center 34
                    td.text-center Project Manager
          p.mb-5(data-aos="fade-right") En esta oportunidad en las líneas 6 y 8, que se puede usar contexto (corchetes) a pesar de que dentro solo hay una sentencia (línea 7), el resultado a retornar es la diferencia entre b.edad y a.edad para que el ordenamiento sea de mayor a menor.
          .row
            .col-lg-6(data-aos="fade-right")
              .row
                .col-12
                  .px-4.py-3.bg-c22
                    figure
                      img(src='@/assets/curso/tema3/img11.svg', style="width:50px" alt='')
                .col-12
                  .px-4.py-3.bg-c23
                    pre
                      p.mb-0  1    var data = [
                      p.mb-0  2        {usuario: 'Mariela', edad: 31, rol: 'SAC'},
                      p.mb-0  3        {usuario: 'Eduardo', edad: 30, rol: 'CEO'},
                      p.mb-0  4        {usuario: 'Andrés', edad: 34, rol: 'Project Manager'}
                      p.mb-0  5    ];
                      p.mb-0  6    data.sort((a, b) => {
                      p.mb-0  7        return b.edad - a.edad;
                      p.mb-0  8    });
                      p.mb-0  9    console.log(data);
                      hr
                      p.mb-0  Consola
                      p.mb-0  [
                      p.mb-0      {usuario: "Andrés", edad: 34, rol: "Project Manager"},
                      p.mb-0      {usuario: "Mariela", edad: 31, rol: "SAC"},
                      p.mb-0      {usuario: "Eduardo", edad: 30, rol: "CEO"}
                      p.mb-0  ]
            .col-lg-6.d-none.d-lg-block(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema10/img16.png', style="width: 550px" alt='').m-auto
    .row.mb-4.pt-4(data-aos="fade-down")
      .col-auto.bg-c4
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img2.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white D. Buscar un elemento
    p.mb-4(data-aos="fade-right") El método #[b find()] devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada (Array.prototype.find() - JavaScript, MDN, 2021).
    .row.align-items-center.mb-4
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
        .row
          .col-12
            .px-4.py-3.bg-c22
              figure
                img(src='@/assets/curso/tema3/img11.svg', style="width:50px" alt='')
          .col-12
            .px-4.py-3.bg-c23
              pre
                p.mb-0  const array1 = [5, 12, 8, 130, 44];
                p.mb-0  const found = array1.find(element => element > 10);
                p.mb-0  console.log(found);
                hr
                p.mb-0  Consola
                p.mb-0  12
      .col-lg-6(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema10/img17.png', style="width: 550px" alt='').m-auto
    p(data-aos="fade-down") Se utiliza el identificador #[b elemento] para referenciar la variable a la que se aplicará el criterio de búsqueda, que en este ejemplo es encontrar el primer elemento mayor que 10. Muchas veces es importante que, en lugar de retornar un solo valor, el resultado sea más de uno.  Por ejemplo, si en el arreglo se retornan los valores mayores que 10, se debe retornar otro vector con los valores resultantes. Para esto, existe la función #[b Array.filter()], que crea un nuevo arreglo con los datos que cumplan con la condición.
    .row
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        .row
          .col-12
            .px-4.py-3.bg-c22
              figure
                img(src='@/assets/curso/tema3/img11.svg', style="width:50px" alt='')
          .col-12
            .px-4.py-3.bg-c23
              pre
                p.mb-0  const array1 = [5, 12, 8, 130, 44];
                p.mb-0  const found = array1.filter(element => element > 10);
                p.mb-0  console.log(found);
                hr
                p.mb-0  Consola
                p.mb-0  [  12,  130,  44]
      .col-lg-7(data-aos="fade-left")
        .p-4.bg-c29
          .row
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema10/img12.svg', style="width: 70px" alt='').m-auto
            .col
              p.mb-0 Es importante notar que la consola solo devuelve los datos que cumplen la condición de que el elemento es mayor que 10. A medida que se avanza en el conocimiento de la sintaxis del lenguaje, el código fuente se enriquece con más elementos y, por tanto, aumenta en complejidad. Esto hace necesario conocer herramientas para la depuración de fallos y la corrección de errores en la redacción del código.

</template>

<script>
export default {
  name: 'Tema10',
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
