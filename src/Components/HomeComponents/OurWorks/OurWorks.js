import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./OurWorks.scss"
import { CarouselFive, CarouselFour, CarouselOne, CarouselTwo } from '../../../images';

const options = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    margin: 20,
    dots: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 3
        }
    }
}
const OurWorks = () => {
    return (
        <section className="py-5 bg-primary">
            <h2 className="text-white text-center mt-3">Here are some of <span className="text-success">our works</span></h2>
            <div className="container">
                <OwlCarousel className='owl-theme mt-5 pb-md-0 mb-5'
                    {...options}
                >
                    <div><img src={CarouselOne} alt="" /></div>
                    <div><img src={CarouselTwo} alt="" /></div>
                    <div><img src={CarouselFive} alt="" /></div>
                    <div><img src={CarouselFour} alt="" /></div>
                    <div><img src={CarouselTwo} alt="" /></div>
                    <div><img src={CarouselFive} alt="" /></div>

                </OwlCarousel>
            </div>
        </section>
    );
};

export default OurWorks;