<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 11
      h1 Depuración y fallas de sintaxis
    .row.align-items-center.mb-5
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema11/img1.png', style='width: 500px', alt='')
      .col-lg-7
        p La principal funcionalidad que se requiere en la depuración del código es la de mostrar salidas parciales de datos para verificar el estado de las variables, o tal vez la necesidad de indicar que se está ejecutando determinada línea de código. #[b.txt-c1 Por lo general, la salida de JavaScript está dirigida hacia un navegador o hacia un flujo de datos de un servidor web, dejando la consola para realizar estas depuraciones].
        .row
          .col-12
            .p-4.bg-c29
              p.mb-0 Hasta ahora se ha utilizado la consola para verificar datos de depuración mediante el uso de #[b console.log()], que es un método usado para verificar mensajes de confirmación de operaciones o notificaciones de éxito en las operaciones del algoritmo. Sin embargo, también existen otros métodos:
    .row.justify-content-center.mb-0.mb-lg-4
      .col-md-10.col-lg-3.mb-4.mb-lg-0
        .p-4.bg-c8.h-100
          .row.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/tema1/img6.svg', style='width: 80px', alt='').m-auto
            .col
              p.text-white.mb-0 #[b console.log()] para enviar y registrar mensajes generales.
      .col-md-10.col-lg-3.mb-4.mb-lg-0
        .p-4.bg-c8.h-100
          .row.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/tema1/img6.svg', style='width: 80px', alt='').m-auto
            .col
              p.text-white.mb-0 #[b console.dir()] para registrar un objeto y visualizar sus propiedades.
      .col-md-10.col-lg-3.mb-4.mb-lg-0
        .p-4.bg-c8.h-100
          .row.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/tema1/img6.svg', style='width: 80px', alt='').m-auto
            .col
              p.text-white.mb-0 #[b console.warn()] para registrar mensajes de alerta.
      .col-md-10.col-lg-3.mb-4.mb-lg-0
        .p-4.bg-c8.h-100
          .row.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/tema1/img6.svg', style='width: 80px', alt='').m-auto
            .col
              p.text-white.mb-0 #[b console.error()] para registrar mensajes de error.
    .row
      .col-lg-6.mb-4.mb-lg-0
        .row
          .col-12
            .px-4.py-3.bg-c22
              figure
                img(src='@/assets/curso/tema3/img11.svg', style="width:50px" alt='')
          .col-12
            .px-4.py-3.bg-c23
              pre
                p.mb-0  const array1 = [5, 12, 8, 130, 44];
                p.mb-0  console.dir(array1);
                p.mb-0  console.warn("Mensaje de alerta " + array1[3]);
                p.mb-0  console.error("Mensaje de alerta " + array1[4]);
                hr
                p.mb-0  Consola
                p.mb-0  [5, 12, 8, 130, 44]
                p.mb-0  Mensaje de alerta 130
                p.mb-0  error: Mensaje de alerta 44
      .col-lg-6
        figure
          img(src='@/assets/curso/tema11/img2.png', style='width: 600px', alt='').m-auto

</template>

<script>
export default {
  name: 'Tema11',
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
