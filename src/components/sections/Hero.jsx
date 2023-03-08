

import Container from '../Container';
import {Image} from '../../data';


function Hero() {
    const { HeroImage } = Image;
    return (
            <Container>
            <div id="hero" className="w-full  relative mt-8 lg:h-[500px]">

                <div data-aos="fade-up" className="w-full lg:w-1/2 flex flex-col items-center  gap-4 lg:items-start">
                    <h1 className="block text-center sm:text-4xl font-extrabold leading-[55px] md:text-5xl md:px-32 lg:text-left lg:text-6xl lg:px-0">
                        The LMS that's built for your needs
                    </h1>

                    <p className="
                        text-base px-10 text-center text-[#545454] font-normal leading-6
                        md:text-xl md:px-20 md:mt-2
                        lg:text-left lg:px-0 lg:text-2xl">Experience seamless communication, easy data migration, and secured user management in one awesome platform.</p>

                    <button className="mt-2 px-6 py-3 text-white font-bold uppercase font-base bg-blue hover:opacity-90 md:px-10 md:py-3 md:mt-4">go to lMS portal
                    </button>
                </div>

                <div data-aos="fade-up" className="w-full mt-12 relative lg:w-1/2 lg:absolute lg:right-0 lg:top-0">
                    <div className="w-4/5 aspect-square mx-auto rounded-full relative  
                    before:block
                    before:absolute
                    before:w-[120%]
                    before:h-full
                    before:-top-10
                    before:-left-5
                    md:before:-left-5
                    md:before:-top-10                 
                    before:z-[-1]                   
                    before:bg-gradient-radial-before 
                    before:animate-pulse
                    after:block
                    after:w-[120%]
                    after:h-full
                    after:absolute
                    after:-left-5
                    after:-top-10              
                    after:z-[-2]
                    after:content-none
                    after:bg-gradient-radial-after
                    ">
                        <img src={HeroImage} className="max-w-full block" />
                    </div>
                </div>


            </div>
            </Container>
        
        )
    
}

export default Hero;
