

function TestimonialBullet(props) {
    return (
        <span data-aos="fade-up" data-aos-delay="500"  className={`block w-2.5 h-2.5 rounded-full ${props.isActive ? "bg-[#FDC00F]" : "bg-black"}`}>

        </span>
    )    
}

export default TestimonialBullet;