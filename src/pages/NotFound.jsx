import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section id="not-found">
      <div className="container" style={{ textAlign: "center" }}>
        <h2>404</h2>
        <p>La página que buscas no existe.</p>
        <Link to="/" className="btn">
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}
