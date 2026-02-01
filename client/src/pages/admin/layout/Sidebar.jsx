import { NavLink } from "react-router-dom";

const Sidebar = () => {
     return (
          <aside className="w-64 bg-slate-900 text-white flex flex-col">
               {/* Logo */}
               <div className="h-16 flex px-6 items-center text-xl font-bold border-b border-slate-700">
                    ☀️ Solar Admin
               </div>

               {/* Menu */}
               <nav className="flex-1 p-4 space-y-2">
                    <NavLink to="/admin/dashboard" className={linkClass}>
                         <i className="fas fa-chart-line text-sm"></i>
                         Dashboard
                    </NavLink>

                    <NavLink to="/admin/products" className={linkClass}>
                         <i className="fas fa-box text-sm"></i>
                         Products
                    </NavLink>

                    <NavLink to="/admin/services" className={linkClass}>
                         <i className="fas fa-tools text-sm"></i>
                         Services
                    </NavLink>

                    <NavLink to="/admin/enquiries" className={linkClass}>
                         <i className="fas fa-envelope text-sm"></i>
                         Enquiries
                    </NavLink>
               </nav>

               {/* Logout */}
               <button className="flex items-center gap-3 p-4 text-red-400 hover:bg-slate-800">
                    <i className="fas fa-sign-out-alt"></i>
                    Logout
               </button>
          </aside>
     );
};

const linkClass = ({ isActive }) =>
     `flex items-center gap-3 px-4 py-2 rounded-lg transition ${isActive ? "bg-slate-800" : "hover:bg-slate-800"
     }`;

export default Sidebar;
