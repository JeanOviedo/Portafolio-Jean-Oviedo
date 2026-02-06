// Theme Toggle Logic
function toggleTheme() {
    const root = document.documentElement;
    const isLight = root.getAttribute("data-theme") === "light";
    const logo = document.getElementById("siteLogo");

    if (isLight) {
        root.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        document.getElementById("themeIcon").className = "fas fa-sun";
        if (logo) logo.src = "./img/logo.png";
    } else {
        root.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        document.getElementById("themeIcon").className = "fas fa-moon";
        if (logo) logo.src = "./img/logonegro.png";
    }
}

// Security features
document.addEventListener("contextmenu", e => e.preventDefault());
document.addEventListener("selectstart", e => e.preventDefault());
document.addEventListener("dragstart", e => e.preventDefault());
document.addEventListener("keydown", e => {
    if (
        e.ctrlKey && (e.key === "u" || e.key === "s" || e.key === "c" || e.key === "p" || e.key === "a") ||
        e.key === "F12" ||
        e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")
    ) {
        e.preventDefault();
    }
});

// Tab System Logic
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-btn');
    const panels = document.querySelectorAll('.tab-panel');
    const navLinks = document.querySelectorAll('.menu a');

    function switchTab(tabId) {
        // Update Tabs
        tabs.forEach(tab => {
            tab.classList.toggle('active', tab.dataset.tab === tabId);
        });

        // Update Panels
        panels.forEach(panel => {
            const isActive = (tabId === 'tech' && panel.id === 'techPanel') ||
                (tabId === 'av' && panel.id === 'avPanel');

            panel.classList.toggle('active', isActive);
        });
    }

    // Tab Click Event
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            switchTab(tab.dataset.tab);
        });
    });

    // Sync with Navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href === '#portafolio') {
                switchTab('tech');
            } else if (href === '#audiovisual') {
                switchTab('av');
            }
        });
    });
});

document.addEventListener("copy", e => {
    e.preventDefault();
    alert("⚠️ Función de copiado bloqueada");
});

/* ============== Render projects dynamically ============== */
function createProjectCard(key, project) {
    const langData = project[currentLang] || project.es; // Fallback to ES

    const card = document.createElement('article');
    card.className = 'project-card';

    const media = document.createElement('div');
    media.className = 'project-media';
    media.style.backgroundImage = `url('${project.image}')`;
    media.setAttribute('aria-hidden', 'true');

    const body = document.createElement('div');
    body.className = 'project-body';

    const h3 = document.createElement('h3'); h3.textContent = langData.title;
    const p = document.createElement('p'); p.textContent = langData.description;

    const linksDiv = document.createElement('div'); linksDiv.className = 'project-links';

    // external links icons
    (project.links || []).forEach(l => {
        const a = document.createElement('a'); a.className = 'icon-link'; a.href = l.url; a.target = '_blank'; a.rel = 'noopener';
        a.innerHTML = `<i class='${l.icon}'></i>`;
        linksDiv.appendChild(a);
    });

    // CTA Icon Button
    const btn = document.createElement('button');
    btn.className = 'project-cta-icon';
    btn.setAttribute('aria-label', currentLang === 'en' ? 'View Details' : 'Ver detalles');
    btn.innerHTML = `<i class="far fa-eye"></i>`;
    btn.onclick = () => openProjectModalFromKey(key);
    linksDiv.appendChild(btn);

    body.appendChild(h3); body.appendChild(p); body.appendChild(linksDiv);

    card.appendChild(media); card.appendChild(body);
    return card;
}

