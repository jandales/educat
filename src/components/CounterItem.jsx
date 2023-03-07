import { useEffect, useRef } from "react";

function CounterItem(props) {

    let countRef = useRef(null);

    const count = () => {

        let interval = 5000;
        let endValue = parseInt(countRef.current.getAttribute('data-count'))
        let startValue = 0;
        let duration = interval / endValue;

        let counterAnimation = setInterval(() => {
            startValue += 1
            countRef.current.textContent = startValue;
            if (startValue == endValue) {
                clearInterval(counterAnimation);
            }

        }, duration);

    }

    useEffect(() => {
        count()
    }, []);

    return ( <div className='py-6'>
        <label ref={countRef} className="block text-center text-mantis text-5xl mb-4 font-bold font-poppins" data-count={props.number}>{props.number}</label>
        <label className="block text-center text-sm capitalized md:text-xl">{  props.label}</label>
    </div>
    )
}

export default CounterItem;