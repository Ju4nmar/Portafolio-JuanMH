// Inicialización Typed.js
var typed = new Typed('.element', {
  strings: ["Hola, soy Juan Hernández", "Desarrollador Web", "Ingeniero en Sistemas"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true
});

// Menú responsive
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const navbar = document.getElementById("navbar");
  const navLinks = navbar.querySelectorAll("a");

  toggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("active");
    });
  });
});

// Efecto scroll header
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.classList.toggle('scrolled', window.scrollY > 100);
});

// Inicializar EmailJS
(function () {
  emailjs.init("mb_QPjycrJkAf5Ftu");
})();

// Envío del formulario con EmailJS
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const button = form.querySelector('button');
  button.textContent = 'Enviando...';
  button.disabled = true;

  emailjs.sendForm('service_mpniram', 'template_wmn2nbc', form)
    .then(() => {
      button.textContent = '¡Enviado!';
      button.style.backgroundColor = '#2ecc71';
      form.reset();
      setTimeout(() => {
        button.textContent = 'Enviar';
        button.disabled = false;
        button.style.backgroundColor = '';
      }, 3000);
    })
    .catch(() => {
      button.textContent = 'Error al enviar';
      button.style.backgroundColor = '#e74c3c';
      button.disabled = false;
    });
});

// Animación de habilidades
function animateSkills() {
  const skillItems = document.querySelectorAll('.skill-item');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), index * 100);
      }
    });
  }, { threshold: 0.5 });
  skillItems.forEach(item => observer.observe(item));
}

window.addEventListener('load', animateSkills);
