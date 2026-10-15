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
            <div data-aos={animate} className="w-full flex flex-col items-center gap-4">
                <div className="w-24 h-24 md:w-28 md:h-28 shrink-0">
                    <img src={props.image} className="w-full h-full object-contain" />
                </div>

                <h3 className="text-center text-lg font-semibold text-[#121212]">{props.name}</h3>

                <p className="text-center text-sm font-normal text-[#545454] md:text-base max-w-sm">{props.description}</p>
            </div>
        )    
}

export default Product;