import { useEffect, useState } from "react";
import { getPost } from "../services";

export const useGetPosts = (postId) => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const lastPosts = await getPost(postId);

        setPost(lastPosts);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadPosts();
  }, [postId]);

  return { post, loading, error };
};
