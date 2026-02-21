const PageHero = ({ heading }) => {
     return (
          <section
               layout="position"
               className="relative h-80 flex items-center justify-center">
               <img src="https://res.cloudinary.com/dgokm518s/image/upload/f_auto,q_auto/v1771664404/page-hero-bg_ic7nsn.png" className="absolute inset-0 object-cover h-full w-full" />
               <div className="absolute inset-0 bg-black/50"></div>
               <h1 className="text-white text-3xl md:text-4xl font-bold text-center z-10 pt-40">{heading}</h1>
          </section>
     )
}

export default PageHero;