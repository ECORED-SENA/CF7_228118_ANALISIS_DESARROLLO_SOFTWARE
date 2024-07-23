<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Diagramas de flujo
    p.mb-5(data-aos="fade-right") Una forma común de presentar los algoritmos es mediante diagramas de flujo, que consisten en una representación gráfica. #[b.txt-c1 Mientras que en pseudocódigo las sentencias se representaban con proposiciones, en los diagramas de flujo las proposiciones son reemplazadas por figuras].
    .row.mb-5
      .col-12
        .p-4.bg-c3(data-aos="fade-down")
          .titulo-sexto.color-acento-contenido.mb-4
            p.mb-0 #[b Figura 6.] Diagrama de flujo imprimir un entero
          figure
            img(src='@/assets/curso/tema4/img1.svg', style='width: 700px', alt='Diagrama de flujo simple que muestra el proceso de un algoritmo básico, comenzando con Inicio, seguido de Por favor ingrese un número, entrada, Entrada, y terminando con Fin.').m-auto
    .tarjeta.color-primario1.p-3.mb-5(data-aos="fade-left")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-auto
          img(src="@/assets/curso/tema3/img13.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.txt-c4.mb-1 Ventajas de los diagramas de flujo
              p.text-white Es ideal revisar la siguiente infografía sobre las ventajas de la representación gráfica de un algoritmo a través del diagrama de flujo.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/anexo2.pdf')" target="_blank")
                span Descargar
                i.fas.fa-link
    p.mb-5(data-aos="fade-right") #[b.txt-c1 La representación del algoritmo en la figura (algoritmo que calcula el cuadrado y el cubo de un número introducido por teclado y muestra los resultados):]
    .row.mb-5
      .col-12
        .p-4.bg-c3(data-aos="fade-down")
          .titulo-sexto.color-acento-contenido.mb-4
            p.mb-0 #[b Figura 7.] Diagrama de flujo imprimir el cuadrado y el cubo de un entero
          figure
            img(src='@/assets/curso/tema4/img2.svg', style='width: 700px', alt='Diagrama de flujo que muestra el proceso de un algoritmo más complejo, incluyendo la lectura de un número, cálculo del cuadrado y del cubo de dicho número, y la visualización de los resultados.').m-auto
    p(data-aos="fade-right") La Organización Internacional para la Estandarización (ISO, por su sigla en inglés) y el Instituto Nacional Americano de Estandarización (ANSI, por su sigla en inglés), estandarizaron los símbolos que han sido mayormente aceptados en 1985. Con el fin de evitar la utilización de símbolos diferentes para representar procesos iguales (López, 2009).
    p.mb-5(data-aos="fade-right") #[b.txt-c1 Los siguientes son los principales símbolos para crear diagramas de flujo:]
    .row.mb-5
      .col-12
        .p-4.bg-c3(data-aos="fade-left")
          .row.justify-content-center
            .col-md-5.col-lg-3.m-1
              .p-2
                figure.mb-3
                  img(src='@/assets/curso/tema4/img3.svg', style='width: 180px', alt='').m-auto
                p.text-center #[b Inicio/Final]
                p.text-center Se utiliza para indicar el inicio y el final de un diagrama; del Inicio solo puede salir una línea de flujo y al Final solo debe llegar una línea.
            .col-md-5.col-lg-3.m-1
              .p-2
                figure.mb-3
                  img(src='@/assets/curso/tema4/img4.svg', style='width: 180px', alt='').m-auto
                p.text-center #[b Decisión]
                p.text-center Indica la comparación de dos datos y dependiendo del resultado lógico (falso o verdadero) se toma la decisión de seguir un camino del diagrama u otro.
            .col-md-5.col-lg-3.m-1
              .p-2
                figure.mb-3
                  img(src='@/assets/curso/tema4/img5.svg', style='width: 180px', alt='').m-auto
                p.text-center #[b Entrada General]
                p.text-center Entrada/Salida de datos en General (en esta guía, solo se usará para la Entrada).
            .col-md-5.col-lg-3.m-1
              .p-2
                figure.mb-3
                  img(src='@/assets/curso/tema4/img6.svg', style='width: 180px', alt='').m-auto
                p.text-center #[b Iteración]
                p.text-center Indica que una instrucción o grupo de instrucciones deben ejecutarse varias veces.
            .col-md-5.col-lg-3.m-1
              .p-2
                figure.mb-3
                  img(src='@/assets/curso/tema4/img7.svg', style='width: 180px', alt='').m-auto
                p.text-center #[b Entrada por teclado]
                p.text-center Instrucción de entrada de datos por teclado. Indica que el computador debe esperar a que el usuario teclee un dato que se guardará en una variable o constante.
            .col-md-5.col-lg-3.m-1
              .p-2
                figure.mb-3
                  img(src='@/assets/curso/tema4/img8.svg', style='width: 180px', alt='').m-auto
                p.text-center #[b Salida Impresa]
                p.text-center Indica la presentación de uno o varios resultados en forma impresa.
            .col-md-5.col-lg-3.m-1
              .p-2
                figure.mb-3
                  img(src='@/assets/curso/tema4/img9.svg', style='width: 180px', alt='').m-auto
                p.text-center #[b Llamada a subrutina]
                p.text-center Indica la llamada a una subrutina o procedimiento determinado.
            .col-md-5.col-lg-3.m-1
              .p-2
                figure.mb-3
                  img(src='@/assets/curso/tema4/img10.svg', style='width: 180px', alt='').m-auto
                p.text-center #[b Salida en Pantalla]
                p.text-center Instrucción de presentación de mensajes o resultados en pantalla.
            .col-md-5.col-lg-3.m-1
              .p-2
                figure.mb-3
                  img(src='@/assets/curso/tema4/img11.svg', style='width: 180px', alt='').m-auto
                p.text-center #[b Acción/Proceso General]
                p.text-center Indica una acción o instrucción general que debe realizar el computador (cambios de valores de variables, asignaciones, operaciones aritméticas).
            .col-md-5.col-lg-3.m-1
              .p-2
                figure.mb-3
                  img(src='@/assets/curso/tema4/img12.svg', style='width: 180px', alt='').m-auto
                p.text-center #[b Conector]
                p.text-center Indica el enlace de dos partes de un diagrama dentro de la misma página.
            .col-md-5.col-lg-3.m-1
              .p-2
                figure.mb-3
                  img(src='@/assets/curso/tema4/img13.svg', style='width: 180px', alt='').m-auto
                p.text-center #[b Flujo]
                p.text-center Indica el seguimiento lógico del diagrama. También indica el sentido de ejecución de las operaciones.
            .col-md-5.col-lg-3.m-1
              .p-2
                figure.mb-3
                  img(src='@/assets/curso/tema4/img14.svg', style='width: 180px', alt='').m-auto
                p.text-center #[b Conector]
                p.text-center Indica el enlace de dos partes de un diagrama en páginas diferentes.
    .row.mb-4.pt-4(data-aos="fade-down")
      .col-auto.bg-c4
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img2.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white Elaborar diagramas de flujo
    p.mb-5(data-aos="fade-right") Cuando el algoritmo se desea representar como diagrama de flujo, se deben tener en cuenta algunos principios para su elaboración (Rojas y Ñacato, 1980).
    .tarjeta.color-primario1.p-3.mb-5(data-aos="fade-left")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-auto
          img(src="@/assets/curso/tema3/img13.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.txt-c4.mb-1 Diagramas de flujo
              p.text-white A continuación, se puede conocer cómo se estructura el diagrama de flujo.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/anexo3.pdf')" target="_blank")
                span Descargar
                i.fas.fa-link
    .row.mb-4.pt-4(data-aos="fade-down")
      .col-auto.bg-c4
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img2.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white Herramientas digitales para creación y prueba de algoritmos
    p(data-aos="fade-right") Para aprender a reconocer los elementos que componen los diagramas de flujo, se puede hacer uso de la herramienta denominada Draw.io a través del enlace 
      |
      a(href="https://app.diagrams.net/" target="_blank") https://app.diagrams.net/
      |. Con esta herramienta, puede usar una cuenta de correo de Google o misena.edu.co para acceder y crear un nuevo diagrama.
    p.mb-5(data-aos="fade-right") Es ideal ingresar y seleccionar los diagramas que se presentan en la siguiente figura.
    .row
      .col-12
        .p-4.bg-c3(data-aos="fade-left")
          .titulo-sexto.color-acento-contenido.mb-4
            p.mb-0 #[b Figura 8.] Seleccionar formas
          figure
            img(src='@/assets/curso/tema4/img1.png', style='width: 1000px', alt='Captura de pantalla de una herramienta de software de diagramas con la opción Data Flow Diagram seleccionada en el menú de formas.').m-auto

</template>

<script>
export default {
  name: 'Tema4',
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
