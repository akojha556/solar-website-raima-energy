import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getLeads, removeLead } from "../../../services/leadService";
import DeleteConfirmModal from "../../../components/admin/DeleteConfirmModal";

const Enquiries = () => {
     const [leads, setLeads] = useState([]);

     const [showModal, setShowModal] = useState(false);
     const [deleteId, setDeleteId] = useState(null);
     const [isDeleting, setIsDeleting] = useState(false);

     //Delete lead
     const handleDelete = async (id) => {
          try {
               setIsDeleting(true);
               await removeLead(id);

               setShowModal(false);
               setDeleteId(null);
               setLeads((prev) => {
                    return prev.filter((lead) => lead._id !== id);
               });
          } catch (error) {
               alert(error.message);
               setShowModal(false);
          } finally {
               setIsDeleting(false);
          }
     }

     //Fetch all lead details
     useEffect(() => {
          const fetchLeads = async () => {
               try {
                    const response = await getLeads();
                    console.log(response.data);
                    setLeads(response.data);
               } catch (error) {
                    alert(error.message);
                    setLeads([]);
               }
          };

          fetchLeads();
     }, [])

     return (
          <div>
               {/* Header */}
               <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-semibold text-gray-700">
                         Enquiries
                    </h2>

                    <Link
                         to="/admin/enquiries/add-lead"
                         className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition duration-300 hover:scale-105"
                    >
                         + Add New Lead
                    </Link>
               </div>
               <div className="bg-white rounded-xl shadow overflow-x-auto">
                    <table className="w-full text-left">
                         <thead className="bg-gray-100 text-gray-600 text-sm">
                              <tr>
                                   <th className="px-6 py-3">S.no</th>
                                   <th className="px-6 py-3">Name</th>
                                   <th className="px-6 py-3">E-mail</th>
                                   <th className="px-6 py-3">Contact No.</th>
                                   <th className="px-6 py-3">City</th>
                                   <th className="px-6 py-3 text-right">Actions</th>
                              </tr>
                         </thead>
                         <tbody>
                              {leads.map((lead, index) => (
                                   <tr key={lead._id} className="border-t hover:bg-gray-50">
                                        <td className="px-6 py-4">{index + 1}</td>
                                        <td className="px-6 py-4">{lead.name}</td>
                                        <td className="px-6 py-4">{lead.email}</td>
                                        <td className="px-6 py-4">{lead.phoneNumber}</td>
                                        <td className="px-6 py-4">{lead.city}</td>
                                        {/* Actions */}
                                        <td className="px-6 py-4 text-right space-x-3">
                                             <Link
                                                  to={`/admin/leads/edit-lead/${lead._id}`}
                                                  className="text-blue-600 hover:underline cursor-pointer duration-300"
                                             >
                                                  Edit
                                             </Link>

                                             <button
                                                  onClick={() => {
                                                       setShowModal(true);
                                                       setDeleteId(lead._id);
                                                  }} className="text-red-600 hover:underline cursor-pointer"
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
                         </tbody>
                    </table>
               </div>
          </div>
     );
};

export default Enquiries;