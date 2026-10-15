

import Container from '../Container';
import {Image} from '../../data';


function Hero() {
    const { HeroImage } = Image;
    return (
            <Container>
            <div id="hero" className="w-full relative mt-8 overflow-x-clip lg:h-[500px]">

                <div data-aos="fade-up" className="w-full lg:w-1/2 flex flex-col items-center  gap-4 lg:items-start">
                    <h1 className="block text-center text-3xl sm:text-4xl font-extrabold leading-[1.25] md:text-5xl md:px-8 lg:text-left lg:text-6xl lg:px-0">
                        The LMS that's built for your needs
                    </h1>

                    <p className="
                        text-base px-4 text-center text-[#545454] font-normal leading-6
                        md:text-xl md:px-8 md:mt-2
                        lg:text-left lg:px-0 lg:text-2xl">Experience seamless communication, easy data migration, and secured user management in one awesome platform.</p>

                    <button className="mt-2 px-6 py-3 text-white font-bold uppercase font-base bg-blue hover:opacity-90 md:px-10 md:py-3 md:mt-4">go to lMS portal
                    </button>
                </div>

                <div data-aos="fade-up" className="w-full mt-16 md:mt-20 lg:mt-0 relative lg:w-1/2 lg:absolute lg:right-0 lg:top-0">
                    <div className="w-4/5 max-w-md lg:max-w-none aspect-square mx-auto rounded-full relative overflow-visible
                    before:block
                    before:absolute
                    before:rounded-full
                    before:w-[120%]
                    before:max-w-full
                    before:-top-7
                    before:left-0
                    md:before:-top-10
                    md:before:left-4
                    lg:before:w-[28rem]
                    lg:before:max-w-none
                    lg:before:-top-8
                    lg:before:left-9
                    before:aspect-square
                    before:z-[-1] 
                    before:bg-amber-300                
                    before:animate-pulse
                    before:blur-2xl
                   
                    ">
                        <img src={HeroImage} className="max-w-full w-full block md:ml-0" />
                    </div>
                </div>


            </div>
            </Container>
        
        )
    
}

export default Hero;
