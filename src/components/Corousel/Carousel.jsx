import Title from './Title';
import Heading from './Heading'
import SubHeading from './SubHeading'
import Paragraph from './Paragraph'
import Image from './Image'
import Arrow from './Arrow'


function Carousel(props) {
 
        return (
            <div className="relative bg-blue rounded-xl w-full  h-[250px] md:h-[280px] overflow-hidden px-10">


                    <div className="w-full relative h-auto z-10 lg:w-1/2 p-4 md:p-8 lg:mt-8">

                        <Title text={props.title} />

                        <div className="flex gap-4 md:gap-6 md:pt-4 ">

                            <Heading text={props.counterText} />

                            <div>
                                <SubHeading text={props.heading} />
                                <Paragraph text={props.description} />                            
                            </div>

                        </div>

                    </div>

                   
                        <Image image={props.image} />
               

          

                <Arrow />

            </div>
        )
    
}

export default Carousel;
