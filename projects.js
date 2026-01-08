const projectData = {
  'peluqueria': {
    title: 'PeluquerIA - Platform',
    image: 'img/peluqueria.jpg',
    description: 'Sistema de gestión para peluquerías desarrollado con Next.js 16, diseñado para administrar citas, personal y servicios de manera eficiente.',
    technologies: 'Next.js 16, TypeScript, MySQL, Prisma, Tailwind CSS 4',
    features: [
      'Gestión de citas y personal',
      'Administración de servicios',
      'Autenticación segura con JWT',
      'Notificaciones por Email',
      'Interfaz moderna con Framer Motion',
      'Base de datos MySQL con Prisma'
    ],
    links: [
      { url: 'https://github.com/JeanOviedo/Peluqueria', icon: 'fab fa-github', text: 'GitHub' }
    ]
  },
  'rescue': {
    title: 'Rescue Pets App',
    image: 'img/rescupets.jpg',
    description: 'Aplicación completa para el rescate de mascotas, desarrollada con tecnologías modernas de frontend y backend. Permite gestionar adopciones, reportar mascotas perdidas y conectar a dueños con adoptantes.',
    technologies: 'React, Node.js, Express, MongoDB, Firebase',
    features: [
      'Sistema de registro y autenticación de usuarios',
      'Gestión completa de perfiles de mascotas',
      'Sistema de reportes de mascotas perdidas/encontradas',
      'Interfaz intuitiva para adopciones',
      'Integración con mapas para ubicación de mascotas',
      'Notificaciones en tiempo real'
    ],
    links: [
      { url: 'https://github.com/andresguaita/frontend-rescue-pets', icon: 'fab fa-github', text: 'GitHub' },
      { url: 'https://www.youtube.com/watch?v=KwE2cDZ62IA', icon: 'fas fa-globe-americas', text: 'Demo' }
    ]
  },
  'maq': {
    title: 'Maquetación',
    image: 'img/maq.jpg',
    description: 'Proyecto de maquetación web responsive que demuestra habilidades en diseño moderno y técnicas de CSS avanzadas. Incluye componentes reutilizables y diseño adaptativo.',
    technologies: 'HTML5, Tailwind CSS, JavaScript',
    features: [
      'Diseño completamente responsive',
      'Componentes modulares y reutilizables',
      'Animaciones CSS modernas',
      'Optimización de rendimiento',
      'Accesibilidad web (WCAG)',
      'Compatibilidad cross-browser'
    ],
    links: [
      { url: 'https://github.com/JeanOviedo/Frontend-Maquetacion', icon: 'fab fa-github', text: 'GitHub' },
      { url: 'https://jeanoviedo.github.io/Frontend-Maquetacion/', icon: 'fas fa-globe-americas', text: 'Ver Sitio' }
    ]
  },
  'fifa': {
    title: 'Fifa 21',
    image: 'img/fifa.jpg',
    description: 'Aplicación web interactiva que consume la API oficial de FIFA para mostrar estadísticas, jugadores y equipos. Incluye búsqueda avanzada y visualización de datos.',
    technologies: 'JavaScript, HTML5, CSS3, FIFA API',
    features: [
      'Consumo de API REST de FIFA',
      'Búsqueda y filtrado de jugadores',
      'Estadísticas detalladas de equipos',
      'Interfaz de usuario intuitiva',
      'Visualización de datos en tiempo real',
      'Responsive design'
    ],
    links: [
      { url: 'https://github.com/JeanOviedo/Fifa', icon: 'fab fa-github', text: 'GitHub' }
    ]
  },
  'rece': {
    title: 'Recetax',
    image: 'img/rece.jpg',
    description: 'Sistema de gestión de menús para hoteles desarrollado con React. Permite crear, editar y gestionar menús diarios, platos y precios de manera eficiente.',
    technologies: 'React, JavaScript, CSS3, Local Storage',
    features: [
      'Gestión completa de menús',
      'Sistema de categorías de platos',
      'Cálculo automático de precios',
      'Interfaz de administración intuitiva',
      'Almacenamiento local de datos',
      'Exportación de menús en PDF'
    ],
    links: [
      { url: 'https://github.com/JeanOviedo/Recetax', icon: 'fab fa-github', text: 'GitHub' }
    ]
  },
  'pokex': {
    title: 'Pokex',
    image: 'img/capturapokex.jpg',
    description: 'Aplicación web interactiva sobre el universo Pokémon. Incluye pokedex completa, búsqueda de Pokémon, estadísticas y evoluciones.',
    technologies: 'React, Node.js, PokeAPI, CSS3',
    features: [
      'Pokedex completa con todos los Pokémon',
      'Búsqueda por nombre o tipo',
      'Información detallada de cada Pokémon',
      'Sistema de favoritos',
      'Animaciones y efectos visuales',
      'Modo offline limitado'
    ],
    links: [
      { url: 'https://github.com/JeanOviedo/Pokex', icon: 'fab fa-github', text: 'GitHub' }
    ]
  },
  'ahorked': {
    title: 'Ahorked',
    image: 'img/capturahorked.jpg',
    description: 'Juego clásico del ahorcado desarrollado con tecnologías web puras. Incluye múltiples categorías, niveles de dificultad y sistema de puntuación.',
    technologies: 'JavaScript, HTML5, CSS3',
    features: [
      'Múltiples categorías de palabras',
      'Tres niveles de dificultad',
      'Sistema de puntuación',
      'Animaciones del ahorcado',
      'Efectos de sonido',
      'Responsive design'
    ],
    links: [
      { url: 'https://github.com/JeanOviedo/Ahorked', icon: 'fab fa-github', text: 'GitHub' },
      { url: 'https://jeanoviedo.github.io/Ahorked/', icon: 'fas fa-globe-americas', text: 'Jugar' }
    ]
  },
  'progresuss': {
    title: 'Progresuss',
    image: 'img/capturaprogresuss.jpg',
    description: 'Sitio web corporativo para una firma de abogados especializada en servicios legales. Diseño profesional con información clara y accesible.',
    technologies: 'HTML5, CSS3, JavaScript, PHP',
    features: [
      'Diseño corporativo profesional',
      'Secciones de servicios legales',
      'Formulario de contacto integrado',
      'Optimización SEO',
      'Carga rápida y eficiente',
      'Compatible con todos los navegadores'
    ],
    links: [
      { url: 'https://www.legalprogresuss.com.co/', icon: 'fas fa-globe-americas', text: 'Ver Sitio' }
    ]
  },
  'encriptex': {
    title: 'Encriptex',
    image: 'img/encriptex.jpg',
    description: 'Herramienta de encriptación y desencriptación de texto desarrollada para Oracle y Alura Latam. Algoritmos de encriptación personalizados.',
    technologies: 'JavaScript, HTML5, CSS3',
    features: [
      'Encriptación y desencriptación de texto',
      'Algoritmos personalizados seguros',
      'Interfaz simple e intuitiva',
      'Copia al portapapeles',
      'Validación de entrada',
      'Responsive design'
    ],
    links: [
      { url: 'https://github.com/JeanOviedo/Encriptex', icon: 'fab fa-github', text: 'GitHub' },
      { url: 'https://jeanoviedo.github.io/Encriptex/', icon: 'fas fa-globe-americas', text: 'Usar Herramienta' }
    ]
  },
  'cinex': {
    title: 'Cinex',
    image: 'img/capturacinex.jpg',
    description: 'Aplicación web para explorar y descubrir películas y series. Incluye búsqueda, filtros por género y información detallada de cada título.',
    technologies: 'JavaScript, HTML5, CSS3, TMDB API',
    features: [
      'Búsqueda de películas y series',
      'Filtros por género y año',
      'Información detallada de títulos',
      'Valoraciones y reseñas',
      'Lista de favoritos',
      'Interfaz moderna y atractiva'
    ],
    links: [
      { url: 'https://github.com/JeanOviedo/Cinex', icon: 'fab fa-github', text: 'GitHub' },
      { url: 'https://jeanoviedo.github.io/Cinex/', icon: 'fas fa-globe-americas', text: 'Explorar' }
    ]
  },
  'azul': {
    title: 'Azul Urbano',
    image: 'img/azulurbano.jpg',
    description: 'Sitio web corporativo para servicios urbanos y ambientales. Diseño moderno que refleja la misión de sostenibilidad y desarrollo urbano.',
    technologies: 'HTML5, CSS3, JavaScript, WordPress',
    features: [
      'Diseño corporativo moderno',
      'Secciones de servicios ambientales',
      'Blog integrado',
      'Formulario de contacto',
      'Optimización para motores de búsqueda',
      'Diseño responsive completo'
    ],
    links: [
      { url: 'http://azulurbano.com/', icon: 'fas fa-globe-americas', text: 'Ver Sitio' }
    ]
  },
  'zinu': {
    title: 'ZinuPlay',
    image: 'img/zinuplay.jpg',
    description: 'Plataforma de entretenimiento digital con contenido multimedia. Incluye streaming, juegos y comunidad interactiva.',
    technologies: 'HTML5, CSS3, JavaScript, React',
    features: [
      'Plataforma de streaming',
      'Sistema de juegos interactivos',
      'Comunidad de usuarios',
      'Contenido multimedia diverso',
      'Interfaz de usuario moderna',
      'Soporte multi-dispositivo'
    ],
    links: [
      { url: 'https://zinuplay.com/', icon: 'fas fa-globe-americas', text: 'Visitar' }
    ]
  },
  'mistareas': {
    title: 'Mis Tareas',
    image: 'img/mistareas.png',
    description: 'Aplicación de gestión de tareas personales desarrollada con React. Permite crear, editar, eliminar y organizar tareas de manera eficiente.',
    technologies: 'React, JavaScript, CSS3, Local Storage',
    features: [
      'Creación y edición de tareas',
      'Sistema de categorías',
      'Marcado de tareas completadas',
      'Almacenamiento local persistente',
      'Interfaz intuitiva y moderna',
      'Funcionalidad drag & drop'
    ],
    links: [
      { url: 'https://github.com/JeanOviedo/MisTareasReact', icon: 'fab fa-github', text: 'GitHub' }
    ]
  },
  'restaurante': {
    title: 'Automatizado Restaurante',
    image: 'img/restaurante.jpg',
    description: 'Sistema de automatización completo para restaurantes que procesa datos desde APIs externas, aplicando validaciones y generando reportes automáticos.',
    technologies: 'n8n, Node.js, APIs REST, Zapier',
    features: [
      'Procesamiento automático de pedidos',
      'Integración con APIs de restaurantes',
      'Validaciones de datos en tiempo real',
      'Generación de reportes automáticos',
      'Notificaciones inteligentes',
      'Dashboard de control'
    ],
    links: [
      { url: 'https://www.youtube.com/watch?v=61YLHIVcA7I', icon: 'fas fa-globe-americas', text: 'Ver Demo' }
    ]
  },
  'automatizado': {
    title: 'Automatización con Zapier, Airtable, GHL y ClickUp',
    image: 'img/rescupets.jpg',
    description: 'Sistema complejo de automatización que integra múltiples plataformas para gestión eficiente de solicitudes y tareas empresariales.',
    technologies: 'Zapier, Airtable, GoHighLevel, ClickUp, APIs',
    features: [
      'Automatización de formularios',
      'Clasificación automática de tareas',
      'Integración multi-plataforma',
      'Notificaciones inteligentes',
      'Workflows personalizados',
      'Reporting automático'
    ],
    links: []
  },
  'onescript': {
    title: 'Componentes React para Konecta',
    image: 'img/rescupets.jpg',
    description: 'Componentes personalizados desarrollados con React para la plataforma Konecta.cloud, integrando Form.io con OneScript para gestión avanzada de casos y campañas.',
    technologies: 'React, Form.io, OneScript, JavaScript',
    features: [
      'Componentes reutilizables',
      'Integración con Form.io',
      'Gestión de casos y campañas',
      'Interfaz de usuario avanzada',
      'Validaciones personalizadas',
      'Optimización de rendimiento'
    ],
    links: [
      { url: 'https://onescript.konecta.cloud', icon: 'fas fa-globe-americas', text: 'Ver Plataforma' }
    ]
  }
};
