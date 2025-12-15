import { Link } from "react-router-dom";

const NotFound = () => {
     return (
          <section className="min-h-[70vh] flex items-center justify-center px-6 bg-white">
               <div className="text-center max-w-xl">
                    {/* Error Code */}
                    <h1 className="text-7xl font-bold text-green-600 mb-4">404</h1>

                    {/* Message */}
                    <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                         Oops! Page not found
                    </h2>

                    <p className="text-gray-600 mb-6">
                         The page you're looking for doesn't exist or may have been moved.
                         Don't worry — you can continue exploring our website below.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                         <Link
                              to="/"
                              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                         >
                              Go to Home
                         </Link>

                         <a
                              href="https://wa.me/6033322529"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-6 py-3 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition"
                         >
                              WhatsApp Us
                         </a>
                    </div>

                    {/* Popular Links */}
                    <div className="text-sm text-gray-500">
                         <p className="mb-2 font-medium text-gray-700">
                              Popular pages:
                         </p>
                         <div className="flex flex-wrap justify-center gap-4">
                              <Link to="/about" className="hover:text-green-600 transition">
                                   About Us
                              </Link>
                              <Link to="/products" className="hover:text-green-600 transition">
                                   Products
                              </Link>
                              <Link to="/contact" className="hover:text-green-600 transition">
                                   Contact
                              </Link>
                              <Link to="/faq" className="hover:text-green-600 transition">
                                   FAQ
                              </Link>
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default NotFound;
