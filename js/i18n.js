const dictionaries = {
    es: {
        "nav.home": "Inicio",
        "nav.about": "Sobre mí",
        "nav.projects": "Proyectos",
        "nav.contact": "Contacto",
        "hero.role": "Ingeniero de Sistemas · Full Stack",
        "hero.location": "Montería, Colombia · Disponible para trabajo remoto",
        "about.title": "Hola, soy Jean Carlos Oviedo",
        "about.subtitle": "Desarrollador Full Stack · Especialista en Automatización & Agentes IA",
        "about.bio": "Ingeniero de Sistemas apasionado por la tecnología, enfocado en el desarrollo de aplicaciones web modernas, la automatización de procesos y la creación de agentes inteligentes. Me especializo en transformar ideas complejas en soluciones digitales eficientes, integrando arquitecturas robustas con interfaces intuitivas. Desde el desarrollo de sistemas a medida hasta la implementación de flujos de trabajo con IA, mi objetivo es potenciar la productividad y la innovación en cada proyecto.",
        "edu.title": "Formación Académica",
        "edu.master.title": "Maestría en Inteligencia Artificial y Computación",
        "edu.master.desc": "Estudio actualmente - Virtual.",
        "edu.1.title": "Especialización en Gestión y Seguridad de Bases de Datos",
        "edu.1.desc": "Administración y seguridad de datos.",
        "edu.2.title": "Ingeniero de Sistemas",
        "edu.2.desc": "Desarrollo, arquitectura y gestión TI.",
        "edu.3.title": "Tecnólogo en Análisis y Desarrollo de Sistemas",
        "edu.3.desc": "Bases en programación y análisis.",
        "edu.4.title": "Técnico en Informática y Redes",
        "edu.4.desc": "Formación técnica en mantenimiento de equipos de cómputo, instalación de redes y soporte a usuarios.",
        "exp.title": "Experiencia Laboral",
        "exp.1.role": "KONECTA — Analista de Desarrollo (2022 - 2025)",
        "exp.1.desc": "Construcción de aplicaciones y componentes, aseguramiento de calidad mediante pruebas y validaciones, y soporte técnico para garantizar la disponibilidad y correcto funcionamiento de los sistemas.",
        "exp.2.role": "AZULURBANO — Desarrollador Web (2020 - 2021)",
        "exp.2.desc": "Construcción de soluciones software enfocadas en usabilidad y rendimiento, enfocada en la inmobiliaria y sus necesidades.",
        "exp.3.role": "FREELANCE — Desarrollo de Apps y Web (2016 - 2020)",
        "exp.3.desc": "Primeros pasos en desarrollo web con PHP y aplicaciones de escritorio con Lua. Desarrollo web para diversas empresas como el Colegio Militar Almirante Colón, Fundación Santa Isabel y Postes Camel, entre otras.",
        "skills.title": "Formación Complementaria & Certificaciones",
        "projects.title": "Proyectos Destacados",
        "contact.title": "Contacto",
        "contact.subtitle": "¿Tienes un proyecto en mente? Escríbeme y lo construimos juntos.",
        "form.name": "Nombre",
        "form.name.placeholder": "Tu nombre",
        "form.email": "Correo",
        "form.email.placeholder": "tunombre@mail.com",
        "form.message": "Mensaje",
        "form.message.placeholder": "Cuéntame sobre tu proyecto",
        "form.send": "Enviar mensaje",
        "footer.rights": "Todos los derechos reservados.",
        "form.error.empty": "Por favor completa todos los campos correctamente.",
        "form.error.email": "Por favor ingresa un correo electrónico válido.",
        "form.error.language": "Solo se permiten mensajes en Inglés o Español (caracteres no válidos detectados).",
        "form.success.sending": "Enviando mensaje..."
    },
    en: {
        "nav.home": "Home",
        "nav.about": "About Me",
        "nav.projects": "Projects",
        "nav.contact": "Contact",
        "hero.role": "Systems Engineer · Full Stack",
        "hero.location": "Montería, Colombia · Available for Remote Work",
        "about.title": "Hi, I am Jean Carlos Oviedo",
        "about.subtitle": "Full Stack Developer · Automation Specialist & AI Agents",
        "about.bio": "Systems Engineer passionate about technology, focused on modern web application development, process automation, and intelligent agent creation. I specialize in transforming complex ideas into efficient digital solutions, integrating robust architectures with intuitive interfaces. From custom system development to AI workflow implementation, my goal is to boost productivity and innovation in every project.",
        "edu.title": "Academic Background",
        "edu.master.title": "Master's in Artificial Intelligence and Computing",
        "edu.master.desc": "Currently studying - Virtual.",
        "edu.1.title": "Specialization in Database Management and Security",
        "edu.1.desc": "Data administration and security.",
        "edu.2.title": "Systems Engineer",
        "edu.2.desc": "Development, architecture, and IT management.",
        "edu.3.title": "Technologist in Systems Analysis and Development",
        "edu.3.desc": "Programming and analysis foundations.",
        "edu.4.title": "Technician in Computing and Networks",
        "edu.4.desc": "Technical training in computer equipment maintenance, network installation, and user support.",
        "exp.title": "Work Experience",
        "exp.1.role": "KONECTA — Development Analyst (2022 - 2025)",
        "exp.1.desc": "Application and component construction, quality assurance through testing and validation, and technical support to ensure system availability and proper functioning.",
        "exp.2.role": "AZULURBANO — Web Developer (2020 - 2021)",
        "exp.2.desc": "Building software solutions focused on usability and performance, tailored to the real estate industry and its needs.",
        "exp.3.role": "FREELANCE — App & Web Development (2016 - 2020)",
        "exp.3.desc": "First steps in web development with PHP and desktop applications with Lua. Web development for various companies such as Colegio Militar Almirante Colón, Fundación Santa Isabel, and Postes Camel, among others.",
        "skills.title": "Complementary Training & Certifications",
        "projects.title": "Featured Projects",
        "contact.title": "Contact",
        "contact.subtitle": "Have a project in mind? Write to me and let's build it together.",
        "form.name": "Name",
        "form.name.placeholder": "Your name",
        "form.email": "Email",
        "form.email.placeholder": "yourname@mail.com",
        "form.message": "Message",
        "form.message.placeholder": "Tell me about your project",
        "form.send": "Send Message",
        "footer.rights": "All rights reserved.",
        "form.error.empty": "Please complete all fields correctly.",
        "form.error.email": "Please enter a valid email address.",
        "form.error.language": "Only English or Spanish messages are allowed (invalid characters detected).",
        "form.success.sending": "Sending message..."
    }
};

let currentLang = localStorage.getItem("lang") || "es";

function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;

    // Update static text
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (dictionaries[lang][key]) {
            if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
                if (el.hasAttribute("placeholder")) {
                    el.setAttribute("placeholder", dictionaries[lang][key]);
                }
            } else {
                el.textContent = dictionaries[lang][key];
            }
        }
    });

    // Update placeholders explicitly if separate keys
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (dictionaries[lang][key]) {
            el.setAttribute("placeholder", dictionaries[lang][key]);
        }
    });

    // Update toggle button text
    const langBtn = document.getElementById("langToggle");
    if (langBtn) {
        langBtn.textContent = lang === "es" ? "EN" : "ES";
    }

    // Re-render projects
    if (typeof renderProjects === "function") {
        renderProjects();
    }
}

function toggleLanguage() {
    const newLang = currentLang === "es" ? "en" : "es";
    changeLanguage(newLang);
}
