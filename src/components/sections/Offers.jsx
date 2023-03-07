import React, { Component } from 'react';
import Title from '../Base/Title'
import Offer from '../Offer';
import { Image } from '../../data';

const { LmsImage1,  LmsImage2, } = Image;
let offerList = [
    {
        image: LmsImage1,
        name:"General Education",
        description:"Transform your learning digitally. Streamline all your school processes in one platform made especially for students, for teachers, and for parents.",
        link:"#",   
    },
    {
        image: LmsImage2,
        name: "Professional Training",
        description: "Bringing you a platform that provides end to end solution in the training process for your employees, customers, or partners that allows.",
        link: "#",     
    },

]

const isEven = (number) => {
    return number % 2  ? true : false;
}


function Offers() {


        return (
            <section data-aos="fade-up" data-aos-delay="100"  id="offers" className="w-full md:w-[1132px] md:mx-auto pt-16 md:min-h-screen">

                <div className="block py-16">
                    <Title   text="The LMS that's built for every need" />
                </div>

                {
                    offerList.map((item, index) => {
                        return (
                            <Offer
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
                

              


            </section>

        )
    
}

export default Offers