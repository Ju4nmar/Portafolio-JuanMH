import { SITE } from "../data/siteConfig";

export default function Footer() {
  return (
    <footer>
      <div className="container footer-content">
        <h3>{SITE.name}</h3>
        <p>{SITE.role}</p>

        <div className="footer-social">
          <a href={SITE.github} target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>

          <a href={SITE.linkedin} target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>

        <span>© 2026 {SITE.name}</span>
      </div>
    </footer>
  );
}
