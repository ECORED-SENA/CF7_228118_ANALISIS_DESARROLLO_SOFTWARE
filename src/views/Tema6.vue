<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Operadores y jerarquía en los operadores
    .row.bg-c24
      .col-12
        .px-5
          p.mb-5 Los operadores son símbolos que sirven para manipular datos. Y en un algoritmo es necesario dejar un espacio en blanco a cada lado del signo aritmético. Los operadores y las funciones que realizan se clasifican como se indica a continuación:
          .row.mb-4
            .col-md-3.bg-c26
              .p-2.h-100.align-items-center
                .row.align-items-center.h-100
                  .col-md-auto
                    figure.mb-3.mb-lg-0
                      img(src='@/assets/curso/tema6/img1.svg', style="width: 100px" alt='').m-auto
                  .col
                    p.text-center.mb-0 #[b Aritméticos:]
            .col.bg-c27
              .p-2.h-100.align-items-center
                .row.align-items-center.h-100
                  .col-12
                    p.text-white.mb-0 Permiten realizar operaciones entre datos de tipo numérico y dan como resultado otro valor de tipo numérico.
                    p.text-white.mb-0 #[b Ejemplo:] producto o multiplicación (*); división (/); suma (+); resta (-); asignación (=).
          .row.mb-4
            .col-md-3.bg-c26
              .p-2.h-100.align-items-center
                .row.align-items-center.h-100
                  .col-md-auto
                    figure.mb-3.mb-lg-0
                      img(src='@/assets/curso/tema6/img1.svg', style="width: 100px" alt='').m-auto
                  .col
                    p.text-center.mb-0 #[b Alfanuméricos:]
            .col.bg-c27
              .p-2.h-100.align-items-center
                .row.align-items-center.h-100
                  .col-12
                    p.text-white.mb-0 Permiten operar con datos de tipo carácter (letras) o cadenas de texto. La mayoría de los lenguajes de programación admiten el operador + para realizar la concatenación (unión) de caracteres o cadenas.
          .row.mb-4
            .col-md-3.bg-c26
              .p-2.h-100.align-items-center
                .row.align-items-center.h-100
                  .col-md-auto
                    figure.mb-3.mb-lg-0
                      img(src='@/assets/curso/tema6/img1.svg', style="width: 100px" alt='').m-auto
                  .col
                    p.text-center.mb-0 #[b Relacionales:]
            .col.bg-c27
              .p-2.h-100.align-items-center
                .row.align-items-center.h-100
                  .col-12
                    p.text-white.mb-0 Permiten la comparación entre datos del mismo tipo de dato y dan como resultado dos valores posibles: verdadero o falso. Ejemplo: igual a (=); menor que (<); mayor que (>,) mayor e igual que (>=).
          .row.mb-4
            .col-md-3.bg-c26
              .p-2.h-100.align-items-center
                .row.align-items-center.h-100
                  .col-md-auto
                    figure.mb-3.mb-lg-0
                      img(src='@/assets/curso/tema6/img1.svg', style="width: 100px" alt='').m-auto
                  .col
                    p.text-center.mb-0 #[b Lógicos:]
            .col.bg-c27
              .p-2.h-100.align-items-center
                .row.align-items-center.h-100
                  .col-12
                    p.text-white.mb-0 Posibilitan la evaluación lógica de dos expresiones de tipo lógico. Dan como resultado uno de dos valores posibles: verdadero o falso.
                    p.text-white.mb-0 #[b Ejemplo:] negación (no); conjunción (y); disyunción(o).
    .row.mb-4.pt-4(data-aos="fade-down")
      .col-auto.bg-c4
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img2.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white Jerarquía en los operadores
    p.mb-5 Las computadoras ejecutan los operadores en un orden establecido. El siguiente es el orden (jerarquía) para ejecutar operadores:
    .row.align-items-center.mb-5
      .col-lg-7.order-2.order-lg-1
        .row
          .col-12
            .p-4.bg-c13
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
                  p.mb-0 Signo (e.g., -2) si un valor es positivo o negativo.
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span c.
                  |
                  p.mb-0 Potencias (^) y Raíces (sqrt); Productos y Divisiones (* y /), en este mismo orden.
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
                li.d-flex.mb-0
                  .lista-ol--cuadro__vineta
                    span i.
                  |
                  p.mb-0 Disyunción (o).
      .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/tema6/img1.png', style='width: 470px', alt='').m-auto
    p.mb-5 #[b.txt-c1 El siguiente ejemplo permite comprender mejor la jerarquía de operadores:]
    .titulo-sexto.color-acento-contenido.mb-4
      p.mb-0 #[b Tabla 5.] Orden de ejecución de una expresión matemática
    .tabla-a.color-acento-contenido.mb-5 
      table
        thead
          tr
            th(style="width: 15%") Orden
            th(style="width: 15%") Operación
            th Explicación y expresión resultante
        tbody(style="background-color: #F6F6F6")
          tr
            td.text-center 1
            td.text-center 7 + 8
            td
              p Primero que todo lo que más valor tiene en la jerarquía son los paréntesis de manera que y en particular los más interiores de esta forma el computador se interesará en resolver primero el contenido de #[b (7 + 8)]. Y el resultado será #[b 15].
              p.mb-0 De esta forma, la expresión queda reducida a:
              p.mb-0 #[b (2 + 15 * 16 + 3 ^ 2) /4 + 5]
          tr
            td.text-center 2
            td.text-center 3 ^ 2
            td
              p De la expresión resultante luego de la operación 1, se observa que nuevamente hay un paréntesis por reducir, de manera que la computadora intentará resolver su contenido primero, como dentro del paréntesis está la expresión de elevar al cuadrado el número #[b 3 (3 ^ 2)] que tiene como resultado #[b 9], 
              p.mb-0 la expresión resultante sería:
              p.mb-0 #[b (2 + 15 * 16 + 9) /4 + 5]
          tr
            td.text-center 3
            td.text-center 15 * 16
            td
              p.mb-0 De los paréntesis de la expresión resultante la operación de más jerarquía es la multiplicación #[b 15 * 16] que tiene como resultado #[b 240], la expresión resultante sería:
              p.mb-0 #[b (2 + 240 + 9) /4 +5]
          tr
            td.text-center 4
            td.text-center 2 + 24 + 9
            td
              p.mb-0 De la expresión resultante el que tiene mayor precedencia es el paréntesis por lo tanto la suma aritmética de su contenido data como expresión resultante:
              p.mb-0 #[b 251 /4 +5]
          tr
            td.text-center 5
            td.text-center 251 / 4
            td
              p.mb-0 De la expresión resultante el operador de mayor jerarquía es la división y da como resultado #[b 62.75] que en la siguiente operación se le sumará el valor de #[b 5] la expresión resultante será:
              p.mb-0 #[b 62,75 +5]
          tr
            td.text-center 6
            td.text-center 62,75 + 5
            td
              p.mb-0 #[b 67,75]
    p.mb-5 #[b.txt-c1 A continuación, se revisan dos ejemplos:]
    TabsB.color-acento-contenido.bg-c28
      .py-4.py-md-5(titulo="Ejemplo 1" :icono="require('@/assets/curso/tema6/img2.svg')")
        .row.justify-content-center.align-items-center
          .col-10.col-lg-6.mb-4.mb-lg-0
            .row.mb-3
              .col-auto
                .p-2.txt-c5
                  p.text-white.mb-0 #[b Ejemplo 1]
            p Una computadora debe ejecutar las siguientes operaciones. Se debe escribir en el orden que la computadora ejecutará las operaciones de la siguiente expresión matemática: (2 + (7 + 8) * 16 + 3^2) / 4 + 5.
            p.mb-0 #[B Solución:]
            p.mb-0 Primero que todo, lo que más valor tiene en la jerarquía son los paréntesis, en particular los más interiores. De esta forma, la computadora se interesará en resolver primero el contenido de (7 + 8).
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema6/img2.png', style='width: 390px', alt='').m-auto
      .py-4.py-md-5(titulo="Ejemplo 2" :icono="require('@/assets/curso/tema6/img3.svg')")
        .row.justify-content-center.align-items-center
          .col-10.col-lg-6.mb-4.mb-lg-0
            .row.mb-3
              .col-auto
                .p-2.txt-c5
                  p.text-white.mb-0 #[b Ejemplo 2]
            p Escribir la siguiente ecuación como una expresión que la computadora pueda interpretar en el orden adecuado.
            figure
              img(src='@/assets/curso/tema6/img4.svg', style='width: 260px', alt='')
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema6/img3.png', style='width: 390px', alt='').m-auto

</template>

<script>
export default {
  name: 'Tema6',
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
