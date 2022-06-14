import likeTrue from "../../assets/images/likeTrue.png";
import likeFalse from "../../assets/images/likeFalse.png";
import { toggleLike } from "../../services";
import { useState } from "react";

export const ToggleLike = ({ postId, token }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleToggle = async () => {
    const response = await toggleLike(postId, token);
  };
  return (
    <img
      src={likeFalse}
      alt="toggle like"
      height="20px"
      onClick={handleToggle}
    />
  );
};
