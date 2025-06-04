import AdminDashboard from "../../views/admin/AdminDashboard";
import Category from "../../views/admin/Category";
import DeactiveSellers from "../../views/admin/DeactiveSellers";
import LiveChat from "../../views/admin/LiveChat";
import OrderDetails from "../../views/admin/OrderDetails";
import Orders from "../../views/admin/Orders";
import PaymentRequest from "../../views/admin/PaymentRequest";
import SellerDetails from "../../views/admin/SellerDetails";
import SellerRequest from "../../views/admin/SellerRequest";
import Sellers from "../../views/admin/Sellers";


export const adminRoutes = [
  {
    path: "admin/dashboard",
    element: <AdminDashboard />,
    role:"admin"
  },
  {
    path: "admin/dashboard/orders",
    element: <Orders />,
    role:"admin"
  },

  {
    path: "admin/dashboard/order-details/:id",
    element: <OrderDetails />,
    role:"admin"
  },
  {
    path: "admin/dashboard/category",
    element: <Category />,
    role:"admin"
  },
  {
    path: "admin/dashboard/sellers",
    element: <Sellers />,
    role:"admin"
  },
  {
    path: "admin/dashboard/payment-request",
    element: <PaymentRequest />,
    role:"admin"
  },
  {
    path: "admin/dashboard/deactive-sellers",
    element: <DeactiveSellers />,
    role:"admin"
  },
  {
    path: "admin/dashboard/seller-request",
    element: <SellerRequest />,
    role:"admin"
  },
  {
    path: "admin/dashboard/seller-details/:id",
    element: <SellerDetails />,
    role:"admin"
  },
  {
    path: "admin/dashboard/live-chat",
    element: <LiveChat />,
    role:"admin"
  },
];

