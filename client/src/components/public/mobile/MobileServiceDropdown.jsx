import React from "react";
import { Link } from "react-router-dom";
import { useAppData } from "../../../context/AppDataContext";

const MobileServiceDropdown = ({ openMenu, toggleMenu, setIsOpen }) => {
  const { serviceData, loading, error, fetchData } = useAppData();

  const isOpen = openMenu === "services";

  return (
    <>
      {/* SERVICE DROPDOWN */}
      <li className="rounded-md hover:bg-green-100 transition-colors duration-200">
        <button
          onClick={() => toggleMenu("services")}
          className="px-4 py-3 w-full flex items-center justify-between text-[15px] font-medium"
        >
          <span>Services</span>
          <i className={`fa-solid fa-caret-down ml-1 text-[20px] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          ></i>
        </button>
        {/* Dropdown */}
        <div
          className={`overflow-hidden transition-all duration-400 ease-out ${isOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <ul className="pl-5 mt-2 space-y-1 border-l border-green-300">
            {error ?
              <li className="flex flex-col items-start justify-center gap-2 h-14 text-xs lg:text-sm">
                <span className="flex items-center gap-2 text-red-500">
                  <i className="fa-solid fa-triangle-exclamation"></i>
                  Unable to load
                </span>
                <button
                  onClick={() => fetchData()}
                  className="text-blue-500 hover:underline text-xs border px-4 py-2"
                >
                  Retry
                </button>
              </li> :
              (loading ?
                <li className="flex items-center justify-start gap-2 h-10 text-xs lg:text-sm">
                  <i className="fa-solid fa-spinner animate-spin text-gray-500"></i>
                  <span>Loading services...</span>
                </li> :
                serviceData.slice(0, 6).map((service) => (
                  <li
                    key={service.slug}
                    className="transition-all duration-300 hover:translate-x-1"
                  >
                    <Link
                      onClick={() => {
                        setIsOpen(false);
                        toggleMenu(null);
                      }}
                      to={`/services/${service.slug}`}
                      className="block py-1.5 pr-3 text-[14px] text-gray-700 hover:text-green-700"
                    >
                      {service.title}
                    </Link>
                  </li>
                )))}

            {/* View All Services */}
            <li className="pt-2 mt-2 border-t border-green-200">
              <Link
                onClick={() => {
                  setIsOpen(false);
                  toggleMenu(null);
                }}
                to="/services"
                className="group/menu flex items-center py-2 pr-3 text-xs font-semibold text-green-600 active:text-green-700 transition-all"
              >
                View All Services
                <i className="fa-solid fa-arrow-right ml-1 inline-block transition-transform duration-200 group-active/menu:translate-x-2 text-xs"></i>
              </Link>
            </li>
          </ul>

        </div>
      </li>
    </>
  )
}

export default MobileServiceDropdown;