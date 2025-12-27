import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAdmin, children }) => {
  if (!isAdmin) {
    return <Navigate to="/login" />; // Redirect to login if not admin
  }

  return children; // Render children if admin
};

export default ProtectedRoute;
