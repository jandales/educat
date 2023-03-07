import Carousel from "../Corousel/Carousel";
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { EffectFade, Navigation, Pagination } from "swiper"
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Image } from "../../data";
const { FeatureImage1, FeatureImage2, FeatureImage3, } = Image;
let list = [
  {
    counterText:'01',
    title:"Do more with Educat",         
    heading:'Offline learning',
    description:'The ideal solution to empower learners with no access to an internet cinnection',
    image: FeatureImage1,
  },
  {
    title:"Do more with Educat",
    counterText:'02',
    heading:'Supplementary Learning Materials',
    description:'Our printed and interactive learning materials are perfect to help strengthen your learning.',
    image: FeatureImage2,
  },
  {
    title:"Do more with Educat",
    counterText:"03",
    heading:"All-in-one LMS Platform",
    description : "All the solutions you need in one powe  rful platform.",
    image: FeatureImage3,
  }
]

function Carousels() {
 
  return (
    <div  data-aos="fade-up" className="w-full md:w-[1132px] md:mx-auto flex  md:gap-8 mt-16 ">
        <Swiper spaceBetween={0}
          effect={"fade"}
          navigation={false}
          loop={true}         
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper"> 

          {list.map((item, index) => 
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

