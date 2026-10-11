// Iconos (Lucide): reemplaza cada <i data-lucide="..."> por su SVG
lucide.createIcons();

// ---------- Menú móvil ----------
const menuButton = document.querySelector('[data-menu-button]');
const mobileMenu = document.querySelector('[data-mobile-menu]');

function setMenuOpen(open) {
  mobileMenu.classList.toggle('hidden', !open);
  menuButton.setAttribute('aria-expanded', String(open));
}

menuButton.addEventListener('click', () => {
  setMenuOpen(mobileMenu.classList.contains('hidden'));
});

mobileMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenuOpen(false));
});

// ---------- Enlace activo según la sección visible ----------
const navLinks = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: '-45% 0px -50% 0px' }
);

document.querySelectorAll('main section[id]').forEach((section) => sectionObserver.observe(section));

// ---------- Animación de aparición ----------
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// ---------- Año del pie de página ----------
document.querySelector('[data-year]').textContent = new Date().getFullYear();
