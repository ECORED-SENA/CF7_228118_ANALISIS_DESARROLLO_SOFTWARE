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
