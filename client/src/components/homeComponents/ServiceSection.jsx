export default function ServicesSection() {
     const services = [
          { title: "Solar Installation", icon: "fa-solid fa-screwdriver-wrench" },
          { title: "Solar Maintenance", icon: "fa-solid fa-wrench" },
          { title: "AMC Services", icon: "fa-solid fa-helmet-safety" },
          { title: "Energy Audit", icon: "fa-solid fa-bolt" },
          { title: "Solar Consultancy", icon: "fa-solid fa-lightbulb" },
          { title: "Solar System Upgradation", icon: "fa-solid fa-arrow-up" },
     ];

     return (
          <section className="py-20 bg-white">
               <div className="max-w-7xl mx-auto px-4">

                    {/* Heading */}
                    <div className="text-center mb-12">
                         <h2 className="text-3xl md:text-4xl font-bold text-green-700">
                              Our Services
                         </h2>
                         <p className="text-green-600 mt-2 text-lg">
                              End-to-end solar services for homes, businesses, and industries.
                         </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">

                         {services.map((service, i) => (
                              <div
                                   key={i}
                                   className="bg-[#f3fff5] p-5 sm:p-6 rounded-xl text-center shadow-sm border border-green-100 
                         hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer"
                              >
                                   <div className="text-3xl sm:text-4xl text-green-600 mb-3">
                                        <i className={service.icon}></i>
                                   </div>

                                   <h3 className="text-sm sm:text-base font-semibold text-green-700 leading-tight">
                                        {service.title}
                                   </h3>
                              </div>
                         ))}

                    </div>
               </div>
          </section>
     );
}
