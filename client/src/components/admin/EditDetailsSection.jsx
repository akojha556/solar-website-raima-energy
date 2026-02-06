const EditDetailsSection = ({ title, items, addItem, removeItem }) => {
     return (
          <div className="rounded mb-3 space-y-2">
               <h2 className="text-xl font-semibold mb-2">{title}</h2>
               {items.map((item, index) => {
                    return (
                         <div className="border p-4 rounded mb-3 space-y-2">
                              <input
                                   className="input"
                                   placeholder="Title"
                                   required
                              />
                              <textarea
                                   className="textarea h-20"
                                   placeholder="Description"
                                   required
                              />
                              {items.length > 1 &&
                                   <button
                                        type="button"
                                        className="text-red-600 text-sm cursor-pointer"
                                        onClick={() => removeItem(index)}
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
                    onClick={() => addItem()}
               >
                    + Add {title}
               </button>
          </div>
     )
}

export default EditDetailsSection;