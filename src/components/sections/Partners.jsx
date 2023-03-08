
import Title from '../Base/Title';
import Heading from '../Base/Heading';
import { Image } from '../../data';
import Container from '../Container';

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
        <Container>
            <section data-aos="fade-up" data-aos-delay="100" id="parners" className="w-full  lg:h-[400px] lg:mx-auto pt-12">
                <Heading text="OUR HAPPY CLIENTS" />
                <Title text="Our Partners" />
                <div className="flex justify-center gap-8 lg:gap-14 w-full mt-10 lg:mt-20 flex-wrap lg:flex-nowrap pb-8">
                    {
                        lists.map((partner, index) => {
                            return (
                                <div data-aos="fade-up" data-aos-delay="200" className="w-20 lg:w-20 aspect-square" key={index}>
                                    <img src={partner} className="w-full h-full grayscale" />
                                </div>
                            )
                        }
                        )
                    }
                </div>
            </section>
        </Container>
      
    )

}

export default Partners