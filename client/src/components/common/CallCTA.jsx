import { Link } from "react-router-dom";
import { Button } from "../ui/Button";

const CallCTA = ({ primaryText, secondaryText, primaryVariant, secondaryVariant, secondaryIconClass }) => {
     return (
          <>
               {/* GET QUOTE */}
               <Link to="/contact" className="w-full sm:w-auto">
                    <Button variant={primaryVariant} className="w-full md:w-auto my-2" size="md">
                         {primaryText}
                    </Button>
               </Link>

               {/* CALL NOW */}
               <div>
                    <a href="tel:+916033322529" className="w-full sm:w-auto" size="md">
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
