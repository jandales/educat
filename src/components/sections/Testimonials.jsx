

import { Image } from '../../data';
import TestimonialPerson from '../Testimonials/TestimonialPerson';
import TestimonialComment from '../Testimonials/TestimonialComment';
import TestimonialTitle from '../testimonials/TestimonialTitle';
import TestimonialBullet from '../testimonials/TestimonialBullet';
import Container from '../Container';

const { QuotationImage, TestimonialPersonImage } = Image;

function Testimonials()  {

    return (
            
      
            <section data-aos="fade-up" id="testimonials" className="w-full relative bg-[#FDC00F4F] lg:h-[486px] py-4 overflow-hidden">
            <Container>
                <div className="w-full flex flex-col lg:flex-row ">

                    <div class="w-full px-8 lg:px-0 lg:p-4 lg:w-3/5">
                        <br></br>
                        <TestimonialTitle text="They Said It First" />
                        <br></br>
                        <br className="hidden lg:block"></br>
                        <div className="w-full h-auto relative">

                            <img data-aos="fade-up" data-aos-delay="100" src={QuotationImage} className="w-10 absolute z-[-100] -top-5 lg:w-12 lg:-left-10 lg:-top-10" />

                            <TestimonialComment text="Scuola Maria is fortunate to work with PCI early on when the pandemic hit the country. My ideas and my curriculum design all came to life in the NEST — our exclusive LMS for our students. If not for PCI, we wouldn't be able to continue education at this very difficult time." />

                            <img data-aos="fade-up" data-aos-delay="100" src={QuotationImage} className="w-10 absolute right-0 bottom-1   lg:w-10 lg:-bottom-10 lg:right-36" />
                        </div>


                        <br></br>
                        <br className="hidden lg:block"></br>

                        <TestimonialPerson name="Ina Gonda-Ramos, MAE-CDE, LPT " designation="Program Director of Scuola Maria" />

                        <br></br>

                        <div className="flex items-center justify-center  gap-2 lg:items-start lg:justify-start">
                            <TestimonialBullet isActive={true} />
                            <TestimonialBullet isActive={false} />
                        </div>


                    </div>


                    <div class="w-full   relative lg:w-2/5">
                        <div data-aos="fade-up" data-aos-delay="100" data-aos-offset="500" class="w-full h-80  md:h-72 flex items-center justify-center  lg:ml-8  lg:h-[486px] lg:w-[503px]
                            before:block 
                            before:absolute  
                            before:rounded-full 
                            before:w-full 
                            before:aspect-square 
                            before:bg-[#FDC00F]
                            before:top-[50%]
                            lg:before:w-[503px]
                            lg:before:h-[503px]                      
                            lg:before:left-0
                            lg:before:bottom-0
                            lg:before:top-36"
                        >
                            <img src={TestimonialPersonImage} className="absolute -bottom-10 w-52  z-10 lg:block lg:ml-12 lg:bottom-0 lg:w-[325px]" />

                        </div>
                    </div>

                </div>

            </Container>
            </section>
      
          
        )
    
}

export default Testimonials
