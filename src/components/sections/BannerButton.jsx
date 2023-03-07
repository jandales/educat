import { Image } from "../../data"



function BannerBottom() {

    const { PawsImage, CatImage } = Image
    
        return (

            <div data-aos="fade-up"  className="relative bg-[#3966D8] w-full overflow-hidden  py-16 mb-4 md:rounded-xl md:w-[1132px] md:mx-auto">


                <div data-aos="fade-right" data-aos-delay="300" class="absolute bottom-0 left-8 w-24 md:w-auto md:left-[95px]">
                    <img src={CatImage} />
                </div>


                <div className="flex flex-col items-center justify-center md:w-[764px] md:mx-auto">

                    <h2 data-aos="fade-up" data-aos-delay="100" className="text-3xl text-white font-bold text-center pb-4">Want to see what Educat can do for you?</h2>

                    <p data-aos="fade-up" data-aos-delay="200"  className="text-white text-base text-center px-16 mb-10 md:pb-12">

                        Learn more by booking a demo today and discover why Educat is the only platform you'll ever need for your learning and training needs.
                    </p>


                    <a data-aos="fade-down" data-aos-delay="200"  className="uppercase text-sm text-[#3966D8] bg-white font-bold rounded-sm px-10 py-3 md:text-base md:py-4 z-10 md:z-0">let's talk!</a>
                </div>


                <div data-aos="fade-left" data-aos-delay="300" class="absolute bottom-0 right-8 w-24 md:w-auto md:right-[95px] ">
                    <img src={PawsImage} />
                </div>



            </div>
        )
    
}

export default BannerBottom;