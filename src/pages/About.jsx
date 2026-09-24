import Reveal from "../components/Reveal";

const INFO_ITEMS = [
  { icon: "fas fa-user-graduate", title: "Formación", value: "Ingeniería de Sistemas" },
  { icon: "fas fa-code", title: "Especialidad", value: "Desarrollo Web" },
  { icon: "fas fa-shield-halved", title: "Interés", value: "Seguridad Informática" },
  { icon: "fas fa-lightbulb", title: "Aprendizaje", value: "Constante y autodidacta" },
];

export default function About() {
  return (
    <section id="sobre-mi">
      <div className="container">
        <div className="about-grid">
          <Reveal className="about-text">
            <span className="section-tag">Sobre mí</span>

            <h2>Desarrollador de Software e Ingeniería de Sistemas</h2>

            <p>
              Soy estudiante de Ingeniería de Sistemas con una fuerte pasión por el desarrollo de
              software, el desarrollo web y la seguridad informática. Disfruto crear aplicaciones
              funcionales, aprender nuevas tecnologías y enfrentar desafíos que me permitan crecer
              profesionalmente.
            </p>

            <p>
              Durante mi formación he trabajado con tecnologías como HTML, CSS, JavaScript, PHP,
              MySQL, Angular, Java y React, desarrollando proyectos académicos y personales
              enfocados en ofrecer soluciones reales.
            </p>

            <p>
              Mi objetivo es seguir fortaleciendo mis habilidades técnicas, participar en
              proyectos innovadores y aportar soluciones de calidad mediante código limpio y
              buenas prácticas de desarrollo.
            </p>
          </Reveal>

          <Reveal className="about-card" delay={0.15}>
            {INFO_ITEMS.map((item) => (
              <div className="info-item" key={item.title}>
                <i className={item.icon}></i>

                <div>
                  <h4>{item.title}</h4>
                  <span>{item.value}</span>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
