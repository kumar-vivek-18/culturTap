import React, { useState } from 'react';
import axios from 'axios';
import '../../index.css';
const ContactElement = ({ details }) => {
    const [data, setData] = useState({
        name: "",
        countryCode: "+91",
        mobileNo: "",
        email: "",
        concern: "",
    });

    const HandleChange = (e) => {
        setData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const HandleSubmit = async (e) => {
        e.preventDefault();
        console.log(data);
        // const res = await axios.post(``);

        setData({ name: "", countryCode: "", mobileNo: "", email: "", concern: "" });
    }

    return (
        <div className='max-lg:pl-[20px] lg:ml-[180px] md:mt-[66px] max-sm:pt-[100px] overflow-x-hidden'>
            <div>
                <h2 className='text-[40px] heading-color font-bold  max-sm:text-[28px]'>{details.type}</h2>
                <p className='text-[16px] text-[#001b33]'>{details.title}</p>
            </div>

            <div className='md:mt-[69px] flex max-lg:flex-col-reverse max-lg:justify-center  md:gap-[150px] '>
                <form action="" className='flex flex-col items-center gap-6'>
                    <div>
                        <p className='text-[14px] text-[#2e2c43] pl-4 pb-2'>Name</p>
                        <input type="text"
                            placeholder='Kishor Kumar'
                            name='name'
                            value={data.name}
                            onChange={HandleChange}
                            required
                            className='w-[350px] h-[54px] rounded-2xl bg-[#f9f9f9] stroke-[#2e2c43] outline-none px-[31px] text-[#dbcdbb]'
                        />
                    </div>
                    <div className='flex gap-[16px]'>
                        <div>
                            <p className='text-[14px] text-[#2e2c43] pl-4 pb-2'>Country Code</p>
                            <input type="text"
                                placeholder='+91'
                                name='countryCode'
                                value={data.countryCode}
                                onChange={HandleChange}
                                required
                                className='w-[104px] h-[54px] rounded-2xl bg-[#f9f9f9] stroke-[#2e2c43] outline-none px-[31px] text-[#dbcdbb]'
                            />
                        </div>
                        <div>
                            <p className='text-[14px] text-[#2e2c43] pl-4 pb-2'>Mobile number</p>
                            <input type="text"
                                placeholder='8088790488'
                                name='mobileNo'
                                value={data.mobileNo}
                                onChange={HandleChange}
                                required
                                className='w-[230px] h-[54px] rounded-2xl bg-[#f9f9f9] stroke-[#2e2c43] outline-none px-[31px] text-[#dbcdbb]'
                            />
                        </div>
                    </div>
                    <div>
                        <p className='text-[14px] text-[#2e2c43] pl-4 pb-2'>Email</p>
                        <input type="email"
                            placeholder='shrivastavaaishwary@gmail.com'
                            name='email'
                            value={data.email}
                            onChange={HandleChange}
                            required
                            className='w-[350px] h-[54px] rounded-2xl bg-[#f9f9f9] stroke-[#2e2c43] outline-none px-[31px] text-[#dbcdbb]'
                        />
                    </div>
                    <div>
                        <p className='text-[14px] text-[#2e2c43] pl-4 pb-2'>Your concern</p>
                        <textarea
                            placeholder='type here...'
                            name='concern'
                            cols="30" rows="10"
                            value={data.concern}
                            onChange={HandleChange}
                            required
                            className='w-[350px] h-[180px] rounded-2xl bg-[#f9f9f9] stroke-[#2e2c43] outline-none px-[31px] py-[18px] text-[#dbcdbb]'
                        />
                    </div>
                    <button onClick={HandleSubmit} className='w-[300px] md:w-[350px] h-[74px] bg-[#fb8c00] rounded-md text-white font-bold text-[18px]'>{details.submit}</button>
                </form>

                <div>
                    <img src={details.img} alt="contact" className='flex  w-[754px] h-[535px] scale-150  ' />
                </div>
            </div>
        </div>
    )
}

export default ContactElement
