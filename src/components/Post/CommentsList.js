import { useGetComments } from "../../hooks/useGetComments";
import { Link } from "react-router-dom";

import defaultAvatar from "../../assets/images/defaultAvatar.png";
import { UserProfile } from "../../pages/UserProfile";

export const CommentsList = ({ post }) => {
  const { comments, loading, error } = useGetComments(post.postId);
  console.log("-->", comments, loading);

  if (loading) {
    return <h2>loading...</h2>;
  }
  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id} className="comment">
          <img src={defaultAvatar} alt="avatar" height="30px" />
          <p>
            <span>
              <Link to={`/user/${comment.userName}`} element={<UserProfile />}>
                {comment.userName} {comment.userSurname}
              </Link>
            </span>

            {"  "}
            {comment.comment}
          </p>
        </li>
      ))}
      <li>input</li>
    </ul>
  );
};
