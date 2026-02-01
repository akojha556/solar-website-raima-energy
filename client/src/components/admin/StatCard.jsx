const StatCard = ({ title, value, icon, color }) => {
     return (
          <div className="bg-white rounded-xl shadow p-6 flex items-center justify-between">
               <div>
                    <p className="text-sm text-gray-500">{title}</p>
                    <h3 className="text-3xl font-bold text-gray-800">
                         {value}
                    </h3>
               </div>

               <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${color}`}
               >
                    <i className={`${icon} text-lg`} />
               </div>
          </div>
     );
};

export default StatCard;
