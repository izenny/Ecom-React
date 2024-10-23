import React, { useContext } from "react";
import { UserContext } from "../Contexts/UserContexts";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const AuthCheck = ({ children ,token }) => {
  const location = useLocation()
 if(!token && !(location.pathname.includes('login'))){
  return <Navigate to="/login" />
 }
 if(token && (location.pathname.includes('login'))){
  return <Navigate to={'user/home'}/>
 }


  return children ? children : <Outlet />;
};

export default AuthCheck;
