import { useEffect, useState } from "react";
import { getPostComments } from "../services";

export const useGetComments = (postId) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getComments = async () => {
      try {
        const commentsList = await getPostComments(postId);
        console.log("useGetCom", commentsList);
        setComments(commentsList);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getComments();
  }, [postId]);
  return { comments, loading, error };
};
