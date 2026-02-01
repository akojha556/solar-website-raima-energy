import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
     return (
          <div className="flex h-screen bg-gray-100">
               {/* Sidebar */}
               <Sidebar />

               {/* Main Content */}
               <div className="flex flex-col flex-1">
                    <Topbar />

                    <main className="flex-1 p-6 overflow-y-auto">
                         <Outlet />
                    </main>
               </div>
          </div>
     );
};

export default AdminLayout;
