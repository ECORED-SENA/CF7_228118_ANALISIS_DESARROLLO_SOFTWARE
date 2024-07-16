<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.bg-c1
      .col-12
        .px-5
          p.mb-5(data-aos="fade-right") La algoritmia es una disciplina fundamental en la programación de computadoras, ya que permite la resolución precisa y eficiente de problemas mediante la aplicación de una serie de pasos detallados y ordenados. La correcta comprensión y aplicación de algoritmos es esencial para el desarrollo de #[i software], pues un algoritmo bien diseñado no solo garantiza una solución adecuada a un problema, sino que también optimiza el rendimiento y la eficacia del programa resultante. #[b.txt-c1 La base de esta práctica radica en la capacidad de descomponer problemas complejos en operaciones más simples y manejables, facilitando así su resolución].
          .row.align-items-center.mb-5
            .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
              .row.mb-3
                .p-4.bg-c2
                  p.mb-0 El pensamiento algorítmico es una habilidad crucial que permite abordar problemas desde diferentes enfoques lógicos, llevando siempre a una solución eficiente. A través de la algoritmia, los aprendices desarrollan la capacidad de estructurar secuencias de pasos que, aunque puedan variar en su ejecución, convergen en una solución común al problema planteado. Esta habilidad es especialmente relevante en contextos donde se requiere procesar grandes volúmenes de datos o realizar múltiples operaciones en un corto período, tareas en las que las computadoras sobresalen debido a su capacidad de realizar operaciones matemáticas básicas de manera extremadamente rápida.
              .row.align-items-center
                .col-md-auto.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/intro/img1.svg', style='width: 150px', alt='').m-auto
                .col
                  p.mb-0 En este componente formativo, se explorarán los conceptos básicos de algoritmos, su definición, y las fases para su diseño y desarrollo. Se analizarán ejemplos prácticos que ilustran cómo los algoritmos pueden aplicarse en situaciones cotidianas, así como en problemas más complejos. Además, se abordarán las herramientas y metodologías utilizadas en la elaboración de algoritmos, incluyendo el uso de pseudocódigo y diagramas de flujo.
            .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/intro/img2.svg', style='width: 350px', alt='').m-auto
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
