import ProtectRoutes from "./protectRoutes";
import AddProduct from "../../views/seller/AddProduct";
import AllProducts from "../../views/seller/AllProducts";
import ChatCustomer from "../../views/seller/ChatCustomer";
import ChatSupport from "../../views/seller/ChatSupport";
import DiscountProduct from "../../views/seller/DiscountProduct";
import Payments from "../../views/seller/Payments";
import SellerDashboard from "../../views/seller/SellerDashboard";
import Orders from "../../views/seller/Orders";

export const sellerRoutes = [
  {
    path: "/seller/dashboard",
    element: (
      <ProtectRoutes element={<SellerDashboard />} allowedRoles={["seller"]} />
    ),
  },
  {
    path: "/seller/dashboard/add-product",
    element: (
      <ProtectRoutes element={<AddProduct />} allowedRoles={["seller"]} />
    ),
  },
  {
    path: "/seller/dashboard/all-products",
    element: (
      <ProtectRoutes element={<AllProducts />} allowedRoles={["seller"]} />
    ),
  },
  {
    path: "/seller/dashboard/discount-product",
    element: (
      <ProtectRoutes element={<DiscountProduct />} allowedRoles={["seller"]} />
    ),
  },
  {
    path: "/seller/dashboard/orders",
    element: <ProtectRoutes element={<Orders />} allowedRoles={["seller"]} />,
  },
  {
    path: "/seller/dashboard/payments",
    element: <ProtectRoutes element={<Payments />} allowedRoles={["seller"]} />,
  },
  {
    path: "/seller/dashboard/chat-customer",
    element: (
      <ProtectRoutes element={<ChatCustomer />} allowedRoles={["seller"]} />
    ),
  },
  {
    path: "/seller/dashboard/chat-support",
    element: (
      <ProtectRoutes element={<ChatSupport />} allowedRoles={["seller"]} />
    ),
  },
];
