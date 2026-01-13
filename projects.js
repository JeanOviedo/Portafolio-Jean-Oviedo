const projectData = {
  'dienteok': {
    image: 'img/dientesok.jpg',
    technologies: 'Next.js 16 (App Router), TailwindCSS v4, Lucide React, TypeScript',
    links: [
      { url: 'https://github.com/JeanOviedo/DientesOk', icon: 'fab fa-github', text: 'GitHub' },
      { url: 'https://jeanoviedo.github.io/DientesOk/', icon: 'fas fa-globe-americas', text: 'Demo' }
    ],
    es: {
      title: 'DienteOk - Premium Dental Clinic Template',
      description: 'Plantilla web moderna y de alta gama diseñada para clínicas dentales y profesionales médicos. Construida con Next.js 16 y TailwindCSS v4, ofrece una estética "Future Health" premium con efectos de glassmorphism, animaciones avanzadas y un diseño totalmente responsivo.',
      features: [
        'Diseño Premium "Future Health"',
        'Suite de Seguridad (Anti-robo de contenido)',
        'Totalmente Responsive',
        'Rendimiento Optimizado (Next.js App Router)'
      ]
    },
    en: {
      title: 'DienteOk - Premium Dental Clinic Template',
      description: 'High-end, modern web template designed for dental clinics and medical professionals. Built with Next.js 16 and TailwindCSS v4, it offers a premium "Future Health" aesthetic with glassmorphism effects, advanced animations, and a fully responsive layout.',
      features: [
        'Premium "Future Health" Design',
        'Security Suite (Content theft protection)',
        'Fully Responsive',
        'Performance Optimized (Next.js App Router)'
      ]
    }
  },
  'medicalok': {
    image: 'img/medical.jpg',
    technologies: 'Next.js 16, Tailwind CSS v4, TypeScript, Framer Motion, Radix UI',
    links: [
      { url: 'https://github.com/JeanOviedo/MedicalOk', icon: 'fab fa-github', text: 'GitHub' },
      { url: 'https://jeanoviedo.github.io/MedicalOk/', icon: 'fas fa-globe-americas', text: 'Demo' }
    ],
    es: {
      title: 'MedicalOk - Premium Medical Clinic Template',
      description: 'Plantilla frontend moderna, rápida y totalmente responsive diseñada para clínicas, hospitales y consultorios médicos. Construida con Next.js 16, Tailwind CSS v4 y Framer Motion, ofrece una experiencia de usuario de primera clase.',
      features: [
        'Directorio de Doctores filtrable por especialidad',
        'Perfiles detallados de doctores y servicios',
        'Agendamiento de Citas (Wizard step-by-step)',
        'Diseño Premium con Shadcn/ui y Framer Motion',
        'Modo Oscuro/Claro persistente',
        'Optimización SEO y Performance'
      ]
    },
    en: {
      title: 'MedicalOk - Premium Medical Clinic Template',
      description: 'Modern, fast, and fully responsive frontend template designed for clinics, hospitals, and medical offices. Built with Next.js 16, Tailwind CSS v4, and Framer Motion, offering a top-class user experience.',
      features: [
        'Doctor Directory filterable by specialty',
        'Detailed doctor and service profiles',
        'Appointment Booking (Wizard step-by-step)',
        'Premium Design with Shadcn/ui and Framer Motion',
        'Persistent Dark/Light Mode',
        'SEO and Performance Optimization'
      ]
    }
  },
  'cloudsales': {
    image: 'img/agenteventas.jpg',
    technologies: 'Python 3.10+, FastAPI, LangGraph, OpenRouter, FAISS, React 19, Vite, TailwindCSS, Framer Motion',
    links: [
      { url: 'https://github.com/JeanOviedo/AgenteVentas', icon: 'fab fa-github', text: 'GitHub' }
    ],
    es: {
      title: 'CloudSales AI',
      description: 'Plataforma de automatización de ventas de nivel empresarial diseñada para empresas tecnológicas B2B. Este sistema utiliza inteligencia artificial avanzada para cualificar leads, responder consultas y gestionar el ciclo de ventas de manera autónoma.',
      features: [
        'Chat Inteligente con entendimiento de intención',
        'Catálogo de Productos visual',
        'Manejo de Objeciones autónomo',
        'Memoria Conversacional con LangGraph',
        'RAG (Búsqueda Aumentada por Recuperación)',
        'Arquitectura Cliente-Servidor moderna'
      ]
    },
    en: {
      title: 'CloudSales AI',
      description: 'Enterprise-level sales automation platform designed for B2B tech companies. This system uses advanced AI to qualify leads, answer queries, and autonomously manage the sales cycle.',
      features: [
        'Intelligent Chat with intent understanding',
        'Visual Product Catalog',
        'Autonomous Objection Handling',
        'Conversational Memory with LangGraph',
        'RAG (Retrieval Augmented Generation)',
        'Modern Client-Server Architecture'
      ]
    }
  },
  'lexgravity': {
    image: 'img/lexgravity.jpg',
    technologies: 'Next.js, Tailwind CSS, Framer Motion, PostgreSQL, OpenRouter, OpenAI, Anthropic',
    links: [
      { url: 'https://github.com/JeanOviedo/lex-gravity', icon: 'fab fa-github', text: 'GitHub' }
    ],
    es: {
      title: 'LexGravity - Agente Legal Inteligente Multi-IA',
      description: 'Plataforma avanzada de orquestación de IA para el sector legal. Realiza consultas jurídicas complejas usando múltiples LLMs (Claude, GPT-4) con fallback automático y RAG por país.',
      features: [
        'Orquestación Multi-IA con Fallback Automático',
        'Motor RAG (LegalCorpus) por jurisdicción',
        'Agente Legal con contexto jurídico estricto',
        'Frontend Premium con Next.js y Tailwind',
        'Modo Estricto/Creativo configurable',
        'Manejo de errores y timeouts robusto'
      ]
    },
    en: {
      title: 'LexGravity - Multi-AI Smart Legal Agent',
      description: 'Advanced AI orchestration platform for the legal sector. Performs complex legal queries using multiple LLMs (Claude, GPT-4) with automatic fallback and country-specific RAG.',
      features: [
        'Multi-AI Orchestration with Automatic Fallback',
        'RAG Engine (LegalCorpus) by jurisdiction',
        'Legal Agent with strict legal context',
        'Premium Frontend with Next.js and Tailwind',
        'Configurable Strict/Creative Mode',
        'Robust error and timeout handling'
      ]
    }
  },
  'peluqueria': {
    image: 'img/peluqueria.jpg',
    technologies: 'Next.js 16, TypeScript, MySQL, Prisma, Tailwind CSS 4',
    links: [
      { url: 'https://github.com/JeanOviedo/Peluqueria', icon: 'fab fa-github', text: 'GitHub' }
    ],
    es: {
      title: 'PeluquerIA - Platform',
      description: 'Sistema de gestión para peluquerías desarrollado con Next.js 16, diseñado para administrar citas, personal y servicios de manera eficiente.',
      features: [
        'Gestión de citas y personal',
        'Administración de servicios',
        'Autenticación segura con JWT',
        'Notificaciones por Email',
        'Interfaz moderna con Framer Motion',
        'Base de datos MySQL con Prisma'
      ]
    },
    en: {
      title: 'PeluquerIA - Platform',
      description: 'Management system for hair salons built with Next.js 16, designed to efficiently manage appointments, staff, and services.',
      features: [
        'Appointment and staff management',
        'Service administration',
        'Secure authentication with JWT',
        'Email Notifications',
        'Modern interface with Framer Motion',
        'MySQL database with Prisma'
      ]
    }
  },
  'rescue': {
    image: 'img/rescupets.jpg',
    technologies: 'React, Node.js, Express, MongoDB, Firebase',
    links: [
      { url: 'https://github.com/andresguaita/frontend-rescue-pets', icon: 'fab fa-github', text: 'GitHub' },
      { url: 'https://www.youtube.com/watch?v=KwE2cDZ62IA', icon: 'fas fa-globe-americas', text: 'Demo' }
    ],
    es: {
      title: 'Rescue Pets App',
      description: 'Aplicación completa para el rescate de mascotas, desarrollada con tecnologías modernas de frontend y backend. Permite gestionar adopciones, reportar mascotas perdidas y conectar a dueños con adoptantes.',
      features: [
        'Sistema de registro y autenticación de usuarios',
        'Gestión completa de perfiles de mascotas',
        'Sistema de reportes de mascotas perdidas/encontradas',
        'Interfaz intuitiva para adopciones',
        'Integración con mapas para ubicación de mascotas',
        'Notificaciones en tiempo real'
      ]
    },
    en: {
      title: 'Rescue Pets App',
      description: 'Complete application for pet rescue, improved with modern frontend and backend technologies. Allows managing adoptions, reporting lost pets, and connecting owners with adopters.',
      features: [
        'User registration and authentication system',
        'Complete pet profile management',
        'Lost/found pet reporting system',
        'Intuitive interface for adoptions',
        'Map integration for pet location',
        'Real-time notifications'
      ]
    }
  },

  'restaurante': {
    image: 'img/restaurante.jpg',
    technologies: 'n8n, Node.js, APIs REST, Zapier',
    links: [
      { url: 'https://www.youtube.com/watch?v=61YLHIVcA7I', icon: 'fas fa-globe-americas', text: 'Ver Demo' }
    ],
    es: {
      title: 'Automatizado Restaurante',
      description: 'Sistema de automatización completo para restaurantes que procesa datos desde APIs externas, aplicando validaciones y generando reportes automáticos.',
      features: [
        'Procesamiento automático de pedidos',
        'Integración con APIs de restaurantes',
        'Validaciones de datos en tiempo real',
        'Generación de reportes automáticos',
        'Notificaciones inteligentes',
        'Dashboard de control'
      ]
    },
    en: {
      title: 'Restaurant Automation',
      description: 'Complete automation system for restaurants that processes data from external APIs, applying validations and generating automatic reports.',
      features: [
        'Automatic order processing',
        'Restaurant API integration',
        'Real-time data validation',
        'Automatic report generation',
        'Intelligent notifications',
        'Control Dashboard'
      ]
    }
  },
  'automatizado': {
    image: 'img/zapier.jpg',
    technologies: 'Zapier, Airtable, GoHighLevel, ClickUp, APIs',
    links: [],
    es: {
      title: 'Automatización con Zapier, Airtable, GHL y ClickUp',
      description: 'Sistema complejo de automatización que integra múltiples plataformas para gestión eficiente de solicitudes y tareas empresariales.',
      features: [
        'Automatización de formularios',
        'Clasificación automática de tareas',
        'Integración multi-plataforma',
        'Notificaciones inteligentes',
        'Workflows personalizados',
        'Reporting automático'
      ]
    },
    en: {
      title: 'Automation with Zapier, Airtable, GHL & ClickUp',
      description: 'Complex automation system integrating multiple platforms for efficient management of business requests and tasks.',
      features: [
        'Form automation',
        'Automatic task classification',
        'Multi-platform integration',
        'Intelligent notifications',
        'Custom workflows',
        'Automatic reporting'
      ]
    }
  },
  'onescript': {
    image: 'img/konecta.jpg',
    technologies: 'React, Form.io, OneScript, JavaScript',
    links: [
      { url: 'https://onescript.konecta.cloud', icon: 'fas fa-globe-americas', text: 'Ver Plataforma' }
    ],
    es: {
      title: 'Componentes React para Konecta',
      description: 'Componentes personalizados desarrollados con React para la plataforma Konecta.cloud, integrando Form.io con OneScript para gestión avanzada de casos y campañas.',
      features: [
        'Componentes reutilizables',
        'Integración con Form.io',
        'Gestión de casos y campañas',
        'Interfaz de usuario avanzada',
        'Validaciones personalizadas',
        'Optimización de rendimiento'
      ]
    },
    en: {
      title: 'React Components for Konecta',
      description: 'Custom components developed with React for the Konecta.cloud platform, integrating Form.io with OneScript for advanced case and campaign management.',
      features: [
        'Reusable components',
        'Form.io integration',
        'Case and campaign management',
        'Advanced user interface',
        'Custom validations',
        'Performance optimization'
      ]
    }
  },
  'maq': {
    image: 'img/maq.jpg',
    technologies: 'HTML5, Tailwind CSS, JavaScript',
    links: [
      { url: 'https://github.com/JeanOviedo/Frontend-Maquetacion', icon: 'fab fa-github', text: 'GitHub' },
      { url: 'https://jeanoviedo.github.io/Frontend-Maquetacion/', icon: 'fas fa-globe-americas', text: 'Ver Sitio' }
    ],
    es: {
      title: 'Maquetación',
      description: 'Proyecto de maquetación web responsive que demuestra habilidades en diseño moderno y técnicas de CSS avanzadas. Incluye componentes reutilizables y diseño adaptativo.',
      features: [
        'Diseño completamente responsive',
        'Componentes modulares y reutilizables',
        'Animaciones CSS modernas',
        'Optimización de rendimiento',
        'Accesibilidad web (WCAG)',
        'Compatibilidad cross-browser'
      ]
    },
    en: {
      title: 'Layout Design',
      description: 'Responsive web layout project demonstrating skills in modern design and advanced CSS techniques. Includes reusable components and adaptive design.',
      features: [
        'Fully responsive design',
        'Modular and reusable components',
        'Modern CSS animations',
        'Performance optimization',
        'Web accessibility (WCAG)',
        'Cross-browser compatibility'
      ]
    }
  },
  'fifa': {
    image: 'img/fifa.jpg',
    technologies: 'JavaScript, HTML5, CSS3, FIFA API',
    links: [
      { url: 'https://github.com/JeanOviedo/Fifa', icon: 'fab fa-github', text: 'GitHub' }
    ],
    es: {
      title: 'Fifa 21',
      description: 'Aplicación web interactiva que consume la API oficial de FIFA para mostrar estadísticas, jugadores y equipos. Incluye búsqueda avanzada y visualización de datos.',
      features: [
        'Consumo de API REST de FIFA',
        'Búsqueda y filtrado de jugadores',
        'Estadísticas detalladas de equipos',
        'Interfaz de usuario intuitiva',
        'Visualización de datos en tiempo real',
        'Responsive design'
      ]
    },
    en: {
      title: 'Fifa 21',
      description: 'Interactive web application consuming the official FIFA API to show statistics, players, and teams. Includes advanced search and data visualization.',
      features: [
        'FIFA REST API consumption',
        'Player search and filtering',
        'Detailed team statistics',
        'Intuitive user interface',
        'Real-time data visualization',
        'Responsive design'
      ]
    }
  },
  'rece': {
    image: 'img/rece.jpg',
    technologies: 'React, JavaScript, CSS3, Local Storage',
    links: [
      { url: 'https://github.com/JeanOviedo/Recetax', icon: 'fab fa-github', text: 'GitHub' }
    ],
    es: {
      title: 'Recetax',
      description: 'Sistema de gestión de menús para hoteles desarrollado con React. Permite crear, editar y gestionar menús diarios, platos y precios de manera eficiente.',
      features: [
        'Gestión completa de menús',
        'Sistema de categorías de platos',
        'Cálculo automático de precios',
        'Interfaz de administración intuitiva',
        'Almacenamiento local de datos',
        'Exportación de menús en PDF'
      ]
    },
    en: {
      title: 'Recetax',
      description: 'Menu management system for hotels developed with React. Allows creating, editing, and managing daily menus, dishes, and prices efficiently.',
      features: [
        'Complete menu management',
        'Dish category system',
        'Automatic price calculation',
        'Intuitive administration interface',
        'Local data storage',
        'Menu export to PDF'
      ]
    }
  },
  'pokex': {
    image: 'img/capturapokex.jpg',
    technologies: 'React, Node.js, PokeAPI, CSS3',
    links: [
      { url: 'https://github.com/JeanOviedo/Pokex', icon: 'fab fa-github', text: 'GitHub' }
    ],
    es: {
      title: 'Pokex',
      description: 'Aplicación web interactiva sobre el universo Pokémon. Incluye pokedex completa, búsqueda de Pokémon, estadísticas y evoluciones.',
      features: [
        'Pokedex completa con todos los Pokémon',
        'Búsqueda por nombre o tipo',
        'Información detallada de cada Pokémon',
        'Sistema de favoritos',
        'Animaciones y efectos visuales',
        'Modo offline limitado'
      ]
    },
    en: {
      title: 'Pokex',
      description: 'Interactive web application about the Pokémon universe. Includes complete pokedex, Pokémon search, statistics, and evolutions.',
      features: [
        'Complete Pokedex with all Pokémon',
        'Search by name or type',
        'Detailed information for each Pokémon',
        'Favorites system',
        'Animations and visual effects',
        'Limited offline mode'
      ]
    }
  },
  'ahorked': {
    image: 'img/capturahorked.jpg',
    technologies: 'JavaScript, HTML5, CSS3',
    links: [
      { url: 'https://github.com/JeanOviedo/Ahorked', icon: 'fab fa-github', text: 'GitHub' },
      { url: 'https://jeanoviedo.github.io/Ahorked/', icon: 'fas fa-globe-americas', text: 'Jugar' }
    ],
    es: {
      title: 'Ahorked',
      description: 'Juego clásico del ahorcado desarrollado con tecnologías web puras. Incluye múltiples categorías, niveles de dificultad y sistema de puntuación.',
      features: [
        'Múltiples categorías de palabras',
        'Tres niveles de dificultad',
        'Sistema de puntuación',
        'Animaciones del ahorcado',
        'Efectos de sonido',
        'Responsive design'
      ]
    },
    en: {
      title: 'Ahorked',
      description: 'Classic hangman game developed with pure web technologies. Includes multiple categories, difficulty levels, and scoring system.',
      features: [
        'Multiple word categories',
        'Three difficulty levels',
        'Scoring system',
        'Hangman animations',
        'Sound effects',
        'Responsive design'
      ]
    }
  },
  'progresuss': {
    image: 'img/capturaprogresuss.jpg',
    technologies: 'HTML5, CSS3, JavaScript, PHP',
    links: [
      { url: 'https://www.legalprogresuss.com.co/', icon: 'fas fa-globe-americas', text: 'Ver Sitio' }
    ],
    es: {
      title: 'Progresuss',
      description: 'Sitio web corporativo para una firma de abogados especializada en servicios legales. Diseño profesional con información clara y accesible.',
      features: [
        'Diseño corporativo profesional',
        'Secciones de servicios legales',
        'Formulario de contacto integrado',
        'Optimización SEO',
        'Carga rápida y eficiente',
        'Compatible con todos los navegadores'
      ]
    },
    en: {
      title: 'Progresuss',
      description: 'Corporate website for a law firm specializing in legal services. Professional design with clear and accessible information.',
      features: [
        'Professional corporate design',
        'Legal services sections',
        'Integrated contact form',
        'SEO optimization',
        'Fast and efficient loading',
        'Compatible with all browsers'
      ]
    }
  },
  'encriptex': {
    image: 'img/encriptex.jpg',
    technologies: 'JavaScript, HTML5, CSS3',
    links: [
      { url: 'https://github.com/JeanOviedo/Encriptex', icon: 'fab fa-github', text: 'GitHub' },
      { url: 'https://jeanoviedo.github.io/Encriptex/', icon: 'fas fa-globe-americas', text: 'Usar Herramienta' }
    ],
    es: {
      title: 'Encriptex',
      description: 'Herramienta de encriptación y desencriptación de texto desarrollada para Oracle y Alura Latam. Algoritmos de encriptación personalizados.',
      features: [
        'Encriptación y desencriptación de texto',
        'Algoritmos personalizados seguros',
        'Interfaz simple e intuitiva',
        'Copia al portapapeles',
        'Validación de entrada',
        'Responsive design'
      ]
    },
    en: {
      title: 'Encriptex',
      description: 'Text encryption and decryption tool developed for Oracle and Alura Latam. Custom encryption algorithms.',
      features: [
        'Text encryption and decryption',
        'Secure custom algorithms',
        'Simple and intuitive interface',
        'Copy to clipboard',
        'Input validation',
        'Responsive design'
      ]
    }
  },
  'cinex': {
    image: 'img/capturacinex.jpg',
    technologies: 'JavaScript, HTML5, CSS3, TMDB API',
    links: [
      { url: 'https://github.com/JeanOviedo/Cinex', icon: 'fab fa-github', text: 'GitHub' },
      { url: 'https://jeanoviedo.github.io/Cinex/', icon: 'fas fa-globe-americas', text: 'Explorar' }
    ],
    es: {
      title: 'Cinex',
      description: 'Aplicación web para explorar y descubrir películas y series. Incluye búsqueda, filtros por género y información detallada de cada título.',
      features: [
        'Búsqueda de películas y series',
        'Filtros por género y año',
        'Información detallada de títulos',
        'Valoraciones y reseñas',
        'Lista de favoritos',
        'Interfaz moderna y atractiva'
      ]
    },
    en: {
      title: 'Cinex',
      description: 'Web application to explore and discover movies and series. Includes search, genre filters, and detailed information for each title.',
      features: [
        'Movie and series search',
        'Genre and year filters',
        'Detailed title information',
        'Ratings and reviews',
        'Favorites list',
        'Modern and attractive interface'
      ]
    }
  },
  'azul': {
    image: 'img/azulurbano.jpg',
    technologies: 'HTML5, CSS3, JavaScript, WordPress',
    links: [
      { url: 'http://azulurbano.com/', icon: 'fas fa-globe-americas', text: 'Ver Sitio' }
    ],
    es: {
      title: 'Azul Urbano',
      description: 'Sitio web corporativo para servicios urbanos y ambientales. Diseño moderno que refleja la misión de sostenibilidad y desarrollo urbano.',
      features: [
        'Diseño corporativo moderno',
        'Secciones de servicios ambientales',
        'Blog integrado',
        'Formulario de contacto',
        'Optimización para motores de búsqueda',
        'Diseño responsive completo'
      ]
    },
    en: {
      title: 'Azul Urbano',
      description: 'Corporate website for urban and environmental services. Modern design reflecting the mission of sustainability and urban development.',
      features: [
        'Modern corporate design',
        'Environmental services sections',
        'Integrated blog',
        'Contact form',
        'Search engine optimization',
        'Full responsive design'
      ]
    }
  },
  'zinu': {
    image: 'img/zinuplay.jpg',
    technologies: 'HTML5, CSS3, JavaScript, React',
    links: [
      { url: 'https://zinuplay.com/', icon: 'fas fa-globe-americas', text: 'Visitar' }
    ],
    es: {
      title: 'ZinuPlay',
      description: 'Plataforma de entretenimiento digital con contenido multimedia. Incluye streaming, juegos y comunidad interactiva.',
      features: [
        'Plataforma de streaming',
        'Sistema de juegos interactivos',
        'Comunidad de usuarios',
        'Contenido multimedia diverso',
        'Interfaz de usuario moderna',
        'Soporte multi-dispositivo'
      ]
    },
    en: {
      title: 'ZinuPlay',
      description: 'Digital entertainment platform with multimedia content. Includes streaming, games, and interactive community.',
      features: [
        'Streaming platform',
        'Interactive game system',
        'User community',
        'Diverse multimedia content',
        'Modern user interface',
        'Multi-device support'
      ]
    }
  },
  'mistareas': {
    image: 'img/mistareas.png',
    technologies: 'React, JavaScript, CSS3, Local Storage',
    links: [
      { url: 'https://github.com/JeanOviedo/MisTareasReact', icon: 'fab fa-github', text: 'GitHub' }
    ],
    es: {
      title: 'Mis Tareas',
      description: 'Aplicación de gestión de tareas personales desarrollada con React. Permite crear, editar, eliminar y organizar tareas de manera eficiente.',
      features: [
        'Creación y edición de tareas',
        'Sistema de categorías',
        'Marcado de tareas completadas',
        'Almacenamiento local persistente',
        'Interfaz intuitiva y moderna',
        'Funcionalidad drag & drop'
      ]
    },
    en: {
      title: 'My Tasks',
      description: 'Personal task management application developed with React. Allows creating, editing, deleting, and organizing tasks efficiently.',
      features: [
        'Task creation and editing',
        'Category system',
        'Task completion marking',
        'Persistent local storage',
        'Intuitive and modern interface',
        'Drag & drop functionality'
      ]
    }
  },

};
