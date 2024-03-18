import React from 'react'
import facebook from '../../assets/footer/facebook.svg';
import twitter from '../../assets/footer/twitter.svg';
import linkedin from '../../assets/footer/linkedin.svg';
import instagram from '../../assets/footer/insta.svg';
import playStore from '../../assets/footer/playStore.svg';
import appStore from '../../assets/footer/appStore.svg';
import { Link } from 'react-router-dom';

const Footer = () => {


    return (
        <div className='w-[100%] flex max-lg:flex-col  max-lg:items-center lg:justify-between lg:pl-[180px] lg:pr-[150px] mt-[50px] pb-[30px] pt-[30px] bg-[#f5f5f5]'>
            <div className='w-full lg:w-1/2 flex max-sm:flex-col max-sm:pl-[30px]  max-sm:gap-4 lg:justify-between justify-evenly'>
                <div className=''>
                    <p>@2024 All rights reserved to </p>
                    <p> CulturTap Tourism Indai Pvt. Ltd.</p>
                    <div className='flex mt-[26px] font-bold text-[#2e2c43]'>Registered Office</div>
                    <p>189/2, Out side datia gate,</p>
                    <p>Jhansi, Uttar Pradesh, India.</p>
                    <p>284002</p>
                    <div className='max-sm:flex flex-col hidden my-2'>
                        <p className='flex text-[#2e2c43] font-bold'>Help Center</p>
                        <p className='flex flex-col '><Link to='/contact/report'> Report Concern </Link> <Link to='/contact'>Contact Us</Link> </p>
                        <p className='flex mt-[15px] font-bold text-[#2e2c43]'>Careers</p>
                        <p>Open Opportunities</p>
                    </div>
                </div>
                <div className='max-sm:hidden'>
                    <p className='flex text-[#2e2c43] font-bold'>Help Center</p>
                    <p className='flex flex-col '><Link to='/contact/report'> Report Concern </Link> <Link to='/contact'>Contact Us</Link> </p>
                    <p className='flex mt-[15px] font-bold text-[#2e2c43]'>Careers</p>
                    <p>Open Opportunities</p>
                </div>
            </div>

            <div className='max-lg:w-full flex flex-col max-sm:items-start max-lg:items-center max-sm:pl-[30px]'>
                <p className='text-[#2e2c43] font-bold content-baseline'>Follow Us</p>
                <div className='flex gap-2 mt-3 cursor-pointer'>
                    <a href='#' className='w-[32px] h-[32px]'>
                        <img src={facebook} alt="logo" loading='lazy' />
                    </a>
                    <a href='#' className='w-[32px] h-[32px] pt-[2px] cursor-pointer'>
                        <img src={twitter} alt="logo" loading='lazy' />
                    </a>
                    <a href='#' className='w-[32px] h-[32px] cursor-pointer'>
                        <img src={linkedin} alt="logo" loading='lazy' />
                    </a>
                    <a href='#' className='w-[32px] h-[32px] cursor-pointer' >
                        <img src={instagram} alt="logo" loading='lazy' />
                    </a>
                </div>
                <p className='text-[#2e2c43] font-bold mt-[25px] mb-[10px]'>Download App</p>
                <div className='flex'>
                    <a href='#' className='pt-[12px] cursor-pointer'>
                        <img src={appStore} alt="logo" loading='lazy' />
                    </a>
                    <a href='#' className='cursor-pointer'>
                        <img src={playStore} alt="logo" loading='lazy' />
                    </a>
                </div>


            </div>
        </div >
    )
}

export default Footer