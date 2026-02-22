import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useAppData } from "../../../context/AppDataContext";

const ProductDropdown = () => {
     const { productData, loading, error, fetchData } = useAppData();

     const [productOpen, setProductOpen] = useState(false);
     const productRef = useRef(null);

     //Detect click outside to close the product dropdown
     useEffect(() => {
          function handleClickOutside(e) {
               if (productRef.current && !productRef.current.contains(e.target)) {
                    setProductOpen(false);
               }
          }

          document.addEventListener("pointerdown", handleClickOutside);
          return () => document.removeEventListener("pointerdown", handleClickOutside);
     }, []);

     return (
          <>
               {/* PRODUCTS — DROPDOWN */}
               <li ref={productRef} className="relative h-full group">
                    {/* main button */}
                    <button onClick={() => {
                         setProductOpen(!productOpen);
                    }} className={`cursor-pointer h-full relative flex items-center p-6 md:px-4 lg:px-6 md:group-hover:text-green-600 after:content-[''] after:absolute after:left-0 after:bottom-2 after:w-0 after:h-0.5 after:bg-green-600 after:transition-all after:duration-300 md:group-hover:after:w-full ${productOpen ? "focus:text-green-600 focus:after:w-full transform" : ""}`}>
                         <span className="">Products</span>
                         <i className={"fa-solid fa-caret-down ml-1 transition-transform duration-200 group-hover:rotate-180 " + (productOpen ? "rotate-180" : "")}></i>
                    </button>
                    {/* dropdown menu */}
                    <ul
                         className={`absolute left-0 top-full z-50 mt-2 w-64 bg-white text-gray-800 shadow-lg rounded-md opacity-0 invisible transform md:group-hover:opacity-100 md:group-hover:-translate-y-2 md:group-hover:visible transition-all duration-300 ease-out ${productOpen ? "opacity-100 -translate-y-2 visible" : "translate-y-2"}`}
                    >
                         {error ?
                              <li className="flex flex-col items-center gap-2 px-4 py-3 text-xs lg:text-sm">
                                   <span className="text-red-500 flex items-center gap-2">
                                        <i className="fa-solid fa-triangle-exclamation"></i>
                                        Failed to load
                                   </span>
                                   <button
                                        onClick={() => fetchData()}
                                        className="text-blue-500 hover:underline text-xs cursor-pointer"
                                   >
                                        Retry
                                   </button>
                              </li> :
                              (loading ?
                                   <li className="flex items-center justify-center px-4 py-2 text-xs lg:text-sm gap-2">
                                        <span>Loading...</span>
                                        <i className="fa-solid fa-hourglass animate-spin"></i>
                                   </li> :
                                   productData.slice(0, 6).map((item) => (
                                        <li key={item.slug}>
                                             <Link onClick={() => setProductOpen(false)}
                                                  to={`/products/${item.slug}`}
                                                  className="block px-4 py-2 text-xs lg:text-sm transition-all duration-300 hover:bg-green-50 hover:text-green-600 hover:pl-5"
                                             >
                                                  {item.title}
                                             </Link>
                                        </li>
                                   )))}

                         {/* View All */}
                         <li>
                              <Link
                                   onClick={() => setProductOpen(false)}
                                   to="/products"
                                   className="group/menu flex items-center px-4 py-2 text-xs font-semibold text-green-600 transition-all rounded-md"
                              >
                                   View All
                                   <i className="fa-solid fa-arrow-right ml-1 inline-block transition-transform duration-200 group-hover/menu:translate-x-2 text-xs"></i>
                              </Link>
                         </li>

                    </ul>


               </li>
          </>
     )
}

export default ProductDropdown;