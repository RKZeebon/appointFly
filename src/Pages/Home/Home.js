import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from './Banner/Banner';
import Scheduling from './Scheduling/Scheduling';

const Home = () => {
    return (
        <div className='px-5 lg:w-5/6 mx-auto'>
            <Navbar />
            <Banner />
            <Scheduling />
        </div>
    );
};

export default Home;