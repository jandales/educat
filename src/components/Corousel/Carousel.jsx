import Title from './Title';
import Heading from './Heading'
import SubHeading from './SubHeading'
import Paragraph from './Paragraph'
import Image from './Image'
import Arrow from './Arrow'


function Carousel(props) {
 
        return (
            <div className="relative bg-blue md:rounded-xl w-full  md:max-w-[1132px] h-[400px] md:h-[367px] overflow-hidden px-10">

                <div className="flex flex-col  gap-4 md:flex-row  md:gap-8">

                    <div className="w-full md:w-1/2 p-4 md:p-8 h-auto md:mt-8">

                        <Title text={props.title} />

                        <div className="flex flex-col gap-4 md:gap-6 md:pt-2 md:pt-4 md:flex-row">

                            <Heading text={props.counterText} />

                            <div>
                                <SubHeading text={props.heading} />
                                <Paragraph text={props.description} />                            
                            </div>

                        </div>

                    </div>

                    <div className="w-full flex items-center justify-center md:w-1/2  relative md:h-[367px]">
                        <Image image={props.image} />
                    </div>

                </div>

                <Arrow />

            </div>
        )
    
}

export default Carousel;
