import ContactForm from "../components/ContactForm";
import Reveal from "../components/Reveal";
import { SITE } from "../data/siteConfig";

export default function Contact() {
  return (
    <section id="contacto">
      <div className="container">
        <span className="section-tag centered">Contacto</span>
        <h2>Contáctame</h2>
        <p className="section-subtitle">
          Escríbeme si quieres hablar sobre alguno de mis proyectos, una oportunidad laboral o
          simplemente sobre tecnología.
        </p>

        <div className="contact-container">
          <Reveal className="contact-form">
            <h3>Envíame un mensaje</h3>
            <ContactForm />
          </Reveal>

          <Reveal className="contact-info" delay={0.15}>
            <h3>También puedes encontrarme en</h3>

            <p>
              Siempre estoy abierto a nuevas oportunidades, colaboraciones o simplemente conversar
              sobre desarrollo de software y tecnología.
            </p>

            <div className="social-buttons">
              <a href={`mailto:${SITE.email}`} className="social-btn email">
                <i className="fa-solid fa-envelope"></i>
                {SITE.email}
              </a>

              <a href={SITE.linkedin} target="_blank" rel="noreferrer" className="social-btn linkedin">
                <i className="fab fa-linkedin"></i>
                LinkedIn
              </a>

              <a href={SITE.github} target="_blank" rel="noreferrer" className="social-btn github">
                <i className="fab fa-github"></i>
                GitHub
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
