import { Post } from "../components/Post/Post";
import { usePosts } from "../hooks/usePosts";
import { ErrorMessage } from "../components/ErrorMessage";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const Home = () => {
  const { posts, loading, error } = usePosts();
  const { user } = useContext(AuthContext);

  if (loading) return <p>loading</p>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      {posts.map((post) => {
        return <Post post={post} key={post.postId} />;
      })}
    </section>
  );
};
