function Product(props) {
    let animate = "";
    
    if (props.index == 0) {
        animate = "fade-right"
    }
    if (props.index == 1) {
        animate = "fade-up"
    }

    if (props.index == 2) {
        animate = "fade-left"
    }
        return (
            <div data-aos={animate} className="w-[260px] aspect-square flex items-center flex-col gap-4">
                
                <div className="w-28 aspect-square">
                    <img src={props.image} className="w-full h-full" />
                </div>

                <h3 className=" text-center text-lg font-semibold text-[#121212]">{props.name}</h3>

                <p className="text-center text-sm font-normal text-[#545454] md:text-base">{props.description}</p>

            </div>
        )    
}

export default Product;