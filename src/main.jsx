import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  BrowserRouter,
  createBrowserRouter,
  Router,
  RouterProvider,
} from "react-router";
import App from "./webpages/App.jsx";
import ShoppingPage from "./webpages/ShoppingPage.jsx";
import Checkout from "./webpages/Checkout.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/shop", element: <ShoppingPage /> },
  { path: "/checkout", element: <Checkout /> },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
