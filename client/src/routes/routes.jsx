import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/homePage";
import ProductsPage from "../pages/productsPage";
import ProductDetailPage from "../pages/productDetailPage";
import AboutPage from "../pages/aboutPage";

export const routes = createBrowserRouter([
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/products/:id",
    element: <ProductDetailPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
    children: [
      {
        index: true,
        element: "",
      },
      {
        path: "iphone",
        element: "",
      },
      {
        path: "iwatch",
        element: "",
      },
    ],
  },
]);
