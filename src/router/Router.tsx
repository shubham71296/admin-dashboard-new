import { Routes, Route } from "react-router-dom";
import publicRoutes from "./routes/publicRoutes";
import { adminRoutes } from "./routes/adminRoutes";
import { sellerRoutes } from "./routes/sellerRoutes";
import MainLayout from "../layout/MainLayout";
import ProtectRoutes from "./routes/protectRoutes";
import { useAuth } from "../context/AuthContext";

const Router = () => {
  const {user} = useAuth();
  return (
    <Routes>
      {publicRoutes.map(({ path, element }, idx) => (
        <Route key={`public-${idx}`} path={path} element={element} />
      ))}

      <Route
        path="/"
        element={
          <ProtectRoutes allowedRoles={["admin", "seller"]} userRole={user?.role ?? null}>
            <MainLayout />
          </ProtectRoutes>
        }
      >
        {adminRoutes.map(({ path, element, role }, idx) => (
          <Route
            key={`admin-${idx}`}
            path={path}
            element={
              <ProtectRoutes allowedRoles={[role]} userRole={user?.role ?? null}>
                {element}
              </ProtectRoutes>
            }
          />
        ))}

        {sellerRoutes.map(({ path, element, role }, idx) => (
          <Route
            key={`seller-${idx}`}
            path={path}
            element={
              <ProtectRoutes allowedRoles={[role]} userRole={user?.role ?? null}>
                {element}
              </ProtectRoutes>
            }
          />
        ))}
      </Route>

      <Route path="/unauthorized" element={<div>Unauthorized Access</div>} />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};

export default Router;
