import { Auth } from "./Auth";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="mainHeader">
      <h1>
        <Link to="/">Photos App </Link>
      </h1>

      <nav>
        <Auth />
      </nav>
    </header>
  );
};
