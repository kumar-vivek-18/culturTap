import React, { useEffect } from 'react';
import earning1 from '../../assets/earnings/earning1.svg';
import earning2 from '../../assets/earnings/earning2.svg';
import '../../index.css';
import { useLocation } from 'react-router-dom';

const Earn = () => {
    const location = useLocation();

    useEffect(() => {
        console.log('location', location.search);
        if (location.search.includes("termandcondition")) {
            console.log('location');
            window.scrollTo({
                top: 1300,
                behavior: 'smooth'
            });
        }
    }, [location]);


    return (
        <div className='max-sm:px-[30px] max-lg:px-[50px] lg:ml-[180px] md:mt-[60px] max-sm:pt-[100px] overflow-x-hidden'>
            <div>
                <h1 className='text-[38px] heading-color font-extrabold  max-sm:text-[28px]'>Earn with us!</h1>
                <p className='text-[14px]'>Help others to start your earnings.  </p>
            </div>
            <div className='w-full flex max-lg:flex-col gap-4 md:gap-[135px] md:mt-[50px] items-center md:pl-5'>
                <div className='md:scale-150 '>
                    <img src={earning1} alt="logo" loading='lazy' width='450px' height='300px' className='scale-125 ' />
                </div>
                <div className=''>
                    <h2 className='text-[22px] font-bold heading-color  max-sm:text-[20px]'>Become a Trip Planner :</h2>
                    <p className='text-[14px]'>Accept trip planning calls for your expert regions to earn.</p>
                    <p className='text-[14px] mt-6 lg:w-10/12'>Your unique way of exploring the locations & unique stories will help tourists to identify you from the crowd.  Connect with tourists and help them to plan their upcoming limited-day tours better. You will earn money  for 20 min of professional Trip Planning Call. </p>
                    <p className='text-[14px] mt-6'>
                        Set yourself a Trip planner now & help upcoming tourists to earn money !</p>
                    <p className='text-[14px] mt-6 font-semibold text-[#2e2c43]'>Download app now to know more... </p>
                </div>
            </div>
            <div className='flex  max-lg:flex-col-reverse md:mt-[100px] items-center gap-[0px] md:gap-[100px]'>
                <div className='md:w-3/5'>
                    <p className='heading-color text-[22px] font-bold max-sm:text-[18px]'>Become an Immediate Local assistant :</p>
                    <p className='text-[14px] w-10/11'>Be the saviour of your nearby needy tourists. Saving life is the work of God. These customised requests  and orders need
                        your physical presence to the needy tourists. Sometimes requests may be normal help out but sometimes  they may be critical like an accident.  </p>
                    <p className='text-[14px] mt-6'>You will earn money for helping out tourists properly within your presence. </p>
                    <p className='text-[14px] mt-6'>Immediate local Assistance connects you with those nearby who need your immediate help while touring  your city. </p>
                    <p className='text-[14px] mt-6'>
                        Set yourself a Immediate local assistant & Earn money !</p>
                    <p className='text-[14px] mt-6 font-semibold text-[#2e2c43]'>Download app now to know more....</p>
                </div>
                <div className='md:transform md:scale-150 max-md:scale-150 '>
                    <img src={earning2} alt="logo" loading='lazy' width="325px" height="304px" className='scale-125' />
                </div>
            </div>

            <div className='mt-[30px] md:mt-[100px] md:w-10/12'>
                <h3 className='text-[14px] font-bold text-[#ff2e00]'>Terms and Conditions:</h3>
                <p className='text-[14px] text-[#ff2e00]'>We will deduct 20% of the amount of your earnings set. It will cover the charges of payment gateways, taxes and small bucks for our R&D to serve you better in future.

                </p>
                <p className='text-[14px]  text-[#ff2e00] mt-4'>The customer is directly chargeable for 4% international exchange charges & 3% for payment gateway charges.

                </p>
                <p className='text-[14px] text-[#ff2e00] mt-4'>You will not earn money for your low user rating services, Money will get refunded to the customer in this case.</p>
            </div>
        </div>
    )
}

export default Earn
