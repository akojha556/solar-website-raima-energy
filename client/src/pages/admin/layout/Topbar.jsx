const Topbar = () => {
     return (
          <header className="h-16 bg-white border-b flex items-center justify-between px-6">
               <h1 className="text-lg font-semibold text-gray-700">
                    Admin Dashboard
               </h1>

               <div className="flex items-center gap-3">
                    <div className="text-right">
                         <p className="text-sm font-medium">Admin</p>
                         <p className="text-xs text-gray-500">admin@solar.com</p>
                    </div>

                    <div className="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center">
                         A
                    </div>
               </div>
          </header>
     );
};

export default Topbar;