function renderProjects(query = '') {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;
    grid.innerHTML = '';

    const normalizedQuery = query.toLowerCase().trim();

    Object.keys(projectData).forEach(key => {
        const project = projectData[key];
        const langData = project[currentLang] || project.es;

        // Search in title and features
        const matchesTitle = langData.title.toLowerCase().includes(normalizedQuery);
        const matchesFeatures = (langData.features || []).some(f => f.toLowerCase().includes(normalizedQuery));
        const matchesTech = (project.technologies || '').toLowerCase().includes(normalizedQuery);

        if (normalizedQuery === '' || matchesTitle || matchesFeatures || matchesTech) {
            const card = createProjectCard(key, project);
            grid.appendChild(card);
        }
    });

    // Show message if no results
    if (grid.children.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--muted);">
            <i class="fas fa-search" style="font-size: 2rem; margin-bottom: 1rem; opacity: 0.5;"></i>
            <p>${currentLang === 'en' ? 'No projects found matching your search.' : 'No se encontraron proyectos que coincidan con tu búsqueda.'}</p>
        </div>`;
    }
}

/* ============== Modal controllers ============== */
function openProjectModalFromKey(key) {
    const project = projectData[key];
    if (!project) return;

    const langData = project[currentLang] || project.es;

    document.getElementById('modalTitle').textContent = langData.title;
    document.getElementById('modalImage').src = project.image;
    document.getElementById('modalImage').alt = `Vista previa de ${langData.title}`;
    document.getElementById('modalDesc').textContent = langData.description;
    document.getElementById('modalTech').textContent = project.technologies;

    const features = document.getElementById('modalFeatures'); features.innerHTML = '';
    (langData.features || []).forEach(f => { const li = document.createElement('li'); li.textContent = f; features.appendChild(li); });

    const linksContainer = document.getElementById('modalLinks'); linksContainer.innerHTML = '';
    (project.links || []).forEach(l => {
        const a = document.createElement('a'); a.href = l.url; a.target = '_blank'; a.rel = 'noopener';
        a.innerHTML = `<button class='modal-action' style='margin-right:8px'><i class='${l.icon}' style='margin-right:8px'></i> ${l.text}</button>`;
        linksContainer.appendChild(a);
    });

    if ((project.links || []).length === 0) {
        linksContainer.innerHTML = `<span style='color:var(--muted)'>Sin enlaces públicos disponibles</span>`;
    }

    const modal = document.getElementById('projectModal');
    modal.style.display = 'flex'; modal.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden';
    // trap focus (simple)
    document.getElementById('modalTitle').focus();
}

function closeProjectModal() { const modal = document.getElementById('projectModal'); modal.style.display = 'none'; modal.setAttribute('aria-hidden', 'true'); document.body.style.overflow = 'auto'; }

/* ============== Init ============== */
document.addEventListener('DOMContentLoaded', () => {
    // Load saved theme
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);

    const btnIcon = document.getElementById("themeIcon");
    if (btnIcon) {
        btnIcon.className = savedTheme === "light" ? "fas fa-moon" : "fas fa-sun";
    }

    const logo = document.getElementById("siteLogo");
    if (logo) {
        logo.src = savedTheme === "light" ? "./img/logonegro.png" : "./img/logo.png";
    }

    // Load language
    changeLanguage(currentLang);

    // Render projects
    renderProjects();

    // close modal when clicking overlay
    const projectModal = document.getElementById('projectModal');
    if (projectModal) {
        projectModal.addEventListener('click', function (e) {
            if (e.target === this) closeProjectModal();
        });
    }

    // If redirected after formsubmit with #correo-enviado show success
    const formFeedback = document.getElementById('formFeedback');
    if (window.location.hash && window.location.hash.includes('correo-enviado') && formFeedback) {
        formFeedback.style.display = 'block';
        formFeedback.style.background = 'rgba(50,205,50,0.08)';
        formFeedback.style.color = 'var(--success)';
        formFeedback.textContent = '¡Gracias! Tu mensaje fue enviado.';
        setTimeout(() => { formFeedback.style.display = 'none'; }, 6000);
    }

    // Search input event
    const searchInput = document.getElementById('projectSearch');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value;
            if (typeof renderProjects === 'function') renderProjects(term);
            if (typeof loadVideos === 'function') loadVideos(term);
        });
    }
});

document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { closeProjectModal(); } });

/* ============== Contact form: validation + feedback ============== */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        const formFeedback = document.getElementById('formFeedback');

        let valid = true;
        let errorMsg = dictionaries[currentLang]["form.error.empty"];

        // Reset styles
        [name, email, message].forEach(f => {
            f.style.borderColor = 'rgba(255, 255, 255, 0.04)';
        });

        // 1. Check empty fields
        [name, email, message].forEach(f => {
            if (!f.value || f.value.trim() === '') {
                valid = false;
                f.style.borderColor = 'rgba(255,50,50,0.8)';
            }
        });

        // 2. Simple email format check
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value.trim() !== '' && !emailPattern.test(email.value)) {
            valid = false;
            email.style.borderColor = 'rgba(255,50,50,0.8)';
            errorMsg = dictionaries[currentLang]["form.error.email"];
        }

        // 3. Language check
        const allowedPattern = /^[a-zA-Z0-9\s.,!?'"@#$%&*()_\-+=;:\u00C0-\u00FF\u00A1\u00BF]+$/;
        if (message.value.trim() !== '' && !allowedPattern.test(message.value)) {
            valid = false;
            message.style.borderColor = 'rgba(255,50,50,0.8)';
            errorMsg = dictionaries[currentLang]["form.error.language"];
        }

        if (!valid && formFeedback) {
            e.preventDefault();
            formFeedback.style.display = 'block';
            formFeedback.style.background = 'rgba(255,100,100,0.06)';
            formFeedback.style.color = '#ff6b6b';
            formFeedback.textContent = errorMsg;
            setTimeout(() => { formFeedback.style.display = 'none'; }, 4500);
            return;
        }

        if (formFeedback) {
            formFeedback.style.display = 'block';
            formFeedback.style.background = 'rgba(50,205,50,0.08)';
            formFeedback.style.color = 'var(--success)';
            formFeedback.textContent = dictionaries[currentLang]["form.success.sending"];
        }
    });
}

/* ============== Mobile nav toggle ============== */
const navToggle = document.getElementById('navToggle');
if (navToggle) {
    navToggle.addEventListener('click', () => {
        const menu = document.getElementById('menu');
        if (menu) menu.classList.toggle('active');
    });
}

/* ============== Scroll Spy for Active Link ============== */
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.menu a');

const observerOptions = {
    threshold: 0.3
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});
