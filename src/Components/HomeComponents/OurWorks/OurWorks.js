import React from 'react';
import "./OurWorks.scss"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CarouselFive, CarouselFour, CarouselOne, CarouselThree, CarouselTwo } from '../../../images';

const OurWorks = () => {
    return (
        <section className="py-5 bg-primary">
            <h2 className="text-white text-center mt-3">Here are some of <span className="text-success">our works</span></h2>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-8 offset-md-2">

                        <Carousel showStatus={true} autoPlay={true} infiniteLoop={true} showArrows={true} showThumbs={false} >
                            <div>
                                <img src={CarouselOne} alt="carousel-img" className="" />
                                <p className="legend">Carousel 1</p>
                            </div>
                            <div>
                                <img src={CarouselTwo} alt="carousel-img" className="" />
                                <p className="legend">Carousel 2</p>
                            </div>
                            <div>
                                <img src={CarouselOne} alt="carousel-img" className="" />
                                <p className="legend">Carousel 3</p>
                            </div>
                            <div>
                                <img src={CarouselFour} alt="carousel-img" className="" />
                                <p className="legend">Carousel 4</p>
                            </div>
                            <div>
                                <img src={CarouselFive} alt="carousel-img" className="" />
                                <p className="legend">Carousel 5</p>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurWorks;