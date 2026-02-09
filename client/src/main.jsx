import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Public pages
import Home from "./pages/public/Home";
import About from "./pages/public/About";
import Products from "./pages/public/Products";
import ProductDetails from "./pages/public/ProductDetails.jsx";
import Services from "./pages/public/Services.jsx";
import ServiceDetails from "./pages/public/ServiceDetails.jsx";
import Contact from "./pages/public/Contact";
import Faq from "./pages/public/Faq.jsx";
import NotFound from "./pages/public/NotFound.jsx";

//Admin pages
import AdminLayout from "./pages/admin/layout/AdminLayout.jsx";
import Dashboard from "./pages/admin/dashboard/Dashboard.jsx";
import ProductList from "./pages/admin/products/ProductList.jsx";
import ServiceList from "./pages/admin/services/ServiceList.jsx";
import Login from "./pages/admin/login/Login.jsx";
import ProtectedRoute from "./routes/ProtectedRoutes.jsx";
import AddProduct from "./pages/admin/products/AddProduct.jsx";
import EditProduct from "./pages/admin/products/EditProduct.jsx";
import AddService from "./pages/admin/services/AddService.jsx";
import EditService from "./pages/admin/services/EditService.jsx";
import Enquiries from "./pages/admin/enquires/Enquiries.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "products", element: <Products /> },
      { path: "products/:slug", element: <ProductDetails /> },
      { path: "services", element: <Services /> },
      { path: "services/:slug", element: <ServiceDetails /> },
      { path: "contact", element: <Contact /> },
      { path: "faqs", element: <Faq /> },
      { path: "*", element: <NotFound /> }
    ]
  }
  ,
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/admin",
        element: <AdminLayout />,
        children: [
          { index: true, element: <Dashboard /> },
          { path: "dashboard", element: <Dashboard /> },
          { path: "products", element: <ProductList /> },
          { path: "products/add-product", element: <AddProduct /> },
          { path: "products/edit-product/:id", element: <EditProduct /> },
          { path: "services", element: <ServiceList /> },
          { path: "services/add-service", element: <AddService /> },
          { path: "services/edit-service/:id", element: <EditService /> },
          { path: "enquiries", element: <Enquiries /> }
        ],
      },
    ],
  }

  ,
  {
    path: "/login",
    element: <Login />
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
