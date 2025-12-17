import { useParams, Navigate } from "react-router-dom";
import { productsData } from "../../data/productsData";
import detailsSectionHero from "../../assets/detailsSectionHero.png";
import CallCTA from "../../components/common/CallCTA";

const ProductDetails = () => {
     const { slug } = useParams();
     const product = productsData.find(p => p.slug === slug);

     //If no products route
     if (!product) {
          return <Navigate to="/404" replace />;
          // OR: return <NotFound />
     }

     return (
          <div className="bg-[#f3fff5]">
               {/* HERO WRAPPER */}
               <section className="relative">

                    {/* HERO IMAGE */}
                    <div className="relative h-[40vh] lg:h-[60vh] w-full">
                         <img
                              src={detailsSectionHero}
                              alt="Solar Energy"
                              className="w-full h-full object-cover"
                         />
                         <div className="absolute inset-0 bg-black/40"></div>

                         {/* HERO TITLE */}
                         <div className="absolute top-[22%] lg:top-[50%] left-1/2 -translate-x-1/2 flex items-center justify-center lg:justify-normal max-w-7xl w-[92%]">

                              <h1 className="text-white text-3xl lg:text-left text-center md:text-5xl max-w-2xl font-bold px-4">
                                   {product.title}
                              </h1>
                         </div>
                    </div>

                    {/* FLOATING FORM */}
                    <div className="absolute z-20 left-1/2 w-[92%] max-w-sm -translate-x-1/2 top-[70%] lg:top-[40%] lg:left-2/3 lg:-translate-x-1/4">
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
                    </div>
               </section>
               <section className="px-6 mt-110 md:mt-96 lg:mt-12 max-w-7xl mx-auto">
                    <h4 className="mt-4 text-gray-600 text-xl leading-relaxed lg:max-w-xl xl:max-w-2xl">
                         Raima Energy is a leading solar energy company in the North East, specializing in high-performance rooftop solar power plants. Our solutions are designed to offer long-term savings, energy reliability, and a seamless solar adoption experience for residential and commercial customers.
                    </h4>
               </section>

               {/* PRODUCT INFO SECTION */}
               <section className="py-6 my-4 lg:mt-18 px-6">
                    <div className="max-w-7xl mx-auto bg-[#FAFCFA] py-6 px-2">

                         {/* HEADING */}
                         <h2 className="text-2xl md:text-3xl font-bold text-green-700 text-center">
                              {product.title}: An Efficient Solution for Clean Energy
                         </h2>

                         {/* OVERVIEW */}
                         <p className="mt-4 text-gray-600 leading-relaxed text-left md:text-center text-xl">
                              {product.overview}
                         </p>

                         {/* TYPES */}
                         {product.types && (
                              <>
                                   <h3 className="mt-10 text-2xl md:text-3xl font-semibold text-gray-800 text-center">
                                        Types of {product.title}
                                   </h3>

                                   <ul className="mt-6 space-y-4 text-gray-700 max-w-2xl mx-auto">
                                        {product.types.map((type, index) => (
                                             <li key={index} className="flex items-start gap-3">
                                                  <span className=" text-green-600">
                                                       <i className="fa-solid fa-check"></i>
                                                  </span>

                                                  <p className="text-sm">
                                                       <span className="font-semibold text-gray-800">
                                                            {type.title}:
                                                       </span>{" "}
                                                       {type.desc}
                                                  </p>
                                             </li>
                                        ))}
                                   </ul>

                              </>
                         )}

                         {/* CTA BUTTONS */}
                         <div className="mt-10 flex flex-wrap gap-4 items-center justify-center">
                              <CallCTA primaryText="Contact Us" secondaryText="+916033322529" primaryVariant="primary" secondaryVariant="ghost" secondaryIconClass="group-hover:text-blue-600" />
                         </div>

                    </div>
               </section>

               {/* APPLICATION SECTION */}
               <section className="py-14 bg-[#FAFCFA]">
                    <div className="max-w-7xl mx-auto px-5">
                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                              {/* LEFT : PRODUCT IMAGE */}
                              <div className="w-full h-full">
                                   <img
                                        src={product.images.main}
                                        alt={product.title}
                                        className="w-full h-full object-cover rounded-2xl shadow-md"
                                   />
                              </div>

                              {/* RIGHT : CONTENT */}
                              <div>
                                   <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                                        Applications of {product.title}
                                   </h2>

                                   <p className="text-gray-600 mb-8 max-w-xl">
                                        Our {product.title.toLowerCase()} is widely used across various sectors,
                                        offering reliable performance and flexible deployment for different
                                        energy requirements.
                                   </p>

                                   <ul className="space-y-6">
                                        {product.applications.map((item, index) => (
                                             <li key={index} className="flex gap-4">
                                                  {/* Tick Icon */}
                                                  <span className="shrink-0 mt-1 text-green-600">
                                                       <i className="fa-solid fa-check text-lg"></i>
                                                  </span>

                                                  {/* Text */}
                                                  <div>
                                                       <h4 className="font-semibold text-gray-800">
                                                            {item.title}
                                                       </h4>
                                                       <p className="text-gray-600 text-sm mt-1">
                                                            {item.desc}
                                                       </p>
                                                  </div>
                                             </li>
                                        ))}
                                   </ul>
                                   {/* CTA BUTTONS */}
                                   <div className="mt-10 flex flex-wrap gap-4 items-center justify-center md:justify-normal">
                                        <CallCTA primaryText="Contact Us" secondaryText="+916033322529" primaryVariant="primary" secondaryVariant="ghost" secondaryIconClass="group-hover:text-blue-600" />
                                   </div>
                              </div>

                         </div>
                    </div>
               </section>

               {/* Benifit Section */}
               <section className="pb-18 mt-7">
                    <div className="max-w-7xl mx-auto px-5">
                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                              {/* LEFT : BENEFITS CONTENT */}
                              <div>
                                   <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                                        Benefits of {product.title}
                                   </h2>

                                   <p className="text-gray-600 mb-8 max-w-xl">
                                        Our {product.title.toLowerCase()} is designed to deliver long-term
                                        savings, dependable performance, and sustainable energy benefits.
                                   </p>

                                   <ul className="space-y-5">
                                        {product.benefits.map((item, index) => (
                                             <li key={index} className="flex gap-4 items-start">
                                                  <span className="mt-1 text-green-600">
                                                       <i className="fa-regular fa-circle-check text-lg"></i>
                                                  </span>

                                                  <div>
                                                       <h4 className="font-semibold text-gray-800">
                                                            {item.title}
                                                       </h4>
                                                       <p className="text-sm text-gray-600 mt-1">
                                                            {item.desc}
                                                       </p>
                                                  </div>
                                             </li>
                                        ))}
                                   </ul>
                              </div>

                              {/* RIGHT : IMAGE */}
                              <div className="w-full">
                                   <img
                                        src={product.images.secondary}
                                        alt={product.title}
                                        className="w-full h-full object-cover rounded-2xl shadow-md"
                                   />
                              </div>

                         </div>
                    </div>
               </section>

          </div>
     );
};

export default ProductDetails;
