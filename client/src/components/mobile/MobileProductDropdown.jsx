import React from "react";
import { Link } from "react-router-dom";
import { productList } from "../../data/productList";

const MobileProductDropdown = ({ openMenu, toggleMenu, setIsOpen }) => {
  const isOpen = openMenu === "products";

  return (
    <li className="rounded-md hover:bg-green-100 transition-colors duration-200">
      {/* Trigger */}
      <button
        onClick={() => toggleMenu("products")}
        className="p-4 w-full h-full flex items-center justify-between text-[15px] font-medium"
      >
        <span>Products</span>
        <i
          className={`fa-solid fa-caret-down text-[20px] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        ></i>
      </button>

      {/* Dropdown */}
      <div
        className={`overflow-hidden transition-all duration-400 ease-out ${isOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <ul className="pl-5 mt-2 space-y-1">
          {productList.map((name, i) => (
            <li
              key={i}
              className="transition-all duration-300 hover:translate-x-1"
              style={{ transitionDelay: `${i * 25}ms` }}
            >
              <Link
                to={`/products/${name.toLowerCase().replace(/ /g, "-")}`}
                className="block py-1.5 pr-3 text-[14px] text-gray-700 hover:text-green-700"
              >
                {name}
              </Link>
            </li>
          ))}
          {/* View All Products */}
          <li className="pt-2 mt-2 border-t border-green-200">
            <Link
              onClick={() => {
                setIsOpen(false);
                toggleMenu(null);
              }}
              to="/products"
              className="group/menu flex items-center py-2 pr-3 text-[14px] font-semibold text-green-600 active:text-green-700 transition-all"
            >
              View All Products
              <i className="fa-solid fa-arrow-right ml-1 mt-1 inline-block transition-transform duration-200 group-active/menu:translate-x-2 text-xs"></i>
            </Link>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default MobileProductDropdown;
