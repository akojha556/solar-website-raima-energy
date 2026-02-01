import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

const ProtectedRoute = () => {
     const [loading, setLoading] = useState(true);
     const [isAuth, setIsAuth] = useState(false);

     useEffect(() => {
          api
               .get("/api/admin/me")
               .then(() => setIsAuth(true))
               .catch(() => setIsAuth(false))
               .finally(() => setLoading(false));
     }, []);

     if (loading) return null; // or spinner

     return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
