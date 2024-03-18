import React, { useEffect, useRef, useState } from 'react';
import logo from '../../assets/navbar/culturTap logo.svg';
import appStore from '../../assets/navbar/appStore.svg';
import playStore from '../../assets/navbar/playStore.svg';
import culturTapName from '../../assets/Home/culturtap.png';
import { Link, useLocation } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";


const Navbar = () => {
    // const currentURL = window.location.href;
    const [currPage, setCurrPage] = useState("home");
    const currentURLRef = useRef(window.location.href);
    const [updatedURL, setUpdatedURL] = useState(window.location.href);
    const [isOpen, setisOpen] = useState(false);

    const location = useLocation();
    useEffect(() => {
        setUpdatedURL(location.pathname);
        // console.log('updated URL: ' + updatedURL);
    }, [location]);


    useEffect(() => {
        if (updatedURL.includes('about')) {
            setCurrPage("about");
        }
        else if (updatedURL.includes('earn')) {
            setCurrPage("earn");
        }
        else if (updatedURL.includes('contact')) {
            setCurrPage("contact");
        }
        else if (updatedURL.includes('services')) {
            setCurrPage("services");
        }
        else {
            setCurrPage("home");

        }
        // console.log('url', currPage);

    }, [updatedURL]);

    const handleNav = () => {
        setisOpen(!isOpen);
    }

    return (
        <div className='w-screen max-sm:fixed max-sm:top-0 flex justify-between gap-10 md:px-[20px] max-sm:mt-0 max-lg:pb-[20px]  max-lg:pr-[30px] bg-white z-50'>
            <div className='pt-[14px] md:pl-[14px] max-lg:pl-[30px] relative'>
                <img src={logo} alt="logo" className=' w-[50px] h-[50px] lg:w-[102px] lg:h-[102px]' />
                <div className='absolute max-lg:hidden top-[170px] left-[8px]'>
                    <img src={culturTapName} alt="culturTap" />
                </div>
            </div>
            <div className='w-[840px] hidden lg:flex lg:gap-4 justify-around text-[#2f2341] text-[16px]'>
                <div className='w-full flex pt-[65px] gap-[40px]'>


                    <div className='w-[max-content]'>
                        <Link to='/' className={`${currPage === "home" ? "font-bold border-b-4 pb-3 border-[#fb8c00]" : ""}`}>Home</Link>
                    </div>
                    <div className='w-[max-content]'>
                        <Link to='/about' className={`${currPage === "about" ? "font-bold border-b-4 pb-3 border-[#fb8c00]" : ""}`}>About Us</Link>
                    </div>
                    <div className='w-[max-content]'>
                        <Link to='/services' className={`${currPage === "services" ? "font-bold border-b-4 pb-3 border-[#fb8c00]" : ""}`}>Services</Link>
                    </div>
                    <div className='w-[max-content]'>
                        <Link to='/earn' className={`${currPage === "earn" ? "font-bold border-b-4 pb-3 border-[#fb8c00]" : ""}`}>Earn with us</Link>
                    </div>
                    <div className='w-[max-content]'>
                        <Link to='/contact' className={`${currPage === "contact" ? "font-bold border-b-4 pb-3 border-[#fb8c00]" : ""}`}>Contact Us</Link>
                    </div>
                </div>
                <div className='w-full flex '>
                    <a href="#" className='pt-[46px]'>
                        <img src={appStore} alt="appStore" width="149px" height="44px" />
                    </a>
                    <a href="#" className='pt-[36px]'>
                        <img src={playStore} alt="playStore" width="165px" height="64px" />
                    </a>
                </div>
            </div>
            <div className='flex flex-col gap-1 justify-center cursor-pointer lg:hidden' onClick={handleNav}>
                {isOpen ?
                    (<AiOutlineClose fontSize={30} />) :
                    (<GiHamburgerMenu fontSize={30} />)

                }

            </div>


            {isOpen &&
                <div className='w-full flex fixed top-[80px] overflow-y-hidden  justify-center z-50 '>
                    <div className='flex flex-col gap-6 py-10 pb-10 bg-white w-full  h-screen text-[18px]  items-center shadow-md  rounded-md'>
                        <div >
                            <Link to='/' className={`${currPage === "home" ? "font-bold border-b-4 pb-3 border-[#fb8c00]" : ""}`} onClick={handleNav}>Home</Link>
                        </div>
                        <div>
                            <Link to='/about' className={`${currPage === "about" ? "font-bold border-b-4 pb-3 border-[#fb8c00]" : ""}`} onClick={handleNav}>About Us</Link>
                        </div>
                        <div>
                            <Link to='/services' className={`${currPage === "services" ? "font-bold border-b-4 pb-3 border-[#fb8c00]" : ""}`} onClick={handleNav}>Services</Link>
                        </div>
                        <div >
                            <Link to='/earn' className={`${currPage === "earn" ? "font-bold border-b-4 pb-3 border-[#fb8c00]" : ""}`} onClick={handleNav}>Earn with us</Link>
                        </div>
                        <div>
                            <Link to='/contact' className={`${currPage === "contact" ? "font-bold border-b-4 pb-3 border-[#fb8c00]" : ""}`} onClick={handleNav}>Contact Us</Link>
                        </div>
                    </div>
                </div>
            }


        </div >

    )
}

export default Navbar;
