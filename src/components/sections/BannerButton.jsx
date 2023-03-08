import { Image } from "../../data"

import Container from "../Container";

function BannerBottom() {

    const { PawsImage, CatImage } = Image
    
        return (
            <Container>
                <div data-aos="fade-up" className="relative bg-[#3966D8] w-full overflow-hidden  py-16 mb-4 md:rounded-xl  ">


                    <div data-aos="fade-right" data-aos-delay="300" class="absolute bottom-0 left-8 w-24 md:w-32 lg:w-auto lg:left-[95px]">
                        <img src={CatImage} />
                    </div>


                    <div className="flex flex-col items-center justify-center lg:w-[764px] lg:mx-auto">

                        <h2 data-aos="fade-up" data-aos-delay="100" className="text-3xl text-white font-bold text-center pb-4">Want to see what Educat can do for you?</h2>

                        <p data-aos="fade-up" data-aos-delay="200" className="text-white text-base text-center px-16 mb-10 lg:pb-12">

                            Learn more by booking a demo today and discover why Educat is the only platform you'll ever need for your learning and training needs.
                        </p>


                        <a data-aos="fade-down" data-aos-delay="200" className="uppercase text-sm text-[#3966D8] bg-white font-bold rounded-sm px-10 py-3 md:text-xl lg:text-base lg:py-4 z-10 lg:z-0">let's talk!</a>
                    </div>


                    <div data-aos="fade-left" data-aos-delay="300" class="absolute bottom-0 right-8 w-24 md:w-32 lg:w-auto lg:right-[95px] ">
                        <img src={PawsImage} />
                    </div>
                </div>
            </Container>
           
        )
    
}

export default BannerBottom;