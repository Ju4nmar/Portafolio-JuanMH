import SkillItem from "../components/SkillItem";
import Reveal from "../components/Reveal";
import { SKILL_CATEGORIES } from "../data/skills";

export default function Skills() {
  return (
    <section id="habilidades">
      <div className="container">
        <span className="section-tag centered">Stack tecnológico</span>
        <h2>Habilidades</h2>
        <p className="section-subtitle">
          Herramientas y lenguajes que he usado en proyectos académicos y personales durante mi
          formación como Ingeniero de Sistemas.
        </p>

        {SKILL_CATEGORIES.map((group, index) => (
          <Reveal key={group.category} delay={index * 0.1} className="skills-category">
            <h3 className="skills-category-title">{group.category}</h3>

            <div className="skills-grid">
              {group.items.map((skill) => (
                <SkillItem key={skill.name} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
