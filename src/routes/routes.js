import { lazy } from "react";
import NotFound from "../components/NotFound/NotFound.jsx";

const Home = lazy(() => import("../pages/Home/Home.jsx"));
const ProductCart = lazy(() => import("../pages/ProductCart/index.jsx"));
const Blogs = lazy(() => import("../pages/Blogs/index.jsx"));
const ProductView = lazy(() => import("../pages/ProductView/index.jsx"));
const MyAccount = lazy(() => import("../pages/MyAccount/index.jsx"));

const AccountDetails = lazy(() =>
  import("../components/AccountDetails/index.jsx")
);
const MyProduct = lazy(() => import("../components/MyProducts/index.jsx"));
const Address = lazy(() => import("../components/Address/index.jsx"));
const Wishlist = lazy(() => import("../components/Wishlist/index.jsx"));

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/productCart", element: <ProductCart /> },
  { path: "/blogs", element: <Blogs /> },
  { path: "/myAccount", element: <MyAccount /> },
  { path: "/productView", element: <ProductView /> },
  { path: "/productCart", element: <ProductCart /> },
  { path: "*", element: <NotFound /> },
];

export const accountRoutes = [
  { path: "/accountDetails", element: <AccountDetails /> },
  { path: "/myProduct", element: <MyProduct /> },
  { path: "/address", element: <Address /> },
  { path: "/wishlist", element: <Wishlist /> },
];
