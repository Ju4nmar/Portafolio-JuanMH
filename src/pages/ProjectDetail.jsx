import { Link, Navigate, useParams } from "react-router-dom";
import Reveal from "../components/Reveal";
import { PROJECTS } from "../data/projects";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = PROJECTS.find((item) => item.id === id);

  if (!project) {
    return <Navigate to="/proyectos" replace />;
  }

  return (
    <section id="proyecto-detalle">
      <div className="container">
        <Link to="/proyectos" className="btn btn-outline back-link">
          <i className="fas fa-arrow-left"></i> Volver a proyectos
        </Link>

        <Reveal className="modal-content project-detail-content">
          <div className="modal-grid">
            <div className="modal-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="modal-info">
              <span className="project-category">{project.category}</span>

              <h2>{project.title}</h2>

              <p>{project.description}</p>

              <h3>Tecnologías</h3>

              <div className="modal-technologies">
                {project.technologies.map((tech) => (
                  <span className="tech-badge" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>

              <h3>Características</h3>

              <ul>
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <div className="modal-buttons">
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="modal-btn">
                    <i className="fas fa-globe"></i> Demo
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="modal-btn github"
                  >
                    <i className="fab fa-github"></i> GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
