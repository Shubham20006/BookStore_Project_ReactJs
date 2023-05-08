import { Outlet, Navigate } from "react-router-dom";
import React from "react";

const AuthRoute = ({ children }) => {
  
  if (localStorage.getItem("token") === undefined || localStorage.getItem("token") === null) {
    // console.log("k")
    return children;
}
return <Navigate to="/dashboard" />;
  // console.log("l")
};

export default AuthRoute;