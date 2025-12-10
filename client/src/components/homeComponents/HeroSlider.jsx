import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
//importing images
import hero1 from "../../assets/hero1.jpeg";
import hero2 from "../../assets/hero2.jpeg";
import hero3 from "../../assets/hero3.jpeg";
import hero4 from "../../assets/hero4.jpeg";
import hero5 from "../../assets/hero5.jpeg";

const images = [hero1, hero2, hero3, hero4, hero5];

export default function HeroSlider() {
     return (
          <div className="relative w-full h-[80vh] md:h-[90vh]">
               {/* CUSTOM BUTTONS */}
               <button className="custom-prev absolute left-5 top-1/2 z-50 text-5xl -translate-y-1/2 cursor-pointer opacity-50 hover:opacity-30 hidden md:block">
                    <i class="fa-solid fa-chevron-left"></i>
               </button>
               <button className="custom-next cursor-pointer transform absolute right-5 top-1/2 -translate-y-1/2 z-50 text-5xl opacity-50 hover:opacity-30 hidden md:block">
                    <i class="fa-solid fa-chevron-right"></i>
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
                                   <img src={image} alt={`solar${index + 1}`} className="w-full h-full object-cover" />
                                   <div className="absolute inset-0 bg-green-600 opacity-30"></div>
                                   {/* TEXT CONTENT */}
                                   <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                                        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
                                             Power Your Future With Clean Energy
                                        </h1>

                                        <p className="mt-4 text-lg md:text-xl max-w-2xl">
                                             Premium solar solutions for homes and businesses.
                                        </p>

                                        <div className="mt-6 flex gap-4">
                                             <button className="bg-white text-green-700 px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition cursor-pointer">
                                                  View Products
                                             </button>

                                             <button className="border border-white px-6 py-2 rounded-md font-semibold hover:bg-white hover:text-green-700 transition cursor-pointer">
                                                  Contact Us
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