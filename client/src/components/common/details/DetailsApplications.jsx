import CallCTA from "../cta/CTAButtons"

const DetailsApplications = ({ data, items }) => {
     return (
          <section className="py-14 bg-[#FAFCFA]">
               <div className="max-w-7xl mx-auto px-5">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                         {/* LEFT : PRODUCT IMAGE */}
                         <div className="w-full h-full">
                              <img
                                   src={data.images.main.url}
                                   alt={data.title}
                                   className="w-full h-95 lg:h-160 object-cover rounded-2xl shadow-md"
                              />
                         </div>

                         {/* RIGHT : CONTENT */}
                         <div>
                              <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                                   Applications of {data.title}
                              </h2>

                              <p className="text-gray-600 mb-8 max-w-xl">
                                   Our {data.title.toLowerCase()} is widely used across various sectors,
                                   offering reliable performance and flexible deployment for different
                                   energy requirements.
                              </p>

                              <ul className="space-y-6">
                                   {items.map((item, index) => (
                                        <li key={index} className="flex gap-4">
                                             {/* Tick Icon */}
                                             <span className="shrink-0 mt-1 text-green-600">
                                                  <i className="fa-solid fa-check text-lg"></i>
                                             </span>

                                             {/* Text */}
                                             <div>
                                                  <span className="font-semibold text-gray-800 mr-2">
                                                       {item.title}:
                                                  </span>
                                                  <span className="text-gray-600 mt-1">
                                                       {item.desc}
                                                  </span>
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
     )
}

export default DetailsApplications;
