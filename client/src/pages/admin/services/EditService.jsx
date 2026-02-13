import { useState, useEffect } from "react";
import Section from "../../../components/admin/Section";
import { getService, updateService } from "../../../services/serviceService";
import { useParams, useNavigate } from "react-router-dom";

const emptyItem = { title: "", desc: "" };
const MAX_SIZE = 5 * 1024 * 1024;

const EditService = () => {
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

     const [options, setoptions] = useState([emptyItem]);
     const [useCases, setUseCases] = useState([emptyItem]);
     const [benefits, setBenefits] = useState([emptyItem]);

     const { id } = useParams();

     //Add item
     const addItem = (setter) => {
          setter((prev) => {
               return [...prev, emptyItem];
          });
     };

     //Remove item
     const removeItem = (setter, index) => {
          setter((prev) => {
               return prev.filter((_, i) => i !== index)
          });
     };

     //Handle array item change
     const handleChange = (setter, index, field, value) => {
          setter((prev) =>
               prev.map((item, i) => (
                    (i === index ? { ...item, [field]: value } : item)
               ))
          );
     };

     //Handle submit
     const handleSubmit = async (e) => {
          e.preventDefault();

          if (isSubmitting) return;

          setIsSubmitting(true);

          //Formadata
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

          try {
               const response = await updateService(id, formData);
               console.log(response);
          } catch (error) {
               alert(error.message);
          } finally {
               setIsSubmitting(false);
               navigate("/admin/services");
          }
     };

     //Load service data
     useEffect(() => {
          const fetchService = async () => {
               try {
                    const response = await getService(id);
                    const service = response.data.service;

                    setTitle(service.title);
                    setShortDesc(service.shortDesc);
                    setOverview(service.overview);
                    setIdealFor(service.idealFor);

                    setoptions(service.options);
                    setUseCases(service.useCases);
                    setBenefits(service.benefits);
               } catch (error) {
                    alert(error.message);
                    navigate("/admin/dashboard");
               } finally {
                    setLoading(false);
               }
          };

          fetchService();
     }, []);


     return (
          <div>
               {loading &&
                    <div className="px-6 py-6 text-gray-500">Loading...</div>
               }
               {!loading &&
                    <div>
                         <h1 className="text-2xl font-bold pb-6">Edit Service</h1>
                         <form onSubmit={handleSubmit} className="space-y-6">
                              <label className="label">
                                   <p className="font-bold">Title</p>
                                   <input
                                        className="input"
                                        placeholder="Enter a title"
                                        onChange={(e) => setTitle(e.target.value)}
                                        value={title}
                                   />
                              </label>

                              <label className="label">
                                   <p className="font-bold">Short Description</p>
                                   <textarea
                                        className="textarea h-20"
                                        placeholder="Write a short description"
                                        onChange={(e) => setShortDesc(e.target.value)}
                                        value={shortDesc}
                                   />
                              </label>

                              <label className="label">
                                   <p className="font-bold">Upload new images.</p>
                                   <div className="flex gap-6">
                                        {/* Image1 */}
                                        <label className="image-label">
                                             {preview1 ? (
                                                  <img src={preview1} alt="Preview 1" className="w-full h-full object-cover" />
                                             ) : (
                                                  <span className="text-sm text-center px-2">Upload Image 1</span>
                                             )}
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
                                                       };

                                                       setImageError(false);
                                                       setImage1(file);
                                                       setPreview1(URL.createObjectURL(file));
                                                  }}
                                             />
                                        </label>

                                        {/* Image2 */}
                                        <label className="image-label">
                                             {preview2 ? (
                                                  <img src={preview2} alt="Preview 1" className="w-full h-full object-cover" />
                                             ) : (
                                                  <span className="text-sm text-center px-2">Upload Image 2</span>
                                             )}
                                             <input
                                                  type="file"
                                                  accept="image/*"
                                                  className="hidden"
                                                  onChange={(e) => {
                                                       const file = e.target.files[0];
                                                       if (!file) return;

                                                       if (file.length > MAX_SIZE) {
                                                            setImageError(true);
                                                            return
                                                       };

                                                       setImageError(false);
                                                       setImage2(file);
                                                       setPreview2(URL.createObjectURL(file));
                                                  }}
                                             />
                                        </label>
                                   </div>
                              </label>

                              <p className={`text-xs ${imageError ? "text-red-500" : "text-gray-500"}`}>Image size should be less than 5MB</p>

                              <label className="label">
                                   <p className="font-bold">Overview</p>
                                   <textarea
                                        className="textarea h-20"
                                        placeholder="Write an overview"
                                        onChange={(e) => setOverview(e.target.value)}
                                        value={overview}
                                   />
                              </label>

                              <Section
                                   title="Options"
                                   items={options}
                                   setter={setoptions}
                                   addItem={addItem}
                                   removeItem={removeItem}
                                   handleChange={handleChange}
                              />

                              <Section
                                   title="Use Cases"
                                   items={useCases}
                                   setter={setUseCases}
                                   addItem={addItem}
                                   removeItem={removeItem}
                                   handleChange={handleChange}
                              />

                              <Section
                                   title="Benfits"
                                   items={benefits}
                                   setter={setBenefits}
                                   addItem={addItem}
                                   removeItem={removeItem}
                                   handleChange={handleChange}
                              />

                              <label className="label">
                                   <p className="font-bold">Ideal For</p>
                                   <textarea
                                        className="textarea h-20"
                                        placeholder="e.g. High-energy consumers or areas with frequent outages"
                                        onChange={(e) => setIdealFor(e.target.value)}
                                        value={idealFor}
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
                                             <span className="text-sm font-medium">Updating service...</span>
                                        </div>
                                   ) : (
                                        "Confirm"
                                   )}
                              </button>
                         </form>
                    </div>
               }
          </div>
     );
};

export default EditService;