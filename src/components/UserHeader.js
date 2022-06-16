import { useContext } from "react";
import { Link } from "react-router-dom";
import defaultAvatar from "../assets/images/defaultAvatar.png";
import { AuthContext } from "../context/AuthContext";

export const UserHeader = ({ userProfile }) => {
  const { user } = useContext(AuthContext);
  console.log("-<", userProfile);
  return (
    <header>
      <div className="profile_info">
        <img
          src={
            userProfile.image
              ? `/${process.env.REACT_APP_AVATAR_PATH}/${userProfile.image}`
              : defaultAvatar
          }
          alt="avatar"
          height="70px"
          width="70px"
        />

        <h3>
          {/* User / Usuario:  */}
          <span>{userProfile.userName}</span>
        </h3>

        {userProfile.name ? (
          <h6>
            {userProfile.name} {userProfile.surname}
          </h6>
        ) : (
          <></>
        )}
      </div>

      <div className="profile_counts">
        <h3>
          {/* Number of posts / Número de  */}Posts:{" "}
          <span>{userProfile.postCounter}</span>
        </h3>
        <h3>
          {/* Number of posts / Número de  */}Likes:{" "}
          <span>
            {userProfile.posts.reduce((acc, current) => {
              if (current.likes[0].id) {
                const counter = current.likes.length;
                acc = acc + counter;
              }

              return acc;
            }, 0)}
          </span>
        </h3>
      </div>

      <div className="profile_edit">
        {userProfile.intro ? userProfile.intro : <></>}
        {user && user.id === userProfile.id ? (
          <p>
            <Link to="/edit">
              <button>Edit profile / Edita tu perfil</button>
            </Link>
          </p>
        ) : (
          <></>
        )}
      </div>
    </header>
  );
};
