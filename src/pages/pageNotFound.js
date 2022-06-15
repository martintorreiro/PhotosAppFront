import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <section className="error">
      <p>Page not found... / Página no encontrada...</p>
      <p>
        Click the button to go back to home page
        <br />
        Haz click en el botón para regresar a la página principal
      </p>
      <Link to={"/"}>
        <button>:)</button>
      </Link>
    </section>
  );
};
