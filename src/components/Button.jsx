

function Button(props) {
   
        return (
            <button className="px-4 py-3 md:px-6 md:py-4  text-white font-bold bg-[#7BC144]">
                {props.text}
            </button>
        )
    
}

export default Button