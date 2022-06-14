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
      <span>
        <h2>{userProfile.userName}</h2>
        <h3>
          {userProfile.name} {userProfile.surname}
        </h3>
      </span>
      <h3>Posts {userProfile.postCounter}</h3>
      <h3>{userProfile.intro}</h3>
      {user && user.id === userProfile.id ? (
        <p>
          <Link to="/edit">edit profile</Link>
        </p>
      ) : (
        <></>
      )}
    </header>
  );
};
