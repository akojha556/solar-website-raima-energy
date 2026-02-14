import { useState, useRef, useEffect } from "react";
import Section from "../../../components/admin/Section";
import { useNavigate } from "react-router-dom";
import { addService } from "../../../services/serviceService";

const emptyItem = { title: "", desc: "" };
const MAX_SIZE = 5 * 1024 * 1024;

const AddService = () => {
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

     const [options, setOptions] = useState([emptyItem]);
     const [useCases, setUseCases] = useState([emptyItem]);
     const [benefits, setBenefits] = useState([emptyItem]);

     const addItem = (setter) => {
          return setter((prev) => [...prev, emptyItem]);
     };

     const removeItem = (setter, index) => {
          return setter((prev) => prev.filter((_, i) => i !== index));
     };

     // Handle Array item change
     const handleChange = (setter, index, field, value) => {
          setter((prev) => {
               return prev.map((item, i) => i === index ? { ...item, [field]: value } : item);
          });
     };

     //Formdata
     const formData = new FormData();

     if (image1) formData.append("file", image1);
     if (image2) formData.append("file", image2);

     formData.append("title", title);
     formData.append("shortDesc", shortDesc);
     formData.append("overview", overview);
     formData.append("idealFor", idealFor);

     // arrays → stringify
     formData.append("options", JSON.stringify(options));
     formData.append("useCases", JSON.stringify(useCases));
     formData.append("benefits", JSON.stringify(benefits));

     //Handle form submit
     const handleSubmit = async (e) => {
          e.preventDefault();
          if (image1 === null || image2 === null) {
               setError(true);

               //If image is not uploaded show this error with scroll
               errorRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
               });
               return;
          }

          setError(false);
          if (isSubmitting) return;
          setIsSubmitting(true);

          try {
               const response = await addService(formData);
               console.log(response);
          } catch (error) {
               alert(error.message);
               console.log(error.response);
               console.log(error.response.data);
          } finally {
               setIsSubmitting(false);
               navigate("/admin/services");
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
               <h1 className="text-2xl font-bold mb-6">Add Service</h1>
               <form onSubmit={handleSubmit} className="space-y-6">
                    <label className="label">
                         <p className="font-bold">Title</p>
                         <input
                              placeholder="Title"
                              className="input"
                              value={title}
                              onChange={(e) => setTitle(e.target.value)}
                              required
                         />
                    </label>

                    <label className="label">
                         <p className="font-bold">Short Description</p>
                         <textarea
                              placeholder="Short Description"
                              className="textarea h-20"
                              value={shortDesc}
                              onChange={(e) => setShortDesc(e.target.value)}
                              required
                         />
                    </label>

                    <div className="label">
                         <p className="font-bold">Upload images.</p>
                         {/* Helper text if image not uploaded */}
                         {error && <p ref={errorRef} className="text-red-600 text-xs">Please upload image.</p>}
                         <div className="flex gap-6">
                              {/* image1 */}
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
                              {/* image2 */}
                              <label className="image-label">
                                   {preview2 ? (
                                        <img src={preview2} alt="Preview 2" className="w-full h-full object-cover" />
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
                              placeholder="Overview"
                              className="textarea h-30"
                              value={overview}
                              onChange={(e) => setOverview(e.target.value)}
                              required
                         />
                    </label>

                    <Section
                         title="Service Options"
                         items={options}
                         addItem={addItem}
                         removeItem={removeItem}
                         setter={setOptions}
                         handleChange={handleChange}
                    />

                    <Section
                         title="Service Use Cases"
                         items={useCases}
                         addItem={addItem}
                         removeItem={removeItem}
                         setter={setUseCases}
                         handleChange={handleChange}
                    />

                    <Section
                         title="Service Benefits"
                         items={benefits}
                         addItem={addItem}
                         removeItem={removeItem}
                         setter={setBenefits}
                         handleChange={handleChange}
                    />

                    <label className="label">
                         <p className="font-bold">Ideal For</p>

                         <textarea
                              placeholder="Ideal For"
                              className="textarea h-20"
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
                                   <span>Adding Service...</span>
                              </>
                         ) : (
                              "Add Service"
                         )}
                    </button>
               </form>
          </div>
     )
};

export default AddService;