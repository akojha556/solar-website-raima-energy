const Section = ({ title, items, setter, addItem, removeItem, handleChange }) => {
     return (
          <div className="rounded mb-3 space-y-2">
               <h2 className="text-xl font-semibold mb-2">{title}</h2>

               {items.map((item, i) => {
                    return (
                         <div
                              key={i}
                              className="border border-gray-300 dark:border-gray-700 rounded-xl p-5 space-y-4 bg-white dark:bg-gray-900 shadow-sm"
                         >



                              <input
                                   className="input"
                                   placeholder="Title"
                                   value={item.title}
                                   onChange={(e) => { handleChange(setter, i, "title", e.target.value) }}
                                   required
                              />
                              <textarea
                                   className="textarea h-20"
                                   placeholder="Description"
                                   value={item.desc}
                                   onChange={(e) => { handleChange(setter, i, "desc", e.target.value) }}
                                   required
                              />
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