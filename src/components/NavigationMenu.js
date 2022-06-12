import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const NavigationMenu = () => {
  const { user } = useContext(AuthContext);
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          {" "}
          {user ? (
            <Link to={`/user/${user.userName}`}>MyProfile</Link>
          ) : (
            <Link to={`/user/login`}>MyProfile</Link>
          )}
        </li>
      </ul>
    </nav>
  );
};
