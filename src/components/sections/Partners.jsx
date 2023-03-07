
import Title from '../Base/Title';
import Heading from '../Base/Heading';
import { Image } from '../../data';

const { PartnerImage1, PartnerImage2, PartnerImage3, PartnerImage4, PartnerImage5, PartnerImage6 } = Image

let lists = [
    PartnerImage1,
    PartnerImage2,
    PartnerImage3,
    PartnerImage4,
    PartnerImage5,
    PartnerImage6
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