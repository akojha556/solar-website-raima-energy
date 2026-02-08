import { Link } from "react-router-dom";
import { getServices } from "../../../services/serviceService";
import { useState, useEffect } from "react";

const ServiceList = () => {
     const [services, setServices] = useState([]);

     useEffect(() => {
          const fetchProducts = async () => {
               try {
                    const res = await getServices();
                    setServices(res.data);
               } catch (error) {
                    console.error("Failed to fetch products", error);
               }
          };

          fetchProducts();
     }, []);


     return (
          <div>
               {/* Header */}
               <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-semibold text-gray-700">
                         Services
                    </h2>

                    <Link
                         to="/admin/services/add-service"
                         className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                         + Add Service
                    </Link>
               </div>

               {/* Table */}
               <div className="bg-white rounded-xl shadow overflow-x-auto">
                    <table className="w-full text-left">
                         <thead className="bg-gray-100 text-gray-600 text-sm">
                              <tr>
                                   <th className="px-6 py-3">Image</th>
                                   <th className="px-6 py-3">Title</th>
                                   <th className="px-6 py-3">Slug</th>
                                   <th className="px-6 py-3 text-right">Actions</th>
                              </tr>
                         </thead>

                         <tbody>
                              {services.map((service) => (
                                   <tr
                                        key={service._id}
                                        className="border-t hover:bg-gray-50"
                                   >
                                        {/* Image */}
                                        <td className="px-6 py-4">
                                             <img
                                                  src={service.images.main.url}
                                                  alt={service.title}
                                                  className="w-16 h-12 object-cover rounded"
                                             />
                                        </td>

                                        {/* Title */}
                                        <td className="px-6 py-4 font-medium text-gray-800">
                                             {service.title}
                                        </td>

                                        {/* Slug */}
                                        <td className="px-6 py-4 text-gray-600 text-sm">
                                             {service.slug}
                                        </td>

                                        {/* Actions */}
                                        <td className="px-6 py-4 text-right space-x-3">
                                             <Link
                                                  to={`/admin/services/edit/${service.id}`}
                                                  className="text-blue-600 hover:underline"
                                             >
                                                  Edit
                                             </Link>

                                             <button className="text-red-600 hover:underline">
                                                  Delete
                                             </button>
                                        </td>
                                   </tr>
                              ))}

                              {services.length === 0 && (
                                   <tr>
                                        <td
                                             colSpan="4"
                                             className="px-6 py-6 text-center text-gray-500"
                                        >
                                             No services found
                                        </td>
                                   </tr>
                              )}
                         </tbody>
                    </table>
               </div>
          </div>
     );
};

export default ServiceList;
