export default function Offer(props) {    
    return (
        <div data-aos={props.animation} data-aos-delay="200"  className="w-full flex flex-col  items-center md:flex-row">
            <div className={props.isLeft ? 'md:order-1' : ''}>
                <img src={props.image} className="w-full h-full" />
            </div>
            <div className="w-full md:w-[500px]" >
                <h3 className="font-bold text-center  tracking-wide text-3xl mb-6 md:text-4xl md:mb-8 md:text-left">{props.name}</h3>
                <p className="text-base text-center text-[#545454] tracking-wide mb-4 md:text-left md:text-xl ">{props.description}</p>
                <a href={props.link} className="block text-center text-[#3966D8] text-base md:text-left md:text-lg font-semibold tracking-wide">Learn more {props.isLeft}</a>
            </div>
        </div>
    )
}

