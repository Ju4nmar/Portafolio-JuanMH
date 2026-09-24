import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { SITE } from "../data/siteConfig";

const STATUS_LABELS = {
  idle: "Enviar mensaje",
  sending: "Enviando...",
  success: "¡Mensaje enviado!",
  error: "Error al enviar",
};

const STATUS_BACKGROUND = {
  success: "#2ecc71",
  error: "#e74c3c",
};

export default function ContactForm() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(SITE.emailjs.serviceId, SITE.emailjs.templateId, formRef.current)
      .then(() => {
        setStatus("success");
        formRef.current.reset();
        setTimeout(() => setStatus("idle"), 3000);
      })
      .catch(() => {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 2500);
      });
  };

  return (
    <form id="contact-form" ref={formRef} onSubmit={handleSubmit}>
      <div className="input-group">
        <label htmlFor="name">Nombre</label>
        <input type="text" id="name" name="from_name" placeholder="Tu nombre" required />
      </div>

      <div className="input-group">
        <label htmlFor="email">Correo electrónico</label>
        <input
          type="email"
          id="email"
          name="from_email"
          placeholder="correo@ejemplo.com"
          required
        />
      </div>

      <div className="input-group">
        <label htmlFor="message">Mensaje</label>
        <textarea id="message" name="message" placeholder="Escribe tu mensaje..." required></textarea>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        style={STATUS_BACKGROUND[status] ? { background: STATUS_BACKGROUND[status] } : undefined}
      >
        {STATUS_LABELS[status]}
      </button>
    </form>
  );
}
