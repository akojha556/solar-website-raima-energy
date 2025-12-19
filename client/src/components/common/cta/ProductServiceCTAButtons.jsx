import { Link } from "react-router-dom";
import { Button } from "../../ui/Button";

const ProductServiceCTAButtons = ({ primaryText, secondaryText, primaryTo, secondaryTo }) => {
     return (
          <div className="flex gap-4 flex-col md:flex-row w-full md:w-auto">
               <Link to={primaryTo} className="w-full md:w-auto">
                    <Button variant="primary" size="md" className="w-full md:w-auto">{primaryText}</Button>
               </Link>

               <Link to={secondaryTo} className="w-full md:w-auto">
                    <Button variant="neutralOutline" size="md" className="w-full md:w-auto">{secondaryText}</Button>
               </Link>
          </div>
     )
}

export default ProductServiceCTAButtons;