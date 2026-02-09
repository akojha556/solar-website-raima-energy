import { useState } from "react";
import Section from "../../../components/admin/Section";

const emptyItem = { title: "", desc: "" };

const EditService = () => {
     const [title, setTitle] = useState("");
     const [shortDesc, setShortDesc] = useState("");
     const [overview, setOverview] = useState("");
     const [idealFor, setIdealFor] = useState("");

     const [options, setoptions] = useState([emptyItem]);
     const [useCases, setUseCases] = useState([emptyItem]);
     const [benefits, setBenefits] = useState([emptyItem]);

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

     return (
          <div>
               <h1 className="text-2xl font-bold pb-6">Edit Service</h1>
               <form className="space-y-6">
                    <label className="label">
                         Title
                         <input
                              className="input"
                              placeholder="Enter a title"
                              onChange={(e) => setTitle(e.target.value)}
                              value={title}
                         />
                    </label>

                    <label className="label">
                         Short Description
                         <textarea
                              className="textarea h-20"
                              placeholder="Write a short description"
                              onChange={(e) => setShortDesc(e.target.value)}
                              value={shortDesc}
                         />
                    </label>

                    <label className="label">
                         Overview
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

                    <textarea
                         className="textarea h-20"
                         placeholder="Ideal For"
                         onChange={(e) => setIdealFor(e.target.value)}
                         value={idealFor}
                    />
               </form>
          </div>
     );
};

export default EditService;