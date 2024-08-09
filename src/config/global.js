export default {
  global: {
    componenteFormativo: 'Programación y algoritmia básica',
    descripcionCurso:
      'El componente formativo en algoritmia enseña la definición y aplicación de algoritmos para resolver problemas de manera eficaz. Incluye el pensamiento algorítmico, fases de diseño, ejemplos prácticos, y herramientas como pseudocódigo y diagramas de flujo, proporcionando una base sólida para la programación y la optimización de procesos computacionales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Introducción a la algoritmia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Pensamiento algorítmico',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Solución de problemas y programación',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Análisis del problema (entenderlo)',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Desarrollo de la creatividad: elementos, modelos, fases y sus objetivos',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Lógica matemática',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Componentes de la lógica matemática',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Ejercicios de lógica proposicional',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Metodología de algoritmos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Análisis',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Diseño',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Pruebas de escritorio o trazas',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Diagramas de flujo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Uso de identificadores y palabras reservadas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Operadores y jerarquía en los operadores',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Estructuras de control secuencial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Estructura condicional',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Estructuras de iteración o repetitivas',
            hash: 't_7_2',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Estructura de datos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Conceptos básicos de programación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema10',
        numero: '10',
        titulo: 'Sintaxis del lenguaje JavaScript',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '10.1',
            titulo: 'Tipos de datos, operadores y orden de evaluación',
            hash: 't_10_1',
          },
          {
            numero: '10.2',
            titulo: 'Expresiones y comentarios',
            hash: 't_10_2',
          },
          {
            numero: '10.3',
            titulo: 'Estructuras de selección',
            hash: 't_10_3',
          },
          {
            numero: '10.4',
            titulo: 'Estructuras de repetición',
            hash: 't_10_4',
          },
          {
            numero: '10.5',
            titulo: 'Estructuras de datos',
            hash: 't_10_5',
          },
          {
            numero: '10.6',
            titulo: 'Estructuras de salto',
            hash: 't_10_6',
          },
          {
            numero: '10.7',
            titulo: 'Métodos de ordenamiento y búsqueda',
            hash: 't_10_7',
          },
        ],
      },
      {
        nombreRuta: 'tema11',
        numero: '11',
        titulo: 'Depuración y fallas de sintaxis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema12',
        numero: '12',
        titulo: 'Manejo de errores y excepciones',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228118_CF07_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Introducción a la algoritmia',
      referencia:
        'Magic Markers. (2015). ¿Qué es un algoritmo? [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=U3CGMyjzlvM',
    },
    {
      tema: 'Introducción a la algoritmia',
      referencia:
        'Calderón, J. P. (2015). Fundamentos de lógica matemática. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=9zYDaZhS7Ac',
    },
    {
      tema: 'Diagramas de flujo',
      referencia:
        'Material_Audiovisual_100319633. (6 de enero de 2021). App Diagrams.net (básico para diagramas de flujo). [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/jdnqmFpqTvo',
    },
    {
      tema: 'Diagramas de flujo',
      referencia:
        'Enrique Olivares. (23 de febrero de 2016). Introducción a utilizar el programa DIA para diagramas de flujo a nivel bachillerato. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/DnRx9D7QWg8',
    },
    {
      tema: 'Diagramas de flujo',
      referencia:
        'DiscoDurodeRoer. (27 de abril de 2015). Ejercicios PseInt - Básicos #1 - Empezando por lo básico. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/DHIi4dcaMEc',
    },
    {
      tema: 'Diagramas de flujo',
      referencia:
        'Insituto de Informática Uach. (08 de septiembre de 2020). Cómo descargar Draw.io 2 para dibujar diagramas de flujo. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=encz3h8TLWA',
    },
    {
      tema: 'Entornos de codificación e instalación JavaScript',
      referencia:
        'Code Compadre. (30 de junio de 2020). How to Download and Install Visual Studio Code for Windows 10.',
      tipo: 'Video',
      link: 'https://youtu.be/KpzkPlh_HsU',
    },
    {
      tema: 'Entornos de codificación e instalación JavaScript',
      referencia:
        'VideoMarketingViral. (11 de enero de 2020). Descargar Google Chrome para PC 2021 (WINDOWS 7/8/10).',
      tipo: 'Video',
      link: 'https://youtu.be/V-M2rMBhgKc',
    },
    {
      tema: 'Entornos de codificación e instalación JavaScript',
      referencia: 'MDN. (2021). Array - JavaScript.',
      tipo: 'Documentación técnica',
      link:
        'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math',
    },
    {
      tema: 'Entornos de codificación e instalación JavaScript',
      referencia: 'MDN. (2021). Expresiones y operadores - JavaScript',
      tipo: 'Documentación técnica',
      link:
        'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators',
    },
    {
      tema: 'Entornos de codificación e instalación JavaScript',
      referencia: 'MDN. (2021). Funciones - JavaScript.',
      tipo: 'Documentación técnica',
      link:
        'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions',
    },
    {
      tema: 'Entornos de codificación e instalación JavaScript',
      referencia: 'MDN. (2021). Array.prototype.find() - JavaScript.',
      tipo: 'Documentación técnica',
      link:
        'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find',
    },
    {
      tema: 'Entornos de codificación e instalación JavaScript',
      referencia:
        'Choque, R. C. (10 de mayo de 2020). Cómo usar la consola de Google Chrome para JavaScript. [Video] YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/Hf3n-p3VYx4',
    },
    {
      tema: 'Entornos de codificación e instalación JavaScript',
      referencia:
        'Autodidacta, F. (11 de mayo de 2017). Depurar o hacer debug a JavaScript con Google Chrome. [Video] YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/I388w3wDkjc',
    },
    {
      tema: 'Entornos de codificación e instalación JavaScript',
      referencia:
        'Framebits. (19 de enero de 2020). Descargar e instalar Node Js en Windows 10.',
      tipo: 'Video',
      link: 'https://youtu.be/v0x1Ku5Tgac',
    },
  ],
  glosario: [
    {
      termino: 'Algoritmos',
      significado:
        'conjunto ordenado y finito de operaciones que permite hallar la solución de un problema.',
    },
    {
      termino: 'Compilación',
      significado:
        'proceso de traducción del código fuente de un programa a un lenguaje de bajo nivel ejecutable.',
    },
    {
      termino: 'Depuración',
      significado:
        'proceso de identificar y corregir errores o fallos en un programa informático.',
    },
    {
      termino: 'Diseño',
      significado:
        'proceso de planificar la solución a un problema a través de un algoritmo.',
    },
    {
      termino: 'Flujo',
      significado:
        'secuencia de pasos que determina el orden en que se ejecutan las instrucciones de un programa.',
    },
    {
      termino: 'Modularidad',
      significado:
        'propiedad de un sistema que permite dividirlo en partes más pequeñas y manejables.',
    },
    {
      termino: 'Optimización',
      significado:
        'mejora del rendimiento o eficiencia de un programa mediante la reducción de recursos utilizados o el aumento de la velocidad de ejecución.',
    },
    {
      termino: 'Programación',
      significado:
        'proceso de crear <i>software</i> escribiendo, probando, depurando y manteniendo el código fuente en un lenguaje de programación.',
    },
    {
      termino: 'Pseudocódigo',
      significado:
        'forma simplificada de representar un algoritmo utilizando expresiones del lenguaje natural.',
    },
    {
      termino: 'Variables',
      significado:
        'elementos que almacenan datos que pueden cambiar durante la ejecución de un programa.',
    },
  ],
  referencias: [
    {
      referencia:
        'Arellano, J., Solar, R., Nieva, S., y Canedo, P. (2022). Compilador e intérprete en línea de diagramas de flujo con fines didácticos [Imagen]. RITI Journal, 10(20), 82. ',
      link: 'https://doi.org/10.36825/RITI.10.20.007',
    },
    {
      referencia:
        'Autodidacta, F. (11 de mayo de 2017). Depurar o hacer debug a JavaScript con Google Chrome. [Video]. ',
      link: 'https://www.youtube.com/watch?v=I388w3wDkjc&t=192s',
    },
    {
      referencia:
        'Choque, R. C. (10 de mayo de 2020). Cómo usar la consola de Google Chrome para JavaScript. [Video]. ',
      link: 'https://www.youtube.com/watch?v=Hf3n-p3VYx4',
    },
    {
      referencia:
        'Eduteka.org. (2008). Sembrando las semillas para una sociedad más creativa. Dr. Mitchel Resnick. [Traducción]. Universidad ICESI. ',
      link: 'http://www.eduteka.org/ScratchResnickCreatividad.php',
    },
    {
      referencia:
        'Framebits. (19 de enero de 2020). Descargar e instalar Node Js en Windows 10. [Video]. ',
      link: 'https://youtu.be/v0x1Ku5Tgac',
    },
    {
      referencia:
        'López, J., C. (2009). Educación básica algoritmos y programación. Guía para docentes. Segunda edición. Fundación Gabriel Piedrahita Uribe. ',
      link:
        'https://libros.metabiblioteca.org/bitstream/001/169/8/AlgoritmosProgramacion.pdf',
    },
    {
      referencia: 'MDN. (2021). Array - JavaScript. ',
      link:
        'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array#',
    },
    {
      referencia: 'MDN. (2021a). Expresiones y operadores - JavaScript. ',
      link:
        'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators',
    },
    {
      referencia: 'MDN. (2021b). Math - JavaScript. ',
      link:
        'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math',
    },
    {
      referencia: 'MDN. (2021c). Array.prototype.find() - JavaScript. ',
      link:
        'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find',
    },
    {
      referencia: 'MDN. (2021d). Funciones - JavaScript ',
      link:
        'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions',
    },
    {
      referencia:
        'MDN. (2021e). Tipos de datos y estructuras en JavaScript - JavaScript. ',
      link: 'https://developer.mozilla.org/es/docs/Web/',
    },
    {
      referencia:
        'Medina, H., M. (2018). Estrategias metodológicas para el desarrollo del pensamiento lógico-matemático. Didasc@lia: Didáctica y Educación, 9(1), p. 125-132. ',
      link: 'https://dialnet.unirioja.es/descarga/articulo/6595073.pdf',
    },
    {
      referencia:
        'Real Academia Española (2020). Algoritmo | Diccionario de la lengua española. RAE. ',
      link: 'https://dle.rae.es/algoritmo',
    },
    {
      referencia:
        'Real Academia Española (2020). Programa | Diccionario de la lengua española. RAE. ',
      link: 'https://dle.rae.es/programa',
    },
    {
      referencia:
        'Resnick, M. (2007). Sembrando semillas para una sociedad más creativa. ',
      link: '',
    },
    {
      referencia:
        'Resnick, M. (2007). Todo lo que Realmente Necesito Saber (Acerca del Pensamiento Creativo) Lo Aprendí (Estudiando Cómo Aprenden los niños) en el Kindergarten. EDUTEKA. ',
      link:
        'https://eduteka.icesi.edu.co/pdfdir/RESNICK_kindergarten-learning-approach.pdf',
    },
    {
      referencia:
        'Rojas, A., V. y Ñacato C., J. (1980). Técnica de flujogramas I. Editora Andina. ',
      link:
        'https://biblioteca.epn.edu.ec/cgi-bin/koha/opac-detail.pl?biblionumber=27333',
    },
    {
      referencia:
        'Suppes, P., y Hill, S. (2021). Introducción a la lógica matemática. Editorial Reverté. ',
      link:
        'https://www.reverte.com/libro/introduccion-a-la-logica-matematica_91496/',
    },
    {
      referencia:
        'Tapia, L. (1995). Cómo desarrollar el razonamiento lógico matemático. Editorial Universitaria. ',
      link:
        'https://www.worldcat.org/title/como-desarrollar-el-razonamiento-logico-y-matematico/oclc/50414752',
    },
    {
      referencia:
        'The Development Stages. (2024). PostgreSQL: Ejercicios prácticos. ',
      link: 'https://thedevelopmentstages.com/postgresql-ejercicios-practicos/',
    },
    {
      referencia:
        'TOMi.digital. (s.f.). Valores de las tablas de verdad. Colegio Nuestra Señora de las Victorias. ',
      link:
        'https://tomi.digital/es/59552/valores-de-las-tablas-de-verdad?utm_source=google&utm_medium=seo',
    },
    {
      referencia: 'Vázquez, J. (2012). Análisis y diseño de algoritmos. ',
      link:
        'https://www.academia.edu/8646162/An%C3%A1lisis_y_dise%C3%B1o_de_algoritmos',
    },
    {
      referencia: 'Vedia, M. (2018). Cuándo usar Return en JavaScript. ',
      link:
        'https://medium.com/@mvtercero85/cuando-usar-return-en-javascript-7b80e025eb7f',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Henry Eduardo Bastidas Paruma',
          cargo: 'Experto Temático',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Peter Emerson Pinchao',
          cargo: 'Experto Temático',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora Instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yerson Fabián Zárate Saavedra',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        //{
        //  nombre: 'Nombre',
        //  cargo: 'Animador y Producción audiovisual',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
        {
          nombre: 'Edgar Mauricio Cortés García',
          cargo: 'Actividad Didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        //{
        //  nombre: 'Jaime Hernán Tejada Llano',
        //  cargo: 'Validador de Recursos Educativos Digitales',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
