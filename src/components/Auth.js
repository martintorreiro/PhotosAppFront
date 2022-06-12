import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Auth = () => {
  const { user, logout } = useContext(AuthContext);

  return user ? (
    <section>

      <Link to={`/user/${user.id}`}>{user.userName}</Link>{" "}

      <button onClick={() => logout()}>Logout</button>
    </section>
  ) : (
    <ul>
      <li>
        <Link to={"/register"}>Register</Link>
      </li>
      <li>
        <Link to={"/user/login"}>Login</Link>
      </li>
      <li>
        {user ? (
          <p>
            <Link to={`/user/${user.userName}`}>MyProfile</Link>
          </p>
        ) : (
          <Link to={`/user/login`}>MyProfile</Link>
        )}
      </li>
    </ul>
  );
};
