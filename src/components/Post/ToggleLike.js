import likeTrue from "../../assets/images/likeTrue.png";
import likeFalse from "../../assets/images/likeFalse.png";
import { toggleLike } from "../../services";
import { useState } from "react";

export const ToggleLike = ({ post, token, user }) => {
  const [isLiked, setIsLiked] = useState(
    post.likes.find((item) => item.userLikedIt === user.id)
  );

  console.log("response:", post.likes);
  const handleToggle = async () => {
    const response = await toggleLike(post.postId, token);
    setIsLiked(!isLiked);
  };
  return (
    <img
      src={isLiked ? likeTrue : likeFalse}
      alt="toggle like"
      height="20px"
      onClick={handleToggle}
    />
  );
};
