/* ============== Helpers ============== */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
}

function isFormField(target) {
    return !!(target && target.closest && target.closest('input, textarea, select, [contenteditable="true"]'));
}

function safeStorageSet(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { /* storage unavailable */ }
}

function safeStorageGet(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
}

/* ============== Theme Toggle ============== */
function applyThemeAssets(theme) {
    const logoSrc = theme === 'light' ? './img/logonegro.png' : './img/logo.png';
    ['siteLogo', 'footerLogo'].forEach(id => {
        const logo = document.getElementById(id);
        if (logo) logo.src = logoSrc;
    });
    const icon = document.getElementById('themeIcon');
    if (icon) icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'light' ? '#f5f6fb' : '#070b16');
}

function toggleTheme() {
    const root = document.documentElement;
    const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    safeStorageSet('theme', next);
    applyThemeAssets(next);
}

/* ============== Security features (form fields stay usable) ============== */
document.addEventListener('contextmenu', e => { if (!isFormField(e.target)) e.preventDefault(); });
document.addEventListener('selectstart', e => { if (!isFormField(e.target)) e.preventDefault(); });
document.addEventListener('dragstart', e => e.preventDefault());
document.addEventListener('keydown', e => {
    const key = (e.key || '').toLowerCase();
    const editingKey = key === 'c' || key === 'a';
    if (editingKey && isFormField(e.target)) return;
    if (
        e.ctrlKey && (key === 'u' || key === 's' || key === 'c' || key === 'p' || key === 'a') ||
        e.key === 'F12' ||
        e.ctrlKey && e.shiftKey && (key === 'i' || key === 'j')
    ) {
        e.preventDefault();
    }
});

document.addEventListener('copy', e => {
    if (isFormField(e.target)) return;
    e.preventDefault();
    alert("⚠️ Función de copiado bloqueada");
});

/* ============== Reveal on scroll ============== */
const revealObserver = 'IntersectionObserver' in window
    ? new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
    : null;

function observeReveal(root) {
    const scope = root || document;
    const items = scope.querySelectorAll ? scope.querySelectorAll('.reveal:not(.is-visible)') : [];
    items.forEach((item, i) => {
        if (!revealObserver || prefersReducedMotion.matches) {
            item.classList.add('is-visible');
            return;
        }
        // Small stagger for siblings rendered together
        if (root) item.style.setProperty('--reveal-delay', `${Math.min(i, 8) * 45}ms`);
        revealObserver.observe(item);
    });
}

/* ============== Tabs ============== */
function switchTab(tabId) {
    document.querySelectorAll('.tab-btn').forEach(tab => {
        const active = tab.dataset.tab === tabId;
        tab.classList.toggle('active', active);
        tab.setAttribute('aria-selected', String(active));
        tab.tabIndex = active ? 0 : -1;
    });

    document.querySelectorAll('.tab-panel').forEach(panel => {
        const isActive = (tabId === 'tech' && panel.id === 'techPanel') ||
            (tabId === 'av' && panel.id === 'avPanel');
        panel.classList.toggle('active', isActive);
        if (isActive) observeReveal(panel);
    });

    updateActiveNav();
}

function getActiveTab() {
    const active = document.querySelector('.tab-btn.active');
    return active ? active.dataset.tab : 'tech';
}

