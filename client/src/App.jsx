import React from "react";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/layout/ScrollToTop";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToHash from "./components/layout/ScrollToHash";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <ScrollToHash />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App;
