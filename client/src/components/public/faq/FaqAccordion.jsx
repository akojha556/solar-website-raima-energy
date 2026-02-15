import { useState } from "react";

const FaqAccordion = ({ items }) => {
     const [openIndex, setOpenIndex] = useState(null);

     const toggleFaq = (index) => {
          setOpenIndex(openIndex === index ? null : index);
     }

     return (
          <div className="flex-1">
               {items.map((faq, index) => {
                    return (
                         <div key={index} className="py-2 px-2 border mb-4 border-green-200 rounded-lg shadow-md bg-white">
                              {/* QUESTION */}
                              <div>
                                   <button onClick={() => {
                                        toggleFaq(index);
                                   }} className="text-green-700 px-4 py-2 text-base flex gap-2 items-center justify-between cursor-pointer transition-all transform hover:text-green-600 w-full">
                                        <p className="text-left">{faq.question}</p>
                                        <i className={`fa-solid fa-plus transition duration-300 ${openIndex === index ? "rotate-45" : ""}`}></i>
                                   </button>
                              </div>
                              {/* ANSWER */}
                              <div className={`overflow-hidden w-full transition-all duration-300 ${openIndex === index ? "max-h-96" : "max-h-0"}`}>
                                   <p className="py-2 px-4 text-base text-gray-600">{faq.answer}</p>
                              </div>
                         </div>
                    )

               })}
          </div>
     )
}

export default FaqAccordion