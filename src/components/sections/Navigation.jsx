import { useRef, useEffect } from "react";
import Button from "../Base/Button";
import logo from "../../assets/logo-34332373.png"
import { navigationLinks } from '../../Data/Links'
import Container from "../Container";

function Navigation() {

    let hidden = 'hidden';
    let flex = 'flex'
    let fixed = 'fixed'
    const wrapper = useRef(null)

    function handleOpenMenu() {
        const element = document.getElementById('nav')
        element.classList.replace(hidden, flex)
    }

    function handleCloseMenu() {
        const element = document.getElementById('nav')
        element.classList.replace(flex, hidden)
    }




 

    return (
        <Container>
            <div className="w-full flex items-center justify-between md:py-8  lg:px-0">

                <a href='#' >
                    <img data-aos="fade-down" src={logo} className='w-[180px] md:w-[232px]' />
                </a>

                <span data-aos="fade-down" onClick={handleOpenMenu} className="text-3xl lg:hidden"><i className="bi bi-list"></i></span>

                <nav data-aos="fade-down" id="nav" className='hidden w-full h-full z-10 fixed top-0 left-0 bg-white flex-col gap-8 items-center  p-8 
                lg:w-auto
                lg:h-auto
                lg:flex
                lg:flex-row
                lg:items-center
                lg:gap-8
                lg:p-0
                lg:relative
                lg:right-0'
                >
                    {/* close icon */}
                    <span onClick={handleCloseMenu} className="self-end text-2xl font-black lg:hidden"> <i className="bi bi-x-lg"></i>   </span>

                    {/* hambuger icon */}
                    <a href='#' className="lg:hidden">
                        <img src={logo} className='w-[180px] md:w-[232px]' />
                    </a>

                    <ul className="flex flex-col items-center gap-8 lg:flex-row">
                        {
                            navigationLinks.map((item, index) => {
                                return (
                                    <li key={index}><a  href={item.link} className="text-darker leading-5 text-lg md:text-xl cursor-pointer hover:text-mantis font-poppins">{item.name}</a></li>
                                )
                            })
                        }
                    </ul>

                    <Button text='BOOK A DEMO'></Button>
                </nav>
            </div>
       </Container>     
    )


}


export default Navigation