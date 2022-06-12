import { Auth } from "./Auth";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import photoAppLogo from "../assets/images/photoAppLogo.png";

export const Header = () => {
  const { token, user } = useContext(AuthContext);
  return (
    <header className="mainHeader">
      <h1 className="appTitle">
        <img src={photoAppLogo} alt="logo" height="30px" />
        <Link to="/">Photos App </Link>
      </h1>

      {user ? (
        <p>
          <Link to={`/user/${user.userName}`}>myProfile</Link>
        </p>
      ) : (
        <Link to={`/user/login`}>myProfile</Link>
      )}

      <nav>
        <p>
          <Link to="/search">search</Link>
        </p>
        <Auth />
      </nav>
    </header>
  );
};
