import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import useScrolled from "../hooks/useScrolled";
import { NAV_LINKS, SITE } from "../data/siteConfig";

export default function Header() {
  const scrolled = useScrolled(40);

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <div className="container">
        <NavLink to="/" end className="logo" aria-label={SITE.name}>
          {SITE.initials.slice(0, 2)}
          <span>{SITE.initials.slice(2)}</span>
        </NavLink>

        <nav id="navbar" className="nav-pill">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <motion.span
                          layoutId="nav-active-pill"
                          className="nav-active-pill"
                          transition={{ type: "spring", stiffness: 400, damping: 32 }}
                        />
                      )}
                      <span className="nav-link-label">{link.label}</span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={SITE.cvUrl}
          target="_blank"
          rel="noreferrer"
          className="cv-button"
          aria-label="Descargar CV"
        >
          <i className="fa-solid fa-download"></i>
          <span>Descargar CV</span>
        </a>
      </div>
    </header>
  );
}
