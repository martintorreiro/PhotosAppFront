import { useContext } from "react";
import { Link } from "react-router-dom";
import defaultAvatar from "../assets/images/defaultAvatar.png";
import { AuthContext } from "../context/AuthContext";

export const UserHeader = ({ userProfile }) => {
  const { user } = useContext(AuthContext);
  console.log("-<", userProfile);
  return (
    <header>
      <img
        src={
          userProfile.image
            ? `/${process.env.REACT_APP_AVATAR_PATH}/${userProfile.image}`
            : defaultAvatar
        }
        alt="avatar"
        height="50px"
        width="50px"
      />

      <h3>
        User / Usuario: <span>{userProfile.userName}</span>
      </h3>

      <h3>
        Number of posts / Número de posts:{" "}
        <span>{userProfile.postCounter}</span>
      </h3>

      {user && user.id === userProfile.id ? (
        <p>
          <Link to="/edit">
            <button>Edit profile / Edita tu perfil</button>
          </Link>
        </p>
      ) : (
        <></>
      )}
    </header>
  );
};
