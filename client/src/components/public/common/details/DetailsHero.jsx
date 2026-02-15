import detailsSectionHero from "../../../../assets/detailsSectionHero.png";
import ConsultationForm from "../../forms/ConsultationForm";

const DetailsHero = ({ data }) => {
     return (
          <section className="relative">

               {/* HERO IMAGE */}
               <div className="relative h-[40vh] lg:h-[60vh] w-full">
                    <img
                         src={detailsSectionHero}
                         alt="Solar Energy"
                         className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>

                    {/* HERO TITLE */}
                    <div className="absolute top-[22%] lg:top-[50%] left-1/2 -translate-x-1/2 flex items-center justify-center lg:justify-normal max-w-7xl w-[92%]">

                         <h1 className="text-white text-3xl lg:text-left text-center md:text-5xl max-w-2xl font-bold px-4">
                              {data.title}
                         </h1>
                    </div>
               </div>

               {/* FLOATING FORM */}
               <div className="absolute z-20 left-1/2 w-[92%] max-w-sm -translate-x-1/2 top-[70%] lg:top-[40%] lg:left-2/3 lg:-translate-x-1/4">
                    <ConsultationForm />
               </div>
          </section>
     )
}

export default DetailsHero