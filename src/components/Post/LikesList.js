import { useGetLikesList } from "../../hooks/useGetLikesList";
import defaultImage from "../../assets/images/defaultAvatar.png";
import { Link } from "react-router-dom";
import { UserProfile } from "../../pages/UserProfile";
export const LikesList = ({ post }) => {
  const { likes, loading, error } = useGetLikesList(post.postId);
  console.log(likes);
  if (loading) {
    return <h2>loading...</h2>;
  }
  if (error) {
    return <h2>{error}</h2>;
  }
  return (
    <ul>
      {likes.map((like) => (
        <li key={like.id}>
          <img
            src={like.image ? like.image : defaultImage}
            alt="avatar"
            height="30px"
          />
          <p>
            <Link to={`/user/${like.name} `} element={<UserProfile />}>
              {like.name} {like.surname}
            </Link>
          </p>
        </li>
      ))}
    </ul>
  );
};
