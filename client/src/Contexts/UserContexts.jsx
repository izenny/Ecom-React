import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const navigate = useNavigate();

  const login = (userdata, authToken) => {
    setUser(userdata);
    setToken(authToken);
    localStorage.setItem("token", authToken);
    // navigate("/home");
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    // navigate("/login");
  };

  return (
    <UserContext.Provider value={{ user, token, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
