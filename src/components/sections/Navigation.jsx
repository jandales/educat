import Button from "../Base/Button";
import logo from "../../assets/logo-34332373.png"
import { navigationLinks } from '../../Data/Links'

function Navigation() {

    let hidden = 'hidden';
    let flex = 'flex'

    function handleOpenMenu() {
        const element = document.getElementById('nav')
        element.classList.replace(hidden, flex)
    }

    function handleCloseMenu() {
        const element = document.getElementById('nav')
        element.classList.replace(flex, hidden)
    }

 

    return (

        <div className="w-full px-4   flex items-center justify-between md:py-8 md:w-[1132px] md:mx-auto md:px-0
          ">

            <a href='#' >
                <img data-aos="fade-down" src={logo} className='w-[180px] md:w-[232px]' />
            </a>

            <span onClick={handleOpenMenu} class="text-3xl md:hidden"><i class="bi bi-list"></i></span>

            <nav data-aos="fade-down" id="nav" className='hidden w-full h-full z-10 fixed top-0 left-0 bg-white flex-col gap-8 items-center  p-8 md:w-auto md:h-auto md:flex md:flex-row md:items-center md:gap-8 md:p-0 md:relative md:right-0'>

                <span onClick={handleCloseMenu} className="self-end text-2xl font-black md:hidden">
                    <i class="bi bi-x-lg"></i>
                </span>

                <a href='#' className="md:hidden">
                    <img src={logo} className='w-[180px] md:w-[232px]' />
                </a>

                <ul className="flex flex-col items-center gap-8 md:flex-row">
                    {
                        navigationLinks.map(item => {
                            return (
                                <li><a href={ item.link } className="text-darker leading-5 text-lg md:text-xl cursor-pointer hover:text-mantis font-poppins">{ item.name}</a></li>
                            )
                        })
                    }                   
                </ul>

                <Button text='BOOK A DEMO'></Button>
            </nav>
        </div>
    )


}


export default Navigation