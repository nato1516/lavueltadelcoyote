function showDay(id, tab) {
    document.querySelectorAll('.ew-day').forEach(d => d.classList.remove('active'));
    document.querySelectorAll('.ew-tab').forEach(t => t.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    tab.classList.add('active');
}

function showCircuito(id, card) {
    document.querySelectorAll('.cr-sel-card').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.cr-detail').forEach(d => d.classList.remove('active'));
    card.classList.add('active');
    document.getElementById(id).classList.add('active');
}
// ══════════════════════════════════════
//  PREMIOS — TABS + CARRUSEL
// ══════════════════════════════════════
function switchCircuito(id, tab) {
    document.querySelectorAll('.pr-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.pr-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('pr-' + id).classList.add('active');
}

function moveCarrusel(arrow, dir) {
    const carousel = arrow.closest('.pr-carousel');
    const track    = carousel.querySelector('.pr-track');
    const dots     = carousel.querySelectorAll('.pr-dot');
    const counter  = carousel.querySelector('.pr-counter');
    const total    = parseInt(carousel.dataset.total);
    let current    = parseInt(carousel.dataset.current);

    current = (current + dir + total) % total;
    carousel.dataset.current = current;

    track.style.transform = `translateX(-${current * 100}%)`;

    dots.forEach((d, i) => d.classList.toggle('active', i === current));
    counter.textContent =
        String(current + 1).padStart(2, '0') + ' / ' +
        String(total).padStart(2, '0');
}
// ══════════════════════════════════════
//  HAMBURGUESA
// ══════════════════════════════════════
const hamburguesa = document.querySelector('.menu-hamburguesa');
const navMenu = document.querySelector('.navMenu');
const navOverlay = document.querySelector('.nav-overlay');

hamburguesa.addEventListener('click', () => {
    hamburguesa.classList.toggle('active');
    navMenu.classList.toggle('open');
    navOverlay.classList.toggle('show');
    document.body.style.overflow =
        navMenu.classList.contains('open') ? 'hidden' : '';
});

navOverlay.addEventListener('click', cerrarMenu);

document.querySelectorAll('.texto-menu, .btn-menu').forEach(link => {
    link.addEventListener('click', cerrarMenu);
});

function cerrarMenu() {
    hamburguesa.classList.remove('active');
    navMenu.classList.remove('open');
    navOverlay.classList.remove('show');
    document.body.style.overflow = '';
}