import { Auth } from "./Auth";
import { Link } from "react-router-dom";

import photoAppLogo from "../assets/images/photoAppLogo.png";

export const Header = () => {
  return (
    <header className="mainHeader">
      <div>
        <div className="appTitle">
          <img
            src={photoAppLogo}
            alt="logo"
            height="50px"
            className="headerImage"
          />
          <h1>
            <Link to="/">
              Photos
              <br />
              App{" "}
            </Link>
          </h1>
        </div>

        <nav>
          <Auth />
        </nav>
      </div>
    </header>
  );
};
