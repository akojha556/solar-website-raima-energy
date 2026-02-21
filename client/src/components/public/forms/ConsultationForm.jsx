import { useState } from "react";
import { addLead } from "../../../services/leadService";

const ConsultationForm = () => {
     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [phoneNumber, setPhoneNumber] = useState("");
     const [city, setCity] = useState("");

     const [loading, setLoading] = useState(false);

     //Handle form submit
     const handleSubmit = async (e) => {
          e.preventDefault();
          setLoading(true);
          const data = {
               name,
               email,
               phoneNumber,
               city
          }
          try {
               const response = await addLead(data);
               console.log(response.data);
          } catch (error) {
               console.error(error.message);
          } finally {
               setLoading(false);
          }
     }

     return (
          <div className="bg-blue-100 p-6 rounded-lg shadow-xl">
               <h3 className="text-xl font-semibold text-gray-700 text-center">
                    Get A Quote
               </h3>
               <p className="mt-4">Please fill up the form below and we will get in touch with you shortly</p>

               <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                    <div>
                         <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                              Full Name <span className="text-red-500">*</span>
                         </label>
                         <input
                              id="name"
                              type="text"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              placeholder="Enter your full name"
                              required
                              className="w-full px-4 py-2.5 border border-gray-300 rounded bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500/30"
                         />
                    </div>

                    <div>
                         <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                              Email ID
                         </label>
                         <input
                              id="email"
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="Enter your mail address (Optional)"
                              className="w-full px-4 py-2.5 border border-gray-300 rounded bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500/30"
                         />
                    </div>

                    <div>
                         <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                              Phone Number <span className="text-red-500">*</span>
                         </label>
                         <input
                              id="phoneNumber"
                              type="tel"
                              value={phoneNumber}
                              onChange={(e) => {
                                   const onlyNumbers = e.target.value.replace(/\D/g, "");
                                   setPhoneNumber(onlyNumbers);
                              }}
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
                              value={city}
                              onChange={(e) => setCity(e.target.value)}
                              placeholder="Your city"
                              required
                              className="w-full px-4 py-2.5 border border-gray-300 rounded bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500/30"
                         />
                    </div>

                    <button
                         type="submit"
                         disabled={loading}
                         className={`w-full px-6 py-2 rounded text-white flex items-center justify-center gap-2 ${loading ? "bg-green-500 cursor-not-allowed" : "bg-green-700 hover:bg-green-800"}`}
                    >
                         {loading ? (
                              <>
                                   <i className="fa-solid fa-spinner fa-spin"></i>
                                   <span>Form Submitting...</span>
                              </>
                         ) : (
                              "Submit"
                         )}
                    </button>
               </form>
          </div>
     )
}

export default ConsultationForm;