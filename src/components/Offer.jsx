export default function Offer(props) {    
    return (
        <div data-aos={props.animation} data-aos-delay="200"  className="w-full flex flex-col items-center gap-8 md:flex-row md:gap-10 lg:gap-16">
            <div className={`w-full md:w-1/2 shrink-0 ${props.isLeft ? 'md:order-1' : ''}`}>
                <img src={props.image} className="w-full h-auto max-w-full" />
            </div>
            <div className="w-full md:w-1/2 min-w-0">
                <h3 className="font-bold text-center  tracking-wide text-3xl mb-6 md:text-4xl md:mb-8 md:text-left">{props.name}</h3>
                <p className="text-base text-center text-[#545454] tracking-wide mb-4 md:text-left md:text-xl md:font-semibold ">{props.description}</p>
                <a href={props.link} className="block text-center text-[#3966D8] text-base md:text-left md:text-lg font-semibold tracking-wide">Learn more {props.isLeft}</a>
            </div>
        </div>
    )
}

