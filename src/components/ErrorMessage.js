import { Link } from "react-router-dom";

export const ErrorMessage = ({ message }) => {
  return (
    <>
      <p>{message}</p>
      <Link to="/">Back to Home Page / Regresa a la página de inicio</Link>
    </>
  );
};
