import { useState } from "react";
import { loginAdmin } from "../../../services/authService";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
     const [username, setUsername] = useState("");
     const [password, setPassword] = useState("");
     const [isLoading, setIsLoading] = useState(false);

     const navigate = useNavigate();

     const handleSubmit = async (e) => {
          e.preventDefault();
          try {
               setIsLoading(true);
               await loginAdmin({ username, password });
               navigate("/admin/dashboard");
          } catch (error) {
               alert("Login failled");
          } finally {
               setIsLoading(false);
          }
     };

     return (
          <div className="min-h-screen flex items-center justify-center bg-gray-100">
               <div className="w-full max-w-sm bg-white rounded-xl shadow-lg p-8">
                    <h2 className="text-2xl font-semibold text-center text-gray-900">
                         Admin Login
                    </h2>
                    <p className="text-sm text-center text-gray-500 mt-1 mb-6">
                         Sign in to manage your dashboard
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                         <input
                              type="email"
                              placeholder="Email address"
                              value={username}
                              onChange={(e) => setUsername(e.target.value)}
                              required
                              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
                         />

                         <input
                              type="password"
                              placeholder="Password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              required
                              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
                         />

                         {/* Forgot password link */}
                         <div className="text-right">
                              <Link
                                   to="/admin/forgot-password"
                                   className="text-sm text-gray-600 hover:text-gray-900"
                              >
                                   Forgot password?
                              </Link>
                         </div>

                         <button
                              type="submit"
                              className={`w-full py-2.5 rounded-lg text-white text-sm font-medium transition duration-300 ${isLoading ? "bg-gray-600 cursor-not-allowed " : "bg-gray-900 hover:bg-gray-700 cursor-pointer"}`}
                         >
                              {isLoading && (
                                   <i className="fa-solid fa-spinner fa-spin"></i>
                              )}
                              {isLoading ? "Logging in..." : "Login"}
                         </button>
                    </form>
               </div>
          </div>
     );
};

export default Login;
