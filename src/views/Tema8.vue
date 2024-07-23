<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 8
      h1 Estructura de datos
    .row.bg-c31
      .col-12
        .px-5
          p.mb-5(data-aos="fade-right") Es importante conocer el concepto de arreglos e identificar cuándo usarlos en la aplicación de los algoritmos. Asimismo, es crucial ser capaz de resolver problemas básicos mediante diagramas de flujo y pseudocódigo. Existen varios tipos de arreglos, siendo los más comunes los vectores y las matrices.
          .row.align-items-center.mb-5
            .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
              .p-4.bg-c6
                p.text-white #[b Vectores]
                p.text-white.mb-0 Los arreglos o #[i arrays] (en inglés), también conocidos como matrices, arreglos o vectores, se definen como un conjunto finito y ordenado de elementos del mismo tipo. La propiedad "ordenado" implica que el primer elemento, segundo, tercero, ..., enésimo de un #[i array] puede ser identificado y accedido. Cuando se dice que los elementos de un arreglo son homogéneos, significa que son del mismo tipo de datos. Un arreglo puede estar compuesto de todos sus elementos de tipo letras, otro puede tener todos sus elementos de tipo entero, etc. Los arreglos se conocen como matrices en matemáticas y tablas en temas financieros (Vázquez, 2012).
            .col-lg-6(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema8/img2.png', style='width: 500px', alt='').m-auto
          p.mb-5(data-aos="fade-right") #[b.txt-c1 Según sus dimensiones, los arreglos se clasifican en:]
          .row.justify-content-center.mb-5
            .col-md-8.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              .p-4.bg-c8.h-100
                figure.mb-4
                  img(src='@/assets/curso/tema8/img1.svg', style='width: 100px', alt='')
                .row.mb-3
                  .col-auto
                    p.txt-c3.mb-0 #[b Unidimensionales:]
                p.text-white.mb-0 De una dimensión, comparables con una lista de elementos.
            .col-md-8.col-lg-4(data-aos="fade-left")
              .p-4.bg-c8
                figure.mb-4
                  img(src='@/assets/curso/tema8/img2.svg', style='width: 100px', alt='')
                .row.mb-3
                  .col-auto
                    p.txt-c3.mb-0 #[b Multidimensionales:]
                p.text-white.mb-0 Multidimensionales: son arreglos de varias dimensiones o los más comunes son bidimensionales (dos dimensiones o tablas) o arreglos multidimensionales (tridimensionales, por ejemplo).
    .row.mb-5
      .col-12
        .p-4.bg-c3(data-aos="fade-down")
          .titulo-sexto.color-acento-contenido.mb-4
            p.mb-0 #[b Figura 16.] Matriz unidimensional con 10 elementos
          figure
            img(src='@/assets/curso/tema8/img3.svg', style='width: 700px', alt='Una imagen que muestra una representación gráfica de un array con índices del 0 al 9.').m-auto
    p.mb-5(data-aos="fade-right") Cada vector está compuesto de un número de elementos ya definidos, lo que hace que sea una estructura estática (no puede aumentarse ni reducirse). Cada elemento está referenciado por la posición que ocupa dentro del vector. Estas posiciones son llamadas índices; nótese que empiezan a contarse desde 0, como se presenta en la figura anterior.
    .row.align-items-center.mb-5
      .col-lg-6.order-2.order-lg-1(data-aos="fade-right")
        .row.mb-3
          .col-12
            .p-3.bg-c13
              .row.align-items-center
                .col-md-auto.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema8/img4.svg', style='width: 70px', alt='')
                .col
                  p.mb-0 Para referirse a un vector se usa un identificador, como se hace con las variables o constantes, pero queda entre corchetes [ ]. Por ejemplo, si el vector se llama "lista" y se quiere acceder al quinto elemento del vector de la figura 17, se debe hacer así: lista[4]. Es importante notar que la quinta posición se accede con el índice 4, porque se empieza a contar desde 0.
        p.mb-0 Para realizar las operaciones de asignación, lectura/escritura sobre un vector, se recomienda usar las estructuras repetitivas para, a través de ellas, manipular los índices correspondientes a las posiciones del arreglo.
      .col-lg-6.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema8/img3.png', style="width: 570px" alt='').m-auto
    .row.mb-5
      .col-12
        .p-4.bg-c6(data-aos="fade-left")
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema8/img5.svg', style="width: 90px" alt='').m-auto
            .col
              p.txt-c2.mb-0 #[b Ejemplo:] Hacer un programa que pida 5 números enteros al usuario y los guarde en un arreglo de números en un arreglo, luego que imprima los números mayores de 100.
    p.mb-5(data-aos="fade-right") #[b.txt-c1 A continuación, se revisan los ejemplos:]
    .row.align-items-center.mb-5
      .col-12
        .p-4.bg-c13(data-aos="fade-left")
          p #[b Análisis]
          ol.lista-ol--cuadro.mb-0
            li.d-flex
              .lista-ol--cuadro__vineta
                span 1.
              |
              p.mb-0 #[b Formular el problema:] pedirle al usuario 5 números enteros almacenarlos en un arreglo y luego recorrer el arreglo para buscar los números mayores a 100.
            li.d-flex
              .lista-ol--cuadro__vineta
                span 2.
              |
              p.mb-0 #[b Resultados esperados:] imprimir en pantalla de los 5 números ingresados por el usuario solamente los mayores a 100.
            li.d-flex
              .lista-ol--cuadro__vineta
                span 3.
              |
              p.mb-0 #[b Datos disponibles:] 5 números ingresados por el usuario.
            li.d-flex
              .lista-ol--cuadro__vineta
                span 4.
              |
              p.mb-0 #[b Datos adicionales:] por cada uno de esos números validar si son mayores que 100 y mostrar los que lo sean en la pantalla.
            li.d-flex
              .lista-ol--cuadro__vineta
                span 5.
              |
              p.mb-0 #[b Restricciones:] ninguna.
            li.d-flex
              .lista-ol--cuadro__vineta
                span 6.
              |
              p.mb-0 #[b Procesos necesarios:] se requiere definir un arreglo de tamaño 5, se necesita pedir 5 veces un entero y almacenarlos en el vector. Luego se debe recorrer las 5 posiciones del vector para comparar en cada uno de los datos si es mayor que 100, si el número comparador es lo que se debe imprimir. Como 5 es un número invariante, el programa lo define como una constante de nombre tamano (no se usa la ñ porque no permite ni acentos latinos ni tildes), se debe usar la sentencia repetitiva PARA porque se sabe el número de veces que se debe repetir cada acción.
    p(data-aos="fade-right") #[b Diseño]
    p.mb-5(data-aos="fade-right") El diseño es el siguiente:
    .row.mb-5
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        .row
          .col-12
            .p-4.bg-c3
              .titulo-sexto.color-acento-contenido.mb-4
                p.mb-0 #[b Figura 17.] Vector de 5 elementos
              figure
                img(src='@/assets/curso/tema8/img6.svg', style='width: 400px', alt='Un diagrama de flujo que describe un algoritmo para ingresar y procesar una lista de números enteros, mostrando aquellos que son mayores a 100.').m-auto
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
                p.mb-0  ALGORITMO Vector de 5 enteros;
                p.mb-0  
                p.mb-0  VAR
                p.mb-0  
                p.mb-0                   ENTERO tamano;
                p.mb-0                   ENTERO lista[tamano] ;
                p.mb-0  INICIO
                p.mb-0                   tamano = 5;
                p.mb-0                   PARA i DESDE 0 HASTA tamano -1
                p.mb-0                            ESCRIBIR( "Escriba el número" );
                p.mb-0                            LEER ( lista[ i ] );
                p.mb-0                            FINPARA
                p.mb-0  
                p.mb-0                            PARA i DESDE 0 HASTA tamano -1
                p.mb-0                                        SI ( lista[ i ] > 100 )
                p.mb-0                            ESCRIBIR (lista[ i ] );
                p.mb-0                            FINSI
                p.mb-0                            FINPARA
                p.mb-0  
                p.mb-0  FIN
                p.mb-0 
    .row.bg-c31
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
                    h3.text-white Matrices
          p.mb-5(data-aos="fade-right") Las matrices son arreglos de más de una dimensión. En la siguiente tabla se presenta un ejemplo de una matriz de 2 dimensiones, que es de 4 x 5 (correspondiente a 4 columnas y 5 filas).
          .row.align-items-center.mb-5
            .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
              .titulo-sexto.color-acento-contenido.mb-4
                p.mb-0 #[b Tabla 6.] Matriz de 4 x 5
              table(width="100%" style="background-color: #F9F9F9")
                tbody
                  tr
                    td.text-center 0,0
                    td.text-center 0,1
                    td.text-center 0,2
                    td.text-center 0,3
                  tr
                    td.text-center 1,0
                    td.text-center 1,1
                    td.text-center 1,2
                    td.text-center 1,3
                  tr
                    td.text-center 2,0
                    td.text-center 2,1
                    td.text-center 2,2
                    td.text-center 2,3
                  tr
                    td.text-center 3,0
                    td.text-center 3,1
                    td.text-center 3,2
                    td.text-center 3,3
                  tr
                    td.text-center 4,0
                    td.text-center 4,1
                    td.text-center 4,2
                    td.text-center 4,3
            .col-lg-5(data-aos="fade-left")
              .p-4.bg-c32
                p Lo anterior se aplica cuando se quiere acceder a un elemento de la matriz. El identificador usa corchetes dobles. Por ejemplo, para acceder al último elemento de la tabla, se utilizaría: matriz[4][3].
                p.mb-0 Para recorrer estas estructuras de datos se requieren ciclos anidados; estas técnicas se abordarán más adelante.
          p(data-aos="fade-right") #[b Programación modular]
          p(data-aos="fade-right") Existe un área denominada ingeniería del #[i software], que se interesa en el proceso de creación o producción de #[i software] y concentra sus esfuerzos en aportar herramientas, procedimientos y técnicas para su construcción.
          .row.align-items-center.mb-5
            .col-lg-6.order-2.order-lg-1(data-aos="fade-right")
              .row.mb-3
                .col-12
                  .p-3.bg-c2
                    p.mb-0 La ingeniería del #[i software] propone que la construcción de #[i software] esté basada en la descomposición de un problema en un conjunto de subproblemas independientes entre sí, más sencillos de analizar y resolver; estos subproblemas pueden ser tratados separadamente unos de otros. Esto consiste, básicamente, en la modularidad del #[i software].
              p.mb-0 Debido a la modularidad, se pueden probar los subprogramas o módulos de manera independiente, depurando errores antes de su uso en el programa principal y almacenándolos para su posterior reutilización cuantas veces sea necesario.
            .col-lg-6.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema8/img5.png', style="width: 570px" alt='').m-auto
          p(data-aos="fade-right") El enfoque básico de modularidad en un algoritmo puede estar compuesto de otros algoritmos que se especializan en una función determinada. Para saber cómo descomponer un algoritmo en pequeños algoritmos, se listan los aspectos que pueden ayudar a definir la división de algoritmos:
    .row.mb-5
      .col-12
        .p-4.p-lg-5.bg-c17(data-aos="fade-up")
          .tarjeta.tarjeta--azul.p-4.p-lg-5
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-lg-5.mb-4.mb-lg-0
                  p #[b.txt-c1 Según la funcionalidad]
                  p Un algoritmo debe realizar una función específica y no ir más allá de sus responsabilidades. Por ejemplo, si se tiene un módulo que calcula la multiplicación de dos números y devuelve el resultado, no sería adecuado que, además, imprima mensajes en pantalla o haga otra cosa diferente de su propósito.
                .col-lg-5
                  figure
                    img(src='@/assets/curso/tema8/img6.png', style='width: 400px', alt='').m-auto
              .row.justify-content-center.align-items-center
                .col-lg-5.mb-4.mb-lg-0
                  p #[b.txt-c1 Según su identificación]
                  p Cada módulo tiene un nombre de identificación que permite ejecutarlo y diferenciarlo de otros. Es recomendable que al elegir este nombre sea representativo de la función que realiza, de esa forma resulta intuitivo en el momento de usarlo dentro de un algoritmo.
                .col-lg-5
                  figure
                    img(src='@/assets/curso/tema8/img7.png', style='width: 400px', alt='').m-auto
              .row.justify-content-center.align-items-center
                .col-lg-5.mb-4.mb-lg-0
                  p #[b.txt-c1 Según sus datos de entrada]
                  p Los módulos comúnmente reciben datos de entrada necesarios para realizar las operaciones requeridas. Se pueden clasificar los módulos de acuerdo con los parámetros que se requieren para obtener los resultados solicitados. Al momento de usar el módulo, se tienen que agregar todos los parámetros necesarios, en el orden establecido y deben ser del tipo correcto.
                .col-lg-5
                  figure
                    img(src='@/assets/curso/tema8/img8.png', style='width: 400px', alt='').m-auto
              .row.justify-content-center.align-items-center
                .col-lg-5.mb-4.mb-lg-0
                  p #[b.txt-c1 Parámetro de salida]
                  p También se pueden emplear los resultados a la salida del algoritmo para clasificar los módulos, ya que en el momento de definir un algoritmo se debe indicar el tipo de dato que devuelve al momento de la ejecución del algoritmo.
                .col-lg-5
                  figure
                    img(src='@/assets/curso/tema8/img9.png', style='width: 400px', alt='').m-auto
              .row.justify-content-center.align-items-center
                .col-lg-5.mb-4.mb-lg-0
                  p #[b.txt-c1 Pruebas de escritorios]
                  p Como se mencionó antes, las pruebas de escritorio sirven para depurar y probar que un algoritmo solucione el problema. En esta sesión se mencionarán los objetivos principales y se ejecutará una prueba a un algoritmo de mayor complejidad para su comprensión.
                .col-lg-5
                  figure
                    img(src='@/assets/curso/tema8/img10.png', style='width: 400px', alt='').m-auto
    p(data-aos="fade-right") #[b Ejemplo]
    p.mb-5(data-aos="fade-right") Realizar un algoritmo que solicite dos números e imprima cuál es el mayor de ambos, si son iguales, mostrar cualquiera.
    .row.align-items-center.mb-5
      .col-12
        .p-4.bg-c13(data-aos="fade-left")
          p #[b Análisis]
          ol.lista-ol--cuadro.mb-0
            li.d-flex
              .lista-ol--cuadro__vineta
                span 1.
              |
              p.mb-0 #[b Formular el problema:] es un algoritmo que solita y compara dos números para mostrar el mayor.
            li.d-flex
              .lista-ol--cuadro__vineta
                span 2.
              |
              p.mb-0 #[b Resultados esperados:] el número que es mayor de ambos.
            li.d-flex
              .lista-ol--cuadro__vineta
                span 3.
              |
              p.mb-0 #[b Datos disponibles:] 2 números ingresados por el usuario.
            li.d-flex
              .lista-ol--cuadro__vineta
                span 4.
              |
              p.mb-0 #[b Datos adicionales:] ninguno.
            li.d-flex
              .lista-ol--cuadro__vineta
                span 5.
              |
              p.mb-0 #[b Restricciones:] validar cuál número es mayor para saber cuál mostrar.
            li.d-flex
              .lista-ol--cuadro__vineta
                span 6.
              |
              p.mb-0 #[b Procesos necesarios:] se requiere definir los datos a recibir, pedirle que al usuario que digite los números, comparar para saber cuál es el mayor y mostrarlo.
    p.mb-5(data-aos="fade-right") #[b Diseño:] el diseño es el siguiente:
    .row
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        .row
          .col-12
            .p-4.bg-c3
              .titulo-sexto.color-acento-contenido.mb-4
                p.mb-0 #[b Figura 18.] Estructura Algoritmo el mayor de dos números
              figure
                img(src='@/assets/curso/tema8/img7.svg', style='width: 400px', alt='Un diagrama de flujo que ilustra un algoritmo para comparar dos números ingresados por el usuario y determinar cuál es el mayor.').m-auto
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
                p.mb-0  ALGORITMO El mayor de dos números;
                p.mb-0  VAR
                p.mb-0  
                p.mb-0                                        ENTERO numero1;
                p.mb-0                                        ENTERO numero2;
                p.mb-0  INICIO
                p.mb-0                                        ESCRIBIR ( "Escriba un número" ) ;
                p.mb-0                                        LEER ( numero1 );
                p.mb-0                                        ESCRIBIR( "Escriba un número" ) ;
                p.mb-0                                        LEER ( numero2 ) ;
                p.mb-0                                        numerol > numero2
                p.mb-0                                        ESCRIBIR( numero1 );
                p.mb-0                                        SINO
                p.mb-0                                                  ESCRIBIR( numero2 );
                p.mb-0                                        FINSI
                p.mb-0  FIN
                p.mb-0 

</template>

<script>
export default {
  name: 'Tema8',
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
