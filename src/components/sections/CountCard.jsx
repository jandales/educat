
import CounterItem from "../CounterItem";
import counters from "../../Data/Counters";
import Container from "../Container";
function CountCard() {  
        return (
            <Container>
                <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="3000" className="w-full grid grid-cols-2 gap-8 mt-15 mb-15 px-4 md:mt-16 md:mb-20 md:h-72 lg:grid-cols-4  lg:px-0 lg:mb-0">
                    {counters.map(item =>
                        <CounterItem
                            key={item.number}
                            number={item.number}
                            label={item.label}
                        />
                    )}

                </div>
            </Container>
        )
    
}

export default CountCard