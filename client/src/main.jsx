import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import Home from "./pages/public/Home";
import About from "./pages/public/About";
import Products from "./pages/public/Products";
import ProductDetails from "./pages/public/ProductDetails.jsx";
import Services from "./pages/public/Services.jsx";
import ServiceDetails from "./pages/public/ServiceDetails.jsx";
import Contact from "./pages/public/Contact";
import Faq from "./pages/public/Faq.jsx";
import NotFound from "./pages/public/NotFound.jsx";
import AddProduct from "./pages/admin/AddProduct.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/products", element: <Products /> },
      { path: "/products/:slug", element: <ProductDetails /> },
      { path: "/services", element: <Services /> },
      { path: "/services/:slug", element: <ServiceDetails /> },
      { path: "/contact", element: <Contact /> },
      { path: "/faqs", element: <Faq /> },
      { path: "/admin/add-product", element: <AddProduct /> },
      { path: "*", element: <NotFound /> },
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
