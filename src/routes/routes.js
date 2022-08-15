import { lazy } from "react";
import NotFound from "../components/NotFound/NotFound.jsx";

const Home = lazy(() => import("../pages/Home/Home.jsx"));
const Shop = lazy(() => import("../pages/Product/Shop.jsx"));

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/shop", element: <Shop /> },
  { path: "*", element: <NotFound /> },
];
