const Section = ({ title, items, setter, addItem, removeItem, handleChange }) => {
     return (
          <div className="rounded mb-3 space-y-2">
               <h3 className="text-sm font-bold mb-2">{title}</h3>

               {items.map((item, i) => {
                    return (
                         <div
                              key={i}
                              className="border border-gray-300 rounded-xl p-5 space-y-4 bg-white shadow-sm"
                         >
                              <label className="label">
                                   <p>Title</p>
                                   <input
                                        className="input"
                                        placeholder="Enter a short, clear heading..."
                                        value={item.title}
                                        onChange={(e) => { handleChange(setter, i, "title", e.target.value) }}
                                        required
                                   />
                              </label>
                              <label className="label">
                                   <p>Description</p>
                                   <textarea
                                        className="textarea h-20"
                                        placeholder="Provide more details or key information here..."
                                        value={item.desc}
                                        onChange={(e) => { handleChange(setter, i, "desc", e.target.value) }}
                                        required
                                   />
                              </label>
                              {items.length > 1 &&
                                   <button
                                        type="button"
                                        className="text-red-600 text-sm cursor-pointer"
                                        onClick={() => removeItem(setter, i)}
                                   >
                                        Remove
                                   </button>}
                         </div>
                    );
               })}

               <button
                    type="button"
                    className="text-blue-600 text-sm cursor-pointer"
                    onClick={() => addItem(setter)}
               >
                    + Add {title}
               </button>
          </div>
     )
}

export default Section;