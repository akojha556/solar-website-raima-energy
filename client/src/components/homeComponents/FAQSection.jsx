import { useState } from "react";

export default function FAQSection() {
     const faqs = [
          {
               q: "What is a solar rooftop system and how does it work?",
               a: "A solar rooftop system converts sunlight into electricity using solar panels. The generated DC power is converted to AC using an inverter and used to run household appliances."
          },
          {
               q: "How much can I save using solar energy?",
               a: "Most households save 60-90% on their monthly electricity bills depending on consumption and system size."
          },
          {
               q: "How long does a solar installation take?",
               a: "Residential installations usually take 1-3 days depending on roof structure and system capacity."
          },
          {
               q: "What government subsidies are available?",
               a: "Under PM Surya Ghar Muft Bijli Yojana, homeowners can receive subsidies on rooftop solar installations. Eligibility depends on system size and location."
          },
          {
               q: "How long do solar panels last?",
               a: "High-quality solar panels typically last 25-30 years with minimal maintenance."
          },
          {
               q: "Do solar systems work during cloudy days?",
               a: "Yes, solar panels still generate electricity, though at reduced efficiency. A hybrid system with batteries ensures uninterrupted power."
          },
          {
               q: "What maintenance does a solar system require?",
               a: "Maintenance is minimal—primarily cleaning panels every few months and routine system checks once or twice per year."
          },
          {
               q: "Can I run AC, water heaters, and heavy appliances on solar?",
               a: "Yes. With the right system size and inverter capacity, you can run all household appliances including ACs and pumps."
          }
     ];

     const [openIndex, setOpenIndex] = useState(null);

     const toggleFAQ = (i) => {
          setOpenIndex(openIndex === i ? null : i);
     };

     return (
          <section className="py-20 bg-white">
               <div className="max-w-7xl mx-auto px-4">

                    {/* Heading */}
                    <div className="text-center mb-12">
                         <h2 className="text-3xl md:text-4xl font-bold text-green-700">
                              Frequently Asked Questions
                         </h2>
                         <p className="text-green-600 mt-2 text-lg">
                              Everything you need to know about switching to solar energy.
                         </p>
                    </div>

                    {/* Grid Layout */}
                    <div className="grid grid-cols-1 gap-6">

                         {faqs.map((faq, i) => (
                              <div
                                   key={i}
                                   className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition border border-green-600"
                              >
                                   <button
                                        onClick={() => toggleFAQ(i)}
                                        className="flex justify-between items-center w-full text-left font-semibold text-green-700 text-base md:text-lg cursor-pointer"
                                   >
                                        {faq.q}
                                        <i className={`fa-solid fa-chevron-${openIndex === i ? "up" : "down"} text-green-600 ml-3`}></i>
                                   </button>

                                   {/* Answer */}
                                   {openIndex === i && (
                                        <p className="mt-3 text-green-600 text-sm md:text-base leading-relaxed">
                                             {faq.a}
                                        </p>
                                   )}
                              </div>
                         ))}

                    </div>
               </div>
          </section>
     );
}
