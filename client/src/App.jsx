import { AppDataProvider } from "./context/AppDataContext";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/public/layout/ScrollToTop";
import Navbar from "./components/public/layout/Navbar";
import Footer from "./components/public/layout/Footer";
import ScrollToHash from "./components/public/layout/ScrollToHash";

const App = () => {
  return (
    <AppDataProvider>
      <ScrollToTop />
      <ScrollToHash />
      <Navbar />
      <Outlet />
      <Footer />
    </AppDataProvider>
  )
}

export default App;
