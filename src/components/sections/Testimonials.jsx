

import { Image } from '../../data';
import TestimonialPerson from '../Testimonials/TestimonialPerson';
import TestimonialComment from '../Testimonials/TestimonialComment';
import TestimonialTitle from '../testimonials/TestimonialTitle';
import TestimonialBullet from '../testimonials/TestimonialBullet';


const { QuotationImage, TestimonialPersonImage } = Image;

function Testimonials()  {

        return (
            <section data-aos="fade-up"  id="testimonials" className="w-full relative bg-[#FDC00F4F] md:h-[486px] py-4 overflow-hidden">

                <div className="w-full md:w-[1132px] md:mx-auto flex flex-col md:flex-row ">

                    <div class="w-full md:w-3/5 px-8 md:px-0 md:p-4">
                        <br></br>
                        <TestimonialTitle text="They Said It First" />
                        <br></br>
                        <br className="hidden md:block"></br>
                        <div className="w-full h-auto relative">

                            <img src={QuotationImage} className="w-10 absolute -top-5 md:w-12 md:-left-10 md:-top-10" />

                            <TestimonialComment text="Scuola Maria is fortunate to work with PCI early on when the pandemic hit the country. My ideas and my curriculum design all came to life in the NEST — our exclusive LMS for our students. If not for PCI, we wouldn't be able to continue education at this very difficult time." />

                            <img src={QuotationImage} className="w-10 absolute right-0 bottom-1 md:w-10 md:-bottom-10 md:right-36" />
                        </div>


                        <br></br>
                        <br className="hidden md:block"></br>

                        <TestimonialPerson name="Ina Gonda-Ramos, MAE-CDE, LPT " designation="Program Director of Scuola Maria" />

                        <br></br>

                        <div className="flex items-center justify-center  gap-2 md:items-start md:justify-start">
                            <TestimonialBullet isActive={true} />
                            <TestimonialBullet isActive={false} />
                        </div>


                    </div>


                    <div class="w-full  md:w-2/5 relative ">
                        <div class="w-full h-[486px] md:w-[503px] flex items-center justify-center  md:ml-8 
                            before:block 
                            before:absolute  
                            before:rounded-full 
                            before:w-full before:aspect-square 
                            before:top-[50%]
                            md:before:w-[503px]
                            md:before:h-[503px]
                            before:bg-[#FDC00F]
                            md:before:left-0
                            md:before:bottom-0
                            md:before:top-36"
                        >
                            <img src={TestimonialPersonImage} className="absolute -bottom-5 w-52 md:w-[325px] z-10 md:block md:ml-12 md:bottom-0" />

                        </div>
                    </div>

                </div>

            </section>
        )
    
}

export default Testimonials
