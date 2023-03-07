

function Image(props)  {  
    return (
        <div className="w-48 md:w-[500px] md:h-[279px] md:-left-10 md:-bottom-11 md:absolute ">
            <img src={props.image} className="w-full h-full" />
        </div>
    )    
}

export default Image