/* ============== Render projects dynamically ============== */
function createProjectCard(key, project, index, featured) {
    const langData = project[currentLang] || project.es; // Fallback to ES
    const detailsLabel = currentLang === 'en' ? 'View Details' : 'Ver detalles';

    const card = el('article', 'project-card reveal' + (featured ? ' is-featured' : ''));

    const media = el('div', 'project-media');
    media.setAttribute('aria-hidden', 'true');
    const img = el('img');
    img.src = project.image;
    img.alt = '';
    img.loading = index < 3 ? 'eager' : 'lazy';
    img.decoding = 'async';
    media.appendChild(img);
    media.appendChild(el('span', 'project-index', String(index + 1).padStart(2, '0')));
    media.addEventListener('click', () => openProjectModalFromKey(key, btn));

    const body = el('div', 'project-body');
    const h3 = el('h3', 'project-title', langData.title);
    const p = el('p', 'project-desc', langData.description);

    const techs = (project.technologies || '').split(',').map(t => t.trim()).filter(Boolean);
    const chips = el('ul', 'chip-list');
    const visible = featured ? 6 : 4;
    techs.slice(0, visible).forEach(t => chips.appendChild(el('li', 'chip', t)));
    if (techs.length > visible) {
        const more = el('li', 'chip chip--more', `+${techs.length - visible}`);
        more.title = techs.slice(visible).join(', ');
        chips.appendChild(more);
    }

    const linksDiv = el('div', 'project-links');

    // external links icons
    (project.links || []).forEach(l => {
        const a = el('a', 'icon-link');
        a.href = l.url; a.target = '_blank'; a.rel = 'noopener';
        a.setAttribute('aria-label', l.text);
        a.title = l.text;
        a.innerHTML = `<i class='${l.icon}' aria-hidden='true'></i>`;
        linksDiv.appendChild(a);
    });

    // CTA Icon Button
    const btn = el('button', 'project-cta-icon');
    btn.type = 'button';
    btn.setAttribute('aria-label', detailsLabel);
    btn.title = detailsLabel;
    btn.innerHTML = `<i class="far fa-eye" aria-hidden="true"></i>`;
    btn.onclick = () => openProjectModalFromKey(key, btn);
    linksDiv.appendChild(btn);

    body.append(h3, p, chips, linksDiv);
    card.append(media, body);
    return card;
}

function renderProjects(query = '') {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;
    grid.innerHTML = '';

    const normalizedQuery = query.toLowerCase().trim();
    let index = 0;

    Object.keys(projectData).forEach(key => {
        const project = projectData[key];
        const langData = project[currentLang] || project.es;

        // Search in title and features
        const matchesTitle = langData.title.toLowerCase().includes(normalizedQuery);
        const matchesFeatures = (langData.features || []).some(f => f.toLowerCase().includes(normalizedQuery));
        const matchesTech = (project.technologies || '').toLowerCase().includes(normalizedQuery);

        if (normalizedQuery === '' || matchesTitle || matchesFeatures || matchesTech) {
            const featured = normalizedQuery === '' && index === 0;
            grid.appendChild(createProjectCard(key, project, index, featured));
            index++;
        }
    });

    // Show message if no results
    if (grid.children.length === 0) {
        grid.innerHTML = `<div class="empty-state">
            <i class="fas fa-search" aria-hidden="true"></i>
            <p>${currentLang === 'en' ? 'No projects found matching your search.' : 'No se encontraron proyectos que coincidan con tu búsqueda.'}</p>
        </div>`;
    }

    observeReveal(grid);
}

/* ============== Modal controllers ============== */
let lastModalTrigger = null;

function openProjectModalFromKey(key, trigger) {
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
        const a = el('a', 'btn btn-primary btn-sm modal-action');
        a.href = l.url; a.target = '_blank'; a.rel = 'noopener';
        a.innerHTML = `<i class='${l.icon}' aria-hidden='true'></i> `;
        a.appendChild(document.createTextNode(l.text));
        linksContainer.appendChild(a);
    });

    if ((project.links || []).length === 0) {
        linksContainer.innerHTML = `<span class="muted">Sin enlaces públicos disponibles</span>`;
    }

    lastModalTrigger = trigger || document.activeElement;
    const modal = document.getElementById('projectModal');
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
    modal.querySelector('.modal-content').scrollTop = 0;
    document.getElementById('modalTitle').focus();
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    if (!modal || !modal.classList.contains('is-open')) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');
    if (lastModalTrigger && document.contains(lastModalTrigger)) lastModalTrigger.focus();
    lastModalTrigger = null;
}

