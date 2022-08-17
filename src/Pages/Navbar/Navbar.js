import React from 'react';

const Navbar = () => {
    return (
        <div className='flex items-center justify-between p-5'>
            <div>
                <h1 className='text-3xl font-bold'>AppointFly</h1>
            </div>
            <div>
                <ul className='flex items-center gap-4 font-semibold'>
                    <li>Individuals</li>
                    <li>Industries</li>
                    <li>Features</li>
                    <li>Integrations</li>
                    <li>Pricing</li>
                </ul>
            </div>
            <div className='flex items-center gap-4 font-semibold'>
                <button>Login</button>
                <button className='bg-[#345dee] px-4 py-2 rounded-xl text-white'>Sign Up</button>
            </div>
        </div>
    );
};

export default Navbar;