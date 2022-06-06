import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="mainHeader">
      <h1>
        <Link to="/">Photos App </Link>
      </h1>

      <menu>
        <li>
          <Link to="/login">login</Link>
        </li>
        <li>
          <Link to="/register">register</Link>
        </li>
        <li>
          <Link to="/search">search</Link>
        </li>
      </menu>
    </header>
  );
};
