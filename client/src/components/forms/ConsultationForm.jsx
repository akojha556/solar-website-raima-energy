const ConsultationForm = () => {
     return (
          <div className="bg-blue-100 p-6 rounded-lg shadow-xl">
               <h3 className="text-xl font-semibold text-gray-700 text-center">
                    Get A Quote
               </h3>
               <p className="mt-4">Please fill up the form below and we will get in touch with you shortly</p>

               <form className="mt-6 space-y-5">
                    <div>
                         <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                              Full Name <span className="text-red-500">*</span>
                         </label>
                         <input
                              id="name"
                              type="text"
                              placeholder="Enter your full name"
                              required
                              className="w-full px-4 py-2.5 border border-gray-300 rounded bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500/30"
                         />
                    </div>

                    <div>
                         <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                              Phone Number <span className="text-red-500">*</span>
                         </label>
                         <input
                              id="phone"
                              type="tel"
                              placeholder="10-digit mobile number"
                              required
                              className="w-full px-4 py-2.5 border border-gray-300 rounded bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500/30"
                         />
                    </div>

                    <div>
                         <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                              City <span className="text-red-500">*</span>
                         </label>
                         <input
                              id="city"
                              type="text"
                              placeholder="Your city"
                              required
                              className="w-full px-4 py-2.5 border border-gray-300 rounded bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500/30"
                         />
                    </div>

                    <button
                         type="submit"
                         className="w-full bg-green-600 text-white py-2.5 rounded font-medium hover:bg-green-700 transition"
                    >
                         Submit
                    </button>
               </form>
          </div>
     )
}

export default ConsultationForm;