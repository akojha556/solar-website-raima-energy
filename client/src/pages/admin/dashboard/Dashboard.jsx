import { useState, useEffect } from "react";
import StatCard from "../../../components/admin/StatCard";
import { getProductCount } from "../../../services/productService";
import { getServiceCount } from "../../../services/serviceService";

const Dashboard = () => {
     const [productCount, setProductCount] = useState(0);
     const [serviceCount, setServiceCount] = useState(0);
     const [loading, setLoading] = useState(true);

     useEffect(() => {
          const getCount = async () => {
               try {
                    const [product, service] = await Promise.all([
                         getProductCount(),
                         getServiceCount(),
                    ]);

                    setProductCount(product.data);
                    setServiceCount(service.data);
               } catch (error) {
                    console.log(error.message);
               } finally {
                    setLoading(false);
               }
          };

          getCount();
     }, []);


     return (
          <div>
               {loading ?
                    <div className="px-6 py-6 text-gray-500">Loading...</div> :
                    <div>
                         {/* Page Title */}
                         <h2 className="text-2xl font-semibold text-gray-700 mb-6">
                              Dashboard
                         </h2>

                         {/* Stats */}
                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                              <StatCard
                                   title="Total Products"
                                   value={productCount}
                                   icon="fas fa-box"
                                   color="bg-blue-600"
                              />

                              <StatCard
                                   title="Total Services"
                                   value={serviceCount}
                                   icon="fas fa-tools"
                                   color="bg-green-600"
                              />

                              <StatCard
                                   title="Total Enquiries"
                                   value={0}
                                   icon="fas fa-envelope"
                                   color="bg-purple-600"
                              />
                         </div>
                    </div>
               }
          </div>
     );
};

export default Dashboard;
