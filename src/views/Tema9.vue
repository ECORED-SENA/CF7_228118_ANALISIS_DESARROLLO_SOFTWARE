<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 9
      h1 Conceptos básicos de programación
    .row.bg-c33
      .col-12
        .px-5
          p.mb-5 Programar es el proceso de crear software escribiendo, probando, depurando y dando mantenimiento a las instrucciones del computador en un lenguaje de programación. A este conjunto de instrucciones se le denomina código fuente del software creado.
          .row.mb-5
            .col-lg-auto.pe-0.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema9/img2.png', style='width: 360px', alt='').m-auto
            .col.bg-c5
              .row.align-items-center.h-100
                .col-12
                  .p-4
                    p.text-white.mb-0 La lógica matemática es la disciplina que trata de métodos de razonamiento. En un nivel elemental, la lógica proporciona reglas y técnicas para determinar si un argumento dado es válido o no. El razonamiento lógico se emplea en matemáticas para demostrar teoremas; en ciencias de la computación para verificar si los programas son correctos; en las ciencias físicas y naturales para sacar conclusiones de experimentos; y en las ciencias sociales y en la vida cotidiana para resolver una multitud de problemas. Ciertamente, se usa de forma constante el razonamiento lógico para realizar cualquier actividad (EcuRed, s.f.).
          p.mb-5 Un lenguaje de programación es diferente al lenguaje de códigos que puede entender la máquina (lenguaje de máquina). Los lenguajes de programación pueden dividirse en dos categorías: lenguajes interpretados o lenguajes compilados, a saber:
          .row.mb-5
            .col.bg-c34.pe-0
              .row.align-items-center.h-100
                .col-12
                  .p-4
                    p.text-white El código creado debe traducirse de manera que el procesador del computador o smartphone pueda comprenderlo, a este proceso se le llama compilación.
                    p.text-white.mb-0 El lenguaje compilado necesita que antes de ser ejecutado, se convierta el código fuente escrito a un lenguaje de máquina.
            .col-lg-auto.d-none.d-lg-block.ps-0
              figure
                img(src='@/assets/curso/tema9/img3.png', style='width: 360px', alt='').m-auto
          p.mb-5 #[b.txt-c1 Las características son:]
          .row.justify-content-center.mb-5
            .col-lg-8
              .row
                .col-12
                  hr
                  .p-2
                    .row.align-items-center
                      .col-auto
                        figure
                          img(src='@/assets/curso/tema9/img1.svg', style='width: 60px', alt='Primero').m-auto
                      .col
                        p.mb-0 Para un lenguaje compilado, luego de compilar un programa se deben crear ejecutables para cada uno de los sistemas operativos en los que se vaya a utilizar. Es decir, un programa compilado en Linux no servirá en Windows o en Mac OS.
              .row
                .col-12
                  hr
                  .p-2
                    .row.align-items-center
                      .col-auto
                        figure
                          img(src='@/assets/curso/tema9/img2.svg', style='width: 60px', alt='Segundo').m-auto
                      .col
                        p.mb-0 Cuando se está ejecutando un programa escrito en un lenguaje compilado, es mucho más rápido que uno interpretado, dado que se encuentra en código de máquina.
              .row
                .col-12
                  hr
                  .p-2
                    .row.align-items-center
                      .col-auto
                        figure
                          img(src='@/assets/curso/tema9/img3.svg', style='width: 60px', alt='Tercero').m-auto
                      .col
                        p.mb-0 Los lenguajes compilados están optimizados para el momento de la ejecución, pero esto significa más trabajo para el programador (compilarlo).
                  hr
    p.mb-5 JavaScript, al igual que cualquier otro lenguaje de programación, tiene algunas características especiales: sintaxis, modelo de datos, etc. JavaScript es un lenguaje esencial tanto para cualquier principiante en programación como para quienes ya saben programar, debido a que las diferencias con otros lenguajes de programación son numerosas. Es un lenguaje necesario para el desarrollo de aplicaciones web y móviles hoy en día.
    .row.mb-5
      .col-lg-7.order-2.order-lg-1
        .p-4.bg-c32
          p En adelante, JavaScript será el lenguaje de programación abordado. Es un lenguaje interpretado que inicialmente fue creado para que los navegadores lo interpreten, y hoy en día muchos dispositivos tienen el intérprete que permite correr programas escritos en él. Por lo tanto, será más sencillo el trabajo tanto para la máquina como para el programador.
          figure.d-flex.justify-content-end
            img(src='@/assets/curso/tema9/img4.svg', style="width: 70px" alt='')
      .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/tema9/img4.png', style="width: 445px" alt='').m-auto
    p.mb-5 #[b Entornos de codificación e instalación JavaScript.]
    .row
      .col-12
        .p-4.bg-c6
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema9/img5.svg', style='width: 80px', alt='').m-auto
            .col
              p.text-white.mb-0 En su mayoría, los navegadores (Chrome, Mozilla, Edge) tienen intérprete de JavaScript y, adicionalmente, se puede instalar el intérprete para el sistema operativo de preferencia (Framebits, 2020).
              p.text-white.mb-0 Dado lo anterior, existen herramientas, manuales y videos que se emplean para el desarrollo de programas en JavaScript.

</template>

<script>
export default {
  name: 'Tema9',
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
