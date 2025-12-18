import { Link } from "react-router-dom";

const InfoCard = ({ title, info, img, alt, slug }) => {
     return (
          <Link to={`/products/${slug}`}
          className="group bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 block">

               {/* Image */}
               <div className="relative h-58 w-full overflow-hidden bg-gray-50">
                    <img
                         src={img}
                         alt={alt || title}
                         className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
               </div>

               {/* Content */}
               <div className="p-6 flex flex-col">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                         {title}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                         {info}
                    </p>
                    <Link to={`/products/${slug}`}>
                         <button className="inline-flex items-center text-green-600 font-medium text-sm hover:text-green-700 transition cursor-pointer">
                              Enquire Now
                              <i className="fa-solid fa-arrow-right ml-1 inline-block transition-transform duration-200 group-hover:translate-x-2 text-xs"></i>
                         </button>
                    </Link>

               </div>
          </Link>
     );
};

export default InfoCard;
