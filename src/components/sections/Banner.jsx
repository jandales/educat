
import { useEffect, useRef } from 'react'


let icons = [
    { name: 'Progress Monitoring', image: '../src/assets/monitoring-21ace7f6.svg' },
    { name: 'Messaging', image: '../src/assets/messaging-23dfda50.svg' },
    { name: 'announcements', image: '../src/assets/announcement-ad555144.svg' },
    { name: 'calendar', image: '../src/assets/calendar-d86047de.svg' },
    { name: 'assessments', image: '../src/assets/assessment-689cfd2a.svg' },
    { name: 'calendar', image: '../src/assets/calendar-d86047de.svg' },
    { name: 'user management', image: '../src/assets/users-0b0d31be.svg' },
    { name: 'security', image: '../src/assets/security-6287276c.svg' },
    { name: 'section management', image: '../src/assets/section-01eef394.svg' },
    { name: 'analytics', image: '../src/assets/analytics-62101890.svg' },
    { name: 'tools', image: '../src/assets/tools-184af6e0.svg' }
];



function Banner() {

    const itemRef = useRef(null);

    const scrollAnimation = () => {

        const element = itemRef.current;

        const scrollHeight = element.scrollHeight;
        const heigth = element.clientHeight;
        const maxScrollTop = scrollHeight - heigth;     

        setInterval(() => {
            element.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
     
            setTimeout(() => {
                element.scrollTop = 0;
            }, 2000)
            
        }, 4000)

       



    }

    useEffect(() => {
        scrollAnimation()
    });

        return (

            <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="3000" className="w-full bg-ligth-blue flex flex-col mt-16  overflow-hidden md:w-[1132px] md:mx-auto md:flex-row md:h-[490px] md:rounded-xl ">

                <div className="w-full md:w-1/2 p-10 flex flex-col items-center justify-center md:items-start md:justify-start">

                    <h2 className='text-3xl text-center font-bold text-darker md:text-left md:text-[40px] leading-10 tracking-wide pb-8'>Designed to help you Work Smarter not Harder</h2>

                    <p className="text-lg text-center text-[#545454] pb-10 md:text-left">Educat LMS offers the perfect end-to-end solution for schools and businesses. It also provides you with all the features needed to make learning and training easier. </p>

                    <a className="px-8 py-3 text-white font-bold bg-blue">BOOK A DEMO</a>

                </div>

                <div className="w-full    md:w-1/2 ">

                    <div  className='w-full bg-[#FDC00F4F] shadow-[0px_0px_20px_20px] shadow-amber-50 rounded-tl-[30%] rounded-tr-[30%] md:rounded-l-full overflow-hidden'>
                        <div ref={itemRef} className="w-[13rem] gap-4 max-h-80  mx-auto flex flex-wrap pt-10 overflow-y-auto no-scrollbar delay-1000 ease-in scroll-smooth md:pt-16 md:max-h-[490px] md:gap-8 md:w-[14rem]  md:pb-4  lg:w-[19rem] ] ">
                            {icons.map(icon =>
                                <div key={icon.name} className="w-24 aspect-square bg-white rounded-xl drop-shadow-xl flex flex-col items-center justify-center  gap-4 px-8 lg:w-28">
                                    <div className='w-6 aspect-square  md:w-7  lg:w-14  '>
                                        <img src={icon.image} className="w-full h-full" />
                                    </div>
                                    <label className="text-xs text-center  capitalize">{icon.name}</label>
                                </div>
                            )}

                        </div>
                   </div>

                </div>

            </div>

        )
    
}

export default Banner