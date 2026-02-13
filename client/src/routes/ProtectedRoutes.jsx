import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import api from "../services/api";

const ProtectedRoute = () => {
     const [loading, setLoading] = useState(true);
     const [isAuthenticated, setIsAuthenticated] = useState(false);

     useEffect(() => {
          const checkAuth = async () => {
               try {
                    const response = await api.get("/api/admin/me");
                    console.log(response);

                    setIsAuthenticated(true);
               } catch (error) {
                    setIsAuthenticated(false);
                    console.log(error);

               } finally {
                    setLoading(false);
               }
          }

          checkAuth();
     }, []);

     if (loading)
          return (
               <div className="flex items-center justify-center h-screen bg-gray-100 ">
                    <div className="bg-white shadow-md rounded-xl px-8 py-6 flex items-center gap-4">
                         <i className="fa-solid fa-bars-progress text-xl text-blue-500 animate-bounce"></i>
                         <span className="text-blue-500 font-medium">
                              Checking authentication...
                         </span>
                    </div>
               </div>
          );

     return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
