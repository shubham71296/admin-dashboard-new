import RootRedirect from "../../RootRedirect";
import AdminLogin from "../../views/auth/AdminLogin";
import Login from "../../views/auth/Login";
import Register from "../../views/auth/Register";
import UnAuthorized from "../../views/UnAuthorized";

const publicRoutes = [
  {
    path: "/",
    element: <RootRedirect />
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/admin/login',
    element: <AdminLogin />,
  },
  {
    path: "/unauthorized",
    element: <UnAuthorized />,
  }
];


export default publicRoutes;