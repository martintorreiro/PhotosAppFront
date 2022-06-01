import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <section>
      <p>page not found</p>
      <Link to={"/"}>Back home</Link>
    </section>
  );
};
