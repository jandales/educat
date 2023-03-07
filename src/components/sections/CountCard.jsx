
import CounterItem from "../CounterItem";
import counters from "../../Data/Counters";

function CountCard() {  
        return (
            <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="3000" className="w-full md:w-[1132px] md:h-72 md:mx-auto grid grid-cols-2  md:grid-cols-4 gap-8 mt-20 mb-20 px-4 md:px-0 md:mb-0">
                {counters.map(item =>
                    <CounterItem
                        key={item.number}
                        number={item.number}
                        label={item.label}
                    />
                )}

            </div>
        )
    
}

export default CountCard