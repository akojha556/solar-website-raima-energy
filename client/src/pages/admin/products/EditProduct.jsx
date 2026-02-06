import { useState } from "react";
import { getProduct } from "../../../services/productService";
import EditDetailsSection from "../../../components/admin/EditDetailsSection";

const emptyItem = { title: "", desc: "" };
const MAX_SIZE = 5 * 1024 * 1024;

const EditProduct = () => {
     const [title, setTitle] = useState("");
     const [shortDesc, setShortDesc] = useState("");
     const [overview, setOverview] = useState("");
     const [idealFor, setIdealFor] = useState("");

     const [applications, setApplications] = useState([emptyItem]);
     const [benefits, setBenefits] = useState([emptyItem]);
     const [types, setTypes] = useState([emptyItem]);

     //Add new item
     const addItem = () => {
          setApplications((prev) => {
               return [...prev, emptyItem]
          });
     };

     //Remove item
     const removeItem = (index) => {
          setApplications((prev) => {
               return prev.filter((_, i) => i !== index);
          });
     };

     return (
          <div>
               <h1 className="text-2xl font-bold mb-6">Edit Product</h1>
               <form className="space-y-6">
                    <input
                         className="input"
                         placeholder="Title"
                         value={title}
                         onChange={(e) => setTitle(e.target.value)}
                         required
                    />

                    <textarea
                         className="textarea h-20"
                         placeholder="Short Description"
                         value={shortDesc}
                         onChange={(e) => setShortDesc(e.target.value)}
                         required
                    />

                    {/* Image upload area */}
                    <div className="flex gap-6">
                         <label className="w-44 h-44 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer flex items-center justify-center text-gray-500 hover:border-black transition overflow-hidden">
                         </label>
                         {/* IMAGE 2 */}
                         <label className="w-44 h-44 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer flex items-center justify-center text-gray-500 hover:border-black transition overflow-hidden">
                         </label>
                    </div>

                    <textarea
                         className="textarea h-28"
                         placeholder="Overview"
                         value={overview}
                         onChange={(e) => setOverview(e.target.value)}
                         required
                    />

                    <EditDetailsSection
                         title="Application"
                         items={applications}
                         addItem={addItem}
                         removeItem={removeItem}
                    />

                    <textarea
                         className="textarea h-20"
                         placeholder="Ideal For"
                         value={idealFor}
                         onChange={(e) => setIdealFor(e.target.value)}
                         required
                    />
                    <button
                         type="submit"
                         className={`px-6 py-2 rounded bg-black text-white flex items-center justify-center gap-2`}
                    >
                         Confirm
                    </button>
               </form>
          </div>
     )
}

export default EditProduct;