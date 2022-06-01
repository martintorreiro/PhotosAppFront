import defaultAvatar from "../usuario.png";

export const UserHeader = ({ userProfile }) => {
  console.log(userProfile);
  return (
    <header>
      <img
        src={userProfile.image ? userProfile.image : defaultAvatar}
        alt="avatar"
        height="50px"
        width="50px"
      />{" "}
      <span>Posts {userProfile.countPosts}</span>
      <h2>
        {userProfile.name} {userProfile.surname}
      </h2>
      <h3>{userProfile.intro}</h3>
    </header>
  );
};
