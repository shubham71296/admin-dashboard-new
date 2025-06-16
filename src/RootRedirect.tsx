import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./redux/store";
import { user_info } from "./redux/reducers/authReducer";

const RootRedirect = () => {
  const [loading, setLoading] = useState(true); 
  const { userInfo, loader } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      dispatch(user_info(token)).finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [dispatch]);

  if (loading || loader) {
    return null; // or show spinner
  }
  
  if (userInfo?.role === "admin") {
    return <Navigate to="/admin/dashboard" replace />;
  }
  if (userInfo?.role === "seller") {
    return <Navigate to="/seller/dashboard" replace />;
  }

  return <Navigate to="/login" replace />;
};

export default RootRedirect;

