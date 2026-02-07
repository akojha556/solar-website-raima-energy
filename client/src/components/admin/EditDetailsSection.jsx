const EditDetailsSection = ({ title, items, addItem, removeItem, handleChange, setter }) => {
     return (
          <div className="rounded mb-3 space-y-2">
               <h2 className="text-xl font-semibold mb-2">{title}</h2>
               {items.map((item, index) => {
                    return (
                         <div key={index} className="border p-4 rounded mb-3 space-y-2">
                              <input
                                   className="input"
                                   placeholder="Title"
                                   value={item.title}
                                   onChange={(e) => handleChange(e.target.value, "title", index, setter)}
                              />
                              <textarea
                                   className="textarea h-20"
                                   placeholder="Description"
                                   value={item.desc}
                                   onChange={(e) => handleChange(e.target.value, "desc", index, setter)}
                              />
                              {items.length > 1 &&
                                   <button
                                        type="button"
                                        className="text-red-600 text-sm cursor-pointer"
                                        onClick={() => removeItem(index, setter)}
                                   >
                                        Remove
                                   </button>
                              }
                         </div>
                    )
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

export default EditDetailsSection;