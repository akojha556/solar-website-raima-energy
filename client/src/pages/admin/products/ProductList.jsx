import { Link } from "react-router-dom";

const ProductList = () => {
     // TEMP UI data (based on your real schema)
     const products = [
          {
               id: 1,
               title: "Residential Rooftop Solar Power Plant",
               slug: "residential-rooftop-solar-power-plant",
               image:
                    "/uploads/products/residential-rooftop-solar-power-plant-main.png",
          },
     ];

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
                              {products.map((product) => (
                                   <tr
                                        key={product.id}
                                        className="border-t hover:bg-gray-50"
                                   >
                                        {/* Image */}
                                        <td className="px-6 py-4">
                                             <img
                                                  src={product.image}
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
                                                  to={`/admin/products/edit/${product.id}`}
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

                              {products.length === 0 && (
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
