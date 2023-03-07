import { useRef, useEffect } from "react";
import CounterItem from "../CounterItem";

let counter = [
    { number: 1200, label: 'Learning Materials Donated' },
    { number: 1000, label: 'LMS Users' },
    { number: 3000, label: 'Trained Professionals' },
    { number: 1500, label: 'Learning Lorem ipsum' },
]

function CountCard() {  
        return (
            <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="3000" className="w-full md:w-[1132px] md:h-72 md:mx-auto grid grid-cols-2  md:grid-cols-4 gap-8 mt-20 mb-20 px-4 md:px-0 md:mb-0">
                {counter.map(item =>
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