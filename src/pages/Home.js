import { Post } from "../components/Post/Post";
import { usePosts } from "../hooks/usePosts";

export const Home = () => {
  const { posts, loading, error } = usePosts();

  if (loading) {
    return <p>loading</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section>
      {posts.map((post) => {
        return <Post post={post} key={post.postId} />;
      })}
    </section>
  );
};
