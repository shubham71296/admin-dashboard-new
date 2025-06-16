// src/components/ProtectedRoute.tsx
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

interface ProtectRouteProps {
  allowedRoles: string[];
  userRole: string | null;
  children: React.ReactElement;
}

const ProtectRoutes = ({ allowedRoles, userRole, children }: ProtectRouteProps) => {
  const location = useLocation();
  
  if (!userRole) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default ProtectRoutes;
