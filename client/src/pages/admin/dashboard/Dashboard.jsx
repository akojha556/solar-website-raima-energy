import StatCard from "../../../components/admin/StatCard";

const Dashboard = () => {
     return (
          <div>
               {/* Page Title */}
               <h2 className="text-2xl font-semibold text-gray-700 mb-6">
                    Dashboard
               </h2>

               {/* Stats */}
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <StatCard
                         title="Total Products"
                         value={0}
                         icon="fas fa-box"
                         color="bg-blue-600"
                    />

                    <StatCard
                         title="Total Services"
                         value={0}
                         icon="fas fa-tools"
                         color="bg-green-600"
                    />

                    <StatCard
                         title="Total Enquiries"
                         value={0}
                         icon="fas fa-envelope"
                         color="bg-purple-600"
                    />
               </div>
          </div>
     );
};

export default Dashboard;
