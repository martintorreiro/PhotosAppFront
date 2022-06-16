import { useParams } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";
import { Post } from "../components/Post/Post";
import { useGetPosts } from "../hooks/useGetPost";

export const ShowPost = () => {
  const { postId } = useParams();

  const { post, loading, error } = useGetPosts(postId);
  console.log("llegamos aqui", post);
  if (loading) return <p>Loading / Cargando</p>;

  if (error) return <ErrorMessage message={error} />;
  return <Post post={post} />;
};
