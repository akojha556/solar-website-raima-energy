import { createContext, useContext, useEffect, useState } from "react";
import { getAllProducts } from "../services/productService";
import { getServices } from "../services/serviceService";

const AppDataContext = createContext();

export const AppDataProvider = ({ children }) => {
    const [productData, setProductData] = useState([]);
    const [serviceData, setServiceData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true);
            setError(false);

            const [productRes, serviceRes] = await Promise.all([
                getAllProducts(),
                getServices()
            ]);

            setProductData(productRes.data);
            setServiceData(serviceRes.data);
        } catch (error) {
            alert(error.message);
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <AppDataContext.Provider value={{ productData, serviceData, loading, error, fetchData }}>
            {children}
        </AppDataContext.Provider>
    );
};

export const useAppData = () => useContext(AppDataContext);