function trapModalFocus(e) {
    const modal = document.getElementById('projectModal');
    if (e.key !== 'Tab' || !modal.classList.contains('is-open')) return;
    const focusables = modal.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])');
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && (document.activeElement === first || document.activeElement.id === 'modalTitle')) {
        e.preventDefault(); last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault(); first.focus();
    }
}

/* ============== Presentation enhancements (text is never changed) ============== */
const BIO_HIGHLIGHTS = {
    es: ['desarrollo de aplicaciones web modernas', 'automatización de procesos', 'agentes inteligentes'],
    en: ['modern web application development', 'process automation', 'intelligent agent creation']
};

function wrapPhrases(node, phrases, tag, className) {
    const text = node.textContent;
    const hits = phrases
        .map(ph => ({ ph, at: text.indexOf(ph) }))
        .filter(h => h.at >= 0)
        .sort((a, b) => a.at - b.at);
    if (!hits.length) return;

    node.textContent = '';
    let cursor = 0;
    hits.forEach(({ ph, at }) => {
        if (at < cursor) return;
        node.appendChild(document.createTextNode(text.slice(cursor, at)));
        node.appendChild(el(tag, className, ph));
        cursor = at + ph.length;
    });
    node.appendChild(document.createTextNode(text.slice(cursor)));
}

function splitRole(node) {
    const text = node.textContent.trim();
    const match = text.match(/^(.+?) — (.+?) \((.+)\)$/);
    if (!match) return;
    const [, company, title, period] = match;
    // Same text and reading order ("company — title (period)"); separators are only visually hidden
    const periodEl = el('span', 'role-period');
    periodEl.append(el('span', 'sr-only', ' ('), document.createTextNode(period), el('span', 'sr-only', ')'));
    node.textContent = '';
    node.append(
        el('span', 'role-company', company),
        el('span', 'sr-only', ' — '),
        el('span', 'role-title', title),
        periodEl
    );
}

function onLanguageApplied() {
    const title = document.querySelector('[data-accent]');
    if (title) wrapPhrases(title, [title.dataset.accent], 'span', 'accent-text');

    const bio = document.querySelector('.bio');
    if (bio) wrapPhrases(bio, BIO_HIGHLIGHTS[currentLang] || [], 'strong', '');

    document.querySelectorAll('[data-split-role]').forEach(splitRole);

    const search = document.getElementById('projectSearch');
    if (search) search.setAttribute('aria-label', search.getAttribute('placeholder') || '');

    if (typeof loadVideos === 'function') {
        loadVideos(search ? search.value : '');
    }
}

/* ============== Navigation: header state, mobile menu, scroll spy ============== */
const header = document.getElementById('siteHeader');
const menu = document.getElementById('menu');
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelectorAll('.menu a');

function setMenuOpen(open) {
    if (!menu || !navToggle) return;
    menu.classList.toggle('active', open);
    navToggle.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('menu-open', open);
}

if (navToggle) {
    navToggle.addEventListener('click', () => setMenuOpen(!menu.classList.contains('active')));
}

document.addEventListener('click', e => {
    if (!menu || !menu.classList.contains('active')) return;
    if (!e.target.closest('#menu') && !e.target.closest('#navToggle')) setMenuOpen(false);
});

function scrollToTarget(target) {
    if (!target) return;
    target.scrollIntoView({ behavior: prefersReducedMotion.matches ? 'auto' : 'smooth', block: 'start' });
}

// Any link to the portfolio panels also switches the tab
document.addEventListener('click', e => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const href = link.getAttribute('href');

    if (href === '#portafolio' || href === '#audiovisual') {
        e.preventDefault();
        switchTab(href === '#audiovisual' ? 'av' : 'tech');
        scrollToTarget(document.getElementById('trabajo'));
        history.replaceState(null, '', href);
    }
    if (link.closest('#menu')) setMenuOpen(false);
});

const spySections = ['inicio', 'sobre-mi', 'trayectoria', 'certificaciones', 'trabajo', 'contacto']
    .map(id => document.getElementById(id))
    .filter(Boolean);

