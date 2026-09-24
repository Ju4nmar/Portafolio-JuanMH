import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { NAV_LINKS } from "../data/siteConfig";

export default function MobileDock() {
  return (
    <nav className="mobile-dock" aria-label="Navegación principal">
      {NAV_LINKS.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          end={link.to === "/"}
          className={({ isActive }) => `dock-item${isActive ? " active" : ""}`}
        >
          {({ isActive }) => (
            <>
              {isActive && (
                <motion.span
                  layoutId="dock-active-pill"
                  className="dock-active-pill"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}

              <i className={link.icon}></i>
              <span>{link.label}</span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}
