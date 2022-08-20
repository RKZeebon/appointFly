import React from 'react';
import bannerImg from '../../../Assets/banner.png'

const Banner = () => {
    return (
        <div className='items-center mt-4 grid grid-cols-2 gap-4'>
            <div>
                <h1 className='text-[72px] font-semibold leading-[80px] mb-2'>Schedule Appointments on the Fly!</h1>
                <p className='mb-2'>Free scheduling tool for individuals and businesses. Online booking, payments, smart reminders and more.</p>
                <div className='mb-2 text-xl'>
                    <input className='p-2 rounded-lg mr-4 border border-gray-500' type="email" name="" id="" placeholder='type your e-mail' />
                    <button className='bg-[#345dee] px-4 py-2 rounded-lg text-white'>Get Started</button>
                </div>
                <p>Create your account free. No credit card required.</p>
            </div>
            <div className='flex justify-center'>
                <img className='w-[469px]' src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;