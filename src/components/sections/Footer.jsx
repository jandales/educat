
import { Image } from '../../data'

const { LogoImage } = Image;

function Footer(){
  
        return (
            <section data-aos="fade-up"  id="footer" className="w-full md:w-[1132px] md:mx-auto pt-12">
                <ul className=" w-full flex items-center justify-center gap-16">
                    <li data-aos="fade-down" data-aos-delay="100"  className="text-[#3966D8]" ><i className=" bi bi-facebook text-3xl md:text-4xl"></i></li>
                    <li data-aos="fade-down" data-aos-delay="200"  className="text-[#3966D8]"><i className="bi bi-instagram text-3xl md:text-4xl"></i></li>
                    <li data-aos="fade-down" data-aos-delay="300"  className="text-[#3966D8]"><i className="bi bi-twitter text-3xl md:text-3xl"></i></li>
                    <li data-aos="fade-down" data-aos-delay="400"  className="text-[#3966D8]"><i className="bi bi-dribbble text-3xl md:text-3xl"></i></li>

                </ul>
                <div className="w-full md:w-[1132px] md:mx-auto flex flex-col items-center justify-between py-8 px-4 md:flex-row">
                    <a href='' data-aos="fade-up" data-aos-delay="100">
                        <img src={LogoImage} className='w-[128px]' />
                    </a>

                    <a className="order-2 md:order-1 text-sm text-[#000000] mt-4 md:mt-0" data-aos="fade-up" data-aos-delay="600"> © Copyright 2021. All rights reserved.</a>

                    <ul className="flex flex-col items-center gap-2 md:gap-12 md:flex-row">
                        <li data-aos="fade-up" data-aos-delay="100"><a className="text-sm text-[#000000]">About us</a></li>
                        <li data-aos="fade-up" data-aos-delay="200"><a className="text-sm text-[#000000]">Products</a></li>
                        <li data-aos="fade-up" data-aos-delay="300"><a className="text-sm text-[#000000]">Shop</a></li>
                        <li data-aos="fade-up" data-aos-delay="400"><a className="text-sm text-[#000000]">Terms of use</a></li>
                        <li data-aos="fade-up" data-aos-delay="500"><a className="text-sm text-[#000000]">Data privacy</a></li>
                    </ul>


                </div>
            </section>
        )
 
}

export default Footer