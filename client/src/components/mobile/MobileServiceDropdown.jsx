import React from "react";
import { Link } from "react-router-dom";
import { serviceList } from "../../data/serviceList";

const MobileServiceDropdown = ({ openMenu, toggleMenu, setIsOpen }) => {
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
            {serviceList.map((name, i) => (
              <li
                key={i}
                className="transition-all duration-300 hover:translate-x-1"
                style={{ transitionDelay: `${i * 25}ms` }}
              >
                <Link
                  onClick={() => {
                    setIsOpen(false);
                    toggleMenu(null);
                  }}
                  to={`/services/${name.toLowerCase().replace(/ /g, "-")}`}
                  className="block py-1.5 pr-3 text-[14px] text-gray-700 hover:text-green-700"
                >
                  {name}
                </Link>
              </li>
            ))}

            {/* View All Services */}
            <li className="pt-2 mt-2 border-t border-green-200">
              <Link
                onClick={() => {
                  setIsOpen(false);
                  toggleMenu(null);
                }}
                to="/services"
                className="group/menu flex items-center py-2 pr-3 text-[14px] font-semibold text-green-600 active:text-green-700 transition-all"
              >
                View All Services
                <i className="fa-solid fa-arrow-right ml-1 mt-1 inline-block transition-transform duration-200 group-active/menu:translate-x-2 text-xs"></i>
              </Link>
            </li>
          </ul>

        </div>
      </li>
    </>
  )
}

export default MobileServiceDropdown;