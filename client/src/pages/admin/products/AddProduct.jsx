import { useState, useEffect, useRef } from "react";
import Section from "../../../components/admin/Section";
import { addProduct } from "../../../services/productService";
import { useNavigate } from "react-router-dom";

//Keeping outside so no more renders
const emptyItem = { title: "", desc: "" };
const MAX_SIZE = 5 * 1024 * 1024;

const AddProduct = () => {
     const navigate = useNavigate();
     const [isSubmitting, setIsSubmitting] = useState(false);

     const [image1, setImage1] = useState(null);
     const [image2, setImage2] = useState(null);

     const [preview1, setPreview1] = useState(null);
     const [preview2, setPreview2] = useState(null);

     const [imageError, setImageError] = useState(false);

     const [error, setError] = useState(false);
     const errorRef = useRef(null);

     const [title, setTitle] = useState("");
     const [shortDesc, setShortDesc] = useState("");
     const [overview, setOverview] = useState("");
     const [idealFor, setIdealFor] = useState("");

     const [applications, setApplications] = useState([emptyItem]);
     const [benefits, setBenefits] = useState([emptyItem]);
     const [types, setTypes] = useState([emptyItem]);

     //Add new item
     const addItem = (setter) => {
          setter((prev) => {
               return [...prev, emptyItem]
          });
     };

     //Remove item
     const removeItem = (setter, index) => {
          setter((prev) => {
               return prev.filter((_, i) => i !== index);
          });
     };

     //Handle array input change
     const handleChange = (setter, index, field, value) => {
          setter((prev) => (
               prev.map((item, i) => i === index ? { ...item, [field]: value } : item)
          ));
     };

     //Formadata
     const formData = new FormData();

     if (image1) formData.append("file", image1);
     if (image2) formData.append("file", image2);

     formData.append("title", title);
     formData.append("shortDesc", shortDesc);
     formData.append("overview", overview);
     formData.append("idealFor", idealFor);

     // arrays → stringify
     formData.append("applications", JSON.stringify(applications));
     formData.append("benefits", JSON.stringify(benefits));
     formData.append("types", JSON.stringify(types));

     //Handle form submit
     const handleSubmit = async (e) => {
          e.preventDefault();

          if (image1 === null || image2 === null) {
               setError(true);
               // If error already exists, scroll manually
               errorRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
               });
               return;
          }

          setError(false);

          if (isSubmitting) return;

          setIsSubmitting(true);

          try {
               const response = await addProduct(formData);

               console.log(response.data.product);
          } catch (error) {
               console.error(error);
               alert("Failed to add product");
          } finally {
               setIsSubmitting(false);
               navigate("/admin/products");
          }
     };

     useEffect(() => {
          if (error) {
               errorRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
               });
          }
     }, [error]);


     return (
          <div>
               <h1 className="text-2xl font-bold mb-6">Add Product</h1>
               <form onSubmit={handleSubmit} className="space-y-6">
                    <label className="label">
                         <p className="font-bold">Title</p>
                         <input
                              className="input"
                              placeholder="e.g., Mono-Perc Solar System"
                              value={title}
                              onChange={(e) => setTitle(e.target.value)}
                              required
                         />
                    </label>

                    <label className="label">
                         <p className="font-bold">Short Description</p>
                         <textarea
                              className="textarea h-20"
                              placeholder="e.g., Energy Independence"
                              value={shortDesc}
                              onChange={(e) => setShortDesc(e.target.value)}
                              required
                         />
                    </label>

                    <div className="label">
                         <p className="font-bold">Upload images.</p>
                         {/* Helper text if image not uploaded */}
                         {error && <p ref={errorRef} className="text-red-600 text-xs">Please upload image.</p>}
                         {/* Image upload area */}
                         <div className="flex gap-6">
                              <label className="image-label">
                                   {preview1 ? (
                                        <img src={preview1} alt="Preview 1" className="w-full h-full object-cover" />
                                   ) : (<span className="text-sm text-center px-2">
                                        Upload Image 1
                                   </span>)}
                                   <input
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={(e) => {
                                             const file = e.target.files[0];
                                             if (!file) return;

                                             setError(false);

                                             if (file.size > MAX_SIZE) {
                                                  setImageError(true);
                                                  return;
                                             }

                                             setImageError(false);
                                             setImage1(file);
                                             setPreview1(URL.createObjectURL(file));
                                        }}
                                   />
                              </label>
                              {/* IMAGE 2 */}
                              <label className="image-label">
                                   {preview2 ? (
                                        <img
                                             src={preview2}
                                             alt="Preview 2"
                                             className="w-full h-full object-cover"
                                        />
                                   ) : (
                                        <span className="text-sm text-center px-2">
                                             Upload Image 2
                                        </span>
                                   )}

                                   <input
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={(e) => {
                                             const file = e.target.files[0];
                                             if (!file) return;

                                             setError(false);

                                             if (file.size > MAX_SIZE) {
                                                  setImageError(true);
                                                  return;
                                             }

                                             setImageError(false);
                                             setImage2(file);
                                             setPreview2(URL.createObjectURL(file));
                                        }}
                                   />
                              </label>
                         </div>
                    </div>

                    {/* Helper text */}
                    <p className={`text-xs ${imageError ? "text-red-500" : "text-gray-500"}`}>
                         Image size should be less than 5MB
                    </p>

                    <label className="label">
                         <p className="font-bold">Overview</p>
                         <textarea
                              className="textarea h-28"
                              placeholder="e.g., Technical Specifications"
                              value={overview}
                              onChange={(e) => setOverview(e.target.value)}
                              required
                         />
                    </label>

                    <Section
                         title="Applications"
                         items={applications}
                         setter={setApplications}
                         addItem={addItem}
                         removeItem={removeItem}
                         handleChange={handleChange}
                    />

                    <Section
                         title="Benefits"
                         items={benefits}
                         setter={setBenefits}
                         addItem={addItem}
                         removeItem={removeItem}
                         handleChange={handleChange}
                    />

                    <Section
                         title="Types"
                         items={types}
                         setter={setTypes}
                         addItem={addItem}
                         removeItem={removeItem}
                         handleChange={handleChange}
                    />

                    <label className="label">
                         <p className="font-bold">Ideal For</p>
                         <textarea
                              className="textarea h-20"
                              placeholder="e.g., Small Families / 2-3 BHK"
                              value={idealFor}
                              onChange={(e) => setIdealFor(e.target.value)}
                              required
                         />
                    </label>

                    <button
                         type="submit"
                         disabled={isSubmitting}
                         className={`px-6 py-2 rounded text-white flex items-center justify-center gap-2 ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-black hover:bg-gray-800"}`}
                    >
                         {isSubmitting ? (
                              <>
                                   <i className="fa-solid fa-spinner fa-spin"></i>
                                   <span>Adding Product...</span>
                              </>
                         ) : (
                              "Add Product"
                         )}
                    </button>
               </form>
          </div>
     )
}

export default AddProduct;