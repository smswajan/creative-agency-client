import React from 'react';
import HeaderMain from '../Components/HeaderMain/HeaderMain';
import HeroComponent from '../Components/HeroComponent/HeroComponent';
import OurCustomers from '../Components/OurCustomers/OurCustomers';
import OurWorks from '../Components/OurWorks/OurWorks';
import Services from '../Components/Services/Services';
import Testimonials from '../Components/Testimonials/Testimonials';

const Home = () => {
    return (
        <>
            <HeroComponent />
            <OurCustomers />
            <Services />
            <OurWorks />
            <Testimonials />
        </>
    );
};

export default Home;