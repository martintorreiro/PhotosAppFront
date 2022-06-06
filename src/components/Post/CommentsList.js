import { useGetComments } from "../../hooks/useGetComments";

import defaultAvatar from "../../assets/images/defaultAvatar.png";

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
              {comment.userName} {comment.userSurname}
            </span>
            {"  "}
            {comment.comment}
          </p>
        </li>
      ))}
    </ul>
  );
};
