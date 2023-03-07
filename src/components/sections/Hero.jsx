

function Hero() {

        return (
            <section id="hero" className="w-full flex flex-col items-center md:flex-row md:w-[1132px] mt-8 md:mt-1 md:mx-auto">

                <div data-aos="fade-up" className="w-full md:w-[500px] flex flex-col items-center  gap-4 md:items-start">
                    <h1 className="text-center text-4xl md:text-left md:text-[3.5rem] font-extrabold leading-[55px]">The LMS that's built for your needs</h1>

                    <p className="sm:text-base px-10 text-center md:text-left md:px-0 md:text-xl text-[#545454] font-normal leading-6">Experience seamless communication, easy data migration, and secured user management in one awesome platform.</p>

                    <button className="mt-2 px-6 py-3 md:px-10 md:py-3 text-white font-bold uppercase font-base bg-blue hover:opacity-90">go to lMS portal
                    </button>
                </div>

                <div data-aos="fade-up"  className="w-full mt-8 md:mt-0 md:w-[600px] md:ml-auto">
                    <div className="w-4/5 aspect-square mx-auto md:mx-0 md:w-[500px] rounded-full relative  
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
                     <img src='../src/assets/hero-banner-a553bb7d.png' className="max-w-full block" />
                    </div>

                </div>
                

            </section>
        )
    
}

export default Hero;