function currentSectionHref() {
    const probe = window.innerHeight * 0.35;
    let current = spySections[0];
    spySections.forEach(section => {
        if (section.getBoundingClientRect().top <= probe) current = section;
    });
    // Reaching the bottom of the page always activates the last section
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = spySections[spySections.length - 1];
    }
    switch (current && current.id) {
        case 'sobre-mi':
        case 'trayectoria':
        case 'certificaciones': return '#sobre-mi';
        case 'trabajo': return getActiveTab() === 'av' ? '#audiovisual' : '#portafolio';
        case 'contacto': return '#contacto';
        default: return '#inicio';
    }
}

function updateActiveNav() {
    const href = currentSectionHref();
    navLinks.forEach(link => {
        const active = link.getAttribute('href') === href;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'true');
        else link.removeAttribute('aria-current');
    });
}

let scrollTicking = false;
function onScroll() {
    if (scrollTicking) return;
    scrollTicking = true;
    requestAnimationFrame(() => {
        if (header) header.classList.toggle('is-scrolled', window.scrollY > 12);
        updateActiveNav();
        scrollTicking = false;
    });
}
window.addEventListener('scroll', onScroll, { passive: true });

/* ============== Init ============== */
document.addEventListener('DOMContentLoaded', () => {
    // Load saved theme
    const savedTheme = safeStorageGet('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    applyThemeAssets(savedTheme);

    // Tabs
    document.querySelectorAll('.tab-btn').forEach(tab => {
        tab.addEventListener('click', () => switchTab(tab.dataset.tab));
        tab.addEventListener('keydown', e => {
            if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
            const next = tab.dataset.tab === 'tech' ? 'av' : 'tech';
            switchTab(next);
            document.querySelector(`.tab-btn[data-tab="${next}"]`).focus();
        });
    });
    if (location.hash === '#audiovisual') switchTab('av');

    // Load language (also renders projects and videos)
    changeLanguage(currentLang);

    observeReveal();
    onScroll();

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
        showFeedback('success', '¡Gracias! Tu mensaje fue enviado.', 6000);
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

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeProjectModal();
        setMenuOpen(false);
    }
    trapModalFocus(e);
});

/* ============== Contact form: validation + feedback ============== */
let feedbackTimer = null;
function showFeedback(type, message, hideAfter) {
    const formFeedback = document.getElementById('formFeedback');
    if (!formFeedback) return;
    clearTimeout(feedbackTimer);
    formFeedback.className = `form-feedback is-visible is-${type}`;
    formFeedback.textContent = message;
    if (hideAfter) {
        feedbackTimer = setTimeout(() => { formFeedback.classList.remove('is-visible'); }, hideAfter);
    }
}

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        let valid = true;
        let errorMsg = dictionaries[currentLang]["form.error.empty"];

        // Reset styles
        [name, email, message].forEach(f => {
            f.classList.remove('is-invalid');
            f.removeAttribute('aria-invalid');
        });

        const markInvalid = f => { valid = false; f.classList.add('is-invalid'); f.setAttribute('aria-invalid', 'true'); };

        // 1. Check empty fields
        [name, email, message].forEach(f => {
            if (!f.value || f.value.trim() === '') markInvalid(f);
        });

        // 2. Simple email format check
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value.trim() !== '' && !emailPattern.test(email.value)) {
            markInvalid(email);
            errorMsg = dictionaries[currentLang]["form.error.email"];
        }

        // 3. Language check
        const allowedPattern = /^[a-zA-Z0-9\s.,!?'"@#$%&*()_\-+=;:À-ÿ¡¿]+$/;
        if (message.value.trim() !== '' && !allowedPattern.test(message.value)) {
            markInvalid(message);
            errorMsg = dictionaries[currentLang]["form.error.language"];
        }

        if (!valid) {
            e.preventDefault();
            showFeedback('error', errorMsg, 4500);
            const firstInvalid = contactForm.querySelector('.is-invalid');
            if (firstInvalid) firstInvalid.focus();
            return;
        }

        showFeedback('success', dictionaries[currentLang]["form.success.sending"]);
    });
}
