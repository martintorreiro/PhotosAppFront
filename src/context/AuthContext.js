import { createContext, useEffect, useState } from "react";
import { getOwnprofile } from "../services";

export const AuthContext = createContext();

export const AuthProviderComponent = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await getOwnprofile(token);

        setUser(data);
      } catch (error) {
        logout();
      }
    };

    if (token) getUserData();
  }, [token]);

  const logout = () => {
    setToken("");
    setUser(null);
  };

  const login = (token) => {
    setToken(token);
  };

  return (
    <AuthContext.Provider value={{ token, user, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
};
