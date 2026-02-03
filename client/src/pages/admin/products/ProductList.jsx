import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProducts } from "../../../services/productService";

const ProductList = () => {
     const [products, setProducts] = useState([]);
     const [loading, setLoading] = useState(true);

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
                         className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                         + Add Product
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
                              {/* Loading */}
                              {loading && (
                                   <tr>
                                        <td
                                             colSpan="4"
                                             className="px-6 py-6 text-center text-gray-500"
                                        >
                                             Loading products...
                                        </td>
                                   </tr>
                              )}

                              {/* Data */}
                              {!loading &&
                                   products.map((product) => (
                                        <tr
                                             key={product._id}
                                             className="border-t hover:bg-gray-50"
                                        >
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
                                                       to={`/admin/products/edit/${product._id}`}
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

                              {/* Empty state */}
                              {!loading && products.length === 0 && (
                                   <tr>
                                        <td
                                             colSpan="4"
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
