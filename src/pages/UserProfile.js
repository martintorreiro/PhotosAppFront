import { useParams } from "react-router-dom";
import { useGetUserProfile } from "../hooks/useGetUserPosts";
import { UserHeader } from "../components/UserHeader";
import { UserBody } from "../components/UserBody";

export const UserProfile = () => {
  const { userName } = useParams();

  const { userProfile, loading, error } = useGetUserProfile(userName);

  if (loading) {
    return <h2>Loading... / Cargando</h2>;
  }
  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <section className="user_profile">
      <UserHeader userProfile={userProfile} />
      <UserBody posts={userProfile.posts} />
    </section>
  );
};
