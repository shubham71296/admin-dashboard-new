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
    element: <SellerDashboard />,
    role:"seller"
  },
  {
    path: "/seller/dashboard/add-product",
    element: <AddProduct />,
    role:"seller"
  },
  {
    path: "/seller/dashboard/all-products",
    element: <AllProducts />,
    role:"seller"
  },
  {
    path: "/seller/dashboard/discount-product",
    element: <DiscountProduct />,
    role:"seller"
  },
  {
    path: "/seller/dashboard/orders",
    element: <Orders />,
    role:"seller"
  },
  {
    path: "/seller/dashboard/payments",
    element: <Payments />,
    role:"seller"
  },
  {
    path: "/seller/dashboard/chat-customer",
    element: <ChatCustomer />,
    role:"seller"
  },
  {
    path: "/seller/dashboard/chat-support",
    element: <ChatSupport />,
    role:"seller"
  },
];
