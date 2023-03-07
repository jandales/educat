import Carousel from "../Corousel/Carousel";
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { EffectFade, Navigation, Pagination } from "swiper"

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import CarouselList from '../../Data/CorouselList'

function Carousels() {
 
  return (
    <div  data-aos="fade-up" className="w-full md:w-[1132px] md:mx-auto flex  md:gap-8 mt-16 ">
        <Swiper spaceBetween={0}
          effect={"fade"}
          navigation={false}
          loop={true}         
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper"> 

        {CarouselList.map((item, index) => 
            <SwiperSlide key={index}>
              <Carousel
                counterText={item.counterText}
                title={item.title}
                heading={item.heading}
                description={item.description}
                image={item.image}
              />
            </SwiperSlide>
          )}   
          
      </Swiper>
      
  </div>
    
   )
}

export default Carousels;

