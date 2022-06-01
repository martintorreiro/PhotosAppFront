import { useParams } from "react-router-dom";
import { useGetUserProfile } from "../hooks/useGetUserPosts";

export const UserProfile = () => {
  const { userName } = useParams();
  console.log(userName);
  const { userProfile, loading, error } = useGetUserProfile(userName);
  console.log(userProfile);

  return <p>perfil usuario</p>;
};
