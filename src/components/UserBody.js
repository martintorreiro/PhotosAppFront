import { Post } from "./Post";

export const UserBody = ({ posts }) => {
  console.log(posts);
  return (
    <section>
      {posts.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </section>
  );
};
