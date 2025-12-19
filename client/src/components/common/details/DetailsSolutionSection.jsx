import CTAButtons from "../cta/CTAButtons";

const DetailsSolutionSection = ({ data, options }) => {
     return (
          <section className="py-6 my-4 lg:mt-18 px-6">
               <div className="max-w-7xl mx-auto bg-[#FAFCFA] py-6 px-2">

                    {/* HEADING */}
                    <h2 className="text-2xl md:text-3xl font-bold text-green-700 text-center">
                         {data.title}: An Efficient Solution for Clean Energy
                    </h2>

                    {/* OVERVIEW */}
                    <p className="mt-4 text-gray-600 leading-relaxed text-left md:text-center text-xl">
                         {data.overview}
                    </p>

                    {/* TYPES */}
                    {options && (
                         <>
                              <h3 className="mt-10 text-2xl md:text-3xl font-semibold text-gray-800 text-center">
                                   Types of {data.title}
                              </h3>

                              <ul className="mt-6 space-y-4 text-gray-700 max-w-3xl mx-auto">
                                   {options.map((option, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                             <span className=" text-green-600">
                                                  <i className="fa-solid fa-check"></i>
                                             </span>

                                             <p className="text-sm">
                                                  <span className="font-semibold text-gray-800">
                                                       {option.title}:
                                                  </span>{" "}
                                                  {option.desc}
                                             </p>
                                        </li>
                                   ))}
                              </ul>

                         </>
                    )}

                    {/* CTA BUTTONS */}
                    <div className="mt-10 flex flex-wrap gap-4 items-center justify-center">
                         <CTAButtons primaryText="Contact Us" secondaryText="+916033322529" primaryVariant="primary" secondaryVariant="ghost" secondaryIconClass="group-hover:text-blue-600" />
                    </div>

               </div>
          </section>
     );
};

export default DetailsSolutionSection;
