// Typed.js initialization
var typed = new Typed('.element', {
  strings: ["Hola, soy Juan Hernández", "Desarrollador Web", "Ingeniero en Sistemas"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true
});

/*
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
*/

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const navbar = document.getElementById("navbar");
  const navLinks = navbar.querySelectorAll("a");

  toggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });

  // Cierra el menú al hacer clic en un enlace
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("active");
    });
  });
});

// Change header background on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Form submission with animation
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const button = form.querySelector('button');
  button.textContent = 'Enviando...';
  button.disabled = true;

  // Simulate form submission
  setTimeout(() => {
    button.textContent = '¡Enviado!';
    button.style.backgroundColor = '#2ecc71';
    form.reset();
    setTimeout(() => {
      button.textContent = 'Enviar';
      button.disabled = false;
      button.style.backgroundColor = '';
    }, 3000);
  }, 2000);
});

// Project hover effect
const projects = document.querySelectorAll('.project');
projects.forEach(project => {
  project.addEventListener('mouseenter', () => {
    project.style.transform = 'scale(1.05)';
  });
  project.addEventListener('mouseleave', () => {
    project.style.transform = 'scale(1)';
  });
});

// Skills animation
function animateSkills() {
  const skillItems = document.querySelectorAll('.skill-item');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 100);
      }
    });
  }, { threshold: 0.5 });

  skillItems.forEach(item => {
    observer.observe(item);
  });
}

// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
});

// Call the animateSkills function when the page loads
window.addEventListener('load', animateSkills);