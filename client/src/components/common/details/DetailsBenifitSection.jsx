const DetailsBenifitSection = ({ data, items }) => {
     return (
          <section className="pb-18 mt-7">
               <div className="max-w-7xl mx-auto px-5">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                         {/* LEFT : BENEFITS CONTENT */}
                         <div>
                              <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                                   Benefits of {data.title}
                              </h2>

                              <p className="text-gray-600 mb-8 max-w-xl">
                                   Our {data.title.toLowerCase()} is designed to deliver long-term
                                   savings, dependable performance, and sustainable energy benefits.
                              </p>

                              <ul className="space-y-5">
                                   {items.map((item, index) => (
                                        <li key={index} className="flex gap-4 items-start">
                                             <span className="mt-1 text-green-600">
                                                  <i className="fa-regular fa-circle-check text-lg"></i>
                                             </span>

                                             <div>
                                                  <span className="font-semibold text-gray-800">
                                                       {item.title}-
                                                  </span>
                                                  <span className="text-gray-600 ml-2">
                                                       {item.desc}
                                                  </span>
                                             </div>
                                        </li>
                                   ))}
                              </ul>
                         </div>

                         {/* RIGHT : IMAGE */}
                         <div className="w-full">
                              <img
                                   src={data.images.secondary}
                                   alt={data.title}
                                   className="w-full h-95 lg:h-140 object-cover rounded-2xl shadow-md"
                              />
                         </div>

                    </div>
               </div>
          </section>
     )
}

export default DetailsBenifitSection