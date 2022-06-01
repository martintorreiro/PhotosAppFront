import { usePosts } from "../hooks/usePosts";

export const Home = () => {
  const { posts, loading, error } = usePosts();

  if (loading) {
    return <p>loading</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return <p>HOME PAGE </p>;
};
