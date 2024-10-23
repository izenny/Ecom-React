import React, { useContext } from "react";
import { UserContext } from "../Contexts/UserContexts";
import { Navigate } from "react-router-dom";

const AuthCheck = ({ children }) => {
  const { token } = useContext(UserContext); 
  return token ? children : <Navigate to="/login" />;
};

export default AuthCheck;
