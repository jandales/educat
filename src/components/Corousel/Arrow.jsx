
import { useSwiper } from 'swiper/react';

export default function Arrow() {
    const swiper = useSwiper(); 
    return (
        <span onClick={() => swiper.slideNext()} className="absolute w-8 h-8 flex items-center justify-center right-4 top-[50%]  rounded-full md:w-10 md:h-10 opacity-90 bg-[#dbeafe] text-white hover:opacity-100">
            <i className="bi bi-chevron-right"></i>
        </span>
    )   
}

