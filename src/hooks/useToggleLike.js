import { useEffect, useState } from "react";
import { toggleLike } from "../services";

export const useToggleLike = () => {
  const [posts, setPosts] = useState([]);

  const [error, setError] = useState(false);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const lastPosts = await toggleLike();

        setPosts(lastPosts);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadPosts();
  }, []);

  return { posts, loading, error };
};
