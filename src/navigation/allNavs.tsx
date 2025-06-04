import React from "react";
import {
  MdOutlineDashboard,
  MdOutlineShoppingCart,
  MdCategory,
  MdPeopleOutline,
  MdPayment,
  MdBlock,
  MdPersonAddAlt,
  MdChatBubbleOutline,

  MdAddBox,
  MdInventory2,
  MdLocalOffer,
  MdShoppingCart,
  MdChat,
  MdSupportAgent,
} from "react-icons/md";

export type allNavsProps = {
  id: number;
  title: string;
  icon: React.ReactElement;
  role: string;
  path: string;
};

export const allNavs: allNavsProps[] = [
  {
    id: 1,
    title: "Dashboard",
    icon: <MdOutlineDashboard />,
    role: "admin",
    path: "/admin/dashboard",
  },
  {
    id: 2,
    title: "Orders",
    icon: <MdOutlineShoppingCart />,
    role: "admin",
    path: "/admin/dashboard/orders",
  },
  {
    id: 3,
    title: "Category",
    icon: <MdCategory />,
    role: "admin",
    path: "/admin/dashboard/category",
  },
  {
    id: 4,
    title: "Sellers",
    icon: <MdPeopleOutline />,
    role: "admin",
    path: "/admin/dashboard/sellers",
  },
  {
    id: 5,
    title: "Payment Request",
    icon: <MdPayment />,
    role: "admin",
    path: "/admin/dashboard/payment-request",
  },
  {
    id: 6,
    title: "Deactive Sellers",
    icon: <MdBlock />,
    role: "admin",
    path: "/admin/dashboard/deactive-sellers",
  },
  {
    id: 7,
    title: "Seller Request",
    icon: <MdPersonAddAlt />,
    role: "admin",
    path: "/admin/dashboard/seller-request",
  },
  {
    id: 8,
    title: "Live Chat",
    icon: <MdChatBubbleOutline />,
    role: "admin",
    path: "/admin/dashboard/live-chat",
  },

  {
    id: 9,
    title: "Dashboard",
    icon: <MdOutlineDashboard />,
    role: "seller",
    path: "/seller/dashboard",
  },
  {
    id: 10,
    title: "Add Product",
    icon: <MdAddBox />,
    role: "seller",
    path: "/seller/dashboard/add-product",
  },
  {
    id: 11,
    title: "All Products",
    icon: <MdInventory2 />,
    role: "seller",
    path: "/seller/dashboard/all-products",
  },
  {
    id: 12,
    title: "Discount Product",
    icon: <MdLocalOffer />,
    role: "seller",
    path: "/seller/dashboard/discount-product",
  },
  {
    id: 13,
    title: "Orders",
    icon: <MdShoppingCart />,
    role: "seller",
    path: "/seller/dashboard/orders",
  },
  {
    id: 14,
    title: "Payments",
    icon: <MdPayment />,
    role: "seller",
    path: "/seller/dashboard/payments",
  },
  {
    id: 15,
    title: "Chat Customer",
    icon: <MdChat />,
    role: "seller",
    path: "/seller/dashboard/chat-customer",
  },
  {
    id: 16,
    title: "Chat Support",
    icon: <MdSupportAgent />,
    role: "seller",
    path: "/seller/dashboard/chat-support",
  },
];
