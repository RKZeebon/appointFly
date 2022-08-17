import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div className='px-5 lg:w-5/6 mx-auto'>
            <Navbar />
            <Banner />
        </div>
    );
};

export default Home;