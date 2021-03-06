import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export const PrivateRoutes = ({ children }) => {
  const [context] = useContext(UserContext);
  console.log(context.isLoggedIn);
  return context.isLoggedIn ? children : <Navigate to="/auth/login" />;
};
