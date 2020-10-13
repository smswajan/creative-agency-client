import React from 'react';
import ContactUs from '../Components/HomeComponents/ContactUs/ContactUs';
import OurCustomers from '../Components/HomeComponents/OurCustomers/OurCustomers';
import OurWorks from '../Components/HomeComponents/OurWorks/OurWorks';
import Testimonials from '../Components/HomeComponents/Testimonials/Testimonials';
import HeroComponent from '../Components/HomeComponents/HeroComponent/HeroComponent';
import Services from '../Components/HomeComponents/Services/Services';

const Home = () => {
    return (
        <>
            <HeroComponent />
            <OurCustomers />
            <Services />
            <OurWorks />
            <Testimonials />
            <ContactUs />
        </>
    );
};

export default Home;