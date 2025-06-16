import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../redux/store";
import { user_info } from "../../redux/reducers/authReducer";

interface ProtectRouteProps {
  allowedRoles: string[];
  children: React.ReactElement;
}

const ProtectRoutes = ({ allowedRoles, children }: ProtectRouteProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();

  const { userInfo, loader } = useSelector((state: RootState) => state.auth);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const token = localStorage.getItem("accessToken");
  //   if (!userInfo && token) {
  //     dispatch(user_info(token)).finally(() => setLoading(false));
  //   } else {
  //     setLoading(false);
  //   }
  // }, [dispatch, userInfo]);

  // if (loading || loader) return <div className="text-center mt-10">Loading...</div>;

  if (!userInfo) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  if (!allowedRoles.includes(userInfo.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default ProtectRoutes;
