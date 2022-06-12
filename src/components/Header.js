import { Auth } from "./Auth";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const Header = () => {
  const { token, user } = useContext(AuthContext);
  return (
    <header className="mainHeader">
      <h1>
        <Link to="/">Photos App </Link>
      </h1>

      <nav>
        <p>
          <Link to="/search">search</Link>
        </p>
        <Auth />
      </nav>

      {user ? (
        <p>
          <Link to={`/user/${user.userName}`}>myProfile</Link>
        </p>
      ) : (
        <Link to={`/user/login`}>myProfile</Link>
      )}
    </header>
  );
};
