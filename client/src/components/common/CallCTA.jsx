import { Link } from "react-router-dom";
import { Button } from "../ui/Button";

const CallCTA = ({ primaryText, secondaryText, primaryVariant, secondaryVariant, secondaryIconClass }) => {
     return (
          <>
               {/* GET QUOTE */}
               <Link to="/contact" className="w-full sm:w-auto">
                    <Button variant={primaryVariant} className="w-full sm:w-auto my-2">
                         {primaryText}
                    </Button>
               </Link>

               {/* CALL NOW */}
               <div>
                    <a href="tel:+919876543210" className="w-full sm:w-auto">
                         <Button variant={secondaryVariant}>
                              <i className={`fa-solid fa-phone transition-colors duration-300 mr-2 text-red-500 ${secondaryIconClass}`}></i>
                              {secondaryText}
                         </Button>
                    </a>
               </div>
          </>
     );
};

export default CallCTA;
