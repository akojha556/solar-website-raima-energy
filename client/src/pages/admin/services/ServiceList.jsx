import { Link } from "react-router-dom";
import { getServices } from "../../../services/serviceService";
import { useState, useEffect } from "react";
import DeleteConfirmModal from "../../../components/admin/DeleteConfirmModal";
import { deleteService } from "../../../services/serviceService";

const ServiceList = () => {
     const [services, setServices] = useState([]);
     const [loading, setLoading] = useState(true);

     const [showModal, setShowModal] = useState(false);
     const [deleteId, setDeleteId] = useState(null);
     const [isDeleting, setIsDeleting] = useState(false);

     const handleDelete = async (id) => {
          try {
               setIsDeleting(true);
               const response = await deleteService(id);
               setShowModal(false);
               setDeleteId(null);
               setServices((prev) => {
                    return prev.filter((service) => service._id !== id);
               });
          } catch (error) {
               setShowModal(false);
          } finally {
               setIsDeleting(false);
          }
     }

     useEffect(() => {
          const fetchProducts = async () => {
               try {
                    const res = await getServices();
                    setServices(res.data);
               } catch (error) {
                    console.error("Failed to fetch products", error);
               } finally {
                    setLoading(false);
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
                                   <th className="px-6 py-3">S.No.</th>
                                   <th className="px-6 py-3">Image</th>
                                   <th className="px-6 py-3">Title</th>
                                   <th className="px-6 py-3">Slug</th>
                                   <th className="px-6 py-3 text-right">Actions</th>
                              </tr>
                         </thead>

                         <tbody>
                              {loading && (
                                   <tr>
                                        <td
                                             colSpan="5"
                                             className="px-6 py-6 text-center text-gray-500"
                                        >
                                             Loading all services...
                                        </td>
                                   </tr>
                              )}

                              {!loading &&
                                   services.map((service, i) => (
                                        <tr
                                             key={service._id}
                                             className="border-t hover:bg-gray-50"
                                        >
                                             <td className="p-6 py-4">{i + 1}.</td>
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
                                                       to={`/admin/services/edit-service/${service._id}`}
                                                       className="text-blue-600 hover:underline"
                                                  >
                                                       Edit
                                                  </Link>

                                                  <button
                                                       onClick={() => {
                                                            setShowModal(true);
                                                            setDeleteId(service._id);
                                                       }}
                                                       className="text-red-600 hover:underline cursor-pointer"
                                                  >
                                                       Delete
                                                  </button>
                                                  {/* Modal */}
                                                  {showModal &&
                                                       <DeleteConfirmModal
                                                            onCancel={() => {
                                                                 setShowModal(false);
                                                                 setDeleteId(null);
                                                            }}
                                                            handleDelete={() => handleDelete(deleteId)}
                                                            loading={isDeleting}
                                                       />}
                                             </td>
                                        </tr>
                                   ))}

                              {!loading && services.length === 0 && (
                                   <tr>
                                        <td
                                             colSpan="5"
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
