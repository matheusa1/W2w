import { useAuth } from "../hooks/auth";

import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthRoute = () => {
  const { token } = useAuth();
  console.log({ token });

  return !token ? <Outlet /> : <Navigate to="/" />;
};

export default AuthRoute;
