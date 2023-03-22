

function Image(props)  {  
    return (
        <div className="hidden md:block md:absolute md:right-[-5rem] md:bottom-[-3rem] md:max-w-md  lg:max-w-xl lg:translate-x-[100%] lg:-left-10 lg:-bottom-14">
            <img src={props.image} className="w-full h-full md:grayscale lg:grayscale-0 md:opacity-50 lg:opacity-100" />
        </div>
    )    
}

export default Image

