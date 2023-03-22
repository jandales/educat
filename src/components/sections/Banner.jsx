
import { useEffect, useRef } from 'react'

import icons from '../../Data/BannerIcons';



function Banner() {

    const itemRef = useRef(null);

    const scrollAnimation = () => {

        const element = itemRef.current;

        const scrollHeight = element.scrollHeight;
        const heigth = element.clientHeight;
        const maxScrollTop = scrollHeight - heigth;
  
  
        setInterval(() => {
            element.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
            
            setTimeout(() => {
                element.scrollTop = 0;
            }, 2000)
            
        }, 4000)

       



    }

    useEffect(() => {
        scrollAnimation()
    });

        return (

            <div data-aos="fade-up" data-aos-delay="100" className="w-full bg-ligth-blue flex flex-col mt-16  overflow-hidden  lg:max-w-5xl xl:max-w-6xl  lg:p-0 lg:mx-auto md:flex-row md:h-[490px] md:rounded-xl ">

                <div className="w-full md:w-1/2 p-10 flex flex-col items-center justify-center md:items-start md:justify-start">

                    <h2 data-aos="fade-up" data-aos-delay="200" className='text-3xl text-center font-bold text-darker md:text-left md:text-[40px] leading-10 tracking-wide pb-8'>Designed to help you Work Smarter not Harder</h2>

                    <p data-aos="fade-up" data-aos-delay="300"  className="text-lg text-center text-[#545454] pb-10 md:text-left">Educat LMS offers the perfect end-to-end solution for schools and businesses. It also provides you with all the features needed to make learning and training easier. </p>

                    <a data-aos="fade-up" data-aos-delay="400"  className="px-8 py-3 text-white font-bold bg-blue">BOOK A DEMO</a>

                </div>

                <div data-aos="fade-left" data-aos-delay="100"  className="w-full   md:w-1/2 ">

                    <div  className='w-full bg-[#FDC00F4F] shadow-[0px_0px_20px_20px] shadow-amber-50 rounded-tl-[30%] rounded-tr-[30%] md:rounded-l-full overflow-hidden'>
                        <div ref={itemRef} className="w-[13rem] gap-4 max-h-80  mx-auto flex flex-wrap pt-10 overflow-y-auto no-scrollbar transition-all  ease-in-out scroll-smooth md:pt-16 md:max-h-[490px] md:gap-8 md:w-[14rem]  md:pb-4  lg:w-[19rem] ] ">
                            {
                                icons.map(icon => {
                                    return (
                                        <div key={icon.name} className="w-24 aspect-square bg-white rounded-xl drop-shadow-xl flex flex-col items-center justify-center  gap-4 px-8 lg:w-28">
                                            <div className='w-6 aspect-square  md:w-7  lg:w-14  '>
                                                <img src={icon.image} className="w-full h-full" />
                                            </div>
                                            <label className="text-xs text-center  capitalize">{icon.name}</label>
                                        </div>
                                    )
                                    }
                                )
                            }

                        </div>
                   </div>

                </div>

            </div>

        )
    
}

export default Banner