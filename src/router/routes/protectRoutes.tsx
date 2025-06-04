// src/components/ProtectedRoute.tsx
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

interface ProtectRouteProps {
  element: React.ReactElement;
  allowedRoles: Array<string>;
}

const ProtectRoutes = ({ element, allowedRoles }: ProtectRouteProps) => {
  const { user } = useAuth();
  const location = useLocation();
  
  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return element;
};

export default ProtectRoutes;
