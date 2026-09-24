import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import { PROJECTS } from "../data/projects";

export default function Projects() {
  return (
    <section id="proyectos">
      <div className="container">
        <span className="section-tag centered">Lo que he construido</span>
        <h2>Mis Proyectos</h2>
        <p className="section-subtitle">
          Proyectos en los que he trabajado durante mi formación como Ingeniero de Sistemas.
        </p>

        <div className="projects">
          {PROJECTS.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.1}>
              <ProjectCard project={project} featured={index === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
