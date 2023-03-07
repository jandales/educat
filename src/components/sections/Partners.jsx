
import Title from '../Base/Title';
import Heading from '../Base/Heading';

let lists = [
    '../src/assets/partners/partner1-a09bc461.png',
    '../src/assets/partners/partner2-de43687d.png',
    '../src/assets/partners/partner3-b177d39d.png',
    '../src/assets/partners/partner4-c0b81eff.png',
    '../src/assets/partners/partner5-e803fe28.png',
    '../src/assets/partners/partner6-167d2745.png',
]

function Partners() {
    return (
        <section data-aos="fade-up" data-aos-delay="100" id="parners" className="w-full md:w-[1132px]  md:h-[400px] md:mx-auto pt-12">
            <Heading  text="OUR HAPPY CLIENTS" />
            <Title text="Our Partners" />
            <div className="flex justify-center gap-8 md:gap-14 w-full mt-10 md:mt-20 flex-wrap md:flex-nowrap pb-8">
                {
                    lists.map((partner, index) => {
                        return (
                            <div data-aos="fade-up" data-aos-delay="200" className="w-20 md:w-20 aspect-square" key={index}>
                                <img src={partner} className="w-full h-full grayscale" />
                            </div>
                            )
                        }                     
                    )
                }
            </div>
        </section>
    )

}

export default Partners