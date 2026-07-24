// ======================================================
// TYPED.JS
// ======================================================

new Typed(".element", {
  strings: [
    "Juan Hernandez",
    "Desarrollador Web",
    "Ingeniero de Sistemas"
  ],
  typeSpeed: 55,
  backSpeed: 35,
  backDelay: 1800,
  loop: true
});

// ======================================================
// CUANDO CARGA LA PÁGINA
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

  // ==========================
  // MENÚ RESPONSIVE
  // ==========================

  const toggle = document.getElementById("menu-toggle");
  const navbar = document.getElementById("navbar");

  toggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });

  document.querySelectorAll("#navbar a").forEach(link => {

    link.addEventListener("click", () => {
      navbar.classList.remove("active");
    });

  });

});

// ======================================================
// HEADER AL HACER SCROLL
// ======================================================

window.addEventListener("scroll", () => {

  document
    .querySelector("header")
    .classList.toggle("scrolled", window.scrollY > 80);

});

// ======================================================
// EMAILJS
// ======================================================

(function () {

  emailjs.init("mb_QPjycrJkAf5Ftu");

})();

const form = document.getElementById("contact-form");

form.addEventListener("submit", e => {

  e.preventDefault();

  const button = form.querySelector("button");

  button.disabled = true;
  button.textContent = "Enviando...";

  emailjs
    .sendForm(
      "service_mpniram",
      "template_wmn2nbc",
      form
    )

    .then(() => {

      button.textContent = "¡Mensaje enviado!";

      button.style.background = "#2ecc71";

      form.reset();

      setTimeout(() => {

        button.disabled = false;

        button.textContent = "Enviar";

        button.style.background = "";

      }, 3000);

    })

    .catch(() => {

      button.disabled = false;

      button.textContent = "Error al enviar";

      button.style.background = "#e74c3c";

      setTimeout(() => {

        button.textContent = "Enviar";

        button.style.background = "";

      }, 2500);

    });

});

// ======================================================
// ANIMACIÓN HABILIDADES
// ======================================================

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.classList.add("visible");

    }

  });

}, {

  threshold: .25

});

document.querySelectorAll(".skill-item").forEach(skill => {

  observer.observe(skill);

});

// ======================================================
// BASE DE DATOS DE PROYECTOS
// ======================================================

const projects = {

  alertbxt: {

    title: "AlertBxt",

    subtitle: "Proyecto de grado",

    image: "assets/imagenes/alertbxt.webp",

    description:
      "Aplicación web desarrollada como proyecto de grado para optimizar la comunicación entre residentes y administradores de conjuntos residenciales. Incluye autenticación segura, publicación de alertas, avisos y recordatorios desde una interfaz moderna y responsive.",

    technologies: [

      "Angular",
      "Ionic",
      "TypeScript",
      "Node.js",
      "Express",
      "MySQL",
      "JWT"

    ],

    features: [

      "Autenticación mediante JWT",

      "Control de roles",

      "Gestión de usuarios",

      "Administración de conjuntos",

      "Alertas en tiempo real",

      "Avisos comunitarios",

      "Sistema de recordatorios",

      "Panel administrativo",

      "Diseño Responsive"

    ],

    github:
      "https://github.com/Ju4nmar/alertbxt",

    demo:
      "https://alertbxt.web.app/login"

  },

  proyecto2: {

    title: "Próximamente",

    subtitle: "Nuevo proyecto",

    image: "assets/imagenes/proyecto2.webp",

    description:
      "Este espacio será utilizado para mostrar uno de mis próximos proyectos personales.",

    technologies: [

      "HTML",
      "CSS",
      "JavaScript"

    ],

    features: [

      "En desarrollo"

    ],

    github: "",

    demo: ""

  }

};

// ======================================================
// AQUÍ COMIENZA EL CÓDIGO DEL MODAL
// (PARTE 2)
// ======================================================

// ======================================================
// MODAL DE PROYECTOS
// ======================================================

const modal = document.getElementById("project-modal");
const closeModal = document.querySelector(".close-modal");

const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalTechnologies = document.getElementById("modal-technologies");
const modalFeatures = document.getElementById("modal-features");
const modalDemo = document.getElementById("modal-demo");
const modalGithub = document.getElementById("modal-github");

// ======================================================
// ABRIR MODAL
// ======================================================

function openProject(projectId) {

  const project = projects[projectId];

  if (!project) return;

  // Imagen
  modalImage.src = project.image;
  modalImage.alt = project.title;

  // Título
  modalTitle.textContent = project.title;

  // Descripción
  modalDescription.textContent = project.description;

  // Tecnologías
  modalTechnologies.innerHTML = "";

  project.technologies.forEach(tech => {

    const badge = document.createElement("span");

    badge.className = "tech-badge";

    badge.textContent = tech;

    modalTechnologies.appendChild(badge);

  });

  // Características
  modalFeatures.innerHTML = "";

  project.features.forEach(feature => {

    const li = document.createElement("li");

    li.textContent = feature;

    modalFeatures.appendChild(li);

  });

  // ======================
  // BOTÓN DEMO
  // ======================

  if (project.demo && project.demo.trim() !== "") {

    modalDemo.href = project.demo;

    modalDemo.style.display = "inline-flex";

  } else {

    modalDemo.style.display = "none";

  }

  // ======================
  // BOTÓN GITHUB
  // ======================

  if (project.github && project.github.trim() !== "") {

    modalGithub.href = project.github;

    modalGithub.style.display = "inline-flex";

  } else {

    modalGithub.style.display = "none";

  }

  // Mostrar modal

  modal.classList.add("active");

  // Bloquear scroll

  document.body.style.overflow = "hidden";

}

// ======================================================
// CERRAR MODAL
// ======================================================

function closeProject() {

  modal.classList.remove("active");

  document.body.style.overflow = "";

}

// ======================================================
// EVENTOS DE TARJETAS
// ======================================================

document.querySelectorAll(".project").forEach(card => {

  card.addEventListener("click", () => {

    const id = card.dataset.project;

    openProject(id);

  });

});

// ======================================================
// BOTÓN CERRAR
// ======================================================

closeModal.addEventListener("click", closeProject);

// ======================================================
// CLICK FUERA DEL MODAL
// ======================================================

modal.addEventListener("click", e => {

  if (e.target === modal) {

    closeProject();

  }

});

// ======================================================
// ESC PARA CERRAR
// ======================================================

document.addEventListener("keydown", e => {

  if (e.key === "Escape" && modal.classList.contains("active")) {

    closeProject();

  }

});

// ======================================================
// PREVENIR QUE EL MODAL SE CIERRE AL HACER CLICK DENTRO
// ======================================================

document.querySelector(".modal-content").addEventListener("click", e => {

  e.stopPropagation();

});

// ======================================================
// EFECTO SUAVE AL CARGAR LA PÁGINA
// ======================================================

window.addEventListener("load", () => {

  document.body.style.opacity = "0";

  requestAnimationFrame(() => {

    document.body.style.transition = "opacity .5s ease";

    document.body.style.opacity = "1";

  });

});