import React, { useState, useEffect, useRef } from 'react';
import scroller1 from '../../assets/Home/scrollers/scroller1.svg';
import scroller2 from '../../assets/Home/scrollers/scroller2.svg';
import scroller3 from '../../assets/Home/scrollers/scroller3.svg';
import scroller4 from '../../assets/Home/scrollers/scroller4.svg';
import location1 from '../../assets/Home/locations/location1.svg';
import location2 from '../../assets/Home/locations/location2.svg';
import location3 from '../../assets/Home/locations/location3.svg';
import location4 from '../../assets/Home/locations/location4.svg';
import location5 from '../../assets/Home/locations/location5.svg';
import location6 from '../../assets/Home/locations/location6.svg';
import location7 from '../../assets/Home/locations/location7.svg';
import location8 from '../../assets/Home/locations/location8.svg';
import location9 from '../../assets/Home/locations/location9.svg';
import location10 from '../../assets/Home/locations/location10.svg';
import location11 from '../../assets/Home/locations/location11.svg';
import location12 from '../../assets/Home/locations/location12.svg';
import location13 from '../../assets/Home/locations/location13.svg';
import location14 from '../../assets/Home/locations/location14.svg';
import location15 from '../../assets/Home/locations/location15.svg';
import location16 from '../../assets/Home/locations/location16.svg';
import location17 from '../../assets/Home/locations/location17.svg';
import location18 from '../../assets/Home/locations/location18.svg';
import location19 from '../../assets/Home/locations/location19.svg';
import location20 from '../../assets/Home/locations/location20.svg';
import location21 from '../../assets/Home/locations/location21.svg';
import location22 from '../../assets/Home/locations/location22.svg';
import '../../index.css';

const Home = () => {
    const contentRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const scroller = [
        {
            id: 1,
            link: scroller1,
            title: "Start your Adventure now!",
        },
        {
            id: 2,
            link: scroller2,
            title: "Explore Update, Guide & Earn!",
        },
        {
            id: 3,
            link: scroller3,
            title: "Earn by assisting nearby tourists!",
        },
        {
            id: 4,
            link: scroller4,
            title: "Let's explore this world together!",
        },
    ];

    const locations = [
        {
            id: 1,
            link: location1,
        },
        {
            id: 2,
            link: location2,
        },
        {
            id: 3,
            link: location3,
        },
        {
            id: 4,
            link: location4,
        },
        {
            id: 5,
            link: location5,
        },
        {
            id: 6,
            link: location6,
        }, {
            id: 7,
            link: location7,
        },
        {
            id: 8,
            link: location8,
        },
        {
            id: 9,
            link: location9,
        },
        {
            id: 10,
            link: location10,
        },
        {
            id: 11,
            link: location11,
        },
        {
            id: 12,
            link: location12,
        },
        {
            id: 13,
            link: location13,
        },
        {
            id: 14,
            link: location14,
        },
        {
            id: 15,
            link: location15,
        },
        {
            id: 16,
            link: location16,
        }, {
            id: 17,
            link: location17,
        },
        {
            id: 18,
            link: location18,
        },
        {
            id: 19,
            link: location19,
        },
        {
            id: 20,
            link: location20,
        },
        {
            id: 21,
            link: location21,
        }
    ]

    // Function to calculate active index based on scroll position
    const calculateActiveIndex = () => {
        const contentElement = contentRef.current;
        const scrollLeft = contentElement.scrollLeft;
        const containerWidth = 400;
        const activeIndex = Math.round(scrollLeft / containerWidth);
        setActiveIndex(activeIndex);
    };

    // Attach scroll event listener
    useEffect(() => {
        const handleScroll = () => {
            calculateActiveIndex();
        };

        contentRef.current.addEventListener('scroll', handleScroll);

        return () => {
            contentRef?.current?.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='w-screen md:mt-[60px] max-sm:pt-[100px] -z-50'>
            <div className='flex ml-[10px] mr-[10px] mx-auto sm:ml-[50px] sm:mr-[20px] lg:ml-[197px] lg:mr-[150px] gap-[71px] overflow-x-scroll scrollbar-hidden' ref={contentRef}>
                {scroller.map((item, index) => (
                    <div key={index} className={`w-[320px] h-[340px] md:w-[380px] md:h-[350px] lg:w-[545px] lg:h-[423px] rounded-2xl flex-shrink-0 md:shadow-slate-600 shadow-sm  m-2 mb-10 ${activeIndex === index ? 'active' : ''}`}>
                        <div className='w-full flex justify-center pt-[18px]'>
                            <img src={item.link} alt="scrollers" loading='lazy' className='w-[300px] h-[200px] lg:w-[340px] lg:h-[250px] scale-105' />
                        </div>
                        <div className='text-[20px] flex justify-center pt-[60px]'>{item.title}</div>
                    </div>
                ))}
            </div>
            <div className="bullet-points">
                {scroller.map((item, index) => (
                    <div
                        key={item.id}
                        className={`bullet-point ${index === activeIndex ? 'active-bullet transition-all duration-500' : ''}`}
                        onClick={() => {
                            const contentElement = contentRef.current;
                            const containerWidth = `450px`;
                            contentElement.scrollTo({
                                left: index * containerWidth,
                                behavior: 'smooth'

                            });
                        }}
                    ></div>
                ))}
            </div>


            <div className='w-full flex flex-col pl-[20px] sm:pl-[50px] lg:pl-[220px] mt-[45px]'>
                <div className='text-[40px] font-bold heading-color max-sm:text-[28px]'>New Locations?</div>
                <div className='text-[16px]'>Explore the culture of your next destination</div>
            </div>

            <div className='w-screen flex flex-wrap  lg:pl-[180px] gap-[20px] mt-10 max-lg:justify-center'>
                {
                    locations.map((item, index) => (
                        <div key={item.id} className='rounded-xl'>
                            <img src={item.link} alt="locations" className="w-[100px] h-[100px] md:w-[140px] md:h-[140px] object-none rounded-xl" loading='lazy' />
                        </div>
                    ))
                }
                <div className='w-[100px] h-[100px] md:w-[140px] md:h-[140px] flex justify-center items-center bg-[#ddd8b1] rounded-lg font-semibold text-[20px] p-2'>
                    & lot more...
                </div>
            </div>
        </div>
    );
};

export default Home;
