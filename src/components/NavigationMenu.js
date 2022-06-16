import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import searchImg from "../assets/images/search.png";
import homeImg from "../assets/images/home.png";
import addPostImg from "../assets/images/add-photo.png";

export const NavigationMenu = () => {
  const { user } = useContext(AuthContext);
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/">
            <img src={homeImg} alt="To home" height="20px" />
          </Link>
        </li>
        <li>
          <Link to="/search">
            <img src={searchImg} alt="To search" height="20px" />
          </Link>
        </li>
        {user ? (
          <li>
            <Link to={"/posting"}>
              <img src={addPostImg} alt="create post" height="24px" />
            </Link>
          </li>
        ) : (
          <></>
        )}
        <li>
          {" "}
          {user ? (
            <Link to={`/user/${user.userName}`}>
              <img
                src={`/${process.env.REACT_APP_AVATAR_PATH}/${user.image}`}
                alt="To own profile"
                height="25px"
                width="25px"
                style={{ borderRadius: "50%" }}
              />
            </Link>
          ) : (
            <></>
          )}
        </li>
      </ul>
    </nav>
  );
};
