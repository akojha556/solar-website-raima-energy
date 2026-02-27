import { useState } from "react";
import { loginAdmin } from "../../../services/authService";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
     const [username, setUsername] = useState("");
     const [password, setPassword] = useState("");
     const [isLoading, setIsLoading] = useState(false);
     const [showPassword, setShowPassword] = useState(false);

     const navigate = useNavigate();

     const handleSubmit = async (e) => {
          e.preventDefault();
          try {
               setIsLoading(true);
               await loginAdmin({ username, password });
               navigate("/admin/dashboard");
          } catch (error) {
               console.log(error);               
          } finally {
               setIsLoading(false);
          }
     };

     return (
          <div className="min-h-screen flex flex-col items-center pt-14 bg-gray-100">
               <div className="text-center mb-10">
                    <img
                         src="https://res.cloudinary.com/dgokm518s/image/upload/v1770494016/fevicon_fb3yom.png"
                         alt="Raima-energy"
                         className="w-60 h-25 object-cover mx-auto"
                    />
                    <p className="text-sm text-gray-500">
                         Hello 👋 Welcome! Sign in to continue
                    </p>
               </div>
               <div className="w-full max-w-sm bg-white rounded-xl shadow-lg p-8 flex-col flex justify-between items-center">
                    <h2 className="text-3xl font-bold text-center text-gray-900">
                         Admin Login
                    </h2>
                    <p className="text-sm text-center text-gray-500 mt-1 mb-6">
                         Sign in to manage your dashboard
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4 w-full">
                         <input
                              type="email"
                              placeholder="Email address"
                              value={username}
                              onChange={(e) => setUsername(e.target.value)}
                              required
                              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
                         />

                         <div className="relative w-full">
                              <input
                                   type={showPassword ? "text" : "password"}
                                   placeholder="Password"
                                   value={password}
                                   onChange={(e) => setPassword(e.target.value)}
                                   required
                                   className={`w-full px-4 py-2.5 pr-10 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900`}
                              />

                              <button
                                   type="button"
                                   onClick={() => setShowPassword(!showPassword)}
                                   className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer"
                              >
                                   <i className={`fa-solid ${showPassword ? "fa-eye" : "fa-eye-slash"}`}></i>
                              </button>
                         </div>

                         {/* Forgot password link */}
                         <div className="text-right">
                              <Link
                                   to="/forgot-password"
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
                                   <i className="fa-solid fa-spinner fa-spin mr-2"></i>
                              )}
                              {isLoading ? "Logging in..." : "Login"}
                         </button>
                    </form>
               </div>
          </div>
     );
};

export default Login;
