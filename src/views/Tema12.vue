<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 12
      h1 Manejo de errores y excepciones
    .row.mb-5
      .col-12
        .p-4.bg-c6
          .row.align-items-center
            .col-lg-3
              figure
                img(src='@/assets/curso/tema12/img1.png', style='width: 360px', alt='').m-auto
            .col-lg-9
              .p-4.bg-c16
                p Las excepciones son errores imprevistos que ocurren en la ejecución de un programa; son anormalidades que impiden o perturban el comportamiento o el flujo normal de las instrucciones de un programa.
                p.mb-0 #[b.txt-c1 El objetivo principal en el manejo de errores es separar el código de la lógica del programa del código de manejo de excepciones. De esta forma, al producirse la anomalía, si ocurre un error y existe un manejador de excepciones, él toma el control de la ejecución del programa.]
    p.mb-5 En JavaScript, el control de errores resulta muy necesario, tal vez más que en otros lenguajes, debido a la dificultad natural para probar aplicaciones o los cambios de versión de intérprete en múltiples navegadores.
    .row.align-items-center.mb-5
      .col-lg-9.mb-4.mb-lg-0
        .row.mb-3
          .col-auto
            figure.mt-1
              img(src='@/assets/curso/tema12/img1.svg', style='width: 70px', alt='').m-auto
          .col
            p.mb-0 La forma más sencilla de disparar un error es con la palabra reservada throw. Este comando permite enviar al intérprete de JavaScript el evento de que ha ocurrido un error, generalmente permite enviar cualquier tipo de dato, pero lo más común es enviar un “Error” como se indica a continuación:
        .row
          .col-12
            .px-4.py-3.bg-c22
              figure
                img(src='@/assets/curso/tema3/img11.svg', style="width:50px" alt='')
          .col-12
            .px-4.py-3.bg-c23
              pre
                p.mb-0  #[span.txt-c7 throw new] #[span.txt-c8 Error](#[span.txt-c9 "No se puede dividir por cero"]);
      .col-lg-3
        figure
          img(src='@/assets/curso/tema12/img2.png', style='width: 360px', alt='').m-auto
    p.mb-5 Existe un tipo de estructura de control en JavaScript que está pendiente de revisar en el flujo de ejecución de un programa para detectar comportamientos inesperados. La estructura es try...catch, que consta de un bloque que intenta la ejecución de una sección de código (contexto) a la espera de que pueda ocurrir una posible excepción. Finalizado el contexto, existe otro denominado catch que tiene un argumento o variable de contexto donde se captura el elemento disparado.
    .row.align-items-center.mb-5
      .col-lg-6.mb-4.mb-lg-0
        .row
          .col-12
            .px-4.py-3.bg-c22
              figure
                img(src='@/assets/curso/tema3/img11.svg', style="width:50px" alt='')
          .col-12
            .px-4.py-3.bg-c23
              pre
                p.mb-0  let numerador = 4;
                p.mb-0  let denominador = 0;
                p.mb-0  var resultado = null;
                p.mb-0  try {
                p.mb-0      if (denominador === 0) {
                p.mb-0          throw new Error("No se puede dividir por cero");
                p.mb-0      } else {
                p.mb-0          resultado = numerador / denominador;
                p.mb-0      }
                p.mb-0  } catch (e) {
                p.mb-0      console.error(e);
                p.mb-0      resultado = null;
                p.mb-0  }
                hr
                p.mb-0  Consola
                p.mb-0  error: Error: No se puede dividir por cero
      .col-lg-6
        figure
          img(src='@/assets/curso/tema12/img3.png', style='width: 500px', alt='').m-auto
    p.mb-5 #[b.txt-c1 En el código se describe un algoritmo que divide dos números y, como se sabe, en este proceso se debe validar que no exista una división por 0, ya que no está definida aritméticamente.]
    .row
      .col-12
        .p-4.bg-c6
          .row.align-items-center
            .col-lg-3
              figure
                img(src='@/assets/curso/tema12/img4.png', style='width: 360px', alt='').m-auto
            .col-lg-9
              .p-4.bg-c16
                p Para eso, existe el contexto try que va desde la línea 4 a la línea 10. Dentro de él se verifica el caso de que el divisor, si es igual a 0, debe disparar una excepción. Ella es capturada en la línea 10 por el contexto catch en la variable e. De esta forma, el contexto de catch de la línea 10 a la 13 maneja la excepción, enviando un mensaje de error y asignando a la variable resultado el valor nulo. Así, la excepción es lanzada y capturada, y el programa no se interrumpe #[b.txt-c1 abruptamente, sino que es controlado a pesar de los problemas que se puedan presentar].

</template>

<script>
export default {
  name: 'Tema12',
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
