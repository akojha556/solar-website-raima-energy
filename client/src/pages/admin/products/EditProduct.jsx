import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct, updateProduct } from "../../../services/productService";
import Section from "../../../components/admin/Section";
import { useNavigate } from "react-router-dom";

const emptyItem = { title: "", desc: "" };
const MAX_SIZE = 5 * 1024 * 1024;

const EditProduct = () => {
     const navigate = useNavigate();
     const [isSubmitting, setIsSubmitting] = useState(false);
     const [loading, setLoading] = useState(true);

     const [image1, setImage1] = useState(null);
     const [image2, setImage2] = useState(null);

     const [preview1, setPreview1] = useState(null);
     const [preview2, setPreview2] = useState(null);

     const [imageError, setImageError] = useState(false);

     const [title, setTitle] = useState("");
     const [shortDesc, setShortDesc] = useState("");
     const [overview, setOverview] = useState("");
     const [idealFor, setIdealFor] = useState("");

     const [applications, setApplications] = useState([emptyItem]);
     const [benefits, setBenefits] = useState([emptyItem]);
     const [types, setTypes] = useState([emptyItem]);

     const { id } = useParams();

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

     //Handle Array input change
     const handleChange = (setter, index, field, value) => {
          setter((prev) => {
               return prev.map((item, i) => {
                    return i === index ? { ...item, [field]: value } : item;
               });
          });
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

     //Handle form submit for update product
     const handleSubmit = async (e) => {
          e.preventDefault();

          if (isSubmitting) return;

          setIsSubmitting(true);

          try {
               const response = await updateProduct(id, formData);
               console.log(response);
          } catch (error) {
               console.error(error);
               alert("Failed to add product");
          } finally {
               setIsSubmitting(false);
               navigate("/admin/products");
          }
     };

     //Load product data
     useEffect(() => {
          const fetchProduct = async () => {
               try {
                    const response = await getProduct(id);
                    const product = response.data.product;
                    setTitle(product.title);
                    setShortDesc(product.shortDesc);
                    setOverview(product.overview);
                    setIdealFor(product.idealFor);

                    setApplications(product.applications);
                    setBenefits(product.benefits);
                    setTypes(product.types);
               } catch (error) {
                    alert(error.message);
                    navigate("/admin/dashboard");
               } finally {
                    setLoading(false);
               }
          };

          fetchProduct();
     }, []);


     return (
          <div>
               {loading &&
                    <div className="px-6 py-6 text-gray-500">Loading...</div>
               }
               {!loading &&
                    <div>
                         <h1 className="text-2xl font-bold mb-6">Edit Product</h1>
                         <form onSubmit={handleSubmit} className="space-y-6">
                              <label className="label">
                                   <p className="font-bold">Title</p>
                                   <input
                                        className="input"
                                        placeholder="e.g., Mono-Perc Solar System"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                   />
                              </label>

                              <label className="label">
                                   <p className="font-bold">Short Description</p>
                                   <textarea
                                        className="textarea h-20"
                                        placeholder="e.g., Energy Independence"
                                        value={shortDesc}
                                        onChange={(e) => setShortDesc(e.target.value)}
                                   />
                              </label>

                              <div className="label">
                                   <p className="font-bold">Upload images.</p>
                                   {/* Image upload area */}
                                   <div className="flex gap-6">
                                        {/* IMAGE 1 */}
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
                                                  <img src={preview2} alt="Preview 1" className="w-full h-full object-cover" />
                                             ) : (<span className="text-sm text-center px-2">
                                                  Upload Image 2
                                             </span>)}
                                             <input
                                                  type="file"
                                                  accept="image/*"
                                                  className="hidden"
                                                  onChange={(e) => {
                                                       const file = e.target.files[0];
                                                       if (!file) return;

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
                                   />
                              </label>

                              <Section
                                   title="Application"
                                   items={applications}
                                   addItem={addItem}
                                   removeItem={removeItem}
                                   handleChange={handleChange}
                                   setter={setApplications}
                              />

                              <Section
                                   title="Benifits"
                                   items={benefits}
                                   addItem={addItem}
                                   removeItem={removeItem}
                                   handleChange={handleChange}
                                   setter={setBenefits}
                              />

                              <Section
                                   title="Types"
                                   items={types}
                                   addItem={addItem}
                                   removeItem={removeItem}
                                   handleChange={handleChange}
                                   setter={setTypes}
                              />

                              <label className="label">
                                   <p className="font-bold">Ideal For</p>
                                   <textarea
                                        className="textarea h-20"
                                        placeholder="e.g., Small Families / 2-3 BHK"
                                        value={idealFor}
                                        onChange={(e) => setIdealFor(e.target.value)}
                                   />
                              </label>

                              <button
                                   type="submit"
                                   className={`px-6 py-2 rounded bg-black text-white flex items-center justify-between gap-2 ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-black hover:bg-gray-800 cursor-pointer"}`}
                                   disabled={isSubmitting}
                              >
                                   {isSubmitting ? (
                                        <div className="flex items-center justify-center gap-3 text-slate-600">
                                             <i className="fa-solid fa-spinner fa-spin text-lg"></i>
                                             <span className="text-sm font-medium">Updating product...</span>
                                        </div>
                                   ) : (
                                        "Confirm"
                                   )}
                              </button>
                         </form>
                    </div>}
          </div>
     )
}

export default EditProduct;