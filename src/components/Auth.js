import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Auth = () => {
  const { user, logout } = useContext(AuthContext);

  return user ? (
    <ul>
      <li>
        <p>
          <Link to={`/user/${user.userName}`}>{user.userName}</Link>
        </p>
      </li>
      <li>
        <button onClick={() => logout()}>Logout</button>
      </li>
    </ul>
  ) : (
    <ul>
      <li>
        <button>
          <Link to={"/register"}>Register</Link>
        </button>{" "}
      </li>

      <li>
        <button>
          <Link to={"/user/login"}>Login</Link>
        </button>
      </li>
    </ul>
  );
};
