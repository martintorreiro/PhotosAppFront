import { useEffect, useState } from "react";
import { getUserProfile } from "../services";

export const useGetUserProfile = (userName) => {
  const [userProfile, setUserProfile] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      try {
        const userData = await getUserProfile(userName);

        setUserProfile(userData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, [userName]);
  return { userProfile, loading, error };
};
