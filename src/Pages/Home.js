import React from 'react';
import HeaderMain from '../Components/HeaderMain/HeaderMain';
import HeroComponent from '../Components/HeroComponent/HeroComponent';
import OurCustomers from '../Components/OurCustomers/OurCustomers';
import Services from '../Components/Services/Services';

const Home = () => {
    return (
        <>
            <HeroComponent />
            <OurCustomers />
            <Services />
        </>
    );
};

export default Home;