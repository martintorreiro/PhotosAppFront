import { Post } from "./Post/Post";

export const UserBody = ({ posts }) => {
  console.log("-----", posts);
  return (
    <section>
      {posts.map((post) => {
        return <Post key={post.postId} post={post} />;
      })}
    </section>
  );
};
