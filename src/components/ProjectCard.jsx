import { Link } from "react-router-dom";

export default function ProjectCard({ project, featured = false }) {
  return (
    <Link to={`/proyectos/${project.id}`} className="project">
      {featured && <span className="project-featured">Destacado</span>}

      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>

      <div className="project-content">
        <span className="project-category">{project.category}</span>

        <h3>{project.title}</h3>

        <p>{project.summary}</p>

        <div className="project-tags">
          {project.technologies.slice(0, 4).map((tech) => (
            <span className="project-tag" key={tech}>
              {tech}
            </span>
          ))}
        </div>

        <span className="project-link">
          Ver detalles
          <i className="fas fa-arrow-right"></i>
        </span>
      </div>
    </Link>
  );
}
