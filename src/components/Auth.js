import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Auth = () => {
  const { user, logout } = useContext(AuthContext);

  return user ? (
    <section>
      <span>
        <Link to={`/user/${user.userName}`}>{user.userName}</Link>
      </span>{" "}
      <button onClick={() => logout()}>Logout</button>
      <button>
        <Link to={"/posting"}>New post</Link>
      </button>
    </section>
  ) : (
    <ul>
      <li>
        <Link to={"/register"}>Register</Link>
      </li>
      <li>
        <Link to={"/user/login"}>Login</Link>
      </li>
    </ul>
  );
};
