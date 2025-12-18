import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
//importing images
import hero1 from "../../assets/heroSlider/hero1.png";
import hero2 from "../../assets/heroSlider/hero2.png";
import hero3 from "../../assets/heroSlider/hero3.png";
import hero4 from "../../assets/heroSlider/hero4.png";
import hero5 from "../../assets/heroSlider/hero5.png";

const images = [hero1, hero2, hero3, hero4, hero5];

export default function HeroSlider() {

     return (
          <div className="relative w-full h-[95vh] md:h-[90vh]">
               {/* CUSTOM BUTTONS */}
               <button className="custom-prev absolute left-5 top-1/2 z-50 text-5xl -translate-y-1/2 cursor-pointer opacity-50 hover:opacity-30 hidden md:block">
                    <i className="fa-solid fa-chevron-left"></i>
               </button>
               <button className="custom-next cursor-pointer transform absolute right-5 top-1/2 -translate-y-1/2 z-50 text-5xl opacity-50 hover:opacity-30 hidden md:block">
                    <i className="fa-solid fa-chevron-right"></i>
               </button>

               <Swiper
                    effect="fade"
                    navigation={{
                         nextEl: ".custom-next",
                         prevEl: ".custom-prev",
                    }}
                    pagination={{ clickable: true, }}
                    autoplay={{ delay: 3500, }}
                    modules={[EffectFade, Navigation, Pagination, Autoplay]}
                    loop={true}
                    className="h-full w-full"
               >

                    {images.map((image, index) => {
                         return (<SwiperSlide key={index}>
                              <div className="w-full h-full relative">
                                   {/* Background Image */}
                                   <img src={image} alt={`solar${index + 1}`} width="1920" height="3080" className="w-full h-full object-cover" />
                                   {/* OVERLAY */}
                                   <div className="absolute inset-0 bg-linear-to-b from-black/35 to-black/15"></div>

                                   {/* TEXT CONTENT */}
                                   <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                                        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-xl">
                                             Power Your Future With Clean Energy
                                        </h1>
                                        <p className="mt-4 text-lg md:text-xl max-w-2xl drop-shadow-2xl">
                                             We design and install high-performance solar power systems tailored for residential, commercial, and industrial needs across the North-East.
                                        </p>

                                        <div className="mt-6 flex gap-4">
                                             <button>
                                                  <Link to="/products" className="h-full w-full px-6 py-2 bg-white text-green-700 rounded-md font-semibold hover:bg-gray-200 transition cursor-pointer">View Products</Link>
                                             </button>

                                             <button>
                                                  <Link to="/contact" className="w-full h-full px-6 py-2 border border-white rounded-md font-semibold hover:bg-white hover:text-green-700 transition cursor-pointer">Contact Us</Link>
                                             </button>
                                        </div>
                                   </div>

                              </div>
                         </SwiperSlide>)
                    })}
               </Swiper>
          </div>
     )
}