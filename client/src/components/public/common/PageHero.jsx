import pageHeroBg from "../../../assets/page-hero-bg.png";

const PageHero = ({ heading }) => {
     return (
          <section
               layout="position"
               className="relative h-80 flex items-center justify-center">
               <img src={pageHeroBg} className="absolute inset-0 object-cover h-full w-full" />
               <div className="absolute inset-0 bg-black/50"></div>
               <h1 className="text-white text-3xl md:text-4xl font-bold text-center z-10 pt-40">{heading}</h1>
          </section>
     )
}

export default PageHero;