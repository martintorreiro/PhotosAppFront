import { useEffect, useState } from "react";
import { getPostLikes } from "../services";

export const useGetLikesList = (postId) => {
  const [likes, setLikes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getLikes = async () => {
      try {
        const likesList = await getPostLikes(postId);
        console.log("useGetLikes", likesList);
        setLikes(likesList);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getLikes();
  }, [postId]);
  return { likes, loading, error };
};
