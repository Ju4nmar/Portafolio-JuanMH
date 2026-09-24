import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import RoleRotator from "../components/RoleRotator";
import HeroPortrait from "../components/HeroPortrait";
import { PROJECTS } from "../data/projects";
import { SKILL_CATEGORIES } from "../data/skills";

const ROLES = [
  "Desarrollador Web",
  "Estudiante de Ingeniería de Sistemas",
  "Entusiasta de la seguridad informática",
];

const technologiesCount = SKILL_CATEGORIES.reduce((total, group) => total + group.items.length, 0);

const STATS = [
  { value: String(PROJECTS.length).padStart(2, "0"), label: "Proyectos" },
  { value: String(technologiesCount).padStart(2, "0"), label: "Tecnologías" },
];

export default function Home() {
  return (
    <section className="hero" id="start">
      <div className="container hero_info">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="kicker">
            <i className="fa-solid fa-location-dot"></i>
            Cali, Colombia
          </span>

          <h1>Hola, soy Juan Hernández</h1>

          <p className="hero-role">
            <i className="fa-solid fa-chevron-right"></i>
            <RoleRotator roles={ROLES} />
          </p>

          <p>
            Soy estudiante de Ingeniería de Sistemas y desarrollador de software. Me apasiona
            crear aplicaciones web modernas, aprender nuevas tecnologías y desarrollar soluciones
            que realmente aporten valor.
          </p>

          <div className="hero-actions">
            <Link to="/proyectos" className="btn">
              Ver proyectos
              <i className="fas fa-arrow-right"></i>
            </Link>

            <Link to="/contacto" className="btn btn-outline">
              Escríbeme
              <i className="fa-solid fa-paper-plane"></i>
            </Link>
          </div>

          <div className="hero-stats">
            {STATS.map((stat) => (
              <div className="hero-stat" key={stat.label}>
                <span className="hero-stat-value">{stat.value}</span>
                <span className="hero-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <HeroPortrait src="/assets/imagenes/juan.webp" alt="Juan Hernández" />
      </div>
    </section>
  );
}
