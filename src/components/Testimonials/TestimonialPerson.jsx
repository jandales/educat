


function TestimonialPerson(props) {
    return (
        <div className="">
            <label data-aos="fade-up" data-aos-delay="300"  className="block text-center text-lg text-[#222222] font-bold lg:text-left">
                {props.name}
            </label>
            <label data-aos="fade-up" data-aos-delay="400" className="block text-center text-base text-[#18191F] font-normal lg:text-left">
                {props.designation}
            </label>
        </div>
    )    
}

export default TestimonialPerson
