import React from 'react';
import scheduling from '../../../Assets/scheduling.png'

const Scheduling = () => {
    return (
        <div className='mt-10'>
            <h1 className='text-4xl font-bold text-center mb-3'>The easiest way to turn <br />your passion into income</h1>
            <p className='text-center'>Create screens directly in Method or add your images from Sketch or Figma. <br />You can even sync designs from your cloud storage!</p>
            <div className='mt-8 grid grid-cols-2 items-center gap-4'>
                <div>
                    <h3 className='text-3xl font-semibold'>Link your calendar and publish your booking page</h3>
                    <p>Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage! You can evensync designs from your cloud storage!</p>
                </div>
                <div>
                    <img src={scheduling} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Scheduling;