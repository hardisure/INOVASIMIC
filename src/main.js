// MKP MIC+ — Main Application Router
import { renderHome } from './pages/home.js';
import { renderRiskModel } from './pages/risk-model.js';
import { renderHeatmap } from './pages/heatmap.js';
import { renderSimulation } from './pages/simulation.js';
import { renderArchitecture } from './pages/architecture.js';
import { renderFinancial } from './pages/financial.js';
import { renderCompliance } from './pages/compliance.js';
import { renderScalability } from './pages/scalability.js';
import { renderExecutive } from './pages/executive.js';
import { renderMethodology } from './pages/methodology.js';
import { renderMakalah } from './pages/makalah.js';

const routes = {
    '/': renderHome,
    '/risk-model': renderRiskModel,
    '/heatmap': renderHeatmap,
    '/simulation': renderSimulation,
    '/architecture': renderArchitecture,
    '/financial': renderFinancial,
    '/compliance': renderCompliance,
    '/scalability': renderScalability,
    '/executive': renderExecutive,
    '/methodology': renderMethodology,
    '/makalah': renderMakalah,
};

const pageContent = document.getElementById('page-content');
const navLinks = document.getElementById('nav-links');
const navToggle = document.getElementById('nav-toggle');
const presToggle = document.getElementById('pres-toggle');

// Router
function getRoute() {
    const hash = window.location.hash || '#/';
    return hash.slice(1) || '/';
}

function navigate() {
    const route = getRoute();
    const render = routes[route] || routes['/'];

    // Update active nav
    document.querySelectorAll('.nav-links a').forEach(a => {
        const page = a.getAttribute('data-page');
        const isActive = (route === '/' && page === 'home') ||
            route === '/' + page;
        a.classList.toggle('active', isActive);
    });

    // Close mobile nav
    navLinks.classList.remove('open');

    // Render page with transition
    pageContent.classList.remove('page-active');
    pageContent.classList.add('page-enter');

    setTimeout(() => {
        pageContent.innerHTML = '';
        render(pageContent);
        requestAnimationFrame(() => {
            pageContent.classList.remove('page-enter');
            pageContent.classList.add('page-active');
        });
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, 150);
}

window.addEventListener('hashchange', navigate);
window.addEventListener('load', navigate);

// Mobile nav toggle
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Close mobile nav on link click
navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        navLinks.classList.remove('open');
    }
});

// Presentation mode toggle
presToggle.addEventListener('click', () => {
    document.body.classList.toggle('presentation-mode');
    presToggle.classList.toggle('active');
    const isPresentation = document.body.classList.contains('presentation-mode');
    presToggle.querySelector('.pres-label').textContent = isPresentation ? 'Web' : 'Present';
});
