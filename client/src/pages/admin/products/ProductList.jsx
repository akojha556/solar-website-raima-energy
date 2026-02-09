import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProducts, deleteProduct } from "../../../services/productService";
import DeleteConfirmModal from "../../../components/admin/DeleteConfirmModal";

const ProductList = () => {
     const [products, setProducts] = useState([]);
     const [loading, setLoading] = useState(true);

     const [showModal, setShowModal] = useState(false);
     const [deleteId, setDeleteId] = useState(null);
     const [isDeleting, setIsDeleting] = useState(false);

     const handleDelete = async (id) => {
          try {
               setIsDeleting(true);
               const response = await deleteProduct(id);
               setShowModal(false);
               setDeleteId(null);
               setProducts((prev) => {
                    return prev.filter((product) => product._id !== id);
               });
          } catch (error) {
               console.error(error);
               setShowModal(false);
          } finally {
               setIsDeleting(false);
          }
     };

     useEffect(() => {
          const fetchProducts = async () => {
               try {
                    const res = await getAllProducts();
                    setProducts(res.data);
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
                         Products
                    </h2>

                    <Link
                         to="/admin/products/add-product"
                         className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition duration-300 hover:scale-105"
                    >
                         + Add Product
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
                              {/* Loading */}
                              {loading && (
                                   <tr>
                                        <td
                                             colSpan="5"
                                             className="px-6 py-6 text-center text-gray-500"
                                        >
                                             Loading all products...
                                        </td>
                                   </tr>
                              )}

                              {/* Data */}
                              {!loading &&
                                   products.map((product, i) => (
                                        <tr
                                             key={product._id}
                                             className="border-t hover:bg-gray-50"
                                        >
                                             <td className="px-6 py-4">{i + 1}.</td>
                                             {/* Image */}
                                             <td className="px-6 py-4">
                                                  <img
                                                       src={product.images.main.url}
                                                       alt={product.title}
                                                       className="w-16 h-12 object-cover rounded"
                                                  />
                                             </td>

                                             {/* Title */}
                                             <td className="px-6 py-4 font-medium text-gray-800">
                                                  {product.title}
                                             </td>

                                             {/* Slug */}
                                             <td className="px-6 py-4 text-gray-600 text-sm">
                                                  {product.slug}
                                             </td>

                                             {/* Actions */}
                                             <td className="px-6 py-4 text-right space-x-3">
                                                  <Link
                                                       to={`/admin/products/edit-product/${product._id}`}
                                                       className="text-blue-600 hover:underline cursor-pointer duration-300"
                                                  >
                                                       Edit
                                                  </Link>

                                                  <button
                                                       onClick={() => {
                                                            setShowModal(true);
                                                            setDeleteId(product._id);
                                                       }} className="text-red-600 hover:underline cursor-pointer"
                                                  >
                                                       Delete
                                                  </button>
                                                  {/* Modal */}
                                                  {showModal &&
                                                       <DeleteConfirmModal onCancel={() => {
                                                            setShowModal(false);
                                                            setDeleteId(null);
                                                       }} handleDelete={() => handleDelete(deleteId)}
                                                            loading={isDeleting} />}
                                             </td>
                                        </tr>
                                   ))}

                              {/* Empty state */}
                              {!loading && products.length === 0 && (
                                   <tr>
                                        <td
                                             colSpan="5"
                                             className="px-6 py-6 text-center text-gray-500"
                                        >
                                             No products found
                                        </td>
                                   </tr>
                              )}
                         </tbody>
                    </table>
               </div>
          </div>
     );
};

export default ProductList;
