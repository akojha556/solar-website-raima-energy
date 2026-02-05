const DeleteConfirmModal = ({ onCancel, handleDelete, loading }) => {
     return (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
               <div className="bg-white rounded-xl p-6 w-[90%] max-w-md shadow-xl flex-col justify-center align-middle">
                    <h2 className="text-2xl font-semibold text-gray-800 text-center">
                         Are you sure?
                    </h2>

                    <p className="text-sm text-gray-600 mt-2 text-left">
                         Do you really want to delete this item? This action cannot be undone.
                    </p>

                    <div className="flex justify-between gap-3 mt-6">
                         <button onClick={onCancel}
                              className={`px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 ${loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                         >
                              Go Back
                         </button>

                         <button onClick={handleDelete}
                              className={`px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 ${loading ? "bg-red-200 cursor-not-allowed " : "bg-red-600 hover:bg-red-700 cursor-pointer"}`}
                         >
                              {loading && (
                                   <i className="fa-solid fa-spinner fa-spin"></i>
                              )}
                              {loading ? "Deleting..." : "Yes, Delete"}
                         </button>
                    </div>
               </div>
          </div>
     );
};

export default DeleteConfirmModal;
