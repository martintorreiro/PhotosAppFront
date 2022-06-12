import { Auth } from "./Auth";
import { Link } from "react-router-dom";

import photoAppLogo from "../assets/images/photoAppLogo.png";

export const Header = () => {
  return (
    <header className="mainHeader">
      <h1 className="appTitle">
        <img
          src={photoAppLogo}
          alt="logo"
          height="30px"
          className="headerImage"
        />
        <Link to="/">Photos App </Link>
      </h1>

      <nav>
        <Auth />
      </nav>
    </header>
  );
};
