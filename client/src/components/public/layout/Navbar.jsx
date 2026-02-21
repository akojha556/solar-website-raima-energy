import { Link } from "react-router-dom";
import ProductDropdown from "../desktop/ProductDropdown.jsx";
import ServiceDropdown from "../desktop/ServiceDropdown.jsx";
import MobileMenuDropdown from "../mobile/MobileMenuDropdown.jsx";
import { Button } from "../ui/Button.jsx";

const Navbar = () => {

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" >
          <img src="https://res.cloudinary.com/dgokm518s/image/upload/f_auto,q_auto/v1770494016/fevicon_fb3yom.png" alt="RaimaEnergy Logo" className="lg:h-30 w-auto h-25 sm:h-26" />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex md:items-center md:text-sm lg:text-base font-medium h-full">
          <li className="h-full">
            <Link to="/" className="relative flex items-center h-full p-6 md:px-4 lg:px-6 lg:hover:text-green-600 after:content-[''] after:absolute after:left-0 after:bottom-2 after:w-0 after:h-0.5 after:bg-green-600 after:transition-all after:duration-300 hover:text-green-600 hover:after:w-full">Home</Link>
          </li>

          <li className="h-full">
            <Link to="/about" className="relative flex items-center h-full p-6 md:px-4 lg:px-6 lg:hover:text-green-600 after:content-[''] after:absolute after:left-0 after:bottom-2 after:w-0 after:h-0.5 after:bg-green-600 after:transition-all after:duration-300 hover:text-green-600 hover:after:w-full">
              About Us
            </Link>
          </li>

          <ProductDropdown />

          <ServiceDropdown />

          <li className="h-full">
            <Link
              to="/contact"
              className="relative flex items-center h-full p-6 md:px-4 lg:px-6 lg:hover:text-green-600 after:content-[''] after:absolute after:left-0 after:bottom-2 after:w-0 after:h-0.5 after:bg-green-600 after:transition-all after:duration-300 hover:text-green-600 hover:after:w-full"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        <Link to="/contact" className="hidden md:block">
          <Button variant="primary" size="lg">Get A Quote</Button>
        </Link>

        <div className={`md:hidden bg-white transition-all duration-300`}>
          <MobileMenuDropdown />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
