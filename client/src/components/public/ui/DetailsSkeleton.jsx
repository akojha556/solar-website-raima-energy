//Skeleton somponent for product/service details
export const DetailsSkeleton = () => {
     return (
          <div className="bg-[#f3fff5] p-4 space-y-6 animate-pulse">
               {/* Hero Skeleton */}
               <div className="h-90 bg-gray-200 rounded-lg" />

               {/* Company Info */}
               <div className="space-y-3">
                    <div className="h-6 w-1/3 bg-gray-200 rounded" />
                    <div className="h-4 w-2/3 bg-gray-200 rounded" />
                    <div className="h-4 w-1/2 bg-gray-200 rounded" />
               </div>

               {/* Solutions Section */}
               <div className="grid grid-cols-2 gap-4">
                    <div className="h-32 bg-gray-200 rounded-lg" />
                    <div className="h-32 bg-gray-200 rounded-lg" />
               </div>

               {/* Applications */}
               <div className="grid grid-cols-3 gap-4">
                    <div className="h-24 bg-gray-200 rounded" />
                    <div className="h-24 bg-gray-200 rounded" />
                    <div className="h-24 bg-gray-200 rounded" />
               </div>

               {/* Benefits */}
               <div className="space-y-3">
                    <div className="h-5 w-1/4 bg-gray-200 rounded" />
                    <div className="h-4 w-3/4 bg-gray-200 rounded" />
                    <div className="h-4 w-2/3 bg-gray-200 rounded" />
               </div>
          </div>
     );
};