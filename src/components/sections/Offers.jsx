import React, { Component } from 'react';
import Title from '../Base/Title'
import Offer from '../Offer';
import Container  from '../Container';

import { offerList } from '../../Data/Offer';


const isEven = (number) => {
    return number % 2  ? true : false;
}


function Offers() {
    return (
            <Container>
                <div data-aos="fade-up" data-aos-delay="100" id="offers" className="w-full  pt-16 md:px-4 md:min-h-screen">

                    <div className="block py-16">
                        <Title text="The LMS that's built for every need" />
                    </div>

                    {
                        offerList.map((item, index) => {
                            return (
                                <Offer
                                    key={index}
                                    animation={(index % 2 ? "fade-left" : "fade-right")}
                                    image={item.image}
                                    name={item.name}
                                    description={item.description}
                                    link={item.link}
                                    isLeft={isEven(index)}
                                />
                            )
                        })
                    }
                </div>
            </Container>   
        )    
}

export default Offers